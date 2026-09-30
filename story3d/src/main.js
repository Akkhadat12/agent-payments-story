import * as T from 'three';
import {factory} from './objects.js';
import {buildScenes,sceneMeta} from './scenes.js';
import {palettes} from './palettes.js';
import {Controller} from './controller.js';
import {transitionPlan} from './motion.js';
import './style.css';
import {SoftwareRenderer} from './software-renderer.js';
const params=new URLSearchParams(location.search);
if(params.get('titles')==='hidden')document.body.dataset.titles='hidden';
const p=palettes[params.get('palette')]??palettes.nocturne;
const stage=document.querySelector('#stage');const capture=Number(params.get('capture'));if([1280,1600,1920].includes(capture)){document.body.style.width=capture+'px';document.body.style.height=capture*9/16+'px';document.body.style.display='block';document.body.style.overflow='visible';document.documentElement.style.overflow='visible';stage.style.width=capture+'px';stage.style.height=capture*9/16+'px'}for(const k of ['stage','type','accent','muted'])stage.style.setProperty('--'+k,p[k]);
const layer=document.querySelector('#labels'),subject=document.querySelector('#subject');
let renderer;
// Verified software perspective renderer is the default. WebGL opt-in is experimental.
if(params.get('renderer')==='webgl'){try{renderer=new T.WebGLRenderer({canvas:document.querySelector('#world'),antialias:true,alpha:false})}catch{const old=document.querySelector('#world');const fresh=old.cloneNode();old.replaceWith(fresh);renderer=new SoftwareRenderer({canvas:fresh})}}else{renderer=new SoftwareRenderer({canvas:document.querySelector('#world')})}
stage.dataset.renderer=renderer.kind??'webgl-experimental';
renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.22;renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;
const world=new T.Scene();world.background=new T.Color(p.stage);world.fog=new T.Fog(p.stage,22,38);
const camera=new T.PerspectiveCamera(38,16/9,.1,120);
const ambient=new T.HemisphereLight('#e9f4f0',p.stage,2.4);world.add(ambient);
const key=new T.DirectionalLight('#fff1d6',4.2);key.castShadow=true;key.shadow.mapSize.set(2048,2048);key.shadow.camera.left=-10;key.shadow.camera.right=10;key.shadow.camera.top=9;key.shadow.camera.bottom=-8;key.shadow.camera.near=.1;key.shadow.camera.far=30;key.shadow.normalBias=.025;key.shadow.bias=-.0001;world.add(key,key.target);
const fill=new T.DirectionalLight('#91afc0',2.0);world.add(fill,fill.target);
const surface=document.querySelector('#world');
const f=factory(p),scenes=buildScenes(f);const prototypeOnly=scenes.filter(Boolean).length!==9;scenes.filter(Boolean).forEach(s=>world.add(s.group));
const image=new Image();image.src='/assets/google-checkout-detail.webp';await image.decode();const sourceTexture=new T.Texture(image);sourceTexture.colorSpace=T.SRGBColorSpace;sourceTexture.needsUpdate=true;scenes[3].artifact.material.map=sourceTexture;scenes[3].artifact.material.needsUpdate=true;
let current=0,labelElements=[],hovered=false;
const look=new T.Vector3();
function lights(){key.position.copy(look).add(new T.Vector3(-4,8,5));key.target.position.copy(look);fill.position.copy(look).add(new T.Vector3(6,3,-4));fill.target.position.copy(look)}
function showLabels(i){layer.innerHTML=scenes[i].extra??'';labelElements=scenes[i].labels.map(l=>{const el=document.createElement('div');el.className='label '+l.kind;el.textContent=l.text;layer.append(el);return {el,...l}});current=i;subject.setAttribute('aria-label',sceneMeta[i][1]);document.querySelector('#announcement').textContent=sceneMeta[i][2]+(i===3?' Google published May 2026 illustration showing Target, Buy now, Checkout on Target, and Ulta Beauty. This is a documentary artifact, not a live checkout.':'');stage.dataset.scene=sceneMeta[i][0];}
function layout(){const w=stage.clientWidth,h=stage.clientHeight;labelElements.forEach(l=>{const pos=l.pos.clone().add(scenes[current].group.position).project(camera);l.el.style.left=(pos.x*.5+.5)*w+'px';l.el.style.top=(-pos.y*.5+.5)*h+'px'});if(scenes[current]?.target){const box=new T.Box3().setFromObject(scenes[current].target);const pts=[];for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z])pts.push(new T.Vector3(x,y,z).project(camera));const xs=pts.map(v=>(v.x*.5+.5)*w),ys=pts.map(v=>(-v.y*.5+.5)*h);subject.style.left=Math.min(...xs)+'px';subject.style.top=Math.min(...ys)+'px';subject.style.width=Math.max(...xs)-Math.min(...xs)+'px';subject.style.height=Math.max(...ys)-Math.min(...ys)+'px';}}
function render(){const started=performance.now();lights();world.updateMatrixWorld();renderer.render(world,camera);layout();stage.dataset.renderMs=(performance.now()-started).toFixed(1)}
function visibility(a,b){scenes.forEach((s,i)=>{if(s)s.group.visible=i===a||i===b})}
const reduced=matchMedia('(prefers-reduced-motion: reduce)');const reduceOverride=params.get('motion')==='reduce';stage.dataset.motion=reduced.matches||reduceOverride?'reduce':'full';
function transitionFrame(a,b,t){
  const plan=transitionPlan(t);const i=plan.destination?b:a;const selected=scenes[i];if(!selected)return;
  visibility(i,i);
  if(current!==i)showLabels(i);
  camera.position.copy(selected.camera);
  if(plan.destination)camera.position.addScaledVector(selected.camera.clone().sub(selected.look),plan.pullback);
  look.copy(selected.look);camera.lookAt(look);
  surface.style.opacity=String(plan.opacity);layer.style.opacity=String(plan.labels);
  stage.dataset.transitionProgress=t.toFixed(3);stage.dataset.cameraPullback=plan.pullback.toFixed(4);
  render();
}
const controller=new Controller({count:9,duration:820,reduced:reduced.matches||reduceOverride,
  onStart(a,b){subject.disabled=true;subject.blur();hover(false);visibility(a,a);stage.dataset.moving='true';stage.dataset.transitionFrom=sceneMeta[a][0];stage.dataset.transitionTo=sceneMeta[b][0];},
  onFrame:transitionFrame,
  onSettle(i){visibility(i,i);showLabels(i);surface.style.opacity='1';layer.style.opacity='1';subject.disabled=false;stage.dataset.moving='false';stage.dataset.ready='true';render();}
});
function hover(value){hovered=value;scenes[current]?.target?.traverse(o=>{if(o.isMesh&&o.material.emissive){o.material.emissive.set(value?p.accent:'#000');o.material.emissiveIntensity=value?.1:0}});render()}
subject.addEventListener('pointerenter',()=>{if(!controller.moving)hover(true)});subject.addEventListener('pointerleave',()=>hover(false));subject.addEventListener('focus',()=>{if(!controller.moving)hover(true)});subject.addEventListener('blur',()=>hover(false));
subject.addEventListener('click',()=>controller.advance((prototypeOnly||params.get('prototype')==='1')?(controller.index===0?4:0):undefined));
addEventListener('keydown',event=>{if(event.altKey||event.ctrlKey||event.metaKey)return;if(event.code==='Space'){event.preventDefault();if(!event.repeat)controller.advance((prototypeOnly||params.get('prototype')==='1')?(controller.index===0?4:0):undefined)}else if(event.key.toLowerCase()==='r'){event.preventDefault();controller.reset()}});
reduced.addEventListener('change',()=>controller.reduced=reduced.matches||reduceOverride);
function resize(){renderer.setSize(stage.clientWidth,stage.clientHeight,false);camera.aspect=stage.clientWidth/stage.clientHeight;camera.updateProjectionMatrix();render()}
new ResizeObserver(resize).observe(stage);await document.fonts.ready;camera.position.copy(scenes[0].camera);look.copy(scenes[0].look);camera.lookAt(look);visibility(0,0);showLabels(0);resize();stage.dataset.ready='true';stage.dataset.moving='false';

// Opt-in review snapshots execute the production transition, never the default view.
const reviewFrom=Number(params.get('transition')),reviewProgress=Number(params.get('progress'));
if(params.has('transition')&&Number.isInteger(reviewFrom)&&reviewFrom>=0&&reviewFrom<9&&params.has('progress')&&reviewProgress>=0&&reviewProgress<=1){
  const to=(reviewFrom+1)%9;controller.moving=true;controller.onStart(reviewFrom,to);transitionFrame(reviewFrom,to,reviewProgress);stage.dataset.reviewFrame='true';
}
