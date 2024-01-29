import axios from 'axios';

const popAddFavButton = document.querySelector('.pop-add-fav');
const exPopClose = document.querySelector('.pop-ex-close-btn');
const exPopUpWindow = document.querySelector('.pop-backdrop');

const ratingPopUpWindow = document.querySelector('.backdrop');
const ratingPopUpOpen = document.querySelector('.pop-rating-btn');
const ratingPopUpClose = document.querySelector('.pop-up-close-btn');

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

const ratingStarsWrapper = document.querySelectorAll('.rating-stars-wrapper');
if (ratingStarsWrapper.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive, ratingValue;
  for (let index = 0; index < ratingStarsWrapper.length; index++) {
    const rating = ratingStarsWrapper[index];
    initRating(rating);
  }

  function initRating(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();

    if (rating.classList.contains('rating-set')) {
      setRating(rating);
    }
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating-stars-line-active');
    ratingValue = rating.querySelector('.pop-up-rating-value');
  }

  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating-stars-item');
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];
      ratingItem.addEventListener('mouseenter', function (evt) {
        initRatingVars(rating);
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener('mouseleave', function (evt) {
        setRatingActiveWidth();
      });
      ratingItem.addEventListener('click', function (evt) {
        initRatingVars(rating);
        ratingValue.innerHTML = (index + 1).toFixed(1);
        setRatingActiveWidth();
      });
    }
  }
}

const addToFavoriteKey = 'exercise-card';
const exerciseCardValue = '';

popAddFavButton.addEventListener('click', sendToFav);

function sendToFav() {
  localStorage.setItem(addToFavoriteKey, exerciseCardValue);
}
const ratingForm = document.querySelector('.pop-up-rating');
ratingForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const inputEmail = document.querySelector('.pop-up-input-email');
  const userMsg = document.querySelector('.pop-up-message');
  const rateValue = document.querySelector('.pop-up-rating-value').innerHTML;

  const formData = {
    email: inputEmail.value,
    message: userMsg.value,
    rating: parseFloat(rateValue),
  };

  axios
    .post(
      'https://energyflow.b.goit.study/api/exercises/64f389465ae26083f39b17a5/rating',
      formData
    )
    .then(response => {
      console.log(response.data);
      ratingPopUpWindow.classList.remove('is-open');
    })
    .catch(error => {
      console.log(error);
    });
});

