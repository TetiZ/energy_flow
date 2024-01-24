
document.addEventListener('DOMContentLoaded', function () {
    const subscriptionForm = document.getElementById('subscriptionForm');

    subscriptionForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailValue = subscriptionForm.elements['email'].value.trim();

        const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailPattern.test(emailValue)) {
            alert('Invalid email address');
            return;
        }
        subscriptionForm.elements['email'].value = '';
    });
});