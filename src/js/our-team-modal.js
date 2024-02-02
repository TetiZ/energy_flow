// MODAL
const closeBtnFooter = document.querySelector('.footer-close-btn');
const backDropFooter = document.querySelector('.footer-modal-backdrop');

const openFooterModalBtn = document.querySelector('.footer-team-link');
openFooterModalBtn.addEventListener('click', function () {
  backDropFooter.classList.add('is-open');
});

closeBtnFooter.addEventListener('click', function () {
  backDropFooter.classList.remove('is-open');
});
