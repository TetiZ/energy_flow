// import axios from 'axios';
// const { default: axios } = require('axios');
// const popAddFavButton = document.querySelector('.pop-add-fav');
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

////////////////Pop-Up-Rating////////////////////
////Pop-up-Stars////
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
        ratingValue.innerHTML = index + 1;
        setRatingActiveWidth();
      });
    }
  }
}

/////Pop-up-Stars/////
// let rating;
// let email;
// let msg;
// let id;

// const ratingPopUp = document.querySelector('.pop-up-rating');

// ratingPopUp.email.addEventListener('input', evt => {
//   email = evt.currentTarget.value;
// });
// ratingPopUp.message.addEventListener('input', evt => {
//   msg = evt.currentTarget.value;
// });
// ratingPopUp.addEventListener('submit', addRating);

// async function addRating(evt) {
//   evt.preventDefault();
//   try {
//     /////Отримуємо значення rating-checked
//     id = ratingPopUp.dataset.id;
//     const data = await patchRating(id, rating, email, msg);
//     console.log(data);
//     ratingPopUpWindow.classList.remove('is-open');
//   } catch (error) {
//     console.log(error);
//   }
// }

// function patchRating(id, rating, email, msg) {
//   return axios.patch(
//     `https://energyflow.b.goit.study/api/exercises/${id}/rating`,
//     {
//       rate: rating,
//       email: email,
//       review: msg,
//     }
//   );
// }
