import fs from 'node:fs';
import crypto from 'node:crypto';
const file='app/data/solutions.json';
const data=JSON.parse(fs.readFileSync(file));
const reference=JSON.parse(fs.readFileSync('scripts/reference/solutions.json'));
const cards=reference.find(r=>r.id==='rec2819466403').atoms;
const assets=JSON.parse(fs.readFileSync('scripts/reference/service-assets.json'));
for(const [i,id] of ['detection','control','defence'].entries()){
 const group=data.groups.find(g=>g.id===id),url=cards[i*3].image;
 const name=`service-${crypto.createHash('sha1').update(url).digest('hex').slice(0,10)}.svg`;
 group.icon='/images/'+name; group.categoryDescription=cards[i*3+2].text;assets[name]=url;
}
data.groups.find(g=>g.id==='defence').services.find(s=>s.title==='Brand Protection').href='/brand-protection-services';
fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n');
fs.writeFileSync('scripts/reference/service-assets.json',JSON.stringify(assets,null,2)+'\n');
