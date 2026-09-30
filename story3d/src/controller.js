export class Controller {
  constructor({count=9,duration=1800,onStart,onFrame,onSettle,reduced=false}){Object.assign(this,{count,duration,onStart,onFrame,onSettle,reduced});this.index=0;this.moving=false;this.token=0;this.frame=0;}
  advance(destination=(this.index+1)%this.count){if(this.moving)return false;this.go(destination);return true;}
  go(destination){const from=this.index;const token=++this.token;this.moving=true;this.onStart(from,destination);const start=performance.now();const duration=this.reduced?0:this.duration;const tick=now=>{if(token!==this.token)return;const t=duration?Math.min((now-start)/duration,1):1;this.onFrame(from,destination,t);if(t<1){this.frame=requestAnimationFrame(tick)}else{this.index=destination;this.moving=false;this.onSettle(destination)}};this.frame=requestAnimationFrame(tick);}
  reset(){this.token++;cancelAnimationFrame(this.frame);this.index=0;this.moving=false;this.onFrame(0,0,1);this.onSettle(0);}
}
export const ease=t=>t*t*(3-2*t);
