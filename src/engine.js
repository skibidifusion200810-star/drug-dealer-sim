import {PRODUCTS,DISTRICTS,CONTACTS,PROPERTIES,BUILDINGS,xpLevel,xpNext,getRank} from './data.js';
export const SAVE_KEY='cartel-city-save-v1';
const round=n=>Math.max(0,Math.round(n));
const pick=a=>a[Math.floor(Math.random()*a.length)];
export const money=n=>'$'+Math.round(n||0).toLocaleString('en-US');
export const capacity=s=>PROPERTIES.filter(p=>s.properties.includes(p.id)).reduce((n,p)=>n+p.capacity,0);
export const usedCapacity=s=>Object.values(s.stock).reduce((a,n)=>a+n,0);
export const level=s=>xpLevel(s.xp);
export const price=(s,p,kind='retail',district='old')=>{
 const product=typeof p==='string'?PRODUCTS.find(q=>q.id===p):p;
 if(!product)return 0;
 const zone=DISTRICTS.find(x=>x.id===district)||DISTRICTS[0];
 const multiplier=s.market[product.id]||1;
 return Math.max(1,round((kind==='wholesale'?product.wholesale:product.retail)*multiplier*(kind==='wholesale'?1:zone.demand)));
};
const note=(s,msg,tag='NEWS')=>{
 s.logs.unshift({id:s.serial++,message:msg,tag,time:s.elapsed});
 s.logs=s.logs.slice(0,45);
};
export function initialState(){
 const stamp=Date.now();
 return {
  version:1,seed:Math.floor(Math.random()*999999),cash:500,xp:0,heat:8,rep:2,day:1,elapsed:0,
  stock:{ember:6,velvet:0,chromatic:0,nova:0},
  market:{ember:1,velvet:1,chromatic:1,nova:1},
  contacts:{},properties:['apartment'],workers:[],territory:{old:18,neon:0,heights:0,south:0,docks:0,industrial:0},
  deals:0,earned:0,missionsDone:0,missions:[],mission:null,missionSerial:1,
  logs:[{id:1,tag:'WELCOME',message:'Welcome to Cartel City. Find Marcus or Ivy to make your first deal.',time:0}],
  cooldown:0,serial:2,lastSaved:stamp,player:{x:410,y:320},weather:'CLEAR',event:'QUIET STREETS'
 };
}
export function loadState(storage=globalThis.localStorage){
 try{
  const data=JSON.parse(storage.getItem(SAVE_KEY)||'null');
  if(!data||data.version!==1||typeof data.cash!=='number'||!data.player)return initialState();
  // Catch up modestly without letting infinite offline income accumulate.
  const idle=Math.min(100,Math.max(0,Math.floor((Date.now()-(data.lastSaved||Date.now()))/1000)));
  return idle?advance(data,idle):data;
 }catch{return initialState();}
}
export function saveState(state,storage=globalThis.localStorage){
 try {storage.setItem(SAVE_KEY,JSON.stringify({...state,lastSaved:Date.now()}));return true;}catch{return false;}
}
export function quote(s,npc,productId){
 const p=PRODUCTS.find(p=>p.id===productId);
 if(!p)return 0;
 const trust=s.contacts[npc.id]?.trust||25;
 const premium=npc.preferred===p.id?1.18:1;
 return round(price(s,p,'retail',npc.district)*premium*(1+trust/500));
}
export function canAccessDistrict(s,id){
 return level(s)>=(DISTRICTS.find(d=>d.id===id)?.unlock||1);
}
export function advance(state,seconds=1){
 const s=structuredClone(state);
 let steps=Math.min(120,Math.max(0,Math.floor(seconds)));
 while(steps--){
  s.elapsed+=1;
  s.day=1+Math.floor(s.elapsed/260);
  if(s.heat>0 && s.elapsed%7===0)s.heat=Math.max(0,s.heat-1);
  if(s.cooldown>0)s.cooldown=Math.max(0,s.cooldown-1);
  if(s.elapsed%21===0){
   for(const worker of s.workers){
    if(s.stock.ember>0){
     s.stock.ember-=1;
     const profit=round(price(s,'ember','retail',worker.district)*0.57);
     s.cash+=profit;s.earned+=profit;s.xp+=6;
     s.heat=Math.min(100,s.heat+Math.ceil(Math.random()*2));
     worker.earned+=profit;
     if(Math.random()<.05)note(s,worker.name+' completed an NPC order. +'+money(profit),'CREW');
    }
   }
  }
  if(s.elapsed%42===0){
   const p=pick(PRODUCTS);
   const drift=.82+Math.random()*.38;
   s.market[p.id]=Math.round(Math.min(1.65,Math.max(.66,s.market[p.id]*drift))*100)/100;
  }
  if(s.elapsed%155===0){
   const events=[
    {name:'NEON MILE AFTER DARK',message:'Night crowds increase demand near Neon Mile.',kind:'BOOM'},
    {name:'STREET CHECKPOINTS',message:'Patrols have intensified across the city.',kind:'HEAT'},
    {name:'MARKET SHORTAGE',message:'The underworld exchange reports tighter supplies.',kind:'MARKET'},
    {name:'THE CITY BREATHES',message:'A quiet hour gives every crew room to regroup.',kind:'CALM'},
    {name:'RIVAL MOVEMENT',message:'Rival crews are testing territorial boundaries.',kind:'RIVAL'}
   ];
   const ev=pick(events);s.event=ev.name;note(s,ev.message,'CITY EVENT');
   if(ev.kind==='HEAT')s.heat=Math.min(100,s.heat+8);
   if(ev.kind==='CALM')s.heat=Math.max(0,s.heat-10);
   if(ev.kind==='MARKET')for(const id of Object.keys(s.market))s.market[id]=Math.min(1.65,s.market[id]*1.1);
  }
  if(s.heat>=88 && s.cooldown===0){
   const fine=round(s.cash*.22);
   s.cash=Math.max(0,s.cash-fine);
   s.heat=47;s.cooldown=55;
   note(s,'CITY CRACKDOWN: A raid cost your crew '+money(fine)+'. Operations are disrupted.','POLICE');
  }
 }
 return s;
}
function actionError(msg){throw new Error(msg)}
function currentPlayer(s){return {rank:getRank(level(s)),level:level(s),xp:s.xp,next:xpNext(level(s))}}
export function perform(state,action){
 const s=structuredClone(state);
 let message='';
 switch(action.type){
 case 'buy':{
  const p=PRODUCTS.find(p=>p.id===action.product);
  const qty=Number(action.quantity);
  if(!p||!Number.isSafeInteger(qty)||qty<1||qty>30)actionError('Choose a quantity between 1 and 30.');
  if(level(s)<p.unlock)actionError('Unlock this product at level '+p.unlock+'.');
  if(usedCapacity(s)+qty>capacity(s))actionError('Not enough storage space. Upgrade your property.');
  const cost=price(s,p,'wholesale')*qty;
  if(s.cash<cost)actionError('Not enough cash for this purchase.');
  s.cash-=cost;s.stock[p.id]+=qty;s.xp+=qty*2;s.heat=Math.min(100,s.heat+Math.ceil(qty/7));
  message='Purchased '+qty+' × '+p.name+' for '+money(cost)+'.';
  note(s,message,'SUPPLY');break;
 }
 case 'deal':{
  const npc=CONTACTS.find(x=>x.id===action.npc);
  const p=PRODUCTS.find(x=>x.id===action.product);
  if(!npc||!p)actionError('Contact or item not found.');
  if(!canAccessDistrict(s,npc.district))actionError('This district is locked. Increase your reputation first.');
  const qty=Number(action.quantity||1);
  if(!Number.isSafeInteger(qty)||qty<1||qty>3)actionError('Each meeting allows 1–3 units.');
  if((s.stock[p.id]||0)<qty)actionError('You do not have enough stock.');
  const contact=s.contacts[npc.id]||{trust:25,lastDeal:-1000};
  if(s.elapsed-contact.lastDeal<12)actionError(npc.name+' needs some time before another meeting.');
  const acceptable=quote(s,npc,p.id);
  const ask=Number(action.ask);
  if(!Number.isFinite(ask)||ask<1||ask>5000)actionError('Enter a valid offer.');
  const mood=npc.personality==='friendly'?0.13:npc.personality==='impatient'?-0.06:0;
  const successChance=Math.min(.97,Math.max(.08,.78+(contact.trust-25)*.004+mood-(ask/acceptable-1)*.85-(p.id!==npc.preferred?.13:0)-(s.heat>65?.12:0)));
  contact.lastDeal=s.elapsed;
  if(Math.random()<=successChance){
   const payout=round(ask*qty);
   s.cash+=payout;s.stock[p.id]-=qty;s.deals+=1;s.earned+=payout;s.xp+=30+qty*10;s.rep+=2;
   s.heat=Math.min(100,s.heat+2+qty*2+Math.ceil((DISTRICTS.find(d=>d.id===npc.district)?.risk||10)/35));
   contact.trust=Math.min(100,contact.trust+4);
   message=npc.name+' accepted your offer. +'+money(payout);
   note(s,message,'DEAL');
  }else{
   contact.trust=Math.max(0,contact.trust-3);
   s.heat=Math.min(100,s.heat+1);
   message=npc.name+' turned down your offer. Try another price later.';
   note(s,message,'REJECTED');
  }
  s.contacts[npc.id]=contact;break;
 }
 case 'property':{
  const property=PROPERTIES.find(p=>p.id===action.id);
  if(!property)actionError('Unknown property.');
  if(s.properties.includes(property.id))actionError('You already own this property.');
  if(s.cash<property.cost)actionError('Not enough cash.');
  s.cash-=property.cost;s.properties.push(property.id);s.xp+=180;
  message='Acquired '+property.name+'. Your storage capacity increased.';
  note(s,message,'PROPERTY');break;
 }
 case 'hire':{
  const district=DISTRICTS.find(d=>d.id===action.district)||DISTRICTS[0];
  if(!canAccessDistrict(s,district.id))actionError('This district is still locked.');
  const max=1+s.properties.length*2;
  if(s.workers.length>=max)actionError('Your properties can only support '+max+' crew members.');
  const cost=350+s.workers.length*220;
  if(s.cash<cost)actionError('Not enough cash. Recruitment costs '+money(cost)+'.');
  s.cash-=cost;
  const names=['KAI','GHOST','MASON','SKYE','ROOK','ACE','ONYX','JAX','REMI','BLAZE'];
  const name=names[s.workers.length%names.length];
  s.workers.push({id:s.serial++,name,district:district.id,earned:0});
  s.xp+=55;
  message=name+' joined your crew in '+district.short+'. Workers use Blue Ember stock to complete fictional NPC orders.';
  note(s,message,'CREW');break;
 }
 case 'territory':{
  const district=DISTRICTS.find(d=>d.id===action.id);
  if(!district)actionError('Unknown territory.');
  if(!canAccessDistrict(s,district.id))actionError('Unlock this district at level '+district.unlock+'.');
  const current=s.territory[district.id]||0;
  if(current>=100)actionError('You already control this district.');
  const fee=90+Math.floor(current/20)*75;
  if(s.cash<fee)actionError('You need '+money(fee)+' to organize a territory challenge.');
  s.cash-=fee;
  const chance=Math.max(.35,Math.min(.93,.86-district.risk/180+level(s)/80));
  if(Math.random()<chance){
   const advance=14+Math.floor(Math.random()*13);
   s.territory[district.id]=Math.min(100,current+advance);
   s.xp+=80;s.rep+=8;s.heat=Math.min(100,s.heat+7);
   message='Territory secured! '+district.short+' control +'+advance+'%.';
  }else{s.heat=Math.min(100,s.heat+12);message='Your rivals held the block. Heat is rising.';}
  note(s,message,'TERRITORY');break;
 }
 case 'missionStart':{
  if(s.mission)actionError('Finish the current mission first.');
  const destinations=BUILDINGS.filter(b=>b.kind==='mission'||b.kind==='contact'||b.kind==='safehouse');
  const dest=destinations[Math.floor(Math.random()*destinations.length)];
  const reward=175+level(s)*35;
  s.mission={id:s.missionSerial++,target:dest.id,title:'NIGHT DELIVERY',reward};
  message='New mission: reach '+dest.name+' to finish the run. Reward: '+money(reward)+'.';
  note(s,message,'MISSION');break;
 }
 case 'visit':{
  const b=BUILDINGS.find(b=>b.id===action.id);
  if(!b)actionError('Unknown building.');
  if(s.mission&&s.mission.target===b.id){
   s.cash+=s.mission.reward;s.earned+=s.mission.reward;s.xp+=95;s.rep+=5;s.heat=Math.min(100,s.heat+7);
   s.missionsDone++;message='Delivery completed. +'+money(s.mission.reward)+' and +95 XP.';
   note(s,message,'MISSION');s.mission=null;
  }else message='Arrived at '+b.name+'.';
  break;
 }
 case 'laylow':{
  if(s.heat<5)actionError('The streets are already quiet.');
  const cost=Math.min(s.cash,Math.ceil(s.heat*1.2));
  s.cash-=cost;s.heat=Math.max(0,s.heat-32);
  message='You kept a low profile and reduced heat. Cost: '+money(cost)+'.';
  note(s,message,'LOW PROFILE');break;
 }
 case 'travel':{
  const x=Number(action.x),y=Number(action.y);
  if(Number.isFinite(x)&&Number.isFinite(y)){s.player={x:Math.max(0,Math.min(1920,x)),y:Math.max(0,Math.min(1320,y))};}
  return {state:s,message:''};
 }
 default:actionError('Unknown action.');
 }
 s.lastSaved=Date.now();
 return {state:s,message};
}
export function score(s){return round(s.cash+PRODUCTS.reduce((n,p)=>n+(s.stock[p.id]||0)*price(s,p,'wholesale'),0)+s.properties.reduce((n,id)=>n+(PROPERTIES.find(p=>p.id===id)?.cost||0),0))}
