import { readFile, writeFile } from 'node:fs/promises';
import { load } from 'cheerio';
const read = async slug => JSON.parse(await readFile(`scripts/reference/${slug}.json`,'utf8'));
const save = (name,data) => writeFile(`app/data/${name}.json`,JSON.stringify(data,null,2)+'\n');
const find = (blocks,id) => blocks.find(b=>b.id===id).atoms.filter(a=>a.text);
const texts = (blocks,id) => find(blocks,id).map(a=>a.text);
const chunk = (arr,n) => Array.from({length:Math.ceil(arr.length/n)},(_,i)=>arr.slice(i*n,(i+1)*n));
const sol = await read('solutions');
const groupDefs = [
 ['detection','Detection Solutions',"See risk before it's public",'companies',['rec2819562803','rec2819563403'],'https://reputation.house/rh-detection'],
 ['control','Control Solutions','Manage what the market finds','companies',['rec2831237303','rec2831237503'],'https://reputation.house/rh-control'],
 ['defence','Defence Solutions','Contain an active crisis','companies',['rec2831239903'],'https://reputation.house/rh-defence'],
 ['protect','Protect','See Your Online Reputation Before It Affects You','individuals',['rec2831345403'],''],
 ['build','Build','Create a Strong Online Reputation From Scratch','individuals',['rec2831347503'],''],
 ['repair','Repair','Clear Old or Outdated Online Reputation History','individuals',['rec2831352203'],''],
 ['crisis','Crisis','Contain an Active Online Reputation Scandal','individuals',['rec2831353103'],'']
];
const groups = groupDefs.map(([id,title,description,audience,ids,href])=>({id,title,description,audience,href,services:ids.flatMap(id=>{const a=find(sol,id);return a.flatMap((item,i)=>item.text==='Learn More'?[{program:a[i-3].text,title:a[i-2].text,description:a[i-1].text,href:item.href}]:[]);})}));
const helpers=texts(sol,'rec2477280443');
const situations=texts(sol,'rec2478008973');
const situationPaths=['serm-services','remove-negative-content','crisis-management-agency','personal-reputation-crisis','brand-positioning-services','online-reputation-monitoring','ai-influence-services','online-review-management','business-media-presence'];
await save('solutions',{intro:texts(sol,'rec2477263123')[1],helpers:[0,7].map(i=>({label:helpers[i],title:helpers[i+1],description:helpers[i+2],tags:helpers.slice(i+3,i+6),action:helpers[i+6],href:find(sol,'rec2477280443')[i+6].href.trim()})),groups,situations:chunk(situations,2).map(([title,action],i)=>({title,action,href:`https://reputation.house/${situationPaths[i]}`}))});
const p=await read('reputation-management-pricing');
const hero=texts(p,'rec2479673061');
const defs=[['detection','rec2485564521','rec2485847361'],['control','rec2485904001','rec2485904241'],['defence','rec2485973591','rec2485974591'],['personal','rec2485976811','rec2485978691']];
const programs=defs.map(([id,main,extra])=>{const a=texts(p,main),r=texts(p,extra);return {id,title:a[0],description:a[1],features:a.slice(2,5),product:a[5],productDescription:a[7],kpi:a[9],price:id==='defence'?a[11]:a[10],unit:id==='defence'?a[12]:a[11],billing:id==='defence'?a[10]:a[12],name:a[14],related:chunk(r.slice(1),4).map(([title,description,billing,price])=>({title,description,billing,price}))};});
const stage=texts(p,'rec2479673201'),proposal=texts(p,'rec2479673081'),market=texts(p,'rec2479673311'),cases=texts(p,'rec2479719941');
await save('pricing',{title:hero[22],description:hero[23],eyebrow:hero[24],summary:[{name:hero[0],price:hero[1],unit:'',description:hero[2],id:'risk-check'},...[3,7,11,15].map((i,j)=>({name:hero[i],price:hero[i+1],unit:hero[i+2],description:hero[i+3],id:defs[j][0]}))],paymentIntro:texts(p,'rec2479919741'),paymentModels:chunk(texts(p,'rec2479919261'),4).map(([label,title,description,usage])=>({label,title,description,usage})),continuous:texts(p,'rec2479948831'),stepsIntro:stage.slice(0,3),steps:chunk(stage.slice(3),3).map(([number,title,description])=>({number,title,description})),timelines:chunk(texts(p,'rec2480000671').slice(0,6),3).map(([label,title,description])=>({label,title,description})),timelineNote:texts(p,'rec2480000671')[6],proposal:{title:proposal[0],description:proposal[1],label:proposal[2],metrics:chunk(texts(p,'rec2479673111'),2).map(([title,description])=>({title,description}))},programs,marketIntro:texts(p,'rec2479719101'),marketCases:[0,5].map(i=>({title:market[i],label:market[i+1],description:market[i+2],source:market[i+4]})),marketConclusion:market.slice(10,12),resultsIntro:texts(p,'rec2480069161'),cases:[0,10].map(i=>({title:cases[i],region:cases[i+1],before:cases[i+3],result:cases[i+5],after:cases[i+6],tags:cases.slice(i+7,i+10)})),faq:p.find(b=>b.faq.length).faq});
const f=await read('faq');
const $=load(await readFile('scripts/reference/faq.html','utf8'));
const categories=['What Is Digital Reputation Risk?','How AI & Search Shape Your Reputation','Reputation House — What We Do','Our Products','Industries & Who We Work With','How the Process Works','Results, Timelines & ROI','Legal, Ethics & Confidentiality'];
const faqGroups=f.filter(b=>b.faq.length).map((b,i)=>({title:categories[i],questions:$(`#${b.id} .t668__accordion, #${b.id} .t849__accordion`).toArray().map(e=>{const answer=$(e).find('.t668__text,.t849__text').clone();answer.find('br').replaceWith('\n');answer.find('li,p').append('\n');return {title:$(e).find('.t668__title,.t849__title').text().trim(),answer:answer.text().replace(/[ \t]+/g,' ').replace(/\n\s*\n/g,'\n\n').trim()};})}));
await save('faq-page',{description:texts(f,'rec3528537103')[1],intro:texts(f,'rec3534505103'),groups:faqGroups});
const c=await read('contacts'),offices=find(c,'rec2492718813');
await save('contacts',{hero:texts(c,'rec3412959103'),title:offices[1].text,offices:[2,7,12].map(i=>({title:offices[i].text,address:offices[i+1].text,contact:offices[i+3].text,email:offices[i+4].text})),callout:texts(c,'rec2492738783')});
console.log('Structured page data created:',groups.reduce((n,g)=>n+g.services.length,0),'services,',faqGroups.reduce((n,g)=>n+g.questions.length,0),'FAQ answers,',programs.length,'pricing programs.');
