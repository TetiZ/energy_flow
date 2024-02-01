const popAddFavButton = document.querySelector('.pop-add-fav');
const exPopClose = document.querySelector('.pop-ex-close-btn');
const exPopUpWindow = document.querySelector('.pop-backdrop');

const ratingPopUpWindow = document.querySelector('.backdrop');
const ratingPopUpOpen = document.querySelector('.pop-rating-btn');
const ratingPopUpClose = document.querySelector('.pop-up-close-btn');

const popExerciseInfo = document.querySelector('.pop-ex-info');

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