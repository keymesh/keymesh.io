;(function() {
  'use strict';

  var lastSection = document.getElementById('acknowledgement');
  var content = (
    '<section id="alert">' +
    '  <p class="alert-text">' +
    '    KeyMesh currently works in desktop Chrome with MetaMask installed.' +
    '    We can notify you when the mobile version is ready.' +
    '  </p>' +
    '  <form action="#" id="email-form">' +
    '    <input placeholder="you@example.com" required id="email-input" type="email">' +
    '    <button id="email-submit" type="submit">' +
    '      Submit' +
    '    </button>' +
    '  </form>' +
    '</section>'
  );
  var originSectionContent = lastSection.insertAdjacentHTML('beforebegin', content);

  var form = document.getElementById('email-form');
  var input = document.getElementById('email-input');
  var button = document.getElementById('email-submit');
  var alert = document.getElementById('alert');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!fetch) {
      return;
    }

    fetch('https://7kkvzvs5p7.execute-api.us-west-1.amazonaws.com/Prod/subscribe', {
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: input.value,
      }),
      method: 'PUT',
      mode: 'cors',
    })

    alert.innerHTML = (
      '<p class="thanks-text">' +
      '  Thank you!' +
      '</p>'
    );

    setTimeout(function() {
      alert.remove();
    }, 3000);
  })
})();
