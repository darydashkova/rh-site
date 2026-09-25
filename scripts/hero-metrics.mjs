import fs from 'node:fs';import {load} from 'cheerio';
for(const slug of ['serm-services','online-review-management','ai-influence-services','brand-positioning-services','brand-launch-strategy','employer-reputation-management']){
const $=load(fs.readFileSync(`scripts/reference/${slug}.html`,'utf8'));const r=$('#allrecords > .r[data-record-type="396"]').first();
console.log(slug,r.attr('id'),r.find('.t396__artboard').attr('data-artboard-height'));
for(const e of r.find('.tn-elem[data-elem-type="text"]').toArray())console.log($(e).attr('data-field-left-value'),$(e).attr('data-field-top-value'),$(e).attr('data-field-width-value'),$(e).text().trim().slice(0,100));
}
