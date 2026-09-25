import { load } from 'cheerio';
import { mkdir, writeFile } from 'node:fs/promises';
const pages = process.argv.slice(2).length ? process.argv.slice(2) : ['rh-detection', 'rh-control', 'rh-defence', 'rh-personal', 'team'];
await mkdir('scripts/reference', {recursive:true});
for (const slug of pages) {
  const response = await fetch(`https://reputation.house/${slug}`);
  if (!response.ok) throw new Error(`${slug}: ${response.status}`);
  const html = await response.text();
  const $ = load(html);
  const clean = e => $(e).text().replace(/\s+/g,' ').trim();
  const blocks = $('#allrecords > .r').toArray().map(block=>({
    id:$(block).attr('id'),
    atoms:$(block).find('.tn-elem').toArray().filter(e=>$(e).attr('data-elem-type')!=='html').map(e=>({
      text:clean($(e).find('.tn-atom').first()),
      type:$(e).attr('data-elem-type'),
      x:$(e).attr('data-field-left-value'),y:$(e).attr('data-field-top-value'),
      width:$(e).attr('data-field-width-value'),
      href:$(e).find('a').first().attr('href'),
      image:$(e).find('img').first().attr('data-original')||$(e).find('img').first().attr('src')
    })).filter(e=>e.text||e.image),
    faq:$(block).find('.t668__accordion, .t849__accordion').toArray().map(e=>({title:clean($(e).find('.t668__title,.t849__title')),answer:clean($(e).find('.t668__text,.t849__text'))})),
    text:clean($(block).clone().find('script,style').remove().end())
  })).filter(b=>b.atoms.length||b.faq.length);
  await writeFile(`scripts/reference/${slug}.json`, JSON.stringify(blocks,null,2));
  await writeFile(`scripts/reference/${slug}.html`, html);
  console.log(slug, blocks.map(b=>`${b.id}: ${b.atoms.filter(a=>a.text).map(a=>a.text).slice(0,3).join(' | ')} FAQ:${b.faq.length}`).join('\n'));
}
