/* 
MZ React Round Slider v1.0.3
https://github.com/mzusin/react-round-slider
MIT License      
Copyright (c) 2023-present, Miriam Zusin          
*/
var xt=Object.defineProperty,It=Object.defineProperties;var At=Object.getOwnPropertyDescriptors;var Re=Object.getOwnPropertySymbols;var St=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable;var ke=(e,t,r)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,K=(e,t)=>{for(var r in t||(t={}))St.call(t,r)&&ke(e,r,t[r]);if(Re)for(var r of Re(t))Et.call(t,r)&&ke(e,r,t[r]);return e},_e=(e,t)=>It(e,At(t));import{useEffect as de,useRef as vt,useState as fe}from"react";var Tt=Math.pow,y=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let r=Tt(10,t);return Math.round(e*r)/r},D=(e,t)=>(e%t+t)%t,R=(e,t,r,o,n)=>(n-o)*(e-t)/(r-t)+o;var Le=e=>!isNaN(parseFloat(e))&&isFinite(e);var Oe=(e,t=1/0)=>{let r=e*(180/Math.PI);return y(r,t)},L=(e,t=1/0)=>{let r=e*(Math.PI/180);return y(r,t)};var ye=(e,t,r=1/0)=>{let o=[];for(let n=0;n<e.length;n++)o.push(y(e[n]-t[n],r));return o},Ne=(e,t,r=1/0)=>ye(e,t,r);var Ct=(e,t,r=1/0)=>{let o=[];for(let n=0;n<e.length;n++)o.push(y(e[n]*t,r));return o},ne=(e,t,r=1/0)=>Ct(e,t,r);var Be=(e,t=1/0)=>{let r=0;for(let o=0;o<e.length;o++)r+=e[o]*e[o];return y(Math.sqrt(r),t)};var re=(e,t,r=1/0)=>{let o=ye(e,t);return Be(o,r)};var Mt=(e,t=1/0)=>{let r=Be(e),o=[];for(let n=0;n<e.length;n++)o.push(r===0?0:y(e[n]/r,t));return o},Fe=(e,t=1/0)=>Mt(e,t);var O=(e,t,r)=>(t=t%Math.PI*2,[e[0]+Math.cos(t)*r,e[1]+Math.sin(t)*r]);var Ue=()=>Math.random().toString(36).substring(2)+new Date().getTime().toString(36);var oe=e=>{let t=e.duration!==void 0?e.duration:1/0,r,o,n,a,s=!1,l,c=()=>{r=void 0,n=void 0,a=void 0,s=!1,o!==void 0&&window.cancelAnimationFrame(o)},g=()=>{c(),u()},m=()=>{s=!1},f=()=>{s=!0},b=S=>{r===void 0&&(r=S),n=S-r,s&&a!==S&&typeof e.callback=="function"&&e.callback(w()),n<=t?(a=S,o=window.requestAnimationFrame(b)):c()},i=(S,_)=>{g(),typeof e.resizeCallback=="function"&&e.resizeCallback(S,_)},u=()=>{r=void 0,n=void 0,a=void 0,s=!0,e.restartOnResize&&window.ResizeObserver&&l===void 0?(l=new ResizeObserver(i),l.observe(document.body,{box:"border-box"})):o=window.requestAnimationFrame(b)},v=()=>n,x=()=>s,p=()=>r,A=()=>{if(!(t===1/0||n===void 0))return n*100/t},C=()=>l,w=()=>({start:u,stop:c,pause:m,resume:f,restart:g,isAnimating:x,getElapsedTime:v,getStartTime:p,getPercent:A,getResizeObserver:C});return w()};var Ve=(e,t,r,o,n,a)=>{let s=t+r*2,l=Math.max(0,o*2-s),c=e*2+s+l,[g,m]=Pt(e,o,t,r);return{cx:g,cy:m,radius:e,size:c,thickness:t,border:r,startAngleDeg:n,endAngleDeg:a}},Pt=(e,t,r,o)=>{let n=wt(e,t,r,o),a=y(n/2,2);return[a,a]},wt=(e,t,r,o)=>{let n=r+o*2,a=Math.max(0,t*2-n);return e*2+n+a};var He="#efefef";var $e="#444444";var Z="#163a86",pe="#000",De="#a8a8a8";var ve="#000",xe="#5daed2",ze="#97b0bb",Ge="#000";var qe="#efefef",Xe="#000";var d=(e,t)=>Le(e)?Number(e):t,T=(e,t)=>e==null?t:e,N=(e,t)=>e==null?t:e;var F=(e,t,r)=>(e>t&&(t+=360),r>=e&&r<=t||r+360>=e&&r+360<=t),Q=(e,t)=>{t<e&&(t+=360);let r=t-e,o=D(r,360);return o===0&&r>0?360:o},Ye=(e,t,r)=>{e>t&&(t+=360);let o=2*Math.PI*r,n=t-e,a=-(e/360)*o,s=n/360*o,l=o-s;return{strokeDasharray:[s,l].join(" "),strokeOffset:a}};var $=(e,t,r,o,n,a,s)=>{let{left:l,top:c}=e.getBoundingClientRect(),g=[t-l,r-c],m=Ne(g,[o,n]),f=Math.atan2(m[1]/s,m[0]/a);return f<0&&(f+=2*Math.PI),Oe(f)},X=(e,t,r,o)=>{o<r&&(o+=360),t<r&&(t+=360);let n=R(t,r,o,e.min,e.max);if(e.data.length>0){let a=Math.round(n);n=e.data[a]}else n=y(n,e.round);return n},Rt=(e,t,r,o)=>{let n;if(o<r&&(o+=360),e.data.length>0){let a=e.data.findIndex(s=>s===t);n=a===-1?0:a}else n=typeof t!="number"?e.min:t;return D(R(n,e.min,e.max,r,o),360)},kt=(e,t)=>{if(!e||!e.pointers||e.pointers.length<0||!t){let o=D(d(e.pathStartAngle,0),360),n=T(e.pointerBgColor,Z),a=T(e.pointerBgColorSelected,pe),s=T(e.pointerBgColorDisabled,De),l=T(e.pointerBgColorHover,a);return[{id:"0",index:0,radius:d(e.pointerRadius,10),angleDeg:o,prevAngleDeg:o,bgColor:n,bgColorSelected:a,bgColorDisabled:s,bgColorHover:l,border:d(e.pointerBorder,0),borderColor:T(e.pointerBorderColor,ve),disabled:!!e.disabled}]}let r=[];for(let o=0;o<e.pointers.length;o++){let n=e.pointers[o],a=n.radius!==void 0?n.radius:d(e.pointerRadius,10),s=n.bgColor?n.bgColor:T(e.pointerBgColor,Z),l=n.bgColorSelected?n.bgColorSelected:T(e.pointerBgColorSelected,pe),c=n.bgColorDisabled?n.bgColorDisabled:T(e.pointerBgColorDisabled,De),g=n.bgColorHover?n.bgColorHover:T(e.pointerBgColorHover,l),m=n.border?n.border:d(e.pointerBorder,0),f=n.borderColor?n.borderColor:T(e.pointerBorderColor,ve),b=n.disabled!==void 0?n.disabled:N(e.disabled,!1),i=d(e.pathStartAngle,0),u=d(e.pathEndAngle,360),v=Rt(t,n.value,i,u),x=Ie(v,t.stepAngleDeg,i,u);t.isClosedShape&&D(x,360)===D(u,360)&&(x=i),r.push({id:o.toString(),index:o,radius:a,angleDeg:x,prevAngleDeg:x,bgColor:s,bgColorSelected:l,bgColorDisabled:c,bgColorHover:g,border:m,borderColor:f,disabled:b,ariaLabel:n.ariaLabel})}return r},Ze=(e,t)=>{let r=kt(e,t);return{pointers:r,maxRadius:_t(r)}},_t=e=>{if(e.length<=0)return 0;let t=-1/0;for(let r of e)t=Math.max(t,Math.max(0,r.radius+r.border/2));return t},ae=(e,t,r,o,n)=>{if(!e||e.length<=0)return null;if(e.length===1)return e[0];let a=R(L(t),0,Math.PI*2,0,Math.PI),s=O([r,o],a,n),l,c=null,g=e.filter(m=>!m.disabled);for(let m of g){let f=R(L(m.angleDeg),0,Math.PI*2,0,Math.PI),b=O([r,o],f,n),i=re(s,b);(l===void 0||i<l)&&(l=i,c=m)}return K({},c)},se=(e,t,r,o,n,a)=>{let s=R(L(r),0,Math.PI*2,0,Math.PI),l=O([o,n],s,a),c=R(L(e),0,Math.PI*2,0,Math.PI),g=O([o,n],c,a),m=R(L(t),0,Math.PI*2,0,Math.PI),f=O([o,n],m,a),b=re(l,g),i=re(l,f);return b<=i?e:t},Qe=(e,t)=>{if(!e||e.length<=0)return null;let r,o,n=null,a=null;for(let s of e){let l=Q(t,s.angleDeg);(r===void 0||l<r)&&(n=s,r=l),(o===void 0||l>o)&&(a=s,o=l)}return n===null||a===null?null:[n,a]},Ie=(e,t,r,o)=>D(e,360)===D(r,360)||D(e,360)===D(o,360)?e:t===0?0:Math.round(e/t)*t;import{useEffect as ie,useState as le,useRef as Lt,useCallback as Ot}from"react";var j={outline:"none"};import{Fragment as Ft,jsx as Ae,jsxs as Bt}from"react/jsx-runtime";var yt=(e,t,r,o,n,a,s)=>e.disabled?n:s?a:e.id===t?o:r,Nt=e=>{let t=Lt(null),{pointer:r,svg:o,$svg:n,data:a,settings:s,setPointer:l,selectedPointerId:c}=e,{radius:g,angleDeg:m,bgColor:f,bgColorSelected:b,bgColorDisabled:i,bgColorHover:u,border:v,borderColor:x}=e.pointer,{cx:p,cy:A}=o,[C,w]=le(null),[S,_]=le(""),[P,U]=le(Z),[M,I]=le(!1);ie(()=>{U(yt(r,c,f,b,i,u,M))},[r,c,f,b,i,u,M]),ie(()=>{let h=X(a,r.angleDeg,o.startAngleDeg,o.endAngleDeg);_(h===void 0?"":h.toString())},[a,r.angleDeg,o.startAngleDeg,o.endAngleDeg]),ie(()=>{let h=R(L(m),0,Math.PI*2,0,Math.PI),H=O([p,A],h,o.radius);w(H)},[m,p,A,o.radius]);let E=Ot((h,H)=>{if(!n||s.disabled||r.disabled)return;console.log("onValueChange"),console.log(h);let ee=h.type.indexOf("mouse")!==-1?h.clientX:h.touches[0].clientX,te=h.type.indexOf("mouse")!==-1?h.clientY:h.touches[0].clientY,k=$(n,ee,te,o.cx,o.cy,o.radius,o.radius),W;F(o.startAngleDeg,o.endAngleDeg,k)?W=k:W=se(o.startAngleDeg,o.endAngleDeg,r.angleDeg,o.cx,o.cy,o.radius),l(r,W,H)},[n,r,l,o.cx,o.cy,o.endAngleDeg,o.radius,o.startAngleDeg,s.disabled]),G=()=>{window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",E)},V=h=>{s.disabled||r.disabled||(E(h),window.addEventListener("mousemove",E),window.addEventListener("mouseup",G))},B=h=>{if(!(s.disabled||r.disabled||s.keyboardDisabled))switch(h.key){case"ArrowLeft":{h.preventDefault(),l(r,r.angleDeg+a.arrowStepAngleDeg);break}case"ArrowRight":{h.preventDefault(),l(r,r.angleDeg-a.arrowStepAngleDeg);break}case"ArrowUp":{h.preventDefault(),l(r,r.angleDeg-a.arrowStepAngleDeg);break}case"ArrowDown":{h.preventDefault(),l(r,r.angleDeg+a.arrowStepAngleDeg);break}}};ie(()=>{let h=t.current,H=k=>{s.disabled||r.disabled||(k.preventDefault(),k.stopPropagation(),E(k))},ee=k=>{if(s.disabled||r.disabled||s.mousewheelDisabled||document.activeElement!==h)return;k.stopPropagation(),k.preventDefault();let W=k.deltaY<0,be;W?be=r.angleDeg+a.arrowStepAngleDeg:be=r.angleDeg-a.arrowStepAngleDeg,l(r,be)},te=k=>{s.disabled||r.disabled||(k.preventDefault(),k.stopPropagation(),E(k,!0))};return h==null||h.addEventListener("touchmove",H,{passive:!1}),h==null||h.addEventListener("touchend",te,{passive:!1}),document.addEventListener("wheel",ee,{passive:!1}),()=>{h==null||h.removeEventListener("touchmove",H),h==null||h.removeEventListener("touchend",te),document.removeEventListener("wheel",ee)}},[C,E,a.arrowStepAngleDeg,r,l,s.disabled,s.mousewheelDisabled]);let Y=()=>{I(!0)},he=()=>{I(!1)};return Ae(Ft,{children:C&&Bt("g",{ref:t,transform:`translate(${C[0]-g/2}, ${C[1]-g/2})`,role:"slider","aria-disabled":r.disabled?!0:void 0,"aria-valuenow":r.angleDeg,"aria-valuetext":S,"aria-label":r.ariaLabel,"data-type":"pointer",className:`mz-round-slider-pointer ${r.disabled?"mz-round-slider-pointer-disabled":""}`,"data-angle":r.angleDeg,"data-id":r.id,"data-index":r.index,onMouseDown:V,onKeyDown:B,onMouseOver:Y,onMouseOut:he,tabIndex:0,cursor:r.disabled?"default":"pointer",style:j,children:[!s.pointerSVG&&Ae("circle",{cx:g/2,cy:g/2,r:g,fill:P,strokeWidth:v,stroke:x,style:{transition:"0.3s fill"}}),s.pointerSVG&&Ae("g",{children:s.pointerSVG})]})})},Je=Nt;import{Fragment as Vt,jsx as je}from"react/jsx-runtime";var Ut=e=>{let{pointers:t,settings:r,svg:o,$svg:n,data:a,setPointer:s,selectedPointerId:l}=e;return je(Vt,{children:t.pointers.map(c=>je(Je,{pointer:c,svg:o,settings:r,$svg:n,data:a,setPointer:s,selectedPointerId:l},c.id))})},et=Ut;var nt=e=>{let t=d(e.min,0),r=d(e.max,100),o=d(e.step,1),n=d(e.arrowStep,1),a=d(e.round,0),s=e.data||[];if(s.length>0){let b=s.findIndex(u=>u===t),i=s.findIndex(u=>u===r);t=b===-1?0:b,r=i===-1?s.length:i}else t>r&&(t=r+100);let l=d(e.pathStartAngle,0),c=d(e.pathEndAngle,360),g=D(l,360)===D(c,360),m=o*(c-l)/(r-t),f=n*(c-l)/(r-t);return{min:t,max:r,round:a,data:s,stepAngleDeg:m,arrowStepAngleDeg:f,isClosedShape:g}};import{useCallback as qt,useEffect as Se,useRef as ce,useState as ge}from"react";var rt=(e,t,r,o,n,a)=>{if(!e.pointers||e.pointers.length<=0)return null;let s={radius:t,cx:r,cy:o,startAngleDeg:n,endAngleDeg:n,strokeDasharray:[0,0],strokeOffset:0};e.pointers.length===1?(s.startAngleDeg=n,s.endAngleDeg=e.pointers[0].angleDeg):(s.startAngleDeg=e.pointers[0].angleDeg,s.endAngleDeg=e.pointers[e.pointers.length-1].angleDeg);let l=Q(n,a);s.startAngleDeg>s.endAngleDeg&&(s.endAngleDeg+=360);let c=Q(s.startAngleDeg,s.endAngleDeg);c>l&&(c=360-c,[s.startAngleDeg,s.endAngleDeg]=[s.endAngleDeg,s.startAngleDeg]);let m=2*Math.PI*t,f=-(s.startAngleDeg/360)*m,b=c/360*m,i=m-b;return s.strokeDasharray=[b,i],s.strokeOffset=f,s};var ue=(e,t,r,o)=>{let n=e.getPercent();n<0&&(n=0),n>100&&(n=100);let a=t%360,s=r%360;if(a<o&&(a+=360),s<o&&(s+=360),s>a){let c=(s-a+360)%360;return D(t+n*c/100,360)}else{let c=(a-s+360)%360;return D(t-n*c/100,360)}};import{Fragment as Wt,jsx as ot}from"react/jsx-runtime";var Xt=(e,t,r,o,n)=>{if(e)return T(t,ze);let a=T(r,xe);return o?T(n,a):a},Yt=e=>{let{settings:t,pointers:r,$svg:o,svg:n,data:a,setPointer:s}=e,[l,c]=ge(null),[g,m]=ge(null),[f,b]=ge(xe),[i,u]=ge(!1),v=ce(),x=ce(null),p=ce(0),A=ce(0);Se(()=>{b(Xt(t.disabled,t.connectionBgColorDisabled,t.connectionBgColor,i,t.connectionBgColorHover))},[t.disabled,t.connectionBgColorDisabled,t.connectionBgColor,t.connectionBgColorHover,i]),Se(()=>{c(rt(r,n.radius,n.cx,n.cy,n.startAngleDeg,n.endAngleDeg))},[r,n.radius,n.cx,n.cy,n.startAngleDeg,n.endAngleDeg]);let C=M=>{if(!o||t.disabled||g&&g.isAnimating())return;let I=$(o,M.clientX,M.clientY,n.cx,n.cy,n.radius,n.radius),E=ae(r.pointers,I,n.cx,n.cy,n.radius);E&&(t.animateOnClick?(x.current=E,p.current=E.angleDeg,A.current=I,g==null||g.start()):s(E,I))},w=qt(M=>{if(!o||t.disabled||!t.rangeDragging)return;let I=Qe(r.pointers,n.startAngleDeg);if(!I)return;let[E,G]=I,V=$(o,M.clientX,M.clientY,n.cx,n.cy,n.radius,n.radius);if(v.current===void 0){v.current=V;return}let B=V-v.current;B===0||Math.abs(B)<a.stepAngleDeg||(s(E,D(E.angleDeg+B,360)),s(G,D(G.angleDeg+B,360)),v.current=V)},[o,n.cx,n.cy,n.radius,a.stepAngleDeg,r.pointers,s,t.disabled,t.rangeDragging,n.startAngleDeg]),S=()=>{window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",w),v.current=void 0},_=M=>{!t.rangeDragging||t.disabled||r.pointers.length<=1||(w(M),window.addEventListener("mousemove",w),window.addEventListener("mouseup",S))};Se(()=>{if(g&&g.stop(),!t.animateOnClick){m(null);return}let M=oe({callback:I=>{if(!x.current)return;let E=ue(I,p.current,A.current,n.startAngleDeg);s(x.current,E)},duration:d(t.animationDuration,200)});m(M)},[t.animateOnClick,t.animationDuration]);let P=()=>{u(!0)},U=()=>{u(!1)};return ot(Wt,{children:!N(t.hideConnection,!1)&&l&&ot("circle",{"data-type":"connection",className:"mz-round-slider-connection",cx:l.cx,cy:l.cy,r:l.radius,strokeDasharray:l.strokeDasharray.join(" "),strokeDashoffset:l.strokeOffset,stroke:f,strokeWidth:n.thickness+1,fill:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:t.disabled?"default":"pointer",onClick:C,onMouseDown:_,onMouseOver:P,onMouseOut:U,style:{transition:"0.2s stroke"}})})},at=Yt;import{useEffect as Zt,useState as Qt}from"react";import{Fragment as jt,jsx as st}from"react/jsx-runtime";var Jt=e=>{let{settings:t,pointers:r,svg:o,data:n}=e,{cx:a,cy:s}=o,[l,c]=Qt("");Zt(()=>{let m=r.pointers.map(i=>X(n,i.angleDeg,o.startAngleDeg,o.endAngleDeg));m.sort((i,u)=>i.toString().localeCompare(u.toString(),"en",{numeric:!0}));let f=m.map(i=>`${t.textPrefix||""}${i}${t.textSuffix||""}`),b=T(t.textBetween," ");c(f.join(b))},[n,r.pointers,o.startAngleDeg,o.endAngleDeg,t.textPrefix,t.textSuffix,t.textBetween]);let g=N(t.hideText,!1);return st(jt,{children:!g&&st("text",{"data-type":"text",className:"mz-round-slider-text",x:a+d(t.textOffsetX,0),y:s+d(t.textOffsetY,0),fill:T(t.textColor,Ge),fontSize:d(t.textFontSize,16),fontFamily:t.textFontFamily,style:{userSelect:"none",whiteSpace:"pre"},textAnchor:"middle",children:l})})},it=Jt;import{useEffect as ct,useState as gt,Fragment as sn}from"react";var lt=(e,t)=>{let r=d(e.ticksCount,0);r||(t.data&&t.data.length>0?r=t.data.length:r=t.max);let o=d(e.ticksHeight,10);return{ticksCount:r,enableTicks:N(e.enableTicks,!1),ticksWidth:d(e.ticksWidth,3),ticksHeight:o,longerTicksHeight:d(e.longerTicksHeight,o*2),ticksDistanceToPanel:d(e.ticksDistanceToPanel,0),tickValuesDistance:d(e.tickValuesDistance,15),ticksColor:T(e.ticksColor,qe),tickValuesColor:T(e.tickValuesColor,Xe),tickValuesFontSize:d(e.tickValuesFontSize,12),ticksGroupSize:d(e.ticksGroupSize,10),longerTickValuesOnly:N(e.longerTickValuesOnly,!0),showTickValues:N(e.showTickValues,!0)}},ut=(e,t,r,o,n,a)=>{let s=[],l=Math.abs(o-r),c=t===0?0:l/t,g=t;a.isClosedShape||g++;for(let m=0;m<g;m++){let f=r+m*c,b=R(L(f),0,Math.PI*2,0,Math.PI),[i,u]=O([n.cx,n.cy],b,n.radius),v=e.ticksGroupSize!==void 0&&m%e.ticksGroupSize===0,x=e.ticksHeight;v&&(x=e.longerTicksHeight);let p=Fe([n.cx-i,n.cy-u]),A=ne(p,x),C=ne(p,e.ticksDistanceToPanel+n.thickness/2);i+=C[0],u+=C[1];let w=i+A[0],S=u+A[1],_;if(e.showTickValues&&(!e.longerTickValuesOnly||e.longerTickValuesOnly&&(v||e.ticksGroupSize===void 0))){let I=R(m,0,t,a.min,a.max);if(a.data.length>0){let E=Math.round(I);I=a.data[E]}else I=y(I,a.round);_=(I!=null?I:"").toString()}let P=0,U=0,M=_!==void 0;if(M){let I=d(x+e.tickValuesDistance,x*1.5),E=ne(p,I);P=i+E[0],U=u+E[1]}s.push({x:i,y:u,x1:w,y1:S,textX:P,textY:U,isLonger:v,tickValue:_,showText:M})}return s};import{Fragment as un,jsx as Te,jsxs as mt}from"react/jsx-runtime";var ln=e=>{let{settings:t,svg:r,data:o}=e,[n,a]=gt(null),[s,l]=gt([]);return ct(()=>{a(lt(t,o))},[t,o]),ct(()=>{if(!n)return;let c=r.endAngleDeg;c<r.startAngleDeg&&(c+=360),l(ut(n,n.ticksCount,r.startAngleDeg,c,r,o))},[o,r,n]),Te(un,{children:n&&n.enableTicks&&Te("g",{children:s.map((c,g)=>{let{x:m,y:f,x1:b,y1:i,textX:u,textY:v,showText:x}=c;return mt(sn,{children:[Te("line",{x1:m,y1:f,x2:b,y2:i,strokeWidth:n.ticksWidth,stroke:n.ticksColor,"data-type":"tick",className:"mz-round-slider-tick"}),x&&mt("text",{"data-type":"tick-text",className:"mz-round-slider-tick-text",x:u,y:v,textAnchor:"middle",dominantBaseline:"middle",fill:n.tickValuesColor,fontSize:n.tickValuesFontSize,fontFamily:t.tickValuesFontFamily,style:{userSelect:"none",whiteSpace:"pre"},children:[t.tickValuesPrefix,c.tickValue,t.tickValuesSuffix]})]},g)})})})},dt=ln;import{useEffect as pt,useState as Me,useRef as Pe}from"react";import{useEffect as ft,useState as me}from"react";import{Fragment as gn,jsx as Ce,jsxs as ht}from"react/jsx-runtime";var cn=e=>{let{svg:t,maskId:r,settings:o,circle:n}=e,[a,s]=me([0,0]),[l,c]=me([0,0]),[g,m]=me(0),[f,b]=me(!1);return ft(()=>{if(D(t.startAngleDeg,360)===D(t.endAngleDeg,360)){b(!0);return}b(N(o.pathInnerBgFull,!1))},[o.pathInnerBgFull,t.startAngleDeg,t.endAngleDeg]),ft(()=>{let i=R(t.startAngleDeg,0,Math.PI*2,0,Math.PI);s(O([t.cx,t.cy],L(i),t.radius));let u=R(t.endAngleDeg,0,Math.PI*2,0,Math.PI);c(O([t.cx,t.cy],L(u),t.radius));let v=t.endAngleDeg-t.startAngleDeg<=180?1:0;m(v)},[t.cx,t.cy,t.endAngleDeg,t.radius,t.startAngleDeg]),ht(gn,{children:[!f&&ht("mask",{id:r,children:[Ce("path",{fill:"black",d:`M ${a[0]} ${a[1]} A ${t.radius} ${t.radius} 1 ${g} 0 ${l[0]} ${l[1]}`}),Ce("path",{fill:"white",d:`M ${a[0]} ${a[1]} A ${t.radius} ${t.radius} 0 ${g===1?0:1} 1 ${l[0]} ${l[1]}`})]}),Ce("circle",{strokeDasharray:n.strokeDasharray,strokeDashoffset:n.strokeOffset,cx:t.cx,cy:t.cy,r:t.radius,stroke:"transparent",strokeWidth:t.thickness,fill:o.pathInnerBgColor,shapeRendering:"geometricPrecision",strokeLinecap:"round","data-type":"path-inner",className:"mz-round-slider-path-inner",mask:f?"":`url(#${r})`})]})},bt=cn;import{jsx as we,jsxs as dn}from"react/jsx-runtime";var mn=e=>{let{settings:t,pointers:r,$svg:o,svg:n,setPointer:a}=e,[s,l]=Me(null),[c]=Me(Ue()),[g,m]=Me({strokeDasharray:"0 1000000",strokeOffset:0}),f=Pe(null),b=Pe(0),i=Pe(0);pt(()=>{m(Ye(n.startAngleDeg,n.endAngleDeg,n.radius))},[n.startAngleDeg,n.endAngleDeg,n.radius]);let u=v=>{if(!o||t.disabled||s&&s.isAnimating())return;let x=$(o,v.clientX,v.clientY,n.cx,n.cy,n.radius,n.radius),p=ae(r.pointers,x,n.cx,n.cy,n.radius);p&&(t.animateOnClick?(f.current=p,b.current=p.angleDeg,i.current=x,s==null||s.start()):a(p,x))};return pt(()=>{if(s&&s.stop(),!t.animateOnClick){l(null);return}let v=oe({callback:x=>{if(!f.current)return;let p=ue(x,b.current,i.current,n.startAngleDeg);a(f.current,p)},duration:d(t.animationDuration,200)});l(v)},[t.animateOnClick,t.animationDuration]),dn("g",{onClick:u,children:[t.pathInnerBgColor&&we(bt,{maskId:c,settings:t,svg:n,circle:g}),n.border>0&&we("circle",{strokeDasharray:g.strokeDasharray,strokeDashoffset:g.strokeOffset,cx:n.cx,cy:n.cy,r:n.radius,stroke:T(t.pathBorderColor,$e),strokeWidth:n.thickness+n.border*2,fill:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:"pointer","data-type":"path-border",className:"mz-round-slider-path-border"}),we("circle",{strokeDasharray:g.strokeDasharray,strokeDashoffset:g.strokeOffset,cx:n.cx,cy:n.cy,r:n.radius,stroke:T(t.pathBgColor,He),strokeWidth:n.thickness,fill:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:"pointer","data-type":"path",className:"mz-round-slider-path"})]})},Dt=mn;import{Fragment as Dn,jsx as z,jsxs as pn}from"react/jsx-runtime";var To=e=>{let[t,r]=fe(null),[o,n]=fe(null),[a,s]=fe(null),[l,c]=fe(""),g=vt(null),m=vt(null);de(()=>{let i=nt(e);JSON.stringify(t)!==JSON.stringify(i)&&r(i)},[t,e]),de(()=>{s(Ze(e,t))},[e.pointerRadius,e.pathStartAngle,e.pointerBgColor,e.pointerBgColorSelected,e.pointerBgColorDisabled,e.pointerBorder,e.pointerBorderColor,e.disabled,e.pointers,e.pointerRadius,e.pointerBgColor,e.pointerBgColorSelected,e.pointerBgColorDisabled,e.pointerBorder,e.pointerBorderColor,e.disabled,e.pathStartAngle,e.pathEndAngle,t]),de(()=>{if(!a)return;let i=d(e.pathStartAngle,0),u=d(e.pathEndAngle,360);u<=i&&(u+=360),n(Ve(d(e.pathRadius,150),d(e.pathThickness,5),d(e.pathBorder,0),a.maxRadius,i,u))},[e.pathRadius,e.pathThickness,e.pathBorder,e.pathStartAngle,e.pathEndAngle,a]),de(()=>{let i=u=>{u.target.closest('[data-type="pointer"]')||c("")};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[]);let f=(i,u,v)=>{if(e.disabled||!a.pointers||!i||i.disabled)return;if(u=Ie(u,t.stepAngleDeg,o.startAngleDeg,o.endAngleDeg),t.isClosedShape&&D(u,360)===D(o.endAngleDeg,360)&&(u=o.startAngleDeg),i.angleDeg===u){b(i,u,!1,v);return}if(!e.pointersOverlap){let p,A;if(t.isClosedShape){let C=D(i.index-1,a.pointers.length),w=D(i.index+1,a.pointers.length),S=a.pointers[C],_=a.pointers[w];if(p=S.angleDeg,A=_.angleDeg,a.pointers.length===2&&p===A){let P=p;if(g.current===null)g.current=u;else{let M=P-150,I=P-.001;M<0&&(M+=360),I<0&&(I+=360);let E=F(P+.001,P+150,u),G=F(M,I,g.current),V=E&&G,B=P-150,Y=P-.001;B<0&&(B+=360),Y<0&&(Y+=360);let he=F(B,Y,u),h=F(P+.001,P+150,g.current);if(V||he&&h){b(i,P,!0,v);return}u!==P&&(g.current=u)}}}else p=i.index===0?o.startAngleDeg:a.pointers[i.index-1].angleDeg,A=i.index===a.pointers.length-1?o.endAngleDeg:a.pointers[i.index+1].angleDeg;A<=p?A+=360:D(p,360)<=D(A,360)&&(p=D(p,360),A=D(A,360)),F(p,A,u)||(u=se(p,A,u,o.cx,o.cy,o.radius))}b(i,u,i.angleDeg!==u,v)},b=(i,u,v,x)=>{var A;if(v){let C=K({},a);if(C.pointers=[...a.pointers],C.pointers[i.index].prevAngleDeg=C.pointers[i.index].angleDeg,C.pointers[i.index].angleDeg=u,a.pointers=C.pointers,s(C),typeof e.onChange=="function"){let w=C.pointers.map(S=>{let _=X(t,S.angleDeg,o.startAngleDeg,o.endAngleDeg);return{radius:S.radius,value:_,bgColor:S.bgColor,bgColorSelected:S.bgColorSelected,bgColorDisabled:S.bgColorDisabled,border:S.border,borderColor:S.borderColor,disabled:S.disabled,ariaLabel:S.ariaLabel}});e.onChange(w),x==!0&&e.onDragEnd(w)}}c(i.id);let p=(A=m.current)==null?void 0:A.querySelector(`[data-id="${i.id}"]`);p&&p.focus()};return z(Dn,{children:o&&pn("svg",{ref:m,xmlns:"http://www.w3.org/2000/svg",width:o.size,height:o.size,tabIndex:0,focusable:!0,"aria-disabled":e.disabled?!0:void 0,style:e.svgBgColor?_e(K({},j),{backgroundColor:e.svgBgColor}):j,className:`mz-round-slider ${e.disabled?"mz-round-slider-disabled":""}`,children:[e.SvgDefs&&z("defs",{children:e.SvgDefs}),z(Dt,{settings:e,pointers:a,svg:o,$svg:m.current,setPointer:f}),z(dt,{settings:e,svg:o,data:t}),z(at,{settings:e,pointers:a,svg:o,$svg:m.current,data:t,setPointer:f}),z(et,{settings:e,pointers:a,svg:o,$svg:m.current,data:t,setPointer:f,selectedPointerId:l}),z(it,{settings:e,pointers:a,svg:o,data:t})]})})};export{To as RoundSlider};
//# sourceMappingURL=mz-react-round-slider.esm.js.map
