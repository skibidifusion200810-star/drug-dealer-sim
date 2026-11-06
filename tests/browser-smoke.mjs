import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {chromium} from 'playwright-core';
import {setTimeout as sleep} from 'node:timers/promises';

const port=4175,url='http://127.0.0.1:'+port+'/drug-dealer-sim/';
const child=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port',String(port),'--strictPort'],{
 env:{...process.env},stdio:['ignore','pipe','pipe']
});
let serverLog='';
child.stdout.on('data',c=>{serverLog+=c.toString()});
child.stderr.on('data',c=>{serverLog+=c.toString()});
let browser,page;
const errors=[];
try{
 let online=false;
 for(let i=0;i<80;i++){
  if(child.exitCode!==null)throw Error('Preview server terminated unexpectedly: '+serverLog);
  try{const r=await fetch(url);if(r.ok){online=true;break;}}catch{}
  await sleep(250);
 }
 assert(online,'Preview server did not start. '+serverLog);
 browser=await chromium.launch({
  channel:'chrome',headless:true,
  args:['--no-sandbox','--disable-dev-shm-usage','--use-gl=angle','--use-angle=swiftshader',
   '--enable-webgl-software-rendering','--ignore-gpu-blocklist']
 });
 page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
 page.on('pageerror',error=>errors.push(error.stack||error.message));
 const response=await page.goto(url,{waitUntil:'domcontentloaded'});
 assert.equal(response.status(),200,'GitHub Pages HTML must return HTTP 200');
 await page.waitForSelector('.city-webgl',{timeout:20000});
 await page.waitForTimeout(1500);
 const initial=await page.evaluate(()=>{
  const canvas=document.querySelector('.city-webgl');
  return {width:canvas?.width,height:canvas?.height,hasWebGL:!!(canvas?.getContext('webgl2')||canvas?.getContext('webgl'))};
 });
 assert(initial.width>500&&initial.height>200,'The 3D rendering canvas must fill the game viewport');
 assert(initial.hasWebGL,'The game must obtain a working WebGL rendering context');
 assert.equal(errors.length,0,'Browser errors: '+errors.join('\n'));
 await page.locator('.start-btn').click();
 await page.waitForSelector('.fps-crosshair');
 await page.locator('.fps-menu-button').click();
 await page.waitForSelector('.sidebar.mobile-open');
 await page.locator('.sidebar nav button').filter({hasText:'Underground market'}).click();
 await page.waitForSelector('.panel');
 assert(await page.locator('.panel').getByText('Blue Ember').count()>0);
 const walletBefore=await page.locator('.wallet b').innerText();
 await page.locator('.panel').getByRole('button',{name:/BUY 3 FOR/}).first().click();
 await page.waitForTimeout(120);
 const walletAfter=await page.locator('.wallet b').innerText();
 assert.notEqual(walletBefore,walletAfter,'Buying fictional goods should change wallet balance');
 await page.locator('.panel-close').click();
 await page.locator('.fps-menu-button').click();
 await page.locator('.sidebar nav button').filter({hasText:'Street contacts'}).click();
 await page.locator('.npc-row').first().getByRole('button',{name:/FIND/}).click();
 await page.waitForTimeout(320);
 await page.keyboard.press('e');
 await page.waitForSelector('.panel');
 assert(await page.locator('.panel').getByText('Contact Meeting').count()>0,'Pressing E near NPC should open negotiation');
 assert.equal(errors.length,0,'Browser runtime errors: '+errors.join('\n'));
 console.log('3D browser smoke test passed: WebGL canvas rendered, inventory purchase works, and E interacts with an NPC.');
}catch(e){
 console.error('3D browser smoke test failed. '+(e.stack||e));
 console.error('Preview output:',serverLog.slice(-1200));
 console.error('Browser errors:',errors.slice(0,7));
 if(page){const snapshot=await page.evaluate(()=>({url:location.href,title:document.title,body:document.body.innerText.slice(0,800),root:document.getElementById('root')?.innerHTML.slice(0,1000)})).catch(err=>({error:String(err)}));console.error('Page snapshot:',JSON.stringify(snapshot));}
 process.exitCode=1;
}finally{
 await browser?.close();
 child.kill('SIGTERM');
}
