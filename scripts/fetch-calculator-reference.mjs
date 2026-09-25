import {mkdir,writeFile} from 'node:fs/promises';
const slugs=['serp-reputation-score','executive-reputation-score','crisis-response-time','brand-monitoring-roi','review-impact-revenue','reputation-recovery-timeline','reputation-damage-cost','reputation-risk-score'];
await mkdir('scripts/reference/calculators',{recursive:true});
for(const slug of slugs){const r=await fetch('https://reputation.house/calculator/'+slug);if(!r.ok)throw Error(slug+': '+r.status);await writeFile('scripts/reference/calculators/'+slug+'.html',await r.text());console.log(slug);}
