(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6946:(e,t,a)=>{Promise.resolve().then(a.bind(a,5801)),Promise.resolve().then(a.bind(a,2649)),Promise.resolve().then(a.bind(a,9008)),Promise.resolve().then(a.bind(a,7177)),Promise.resolve().then(a.bind(a,5844)),Promise.resolve().then(a.bind(a,833)),Promise.resolve().then(a.bind(a,2796)),Promise.resolve().then(a.bind(a,1858)),Promise.resolve().then(a.bind(a,2429)),Promise.resolve().then(a.t.bind(a,8173,23))},9008:(e,t,a)=>{"use strict";a.d(t,{default:()=>o});var r=a(7437),i=a(2265),s=a(9842);let l=(0,a(5236).ZF)({apiKey:"AIzaSyAST8rYyl6WnJ8ldcjb4yXBOF4FEHaObG0",authDomain:"profile-43b91.firebaseapp.com",projectId:"profile-43b91",storageBucket:"profile-43b91.appspot.com",messagingSenderId:"153592248168",appId:"1:153592248168:web:d542301d9c90a8f71088dd",measurementId:"G-VQVCV42E2J"}),n=(0,s.ad)(l);function o(){let[e,t]=(0,i.useState)([]),[a,l]=(0,i.useState)("");(0,i.useEffect)(()=>{let e=(0,s.IO)((0,s.hJ)(n,"comments"),(0,s.Xo)("timestamp","desc")),a=(0,s.cf)(e,e=>{t(e.docs.map(e=>({id:e.id,...e.data()})))});return()=>a()},[]);let o=async e=>{if(e.preventDefault(),a.trim())try{await (0,s.ET)((0,s.hJ)(n,"comments"),{text:a,timestamp:(0,s.Bt)()}),l("")}catch(e){console.error("Error adding comment:",e)}};return(0,r.jsx)("div",{className:"",children:(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{className:"w-[30%] p-10",children:(0,r.jsxs)("form",{onSubmit:o,className:"mb-6",children:[(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)("textarea",{value:a,onChange:e=>l(e.target.value),placeholder:"Write a comment...",className:"flex-1 p-2 rounded-md bg-gray-900 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize"})}),(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)("button",{type:"submit",className:"bg-blue-600 hover:bg-blue-700 px-3 py-2 mt-3 rounded-md text-white font-medium transition",children:"Comment"})})]})}),(0,r.jsxs)("div",{className:"w-[70%] p-10",children:[(0,r.jsx)("div",{className:"text-center mb-6",children:(0,r.jsx)("span",{className:"mb-5 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-3xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10",children:"Comments"})}),e.map(e=>(0,r.jsx)("div",{className:" dark:bg-gray-800",children:(0,r.jsxs)("div",{className:" dark:bg-gray-800 text-white dark:text-gray-200 p-4 antialiased flex",children:[(0,r.jsx)("img",{className:"rounded-full h-8 w-8 mr-2 mt-1 ",src:"https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"bg-gray-900 bg-opacity-35 w-fit dark:bg-gray-700 rounded-lg px-4 pt-2 pb-2.5",children:[(0,r.jsxs)("div",{className:" text-xs leading-relaxed flex justify-between",children:[(0,r.jsx)("div",{children:"Anonymous"}),(0,r.jsx)("div",{className:"text-xs ml-10",children:(0,r.jsx)("small",{style:{fontSize:"9px"},className:"flex justify-end  text-white",children:e.timestamp?new Date(1e3*e.timestamp.seconds).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}):"Just now"})})]}),(0,r.jsx)("div",{className:"text-normal leading-snug md:leading-normal",children:e.text})]}),(0,r.jsx)("div",{className:"text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400",children:(0,r.jsx)("small",{children:e.timestamp?new Date(1e3*e.timestamp.seconds).toLocaleString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}):"Just now"})})]})]})},e.id))]})]})})}},7177:(e,t,a)=>{"use strict";a.d(t,{default:()=>o});var r=a(7437),i=a(2265),s=a(9805),l=a(7476),n=a(9e3);let o=e=>{let{children:t,width:a="fit-content",boxColor:o,duration:d}=e,c=(0,s._)(),m=(0,s._)(),u=(0,i.useRef)(null),h=(0,l.Y)(u,{once:!0});return(0,i.useEffect)(()=>{h?(m.start("visible"),c.start("visible")):(m.start("hidden"),c.start("hidden"))},[h,c,m]),(0,r.jsxs)("div",{ref:u,style:{position:"relative",width:a,overflow:"hidden"},children:[(0,r.jsx)(n.E.div,{variants:{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}},initial:"hidden",animate:c,transition:{duration:d||.5,delay:.25},children:t}),(0,r.jsx)(n.E.div,{variants:{hidden:{left:0},visible:{left:"100%"}},initial:"hidden",animate:m,transition:{duration:d||.5,ease:"easeIn"},style:{position:"absolute",top:4,bottom:4,left:0,right:0,zIndex:20,background:o||"#5046e6"}})]})}},5844:(e,t,a)=>{"use strict";a.d(t,{default:()=>d});var r=a(7437),i=a(2265),s=a(9512),l=a(1327);let n={containerProps:{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",paddingTop:40}},options:{reverse:!0,depth:1,wheelZoom:!1,imageScale:2,activeCursor:"default",tooltip:"native",initial:[.1,-.1],clickToFront:500,tooltipDelay:0,outlineColour:"#0000",maxSpeed:.04,minSpeed:.02}},o=(e,t)=>(0,l.lB)({icon:e,bgHex:"light"===t?"#f3f2ef":"#080510",fallbackHex:"light"===t?"#6e6e73":"#ffffff",minContrastRatio:"dark"===t?2:1.2,size:42,aProps:{href:void 0,target:void 0,rel:void 0,onClick:e=>e.preventDefault()}});function d(e){let{iconSlugs:t}=e,[a,d]=(0,i.useState)(null),{theme:c}=(0,s.F)();(0,i.useEffect)(()=>{(0,l.qU)({slugs:t}).then(d)},[t]);let m=(0,i.useMemo)(()=>a?Object.values(a.simpleIcons).map(e=>o(e,c||"light")):null,[a,c]);return(0,r.jsx)(l.ZJ,{...n,children:(0,r.jsx)(r.Fragment,{children:m})})}},833:(e,t,a)=>{"use strict";a.d(t,{default:()=>s});var r=a(7437),i=a(7440);function s(e){let{className:t,reverse:a,pauseOnHover:s=!1,children:l,vertical:n=!1,repeat:o=4,...d}=e;return(0,r.jsx)("div",{...d,className:(0,i.cn)("group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",{"flex-row":!n,"flex-col":n},t),children:Array(o).fill(0).map((e,t)=>(0,r.jsx)("div",{className:(0,i.cn)("flex shrink-0 justify-around [gap:var(--gap)]",{"animate-marquee flex-row":!n,"animate-marquee-vertical flex-col":n,"group-hover:[animation-play-state:paused]":s,"[animation-direction:reverse]":a}),children:l},t))})}},2796:(e,t,a)=>{"use strict";a.d(t,{RainbowButton:()=>s});var r=a(7437);a(2265);var i=a(7440);function s(e){let{children:t,className:a,...s}=e;return(0,r.jsx)("button",{className:(0,i.cn)("group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50","before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]","bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]","dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",a),...s,children:t})}},1858:(e,t,a)=>{"use strict";a.d(t,{default:()=>o});var r=a(7437),i=a(2265),s=a(9e3),l=a(7440);let n=e=>{let{id:t,x:a,y:i,color:l,delay:n,scale:o}=e;return(0,r.jsx)(s.E.svg,{className:"pointer-events-none absolute z-20",initial:{opacity:0,left:a,top:i},animate:{opacity:[0,1,0],scale:[0,o,0],rotate:[75,120,150]},transition:{duration:.8,repeat:1/0,delay:n},width:"21",height:"21",viewBox:"0 0 21 21",children:(0,r.jsx)("path",{d:"M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z",fill:l})},t)},o=e=>{let{text:t,colors:a={first:"#9E7AFF",second:"#FE8BBB"},className:s,sparklesCount:o=10,...d}=e,[c,m]=(0,i.useState)([]);return(0,i.useEffect)(()=>{let e=()=>{let e="".concat(100*Math.random(),"%"),t="".concat(100*Math.random(),"%"),r=Math.random()>.5?a.first:a.second,i=2*Math.random(),s=1*Math.random()+.3,l=10*Math.random()+5;return{id:"".concat(e,"-").concat(t,"-").concat(Date.now()),x:e,y:t,color:r,delay:i,scale:s,lifespan:l}};m(Array.from({length:o},e));let t=setInterval(()=>{m(t=>t.map(t=>t.lifespan<=0?e():{...t,lifespan:t.lifespan-.1}))},100);return()=>clearInterval(t)},[a.first,a.second]),(0,r.jsx)("div",{className:(0,l.cn)("text-6xl font-bold",s),...d,style:{"--sparkles-first-color":"".concat(a.first),"--sparkles-second-color":"".concat(a.second)},children:(0,r.jsxs)("span",{className:"relative inline-block",children:[c.map(e=>(0,r.jsx)(n,{...e},e.id)),(0,r.jsx)("strong",{children:t})]})})}},2429:(e,t,a)=>{"use strict";a.d(t,{default:()=>c});var r=a(7437),i=a(2265),s=a(2868),l=a(31),n=a(9e3),o=a(7440);let d=e=>{let{children:t,progress:a,range:i}=e,s=(0,l.H)(a,i,[0,1]);return(0,r.jsxs)("span",{className:"xl:lg-3 relative mx-1 lg:mx-2.5",children:[(0,r.jsx)("span",{className:"absolute opacity-30",children:t}),(0,r.jsx)(n.E.span,{style:{opacity:s},className:"text-white",children:t})]})},c=e=>{let{text:t,className:a}=e,l=(0,i.useRef)(null),{scrollYProgress:n}=(0,s.v)({target:l}),c=t.split(" ");return(0,r.jsx)("div",{ref:l,className:(0,o.cn)("relative z-0 h-[200vh]",a),children:(0,r.jsx)("div",{className:"sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]",children:(0,r.jsx)("p",{ref:l,className:"flex flex-wrap p-5 text-lg font-bold text-black/20 dark:text-white/20 md:p-8 md:text-1xl lg:p-10 lg:text-1xl xl:text-1xl",children:c.map((e,t)=>{let a=t/c.length,i=a+1/c.length;return(0,r.jsx)(d,{progress:n,range:[a,i],children:e},t)})})})})}},7440:(e,t,a)=>{"use strict";a.d(t,{cn:()=>s});var r=a(4839),i=a(6164);function s(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,i.m6)((0,r.W)(t))}},5801:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});let r={src:"/_next/static/media/file.e4d9ce85.png",height:5e3,width:5e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXF2JuFhMNaXLeGfWuqcKuamKuR1JeB3Kd/VMeZVIeJgI9+MKOWRKeaeK+K9MeauLORbItlqIt50JeFXIuZrJOaIKPJuJ/s/RloiAAAAFXRSTlMAKxJAMdC6+Usf/JD0/XQf/bryYOFrQI1sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nD3LxwHAIAwAsaPatJBmsv+m+aG/YJtFc3BAPvtKAeIYXaxBFDGr1UFa9/V+D5RDvTa/9w86pAG/ld8DtgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},2649:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});let r={src:"/_next/static/media/kenji.a099c546.png",height:460,width:460,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEVMaXGJXj9xZ1hpYUu7vMS3tr1FPiCwr7bAvsnDxNOYcWHe6f+mn5xkRyFEPRa5uMDJytW4pKG6t72tlpKag3Sx7f0aAAAAD3RSTlMA/HmlYMA3/v5OkEfK9GRBQXfCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nGNgQAA2ZiYIzSsiwAJi8DEyCnMzMDCw8ggKcoEE+IU4ODhBDHZ2IQ4OVhYQg5+dX4CDEwAnogF5iuk7VQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}},e=>{var t=t=>e(e.s=t);e.O(0,[358,177,149,130,215,744],()=>t(6946)),_N_E=e.O()}]);