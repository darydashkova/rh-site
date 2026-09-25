import fs from 'node:fs';
import assert from 'node:assert/strict';
import {load} from 'cheerio';
const base=process.argv[2]||'http://127.0.0.1:3000';
for(const file of fs.readdirSync('app/data/situations')){
 const slug=file.replace('.json',''),data=JSON.parse(fs.readFileSync(`app/data/situations/${file}`,'utf8'));
 const source=fs.readFileSync(`app/pages/${slug}.vue`,'utf8');
 assert.ok(!source.includes('v-html'),slug+' must use a Vue template');
 assert.ok(!('html' in data),slug+' metadata must not contain page markup');
 const response=await fetch(`${base}/${slug}`);assert.equal(response.status,200,slug);
 const rendered=await response.text();assert.ok(rendered.includes('reference-page'),slug+' route');
 const $=load(rendered);$('script').remove();
 assert.equal($('script,iframe,[onclick],[onload]').length,0,slug+' active hosted code');
 assert.equal($('h1').length,1,slug+' heading');
 assert.ok($('.r').length>=10,slug+' sections');
 const css=fs.readFileSync(`public/styles/situations/${slug}.css`,'utf8');
 const images=[...new Set((rendered+css).match(/\/images\/[\w.-]+/g)||[])];
 for(const image of images)assert.ok(fs.existsSync('public'+image),slug+' missing '+image);
 for(const el of $('main a[href^="#"]').toArray()){
  const href=$(el).attr('href');if(['#consultation','#next','#prev','#'].includes(href))continue;
  assert.ok($(`[id="${href.slice(1)}"],[name="${href.slice(1)}"]`).length,slug+' missing anchor '+href);
 }
 console.log(`PASS ${slug}: ${$('.r').length} sections, ${images.length} local assets`);
}
