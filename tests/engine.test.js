import test from 'node:test';import assert from 'node:assert/strict';import {rank,simulate,institutionAblation,metrics,baseProfile} from '../engine.js';
test('all baselines produce stable descending rankings',()=>{for(const m of ['rules','content','graph','hybrid']){const r=rank(baseProfile,m);assert.equal(r.length,5);assert.deepEqual(r.map(x=>x.score),r.map(x=>x.score).sort((a,b)=>b-a))}});
test('scenario simulation only changes requested profile feature',()=>{const x=simulate(baseProfile,{kind:'skill',value:'database'});assert.ok(x.profile.skills.includes('database'));assert.deepEqual(x.profile.experiences,baseProfile.experiences)});
test('institution ablation exposes bounded sensitivity',()=>{const x=institutionAblation(baseProfile);assert.equal(x.scores.length,3);assert.ok(x.sensitivity>=0)});
test('ranking metrics return valid range',()=>{const x=metrics(['contract','team'],rank(baseProfile),3);for(const v of Object.values(x))assert.ok(v>=0&&v<=1)});
