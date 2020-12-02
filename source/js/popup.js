'use strict';

(function () {
  var OUT = 27;
  var button = document.querySelector('.header__button');
  var popup = document.querySelector('.popup');
  var crossPopup = document.querySelector('.popup__cross');
  var inputName = document.querySelector('#popup-name');

  function setShowPopupHandler() {
    button.addEventListener('click', function () {
      popup.classList.add('popup--show');
      document.body.style.overflow = 'hidden';
      inputName.focus();
    });
  }

  setShowPopupHandler();

  function setRemovePopupHandler() {
    crossPopup.addEventListener('click', function () {
      popup.classList.remove('popup--show');
      document.body.style.overflow = '';
    });
  }

  setRemovePopupHandler();

  function setKeyPressRemovePopupHandler(evt) {
    if (evt.keyCode === OUT) {
      popup.classList.remove('popup--show');
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('keydown', setKeyPressRemovePopupHandler);

  popup.addEventListener('click', function (evt) {
    var wrap = document.querySelector('.popup__wrap');
    if (!wrap.contains(evt.target)) {
      popup.classList.remove('popup--show');
    }
  });

})();
