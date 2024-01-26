import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.subs-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  iziToast.info({
    title: 'Информация',
    message: 'Форма отправлена.',
    position: 'topRight',
  });

  form.reset();
});

function clearForm() {
  const emailInput = form.querySelector('.subs-input');
  emailInput.value = '';
}