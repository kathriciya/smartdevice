'use strict';

(function () {
  var scrollForm = document.querySelector('a[href="#feedback"]');
  var anchorForm = document.querySelector('#feedback');
  var scrollAdvantage = document.querySelector('a[href="#advantage"]');
  var anchorAdvantage = document.querySelector('#advantage');

  scrollForm.addEventListener('click', function (evt) {
    evt.preventDefault();
    anchorForm.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });

  scrollAdvantage.addEventListener('click', function (evt) {
    evt.preventDefault();
    anchorAdvantage.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
})();
