import fs from 'node:fs';
import {load} from 'cheerio';
const [slug, id, mode] = process.argv.slice(2);
const $ = load(fs.readFileSync(`scripts/reference/${slug}.html`, 'utf8'));
if (mode === 'html') console.log($(`#${id} .t396__artboard`).html() || $(`#${id}`).html());
else if (mode === 'css') console.log($(`#${id} style`).text());
else if (mode === 'links') console.log($(`#${id}`).find('a').toArray().map(e=>({text:$(e).text().trim(),href:$(e).attr('href'),parent:$(e).parent().attr('data-elem-type')})));
else {
 const records = id ? $(`#${id}`) : $('#allrecords > .r');
 for (const r of records.toArray()) {
  const items=$(r).find('.tn-atom').toArray().map(e=>({text:$(e).text().replace(/\s+/g,' ').trim(),image:$(e).find('img').attr('data-original'),type:$(e).parent().attr('data-elem-type')})).filter(e=>e.type!=='html'&&(e.text||e.image));
  console.log($(r).attr('id'),items.map((a,i)=>`${i}: ${a.text||a.image}`).join('\n'));
 }
}
