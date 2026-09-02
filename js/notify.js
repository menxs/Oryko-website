document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var FORM_ENDPOINT = 'https://formspree.io/f/mrpgkprz';

  var form = document.querySelector('#hero-text form');
  if (!form) return;

  var input = form.querySelector('input[type=email]');
  var card = form.querySelector('.card');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Built-in HTML5 email validation (type=email + required)
    if (!form.checkValidity()) {
      input.reportValidity();
      return;
    }

    var data = { email: input.value.trim() };

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(function (res) {
        if (res.ok) {
          card.innerHTML = '<p>Thanks! We will email you when the site is ready.</p>';
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(function () {
        card.innerHTML = '<p>Something went wrong. Please try again.</p>';
      });
  });
});
