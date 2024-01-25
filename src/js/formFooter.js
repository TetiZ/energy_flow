const form = document.querySelector('.subs-form');
const allUserDataKey = 'all-users-data';

form.addEventListener('input', saveToStorage);

function saveToStorage(e) {
  e.preventDefault();

  const emailInput = form.querySelector('.subs-input');
  const email = emailInput.value.trim();

  const providedData = JSON.stringify({ email });

  const storageKey = 'user-email';
  localStorage.setItem(storageKey, providedData);
}

window.addEventListener('load', fillFormFields);

function fillFormFields(e) {
  e.preventDefault();

  const inStorage = localStorage.getItem('user-email');

  if (inStorage) {
    const storedData = JSON.parse(inStorage);
    form.querySelector('.subs-input').value = storedData.email;
  } else {
    form.querySelector('.subs-input').value = '';
  }
  localStorage.removeItem('user-email');
}

form.addEventListener('submit', submitHandler);

function submitHandler(e) {
  e.preventDefault();

  const inStorage = localStorage.getItem('user-email');
  const emailInput = form.querySelector('.subs-input');

  if (inStorage) {
    const storedData = JSON.parse(inStorage);
    console.log(storedData);
  } else {
    const currentEmail = emailInput.value.trim();
    console.log({ email: currentEmail });
  }

  form.reset();
}
