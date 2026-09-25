import { readFile } from 'node:fs/promises';
import { load } from 'cheerio';
for (const slug of ['rh-detection','rh-control','rh-defence','rh-personal','team']) {
  const $=load(await readFile(`scripts/reference/${slug}.html`,'utf8'));
  console.log('\n'+slug);
  const ids=slug==='team'?['rec3771643003','rec2283046943']:[$('#allrecords > .r').first().attr('id')];
  for(const id of ids){
    console.log(id);
    $(`#${id}`).find('img,[data-original]').toArray().slice(0,30).forEach((e,i)=>{
      const el=$(e);
      const source=el.attr('data-original')||el.attr('src')||'';
      if(source)console.log(i,el.attr('alt')||'',source);
    });
  }
}
