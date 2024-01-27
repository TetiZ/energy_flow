const mobileMenuBtn = document.querySelector('.js-open-menu');
const mobileMenuCloseBtn = document.querySelector('.js-close-menu');
const mobileMenu = document.querySelector('.js-menu-container');

mobileMenuBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('is-open');
  document.body.style.overflow = 'hidden';
});

mobileMenuCloseBtn.addEventListener('click', function () {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = '';
});
