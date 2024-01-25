
const form = document.querySelector('.subs-form');

form.addEventListener('input', saveToStorage);
form.addEventListener('submit', submitHandler);

function saveToStorage(e) {
  e.preventDefault();

  const emailInput = form.querySelector('.subs-input');
  const email = emailInput.value.trim();

  if (!isValidEmail(email)) {
    return;
  }

  const providedData = JSON.stringify({ email: email });

  const storageKey = 'subscription-form-state';
  localStorage.setItem(storageKey, providedData);
}

function isValidEmail(email) {
  const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailPattern.test(email);
}

window.addEventListener('load', fillFormFields);

function fillFormFields(e) {
  e.preventDefault();

  const inStorage = localStorage.getItem('subscription-form-state');

  if (inStorage) {
    const storedData = JSON.parse(inStorage);
    form.querySelector('.subs-input').value = storedData.email;
  } else {
    form.querySelector('.subs-input').value = '';
  }
}

function submitHandler(e) {
  e.preventDefault();

  const inStorage = localStorage.getItem('subscription-form-state');
  const emailInput = form.querySelector('.subs-input');

  if (inStorage) {
    const storedData = JSON.parse(inStorage);
    console.log(storedData);
  } else {
    console.log({ email: emailInput.value.trim() });
  }
}
