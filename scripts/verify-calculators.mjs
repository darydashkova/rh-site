import assert from 'node:assert/strict';
import fs from 'node:fs';
import {calculate,exposure} from '../app/utils/calculators/model.ts';
const sc=calculate('serp-reputation-score',{'rh-sc-owned':5,negatives:0,posone:'yes',wiki:'no'});assert.equal(sc.score,60);
assert.equal(calculate('serp-reputation-score',{'rh-sc-owned':10,negatives:0,posone:'yes',wiki:'yes'}).score,100);
assert.equal(calculate('serp-reputation-score',{'rh-sc-owned':0,negatives:3,posone:'no',wiki:'no'}).score,0);
assert.equal(calculate('executive-reputation-score',{site:'yes',linkedin:'yes',media:0,negative:'no',position:'mgmt'}).score,50);
const crisis=calculate('crisis-response-time',{type:'data_breach',spread:'slow',platform:'social'});assert.equal(crisis.value,'3h');assert.equal(crisis.metrics[0].value,'13.5h');
const roi=calculate('brand-monitoring-roi',{'rh-mentions':0,'rh-impressions':3000,'rh-cpm':12,'rh-negative':20,'rh-response':48});assert.equal(roi.value,'$0');assert.ok(!JSON.stringify(roi).includes('NaN'));
const review=calculate('review-impact-revenue',{'rh-ri-aov':2500,'rh-ri-customers':120,'rh-ri-rating':40,'rh-ri-count':45,'rh-ri-negative':15});assert.equal(review.value,'$345K');
const damage=calculate('reputation-damage-cost',{'rh-revenue':40,incident:'reviews',reach:'local',plan:'no'});assert.equal(damage.metrics.length,3);assert.ok(!JSON.stringify(damage).includes('NaN'));
const recovery=calculate('reputation-recovery-timeline',{incident:'reviews',reach:'local',active:'no',positive:'yes',size:'small'});assert.equal(recovery.value,'1–2.2 months');
const steps=JSON.parse(fs.readFileSync('app/data/calculators/reputation-risk-score.json'));assert.equal(steps.length,6);assert.equal(steps.flatMap(s=>s.groups).length,20);
const answers={};for(const s of steps)for(const q of s.groups)answers[q.key]=Math.max(...q.options.map(o=>Number(o.value)));assert.equal(exposure(answers).total,100);for(const key in answers)answers[key]=0;assert.equal(exposure(answers).total,0);
for(const f of fs.readdirSync('app/pages/calculator')){const text=fs.readFileSync('app/pages/calculator/'+f,'utf8');assert.ok(!/v-html|innerHTML|onclick=/.test(text));assert.ok(text.includes('<details'));}
console.log('Verified 8 calculator models, boundaries, all 20 exposure signals, and Vue FAQ templates.');
