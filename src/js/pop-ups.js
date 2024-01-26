const popAddFavButton = document.querySelector('.pop-add-fav');
const exPopClose = document.querySelector('.pop-ex-close-btn');
const exPopUpWindow = document.querySelector('.pop-backdrop');

const ratingPopUpWindow = document.querySelector('.backdrop');
const ratingPopUpOpen = document.querySelector('.pop-rating-btn');
const ratingPopUpClose = document.querySelector('.pop-up-close-btn');

const popExerciseInfo = document.querySelector('.pop-ex-info')

exPopClose.addEventListener('click', function () {
  exPopUpWindow.classList.remove('is-open');
});

ratingPopUpOpen.addEventListener('click', function () {
  ratingPopUpWindow.classList.toggle('is-open');
  exPopUpWindow.classList.remove('is-open');
});

ratingPopUpClose.addEventListener('click', function () {
  ratingPopUpWindow.classList.remove('is-open');
});


const addToFavoriteKey = 'exercise-card';
const exerciseCardValue = '';

popAddFavButton.addEventListener('click', sendToFav);

function sendToFav() {
  localStorage.setItem(addToFavoriteKey, exerciseCardValue);
}