;(function() {
  'use strict';

  var introSection = document.getElementById('intro');
  var queryStr = location.search;
  var linkStr = 'https://beta.keymesh.io/register' + queryStr
  var getStartedButton = (
    '<a class="get-started" href="' + linkStr +  '">' +
    '  Sounds Good, Power Me Up!' +
    '</a>'
  );
  introSection.insertAdjacentHTML('beforeend', getStartedButton);
})();
