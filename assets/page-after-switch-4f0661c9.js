const s=window.location.pathname;console.log(s);const e=document.querySelector("#Home"),t=document.querySelector("#Favorites"),a=document.querySelector("#Home-menu"),n=document.querySelector("#Favorites-menu");document.addEventListener("DOMContentLoaded",i());function i(){e.classList.remove("heder-nav-link-active"),t.classList.remove("heder-nav-link-active"),a.classList.remove("active-menu-nav-list-item"),n.classList.remove("active-menu-nav-list-item"),s.includes("favorites.html")?(t.classList.add("heder-nav-link-active"),n.classList.add("active-menu-nav-list-item")):(e.classList.add("heder-nav-link-active"),a.classList.add("active-menu-nav-list-item"))}
//# sourceMappingURL=page-after-switch-4f0661c9.js.map