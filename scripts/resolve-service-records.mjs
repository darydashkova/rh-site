import fs from 'node:fs';
import {load} from 'cheerio';
const file='app/data/servicePages.json',pages=JSON.parse(fs.readFileSync(file));
const norm=s=>s.replace(/\s+/g,'').toLowerCase();
for(const [slug,p] of Object.entries(pages)){
 const $=load(fs.readFileSync(`scripts/reference/${slug}.html`,'utf8'));
 const records=$('#allrecords > .r').toArray(),text=records.map(r=>{const n=$(r).clone();n.find('script,style').remove();return norm(n.text());});let cursor=0;
 for(const s of p.sections){
  if(s.synthetic)continue;
  const known=records.findIndex(r=>$(r).attr('id')===s.referenceId);
  if(known>=0){cursor=known;continue;}
  const clues=[s.title,s.eyebrow,s.cards?.[0]?.title,s.cards?.[1]?.title,s.questions?.[0]?.title,s.headings?.[0],s.actions?.[0]?.label,s.callout?.title].filter(x=>x&&x.length>8).map(norm);
  if(!clues.length)continue;
  const candidates=records.map((r,i)=>({i,score:clues.filter(c=>text[i].includes(c)).length})).filter(x=>x.i>cursor&&x.score>0).sort((a,b)=>b.score-a.score||a.i-b.i);
  if(candidates.length){const chosen=candidates[0];s.referenceId=$(records[chosen.i]).attr('id');cursor=chosen.i;console.log(slug,s.kind,s.referenceId);}
 }
}
fs.writeFileSync(file,JSON.stringify(pages,null,2)+'\n');
