'use strict';

(function () {
  var OUT = 'Escape';
  var button = document.querySelector('.header__button');
  var popup = document.querySelector('.popup');
  var crossPopup = document.querySelector('.popup__cross');
  var inputNamePopup = document.querySelector('.popup__input--name');

  function setShowPopupHandler() {
    button.addEventListener('click', function () {
      popup.classList.add('popup--show');
      document.body.style.overflow = 'hidden';
      inputNamePopup.focus();
    });
  }

  function setRemovePopupHandler() {
    crossPopup.addEventListener('click', function () {
      popup.classList.remove('popup--show');
      document.body.style.overflow = '';
    });
  }

  function setKeyPressRemovePopupHandler(evt) {
    if (evt.keyCode === OUT) {
      popup.classList.remove('popup--show');
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('keydown', setKeyPressRemovePopupHandler);

  window.popup = {
    show: setShowPopupHandler(),
    remove: setRemovePopupHandler()
  };
})();
