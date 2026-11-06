import test from 'node:test';
import assert from 'node:assert/strict';
import {initialState,perform,advance,price,capacity,usedCapacity,saveState,loadState,score} from '../src/engine.js';
import {BUILDINGS} from '../src/data.js';

test('players start with $500, a flat and stock, and can buy goods',()=>{
 const start=initialState();
 assert.equal(start.cash,500);
 assert.equal(start.stock.ember,6);
 assert.equal(capacity(start),18);
 const {state}=perform(start,{type:'buy',product:'ember',quantity:2});
 assert.equal(state.cash,450);
 assert.equal(state.stock.ember,8);
 assert.equal(start.cash,500,'actions do not mutate the input state');
 assert.throws(()=>perform(state,{type:'buy',product:'ember',quantity:999}),/quantity/i);
 assert.throws(()=>perform(state,{type:'buy',product:'nova',quantity:1}),/Unlock/);
 assert.ok(score(state)>0);
});
test('NPC trade uses inventory, calculates payout and changes heat',()=>{
 let state=initialState();
 const originalRandom=Math.random;
 Math.random=()=>0.01;
 try{
  const {state:next}=perform(state,{type:'deal',npc:'marcus',product:'ember',quantity:1,ask:60});
  assert.equal(next.stock.ember,5);
  assert.equal(next.cash,560);
  assert.equal(next.deals,1);
  assert.ok(next.heat>state.heat);
  assert.ok(next.contacts.marcus.trust>25);
  assert.throws(()=>perform(next,{type:'deal',npc:'marcus',product:'ember',quantity:1,ask:60}),/time/i);
 }finally{Math.random=originalRandom;}
});
test('missions require visiting target building and pay correctly',()=>{
 const {state:withMission}=perform(initialState(),{type:'missionStart'});
 assert.ok(BUILDINGS.some(b=>b.id===withMission.mission.target));
 const target=withMission.mission.target;
 const {state:complete}=perform(withMission,{type:'visit',id:target});
 assert.equal(complete.mission,null);
 assert.equal(complete.missionsDone,1);
 assert.ok(complete.cash>withMission.cash);
});
test('properties, workers and warehouse capacity are tracked',()=>{
 let game=initialState();
 game.cash=5000;
 game=perform(game,{type:'property',id:'lot'}).state;
 assert.ok(capacity(game)>18);
 game=perform(game,{type:'hire',district:'old'}).state;
 assert.equal(game.workers.length,1);
 game=advance(game,21);
 assert.equal(game.stock.ember,5,'worker uses actual stock');
 assert.ok(game.workers[0].earned>0);
 assert.ok(game.cash>0);
});
test('heat decays and high heat triggers a fictional crackdown',()=>{
 const game=initialState();
 game.heat=90;game.cash=1000;game.elapsed=21;
 const next=advance(game,1);
 assert.ok(next.heat<90);
 assert.ok(next.cash<1000);
 assert.ok(next.logs.some(l=>l.tag==='POLICE'));
});
test('local save persists and loads without a remote backend',()=>{
 const map=new Map();
 const storage={getItem:k=>map.get(k)||null,setItem:(k,v)=>map.set(k,v)};
 const original=initialState();
 original.cash=6789;
 assert.equal(saveState(original,storage),true);
 const restored=loadState(storage);
 assert.equal(restored.cash,6789);
 assert.equal(restored.stock.ember,6);
});
