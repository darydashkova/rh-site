import fs from 'node:fs';import {load} from 'cheerio';
for(const slug of process.argv.slice(2)){
const $=load(fs.readFileSync('scripts/reference/calculators/'+slug+'.html','utf8'));
const blocks=$('.t123').toArray();
console.log(slug,blocks.length);
for(let i=0;i<blocks.length;i++) {const el=$(blocks[i]);fs.writeFileSync(`scripts/reference/calculators/${slug}-${i}.txt`,el.text());console.log(i,el.text().slice(0,160),el.text().length);}
}
