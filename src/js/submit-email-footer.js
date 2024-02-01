import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.subs-form');
const localStorageKey = 'user-email';

if (form) {
  const savedEmail = localStorage.getItem(localStorageKey);

  function saveToLocalStorage(evt) {
    localStorage.setItem(localStorageKey, evt.target.value);
  }
  form.addEventListener('input', saveToLocalStorage);

  form.elements.email.value = savedEmail ? savedEmail : '';

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
    const userEmail = savedEmail;
    if (userEmail) {
      try {
        await postEmail(userEmail);
        localStorage.removeItem(localStorageKey);
        form.reset();
      } catch (error) {
        console.error('Помилка при відправленні електронної пошти.', error);
      }
    } else {
      console.log('Електронна пошта не введена.');
    }
  });
} else {
  console.error('Форма не знайдена.');
}
