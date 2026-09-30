import * as T from 'three';
export const sceneMeta=[
  ['S00','Explore the shoe purchase','Money and permission'],['S01','Inspect the purchase authorization boundary','A shoe inside a total budget'],['S02','Follow the approved payment record','Permission is a separate layer'],['S03','Follow the conceptual receipt into a work task','Two checkout paths'],['S04','Inspect the assembling work output','Buying inputs to do work'],['S05','Inspect the accumulated purchase record','A cheap call is not a cheap task'],['S06','Inspect the unresolved attribution boundary','Count payments carefully'],['S07','Inspect the owner outcome checkpoint','Trust is a chain of checks'],['S08','Return through the shared authorization','Delegate within bounds']
];
export function buildScenes(f){
  const result=[];
  function make(i,camera,look=[0,1.4,0]){const g=new T.Group();g.position.set(i*16,0,(i%2)*-4);g.add(f.floor());const s={id:sceneMeta[i][0],group:g,camera:new T.Vector3(...camera).add(g.position),look:new T.Vector3(...look).add(g.position),labels:[],target:null,extra:null};result[i]=s;return s}
  function label(s,text,pos,kind=''){s.labels.push({text,pos:new T.Vector3(...pos),kind})}
  const s0=make(0,[5,4.5,12.5],[.6,1.6,0]);
  const sh=f.shoe(1,[2.15,.12,0]);s0.group.add(sh);s0.target=sh;
  const rg=f.ring(2.30,[2.15,1.8,-.9]);rg.rotation.y=.18;s0.group.add(rg);
  s0.group.add(f.line([[-3,-.05,1.6],[-1,-.05,1.6],[.1,-.05,.6],[2.15,-.05,.6]],'accent',.035));
  s0.group.add(f.paper([-2.2,.85,1.5],.48));
  label(s0,'THB 3,000',[2.0,4.45,-.6],'accent');
  s0.extra='<h1 class="cover-title">When AI<br>Spends <span class="gentle">for Us</span></h1>';
  const s4=make(4,[4.8,5.7,13.8],[0,1.15,0]);
  const data=f.database([-4.1,.48,-.6]),browse=f.browser([-1.35,.85,-2.2]),tools=f.tool([1.3,.7,-2.0]);data.scale.setScalar(1.3);browse.scale.setScalar(1.3);tools.scale.setScalar(1.15);s4.group.add(data,browse,tools);
  const out=f.paper([3.0,1.1,1.25],.88);s4.group.add(out);s4.target=out;
  for(const [x,z] of [[-4.1,-.6],[-1.35,-2.2],[1.3,-2]]){s4.group.add(f.line([[x,.2,z],[x,.2,.3],[2.3,.2,1.25]],'line',.025));const band=f.ring(.22,[x,.42,z+.62]);band.rotation.x=Math.PI/2;s4.group.add(band)}
  s4.group.add(f.check([2.0,.3,1.1],.32));
  label(s4,'Data',[-4.1,2.72,-.6]);label(s4,'Coinbase',[-4.1,2.24,-.6],'quiet');label(s4,'$0.10/query',[-4.1,1.78,-.6],'quiet');
  label(s4,'Browser',[-1.35,2.7,-2.2]);label(s4,'Browserbase',[-1.35,2.22,-2.2],'quiet');label(s4,'$0.12/hour',[-1.35,1.78,-2.2],'quiet');
  label(s4,'Tools',[1.3,2.22,-2]);label(s4,'Published prices',[.05,4.25,0],'large');label(s4,'30 Sep 2026',[.05,3.6,0],'quiet');

  const s1=make(1,[4.3,4.9,11.5],[0,1.55,0]);
  s1.group.add(f.shoe(.94,[0,.1,0]));const boundary=f.ring(2.6,[0,1.75,-.7]);boundary.rotation.y=.10;s1.group.add(boundary);s1.target=boundary;
  label(s1,'Total ≤ THB 3,000',[0,4.85,-.5],'large');label(s1,'Illustrative',[0,3.94,-.5],'quiet');
  for(const [text,x,z] of [['Fit',-3.2,1.35],['Delivery',3.2,-.15],['Returns',0,3]]){const stop=f.ring(.26,[x,.34,z]);stop.rotation.x=Math.PI/2;s1.group.add(stop);s1.group.add(f.line([[x,.32,z],[x*.73,.30,z*.7],[x*.5,.3,.55]],'accent',.025));label(s1,text,[x,text==='Returns'?0:1.05,z]);}

  const s2=make(2,[4.3,4.5,12.9],[0,1.25,0]);
  const intent=f.shoe(.47,[-3.8,.6,.5]);s2.group.add(intent);
  const gate=new T.Group();gate.position.set(-.1,1.1,0);gate.add(f.box(2.55,.13,1.6,'surface',[0,-.65,0]));for(const x of [-1.12,1.12])gate.add(f.box(.10,2.25,.1,'accent',[x,.4,0]));gate.add(f.box(2.3,.1,.1,'accent',[0,1.52,0]));
  for(let j=0;j<4;j++)gate.add(f.box(1.0,.45,.06,'dark',[-.7+(j%2)*1.35,.95-Math.floor(j/2)*.67,.1]));s2.group.add(gate);
  const payment=f.paper([3.7,1.1,-.55],.70);s2.group.add(payment);s2.target=payment;
  s2.group.add(f.line([[-2.65,.45,.5],[-1.4,.45,0]],'line',.03),f.line([[1.25,.45,0],[2.5,.45,-.55],[3.7,.45,-.55]],'accent',.035));
  label(s2,'Intent',[-3.8,2.6,.5]);label(s2,'Permission',[-.1,3.16,0]);label(s2,'Payment',[3.7,2.65,-.55]);
  for(const [text,x,y] of [['Who',-.8,2.1],['What',.6,2.1],['Limit',-.8,1.44],['Until',.6,1.44]])label(s2,text,[x,y,.25],'quiet');

  const s3=make(3,[.3,3.1,13.2],[0,1.8,0]);
  const frame=f.box(3.39,5.08,.10,'surface',[-.95,2.2,-.12]);s3.group.add(frame);
  const imagePlane=new T.Mesh(new T.PlaneGeometry(3.31,4.95),new T.MeshBasicMaterial({color:'#ffffff',side:T.DoubleSide}));imagePlane.position.set(-.95,2.2,-.05);imagePlane.rotation.copy(new T.Euler(0,0,0));s3.group.add(imagePlane);s3.artifact=imagePlane;
  const receipt=f.paper([3.18,1.35,.15],.62);s3.group.add(receipt);s3.target=receipt;
  s3.group.add(f.line([[-2.95,-.55,0],[-2.95,-.55,1.1],[-.8,-.55,1.1],[1.65,-.55,.7],[3.18,-.55,.15]],'line',.035));
  s3.group.add(f.line([[.82,1.42,.05],[2.1,1.42,.05],[3.18,1.15,.15]],'accent',.03));
  s3.group.add(f.line([[.82,.86,.05],[2.1,.86,.05],[3.18,1.15,.15]],'line',.025));
  label(s3,'In context',[2.7,3.32,0]);label(s3,'Merchant checkout',[3.05,2.78,0]);label(s3,'Published May 2026',[-.95,5.17,0],'quiet');

  const s5=make(5,[4.5,5.5,12.4],[0,1.3,0]);
  const record=new T.Group();record.position.set(-2.45,.20,0);for(let j=0;j<10;j++)record.add(f.box(2.1,.13,1.45,j%2?'surface':'sole',[0,j*.14,0]));s5.group.add(record);s5.target=record;
  label(s5,'10 × $0.10 = $1',[-2.45,3.65,0],'large');label(s5,'Data only',[-2.45,2.86,0],'accent');label(s5,'Illustrative',[-2.45,2.4,0],'quiet');
  const costs=[['Inference',.45,-1.4],['Retries',2.25,-1.4],['Review',4.05,-1.4]];for(const [name,x,z] of costs){s5.group.add(f.ring(.35,[x,.68,z]));label(s5,name,[x,2.8,z],'quiet');}
  const useful=f.paper([2.7,1.2,1.48],.68);s5.group.add(useful,f.check([1.87,1.0,1.67],.70));label(s5,'Useful result',[2.7,2.45,1.48]);
  s5.group.add(f.line([[-1.30,.2,0],[.2,.2,0],[1.4,.2,1.48],[2.7,.2,1.48]],'line',.03));

  const s6=make(6,[1.8,5.0,14.1],[0,1.45,0]);
  // Exact bar lengths encode the two source values. The uncertainty boundary
  // is schematic, never a pie or a claimed measured share of all commerce.
  const rawWidth=7.8,screenWidth=rawWidth*25.62/52.7;
  s6.group.add(f.box(rawWidth,.40,.68,'surface',[-.8,1.7,-1.3]),f.box(screenWidth,.4,.68,'sole',[-.8-(rawWidth-screenWidth)/2,.65,0]));
  label(s6,'Observed',[-4.9,2.65,-1.3]);label(s6,'$52.7m',[2.65,2.65,-1.3],'accent');label(s6,'Screened',[-4.9,1.27,.15]);label(s6,'$25.62m',[-.05,1.27,.15],'accent');
  const attribution=new T.Group();attribution.position.set(4.4,1.55,1.2);attribution.add(f.ring(1.11,[0,0,0]));for(let j=0;j<3;j++)attribution.add(f.box(.08,.12,.07,'accent',[0,.5-j*.35,.07]));s6.group.add(attribution);s6.target=attribution;
  s6.group.add(f.line([[-.8,.42,0],[.3,.42,.7],[3.29,.42,1.2]],'line',.027));
  label(s6,'Agent-like estimate',[1.45,5.20,0]);label(s6,'0.6–7.5% of screened value',[1.45,4.65,0],'large');label(s6,'Not ground truth',[1.45,4.04,0],'quiet');

  const s7=make(7,[4.1,4.7,13.5],[0,1.35,0]);
  const auth=f.check([-4,1.0,0],.77),paid=f.paper([-1.2,1.10,-.55],.57);s7.group.add(auth,paid);
  s7.group.add(f.line([[-3.5,.3,0],[-2.4,.3,0],[-1.2,.3,-.55],[.7,.3,0]],'accent',.035));
  const stop=f.box(.09,1.40,1.0,'warning',[.86,.85,0]);s7.group.add(stop);const missing=f.ring(.61,[2.7,1.12,.05]);missing.material=f.mat('line');s7.group.add(missing);
  label(s7,'Authorized',[-4,2.20,0]);label(s7,'Paid',[-1.2,2.2,-.55]);label(s7,'Delivered?',[2.7,2.2,.05]);label(s7,'Stop',[.85,1.91,0],'quiet');
  const owner=new T.Group();owner.position.set(2.2,.85,2.25);owner.add(f.ring(.70,[0,0,0]),f.box(.62,.49,.20,'paper',[0,0,0]));s7.group.add(owner);s7.target=owner;
  s7.group.add(f.line([[2.7,.4,.05],[3.55,.4,1.4],[2.2,.4,2.25]],'line',.025));label(s7,'Review',[1.35,-.70,2.25],'quiet');label(s7,'Resolve',[3.15,-.70,2.25],'quiet');

  const s8=make(8,[3.8,5.0,13.2],[0,1.25,0]);
  s8.group.add(f.shoe(.64,[-3.2,.05,.5]),f.database([3.0,.46,-.4]),f.browser([4.1,.77,-1.0]),f.paper([2.48,1.0,1.2],.56));
  const shared=f.ring(1.18,[0,1.2,.85]);shared.rotation.y=.15;s8.group.add(shared);s8.target=shared;
  s8.group.add(f.line([[-1.7,.28,.5],[0,.28,.85],[2.48,.28,1.2]],'accent',.035));
  label(s8,'Allowed?',[-2.65,3.2,-.4]);label(s8,'Affordable?',[2.9,3.2,-.4]);label(s8,'Delivered?',[-2.65,.05,2.3]);label(s8,'Recoverable?',[2.9,.05,2.3]);
  s8.extra='<h1 class="closing-title">Delegate within bounds</h1>';
  return result;
}
