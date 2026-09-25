import fs from 'node:fs';
import {load} from 'cheerio';
const slug=process.argv[2], ids=process.argv.slice(3);
const html=fs.readFileSync(`scripts/reference/${slug}.html`,'utf8'),$=load(html),css=$('style').text()+fs.readFileSync(`scripts/reference/${slug}.css`,'utf8');
for(const id of ids){const r=$('#'+id);console.log('\n'+id, r.attr('data-record-type'));console.log([...css.matchAll(new RegExp('#'+id+'[^{}]*\\{[^{}]*\\}','g'))].map(m=>m[0]).filter(s=>/title|descr|inner-col|t-cover|t-col|t-item|t-card|wrapper/.test(s)).slice(0,35).join('\n'));}
