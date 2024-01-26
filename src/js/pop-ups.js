// const popAddFavButton = document.querySelector('.pop-add-fav');
const exPopClose = document.querySelector('.pop-ex-close-btn');
const exPopUpWindow = document.querySelector('.pop-backdrop');

const ratingPopUpOpen = document.querySelector('.pop-rating-btn');
const ratingPopUpWindow = document.querySelector('.backdrop');

exPopClose.addEventListener('click', function () {
  exPopUpWindow.classList.remove('is-open');
});

ratingPopUpOpen.addEventListener('click', function () {
  ratingPopUpWindow.classList.toggle('is-open');
});