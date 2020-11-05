'use strict';

(function () {
  var body = document.querySelector('body');
  var header = document.querySelector('.header');
  var toggler = document.querySelector('.toggle');
  var navigation = document.querySelector('.header__list');

  body.classList.remove('no-js');

  toggler.addEventListener('click', function (evt) {
    evt.preventDefault();
    navigation.classList.toggle('header__list--show');
    header.classList.toggle('header__show');
    toggler.classList.toggle('toggle--menu');
    toggler.classList.toggle('toggle--cross');
  });
})();

svg4everybody();
