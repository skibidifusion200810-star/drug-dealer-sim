import * as THREE from 'three';
import {WORLD,DISTRICTS,BUILDINGS,CONTACTS} from './data.js';

// Original first-person 3D city. World data and save coordinates remain compatible
// with the previous 2D release. No external models, textures or backend required.
const UNIT=0.11;
const EYE=1.72;
const BLOCK=1.1;
const ROAD_X=[453,1020,1515];
const ROAD_Z=[368,773,1116];
const hex=n=>typeof n==='string'?new THREE.Color(n):new THREE.Color(n);
const u=n=>n*UNIT;
const clamp=(n,low,high)=>Math.min(high,Math.max(low,n));
const fmt=n=>Math.round(n);
function disposeTree(root) {
 root.traverse(object=>{
  if(object.geometry)object.geometry.dispose();
  if(object.material){
   const materials=Array.isArray(object.material)?object.material:[object.material];
   for(const mat of materials){if(mat.map)mat.map.dispose();mat.dispose();}
  }
 });
}
function createSign(text,width=7,glow='#aaf5c5',height=1.3){
 const canvas=document.createElement('canvas');
 canvas.width=1024;canvas.height=192;
 const ctx=canvas.getContext('2d');
 ctx.clearRect(0,0,1024,192);
 ctx.fillStyle='#0b171e';ctx.fillRect(0,0,1024,192);
 ctx.strokeStyle=glow;ctx.lineWidth=10;ctx.strokeRect(7,7,1010,178);
 ctx.fillStyle=glow;ctx.fillRect(24,36,7,118);
 ctx.font='bold 78px Arial, sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
 ctx.fillStyle='#f2fff9';ctx.fillText(text.substring(0,20),520,100,930);
 const tex=new THREE.CanvasTexture(canvas);
 tex.colorSpace=THREE.SRGBColorSpace;
 const mat=new THREE.MeshBasicMaterial({map:tex,side:THREE.DoubleSide,transparent:true,depthWrite:false});
 return new THREE.Mesh(new THREE.PlaneGeometry(width,height),mat);
}
export function createCity(container,callbacks={}){
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});
 renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75));
 renderer.setSize(Math.max(1,container.clientWidth),Math.max(1,container.clientHeight),false);
 renderer.outputColorSpace=THREE.SRGBColorSpace;
 renderer.toneMapping=THREE.ACESFilmicToneMapping;
 renderer.toneMappingExposure=1.36;
 renderer.shadowMap.enabled=true;
 renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 renderer.domElement.className='city-webgl';
 renderer.domElement.setAttribute('aria-label','3D playable city. Click to control the camera, WASD to walk, E to interact.');
 renderer.domElement.style.touchAction='none';
 container.appendChild(renderer.domElement);
 const scene=new THREE.Scene();
 scene.background=new THREE.Color(0x142330);
 scene.fog=new THREE.FogExp2(0x142330,.0076);
 const camera=new THREE.PerspectiveCamera(74,1,.07,270);
 camera.rotation.order='YXZ';
 const world=new THREE.Group(),room=new THREE.Group();
 scene.add(world,room);
 room.visible=false;
 const materials=new Map();
 function material(color,emissive=null,opacity=1) {
  const key=[color,emissive,opacity].join(':');
  if(materials.has(key))return materials.get(key);
  const options={color,metalness:.09,roughness:.86};
  if(emissive){options.emissive=emissive;options.emissiveIntensity=.82;}
  if(opacity!==1){options.transparent=true;options.opacity=opacity;options.depthWrite=false;}
  const mat=new THREE.MeshStandardMaterial(options);
  materials.set(key,mat);return mat;
 }
 function cube(parent,x,y,z,w,h,d,color,opts={}){
  const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material(color,opts.emissive,opts.opacity||1));
  mesh.position.set(x,y,z);mesh.castShadow=!!opts.shadow;mesh.receiveShadow=!!opts.receive;
  parent.add(mesh);return mesh;
 }
 function cylinder(parent,x,y,z,top,bottom,height,color,segments=9){
  const m=new THREE.Mesh(new THREE.CylinderGeometry(top,bottom,height,segments),material(color));
  m.position.set(x,y,z);m.castShadow=true;parent.add(m);return m;
 }
 function sphere(parent,x,y,z,r,color,segments=9){
  const m=new THREE.Mesh(new THREE.SphereGeometry(r,segments,7),material(color));
  m.position.set(x,y,z);m.castShadow=true;parent.add(m);return m;
 }
 const hemi=new THREE.HemisphereLight(0xb1d8fa,0x202d29,2.3);scene.add(hemi);
 const sun=new THREE.DirectionalLight(0xffd2a1,2.5);
 sun.position.set(32,70,15);sun.castShadow=true;
 sun.shadow.mapSize.set(2048,2048);
 sun.shadow.camera.left=-85;sun.shadow.camera.right=85;
 sun.shadow.camera.top=85;sun.shadow.camera.bottom=-85;
 sun.shadow.normalBias=.06;scene.add(sun);
 const ambient=new THREE.AmbientLight(0x6b96a4,.32);scene.add(ambient);
 function road(){
  const ground=new THREE.Mesh(new THREE.PlaneGeometry(u(WORLD.width)+60,u(WORLD.height)+60),material(0x284239));
  ground.rotation.x=-Math.PI/2;ground.position.set(u(WORLD.width/2),-.12,u(WORLD.height/2));ground.receiveShadow=true;world.add(ground);
  for(let a=0;a<WORLD.width;a+=100)for(let b=0;b<WORLD.height;b+=100){
   const ix=fmt(a/100),iz=fmt(b/100);const centerX=u(a+50),centerZ=u(b+50);
   if(ROAD_X.some(x=>Math.abs(x-(a+50))<83)||ROAD_Z.some(z=>Math.abs(z-(b+50))<82))continue;
   cube(world,centerX,-.055,centerZ,u(95),.055,u(94),(ix*9+iz*19)%3===0?0x35514a:0x314a43,{receive:true});
  }
  for(const coordinate of ROAD_X){
   const x=u(coordinate);
   cube(world,x,-.035,u(WORLD.height/2),10.2,.07,u(WORLD.height),0x222c36,{receive:true});
   cube(world,x-5.6,.045,u(WORLD.height/2),1.1,.18,u(WORLD.height),0x85928d);
   cube(world,x+5.6,.045,u(WORLD.height/2),1.1,.18,u(WORLD.height),0x85928d);
   for(let z=0;z<u(WORLD.height);z+=5){
    cube(world,x,.015,z,0.15,.023,2.3,0xe1d6a8,{emissive:0x514d30});
   }
  }
  for(const coordinate of ROAD_Z){
   const z=u(coordinate);
   cube(world,u(WORLD.width/2),-.028,z,u(WORLD.width),.075,10.2,0x222c36,{receive:true});
   cube(world,u(WORLD.width/2),.048,z-5.6,u(WORLD.width),.18,1.1,0x84928a);
   cube(world,u(WORLD.width/2),.048,z+5.6,u(WORLD.width),.18,1.1,0x84928a);
   for(let x=0;x<u(WORLD.width);x+=5){
    cube(world,x,.016,z,2.3,.02,.15,0xe4d6ad,{emissive:0x514d30});
   }
  }
  // Crosswalks have tangible 3D surface detail instead of flat tiles.
  for(const rx of ROAD_X)for(const rz of ROAD_Z){
   for(let i=-4;i<=4;i++){
    cube(world,u(rx)+i*1.15,.045,u(rz)-7.6,.64,.02,2.5,0xbed2ce);
    cube(world,u(rx)+i*1.15,.045,u(rz)+7.6,.64,.02,2.5,0xbed2ce);
   }
   for(let i=-4;i<=4;i++){
    cube(world,u(rx)-7.6,.044,u(rz)+i*1.15,2.5,.02,.64,0xbed2ce);
    cube(world,u(rx)+7.6,.044,u(rz)+i*1.15,2.5,.02,.64,0xbed2ce);
   }
  }
 }
 road();
 const districts=new Map(DISTRICTS.map(d=>[d.id,d]));
 const solids=[];
 const entrances=new Map();
 const interactors=[];
 function nearestRoad(cx,cz,w,d){
  const candidates=[];
  for(const x of ROAD_X){
   const xx=u(x),side=xx<cx?-1:1;
   candidates.push({distance:Math.abs(xx-cx)-w/2,axis:'x',side});
  }
  for(const z of ROAD_Z){
   const zz=u(z),side=zz<cz?-1:1;
   candidates.push({distance:Math.abs(zz-cz)-d/2,axis:'z',side});
  }
  candidates.sort((a,b)=>a.distance-b.distance);
  return candidates[0];
 }
 const glass=material(0x38637d,0x08243d);
 function makeBuilding(b,i){
  const x=u(b.x+b.w/2),z=u(b.y+b.h/2);
  const w=u(b.w)*.84,d=u(b.h)*.84;
  const kind=b.kind;
  const height=(kind==='property'?17:kind==='home'?12:kind==='mission'?13:10)+(i*7%11);
  const group=new THREE.Group();group.position.set(x,0,z);world.add(group);
  const paint=[0x486a64,0x53596c,0x536e78,0x71645d,0x575e68,0x5a736b,0x665b68][i%7];
  cube(group,0,height/2,0,w,height,d,paint,{shadow:true,receive:true});
  cube(group,0,height+.22,0,w+.7,.48,d+.75,0x273a43,{shadow:true});
  cube(group,0,.53,0,w+.55,1.05,d+.55,0x25343c,{shadow:true});
  cube(group,0,height-.8,0,w+.55,.38,d+.55,0x7a8b82);
  // Rhythmic arrays of recessed glazing on each facade.
  const floors=Math.max(2,Math.floor(height/3.4));
  for(let row=0;row<floors;row++){
   const vy=3.3+row*3.08;
   for(let col=-2;col<=2;col++){
    const xx=col*w/5.3;
    const zz=col*d/5.3;
    const bright=(row*13+col*7+i*19)%6!==0;
    const glazing=bright?0x78a1b1:0x253e4b;
    cube(group,xx,vy,d/2+.024,w/8,1.48,.09,glazing,{emissive:bright?0x17363e:null});
    cube(group,xx,vy,-d/2-.024,w/8,1.48,.09,glazing,{emissive:bright?0x17363e:null});
    cube(group,w/2+.024,vy,zz,.09,1.48,d/8,glazing,{emissive:bright?0x17363e:null});
    cube(group,-w/2-.024,vy,zz,.09,1.48,d/8,glazing,{emissive:bright?0x17363e:null});
   }
  }
  const signHue=kind==='contact'?'#f8a4df':kind==='supply'?'#8de4fb':kind==='mission'?'#ffcc8d':kind==='safehouse'?'#b8f7a2':'#c3ff96';
  const face=nearestRoad(x,z,w,d);
  const px=face.axis==='x'?face.side*(w/2+.08):0;
  const pz=face.axis==='z'?face.side*(d/2+.08):0;
  if(face.axis==='z'){
   cube(group,px,1.5,pz,2.5,3,.2,0x152529,{emissive:0x173c35});
   cube(group,px,1.85,pz+face.side*.12,1.75,1.74,.16,0x428778,{emissive:0x1b4b45});
   cube(group,px,3.15,pz,3.5,.11,.4,hex(signHue).getHex(),{emissive:hex(signHue).getHex()});
  }else{
   cube(group,px,1.5,pz,.2,3,2.5,0x152529,{emissive:0x173c35});
   cube(group,px+face.side*.12,1.85,pz,.16,1.74,1.75,0x428778,{emissive:0x1b4b45});
   cube(group,px,3.15,pz,.4,.11,3.5,hex(signHue).getHex(),{emissive:hex(signHue).getHex()});
  }
  const sign=createSign(b.name,Math.min(8,w*.85),signHue,1.15);
  sign.position.set(px+face.side*(face.axis==='x'?.15:0),5.15,pz+face.side*(face.axis==='z'?.15:0));
  if(face.axis==='x')sign.rotation.y=face.side*Math.PI/2;
  else if(face.side===-1)sign.rotation.y=Math.PI;
  group.add(sign);
  const ex=x+(face.axis==='x'?face.side*(w/2+1.55):0);
  const ez=z+(face.axis==='z'?face.side*(d/2+1.55):0);
  const beacon=cylinder(world,ex,.05,ez,1.2,1.4,.1,hex(signHue).getHex(),30);
  beacon.material=material(hex(signHue).getHex(),hex(signHue).getHex(),.47);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(1.15,.055,8,40),new THREE.MeshBasicMaterial({color:signHue,transparent:true,opacity:.75}));
  ring.rotation.x=Math.PI/2;ring.position.set(ex,.11,ez);world.add(ring);
  const nearest={type:'building',id:b.id,name:b.name,x:ex,z:ez,label:'ENTER '+b.name,key:'building:'+b.id};
  entrances.set(b.id,nearest);interactors.push(nearest);
  solids.push({minX:x-w/2-0.7,maxX:x+w/2+0.7,minZ:z-d/2-.7,maxZ:z+d/2+.7});
  // Low-poly rooftop vents, HVAC and lit aerials.
  cube(group,w/4,height+.7,-d/4,2.6,1.1,2.2,0x768487,{shadow:true});
  cylinder(group,-w/4,height+1,-d/4,.16,.26,1.65,0x9fb0a6);
  if(i%3===0){
   const neon=cube(group,0,height-1.7,d/2+.13,w*.7,.09,.25,hex(signHue).getHex(),{emissive:hex(signHue).getHex()});
  }
 }
 BUILDINGS.forEach(makeBuilding);
 // Lamp posts, benches, trees and parked vehicles give each block scale.
 function lamp(x,z,on=true){
  const g=new THREE.Group();g.position.set(x,0,z);world.add(g);
  cylinder(g,0,2.6,0,.095,.18,5.2,0x44575d);
  cube(g,1.15,5.12,0,2.3,.12,.17,0x70848a);
  sphere(g,2.2,5,0,.37,0xffe5ac,9).material=material(0xffeac7,0xe0af62);
  if(on){const light=new THREE.PointLight(0xffe4ab,11,18,2);light.position.set(2.2,4.8,0);world.add(light);}
 }
 for(let i=0;i<32;i++){
  const rx=ROAD_X[i%3],z=u(35+Math.floor(i/3)*117);
  lamp(u(rx)+7.3,z,i<9);
 }
 function tree(x,z,i){
  cylinder(world,x,1.45,z,.36,.45,2.9,0x54463a);
  for(let j=0;j<3;j++){
   const crown=new THREE.Mesh(new THREE.DodecahedronGeometry(1.65+(i%4)*.13,0),material(j%2===0?0x487b5d:0x69956c));
   crown.position.set(x+(j-1)*.46,3.7+(j%2)*.7,z+(j-1)*.55);
   crown.castShadow=true;world.add(crown);
  }
 }
 for(let i=0;i<40;i++){
  const x=u(70+(i*347)%1760),z=u(74+(i*197)%1140);
  if(solids.some(o=>x>o.minX-2&&x<o.maxX+2&&z>o.minZ-2&&z<o.maxZ+2))continue;
  if(ROAD_X.some(rx=>Math.abs(x-u(rx))<7)||ROAD_Z.some(rz=>Math.abs(z-u(rz))<7))continue;
  tree(x,z,i);
 }
 const npcs=[];
 function person(parent,x,z,color,id){
  const root=new THREE.Group();root.position.set(x,0,z);parent.add(root);
  const dark=0x293944,skin=[0xd0a48b,0xa97054,0xe7ba9e,0x885d49][id%4];
  const body=cube(root,0,1.18,0,.7,1.04,.43,color,{shadow:true});
  const jacket=cube(root,0,1.35,-.23,.74,.23,.13,dark);
  sphere(root,0,2.05,0,.27,skin);
  const hair=sphere(root,0,2.22,-.01,.277,id%3===0?0x302727:0x473a2f);
  hair.scale.y=.5;
  cube(root,-.42,1.25,0,.17,.86,.27,skin,{shadow:true});
  cube(root,.42,1.25,0,.17,.86,.27,skin,{shadow:true});
  const leg1=cube(root,-.2,.42,0,.26,.8,.3,0x172329,{shadow:true});
  const leg2=cube(root,.2,.42,0,.26,.8,.3,0x172329,{shadow:true});
  cube(root,-.2,.07,-.07,.31,.16,.48,0x132329);
  cube(root,.2,.07,-.07,.31,.16,.48,0x132329);
  return {root,leg1,leg2,baseX:x,baseZ:z,phase:id*2.5};
 }
 CONTACTS.forEach((npc,i)=>{
  const x=u(npc.x),z=u(npc.y),npcMesh=person(world,x,z,npc.color,i);
  const marker=cylinder(world,x,.075,z,.47,.58,.14,0xc4fb9c,26);
  marker.material=new THREE.MeshBasicMaterial({color:0xb9f990,transparent:true,opacity:.45});
  const above=new THREE.Mesh(new THREE.TorusGeometry(.36,.052,8,24),new THREE.MeshBasicMaterial({color:0xaefb8d}));
  above.rotation.x=Math.PI/2;above.position.set(x,2.67,z);world.add(above);
  const target={type:'npc',id:npc.id,name:npc.name,x,z,label:'TALK TO '+npc.name,key:'npc:'+npc.id};
  interactors.push(target);
  npcs.push({...npcMesh,marker,above,point:target,npc});
 });
 // Wandering pedestrians animate through the open city.
 const extras=[];
 for(let i=0;i<28;i++){
  const x=u(ROAD_X[i%3]+(i%2===0?23:-24));
  const z=u(65+i*43%1150);
  extras.push({...person(world,x,z,[0x5b7b79,0x90735c,0x646a92,0x8e6b7a][i%4],i+34),speed:.22+(i%5)*.12});
 }
 const cars=[];
 for(let i=0;i<13;i++){
  const g=new THREE.Group();const ix=i%3,rx=u(ROAD_X[ix]);const z=u(40+(i*97)%1100);
  g.position.set(rx+(i%2?2.2:-2.2),.3,z);world.add(g);
  cube(g,0,.52,0,1.85,.69,3.8,i<3?0x3c5c85:[0x447c70,0x8d5c58,0x5a667f][i%3],{shadow:true});
  cube(g,0,1.07,-.32,1.58,.65,1.9,0x315060,{shadow:true});
  for(const x of [-.99,.99])for(const z of [-1.1,1.05]){
   const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.37,.37,.22,12),material(0x11191d));wheel.rotation.z=Math.PI/2;wheel.position.set(x,.25,z);g.add(wheel);
  }
  cube(g,-.57,.58,-1.94,.46,.22,.14,0xffebb0,{emissive:0xd4ab6e});
  cube(g,.57,.58,-1.94,.46,.22,.14,0xffebb0,{emissive:0xd4ab6e});
  let light=null;
  if(i<3){
   light=cube(g,0,1.45,-.3,.85,.1,.37,0xfb8a84,{emissive:0xe4484b});
  }
  cars.push({g,startZ:z,direction:i%2===0?1:-1,rate:.8+i*.15,police:i<3,light,roadX:rx});
 }
 // 3D interior props are created lazily, per building.
 let indoor=null,indoorEntry=null,indoorObjects=[];
 function makeRoom(b){
  disposeTree(room);
  room.clear();indoorObjects=[];
  const hue=b.kind==='supply'?0x62bfce:b.kind==='contact'?0xc98db9:b.kind==='mission'?0xf3c183:0x9ed2ac;
  const width=17,depth=22;
  cube(room,0,-.2,0,width,.4,depth,0x3c403d,{receive:true});
  for(let i=-8;i<=8;i+=2)cube(room,i,-.008,0,.04,.01,depth,0x65716a);
  cube(room,0,4.5,-11,width,9,.55,0x39545a);
  cube(room,-8.5,4.5,0,.55,9,depth,0x41535a);
  cube(room,8.5,4.5,0,.55,9,0x41535a);
  cube(room,0,8.8,0,width,.35,depth,0x23343a);
  cube(room,-5,3.4,-10.65,5.2,3.1,.15,0x203f52,{emissive:0x17394a});
  cube(room,5,3.4,-10.65,4.5,3.1,.15,0x203f52,{emissive:0x17394a});
  for(const x of [-7,0,7]){
   const led=new THREE.PointLight(hue,10,16,2);
   led.position.set(x,6.9,-2);room.add(led);
   cylinder(room,x,8.3,-2,.6,.6,.16,hue);
  }
  // Counter and register
  cube(room,0,1.0,-4.9,8.4,2,1.5,0x52635c,{shadow:true});
  cube(room,0,2.07,-4.9,8.6,.17,1.66,0x947e64);
  cube(room,1.3,2.23,-4.9,1.15,.27,.8,0x1c2930);
  cube(room,1.3,2.58,-4.9,.9,.55,.13,0x6fa4a0,{emissive:0x185a57});
  const sign=createSign(b.name,8,'#b9f6af',1.65);
  sign.position.set(0,5.95,-10.6);room.add(sign);
  // Repeating storage racks stocked with colorful fictional boxes.
  for(const x of [-7.5,7.5]){
   for(let shelf=0;shelf<3;shelf++){
    const y=.65+shelf*1.32;
    cube(room,x,y,-2.7,.65,.12,10.5,0x81918c);
    for(let n=0;n<7;n++){
     cube(room,x,y+.45,-7+n*1.27,.42,.85,.7,[0x7ea19d,0x82778d,0x8e735f,0x7d9b73][(shelf+n)%4]);
    }
   }
  }
  // Lounge in the corner: couch, table, rug and plants.
  cube(room,-4.6,.8,6,3.5,1.05,1.65,0x48726a,{shadow:true});
  cube(room,-4.6,1.32,6.68,3.5,.98,.37,0x386056);
  cube(room,-4.6,.55,3.8,2.8,.35,1.45,0x876f5b,{shadow:true});
  cube(room,-4.6,.03,4.4,5,.025,4.2,0x645e56);
  cylinder(room,5,.6,4.3,.55,.6,1.15,0x5a6762);
  const plant=sphere(room,5,1.7,4.3,1.12,0x4f986d,10);plant.scale.set(.8,1.35,.8);
  // Facing this marked rear door, press E to return to the street.
  cube(room,0,2.2,10.73,3.15,4.4,.35,0x18282e,{emissive:0x133c2e});
  cube(room,0,4.43,10.64,3.4,.18,.36,hue,{emissive:hue});
  const exit=createSign('EXIT TO STREET',4.3,'#b8fb9b',.8);
  exit.position.set(0,5.4,10.35);exit.rotation.y=Math.PI;room.add(exit);
  indoorObjects.push({type:'exit',id:b.id,name:'STREET',x:0,z:8.4,label:'EXIT TO STREET',key:'exit'});
  const terminal={type:'interior',id:b.id,name:b.name,x:1.3,z:-2.7,label:'USE '+b.name+' TERMINAL',key:'terminal'};
  indoorObjects.push(terminal);
  const wire=new THREE.Mesh(new THREE.TorusGeometry(1.4,.07,8,32),new THREE.MeshBasicMaterial({color:hue,transparent:true,opacity:.6}));
  wire.rotation.x=Math.PI/2;wire.position.set(1.3,.05,-2.7);room.add(wire);
 }
 const saved=callbacks.getState?.();
 const spawn=saved?.player||{x:410,y:320};
 camera.position.set(u(spawn.x),EYE,u(spawn.y));
 let yaw=-.8,pitch=0;
 let inside=null,entryPosition=null;
 let destroyed=false,paused=false,locked=false,focusKey='';
 let focused=null;
 const keys=new Set(),mobile=new Set();
 const clock=new THREE.Clock();
 function updateRotation(){
  camera.rotation.y=yaw;
  camera.rotation.x=pitch;
 }
 updateRotation();
 function isBlocked(x,z){
  if(inside)return x<-7.7||x>7.7||z<-10.2||z>9.8;
  if(x<1||z<1||x>u(WORLD.width)-1||z>u(WORLD.height)-1)return true;
  for(const b of solids){
   if(x>b.minX-BLOCK&&x<b.maxX+BLOCK&&z>b.minZ-BLOCK&&z<b.maxZ+BLOCK)return true;
  }
  return false;
 }
 function canMove(){return !paused && (callbacks.canMove?.()!==false);}
 function look(dx,dy){
  if(!canMove())return;
  yaw-=dx*.0023;
  pitch=clamp(pitch-dy*.0021,-1.18,1.18);
  updateRotation();
 }
 function lockChange(){
  locked=document.pointerLockElement===renderer.domElement;
  callbacks.onLock?.(locked);
 }
 function pointerDown(e){
  if(e.pointerType==='touch'){
   if(canMove()){renderer.domElement.setPointerCapture?.(e.pointerId);touchId=e.pointerId;touchX=e.clientX;touchY=e.clientY;}
   return;
  }
  if(canMove()&&!locked&&renderer.domElement.requestPointerLock){
   try{const p=renderer.domElement.requestPointerLock();p?.catch?.(()=>{});}catch{}
  }
 }
 let touchId=null,touchX=0,touchY=0;
 function pointerMove(e){
  if(e.pointerType==='touch'&&touchId===e.pointerId){
   look((e.clientX-touchX)*1.6,(e.clientY-touchY)*1.6);touchX=e.clientX;touchY=e.clientY;
  }
 }
 function pointerUp(e){if(touchId===e.pointerId)touchId=null;}
 function mouseMove(e){if(locked)look(e.movementX,e.movementY);}
 function keyDown(e){
  const activeElement=document.activeElement?.tagName;
  if(activeElement==='INPUT'||activeElement==='TEXTAREA'||activeElement==='SELECT')return;
  const key=e.key.toLowerCase();
  if(['w','a','s','d','shift','arrowup','arrowdown','arrowleft','arrowright','e'].includes(key)){
   if(['arrowup','arrowdown','arrowleft','arrowright'].includes(key))e.preventDefault();
   keys.add(key);
   if(key==='e'&&!e.repeat&&canMove())interact();
  }
 }
 function keyUp(e){keys.delete(e.key.toLowerCase());}
 function forwardVector(){return new THREE.Vector3(-Math.sin(yaw),0,-Math.cos(yaw));}
 const lookVec=new THREE.Vector3(),deltaVec=new THREE.Vector3();
 function findFocus(){
  if(!canMove())return null;
  const targets=inside?indoorObjects:interactors;
  const forward=forwardVector();
  let winner=null,closest=Infinity;
  for(const entry of targets){
   const dx=entry.x-camera.position.x,dz=entry.z-camera.position.z;
   const dist=Math.hypot(dx,dz);
   if(dist>5.4)continue;
   const facing=(forward.x*dx+forward.z*dz)/(dist||1);
   if(facing<.28&&dist>2.15)continue;
   // Match proximity and player attention, rather than needing pixel-perfect aiming.
   const score=dist-(facing*.9);
   if(score<closest){closest=score;winner=entry;}
  }
  return winner;
 }
 function emitFocus(entry){
  const key=entry?.key||'';
  if(key===focusKey)return;
  focusKey=key;focused=entry;
  callbacks.onFocus?.(entry?{key:entry.key,type:entry.type,name:entry.name,label:entry.label}:null);
 }
 function enter(id){
  const b=BUILDINGS.find(x=>x.id===id);
  if(!b||inside)return;
  inside=b.id;entryPosition=camera.position.clone();
  makeRoom(b);world.visible=false;room.visible=true;
  scene.fog=new THREE.FogExp2(0x1c2e34,.018);
  camera.position.set(0,EYE,5.7);yaw=0;pitch=-.045;updateRotation();
  emitFocus(null);callbacks.onRoom?.(b);
 }
 function exit(){
  if(!inside)return;
  inside=null;room.visible=false;world.visible=true;
  scene.fog=new THREE.FogExp2(0x142330,.0076);
  camera.position.copy(entryPosition||new THREE.Vector3(u(410),EYE,u(320)));
  yaw=0;pitch=0;updateRotation();emitFocus(null);callbacks.onRoom?.(null);
 }
 function interact(){
  if(!canMove())return false;
  const target=findFocus();
  if(!target)return false;
  if(target.type==='exit'){exit();return true;}
  if(target.type==='interior'){callbacks.onInteract?.({type:'interior',id:target.id});return true;}
  callbacks.onInteract?.({type:target.type,id:target.id});
  return true;
 }
 function resize(){
  const width=container.clientWidth||1,height=container.clientHeight||1;
  camera.aspect=width/height;camera.updateProjectionMatrix();
  renderer.setSize(width,height,false);
 }
 const observer=new ResizeObserver(resize);observer.observe(container);resize();
 renderer.domElement.addEventListener('pointerdown',pointerDown);
 renderer.domElement.addEventListener('pointermove',pointerMove);
 renderer.domElement.addEventListener('pointerup',pointerUp);
 renderer.domElement.addEventListener('pointercancel',pointerUp);
 document.addEventListener('pointerlockchange',lockChange);
 document.addEventListener('mousemove',mouseMove);
 window.addEventListener('keydown',keyDown);
 window.addEventListener('keyup',keyUp);
 let lastPosition=0,lastFocus=0,elapsed=0,frame=0;
 const targetFrame=1/60;
 function animate(){
  if(destroyed)return;
  requestAnimationFrame(animate);
  const dt=Math.min(.05,clock.getDelta());
  elapsed+=dt;
  const heat=callbacks.getState?.()?.heat||0;
  for(let i=0;i<npcs.length;i++){
   const n=npcs[i],v=elapsed*.7+n.phase;
   n.root.position.x=n.baseX+Math.sin(v)*.37;
   n.root.position.z=n.baseZ+Math.cos(v*.73)*.3;
   n.root.rotation.y=Math.sin(v*.31)*.8;
   n.leg1.rotation.x=Math.sin(v*2)*.17;
   n.leg2.rotation.x=-Math.sin(v*2)*.17;
   n.above.position.y=2.75+Math.sin(elapsed*2.5+i)*.12;
   n.point.x=n.root.position.x;n.point.z=n.root.position.z;
  }
  for(let i=0;i<extras.length;i++){
   const n=extras[i];
   n.root.position.z=n.baseZ+Math.sin(elapsed*.2+i)*14;
   n.root.rotation.y=Math.cos(elapsed*.2+i)>=0?0:Math.PI;
   n.leg1.rotation.x=Math.sin(elapsed*7+i)*.37;n.leg2.rotation.x=-n.leg1.rotation.x;
  }
  for(let i=0;i<cars.length;i++){
   const c=cars[i];
   const span=u(WORLD.height)-18;
   c.g.position.z=6+(((c.startZ+c.direction*elapsed*c.rate*3)%span)+span)%span;
   c.g.rotation.y=c.direction>0?Math.PI:0;
   c.g.visible=!c.police||heat>=25;
   if(c.light)c.light.material=elapsed*5%1<.5?material(0xee5c57,0xee4545):material(0x638dfb,0x365af0);
  }
  if(canMove()){
   const f=(keys.has('w')||keys.has('arrowup')||mobile.has('forward')?1:0)-(keys.has('s')||keys.has('arrowdown')||mobile.has('backward')?1:0);
   const side=(keys.has('d')||keys.has('arrowright')||mobile.has('right')?1:0)-(keys.has('a')||keys.has('arrowleft')||mobile.has('left')?1:0);
   const forward=forwardVector();deltaVec.set(forward.x*f+forward.z*(-side),0,forward.z*f+forward.x*side);
   // right-hand vector = (cos(yaw), 0, -sin(yaw)).
   deltaVec.set(forward.x*f+Math.cos(yaw)*side,0,forward.z*f-Math.sin(yaw)*side);
   if(deltaVec.lengthSq()>0){
    deltaVec.normalize();
    const speed=(keys.has('shift')||mobile.has('sprint'))?12.5:7.6;
    const dx=deltaVec.x*dt*speed,dz=deltaVec.z*dt*speed;
    if(!isBlocked(camera.position.x+dx,camera.position.z))camera.position.x+=dx;
    if(!isBlocked(camera.position.x,camera.position.z+dz))camera.position.z+=dz;
    camera.position.y=EYE+Math.sin(elapsed*11)*(keys.has('shift')?.065:.035);
   }else camera.position.y=EYE;
  }
  if(elapsed-lastFocus>.12){lastFocus=elapsed;emitFocus(findFocus());}
  if(elapsed-lastPosition>1.2&&!inside){
   lastPosition=elapsed;callbacks.onPosition?.({x:fmt(camera.position.x/UNIT),y:fmt(camera.position.z/UNIT)});
  }
  renderer.render(scene,camera);
 }
 animate();
 return {
  enter,exit,interact,
  setControl(control,active){if(active)mobile.add(control);else mobile.delete(control);},
  pause(value){paused=!!value;if(paused){mobile.clear();if(document.pointerLockElement===renderer.domElement)document.exitPointerLock();emitFocus(null);}},
  lock(){if(canMove()&&renderer.domElement.requestPointerLock){try{const p=renderer.domElement.requestPointerLock();p?.catch?.(()=>{});}catch{}}},
  jump(x,y){
   if(inside)exit();
   camera.position.set(clamp(u(x),2,u(WORLD.width)-2),EYE,clamp(u(y),2,u(WORLD.height)-2));
   emitFocus(null);
  },
  move(x,y){
   // Menu locate actions teleport to the requested street landmark.
   if(inside)exit();
   const xPos=clamp(u(x),2,u(WORLD.width)-2),zPos=clamp(u(y),2,u(WORLD.height)-2);
   camera.position.set(xPos,EYE,zPos);
   if(isBlocked(camera.position.x,camera.position.z)){
    camera.position.z+=9;
    if(isBlocked(camera.position.x,camera.position.z)){camera.position.x+=9;}
   }
   callbacks.onPosition?.({x:fmt(camera.position.x/UNIT),y:fmt(camera.position.z/UNIT)});
   emitFocus(null);
  },
  destroy(){
   destroyed=true;
   observer.disconnect();
   if(document.pointerLockElement===renderer.domElement)document.exitPointerLock();
   renderer.domElement.removeEventListener('pointerdown',pointerDown);
   renderer.domElement.removeEventListener('pointermove',pointerMove);
   renderer.domElement.removeEventListener('pointerup',pointerUp);
   renderer.domElement.removeEventListener('pointercancel',pointerUp);
   document.removeEventListener('pointerlockchange',lockChange);
   document.removeEventListener('mousemove',mouseMove);
   window.removeEventListener('keydown',keyDown);
   window.removeEventListener('keyup',keyUp);
   disposeTree(world);disposeTree(room);
   for(const mat of materials.values())mat.dispose();
   renderer.dispose();renderer.domElement.remove();
  }
 };
}
