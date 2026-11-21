// Gestos em espaço 3D. As distâncias são proporcionais à largura dos ombros.
const BodyMotion = (() => {
    const v = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
    const pos = node => node.getWorldPosition(v());
    const rot = node => node.getWorldQuaternion(new THREE.Quaternion());
    const ease = t => t * t * (3 - 2 * t);
    const supports = type => ['Palma', 'Peito', 'Coxa'].includes(type);

    // Base ortonormal da mão: direção dos dedos e normal da palma.
    function handFrame(fingers, normal) {
        const y = fingers.clone().normalize().negate();
        const x = y.clone().cross(normal).normalize();
        return new THREE.Quaternion().setFromRotationMatrix(
            new THREE.Matrix4().makeBasis(x, y, x.clone().cross(y))
        );
    }

    function pointBone(bone, child, target) {
        const origin = pos(bone);
        const from = pos(child).sub(origin).normalize();
        const to = target.clone().sub(origin).normalize();
        const world = new THREE.Quaternion().setFromUnitVectors(from, to).multiply(rot(bone));
        bone.quaternion.copy(rot(bone.parent).invert().multiply(world));
    }

    function begin(avatar, side, type, impact) {
        const p = avatar.parts[side];
        const wrist = avatar.isGLB ? p.wrist : p.meshes.Palma;
        if (!wrist || !p.armPivot || !p.forearmPivot || !p.legPivot || !p.shinPivot ||
            !avatar.parts[side === 'L' ? 'R' : 'L'].armPivot) return false;
        const joints = [p.armPivot, p.forearmPivot, wrist];
        const now = performance.now();
        const old = p.stroke;
        p.stroke = {type, joints, start: now, impact: Math.max(impact, now + 1),
            entry: joints.map(joint => joint.quaternion.clone()),
            base: old?.base || joints.map(joint => joint.quaternion.clone())};
        return true;
    }

    function prepareTorso(avatar) {
        if (avatar.isGLB) return;
        // Nos modelos construídos de frente, +X é o lado esquerdo da pessoa.
        if (avatar.parts.L.armPivot.position.x < avatar.parts.R.armPivot.position.x) {
            [avatar.parts.L, avatar.parts.R] = [avatar.parts.R, avatar.parts.L];
        }
        const pivot = new THREE.Group();
        pivot.position.y = 18;
        for (const child of [...avatar.group.children]) {
            if (child.position.y <= 20) continue;
            child.position.y -= pivot.position.y;
            pivot.add(child);
        }
        avatar.group.add(pivot);
        avatar.torso = pivot;
        for (const part of Object.values(avatar.parts)) {
            part.armPivot.userData.restingRot.x = -.14;
            part.forearmPivot.userData.restingRot.x = -.46;
            part.armPivot.rotation.copy(part.armPivot.userData.restingRot);
            part.forearmPivot.rotation.copy(part.forearmPivot.userData.restingRot);
        }
    }

    function lean(avatar, now, delta, walking = 0) {
        const torso = avatar.torso;
        if (!torso) return;
        let forward = 0, lateral = 0;
        const atRest = walking < .01 && Object.values(avatar.parts).every(part =>
            !part.stroke && !part.armPivot?.userData.isAnimating && !part.legPivot?.userData.isAnimating);
        if (atRest && avatar.restTiming) {
            const {period, offset, side} = avatar.restTiming;
            const phase = (now + offset) % period;
            if (phase < 2100) {
                const shift = Math.sin(Math.PI * phase / 2100) ** 2;
                forward = .012 * shift;
                lateral = side * .018 * shift;
            }
        }
        for (const side of ['L', 'R']) {
            const stroke = avatar.parts[side].stroke;
            if (!stroke) continue;
            const t = now < stroke.impact ? (now - stroke.start) / (stroke.impact - stroke.start)
                : 1 - (now - stroke.impact) / 240;
            const w = ease(THREE.MathUtils.clamp(t, 0, 1));
            forward = Math.max(forward, w * (stroke.type === 'Coxa' ? .18 : .045));
            if (stroke.type === 'Coxa') lateral += (side === 'L' ? -1 : 1) * .12 * w;
        }
        const k = 1 - Math.exp(-28 * delta);
        torso.rotation.x += (avatar.restTorso.x + forward - torso.rotation.x) * k;
        torso.rotation.z += (avatar.restTorso.z + lateral - torso.rotation.z) * k;
    }

    function restore(p) {
        const stroke = p.stroke;
        if (stroke) stroke.joints.forEach((joint, i) => joint.quaternion.copy(stroke.base[i]));
    }

    function pose(avatar, side, now) {
        const p = avatar.parts[side], stroke = p.stroke;
        if (!stroke) return;
        // Calcule o alcance no espaço do corpo, antes da variação de largura.
        const scale = avatar.group.scale;
        const sx = scale.x, sz = scale.z;
        scale.x = scale.z = scale.y;
        try { solve(avatar, side, now, p, stroke); }
        finally { scale.x = sx; scale.z = sz; }
    }

    function solve(avatar, side, now, p, stroke) {
        const {type, joints, start, impact} = stroke;
        const [arm, elbow, wrist] = joints;
        stroke.base = joints.map(joint => joint.quaternion.clone());
        const after = now - impact;
        const release = type === 'Coxa' ? 250 : 300;
        if (after >= release) { p.stroke = null; return; }

        const shoulder = pos(arm);
        const other = pos(avatar.parts[side === 'L' ? 'R' : 'L'].armPivot);
        const width = shoulder.distanceTo(other);
        const outward = shoulder.clone().sub(other).normalize();
        const up = v(0, 1, 0).applyQuaternion(rot(avatar.group));
        const front = v(0, 0, 1).applyQuaternion(rot(avatar.group));
        if (p.foot && p.toe && pos(p.toe).sub(pos(p.foot)).dot(front) < 0) front.negate();
        const frame = (lateral, vertical, forward) => outward.clone().multiplyScalar(lateral)
            .addScaledVector(up, vertical).addScaledVector(front, forward);
        const center = shoulder.clone().lerp(other, 0.5);
        let contact, fingers, normal;
        if (type === 'Palma') {
            contact = center.addScaledVector(up, -0.19 * width).addScaledVector(front, 0.55 * width);
            fingers = frame(-0.06, .82, .55);
            normal = outward.clone().negate();
        } else if (type === 'Peito') {
            contact = center.addScaledVector(outward, .16 * width).addScaledVector(up, -.23 * width)
                .addScaledVector(front, .27 * width);
            const pad = p.meshes.Peito;
            if (p.chestContact) contact.copy(pos(p.chestContact));
            if (!avatar.isGLB && pad?.geometry) {
                if (!pad.geometry.boundingBox) pad.geometry.computeBoundingBox();
                pad.updateWorldMatrix(true, false);
                const surface = pad.geometry.boundingBox.getCenter(v());
                surface.z = pad.geometry.boundingBox.max.z;
                contact.copy(pad.localToWorld(surface));
            }
            fingers = frame(-.85, .53, 0);
            normal = front.clone().negate();
        } else {
            contact = pos(p.legPivot).lerp(pos(p.shinPivot), .24)
                .addScaledVector(front, width * .15).addScaledVector(outward, width * .055);
            if (p.thighContact) contact.copy(pos(p.thighContact));
            fingers = frame(-.20, -.98, 0);
            normal = front.clone().negate();
        }
        fingers.normalize();
        const upper = shoulder.distanceTo(pos(elbow));
        const lower = pos(elbow).distanceTo(pos(wrist));
        if (upper < 0.0001 || lower < 0.0001) return;
        let palmLength = lower * .25;
        let localFrame = new THREE.Quaternion();
        if (p.middle && p.index && p.pinky) {
            const middle = wrist.worldToLocal(pos(p.middle));
            const across = wrist.worldToLocal(pos(p.index)).sub(wrist.worldToLocal(pos(p.pinky)));
            const palmNormal = middle.clone().cross(across).multiplyScalar(side === 'L' ? 1 : -1);
            localFrame = handFrame(middle, palmNormal);
            palmLength = pos(p.middle).distanceTo(pos(wrist)) * .58;
        }
        const orientation = handFrame(fingers, normal).multiply(localFrame.invert());
        const wristGoal = contact.clone().addScaledVector(fingers, -palmLength)
            .addScaledVector(normal, -width * .032);
        const axis = wristGoal.clone().sub(shoulder).normalize();
        const distance = THREE.MathUtils.clamp(shoulder.distanceTo(wristGoal),
            Math.abs(upper - lower) + .0001, upper + lower - .0001);
        const along = (upper * upper - lower * lower + distance * distance) / (2 * distance);
        const pole = frame(1, -.85, -.14);
        pole.addScaledVector(axis, -pole.dot(axis)).normalize();
        const elbowGoal = shoulder.clone().addScaledVector(axis, along)
            .addScaledVector(pole, Math.sqrt(Math.max(0, upper * upper - along * along)));
        pointBone(arm, elbow, elbowGoal);
        pointBone(elbow, wrist, wristGoal);
        wrist.quaternion.copy(rot(wrist.parent).invert().multiply(orientation));

        // Aproximação, instante de contato e soltura mais lenta. Uma nova
        // batida parte da pose visível, mesmo se a anterior ainda estiver voltando.
        const approach = after < 0;
        const t = approach ? (now - start) / (impact - start) : 1 - Math.max(0, after - 18) / (release - 18);
        const weight = ease(THREE.MathUtils.clamp(t, 0, 1));
        joints.forEach((joint, i) => joint.quaternion.slerp(
            approach ? stroke.entry[i] : stroke.base[i], 1 - weight));
    }
    return {supports, begin, restore, pose, prepareTorso, lean};
})();

function setupStageSettings(scene, floor, grid, light) {
    const themes = {
        studio: [0x2a1f1a, 0x3d271d], theatre: [0x1d1423, 0x543927],
        dance: [0x42302b, 0x79674f], park: [0x89979b, 0x666766]
    };
    const sets = new Map();
    function scenery(name) {
        const group = new THREE.Group();
        function prop(geometry, color, x, y, z) {
            const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({color}));
            mesh.position.set(x, y, z);
            group.add(mesh);
            return mesh;
        }
        if (name === 'theatre') {
            prop(new THREE.BoxGeometry(365, 100, 2), 0x211725, 0, 48, -163);
            const fold = new THREE.CylinderGeometry(6, 8, 102, 12);
            for (const side of [-1, 1]) for (let i = 0; i < 9; i++) {
                prop(fold, i % 2 ? 0x701b36 : 0x9b2945, side * (55 + i * 9), 50, -151);
            }
        } else if (name === 'dance') {
            buildBallroom(prop);
        } else if (name === 'park') {
            buildCityPlaza(prop);
        }
        if (name === 'dance' || name === 'park') group.userData.floorMap = plazaOrParquet(name === 'park');
        scene.add(group);
        return group;
    }
    document.getElementById('stage-setting').addEventListener('change', event => {
        const name = event.target.value;
        for (const group of sets.values()) group.visible = false;
        if (!sets.has(name)) sets.set(name, scenery(name));
        sets.get(name).visible = true;
        scene.background.setHex(themes[name][0]);
        scene.fog.color.copy(scene.background);
        scene.fog.near = name === 'park' || name === 'dance' ? 160 : 100;
        scene.fog.far = name === 'park' || name === 'dance' ? 560 : 400;
        floor.map = sets.get(name).userData.floorMap || null;
        floor.roughness = name === 'park' ? .95 : name === 'dance' ? .77 : .45;
        floor.metalness = floor.map ? 0 : .1;
        floor.needsUpdate = true;
        floor.color.setHex(themes[name][1]);
        grid.visible = name === 'studio';
        light.intensity = name === 'park' ? .54 : .4;
    });
}
