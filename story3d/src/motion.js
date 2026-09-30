const clamp=value=>Math.min(1,Math.max(0,value));
const smooth=value=>{const t=clamp(value);return t*t*(3-2*t)};
// Scene changes never travel across stations. Hide the source, then let the
// destination arrive in its own frame, with only a restrained local dolly.
export function transitionPlan(progress){
  const t=clamp(progress),destination=t>=.28;
  if(!destination){const opacity=1-smooth(t/.22);return {destination,opacity,labels:opacity,pullback:0}}
  const settled=smooth((t-.28)/.42);
  return {destination,opacity:smooth((t-.28)/.38),labels:smooth((t-.76)/.24),pullback:.025*(1-settled)};
}
