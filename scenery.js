// Texturas repetíveis, criadas uma vez para cada cenário.
function plazaOrParquet(plaza) {
    const canvas=document.createElement('canvas');
    canvas.width=canvas.height=512;
    const c=canvas.getContext('2d');
    let seed=524;
    function random() { seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296; }
    c.fillStyle=plaza?'#62594c':'#553420';c.fillRect(0,0,512,512);
    if (plaza) {
        // Pedras desencontradas em faixas curvas de basalto e granito.
        for (let row=0;row<32;row++) for(let col=-1;col<33;col++) {
            const x=16*col+(row%2)*8,y=row*16;
            const wave=Math.sin(2*Math.PI*(x+8)/512)*43;
            const band=((y-wave+512)%256);
            const hue=band<51 ? 211 : band<68 ? 22 : 36;
            const lum=(band<51 ? 31 : band<68 ? 50 : 64)+(random()-.5)*9;
            c.fillStyle='hsl('+hue+', '+(band<51?12:22)+'%, '+lum+'%)';
            c.beginPath();c.roundRect(x+.6,y+.6,14.9,14.9,2);c.fill();
            c.fillStyle='rgba(255,235,201,.20)';c.fillRect(x+2,y+1.1,11,1);
        }
    } else {
        for(let j=0;j<4;j++) for(let i=0;i<4;i++) {
            c.save();c.translate(i*128+64,j*128+64);
            if((i+j)%2)c.rotate(Math.PI/2);
            for(let n=0;n<5;n++) {
                const y=-64+n*25.6;
                c.fillStyle='hsl('+ (26+random()*6) +', 39%, '+ (40+random()*9) +'%)';
                c.fillRect(-63.5,y+.55,127,24.8);
                for(let line=0;line<20;line++) {
                    const h=y+1+random()*23, bend=(random()-.5)*5;
                    c.strokeStyle=random()>.55?'rgba(255,209,145,.19)':'rgba(72,39,22,.22)';
                    c.lineWidth=.35+random()*.65;
                    c.beginPath();c.moveTo(-63,h);c.bezierCurveTo(-30,h+bend,22,h-bend,63,h+.55*bend);c.stroke();
                }
            }
            c.restore();
        }
    }
    const tex=new THREE.CanvasTexture(canvas);
    tex.wrapS=tex.wrapT=THREE.RepeatWrapping;tex.repeat.set(plaza?9:11,plaza?9:11);
    tex.anisotropy=8;
    return tex;
}

function buildBallroom(prop) {
    const wall=prop(new THREE.BoxGeometry(520,104,4),0x664030,0,50,-228);
    const c=document.createElement('canvas');c.width=1024;c.height=512;
    const g=c.getContext('2d');
    g.fillStyle='#764c37';g.fillRect(0,0,1024,512);
    g.fillStyle='#3c2724';g.fillRect(0,344,1024,168);
    for(let i=0;i<4;i++) {
        const x=16+i*256;
        const glass=g.createLinearGradient(0,40,0,325);
        glass.addColorStop(0,'#354c60');glass.addColorStop(.5,'#978774');glass.addColorStop(1,'#494c4e');
        g.fillStyle=glass;g.strokeStyle='#d2ab69';g.lineWidth=8;
        g.beginPath();g.moveTo(x+15,323);g.lineTo(x+15,157);
        g.bezierCurveTo(x+15,32,x+210,32,x+210,157);g.lineTo(x+210,323);g.closePath();g.fill();g.stroke();
        g.lineWidth=4;g.beginPath();g.moveTo(x+112,69);g.lineTo(x+112,323);
        g.moveTo(x+18,170);g.lineTo(x+207,170);g.stroke();
        g.strokeStyle='#a67849';g.lineWidth=3;g.strokeRect(x,375,222,104);
        g.strokeStyle='#a77c54';g.strokeRect(x+5,380,212,94);
    }
    for (const y of [12,20,341,352,494]) {g.fillStyle='#bf995c';g.fillRect(0,y,1024,y===341?8:3);}
    const panel=new THREE.CanvasTexture(c);panel.wrapS=THREE.RepeatWrapping;panel.repeat.x=3;
    wall.material.map=panel;wall.material.color.setHex(0xffffff);
    for(const x of [-194,-97,0,97,194]) {
        prop(new THREE.BoxGeometry(2,37,2),0xac8350,x,25,-224);
        const lamp=prop(new THREE.SphereGeometry(3.3,12,10),0xffcf80,x,45,-221);
        lamp.material.emissive.setHex(0xdc9846);lamp.material.emissiveIntensity=.55;
    }
    for(const side of [-1,1]) {
        prop(new THREE.BoxGeometry(4,102,420),0x593e35,side*259,50,-23);
        prop(new THREE.BoxGeometry(5,1.4,420),0xb28d5a,side*258,34,-23);
        const x=side*77, z=-155;
        prop(new THREE.CylinderGeometry(.24,.24,23,8),0xa78351,x,77,z);
        prop(new THREE.SphereGeometry(1.8,12,10),0xbd9856,x,65,z);
        const rim=prop(new THREE.TorusGeometry(7,.42,8,36),0xc29a61,x,65,z);
        rim.rotation.x=Math.PI/2;
        for(let i=0;i<8;i++) {
            const dx=7*Math.cos(i*Math.PI/4), dz=7*Math.sin(i*Math.PI/4);
            prop(new THREE.CylinderGeometry(.27,.35,2.4,8),0xc29a61,x+dx,66,z+dz);
            const bulb=prop(new THREE.SphereGeometry(1.18,10,8),0xffdfaa,x+dx,67.8,z+dz);
            bulb.material.emissive.setHex(0xdb9e4f);
        }
    }
}

function buildCityPlaza(prop) {
    const canvas=document.createElement('canvas');canvas.width=2048;canvas.height=512;
    const g=canvas.getContext('2d');
    const sky=g.createLinearGradient(0,0,0,425);
    sky.addColorStop(0,'#566f88');sky.addColorStop(.58,'#8f9da1');sky.addColorStop(1,'#d3ab87');
    g.fillStyle=sky;g.fillRect(0,0,2048,512);
    let seed=192;const rnd=()=>{seed=(Math.imul(1664525,seed)+1013904223)>>>0;return seed/4294967296;};
    for(let layer=0;layer<2;layer++) {
        for(let x=-12;x<2048;) {
            const w=Math.round(31+rnd()*85),h=Math.round(45+rnd()*(layer?81:131)),bottom=layer?512:464;
            const top=bottom-h;g.fillStyle=layer?['#726961','#8b786a','#876756','#697174'][Math.floor(rnd()*4)]:'#7a8588';
            g.fillRect(x,top,w,h);g.fillStyle=layer?'#575a59':'#6b797c';g.fillRect(x,top,w,4);
            if(rnd()>.55)g.fillRect(x+w*.3,top-6,w*.45,6);
            for(let y=top+10;y<bottom-8;y+=14)for(let xx=x+5;xx<x+w-6;xx+=12) {
                g.fillStyle=layer?(rnd()>.74?'#d6b078':'#47585d'):'#899498';
                g.fillRect(xx,y,6,8);
            }
            x+=w+Math.floor(rnd()*6);
        }
    }
    const city=prop(new THREE.CylinderGeometry(345,345,212,80,1,true),0xffffff,0,98,0);
    city.material=new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(canvas),side:THREE.BackSide,fog:false});
    for(const x of [-220,-166,-88,65,156,218]) {
        const z=-226-(Math.abs(x)%3)*6;
        prop(new THREE.CylinderGeometry(3.3,3.7,2,16),0x726b60,x,1,z);
        prop(new THREE.CylinderGeometry(.85,1.15,10,10),0x6a5141,x,6,z);
        for(const [dx,dy,dz,r] of [[0,0,0,6.3],[-2.7,-1,.4,4],[2.9,-.8,-.6,4.3]]) {
            prop(new THREE.IcosahedronGeometry(r,1),dx===0?0x577451:0x688259,x+dx,14+dy,z+dz);
        }
    }
    for(const x of [-114,-43,38,103]) {
        prop(new THREE.CylinderGeometry(.52,.9,19,10),0x484948,x,9.5,-218);
        const globe=prop(new THREE.SphereGeometry(1.9,12,10),0xeacc95,x,20,-218);
        globe.material.emissive.setHex(0xae8351);
    }
    for(const x of [-63,83]) {
        prop(new THREE.BoxGeometry(15,1.2,4.5),0x8d6244,x,3.6,-215);
        prop(new THREE.BoxGeometry(15,3,.8),0x936b4e,x,6,-216.7);
        for(const dx of [-5,5])prop(new THREE.BoxGeometry(1.2,3.5,3.6),0x4d5351,x+dx,1.7,-215);
    }
}
