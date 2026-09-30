import test from 'node:test';
import assert from 'node:assert/strict';
import {transitionPlan} from '../src/motion.js';
test('outgoing scene is fixed and fades cleanly',()=>{assert.deepEqual(transitionPlan(0),{destination:false,opacity:1,labels:1,pullback:0});assert.equal(transitionPlan(.22).opacity,0);assert.equal(transitionPlan(.22).pullback,0)});
test('station cut occurs only while the frame is fully hidden',()=>{assert.equal(transitionPlan(.279).opacity,0);assert.equal(transitionPlan(.28).opacity,0);assert.equal(transitionPlan(.28).destination,true)});
test('destination motion is a bounded local dolly, never a courier flight',()=>{for(let t=0;t<=1;t+=.01){const p=transitionPlan(t);assert.ok(p.pullback>=0&&p.pullback<=.025)}});
test('destination labels appear only after camera settles',()=>{for(let t=.28;t<.76;t+=.01)assert.equal(transitionPlan(t).labels,0);assert.equal(transitionPlan(.76).pullback,0);assert.ok(transitionPlan(.9).labels>0)});
test('destination is fully opaque before new words appear',()=>{assert.equal(transitionPlan(.7).opacity,1);assert.equal(transitionPlan(.7).labels,0)});
test('final/reduced-motion frame preserves exact settled composition',()=>{assert.deepEqual(transitionPlan(1),{destination:true,opacity:1,labels:1,pullback:0})});
