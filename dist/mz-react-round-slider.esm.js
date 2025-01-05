/* 
MZ React Round Slider v1.0.3
https://github.com/mzusin/react-round-slider
MIT License      
Copyright (c) 2023-present, Miriam Zusin          
*/
var xt=Object.defineProperty,It=Object.defineProperties;var At=Object.getOwnPropertyDescriptors;var we=Object.getOwnPropertySymbols;var St=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable;var Re=(e,t,r)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t)=>{for(var r in t||(t={}))St.call(t,r)&&Re(e,r,t[r]);if(we)for(var r of we(t))Et.call(t,r)&&Re(e,r,t[r]);return e},ke=(e,t)=>It(e,At(t));import{useEffect as ge,useRef as Dt,useState as me}from"react";var Tt=Math.pow,L=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let r=Tt(10,t);return Math.round(e*r)/r},v=(e,t)=>(e%t+t)%t,w=(e,t,r,o,n)=>(n-o)*(e-t)/(r-t)+o;var _e=e=>!isNaN(parseFloat(e))&&isFinite(e);var Le=(e,t=1/0)=>{let r=e*(180/Math.PI);return L(r,t)},k=(e,t=1/0)=>{let r=e*(Math.PI/180);return L(r,t)};var Oe=(e,t,r=1/0)=>{let o=[];for(let n=0;n<e.length;n++)o.push(L(e[n]-t[n],r));return o},ye=(e,t,r=1/0)=>Oe(e,t,r);var Ct=(e,t,r=1/0)=>{let o=[];for(let n=0;n<e.length;n++)o.push(L(e[n]*t,r));return o},ee=(e,t,r=1/0)=>Ct(e,t,r);var Ne=(e,t=1/0)=>{let r=0;for(let o=0;o<e.length;o++)r+=e[o]*e[o];return L(Math.sqrt(r),t)};var te=(e,t,r=1/0)=>{let o=Oe(e,t);return Ne(o,r)};var Mt=(e,t=1/0)=>{let r=Ne(e),o=[];for(let n=0;n<e.length;n++)o.push(r===0?0:L(e[n]/r,t));return o},Be=(e,t=1/0)=>Mt(e,t);var _=(e,t,r)=>(t=t%Math.PI*2,[e[0]+Math.cos(t)*r,e[1]+Math.sin(t)*r]);var Fe=()=>Math.random().toString(36).substring(2)+new Date().getTime().toString(36);var ne=e=>{let t=e.duration!==void 0?e.duration:1/0,r,o,n,a,i=!1,l,c=()=>{r=void 0,n=void 0,a=void 0,i=!1,o!==void 0&&window.cancelAnimationFrame(o)},g=()=>{c(),u()},m=()=>{i=!1},h=()=>{i=!0},p=P=>{r===void 0&&(r=P),n=P-r,i&&a!==P&&typeof e.callback=="function"&&e.callback(A()),n<=t?(a=P,o=window.requestAnimationFrame(p)):c()},s=(P,C)=>{g(),typeof e.resizeCallback=="function"&&e.resizeCallback(P,C)},u=()=>{r=void 0,n=void 0,a=void 0,i=!0,e.restartOnResize&&window.ResizeObserver&&l===void 0?(l=new ResizeObserver(s),l.observe(document.body,{box:"border-box"})):o=window.requestAnimationFrame(p)},x=()=>n,d=()=>i,D=()=>r,T=()=>{if(!(t===1/0||n===void 0))return n*100/t},R=()=>l,A=()=>({start:u,stop:c,pause:m,resume:h,restart:g,isAnimating:d,getElapsedTime:x,getStartTime:D,getPercent:T,getResizeObserver:R});return A()};var Ue=(e,t,r,o,n,a)=>{let i=t+r*2,l=Math.max(0,o*2-i),c=e*2+i+l,[g,m]=Pt(e,o,t,r);return{cx:g,cy:m,radius:e,size:c,thickness:t,border:r,startAngleDeg:n,endAngleDeg:a}},Pt=(e,t,r,o)=>{let n=wt(e,t,r,o),a=L(n/2,2);return[a,a]},wt=(e,t,r,o)=>{let n=r+o*2,a=Math.max(0,t*2-n);return e*2+n+a};var Ve="#efefef";var He="#444444";var K="#163a86",pe="#000",be="#a8a8a8";var De="#000",ve="#5daed2",$e="#97b0bb",ze="#000";var Ge="#efefef",qe="#000";var f=(e,t)=>_e(e)?Number(e):t,I=(e,t)=>e==null?t:e,O=(e,t)=>e==null?t:e;var U=(e,t,r)=>(e>t&&(t+=360),r>=e&&r<=t||r+360>=e&&r+360<=t),Z=(e,t)=>{t<e&&(t+=360);let r=t-e,o=v(r,360);return o===0&&r>0?360:o},Xe=(e,t,r)=>{e>t&&(t+=360);let o=2*Math.PI*r,n=t-e,a=-(e/360)*o,i=n/360*o,l=o-i;return{strokeDasharray:[i,l].join(" "),strokeOffset:a}};var H=(e,t,r,o,n,a,i)=>{let{left:l,top:c}=e.getBoundingClientRect(),g=[t-l,r-c],m=ye(g,[o,n]),h=Math.atan2(m[1]/i,m[0]/a);return h<0&&(h+=2*Math.PI),Le(h)},X=(e,t,r,o)=>{o<r&&(o+=360),t<r&&(t+=360);let n=w(t,r,o,e.min,e.max);if(e.data.length>0){let a=Math.round(n);n=e.data[a]}else n=L(n,e.round);return n},Rt=(e,t,r,o)=>{let n;if(o<r&&(o+=360),e.data.length>0){let a=e.data.findIndex(i=>i===t);n=a===-1?0:a}else n=typeof t!="number"?e.min:t;return v(w(n,e.min,e.max,r,o),360)},kt=(e,t)=>{if(!e||!e.pointers||e.pointers.length<0||!t){let o=v(f(e.pathStartAngle,0),360),n=I(e.pointerBgColor,K),a=I(e.pointerBgColorSelected,pe),i=I(e.pointerBgColorDisabled,be),l=I(e.pointerBgColorHover,a);return[{id:"0",index:0,radius:f(e.pointerRadius,10),angleDeg:o,prevAngleDeg:o,bgColor:n,bgColorSelected:a,bgColorDisabled:i,bgColorHover:l,border:f(e.pointerBorder,0),borderColor:I(e.pointerBorderColor,De),disabled:!!e.disabled}]}let r=[];for(let o=0;o<e.pointers.length;o++){let n=e.pointers[o],a=n.radius!==void 0?n.radius:f(e.pointerRadius,10),i=n.bgColor?n.bgColor:I(e.pointerBgColor,K),l=n.bgColorSelected?n.bgColorSelected:I(e.pointerBgColorSelected,pe),c=n.bgColorDisabled?n.bgColorDisabled:I(e.pointerBgColorDisabled,be),g=n.bgColorHover?n.bgColorHover:I(e.pointerBgColorHover,l),m=n.border?n.border:f(e.pointerBorder,0),h=n.borderColor?n.borderColor:I(e.pointerBorderColor,De),p=n.disabled!==void 0?n.disabled:O(e.disabled,!1),s=f(e.pathStartAngle,0),u=f(e.pathEndAngle,360),x=Rt(t,n.value,s,u),d=xe(x,t.stepAngleDeg,s,u);t.isClosedShape&&v(d,360)===v(u,360)&&(d=s),r.push({id:o.toString(),index:o,radius:a,angleDeg:d,prevAngleDeg:d,bgColor:i,bgColorSelected:l,bgColorDisabled:c,bgColorHover:g,border:m,borderColor:h,disabled:p,ariaLabel:n.ariaLabel})}return r},Ke=(e,t)=>{let r=kt(e,t);return{pointers:r,maxRadius:_t(r)}},_t=e=>{if(e.length<=0)return 0;let t=-1/0;for(let r of e)t=Math.max(t,Math.max(0,r.radius+r.border/2));return t},re=(e,t,r,o,n)=>{if(!e||e.length<=0)return null;if(e.length===1)return e[0];let a=w(k(t),0,Math.PI*2,0,Math.PI),i=_([r,o],a,n),l,c=null,g=e.filter(m=>!m.disabled);for(let m of g){let h=w(k(m.angleDeg),0,Math.PI*2,0,Math.PI),p=_([r,o],h,n),s=te(i,p);(l===void 0||s<l)&&(l=s,c=m)}return W({},c)},oe=(e,t,r,o,n,a)=>{let i=w(k(r),0,Math.PI*2,0,Math.PI),l=_([o,n],i,a),c=w(k(e),0,Math.PI*2,0,Math.PI),g=_([o,n],c,a),m=w(k(t),0,Math.PI*2,0,Math.PI),h=_([o,n],m,a),p=te(l,g),s=te(l,h);return p<=s?e:t},Ze=(e,t)=>{if(!e||e.length<=0)return null;let r,o,n=null,a=null;for(let i of e){let l=Z(t,i.angleDeg);(r===void 0||l<r)&&(n=i,r=l),(o===void 0||l>o)&&(a=i,o=l)}return n===null||a===null?null:[n,a]},xe=(e,t,r,o)=>v(e,360)===v(r,360)||v(e,360)===v(o,360)?e:t===0?0:Math.round(e/t)*t;import{useEffect as ae,useState as ie,useRef as Lt,useCallback as Ot}from"react";var J={outline:"none"};import{Fragment as Ft,jsx as Ie,jsxs as Bt}from"react/jsx-runtime";var yt=(e,t,r,o,n,a,i)=>e.disabled?n:i?a:e.id===t?o:r,Nt=e=>{let t=Lt(null),{pointer:r,svg:o,$svg:n,data:a,settings:i,setPointer:l,selectedPointerId:c}=e,{radius:g,angleDeg:m,bgColor:h,bgColorSelected:p,bgColorDisabled:s,bgColorHover:u,border:x,borderColor:d}=e.pointer,{cx:D,cy:T}=o,[R,A]=ie(null),[P,C]=ie(""),[V,N]=ie(K),[M,S]=ie(!1);ae(()=>{N(yt(r,c,h,p,s,u,M))},[r,c,h,p,s,u,M]),ae(()=>{let b=X(a,r.angleDeg,o.startAngleDeg,o.endAngleDeg);C(b===void 0?"":b.toString())},[a,r.angleDeg,o.startAngleDeg,o.endAngleDeg]),ae(()=>{let b=w(k(m),0,Math.PI*2,0,Math.PI),G=_([D,T],b,o.radius);A(G)},[m,D,T,o.radius]);let E=Ot(b=>{if(!n||i.disabled||r.disabled)return;let G=b.type.indexOf("mouse")!==-1?b.clientX:b.touches[0].clientX,j=b.type.indexOf("mouse")!==-1?b.clientY:b.touches[0].clientY,Y=H(n,G,j,o.cx,o.cy,o.radius,o.radius),y;U(o.startAngleDeg,o.endAngleDeg,Y)?y=Y:y=oe(o.startAngleDeg,o.endAngleDeg,r.angleDeg,o.cx,o.cy,o.radius),l(r,y)},[n,r,l,o.cx,o.cy,o.endAngleDeg,o.radius,o.startAngleDeg,i.disabled]),z=()=>{window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",E)},F=b=>{i.disabled||r.disabled||(E(b),window.addEventListener("mousemove",E),window.addEventListener("mouseup",z))},B=b=>{if(!(i.disabled||r.disabled||i.keyboardDisabled))switch(b.key){case"ArrowLeft":{b.preventDefault(),l(r,r.angleDeg+a.arrowStepAngleDeg);break}case"ArrowRight":{b.preventDefault(),l(r,r.angleDeg-a.arrowStepAngleDeg);break}case"ArrowUp":{b.preventDefault(),l(r,r.angleDeg-a.arrowStepAngleDeg);break}case"ArrowDown":{b.preventDefault(),l(r,r.angleDeg+a.arrowStepAngleDeg);break}}};ae(()=>{let b=t.current,G=y=>{i.disabled||r.disabled||(y.preventDefault(),y.stopPropagation(),E(y))},j=y=>{if(i.disabled||r.disabled||i.mousewheelDisabled||document.activeElement!==b)return;y.stopPropagation(),y.preventDefault();let vt=y.deltaY<0,he;vt?he=r.angleDeg+a.arrowStepAngleDeg:he=r.angleDeg-a.arrowStepAngleDeg,l(r,he)},Y=()=>{e.onDragEnd(r)};return b==null||b.addEventListener("touchmove",G,{passive:!1}),b==null||b.addEventListener("touchend",Y,{passive:!1}),document.addEventListener("wheel",j,{passive:!1}),()=>{b==null||b.removeEventListener("touchmove",G),b==null||b.removeEventListener("touchend",Y),document.removeEventListener("wheel",j)}},[R,E,a.arrowStepAngleDeg,r,l,i.disabled,i.mousewheelDisabled]);let de=()=>{S(!0)},fe=()=>{S(!1)};return Ie(Ft,{children:R&&Bt("g",{ref:t,transform:`translate(${R[0]-g/2}, ${R[1]-g/2})`,role:"slider","aria-disabled":r.disabled?!0:void 0,"aria-valuenow":r.angleDeg,"aria-valuetext":P,"aria-label":r.ariaLabel,"data-type":"pointer",className:`mz-round-slider-pointer ${r.disabled?"mz-round-slider-pointer-disabled":""}`,"data-angle":r.angleDeg,"data-id":r.id,"data-index":r.index,onMouseDown:F,onKeyDown:B,onMouseOver:de,onMouseOut:fe,tabIndex:0,cursor:r.disabled?"default":"pointer",style:J,children:[!i.pointerSVG&&Ie("circle",{cx:g/2,cy:g/2,r:g,fill:V,strokeWidth:x,stroke:d,style:{transition:"0.3s fill"}}),i.pointerSVG&&Ie("g",{children:i.pointerSVG})]})})},Qe=Nt;import{Fragment as Vt,jsx as Je}from"react/jsx-runtime";var Ut=e=>{let{pointers:t,settings:r,svg:o,$svg:n,data:a,setPointer:i,selectedPointerId:l}=e;return Je(Vt,{children:t.pointers.map(c=>Je(Qe,{pointer:c,svg:o,settings:r,$svg:n,data:a,setPointer:i,onDragEnd:e.onDragEnd,selectedPointerId:l},c.id))})},je=Ut;var tt=e=>{let t=f(e.min,0),r=f(e.max,100),o=f(e.step,1),n=f(e.arrowStep,1),a=f(e.round,0),i=e.data||[];if(i.length>0){let p=i.findIndex(u=>u===t),s=i.findIndex(u=>u===r);t=p===-1?0:p,r=s===-1?i.length:s}else t>r&&(t=r+100);let l=f(e.pathStartAngle,0),c=f(e.pathEndAngle,360),g=v(l,360)===v(c,360),m=o*(c-l)/(r-t),h=n*(c-l)/(r-t);return{min:t,max:r,round:a,data:i,stepAngleDeg:m,arrowStepAngleDeg:h,isClosedShape:g}};import{useCallback as qt,useEffect as Ae,useRef as le,useState as ue}from"react";var nt=(e,t,r,o,n,a)=>{if(!e.pointers||e.pointers.length<=0)return null;let i={radius:t,cx:r,cy:o,startAngleDeg:n,endAngleDeg:n,strokeDasharray:[0,0],strokeOffset:0};e.pointers.length===1?(i.startAngleDeg=n,i.endAngleDeg=e.pointers[0].angleDeg):(i.startAngleDeg=e.pointers[0].angleDeg,i.endAngleDeg=e.pointers[e.pointers.length-1].angleDeg);let l=Z(n,a);i.startAngleDeg>i.endAngleDeg&&(i.endAngleDeg+=360);let c=Z(i.startAngleDeg,i.endAngleDeg);c>l&&(c=360-c,[i.startAngleDeg,i.endAngleDeg]=[i.endAngleDeg,i.startAngleDeg]);let m=2*Math.PI*t,h=-(i.startAngleDeg/360)*m,p=c/360*m,s=m-p;return i.strokeDasharray=[p,s],i.strokeOffset=h,i};var se=(e,t,r,o)=>{let n=e.getPercent();n<0&&(n=0),n>100&&(n=100);let a=t%360,i=r%360;if(a<o&&(a+=360),i<o&&(i+=360),i>a){let c=(i-a+360)%360;return v(t+n*c/100,360)}else{let c=(a-i+360)%360;return v(t-n*c/100,360)}};import{Fragment as Wt,jsx as rt}from"react/jsx-runtime";var Xt=(e,t,r,o,n)=>{if(e)return I(t,$e);let a=I(r,ve);return o?I(n,a):a},Yt=e=>{let{settings:t,pointers:r,$svg:o,svg:n,data:a,setPointer:i}=e,[l,c]=ue(null),[g,m]=ue(null),[h,p]=ue(ve),[s,u]=ue(!1),x=le(),d=le(null),D=le(0),T=le(0);Ae(()=>{p(Xt(t.disabled,t.connectionBgColorDisabled,t.connectionBgColor,s,t.connectionBgColorHover))},[t.disabled,t.connectionBgColorDisabled,t.connectionBgColor,t.connectionBgColorHover,s]),Ae(()=>{c(nt(r,n.radius,n.cx,n.cy,n.startAngleDeg,n.endAngleDeg))},[r,n.radius,n.cx,n.cy,n.startAngleDeg,n.endAngleDeg]);let R=M=>{if(!o||t.disabled||g&&g.isAnimating())return;let S=H(o,M.clientX,M.clientY,n.cx,n.cy,n.radius,n.radius),E=re(r.pointers,S,n.cx,n.cy,n.radius);E&&(t.animateOnClick?(d.current=E,D.current=E.angleDeg,T.current=S,g==null||g.start()):i(E,S))},A=qt(M=>{if(!o||t.disabled||!t.rangeDragging)return;let S=Ze(r.pointers,n.startAngleDeg);if(!S)return;let[E,z]=S,F=H(o,M.clientX,M.clientY,n.cx,n.cy,n.radius,n.radius);if(x.current===void 0){x.current=F;return}let B=F-x.current;B===0||Math.abs(B)<a.stepAngleDeg||(i(E,v(E.angleDeg+B,360)),i(z,v(z.angleDeg+B,360)),x.current=F)},[o,n.cx,n.cy,n.radius,a.stepAngleDeg,r.pointers,i,t.disabled,t.rangeDragging,n.startAngleDeg]),P=()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",A),x.current=void 0},C=M=>{!t.rangeDragging||t.disabled||r.pointers.length<=1||(A(M),window.addEventListener("mousemove",A),window.addEventListener("mouseup",P))};Ae(()=>{if(g&&g.stop(),!t.animateOnClick){m(null);return}let M=ne({callback:S=>{if(!d.current)return;let E=se(S,D.current,T.current,n.startAngleDeg);i(d.current,E)},duration:f(t.animationDuration,200)});m(M)},[t.animateOnClick,t.animationDuration]);let V=()=>{u(!0)},N=()=>{u(!1)};return rt(Wt,{children:!O(t.hideConnection,!1)&&l&&rt("circle",{"data-type":"connection",className:"mz-round-slider-connection",cx:l.cx,cy:l.cy,r:l.radius,strokeDasharray:l.strokeDasharray.join(" "),strokeDashoffset:l.strokeOffset,stroke:h,strokeWidth:n.thickness+1,fill:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:t.disabled?"default":"pointer",onClick:R,onMouseDown:C,onMouseOver:V,onMouseOut:N,style:{transition:"0.2s stroke"}})})},ot=Yt;import{useEffect as Zt,useState as Qt}from"react";import{Fragment as jt,jsx as at}from"react/jsx-runtime";var Jt=e=>{let{settings:t,pointers:r,svg:o,data:n}=e,{cx:a,cy:i}=o,[l,c]=Qt("");Zt(()=>{let m=r.pointers.map(s=>X(n,s.angleDeg,o.startAngleDeg,o.endAngleDeg));m.sort((s,u)=>s.toString().localeCompare(u.toString(),"en",{numeric:!0}));let h=m.map(s=>`${t.textPrefix||""}${s}${t.textSuffix||""}`),p=I(t.textBetween," ");c(h.join(p))},[n,r.pointers,o.startAngleDeg,o.endAngleDeg,t.textPrefix,t.textSuffix,t.textBetween]);let g=O(t.hideText,!1);return at(jt,{children:!g&&at("text",{"data-type":"text",className:"mz-round-slider-text",x:a+f(t.textOffsetX,0),y:i+f(t.textOffsetY,0),fill:I(t.textColor,ze),fontSize:f(t.textFontSize,16),fontFamily:t.textFontFamily,style:{userSelect:"none",whiteSpace:"pre"},textAnchor:"middle",children:l})})},it=Jt;import{useEffect as ut,useState as ct,Fragment as sn}from"react";var st=(e,t)=>{let r=f(e.ticksCount,0);r||(t.data&&t.data.length>0?r=t.data.length:r=t.max);let o=f(e.ticksHeight,10);return{ticksCount:r,enableTicks:O(e.enableTicks,!1),ticksWidth:f(e.ticksWidth,3),ticksHeight:o,longerTicksHeight:f(e.longerTicksHeight,o*2),ticksDistanceToPanel:f(e.ticksDistanceToPanel,0),tickValuesDistance:f(e.tickValuesDistance,15),ticksColor:I(e.ticksColor,Ge),tickValuesColor:I(e.tickValuesColor,qe),tickValuesFontSize:f(e.tickValuesFontSize,12),ticksGroupSize:f(e.ticksGroupSize,10),longerTickValuesOnly:O(e.longerTickValuesOnly,!0),showTickValues:O(e.showTickValues,!0)}},lt=(e,t,r,o,n,a)=>{let i=[],l=Math.abs(o-r),c=t===0?0:l/t,g=t;a.isClosedShape||g++;for(let m=0;m<g;m++){let h=r+m*c,p=w(k(h),0,Math.PI*2,0,Math.PI),[s,u]=_([n.cx,n.cy],p,n.radius),x=e.ticksGroupSize!==void 0&&m%e.ticksGroupSize===0,d=e.ticksHeight;x&&(d=e.longerTicksHeight);let D=Be([n.cx-s,n.cy-u]),T=ee(D,d),R=ee(D,e.ticksDistanceToPanel+n.thickness/2);s+=R[0],u+=R[1];let A=s+T[0],P=u+T[1],C;if(e.showTickValues&&(!e.longerTickValuesOnly||e.longerTickValuesOnly&&(x||e.ticksGroupSize===void 0))){let S=w(m,0,t,a.min,a.max);if(a.data.length>0){let E=Math.round(S);S=a.data[E]}else S=L(S,a.round);C=(S!=null?S:"").toString()}let V=0,N=0,M=C!==void 0;if(M){let S=f(d+e.tickValuesDistance,d*1.5),E=ee(D,S);V=s+E[0],N=u+E[1]}i.push({x:s,y:u,x1:A,y1:P,textX:V,textY:N,isLonger:x,tickValue:C,showText:M})}return i};import{Fragment as un,jsx as Ee,jsxs as gt}from"react/jsx-runtime";var ln=e=>{let{settings:t,svg:r,data:o}=e,[n,a]=ct(null),[i,l]=ct([]);return ut(()=>{a(st(t,o))},[t,o]),ut(()=>{if(!n)return;let c=r.endAngleDeg;c<r.startAngleDeg&&(c+=360),l(lt(n,n.ticksCount,r.startAngleDeg,c,r,o))},[o,r,n]),Ee(un,{children:n&&n.enableTicks&&Ee("g",{children:i.map((c,g)=>{let{x:m,y:h,x1:p,y1:s,textX:u,textY:x,showText:d}=c;return gt(sn,{children:[Ee("line",{x1:m,y1:h,x2:p,y2:s,strokeWidth:n.ticksWidth,stroke:n.ticksColor,"data-type":"tick",className:"mz-round-slider-tick"}),d&&gt("text",{"data-type":"tick-text",className:"mz-round-slider-tick-text",x:u,y:x,textAnchor:"middle",dominantBaseline:"middle",fill:n.tickValuesColor,fontSize:n.tickValuesFontSize,fontFamily:t.tickValuesFontFamily,style:{userSelect:"none",whiteSpace:"pre"},children:[t.tickValuesPrefix,c.tickValue,t.tickValuesSuffix]})]},g)})})})},mt=ln;import{useEffect as pt,useState as Ce,useRef as Me}from"react";import{useEffect as dt,useState as ce}from"react";import{Fragment as gn,jsx as Te,jsxs as ft}from"react/jsx-runtime";var cn=e=>{let{svg:t,maskId:r,settings:o,circle:n}=e,[a,i]=ce([0,0]),[l,c]=ce([0,0]),[g,m]=ce(0),[h,p]=ce(!1);return dt(()=>{if(v(t.startAngleDeg,360)===v(t.endAngleDeg,360)){p(!0);return}p(O(o.pathInnerBgFull,!1))},[o.pathInnerBgFull,t.startAngleDeg,t.endAngleDeg]),dt(()=>{let s=w(t.startAngleDeg,0,Math.PI*2,0,Math.PI);i(_([t.cx,t.cy],k(s),t.radius));let u=w(t.endAngleDeg,0,Math.PI*2,0,Math.PI);c(_([t.cx,t.cy],k(u),t.radius));let x=t.endAngleDeg-t.startAngleDeg<=180?1:0;m(x)},[t.cx,t.cy,t.endAngleDeg,t.radius,t.startAngleDeg]),ft(gn,{children:[!h&&ft("mask",{id:r,children:[Te("path",{fill:"black",d:`M ${a[0]} ${a[1]} A ${t.radius} ${t.radius} 1 ${g} 0 ${l[0]} ${l[1]}`}),Te("path",{fill:"white",d:`M ${a[0]} ${a[1]} A ${t.radius} ${t.radius} 0 ${g===1?0:1} 1 ${l[0]} ${l[1]}`})]}),Te("circle",{strokeDasharray:n.strokeDasharray,strokeDashoffset:n.strokeOffset,cx:t.cx,cy:t.cy,r:t.radius,stroke:"transparent",strokeWidth:t.thickness,fill:o.pathInnerBgColor,shapeRendering:"geometricPrecision",strokeLinecap:"round","data-type":"path-inner",className:"mz-round-slider-path-inner",mask:h?"":`url(#${r})`})]})},ht=cn;import{jsx as Pe,jsxs as dn}from"react/jsx-runtime";var mn=e=>{let{settings:t,pointers:r,$svg:o,svg:n,setPointer:a}=e,[i,l]=Ce(null),[c]=Ce(Fe()),[g,m]=Ce({strokeDasharray:"0 1000000",strokeOffset:0}),h=Me(null),p=Me(0),s=Me(0);pt(()=>{m(Xe(n.startAngleDeg,n.endAngleDeg,n.radius))},[n.startAngleDeg,n.endAngleDeg,n.radius]);let u=x=>{if(!o||t.disabled||i&&i.isAnimating())return;let d=H(o,x.clientX,x.clientY,n.cx,n.cy,n.radius,n.radius),D=re(r.pointers,d,n.cx,n.cy,n.radius);D&&(t.animateOnClick?(h.current=D,p.current=D.angleDeg,s.current=d,i==null||i.start()):a(D,d))};return pt(()=>{if(i&&i.stop(),!t.animateOnClick){l(null);return}let x=ne({callback:d=>{if(!h.current)return;let D=se(d,p.current,s.current,n.startAngleDeg);a(h.current,D)},duration:f(t.animationDuration,200)});l(x)},[t.animateOnClick,t.animationDuration]),dn("g",{onClick:u,children:[t.pathInnerBgColor&&Pe(ht,{maskId:c,settings:t,svg:n,circle:g}),n.border>0&&Pe("circle",{strokeDasharray:g.strokeDasharray,strokeDashoffset:g.strokeOffset,cx:n.cx,cy:n.cy,r:n.radius,stroke:I(t.pathBorderColor,He),strokeWidth:n.thickness+n.border*2,fill:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:"pointer","data-type":"path-border",className:"mz-round-slider-path-border"}),Pe("circle",{strokeDasharray:g.strokeDasharray,strokeDashoffset:g.strokeOffset,cx:n.cx,cy:n.cy,r:n.radius,stroke:I(t.pathBgColor,Ve),strokeWidth:n.thickness,fill:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:"pointer","data-type":"path",className:"mz-round-slider-path"})]})},bt=mn;import{Fragment as Dn,jsx as $,jsxs as bn}from"react/jsx-runtime";var To=e=>{let[t,r]=me(null),[o,n]=me(null),[a,i]=me(null),[l,c]=me(""),g=Dt(null),m=Dt(null);ge(()=>{let s=tt(e);JSON.stringify(t)!==JSON.stringify(s)&&r(s)},[t,e]),ge(()=>{i(Ke(e,t))},[e.pointerRadius,e.pathStartAngle,e.pointerBgColor,e.pointerBgColorSelected,e.pointerBgColorDisabled,e.pointerBorder,e.pointerBorderColor,e.disabled,e.pointers,e.pointerRadius,e.pointerBgColor,e.pointerBgColorSelected,e.pointerBgColorDisabled,e.pointerBorder,e.pointerBorderColor,e.disabled,e.pathStartAngle,e.pathEndAngle,t]),ge(()=>{if(!a)return;let s=f(e.pathStartAngle,0),u=f(e.pathEndAngle,360);u<=s&&(u+=360),n(Ue(f(e.pathRadius,150),f(e.pathThickness,5),f(e.pathBorder,0),a.maxRadius,s,u))},[e.pathRadius,e.pathThickness,e.pathBorder,e.pathStartAngle,e.pathEndAngle,a]),ge(()=>{let s=u=>{u.target.closest('[data-type="pointer"]')||c("")};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[]);let h=(s,u)=>{if(e.disabled||!a.pointers||!s||s.disabled)return;if(u=xe(u,t.stepAngleDeg,o.startAngleDeg,o.endAngleDeg),t.isClosedShape&&v(u,360)===v(o.endAngleDeg,360)&&(u=o.startAngleDeg),s.angleDeg===u){p(s,u,!1);return}if(!e.pointersOverlap){let d,D;if(t.isClosedShape){let T=v(s.index-1,a.pointers.length),R=v(s.index+1,a.pointers.length),A=a.pointers[T],P=a.pointers[R];if(d=A.angleDeg,D=P.angleDeg,a.pointers.length===2&&d===D){let C=d;if(g.current===null)g.current=u;else{let N=C-150,M=C-.001;N<0&&(N+=360),M<0&&(M+=360);let S=U(C+.001,C+150,u),E=U(N,M,g.current),z=S&&E,F=C-150,B=C-.001;F<0&&(F+=360),B<0&&(B+=360);let de=U(F,B,u),fe=U(C+.001,C+150,g.current);if(z||de&&fe){p(s,C,!0);return}u!==C&&(g.current=u)}}}else d=s.index===0?o.startAngleDeg:a.pointers[s.index-1].angleDeg,D=s.index===a.pointers.length-1?o.endAngleDeg:a.pointers[s.index+1].angleDeg;D<=d?D+=360:v(d,360)<=v(D,360)&&(d=v(d,360),D=v(D,360)),U(d,D,u)||(u=oe(d,D,u,o.cx,o.cy,o.radius))}p(s,u,s.angleDeg!==u)},p=(s,u,x)=>{var D;if(x){let T=W({},a);if(T.pointers=[...a.pointers],T.pointers[s.index].prevAngleDeg=T.pointers[s.index].angleDeg,T.pointers[s.index].angleDeg=u,a.pointers=T.pointers,i(T),typeof e.onChange=="function"){let R=T.pointers.map(A=>{let P=X(t,A.angleDeg,o.startAngleDeg,o.endAngleDeg);return{radius:A.radius,value:P,bgColor:A.bgColor,bgColorSelected:A.bgColorSelected,bgColorDisabled:A.bgColorDisabled,border:A.border,borderColor:A.borderColor,disabled:A.disabled,ariaLabel:A.ariaLabel}});e.onChange(R)}}c(s.id);let d=(D=m.current)==null?void 0:D.querySelector(`[data-id="${s.id}"]`);d&&d.focus()};return $(Dn,{children:o&&bn("svg",{ref:m,xmlns:"http://www.w3.org/2000/svg",width:o.size,height:o.size,tabIndex:0,focusable:!0,"aria-disabled":e.disabled?!0:void 0,style:e.svgBgColor?ke(W({},J),{backgroundColor:e.svgBgColor}):J,className:`mz-round-slider ${e.disabled?"mz-round-slider-disabled":""}`,children:[e.SvgDefs&&$("defs",{children:e.SvgDefs}),$(bt,{settings:e,pointers:a,svg:o,$svg:m.current,setPointer:h}),$(mt,{settings:e,svg:o,data:t}),$(ot,{settings:e,pointers:a,svg:o,$svg:m.current,data:t,setPointer:h}),$(je,{settings:e,pointers:a,svg:o,$svg:m.current,data:t,setPointer:h,onDragEnd:e.onDragEnd,selectedPointerId:l}),$(it,{settings:e,pointers:a,svg:o,data:t})]})})};export{To as RoundSlider};
//# sourceMappingURL=mz-react-round-slider.esm.js.map
