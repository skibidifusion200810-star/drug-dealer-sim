import Phaser from 'phaser';
import {WORLD,DISTRICTS,BUILDINGS,CONTACTS} from './data.js';

function tinyText(scene,text,x,y,size=12,color='#cad6d2',options={}){
 return scene.add.text(x,y,text,{fontFamily:'Inter, system-ui, sans-serif',fontSize:String(size)+'px',fontStyle:'700',color,...options}).setOrigin(.5).setDepth(15);
}
export function createCity(node, callbacks={}){
 let active=true;
 class CityScene extends Phaser.Scene {
  constructor(){super('CityScene');this.goal=null;this.pending=null;this.lastFootstep=0;this.npcs=[];}
  create(){
   this.drawGround();
   this.drawRoads();
   this.drawDecor();
   this.drawBuildings();
   this.drawPeople();
   this.drawTraffic();
   const saved=callbacks.getState?.();
   const start=saved?.player||{x:418,y:320};
   this.player=this.drawCharacter(start.x,start.y,0xd9f893,'YOU',true);
   this.player.setDepth(90);
   this.selectHalo=this.add.ellipse(start.x,start.y+5,49,23,0xc0f781,.06).setStrokeStyle(1.5,0xb3f37e,.65).setDepth(13);
   this.goalMarker=this.add.circle(start.x,start.y,12,0xb6fa83,.12).setStrokeStyle(2,0xb6fa83,.7).setDepth(80).setVisible(false);
   this.cameras.main.setBounds(0,0,WORLD.width,WORLD.height);
   this.cameras.main.startFollow(this.player,true,.09,.09);
   this.cameras.main.setZoom(node.clientWidth<700?.68:.92);
   this.cameras.main.setBackgroundColor('#0d161b');
   this.keys=this.input.keyboard.addKeys('W,A,S,D,UP,DOWN,LEFT,RIGHT,E,SPACE');
   this.input.keyboard.on('keydown-E',()=>{
    const close=[];
    for(const npc of this.npcs)close.push({x:npc.node.x,y:npc.node.y,dist:Phaser.Math.Distance.Between(this.player.x,this.player.y,npc.node.x,npc.node.y),payload:{type:'npc',id:npc.data.id}});
    for(const building of BUILDINGS)close.push({x:building.x+building.w/2,y:building.y+building.h/2,dist:Phaser.Math.Distance.Between(this.player.x,this.player.y,building.x+building.w/2,building.y+building.h/2),payload:{type:'building',id:building.id}});
    close.sort((a,b)=>a.dist-b.dist);
    if(close[0]&&close[0].dist<125)callbacks.onInteract?.(close[0].payload);
   });
   this.input.on('pointerdown',(pointer,targets)=>{
    if(targets.length)return;
    const pt=pointer.positionToCamera(this.cameras.main);
    if(pt&&Number.isFinite(pt.x))this.goTo(pt.x,pt.y);
   });
   this.scale.on('resize',({width})=>this.cameras.main.setZoom(width<700?.66:.92));
   this.events.once('shutdown',()=>{this.npcs=[];});
  }
  drawGround(){
   const g=this.add.graphics().setDepth(0);
   g.fillStyle(0x0e191d,1).fillRect(0,0,WORLD.width,WORLD.height);
   for(let x=0;x<WORLD.width;x+=84)for(let y=0;y<WORLD.height;y+=82){
    const a=((Math.round(x/84)*31+Math.round(y/82)*17)%7);
    g.fillStyle(a%3===0?0x14252a:0x112025,.5).fillRoundedRect(x+4,y+4,72,70,4);
   }
   for(const d of DISTRICTS){
    const [x,y,right,bottom]=d.bounds;
    g.lineStyle(2,Phaser.Display.Color.HexStringToColor(d.color).color,.21).strokeRect(x+6,y+6,right-x-12,bottom-y-12);
    g.fillStyle(Phaser.Display.Color.HexStringToColor(d.color).color,.025).fillRect(x,y,right-x,bottom-y);
    this.add.text(x+28,y+17,d.name,{fontFamily:'Inter, sans-serif',fontSize:'22px',fontStyle:'900',color:d.color,alpha:.15,letterSpacing:4}).setDepth(1);
   }
  }
  drawRoads(){
   const g=this.add.graphics().setDepth(1);
   const roadsX=[453,1020,1515],roadsY=[368,773,1116];
   for(const x of roadsX){
    g.fillStyle(0x0b1318).fillRect(x-51,0,102,WORLD.height);
    g.lineStyle(3,0x253238,.75).lineBetween(x-48,0,x-48,WORLD.height);
    g.lineBetween(x+48,0,x+48,WORLD.height);
    for(let y=11;y<WORLD.height;y+=57){g.fillStyle(0x617071,.23).fillRect(x-2,y,4,29);}
    for(let y=85;y<WORLD.height;y+=405){
     for(let i=0;i<5;i++){g.fillStyle(0xa5b0ae,.16).fillRect(x-42+i*20,y,12,44);}
    }
   }
   for(const y of roadsY){
    g.fillStyle(0x0b1318).fillRect(0,y-47,WORLD.width,94);
    g.lineStyle(2,0x27353b,.82).lineBetween(0,y-44,WORLD.width,y-44);
    g.lineBetween(0,y+44,WORLD.width,y+44);
    for(let x=15;x<WORLD.width;x+=62) {g.fillStyle(0x647578,.22).fillRect(x,y-2,30,4);}
    for(let x=105;x<WORLD.width;x+=500){
     for(let i=0;i<5;i++){g.fillStyle(0xb7c0bd,.18).fillRect(x+i*20,y-34,12,69);}
    }
   }
   for(const x of roadsX)for(const y of roadsY){
    g.fillStyle(0x101b1e).fillRect(x-51,y-47,102,94);
    g.lineStyle(1,0x506266,.16).strokeRect(x-42,y-37,84,74);
   }
  }
  drawDecor(){
   const g=this.add.graphics().setDepth(2);
   for(let i=0;i<155;i++){
    const x=(i*197+89)%WORLD.width,y=(i*283+72)%WORLD.height;
    if([453,1020,1515].some(v=>Math.abs(v-x)<83)||[368,773,1116].some(v=>Math.abs(v-y)<78))continue;
    const size=8+i%5*4;
    g.fillStyle(i%5===0?0x233f38:0x1b3031,.8).fillRoundedRect(x,y,size,size,2);
    if(i%3===0){g.lineStyle(1,0x43635a,.5).strokeRoundedRect(x-3,y-3,size+6,size+6,3);}
   }
   for(const x of [395,513,962,1080,1454,1578]){
    for(const y of [80,265,525,675,933,1236]){
     g.fillStyle(0xa9f6c3,.06).fillCircle(x,y,42);
     g.fillStyle(0xa7d8b6,.13).fillCircle(x,y,17);
     g.fillStyle(0xe9dba7,.65).fillCircle(x,y,3);
    }
   }
   for(let i=0;i<46;i++){
    const x=75+(i*313)%1780,y=75+(i*199)%1170;
    const onRoad=[453,1020,1515].some(v=>Math.abs(v-x)<76)||[368,773,1116].some(v=>Math.abs(v-y)<62);
    if(onRoad)continue;
    g.fillStyle(0x132c26,.8).fillCircle(x,y,11+i%4*3);
    g.fillStyle(0x365b44,.5).fillCircle(x-4,y-5,7+i%4*2);
    g.fillStyle(0x497455,.35).fillCircle(x+5,y+1,5+i%4);
   }
  }
  drawBuildings(){
   this.buildingNodes=new Map();
   for(const b of BUILDINGS){
    const g=this.add.graphics().setDepth(5);
    const x=b.x,y=b.y,w=b.w,h=b.h,color=b.color;
    g.fillStyle(0x000000,.4).fillRoundedRect(x+15,y+20,w,h,10);
    g.fillStyle(0x263138,.85).fillRoundedRect(x-12,y-9,w+24,h+18,11);
    g.lineStyle(2,0x516365,.4).strokeRoundedRect(x-12,y-9,w+24,h+18,11);
    g.fillStyle(color,1).fillRoundedRect(x,y,w,h,8);
    g.fillStyle(0xb6d0c3,.055).fillRoundedRect(x+8,y+8,w-16,h-16,4);
    g.lineStyle(2,0x090f14,.6).strokeRoundedRect(x+7,y+7,w-14,h-14,5);
    for(let i=0;i<4;i++){
     const wy=y+22+i*(h-36)/4;
     g.fillStyle(i%2===0?0x89b9ad:0x293f47,.29).fillRoundedRect(x+18,wy,21,12,3);
     g.fillStyle(i%2===1?0xa0ccd9:0x2c424d,.25).fillRoundedRect(x+w-40,wy,22,12,3);
    }
    g.fillStyle(0x101b20,.68).fillRoundedRect(x+w*.33,y+h*.3,w*.35,h*.39,4);
    g.lineStyle(2,0x87a6aa,.18).strokeRoundedRect(x+w*.33,y+h*.3,w*.35,h*.39,4);
    const signColor=b.kind==='home'?'#baf19a':b.kind==='mission'?'#f2c18f':b.kind==='supply'?'#9bcff8':b.kind==='safehouse'?'#bcf6b2':'#e4b4f4';
    const title=this.add.text(x+w/2,y+h*.47,b.name,{fontFamily:'Inter,sans-serif',fontSize:'17px',fontStyle:'900',color:'#e6f1e8',align:'center',stroke:'#131c1d',strokeThickness:4}).setOrigin(.5).setDepth(8);
    const sub=this.add.text(x+w/2,y+h*.47+22,b.tag,{fontFamily:'Inter,sans-serif',fontSize:'9px',fontStyle:'800',color:signColor,align:'center'}).setOrigin(.5).setDepth(8);
    const badge=this.add.circle(x+w-17,y+18,6,b.kind==='mission'?0xeeb478:b.kind==='home'?0xc0f887:0x81acc2,.85).setDepth(9);
    this.tweens.add({targets:badge,alpha:.35,duration:1250,yoyo:true,repeat:-1});
    const hit=this.add.zone(x+w/2,y+h/2,w,h).setDepth(10).setInteractive({useHandCursor:true});
    hit.on('pointerdown',()=>this.goTo(x+w/2,y+h+18,{type:'building',id:b.id}));
    hit.on('pointerover',()=>{title.setColor('#baf18a');g.lineStyle(3,0xb7ed93,.65).strokeRoundedRect(x,y,w,h,8);});
    hit.on('pointerout',()=>title.setColor('#e6f1e8'));
    this.buildingNodes.set(b.id,{g,title,sub,hit});
   }
  }
  drawCharacter(x,y,color,name,hero=false){
   const node=this.add.container(x,y).setDepth(25);
   const shadow=this.add.ellipse(1,14,31,15,0x02090b,.6);
   const legs=[this.add.rectangle(-7,10,9,15,0x14242d),this.add.rectangle(7,10,9,15,0x14242d)];
   const torso=this.add.ellipse(0,-2,28,35,hero?0x304b36:0x263b42);
   const jacket=this.add.rectangle(0,-7,21,20,color,.85);
   const head=this.add.circle(0,-23,11,hero?0xe9b795:0xc79880);
   const visor=this.add.rectangle(0,-28,15,5,hero?0x111916:0x1b2531);
   const point=this.add.triangle(0,24,0,0,-8,-10,8,-10,hero?0xbafb8b:color,.9).setRotation(Math.PI);
   node.add([shadow,...legs,torso,jacket,head,visor,point]);
   if(hero){
    const ring=this.add.ellipse(0,2,43,55,0x000000,0).setStrokeStyle(1.6,0xbef996,.6);
    const label=this.add.text(0,-59,'YOU',{fontFamily:'Inter,sans-serif',fontSize:'11px',fontStyle:'900',color:'#bafa95'}).setOrigin(.5);
    node.add([ring,label]);
   }else{
    const label=this.add.text(0,-50,name,{fontFamily:'Inter,sans-serif',fontSize:'11px',fontStyle:'900',color:'#d3e4dd',stroke:'#0f171a',strokeThickness:3}).setOrigin(.5);
    const glow=this.add.circle(15,-36,4,0x9ff89f,1);
    node.add([label,glow]);
   }
   return node;
  }
  drawPeople(){
   for(const npc of CONTACTS){
    const node=this.drawCharacter(npc.x,npc.y,npc.color,npc.name);
    node.setSize(52,80);
    node.setInteractive(new Phaser.Geom.Rectangle(-28,-63,56,85),Phaser.Geom.Rectangle.Contains);
    node.on('pointerdown',()=>this.goTo(node.x,node.y,{type:'npc',id:npc.id}));
    node.on('pointerover',()=>node.setScale(1.12));
    node.on('pointerout',()=>node.setScale(1));
    this.npcs.push({node,data:npc});
    const wobble=()=>{
     if(!active||!node.active)return;
     this.tweens.add({targets:node,x:npc.x+Phaser.Math.Between(-28,28),y:npc.y+Phaser.Math.Between(-15,15),duration:2500+Phaser.Math.Between(0,3500),ease:'Sine.easeInOut',onComplete:()=>this.time.delayedCall(1100+Phaser.Math.Between(0,2300),wobble)});
    };
    this.time.delayedCall(750+Phaser.Math.Between(0,1500),wobble);
   }
   // Animated passers-by make the map feel like a living district.
   for(let i=0;i<23;i++){
    const road=[453,1020,1515][i%3];
    const y=65+(i*61)%1190;
    const npc=this.add.container(road+Phaser.Math.Between(-32,32),y).setDepth(19);
    npc.add([
     this.add.ellipse(0,6,16,9,0x000000,.35),
     this.add.ellipse(0,-2,12,19,[0x556d64,0x5d5367,0x6b6453][i%3]),
     this.add.circle(0,-15,6,0xbe9685)
    ]);
    const to=i%2===0?1280:40;
    this.tweens.add({targets:npc,y:to,duration:12000+Phaser.Math.Between(2000,11000),ease:'Linear',yoyo:true,repeat:-1});
   }
  }
  drawTraffic(){
   for(let i=0;i<12;i++){
    const x=[453,1020,1515][i%3]+(i%2===0?-18:17);
    const y=(i*137)%WORLD.height;
    const police=i<3;
    const car=this.add.container(x,y).setDepth(15);
    car.add([
     this.add.ellipse(2,1,38,68,0x000000,.32),
     this.add.rectangle(0,0,27,58,police?0x344552:[0x2a6b65,0x6c5268,0x676653][i%3]).setStrokeStyle(2,0x263238),
     this.add.rectangle(0,-5,20,22,0x8aa9aa,.5),
     this.add.rectangle(-8,-25,7,4,0xf5ce90),
     this.add.rectangle(8,-25,7,4,0xf5ce90)
    ]);
    if(police){
     const blue=this.add.rectangle(-6,0,8,5,0x61b1fb);
     const red=this.add.rectangle(6,0,8,5,0xf86670);
     car.add([blue,red]);
     this.tweens.add({targets:[red,blue],alpha:.2,duration:220,yoyo:true,repeat:-1});
     this.policeCars=this.policeCars||[];
     this.policeCars.push(car);
    }
    this.tweens.add({targets:car,y:i%2?1345:-30,duration:26000+i*1800,yoyo:true,repeat:-1,ease:'Linear'});
   }
  }
  goTo(x,y,pending=null){
   this.goal={x:Phaser.Math.Clamp(x,20,WORLD.width-20),y:Phaser.Math.Clamp(y,20,WORLD.height-20)};
   this.pending=pending;
   this.goalMarker.setPosition(this.goal.x,this.goal.y).setVisible(true);
   this.tweens.add({targets:this.goalMarker,scale:1.7,alpha:.35,duration:500,yoyo:true,repeat:0});
  }
  update(_time,delta){
   if(!this.player||!this.keys)return;
   const dt=Math.min(.07,(delta||16)/1000);
   const k=this.keys;
   let dx=(k.D.isDown||k.RIGHT.isDown?1:0)-(k.A.isDown||k.LEFT.isDown?1:0);
   let dy=(k.S.isDown||k.DOWN.isDown?1:0)-(k.W.isDown||k.UP.isDown?1:0);
   if(dx||dy){this.goal=null;this.pending=null;this.goalMarker.setVisible(false);}
   else if(this.goal){
    const deltaX=this.goal.x-this.player.x,deltaY=this.goal.y-this.player.y;
    const distance=Math.hypot(deltaX,deltaY);
    if(distance<6){
     this.goal=null;this.goalMarker.setVisible(false);
     if(this.pending){const payload=this.pending;this.pending=null;callbacks.onInteract?.(payload);}
    }else{dx=deltaX/distance;dy=deltaY/distance;}
   }
   if(dx||dy){
    const len=Math.hypot(dx,dy)||1;
    const speed=k.SPACE.isDown?350:240;
    this.player.x=Phaser.Math.Clamp(this.player.x+dx/len*dt*speed,20,WORLD.width-20);
    this.player.y=Phaser.Math.Clamp(this.player.y+dy/len*dt*speed,20,WORLD.height-20);
    this.player.setScale(.985+Math.sin(this.time.now/85)*.025);
   }else this.player.setScale(1);
   this.selectHalo.setPosition(this.player.x,this.player.y+15);
   if(this.time.now-this.lastFootstep>1800){
    this.lastFootstep=this.time.now;
    callbacks.onPosition?.({x:Math.round(this.player.x),y:Math.round(this.player.y)});
   }
   const heat=callbacks.getState?.()?.heat||0;
   if(this.policeCars)for(const car of this.policeCars)car.setVisible(heat>=25);
  }
 }
 const game=new Phaser.Game({
  type:Phaser.AUTO,parent:node,width:node.clientWidth||920,height:node.clientHeight||650,
  backgroundColor:'#0d161b',render:{antialias:true,pixelArt:false},
  scale:{mode:Phaser.Scale.RESIZE,autoCenter:Phaser.Scale.CENTER_BOTH},
  scene:[CityScene],input:{mouse:{preventDefaultWheel:true}}
 });
 return {
  destroy(){active=false;game.destroy(true);},
  jump(x,y){const scene=game.scene.getScene('CityScene');if(scene?.player){scene.player.setPosition(x,y);scene.cameras.main.centerOn(x,y);}},
  move(x,y){const scene=game.scene.getScene('CityScene');scene?.goTo?.(x,y);}
 };
}
