import fs from 'node:fs';import{load}from'cheerio';
const $=load(fs.readFileSync('scripts/reference/online-presence-management.html','utf8'));
const text=fs.readFileSync('app/pages/calculator/serp-reputation-score.vue','utf8');console.log([...text.matchAll(/[^{}]*wrap\s*\{[^}]*\}/g)].map(m=>m[0]).join('\n'));console.log(text.match(/[^{}]*nda[^{}]*\{[^}]*\}/g)?.slice(0,10));
