import{p as L,h as l,_ as E,F as M}from"./hooks.module.7cc4e70a.js";import{C as z}from"./close.3a539829.js";import{S as q}from"./spinner.164b1eeb.js";import{u as N}from"./use-keydown.41d75069.js";import{u as H}from"./use-outside-click.85d1a62f.js";import{h as O,a as K}from"./http.82ebf0f1.js";import{i as U}from"./jwt.f0e0aa9c.js";import{g as Q,u as F,a as j,b as B,i as W}from"./resource-progress.b09662c1.js";import{p as A,s as J}from"./page.c1a8a472.js";import{s as D}from"./popup.a359f713.js";import{u as $}from"./use-toast.fb52de5d.js";import{o as e}from"./jsxRuntime.module.afbf92fe.js";import{k as V}from"./preact.module.7b19fc78.js";import"./index.a98c85f5.js";import"./toast.1fe7142d.js";function X(d){L(()=>{function n(c){const{resourceType:s,resourceId:o,topicId:u}=c.detail;d({resourceType:s,resourceId:o,topicId:u})}return window.addEventListener("roadmap.topic.click",n),window.addEventListener("best-practice.topic.click",n),()=>{window.removeEventListener("roadmap.topic.click",n),window.removeEventListener("best-practice.topic.click",n)}},[])}function Y(d){L(()=>{function n(c){const{resourceType:s,resourceId:o,topicId:u}=c.detail;d({resourceType:s,resourceId:o,topicId:u})}return window.addEventListener("best-practice.topic.toggle",n),()=>{window.removeEventListener("best-practice.topic.toggle",n)}},[])}const Z="/_astro/down.93d0ce97.svg",I={done:"bg-green-500",learning:"bg-yellow-500",pending:"bg-gray-300",skipped:"bg-black",removed:""};function ee(d){const{topicId:n,resourceId:c,resourceType:s,onClose:o}=d,u=$(),[b,a]=l(!0),[t,p]=l("pending"),[y,r]=l(!1),h=E(null);H(h,()=>{r(!1)});const m=M(()=>!U(),[]);L(()=>{!n||!c||!s||(a(!0),Q({topicId:n,resourceId:c,resourceType:s}).then(k=>{a(!1),p(k)}).catch(console.error))},[n,c,s]),N("d",()=>{if(t==="done"){o();return}i("done")},[t]),N("l",()=>{if(t==="learning"){o();return}i("learning")},[t]),N("s",()=>{if(t==="skipped"){o();return}i("skipped")},[t]),N("r",()=>{if(console.log(t),t==="pending"){o();return}i("pending")},[t]);const i=k=>{if(m){o(),D();return}a(!0),F({topicId:n,resourceId:c,resourceType:s},k).then(()=>{p(k),o(),j(n,k),B()}).catch(S=>{u.error(S.message||"Error updating progress"),console.error(S)}).finally(()=>{a(!1)})},w=["pending","learning","done"].includes(t),C=["skipped","pending","learning"].includes(t),g=["done","skipped","pending"].includes(t),P=["skipped","done","learning"].includes(t);return b?e("button",{className:"inline-flex cursor-default items-center rounded-md border border-gray-300 bg-white p-1 px-2 text-sm text-black",children:[e("img",{alt:"Check",class:"h-4 w-4 animate-spin",src:q}),e("span",{className:"ml-2",children:"Updating Status.."})]}):e("div",{className:"relative inline-flex rounded-md border border-gray-300",children:[e("span",{className:"inline-flex cursor-default items-center  p-1 px-2 text-sm text-black",children:[e("span",{class:"flex h-2 w-2",children:e("span",{class:`relative inline-flex h-2 w-2 rounded-full ${I[t]}`})}),e("span",{className:"ml-2 capitalize",children:t==="learning"?"In Progress":t})]}),e("button",{className:"inline-flex cursor-pointer items-center rounded-br-md rounded-tr-md border-l border-l-gray-300 bg-gray-100 p-1 px-2 text-sm text-black hover:bg-gray-200",onClick:()=>r(!0),children:[e("span",{className:"mr-0.5",children:"Update Status"}),e("img",{alt:"Check",class:"h-4 w-4",src:Z})]}),y&&e("div",{className:"absolute right-0 top-full mt-1 flex min-w-[160px] flex-col divide-y rounded-md border border-gray-200 bg-white shadow-md [&>button:first-child]:rounded-t-md [&>button:last-child]:rounded-b-md",ref:h,children:[C&&e("button",{class:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>i("done"),children:[e("span",{children:[e("span",{class:`mr-2 inline-block h-2 w-2 rounded-full ${I.done}`}),"Done"]}),e("span",{class:"text-xs text-gray-500",children:"D"})]}),g&&e("button",{class:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>i("learning"),children:[e("span",{children:[e("span",{class:`mr-2 inline-block h-2 w-2 rounded-full ${I.learning}`}),"In Progress"]}),e("span",{class:"text-xs text-gray-500",children:"L"})]}),P&&e("button",{class:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>i("pending"),children:[e("span",{children:[e("span",{class:`mr-2 inline-block h-2 w-2 rounded-full ${I.pending}`}),"Reset"]}),e("span",{class:"text-xs text-gray-500",children:"R"})]}),w&&e("button",{class:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>i("skipped"),children:[e("span",{children:[e("span",{class:`mr-2 inline-block h-2 w-2 rounded-full ${I.skipped}`}),"Skip"]}),e("span",{class:"text-xs text-gray-500",children:"S"})]})]})]})}function te(d){const{isLast:n,totalCount:c,onAdd:s,onRemove:o,onChange:u,id:b,title:a,link:t}=d,p=E(null),[y,r]=l(""),[h,m]=l(a),[i,w]=l(t);L(()=>{p?.current&&p.current.focus()},[]),L(()=>{u({id:b,title:h,link:i})},[h,i]);const C=n&&c<5;return e("div",{className:"relative mb-3 rounded-md border p-3",children:[e("p",{className:`mb-1 text-xs uppercase ${y==="title"?"text-black":"text-gray-400"}`,children:"Resource Title"}),e("input",{ref:p,type:"text",required:!0,className:"block w-full rounded-md border p-2 text-sm focus:border-gray-400 focus:outline-none",placeholder:"e.g. Introduction to RESTful APIs",onFocus:()=>r("title"),onBlur:()=>r(""),onChange:g=>m(g.target.value)}),e("p",{className:`mb-1 mt-3 text-xs uppercase ${y==="link"?"text-black":"text-gray-400"}`,children:"Resource Link"}),e("input",{type:"url",required:!0,className:"block w-full rounded-md border p-2 text-sm focus:border-gray-400 focus:outline-none",placeholder:"e.g. https://roadmap.sh/guides/some-url",onFocus:()=>r("link"),onBlur:()=>r(""),onChange:g=>w(g.target.value)}),e("div",{className:"mb-0 mt-3 flex gap-3",children:[c!==1&&e("button",{onClick:g=>{g.preventDefault(),o()},className:"rounded-md text-sm font-semibold text-red-500 underline underline-offset-2 hover:text-red-800",children:"- Remove Link"}),C&&e("button",{onClick:g=>{g.preventDefault(),s()},className:"rounded-md text-sm font-semibold text-gray-600 underline underline-offset-2 hover:text-black",children:"+ Add another Link"})]})]})}function ne(d){const{onClose:n,resourceType:c,resourceId:s,topicId:o}=d,u=$(),[b,a]=l(!1),[t,p]=l([{id:new Date().getTime(),title:"",link:""}]);async function y(r){r.preventDefault(),a(!0);const{response:h,error:m}=await O("https://api.roadmap.sh/v1-contribute-link",{resourceType:c,resourceId:s,topicId:o,links:t});if(a(!1),!h||m){u.error(m?.message||"Something went wrong. Please try again.");return}n("Thanks for your contribution! We will review it shortly.")}return e("div",{children:[e("div",{className:"mb-2 mt-2 rounded-md border bg-gray-100 p-3",children:[e("h1",{className:"mb-2 text-2xl font-bold",children:"Guidelines"}),e("ul",{class:"flex flex-col gap-1 text-sm text-gray-700",children:[e("li",{children:"Content should only be in English."}),e("li",{children:"Do not add things you have not evaluated personally."}),e("li",{children:"It should strictly be relevant to the topic."}),e("li",{children:"It should not be paid or behind a signup."}),e("li",{children:"Quality over quantity. Smaller set of quality links is preferred."})]})]}),e("form",{onSubmit:y,children:[t.map((r,h)=>e(te,{id:r.id,title:r.title,link:r.link,isLast:h===t.length-1,totalCount:t.length,onChange:m=>{p(t.map(i=>i.id===r.id?m:i))},onRemove:()=>{p(t.filter(m=>m.id!==r.id))},onAdd:()=>{p([...t,{id:new Date().getTime(),title:"",link:""}])}},r.id)),e("div",{className:"flex gap-2",children:[e("button",{disabled:b,type:"submit",className:"block w-full rounded-md bg-gray-800 p-2 text-sm text-white hover:bg-black disabled:cursor-not-allowed disabled:bg-gray-400",children:b?"Please wait ...":"Submit"}),e("button",{className:"block w-full rounded-md border border-red-500 p-2 text-sm text-red-600 hover:bg-red-600 hover:text-white",onClick:r=>{r.preventDefault(),n()},children:"Cancel"})]})]})]})}function ye(){const[d,n]=l(""),[c,s]=l(!1),[o,u]=l(!1),[b,a]=l(!1),[t,p]=l(""),[y,r]=l(""),h=$(),m=M(()=>!U(),[]),i=E(null),[w,C]=l(""),[g,P]=l(""),[k,S]=l("roadmap");return H(i,()=>{s(!1),a(!1)}),N("Escape",()=>{s(!1),a(!1)}),Y(({topicId:f,resourceType:T,resourceId:v})=>{if(m){D();return}A.set("Updating"),W({topicId:f,resourceId:v,resourceType:T}).then(x=>F({topicId:f,resourceId:v,resourceType:T},x?"pending":"done")).then(({done:x=[]})=>{j(f,x.includes(f)?"done":"pending"),B()}).catch(x=>{h.error(x.message),console.error(x)}).finally(()=>{A.set("")})}),X(({topicId:f,resourceType:T,resourceId:v})=>{u(!0),s(!0),J.set(!0),n(""),C(f),S(T),P(v);const x=f.replaceAll(":","/"),G=T==="roadmap"?`/${v}/${x}`:`/best-practices/${v}/${x}`;K(G,{},{headers:{Accept:"text/html"}}).then(({response:R})=>{if(!R){p("Topic not found.");return}const _=new DOMParser().parseFromString(R,"text/html")?.getElementById("main-content")?.outerHTML||"";u(!1),r(_)}).catch(R=>{p("Something went wrong. Please try again later."),u(!1)})}),c?e("div",{children:[e("div",{ref:i,className:"fixed right-0 top-0 z-40 h-screen w-full overflow-y-auto bg-white p-4 sm:max-w-[600px] sm:p-6",children:[o&&e("div",{className:"flex w-full justify-center",children:e("img",{src:q,alt:"Loading",className:"h-6 w-6 animate-spin fill-blue-600 text-gray-200 sm:h-12 sm:w-12"})}),!o&&b&&e(ne,{resourceType:k,resourceId:g,topicId:w,onClose:f=>{f&&n(f),a(!1)}}),!b&&!o&&!t&&e(V,{children:[e("div",{className:"mb-2",children:[e(ee,{topicId:w,resourceId:g,resourceType:k,onClose:()=>{s(!1),a(!1)}}),e("button",{type:"button",id:"close-topic",className:"absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",onClick:()=>{s(!1),a(!1)},children:e("img",{alt:"Close",class:"h-5 w-5",src:z})})]}),e("div",{id:"topic-content",className:"prose prose-quoteless prose-h1:mb-2.5 prose-h1:mt-7 prose-h2:mb-3 prose-h2:mt-0 prose-h3:mb-[5px] prose-h3:mt-[10px] prose-p:mb-2 prose-p:mt-0 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-li:m-0 prose-li:mb-0.5",dangerouslySetInnerHTML:{__html:y}}),e("div",{className:"mt-8 flex-1 border-t",children:[e("p",{class:"mb-2 mt-2 text-sm leading-relaxed text-gray-400",children:["Help others learn by submitting links to learn more about this topic"," "]}),e("button",{onClick:()=>{if(m){s(!1),D();return}a(!0)},disabled:!!d,className:"block w-full rounded-md bg-gray-800 p-2 text-sm text-white transition-colors hover:bg-black hover:text-white disabled:bg-green-200 disabled:text-black",children:d||"Submit a Link"})]})]})]}),e("div",{class:"fixed inset-0 z-30 bg-gray-900 bg-opacity-50 dark:bg-opacity-80"})]}):null}export{ye as TopicDetail};
