import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Footer btn
const form = document.querySelector('.subs-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  iziToast.info({
    title: 'Information',
    message: 'We are excited to have you on board! Thank you for subscribing to new exercises on Energy Flow. You have just taken a significant step towards improving your fitness and well-being.',
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
    message: 'Excellent choice! The exercise has been successfully added to your favorites. Get ready for endless inspiration and great results!',
    position: 'topRight',
    icon: 'fas fa-thumbs-up', 
  });
});

ratingBtn.addEventListener('click', function () {

  fetch('your-api-endpoint', {
    method: 'POST',
    body: new FormData(form),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to send request. Please try again.'); 
    }
    return response.json();
  })
  .then(data => {
    iziToast.info({
      title: 'Information',
      message: 'Thank you for your comment and rating! Your words are motivation for us. Together we will reach new heights.',
      position: 'topRight',
      icon: 'fas fa-star', 
    });
  })
  .catch(error => {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
      icon: 'fas fa-times', 
    });
  });
});




