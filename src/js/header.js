const homePage = document.querySelector('#Home');
const favoritesPage = document.querySelector('#Favorites');

homePage.addEventListener("click", () => {
   
    homePage.classList.add("heder-nav-link-active");
    favoritesPage.classList.remove("heder-nav-link-active");
});

favoritesPage.addEventListener("click", () => {
    favoritesPage.classList.add("heder-nav-link-active");
    homePage.classList.remove("heder-nav-link-active");
});