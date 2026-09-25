import assert from 'node:assert/strict';
import fs from 'node:fs';
import {load} from 'cheerio';
const base='http://127.0.0.1:3001';
for(const slug of ['sitemap_html','cookies-policy','privacy-policy','risk-calculator','news','blog']){
 const source=fs.readFileSync(`app/pages/${slug}.vue`,'utf8');
 assert.ok(!/v-html|innerHTML|tn-atom|t-records/.test(source),`${slug}: native Vue template`);
 const response=await fetch(`${base}/${slug}`);assert.equal(response.status,200,slug);
 const $=load(await response.text());assert.equal($('main h1').length,1,slug);
 for(const image of $('main img').toArray()){const src=$(image).attr('src');assert.ok(src.startsWith('/images/'));assert.ok(fs.existsSync(`public${src}`),src);}
 if(slug==='news')assert.equal($('.article-row').length,10);
 if(slug==='blog'){assert.equal($('.resource-container .article-row').length,15);assert.equal($('.resource-company-news .article-row').length,10);}
 if(slug==='risk-calculator')assert.equal($('.article-row').length,8);
 if(slug==='sitemap_html')assert.ok($('.sitemap-list article').length>80);
 if(slug==='privacy-policy')for(const e of $('main a[href^="#"]').toArray()){const id=$(e).attr('href').slice(1);assert.ok($(`[id="${id}"]`).length,`missing anchor ${id}`);}
 console.log(`PASS ${slug}: Vue page, heading, images and content`);
}
