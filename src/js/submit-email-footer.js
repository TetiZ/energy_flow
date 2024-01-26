import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.subs-form');
const localStorageKey = 'user-email';

form.elements.email.value = localStorage.getItem(localStorageKey) ?? '';

form.addEventListener('input', saveToLocalStorage);

function saveToLocalStorage(evt) {
  localStorage.setItem(localStorageKey, evt.target.value);
}

function postEmail(userEmail) {
  fetch('https://energyflow.b.goit.study/api/subscription', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ emails: [userEmail] }),
  })
    .then(response => {
      if (!response.ok) {
        console.error('Код помилки:', response.status);
        throw new Error('Мережевий запит не був успішним');
      }
      return response.json();
    })
    .then(data => {
      console.log('Дані успішно відправлені', data);
    })
    .catch(error => {
      console.error('Помилка при відправленні даних', error);
    });
}

form.addEventListener('submit', async e => {
  e.preventDefault();

  const userEmail = localStorage.getItem(localStorageKey);

  try {
    await postEmail(userEmail);
    localStorage.removeItem(localStorageKey);
    form.reset();
  } catch (error) {
    console.log('Не знайдено імейл для відправлення.');
  }
});
