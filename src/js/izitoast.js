ratingBtn.addEventListener('click', function () {
  fetch('your-api-endpoint', {
    method: 'POST',
    body: new FormData(form),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to send request. Please try again.');
      }
      return response.json();
    })
    .then(data => {
      iziToast.info({
        title: 'Information',
        message:
          'Thank you for your comment and rating! Your words are motivation for us. Together we will reach new heights.',
        position: 'topRight',
        icon: 'fas fa-star',
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'topRight',
        icon: 'fas fa-times',
      });
    });
});
