

document.addEventListener('DOMContentLoaded', function () {
    const subscriptionForm = document.querySelector('#subscriptionForm');

    subscriptionForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailValue = subscriptionForm.querySelector('[name="email"]').value.trim();

        const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailPattern.test(emailValue)) {
            alert('Invalid email address');
            return;
        }

        const storedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
        
        storedEmails.push(emailValue);

        localStorage.setItem('subscribedEmails', JSON.stringify(storedEmails));

        subscriptionForm.querySelector('[name="email"]').value = '';
    });
});