import{h,p as I}from"./hooks.module.6eb5c72e.js";import{a as G,T as x}from"./jwt.f0e0aa9c.js";import{S as E}from"./spinner.164b1eeb.js";import{a as w}from"./http.82ebf0f1.js";import{o as n}from"./jsxRuntime.module.c6f75409.js";import{k}from"./preact.module.346aa314.js";const v="/_astro/google.b1c95028.svg",s="googleRedirectAt",c="googleLastPage";function $(P){const[a,o]=h(!1),[g,t]=h(""),f=a?E:v;return I(()=>{const e=new URLSearchParams(window.location.search),r=e.get("code"),i=e.get("state"),u=e.get("provider");!r||!i||u!=="google"||(o(!0),w(`https://api.roadmap.sh/v1-google-callback${window.location.search}`).then(({response:l,error:S})=>{if(!l?.token){t(S?.message||"Something went wrong."),o(!1);return}let m="/";const d=localStorage.getItem(s),p=localStorage.getItem(c);if(d&&p){const b=parseInt(d,10);Date.now()-b<30*1e3&&(m=p)}localStorage.removeItem(s),localStorage.removeItem(c),G.set(x,l.token,{path:"/",expires:30,domain:".roadmap.sh"}),window.location.href=m}).catch(l=>{t("Something went wrong. Please try again later."),o(!1)}))},[]),n(k,{children:[n("button",{class:"inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60",disabled:a,onClick:()=>{o(!0),w("https://api.roadmap.sh/v1-google-login").then(({response:e,error:r})=>{if(!e?.loginUrl){t(r?.message||"Something went wrong."),o(!1);return}if(!["/login","/signup"].includes(window.location.pathname)){const i=["/respond-invite","/befriend"].includes(window.location.pathname)?window.location.pathname+window.location.search:window.location.pathname;localStorage.setItem(s,Date.now().toString()),localStorage.setItem(c,i)}window.location.href=e.loginUrl}).catch(e=>{t("Something went wrong. Please try again later."),o(!1)})},children:[n("img",{src:f,alt:"Google",class:`h-[18px] w-[18px] ${a?"animate-spin":""}`}),"Continue with Google"]}),g&&n("p",{className:"mb-2 mt-1 text-sm font-medium text-red-600",children:g})]})}export{$ as GoogleButton};
