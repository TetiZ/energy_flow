const t=document.querySelector("#Home"),i=document.querySelector("#Favorites");document.addEventListener("DOMContentLoaded",function(){t.classList.add("heder-nav-link-active")});function n(e){t.classList.remove("heder-nav-link-active"),i.classList.remove("heder-nav-link-active"),e==="Home"?t.classList.add("heder-nav-link-active"):e==="Favorites"&&i.classList.add("heder-nav-link-active")}n(a());document.addEventListener("click",function(e){if(e.target.tagName==="A"){const s=a();n(s)}});function a(){const e=window.location.pathname;return e.includes("/index.html")?"Home":e.includes("/favorites.html")?"Favorites":"Home"}t.addEventListener("click",()=>{t.classList.add("heder-nav-link-active"),i.classList.remove("heder-nav-link-active")});i.addEventListener("click",()=>{i.classList.add("heder-nav-link-active"),t.classList.remove("heder-nav-link-active")});
//# sourceMappingURL=header-9690b9a4.js.map
