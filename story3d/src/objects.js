import * as T from 'three';
export function factory(p){
  const materials={};
  const mat=(key,rough=.62,metal=.1)=>materials[key]??=new T.MeshStandardMaterial({color:p[key]??key,roughness:rough,metalness:metal});
  function mesh(geo,key,pos=[0,0,0],rot=[0,0,0]){const o=new T.Mesh(geo,mat(key));o.position.set(...pos);o.rotation.set(...rot);o.castShadow=true;o.receiveShadow=true;return o}
  const box=(w,h,d,key,pos)=>mesh(new T.BoxGeometry(w,h,d),key,pos);
  const cylinder=(radius,height,key,pos)=>mesh(new T.CylinderGeometry(radius,radius,height,32),key,pos);
  const line=(points,key='line',radius=.027)=>mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(x=>new T.Vector3(...x))),40,radius,8,false),key);
  function ring(radius=2.25,pos=[0,1.9,0]){const o=mesh(new T.TorusGeometry(radius,.06,10,64),'accent',pos);return o}
  function paper(pos=[0,1,0],scale=1){const g=new T.Group();g.position.set(...pos);g.add(box(1.65,2.05,.10,'paper',[0,0,0]));for(let i=0;i<4;i++)g.add(box(i===0?.8:1.08,.03,.024,'sole',[-.09,.53-i*.27,.068]));g.scale.setScalar(scale);g.rotation.y=-.12;return g}
  function shoe(scale=1,pos=[0,0,0]){
    const g=new T.Group();g.position.set(...pos);g.scale.setScalar(scale);
    const sole=new T.Shape();sole.moveTo(-2.1,.1);sole.bezierCurveTo(-2.3,.25,-2.1,.48,-1.9,.5);sole.lineTo(1.48,.45);sole.bezierCurveTo(2.2,.45,2.26,.13,1.92,.02);sole.bezierCurveTo(.7,-.18,-1.35,-.18,-2.1,.1);
    const sg=new T.ExtrudeGeometry(sole,{depth:.94,bevelEnabled:true,bevelThickness:.12,bevelSize:.10,bevelSegments:4,steps:1,curveSegments:24});sg.translate(0,0,-.47);g.add(mesh(sg,'sole'));
    const upper=new T.Shape();upper.moveTo(-1.98,.47);upper.bezierCurveTo(-2.07,.75,-1.84,1.61,-1.57,1.58);upper.lineTo(-.68,1.3);upper.bezierCurveTo(-.45,1.2,-.39,1.05,-.15,.9);upper.bezierCurveTo(.8,.78,1.82,.71,1.98,.47);upper.lineTo(-1.98,.47);
    const ug=new T.ExtrudeGeometry(upper,{depth:.84,bevelEnabled:true,bevelThickness:.16,bevelSize:.12,bevelSegments:4,steps:1,curveSegments:24});ug.translate(0,0,-.42);g.add(mesh(ug,'shoe'));
    const collar=mesh(new T.TorusGeometry(.34,.105,12,40),'dark',[-1.45,1.52,0],[Math.PI/2,0,0]);collar.scale.set(1,.87,1);g.add(collar);
    for(let i=0;i<5;i++){const x=-.82+i*.24,y=1.35-i*.085;g.add(line([[x,y,-.35],[x+.08,y+.04,0],[x+.02,y,.35]],'paper',.032))}
    g.add(line([[-1.75,.67,-.56],[-.55,.65,-.58],[.6,.52,-.56],[1.68,.47,-.42]],'dark',.02));
    g.add(line([[-1.62,1.41,-.53],[-1.39,.92,-.55],[-.7,.77,-.55]],'sole',.03));
    for(let i=0;i<12;i++)g.add(box(.105,.055,.98,'dark',[-1.8+i*.3,.05,0]));
    g.rotation.y=.12;return g
  }
  function database(pos=[0,1,0]){const g=new T.Group();g.position.set(...pos);for(let i=0;i<3;i++){g.add(cylinder(.58,.27,'surface',[0,i*.31,0]));g.add(cylinder(.58,.022,'accent',[0,i*.31+.14,0]))}return g}
  function browser(pos=[0,1,0]){const g=new T.Group();g.position.set(...pos);g.add(box(1.55,1.12,.16,'surface'));g.add(box(1.35,.86,.03,'dark',[0,-.04,.1]));g.add(box(1.1,.04,.035,'line',[0,.11,.13]));g.add(box(.78,.04,.035,'line',[-.16,-.13,.13]));for(let i=0;i<3;i++)g.add(mesh(new T.SphereGeometry(.035,12,8),'accent',[-.52+i*.14,.43,.13]));return g}
  function tool(pos=[0,1,0]){const g=new T.Group();g.position.set(...pos);g.add(box(.92,.92,.92,'surface'));for(let a=0;a<3;a++){const r=ring(.27,[0,0,.49]);r.material=mat('line');r.rotation.z=a*Math.PI/3;g.add(r)}return g}
  function check(pos=[0,1,0],scale=1){const g=new T.Group();g.position.set(...pos);g.add(ring(.58,[0,0,0]));g.add(line([[-.26,0,.08],[-.04,-.22,.08],[.3,.25,.08]],'accent',.045));g.scale.setScalar(scale);return g}
  function floor(){const o=mesh(new T.PlaneGeometry(22,16),'stage',[0,-.28,0],[-Math.PI/2,0,0]);o.castShadow=false;return o}
  return {mat,mesh,box,cylinder,line,ring,paper,shoe,database,browser,tool,check,floor,materials};
}
