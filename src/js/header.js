const homePage = document.querySelector('#Home');
const favoritesPage = document.querySelector('#Favorites');

window.addEventListener('load', setHomePageActive);

function setHomePageActive() {
  homePage.classList.add('heder-nav-link-active');
}

function setActivePage(pageId) {
  window.removeEventListener('load', setHomePageActive);

  if (pageId === 'Home') {
    homePage.classList.add('heder-nav-link-active');
  } else if (pageId === 'Favorites') {
    homePage.classList.remove('heder-nav-link-active');
    favoritesPage.classList.add('heder-nav-link-active');
  }
}

setActivePage(getPageIdFromUrl());

document.addEventListener('click', function (event) {
  if (event.target.tagName === 'A') {
    const pageId = getPageIdFromUrl();
    setActivePage(pageId);
  }
});

function getPageIdFromUrl() {
  const currentPath = window.location.pathname;
  if (currentPath.includes('/index.html')) {
    return 'Home';
  } else if (currentPath.includes('/favorites.html')) {
    return 'Favorites';
  }
  return 'Home';
}

homePage.addEventListener('click', () => {
  homePage.classList.add('heder-nav-link-active');
  favoritesPage.classList.remove('heder-nav-link-active');
});

favoritesPage.addEventListener('click', () => {
  favoritesPage.classList.add('heder-nav-link-active');
  homePage.classList.remove('heder-nav-link-active');
});
