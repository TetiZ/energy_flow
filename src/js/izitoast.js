import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Footer btn
const form = document.querySelector('.subs-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  iziToast.info({
    title: 'Information',
    message: 'Form submitted',
    position: 'topRight',
    icon: 'fas fa-info-circle', 
    close: false, 
  });

  form.reset();
});

// Favorites/rating btn
const popBtnsContainer = document.querySelector('.pop-btns-container');
const addFavBtn = popBtnsContainer.querySelector('.pop-add-fav');
const ratingBtn = popBtnsContainer.querySelector('.pop-rating-btn');

addFavBtn.addEventListener('click', function () {
  iziToast.success({
    title: 'Success',
    message: 'Added to favorites',
    position: 'topRight',
    icon: 'fas fa-thumbs-up', 
  });
});

ratingBtn.addEventListener('click', function () {
  iziToast.info({
    title: 'Information',
    message: 'Your rating has been saved',
    position: 'topRight',
    icon: 'fas fa-star', 
  });
});


