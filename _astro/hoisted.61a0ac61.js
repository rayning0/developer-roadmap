import{a as c,T as u}from"./jwt.f0e0aa9c.js";import"./navigation.fab09d81.js";window.fireEvent=e=>{const{action:t,category:o,label:n,value:s}=e;if(!window.gtag){console.warn("Missing GTAG - Analytics disabled");return}window.gtag("event",t,{event_category:o,event_label:n,value:s})};function i(e){e.classList.add("opacity-0","transition-opacity","duration-300"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0")})}function d(e="hide"){document.querySelectorAll("[data-auth-required]").forEach(t=>{e==="hide"?t.classList.add("hidden"):i(t)})}function a(e="hide"){document.querySelectorAll("[data-guest-required]").forEach(t=>{e==="hide"?t.classList.add("hidden"):i(t)})}function p(){const e=["/account/update-profile","/account/notification","/account/update-password","/account/settings","/account/road-card","/account/friends","/account","/team","/team/progress","/team/roadmaps","/team/new","/team/members","/team/settings"];d("hide"),a("show"),e.includes(window.location.pathname)&&(window.location.href="/")}function r(){const e=["/login","/signup","/verify-account","/verification-pending","/reset-password","/forgot-password"];a("hide"),d("show"),e.includes(window.location.pathname)&&(window.location.href="/")}function l(){c.get(u)?r():p()}window.setTimeout(()=>{l()},0);class h{constructor(){this.triggerPopup=this.triggerPopup.bind(this),this.onDOMLoaded=this.onDOMLoaded.bind(this),this.handleClosePopup=this.handleClosePopup.bind(this),this.handleKeydown=this.handleKeydown.bind(this)}triggerPopup(t){const o=t?.target?.closest("[data-popup]")?.dataset?.popup||"unknown-popup",n=document.querySelector(`#${o}`);if(!n)return;t.preventDefault(),n.classList.remove("hidden"),n.classList.add("flex");const s=n.querySelector("[autofocus]");s&&s.focus()}handleClosePopup(t){const o=t.target,n=o.closest(".popup-body"),s=o.closest(".popup");!o.closest(".popup-close")&&n||s&&(s.classList.add("hidden"),s.classList.remove("flex"))}handleKeydown(t){if(t.key!=="Escape")return;const o=document.querySelector(".popup:not(.hidden)");o&&(o.classList.add("hidden"),o.classList.remove("flex"))}onDOMLoaded(){document.addEventListener("click",this.triggerPopup),document.addEventListener("click",this.handleClosePopup),document.addEventListener("keydown",this.handleKeydown)}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded)}}const f=new h;f.init();
