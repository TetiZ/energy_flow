(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const f="modulepreload",m=function(a){return"/energy_flow/"+a},d={},o=function(n,s,c){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=m(e),e in d)return;d[e]=!0;const r=e.endsWith(".css"),_=r?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const u=t[l];if(u.href===e&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${_}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":f,r||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),r)return new Promise((l,u)=>{i.addEventListener("load",l),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})};o(()=>import("./api-8d58433a.js"),[]);o(()=>import("./mobile-menu-de32ecd9.js"),[]);o(()=>import("./exersises-d66700f4.js"),["assets/exersises-d66700f4.js","assets/vendor-db25513e.js","assets/vendor-e5212ee8.css","assets/api-8d58433a.js"]);o(()=>import("./submit-email-footer-2b841a35.js"),["assets/submit-email-footer-2b841a35.js","assets/vendor-db25513e.js","assets/vendor-e5212ee8.css"]);o(()=>import("./quote-64dc1c95.js"),[]);o(()=>import("./pop-ups-af221591.js"),["assets/pop-ups-af221591.js","assets/vendor-db25513e.js","assets/vendor-e5212ee8.css"]);o(()=>import("./header-4ed993c7.js"),[]);o(()=>import("./page-after-switch-e746302e.js"),[]);
//# sourceMappingURL=main-e60b4bfb.js.map