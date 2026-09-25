import fs from 'node:fs';
const pages=JSON.parse(fs.readFileSync('app/data/servicePages.json'));
for(const [slug,p] of Object.entries(pages).filter(([s])=>s.startsWith('personal-')||s.startsWith('public-figure'))){
 console.log('\n'+slug,JSON.stringify(p.hero));
 for(const s of p.sections) console.log(s.referenceId,s.kind,s.layout,s.title,s.eyebrow,'body',s.body?.length,'aside',s.aside?.length,'cards',s.cards?.map(c=>c.title).join(' / '));
}
