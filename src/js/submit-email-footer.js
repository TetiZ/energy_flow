import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.subs-form');
const localStorageKey = 'user-email';

const savedEmail = localStorage.getItem(localStorageKey);

if (savedEmail) {
  form.elements.email.value = savedEmail;
} else {
  form.elements.email.value = '';
}

form.addEventListener('input', saveToLocalStorage);

function saveToLocalStorage(evt) {
  localStorage.setItem(localStorageKey, evt.target.value);
}

async function postEmail(userEmail) {
  try {
    const response = await fetch(
      'https://energyflow.b.goit.study/api/subscription',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail }),
      }
    );
    if (!response.ok) {
      console.error('Код помилки:', response.status);
      throw new Error('Мережевий запит не був успішним');
    }
    const data = await response.json();
    console.log('Дані успішно відправлені', data);

    iziToast.success({
      title: 'We are excited to have you on board!',
      message:
        'Thank you for subscribing to new exercises on Energy Flow. You have just taken a significant step towards improving your fitness and well-being.',
      position: 'center',
    });
  } catch (error) {
    console.error('Помилка при відправленні даних', error);
  }
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const userEmail = localStorage.getItem(localStorageKey);
  if (userEmail) {
    try {
      await postEmail(userEmail);
      localStorage.removeItem(localStorageKey);
      form.reset();
    } catch (error) {
      console.log('Помилка при відправленні електронної пошти.');
    }
  } else {
    console.log('Електронна пошта не введена.');
  }
});

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
