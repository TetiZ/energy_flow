/* empty css                     */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const m="modulepreload",h=function(u){return"/energy_flow/"+u},f={},a=function(n,i,l){if(!i||i.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(i.map(e=>{if(e=h(e),e in f)return;f[e]=!0;const r=e.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!l)for(let s=t.length-1;s>=0;s--){const c=t[s];if(c.href===e&&(!r||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":m,r||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),r)return new Promise((s,c)=>{o.addEventListener("load",s),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})};a(()=>import("./assets/api-355b4ca2.js"),[]);a(()=>import("./assets/mobile-menu-90c3666a.js"),[]);a(()=>import("./assets/formFooter-d31fffd1.js"),[]);
//# sourceMappingURL=commonHelpers2.js.map
