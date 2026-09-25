import {writeFile} from 'node:fs/promises';
const assets={
 'back-green.svg':'https://static.tildacdn.net/tild6362-6239-4533-a432-636634346261/back-green.svg',
 'pattern-spiral.svg':'https://static.tildacdn.net/tild3661-3465-4333-b036-656639623937/pattern_spiral.svg',
 'decision-branches.svg':'https://static.tildacdn.net/tild3365-6639-4132-b336-633834313937/svg_1784287548336.svg',
 'free-circle.svg':'https://static.tildacdn.net/tild3263-6365-4833-b038-323139663538/free-circle_1.svg',
 'target-goal.svg':'https://static.tildacdn.net/tild6132-3530-4361-b165-373465323265/target-goal_1.svg',
 'pin-location.svg':'https://static.tildacdn.net/tild6166-3434-4530-b630-353834396162/pin-location-02-twot.svg'
};
for(const [file,url] of Object.entries(assets)) { const response=await fetch(url); if(!response.ok) throw new Error(`${file}: ${response.status}`);await writeFile(`public/images/${file}`,Buffer.from(await response.arrayBuffer()));console.log(file); }
