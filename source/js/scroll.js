'use strict';

(function () {
  var anchor = document.querySelectorAll('a[href*="#"]');

  anchor.addEventListener('click', function (evt) {
    evt.preventDefault();

    var blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });

})();
