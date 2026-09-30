import * as T from 'three';
// Perspective projection, per-pixel depth testing and smooth mesh normals.
// This software renderer consumes the exact Three.js world and camera.
export class SoftwareRenderer {
  constructor({canvas}){this.canvas=canvas;this.context=canvas.getContext('2d',{alpha:false});if(!this.context)throw Error('Canvas rendering unavailable');this.shadowMap={};this.ratio=1;this.kind='software-3d';this.textureCache=new WeakMap();}
  setPixelRatio(r){this.ratio=Math.max(1.5,Math.min(r,1.75))}
  setSize(w,h){this.width=w;this.height=h;this.canvas.width=Math.round(w*this.ratio);this.canvas.height=Math.round(h*this.ratio);this.image=this.context.createImageData(this.canvas.width,this.canvas.height);this.depth=new Float32Array(this.canvas.width*this.canvas.height);}
  texture(image){if(this.textureCache.has(image))return this.textureCache.get(image);const c=document.createElement('canvas');c.width=image.width;c.height=image.height;const cx=c.getContext('2d');cx.drawImage(image,0,0);const tex={data:cx.getImageData(0,0,c.width,c.height).data,w:c.width,h:c.height};this.textureCache.set(image,tex);return tex;}
  render(scene,camera){
    const w=this.canvas.width,h=this.canvas.height;if(!w||!h||!this.image)return;
    const pixels=this.image.data,packed=new Uint32Array(pixels.buffer),bg=scene.background.getHex();packed.fill(0xff000000|((bg&255)<<16)|(bg&0xff00)|((bg>>16)&255));this.depth.fill(Infinity);
    scene.updateMatrixWorld();camera.updateMatrixWorld();const cp=new T.Vector3().setFromMatrixPosition(camera.matrixWorld);
    const key=new T.Vector3(-.4,.8,.55).normalize(),fill=new T.Vector3(.8,.25,-.6).normalize();
    const meshes=[];scene.traverseVisible(o=>{if(o.isMesh)meshes.push(o)});
    for(const o of meshes){const g=o.geometry,p=g.attributes.position,n=g.attributes.normal,uv=g.attributes.uv;if(!p||(g.type==='PlaneGeometry'&&!o.material.map))continue;
      const normalMatrix=new T.Matrix3().getNormalMatrix(o.matrixWorld),vertices=[];
      for(let i=0;i<p.count;i++){const world=new T.Vector3().fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld),proj=world.clone().project(camera),normal=n?new T.Vector3().fromBufferAttribute(n,i).applyMatrix3(normalMatrix).normalize():null;const view=world.clone().applyMatrix4(camera.matrixWorldInverse);vertices.push({world,x:(proj.x*.5+.5)*w,y:(-proj.y*.5+.5)*h,z:proj.z,q:1/-view.z,u:uv?.getX(i)??0,v:uv?.getY(i)??0,light:normal?.isVector3 ? .43+.58*Math.max(0,normal.dot(key))+.16*Math.max(0,normal.dot(fill)):1});}
      const idx=g.index?.array,count=idx?idx.length:p.count;
      for(let i=0;i<count;i+=3){const a=vertices[idx?idx[i]:i],b=vertices[idx?idx[i+1]:i+1],c=vertices[idx?idx[i+2]:i+2];if(a.z>1||b.z>1||c.z>1||a.z< -1||b.z< -1||c.z< -1)continue;
        let m=o.material;if(Array.isArray(m)){const group=g.groups.find(x=>i>=x.start&&i<x.start+x.count);m=m[group?.materialIndex??0]}if(!m||m.visible===false)continue;
        const normal=b.world.clone().sub(a.world).cross(c.world.clone().sub(a.world));if(m.side!==T.DoubleSide&&normal.dot(cp.clone().sub(a.world))<=0)continue;
        const minX=Math.max(0,Math.floor(Math.min(a.x,b.x,c.x))),maxX=Math.min(w-1,Math.ceil(Math.max(a.x,b.x,c.x))),minY=Math.max(0,Math.floor(Math.min(a.y,b.y,c.y))),maxY=Math.min(h-1,Math.ceil(Math.max(a.y,b.y,c.y)));if(minX>maxX||minY>maxY)continue;
        const area=(b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x);if(Math.abs(area)<.0001)continue;
        const hex=m.color.getHex(),r=hex>>16&255,gr=hex>>8&255,bl=hex&255,tex=m.map?.image?this.texture(m.map.image):null;
        for(let y=minY;y<=maxY;y++)for(let x=minX;x<=maxX;x++){const px=x+.5,py=y+.5,l0=((b.x-px)*(c.y-py)-(b.y-py)*(c.x-px))/area,l1=((c.x-px)*(a.y-py)-(c.y-py)*(a.x-px))/area,l2=1-l0-l1;if(l0< -.0001||l1< -.0001||l2< -.0001)continue;const z=l0*a.z+l1*b.z+l2*c.z,index=y*w+x;if(z>=this.depth[index])continue;this.depth[index]=z;const k=index*4;
          if(tex){const q=l0*a.q+l1*b.q+l2*c.q,u=(l0*a.u*a.q+l1*b.u*b.q+l2*c.u*c.q)/q,v=(l0*a.v*a.q+l1*b.v*b.q+l2*c.v*c.q)/q;const tx=Math.min(tex.w-1,Math.max(0,Math.round(u*(tex.w-1)))),ty=Math.min(tex.h-1,Math.max(0,Math.round((1-v)*(tex.h-1)))),tk=(ty*tex.w+tx)*4;pixels[k]=tex.data[tk];pixels[k+1]=tex.data[tk+1];pixels[k+2]=tex.data[tk+2];}
          else{const light=l0*a.light+l1*b.light+l2*c.light,em=m.emissiveIntensity??0;pixels[k]=Math.min(255,r*light+em*80);pixels[k+1]=Math.min(255,gr*light+em*65);pixels[k+2]=Math.min(255,bl*light+em*45);}pixels[k+3]=255;
        }
      }
    }
    this.context.putImageData(this.image,0,0);
  }
}
