(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6946:(e,t,r)=>{Promise.resolve().then(r.bind(r,5801)),Promise.resolve().then(r.bind(r,2649)),Promise.resolve().then(r.bind(r,4013)),Promise.resolve().then(r.bind(r,7177)),Promise.resolve().then(r.bind(r,5844)),Promise.resolve().then(r.bind(r,833)),Promise.resolve().then(r.bind(r,2796)),Promise.resolve().then(r.bind(r,1858)),Promise.resolve().then(r.bind(r,2429)),Promise.resolve().then(r.t.bind(r,8173,23))},4013:(e,t,r)=>{"use strict";r.d(t,{default:()=>h});var a=r(7437),n=r(2265),i=r(4867),s=r(7440);let l=e=>{let{children:t,className:r,shimmerWidth:n=100}=e;return(0,a.jsx)("p",{style:{"--shiny-width":"".concat(n,"px")},className:(0,s.cn)("mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70","animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]","bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",r),children:t})};var o=r(9842),d=r(5236),c=r(5186);let m=0===(0,d.C6)().length?(0,d.ZF)({apiKey:"AIzaSyAST8rYyl6WnJ8ldcjb4yXBOF4FEHaObG0",authDomain:"profile-43b91.firebaseapp.com",projectId:"profile-43b91",storageBucket:"profile-43b91.appspot.com",messagingSenderId:"153592248168",appId:"1:153592248168:web:d542301d9c90a8f71088dd",measurementId:"G-VQVCV42E2J"}):(0,d.C6)()[0],u=(0,o.ad)(m);function h(){let[e,t]=(0,n.useState)([]),[r,d]=(0,n.useState)(""),[m,h]=(0,n.useState)(null),g=(0,c.v0)(),f=new c.hJ;(0,n.useEffect)(()=>{let e=(0,o.IO)((0,o.hJ)(u,"comments"),(0,o.Xo)("timestamp","desc")),r=(0,o.cf)(e,e=>{t(e.docs.map(e=>({id:e.id,...e.data()})))}),a=g.onAuthStateChanged(h);return()=>{r(),a()}},[g]);let x=async()=>{try{await (0,c.rh)(g,f)}catch(e){console.error("Error during login:",e)}},p=async e=>{if(e.preventDefault(),r.trim())try{let e=(null==m?void 0:m.email.split("@")[0])||"Anonymous";await (0,o.ET)((0,o.hJ)(u,"comments"),{text:r,timestamp:(0,o.Bt)(),username:e,photoURL:(null==m?void 0:m.photoURL)||null}),d("")}catch(e){console.error("Error adding comment:",e)}};return(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("div",{className:"w-[30%] p-10",children:m?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("form",{onSubmit:p,className:"mb-6",children:[(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("textarea",{value:r,onChange:e=>d(e.target.value),placeholder:"Write a comment...",className:"flex-1 p-2 rounded-md bg-gray-900 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize"})}),(0,a.jsx)("div",{className:"flex justify-end mt-3",children:(0,a.jsx)("button",{type:"submit",className:"bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md text-white font-medium transition",children:"Comment"})})]})}):(0,a.jsx)("div",{className:"z-10 flex min-h-32 items-center justify-center",children:(0,a.jsx)("div",{className:(0,s.cn)("group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"),children:(0,a.jsxs)(l,{className:"inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400",children:[(0,a.jsx)("button",{onClick:x,children:"✨ Login here to comment?"}),(0,a.jsx)(i.LZ3,{className:"ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"})]})})})}),(0,a.jsxs)("div",{className:"w-[70%] p-10",children:[(0,a.jsx)("div",{className:"text-center mb-6",children:(0,a.jsx)("span",{className:"mb-5 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-3xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10",children:"Comments"})}),e.map(e=>(0,a.jsx)("div",{className:"dark:bg-gray-800",children:(0,a.jsxs)("div",{className:"dark:bg-gray-800 text-white dark:text-gray-200 p-4 antialiased flex",children:[(0,a.jsx)("img",{className:"rounded-full h-8 w-8 mr-2 mt-1",src:e.photoURL||"https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png",alt:"User Avatar"}),(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"bg-gray-900 bg-opacity-35 w-fit dark:bg-gray-700 rounded-lg px-4 pt-2 pb-2.5",children:[(0,a.jsxs)("div",{className:"text-xs leading-relaxed flex justify-between",children:[(0,a.jsx)("div",{children:e.username||"Anonymous"}),(0,a.jsx)("div",{className:"text-xs ml-10",children:(0,a.jsx)("small",{style:{fontSize:"9px"},className:"flex justify-end text-white",children:e.timestamp?new Date(1e3*e.timestamp.seconds).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}):"Just now"})})]}),(0,a.jsx)("div",{className:"text-normal leading-snug md:leading-normal",children:e.text})]})})]})},e.id))]})]})})}(0,c.v0)(m)},7177:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(7437),n=r(2265),i=r(9805),s=r(7476),l=r(9e3);let o=e=>{let{children:t,width:r="fit-content",boxColor:o,duration:d}=e,c=(0,i._)(),m=(0,i._)(),u=(0,n.useRef)(null),h=(0,s.Y)(u,{once:!0});return(0,n.useEffect)(()=>{h?(m.start("visible"),c.start("visible")):(m.start("hidden"),c.start("hidden"))},[h,c,m]),(0,a.jsxs)("div",{ref:u,style:{position:"relative",width:r,overflow:"hidden"},children:[(0,a.jsx)(l.E.div,{variants:{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}},initial:"hidden",animate:c,transition:{duration:d||.5,delay:.25},children:t}),(0,a.jsx)(l.E.div,{variants:{hidden:{left:0},visible:{left:"100%"}},initial:"hidden",animate:m,transition:{duration:d||.5,ease:"easeIn"},style:{position:"absolute",top:4,bottom:4,left:0,right:0,zIndex:20,background:o||"#5046e6"}})]})}},5844:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var a=r(7437),n=r(2265),i=r(9512),s=r(1327);let l={containerProps:{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",paddingTop:40}},options:{reverse:!0,depth:1,wheelZoom:!1,imageScale:2,activeCursor:"default",tooltip:"native",initial:[.1,-.1],clickToFront:500,tooltipDelay:0,outlineColour:"#0000",maxSpeed:.04,minSpeed:.02}},o=(e,t)=>(0,s.lB)({icon:e,bgHex:"light"===t?"#f3f2ef":"#080510",fallbackHex:"light"===t?"#6e6e73":"#ffffff",minContrastRatio:"dark"===t?2:1.2,size:42,aProps:{href:void 0,target:void 0,rel:void 0,onClick:e=>e.preventDefault()}});function d(e){let{iconSlugs:t}=e,[r,d]=(0,n.useState)(null),{theme:c}=(0,i.F)();(0,n.useEffect)(()=>{(0,s.qU)({slugs:t}).then(d)},[t]);let m=(0,n.useMemo)(()=>r?Object.values(r.simpleIcons).map(e=>o(e,c||"light")):null,[r,c]);return(0,a.jsx)(s.ZJ,{...l,children:(0,a.jsx)(a.Fragment,{children:m})})}},833:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var a=r(7437),n=r(7440);function i(e){let{className:t,reverse:r,pauseOnHover:i=!1,children:s,vertical:l=!1,repeat:o=4,...d}=e;return(0,a.jsx)("div",{...d,className:(0,n.cn)("group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",{"flex-row":!l,"flex-col":l},t),children:Array(o).fill(0).map((e,t)=>(0,a.jsx)("div",{className:(0,n.cn)("flex shrink-0 justify-around [gap:var(--gap)]",{"animate-marquee flex-row":!l,"animate-marquee-vertical flex-col":l,"group-hover:[animation-play-state:paused]":i,"[animation-direction:reverse]":r}),children:s},t))})}},2796:(e,t,r)=>{"use strict";r.d(t,{RainbowButton:()=>i});var a=r(7437);r(2265);var n=r(7440);function i(e){let{children:t,className:r,...i}=e;return(0,a.jsx)("button",{className:(0,n.cn)("group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50","before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]","bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]","dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",r),...i,children:t})}},1858:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(7437),n=r(2265),i=r(9e3),s=r(7440);let l=e=>{let{id:t,x:r,y:n,color:s,delay:l,scale:o}=e;return(0,a.jsx)(i.E.svg,{className:"pointer-events-none absolute z-20",initial:{opacity:0,left:r,top:n},animate:{opacity:[0,1,0],scale:[0,o,0],rotate:[75,120,150]},transition:{duration:.8,repeat:1/0,delay:l},width:"21",height:"21",viewBox:"0 0 21 21",children:(0,a.jsx)("path",{d:"M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z",fill:s})},t)},o=e=>{let{text:t,colors:r={first:"#9E7AFF",second:"#FE8BBB"},className:i,sparklesCount:o=10,...d}=e,[c,m]=(0,n.useState)([]);return(0,n.useEffect)(()=>{let e=()=>{let e="".concat(100*Math.random(),"%"),t="".concat(100*Math.random(),"%"),a=Math.random()>.5?r.first:r.second,n=2*Math.random(),i=1*Math.random()+.3,s=10*Math.random()+5;return{id:"".concat(e,"-").concat(t,"-").concat(Date.now()),x:e,y:t,color:a,delay:n,scale:i,lifespan:s}};m(Array.from({length:o},e));let t=setInterval(()=>{m(t=>t.map(t=>t.lifespan<=0?e():{...t,lifespan:t.lifespan-.1}))},100);return()=>clearInterval(t)},[r.first,r.second]),(0,a.jsx)("div",{className:(0,s.cn)("text-6xl font-bold",i),...d,style:{"--sparkles-first-color":"".concat(r.first),"--sparkles-second-color":"".concat(r.second)},children:(0,a.jsxs)("span",{className:"relative inline-block",children:[c.map(e=>(0,a.jsx)(l,{...e},e.id)),(0,a.jsx)("strong",{children:t})]})})}},2429:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var a=r(7437),n=r(2265),i=r(2868),s=r(31),l=r(9e3),o=r(7440);let d=e=>{let{children:t,progress:r,range:n}=e,i=(0,s.H)(r,n,[0,1]);return(0,a.jsxs)("span",{className:"xl:lg-3 relative mx-1 lg:mx-2.5",children:[(0,a.jsx)("span",{className:"absolute opacity-30",children:t}),(0,a.jsx)(l.E.span,{style:{opacity:i},className:"text-white",children:t})]})},c=e=>{let{text:t,className:r}=e,s=(0,n.useRef)(null),{scrollYProgress:l}=(0,i.v)({target:s}),c=t.split(" ");return(0,a.jsx)("div",{ref:s,className:(0,o.cn)("relative z-0 h-[200vh]",r),children:(0,a.jsx)("div",{className:"sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]",children:(0,a.jsx)("p",{ref:s,className:"flex flex-wrap p-5 text-lg font-bold text-black/20 dark:text-white/20 md:p-8 md:text-1xl lg:p-10 lg:text-1xl xl:text-1xl",children:c.map((e,t)=>{let r=t/c.length,n=r+1/c.length;return(0,a.jsx)(d,{progress:l,range:[r,n],children:e},t)})})})})}},7440:(e,t,r)=>{"use strict";r.d(t,{cn:()=>i});var a=r(4839),n=r(6164);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}},5801:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a={src:"/_next/static/media/file.e4d9ce85.png",height:5e3,width:5e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXF2JuFhMNaXLeGfWuqcKuamKuR1JeB3Kd/VMeZVIeJgI9+MKOWRKeaeK+K9MeauLORbItlqIt50JeFXIuZrJOaIKPJuJ/s/RloiAAAAFXRSTlMAKxJAMdC6+Usf/JD0/XQf/bryYOFrQI1sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nD3LxwHAIAwAsaPatJBmsv+m+aG/YJtFc3BAPvtKAeIYXaxBFDGr1UFa9/V+D5RDvTa/9w86pAG/ld8DtgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},2649:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a={src:"/_next/static/media/kenji.a099c546.png",height:460,width:460,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEVMaXGJXj9xZ1hpYUu7vMS3tr1FPiCwr7bAvsnDxNOYcWHe6f+mn5xkRyFEPRa5uMDJytW4pKG6t72tlpKag3Sx7f0aAAAAD3RSTlMA/HmlYMA3/v5OkEfK9GRBQXfCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nGNgQAA2ZiYIzSsiwAJi8DEyCnMzMDCw8ggKcoEE+IU4ODhBDHZ2IQ4OVhYQg5+dX4CDEwAnogF5iuk7VQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}},e=>{var t=t=>e(e.s=t);e.O(0,[310,358,387,177,906,130,215,744],()=>t(6946)),_N_E=e.O()}]);