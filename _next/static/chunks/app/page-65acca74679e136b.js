(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5387:(e,t,r)=>{Promise.resolve().then(r.bind(r,5681)),Promise.resolve().then(r.bind(r,2649)),Promise.resolve().then(r.bind(r,7177)),Promise.resolve().then(r.bind(r,5844)),Promise.resolve().then(r.bind(r,833)),Promise.resolve().then(r.bind(r,2796)),Promise.resolve().then(r.bind(r,1858)),Promise.resolve().then(r.bind(r,2429)),Promise.resolve().then(r.t.bind(r,8173,23))},7177:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(7437),i=r(2265),l=r(9805),n=r(7476),s=r(9e3);let o=e=>{let{children:t,width:r="fit-content",boxColor:o,duration:d}=e,c=(0,l._)(),A=(0,l._)(),f=(0,i.useRef)(null),h=(0,n.Y)(f,{once:!0});return(0,i.useEffect)(()=>{h?(A.start("visible"),c.start("visible")):(A.start("hidden"),c.start("hidden"))},[h,c,A]),(0,a.jsxs)("div",{ref:f,style:{position:"relative",width:r,overflow:"hidden"},children:[(0,a.jsx)(s.E.div,{variants:{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}},initial:"hidden",animate:c,transition:{duration:d||.5,delay:.25},children:t}),(0,a.jsx)(s.E.div,{variants:{hidden:{left:0},visible:{left:"100%"}},initial:"hidden",animate:A,transition:{duration:d||.5,ease:"easeIn"},style:{position:"absolute",top:4,bottom:4,left:0,right:0,zIndex:20,background:o||"#5046e6"}})]})}},5844:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var a=r(7437),i=r(2265),l=r(9512),n=r(1327);let s={containerProps:{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",paddingTop:40}},options:{reverse:!0,depth:1,wheelZoom:!1,imageScale:2,activeCursor:"default",tooltip:"native",initial:[.1,-.1],clickToFront:500,tooltipDelay:0,outlineColour:"#0000",maxSpeed:.04,minSpeed:.02}},o=(e,t)=>(0,n.lB)({icon:e,bgHex:"light"===t?"#f3f2ef":"#080510",fallbackHex:"light"===t?"#6e6e73":"#ffffff",minContrastRatio:"dark"===t?2:1.2,size:42,aProps:{href:void 0,target:void 0,rel:void 0,onClick:e=>e.preventDefault()}});function d(e){let{iconSlugs:t}=e,[r,d]=(0,i.useState)(null),{theme:c}=(0,l.F)();(0,i.useEffect)(()=>{(0,n.qU)({slugs:t}).then(d)},[t]);let A=(0,i.useMemo)(()=>r?Object.values(r.simpleIcons).map(e=>o(e,c||"light")):null,[r,c]);return(0,a.jsx)(n.ZJ,{...s,children:(0,a.jsx)(a.Fragment,{children:A})})}},833:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var a=r(7437),i=r(7440);function l(e){let{className:t,reverse:r,pauseOnHover:l=!1,children:n,vertical:s=!1,repeat:o=4,...d}=e;return(0,a.jsx)("div",{...d,className:(0,i.cn)("group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",{"flex-row":!s,"flex-col":s},t),children:Array(o).fill(0).map((e,t)=>(0,a.jsx)("div",{className:(0,i.cn)("flex shrink-0 justify-around [gap:var(--gap)]",{"animate-marquee flex-row":!s,"animate-marquee-vertical flex-col":s,"group-hover:[animation-play-state:paused]":l,"[animation-direction:reverse]":r}),children:n},t))})}},2796:(e,t,r)=>{"use strict";r.d(t,{RainbowButton:()=>l});var a=r(7437);r(2265);var i=r(7440);function l(e){let{children:t,className:r,...l}=e;return(0,a.jsx)("button",{className:(0,i.cn)("group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50","before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]","bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]","dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",r),...l,children:t})}},1858:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(7437),i=r(2265),l=r(9e3),n=r(7440);let s=e=>{let{id:t,x:r,y:i,color:n,delay:s,scale:o}=e;return(0,a.jsx)(l.E.svg,{className:"pointer-events-none absolute z-20",initial:{opacity:0,left:r,top:i},animate:{opacity:[0,1,0],scale:[0,o,0],rotate:[75,120,150]},transition:{duration:.8,repeat:1/0,delay:s},width:"21",height:"21",viewBox:"0 0 21 21",children:(0,a.jsx)("path",{d:"M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z",fill:n})},t)},o=e=>{let{text:t,colors:r={first:"#9E7AFF",second:"#FE8BBB"},className:l,sparklesCount:o=10,...d}=e,[c,A]=(0,i.useState)([]);return(0,i.useEffect)(()=>{let e=()=>{let e="".concat(100*Math.random(),"%"),t="".concat(100*Math.random(),"%"),a=Math.random()>.5?r.first:r.second,i=2*Math.random(),l=1*Math.random()+.3,n=10*Math.random()+5;return{id:"".concat(e,"-").concat(t,"-").concat(Date.now()),x:e,y:t,color:a,delay:i,scale:l,lifespan:n}};A(Array.from({length:o},e));let t=setInterval(()=>{A(t=>t.map(t=>t.lifespan<=0?e():{...t,lifespan:t.lifespan-.1}))},100);return()=>clearInterval(t)},[r.first,r.second]),(0,a.jsx)("div",{className:(0,n.cn)("text-6xl font-bold",l),...d,style:{"--sparkles-first-color":"".concat(r.first),"--sparkles-second-color":"".concat(r.second)},children:(0,a.jsxs)("span",{className:"relative inline-block",children:[c.map(e=>(0,a.jsx)(s,{...e},e.id)),(0,a.jsx)("strong",{children:t})]})})}},2429:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var a=r(7437),i=r(2265),l=r(2868),n=r(31),s=r(9e3),o=r(7440);let d=e=>{let{children:t,progress:r,range:i}=e,l=(0,n.H)(r,i,[0,1]);return(0,a.jsxs)("span",{className:"xl:lg-3 relative mx-1 lg:mx-2.5",children:[(0,a.jsx)("span",{className:"absolute opacity-30",children:t}),(0,a.jsx)(s.E.span,{style:{opacity:l},className:"text-white",children:t})]})},c=e=>{let{text:t,className:r}=e,n=(0,i.useRef)(null),{scrollYProgress:s}=(0,l.v)({target:n}),c=t.split(" ");return(0,a.jsx)("div",{ref:n,className:(0,o.cn)("relative z-0 h-[200vh]",r),children:(0,a.jsx)("div",{className:"sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]",children:(0,a.jsx)("p",{ref:n,className:"flex flex-wrap p-5 text-lg font-bold text-black/20 dark:text-white/20 md:p-8 md:text-1xl lg:p-10 lg:text-1xl xl:text-1xl",children:c.map((e,t)=>{let r=t/c.length,i=r+1/c.length;return(0,a.jsx)(d,{progress:s,range:[r,i],children:e},t)})})})})}},7440:(e,t,r)=>{"use strict";r.d(t,{cn:()=>l});var a=r(4839),i=r(6164);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.m6)((0,a.W)(t))}},5681:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a={src:"/_next/static/media/gg.4c1f7c06.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEVMaXF8AGb/p55NgZHqqrF8m6OccZ/+//2IIoLFUoCRd52saaamRoZ7T5a4UJPG9/F9HXSw0dL7jpbFqLPrusK1vL7hr6Tzn6Pn4/PLr8bo5eXd6+dM26yXAAAAGHRSTlMALR1PEmj4+0qEsXatXYnocO1C+OjwYIOKwoZqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVR4nCWLSQ6AIBDA6gIziIgKKur//0kIPTTpoQDMTXA+JmjL/EW7Afsr8t+ASyLFw7ja61gGQJ2Z+tWpQoMBsOg+uuAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},2649:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a={src:"/_next/static/media/kenji.a099c546.png",height:460,width:460,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEVMaXGJXj9xZ1hpYUu7vMS3tr1FPiCwr7bAvsnDxNOYcWHe6f+mn5xkRyFEPRa5uMDJytW4pKG6t72tlpKag3Sx7f0aAAAAD3RSTlMA/HmlYMA3/v5OkEfK9GRBQXfCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nGNgQAA2ZiYIzSsiwAJi8DEyCnMzMDCw8ggKcoEE+IU4ODhBDHZ2IQ4OVhYQg5+dX4CDEwAnogF5iuk7VQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}},e=>{var t=t=>e(e.s=t);e.O(0,[177,795,130,215,744],()=>t(5387)),_N_E=e.O()}]);