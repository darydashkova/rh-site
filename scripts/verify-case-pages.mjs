import { readFile, readdir, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
import * as cheerio from 'cheerio';
const files=(await readdir('app/pages')).filter(x=>x.startsWith('case-study-')&&x.endsWith('.vue'));
assert.equal(files.length,8);
for(const file of files){
 const src=await readFile('app/pages/'+file,'utf8');assert(!/v-html|innerHTML|t-redactor|tn-atom|data-record-type/.test(src),file+' must be native Vue');
 const r=await fetch('http://127.0.0.1:3001/'+file.replace('.vue',''));assert.equal(r.status,200,file);
 const $=cheerio.load(await r.text());assert.equal($('h1').length,1,file);assert.equal($('.case-services__grid article').length,6);assert.equal($('.case-results dt').length,6);assert.equal($('.case-article').length,2);assert($('table').length>=2);assert($('.case-article').text().length>8000);
 for(const img of $('.case-study img').toArray()){const url=$(img).attr('src');assert(url.startsWith('/images/'));await access('public'+url);const rr=await fetch('http://127.0.0.1:3001'+url);assert.equal(rr.status,200,url);}
 for(const a of $('.case-related__card').toArray())assert($(a).attr('href').startsWith('/case-study-'));
 console.log('PASS',file);
}
