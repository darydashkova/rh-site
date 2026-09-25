import assert from 'node:assert/strict';
import {readdir,readFile,access} from 'node:fs/promises';
import * as cheerio from 'cheerio';
const base=process.argv[2]||'http://127.0.0.1:3001';
const files=(await readdir('app/pages/anti-case')).filter(x=>x.endsWith('.vue'));
assert.equal(files.length,13);
for(const file of files){const src=await readFile('app/pages/anti-case/'+file,'utf8');assert(!/v-html|innerHTML|t-redactor|data-record-type/.test(src));
 const r=await fetch(base+'/anti-case/'+file.replace('.vue',''));assert.equal(r.status,200,file);const $=cheerio.load(await r.text());
 assert.equal($('h1').length,1);assert.equal($('.anti-article').length,1);assert.equal($('footer,.chat-launcher,.consultation-banner').length,0);assert($('.anti-body').text().length>7000);assert($('.anti-body h4').length>=4);assert($('.anti-callout').length>=1);
 for(const img of $('.anti-article img').toArray()){const url=$(img).attr('src');assert(url.startsWith('/images/'));await access('public'+url);assert(Number($(img).attr('width'))>0);assert(Number($(img).attr('height'))>0);assert.equal((await fetch(base+url)).status,200);}
 assert.equal($('.anti-back').attr('href'),'/case-studies?tab=anti#case-directory');console.log('PASS',file);
}
const $=cheerio.load(await(await fetch(base+'/case-studies?tab=anti')).text());assert.equal($('.case-tabs [aria-selected=true]').text().trim(),'Anti-cases');for(const a of $('.case-card__more').toArray())assert($(a).attr('href').startsWith('/anti-case/'));
console.log('PASS anti-case directory links');
