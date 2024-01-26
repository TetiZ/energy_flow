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


const infoStyles = `
  .iziToast.iziToast-info {
    background-color: #2196F3; /* колір фону */
    color: #fff; /* колір тексту */
  }
`;

const successStyles = `
  .iziToast.iziToast-success {
    background-color: #4CAF50;
    color: #fff;
  }
`;

const titleStyles = `
  .iziToast-title {
    font-weight: bold;
  }
`;

const buttonStyles = `
  .iziToast-buttons .iziToast-icon {
    border: 2px solid #fff;
  }

  .iziToast-buttons .iziToast-icon:hover {
    background-color: #fff;
    color: #2196F3;
  }
`;

const closeStyles = `
  .iziToast-buttons .iziToast-close {
    color: #fff;
    border: 2px solid #fff;
  }

  .iziToast-buttons .iziToast-close:hover {
    background-color: #fff;
    color: #4CAF50;
  }
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = infoStyles + successStyles + titleStyles + buttonStyles + closeStyles;
document.head.appendChild(styleSheet);