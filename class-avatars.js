const classStyles = [
    ['professora', 'Professora de percussão', '🪘', 'Humana', 'Guia adulta com articulações anatômicas e roupa de ensaio.'],
    ['aluna', 'Aluna', '👧🏾', 'Humana', 'Criança com proporções infantis e roupa esportiva.'],
    ['menino', 'Menino animado', '🧒', 'Animação', 'Personagem de franja, camiseta turquesa e bermuda.'],
    ['capivara', 'Capivara percussionista', '🐾', 'Mascote', 'Uma capivara de camiseta verde com patas que acompanham o ritmo.'],
    ['robo_expressivo', 'Robô expressivo', '🤖', 'Animação', 'O robô articulado de Tomás Laulhé e Don McCurdy, adaptado para percussão.']
].map(([id,name,icon,badge,description]) => ({
    id, name, icon, badge, description, subtitle:'Percussão corporal', badgeColor:'#286763', features:[]
}));
const classFiles = {professora:'professora.glb', aluna:'aluna.glb', robo_expressivo:'robot-expressive.glb'};
const classTemplates = new Map();
let classLoad;
function loadClassModels() {
    if (!classLoad) {
        const loader = new THREE.GLTFLoader();
        classLoad = Promise.all(Object.entries(classFiles).map(async ([id,file]) => {
            try { classTemplates.set(id, await loader.loadAsync(file)); }
            catch (error) { console.warn('Modelo indisponível:', file, error); }
        }));
    }
    return classLoad;
}

// Mesma pessoa e mesmo porte no mesmo lugar, mesmo ao alternar a formação.
function classMember(index) {
    const fraction = seed => {
        const n = Math.sin((index + 1) * 73.13 + seed * 19.37) * 43758.5453;
        return n - Math.floor(n);
    };
    return {height:.92 + .16 * fraction(1), width:.92 + .17 * fraction(2),
        skin:fraction(3), shirt:fraction(4), pants:fraction(5)};
}

function addCurlyHair(head, child) {
    const curls = [];
    const top = child ? .136 : .156;
    for (let row=0;row<=6;row++) {
        const count=3+row*5;
        for(let i=0;i<count;i++) {
            const azimuth=(i+row*.45)*2*Math.PI/count;
            const angle=row/6*(1.65-.56*Math.cos(azimuth));
            curls.push([.073*Math.sin(angle)*Math.sin(azimuth),
                top-.092+.092*Math.cos(angle),.087*Math.sin(angle)*Math.cos(azimuth)-.004,
                .022,.021,.022]);
        }
    }
    if (child) for(const side of [-1,1]) for(let i=0;i<64;i++) {
        const t=(i+.5)/64, phi=i*2.39996, r=Math.sqrt(1-(1-2*t)**2);
        curls.push([side*.083+.039*r*Math.cos(phi),.111+.043*(1-2*t),-.026+.043*r*Math.sin(phi),.016,.017,.016]);
    }
    const hair=new THREE.InstancedMesh(new THREE.SphereGeometry(1,8,6),
        new THREE.MeshStandardMaterial({color:0x38251f,roughness:.94}),curls.length);
    const transform=new THREE.Object3D();
    curls.forEach(([x,y,z,w,h,d],i)=>{
        transform.position.set(x,y,z);transform.scale.set(w,h,d);
        transform.updateMatrix();hair.setMatrixAt(i,transform.matrix);
    });
    head.add(hair);
}

let contactShadow;
function addContactShadow(avatar, size) {
    if (!contactShadow) {
        const c=document.createElement('canvas');c.width=c.height=64;
        const brush=c.getContext('2d'),fade=brush.createRadialGradient(32,32,2,32,32,31);
        fade.addColorStop(0,'rgba(38,27,23,.38)');fade.addColorStop(.48,'rgba(38,27,23,.18)');
        fade.addColorStop(1,'rgba(38,27,23,0)');brush.fillStyle=fade;brush.fillRect(0,0,64,64);
        contactShadow=new THREE.CanvasTexture(c);
    }
    const footprint=new THREE.Mesh(new THREE.PlaneGeometry(size,size*.62),
        new THREE.MeshBasicMaterial({map:contactShadow,transparent:true,depthWrite:false}));
    footprint.rotation.x=-Math.PI/2;
    footprint.position.y=(.12-avatar.groundY)/avatar.group.scale.y;
    footprint.userData.ownedGeometry=true;
    avatar.group.add(footprint);
    avatar.contactShadow=footprint;
}

function buildCartoon(style, isMain, x, z, scale) {
    const capy = style === 'capivara';
    const group = new THREE.Group(), parts = {};
    group.position.set(x,0,z);
    group.scale.setScalar(scale * (capy ? .82 : .85));
    const mat = color => new THREE.MeshStandardMaterial({color,roughness:.87});
    const skin=mat(capy ? 0xb7723d : 0xe9ae82), hair=mat(capy ? 0x67402b : 0x29212a);
    const shirt=mat(capy ? 0x79bba4 : 0x188c96), shorts=mat(capy ? 0xa2673a : 0xb85834);
    const ivory=mat(0xf4e3c6), black=mat(0x241b1c), sole=mat(0x384958);
    const ball = new THREE.SphereGeometry(1,16,12);
    function oval(parent,material,x,y,z,w,h,d) {
        const mesh=new THREE.Mesh(ball,material);
        mesh.position.set(x,y,z);mesh.scale.set(w,h,d);parent.add(mesh);return mesh;
    }
    function pivot(parent,x,y,z) {
        const node=new THREE.Group();
        node.position.set(x,y,z);node.userData.restingRot=node.rotation.clone();
        parent.add(node);return node;
    }
    function profile(parent,material,rings,depth) {
        const mesh=new THREE.Mesh(new THREE.LatheGeometry(rings.map(([y,r]) => new THREE.Vector2(r,y)),24),material);
        mesh.scale.z=depth; parent.add(mesh);return mesh;
    }
    const torso=pivot(group,0,25,0);
    profile(torso,shirt,[[-7,0],[-7,5.7],[-6,6.2],[0,6.9],[4,7.4],[6,6.8],[7,4.2],[7.5,2],[7.5,0]],.76);
    oval(group,shorts,0,17.9,0,5.8,3.1,4.3);
    oval(torso,skin,0,7.6,0,2,3,2.1);
    const head=pivot(group,0,38.3,0);
    oval(head,skin,0,0,0,capy?6.1:5.8,capy?5.5:6.3,5.1);
    for (const sign of [-1,1]) {
        oval(head,skin,sign*(capy?4.55:5.47),capy?4.6:0,capy?-.3:0,1.25,1.6,.9);
        oval(head,mat(capy?0x815034:0xc58767),sign*(capy?4.55:5.47),capy?4.7:0,.65,.65,.92,.31);
        const eyeX=sign*(capy?3.24:2.05),eyeZ=capy?3.82:4.68;
        if (!capy) oval(head,ivory,eyeX,.62,eyeZ,1.04,1.22,.48);
        oval(head,black,eyeX,.68,eyeZ+.38,capy?.53:.68,capy?.65:.9,.29);
        oval(head,ivory,eyeX+.15,.95,eyeZ+.64,.19,.22,.09);
        if (!capy) {
            oval(head,hair,eyeX,2.21,eyeZ-.12,1.15,.23,.31).rotation.z=sign*.12;
            for (let i=0;i<3;i++) oval(head,mat(0xae7052),sign*(2.1+i*.34),-.63+(i%2)*.19,4.64-i*.22,.12,.10,.09);
        }
    }
    if (capy) {
        // Focinho comprido, largo e de ponta romba característico da capivara.
        const muzzleShape=ball.clone(), coords=muzzleShape.attributes.position;
        const blunt=n=>Math.sign(n)*Math.pow(Math.abs(n),.69);
        for(let i=0;i<coords.count;i++) coords.setXYZ(i,blunt(coords.getX(i))*3.72,
            blunt(coords.getY(i))*2.48,blunt(coords.getZ(i))*3.94);
        muzzleShape.computeVertexNormals();
        const muzzle=new THREE.Mesh(muzzleShape,mat(0xb98758));
        muzzle.position.set(0,-.92,4.67);head.add(muzzle);
        for(const sign of [-1,1]) {
            oval(head,hair,sign*1.42,-.04,8.42,.49,.26,.18);
            oval(head,ivory,sign*.44,-3.15,7.05,.44,.56,.26);
        }
    } else {
        oval(head,skin,0,-.68,5.1,.69,.72,.75);
        oval(head,mat(0x9c5849),0,-2.02,4.88,.95,.18,.18);
        oval(head,hair,0,3.78,-.55,5.8,3.0,5.0);
        for(let i=0;i<5;i++)
            oval(head,hair,-3.6+i*1.64,3.5-i*.14,3.15,1.55,2.15,1.4).rotation.z=-.52;
    }
    for(const side of ['L','R']) {
        const s=side==='L'?1:-1;
        const arm=pivot(group,s*6.75,30.5,0),elbow=pivot(arm,0,-7.4,0);
        oval(arm,skin,0,-4.1,0,1.72,4.55,1.8);
        oval(arm,shirt,0,-1.55,0,2.47,3.43,2.53);
        oval(elbow,skin,0,-3.3,0,1.57,4.16,1.62);
        const wrist=pivot(elbow,0,-7.1,0);
        oval(wrist,skin,0,-1.55,0,1.56,2.05,.7);
        for (let j=0;j<4;j++) oval(wrist,skin,s*(j-1.5)*.61,-3.18,0,.37,1.23-Math.abs(j-1)*.13,.41);
        oval(wrist,skin,-s*1.4,-1.95,.10,.49,1.12,.55).rotation.z=-s*.43;
        const leg=pivot(group,s*3.28,17.4,0),knee=pivot(leg,0,-8,0);
        const thigh=oval(leg,shorts,0,-2.9,0,3,5.6,3.05);
        oval(knee,skin,0,-3.4,0,2.05,4.64,2.14);
        const foot=pivot(knee,0,-7.4,0);
        oval(foot,capy?skin:sole,0,-.13,1.05,2.23,1.83,3.46);
        if(!capy) oval(foot,ivory,0,-1.17,1.18,2.27,.72,3.5);
        const pad=oval(torso,shirt,s*2.65,2.1,3.95,2.6,2.7,1.2);
        pad.visible=false;
        // Grupos de contato conservam escala unitária durante os realces.
        foot.material=sole;wrist.material=skin;
        parts[side]={armPivot:arm,forearmPivot:elbow,legPivot:leg,shinPivot:knee,
            meshes:{Palma:wrist,Estalo:wrist,Peito:pad,Coxa:thigh,'Pé':foot}};
    }
    return {group,parts,isMain,groundY:0};
}
