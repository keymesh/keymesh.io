;(function() {
  'use strict';

  var isMobile = simplyDetectMobileAndTablet();

  if (!isMobile) {
    return;
  }

  // remove get-started button
  var getStartedButton = document.querySelector('.get-started');
  getStartedButton.remove();

  main();

  function main() {
    // load extra css
    var cssRef = document.createElement('link');
    cssRef.rel = 'stylesheet';
    cssRef.type = 'text/css';
    // load js after css loaded
    cssRef.onload = loadExtraJS;
    cssRef.href = './extra.css';
    document.querySelector('head').appendChild(cssRef);
  }

  // load extra js
  function loadExtraJS() {
    var scriptRef = document.createElement('script');
    scriptRef.src = './extra.js';
    document.querySelector('body').appendChild(scriptRef);
  }

  function simplyDetectMobileAndTablet() {
    if (
      navigator.userAgent.match(/Mobile/i) ||
      navigator.userAgent.match(/Tablet/i) ||
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i)
    ) {
      return true;
    } else {
      return false;
    }
  }
})();
