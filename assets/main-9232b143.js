(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const _="modulepreload",m=function(a){return"/energy_flow/"+a},f={},i=function(n,s,c){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=m(e),e in f)return;f[e]=!0;const r=e.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const u=t[l];if(u.href===e&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":_,r||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),r)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})};i(()=>import("./api-edf1fa41.js"),[]);i(()=>import("./mobile-menu-de32ecd9.js"),[]);i(()=>import("./exersises-9b435dec.js"),["assets/exersises-9b435dec.js","assets/vendor-ad859c2f.js","assets/vendor-e5212ee8.css","assets/api-edf1fa41.js"]);i(()=>import("./submit-email-footer-14dbcb9c.js"),[]);i(()=>import("./quote-c304541f.js"),[]);i(()=>import("./page-after-switch-c9484ae8.js"),[]);
//# sourceMappingURL=main-9232b143.js.map