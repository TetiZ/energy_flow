const currentPath = window.location.pathname;

// 1 варіант

const homePage = document.querySelector('#Home');
const favoritesPage = document.querySelector('#Favorites');
const homePageMenu = document.querySelector('#Home-menu');
const favoritesPageMenu = document.querySelector('#Favorites-menu');

document.addEventListener('DOMContentLoaded', pageSwitch());

function pageSwitch() {
  homePage.classList.remove('heder-nav-link-active');
  favoritesPage.classList.remove('heder-nav-link-active');
  homePageMenu.classList.remove('active-menu-nav-list-item');
  favoritesPageMenu.classList.remove('active-menu-nav-list-item');

  if (!currentPath.includes('favorites.html')) {
    homePage.classList.add('heder-nav-link-active');
    homePageMenu.classList.add('active-menu-nav-list-item');
  } else {
    favoritesPage.classList.add('heder-nav-link-active');
    favoritesPageMenu.classList.add('active-menu-nav-list-item');
  }
}

// 2 варіант (цікаво чому не працює)

// const menuItems = document.querySelectorAll('.heder-nav-link');
// const mobMenuItems = document.querySelectorAll('.mobile-menu-nav-list-item');

// document.addEventListener('DOMContentLoaded', pageSwitch());

// function pageSwitch() {
//   menuItems.forEach(item => {
//     item.classList.remove('heder-nav-link-active');
//   });

//   mobMenuItems.forEach(item => {
//     item.classList.remove('active-menu-nav-list-item');
//   });

//   menuItems.forEach(item => {
//     if (item.getAttribute('href') === currentPath) {
//       item.classList.add('heder-nav-link-active');
//     }
//   });

//   mobMenuItems.forEach(item => {
//     if (item.getAttribute('href') === currentPath) {
//       item.classList.add('active-menu-nav-list-item');
//     }
//   });
// }
