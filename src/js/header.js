const homePage = document.querySelector('#Home');
const favoritesPage = document.querySelector('#Favorites');

function setActivePage(pageId) {
  homePage.classList.remove('heder-nav-link-active');
  favoritesPage.classList.remove('heder-nav-link-active');

  if (pageId === 'Home') {
    homePage.classList.add('heder-nav-link-active');
  } else if (pageId === 'Favorites') {
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
