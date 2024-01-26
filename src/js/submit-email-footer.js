const form = document.querySelector('.subs-form');
const localStorageKey = 'user-email';
let userEmail;
let allUsersEmails = [];

form.elements.email.value = localStorage.getItem(localStorageKey) ?? '';

form.addEventListener('input', saveToLocalStogae);

function saveToLocalStogae(evt) {
  localStorage.setItem(localStorageKey, evt.target.value);
  userEmail = localStorage.getItem(localStorageKey);
}

form.addEventListener('submit', evt => {
  evt.preventDefault();
  allUsersEmails.push(userEmail);
  console.log(allUsersEmails);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
