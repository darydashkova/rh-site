import fs from 'node:fs';
import {load} from 'cheerio';
const slug=process.argv[2]; const $=load(fs.readFileSync(`scripts/reference/${slug}.html`,'utf8'));
const clean=e=>$(e).text().replace(/\s+/g,' ').trim();
for(const r of $('#allrecords > .r').toArray()) {
 const id=$(r).attr('id'), texts=$(r).find('.tn-elem[data-elem-type="text"] > .tn-atom').toArray().map(clean);
 const simple=$(r).clone();simple.find('style,script').remove();
 console.log(id,$(r).attr('data-record-type'), 'bg='+($(r).attr('style')||'')+' '+($(r).find('style').text().match(/artboard\{[^}]+/)||[''])[0], texts.length?texts.map((t,i)=>`${i}:${t.slice(0,100)}`).join(' | '):clean(simple).slice(0,900));
}
