const o=window.location.pathname;console.log(o);const e=document.querySelector("#Home"),t=document.querySelector("#Favorites"),a=document.querySelector("#Home-menu"),n=document.querySelector("#Favorites-menu"),s=document.querySelector(".btn-scroll-top");document.addEventListener("DOMContentLoaded",i());function i(){e.classList.remove("heder-nav-link-active"),t.classList.remove("heder-nav-link-active"),a.classList.remove("active-menu-nav-list-item"),n.classList.remove("active-menu-nav-list-item"),o.includes("favorites.html")?(t.classList.add("heder-nav-link-active"),n.classList.add("active-menu-nav-list-item"),s.href="./favorites.html#header"):(e.classList.add("heder-nav-link-active"),a.classList.add("active-menu-nav-list-item"),s.href="./index.html#header")}
//# sourceMappingURL=page-after-switch-e746302e.js.map