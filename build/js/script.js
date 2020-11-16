'use strict';

(function () {
  var body = document.querySelector('body');
  var anchors = document.querySelectorAll('a[href*="#"]');
  var button = document.querySelector('.header__button');
  var popup = document.querySelector('.popup');
  var crossPopup = document.querySelector('.popup__cross');
  var inputTelPopup = document.querySelector('.popup__input--tel');
  var inputNamePopup = document.querySelector('.popup__input--name');
  var inputTelForm = document.querySelector('.form__input--tel');

  var buttonInfo = document.querySelector('.info__button');
  buttonInfo.onclick = function() {
    var text = document.querySelector('.info__part');
    var dot =  document.querySelector('.info__dot');
    if (text.style.display !== 'none' && text.style.display !== 'inline-block') {
        text.style.display = 'none';
        dot.style.display = 'inline-block'
    }
    else {
        text.style.display = 'block';
        dot.style.display = 'none';
    }
};

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
    if (evt.keyCode === 27) {
      popup.classList.remove('popup--show');
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('keydown', setKeyPressRemovePopupHandler);

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  function setMaskTel(input) {
    input.onfocus = function () {
      input.value = '+7(';
    };
    var old = 0;
    input.onkeydown = function () {
      var curLen = input.value.length;
      if (curLen < old) {
        old--;
        return;
      }
      if (curLen === 6) {
        input.value = input.value + ')-';
      }
      if (curLen === 11) {
        input.value = input.value + '-';
      }
      if (curLen === 14) {
        input.value = input.value + '-';
      }
      if (curLen > 16) {
        input.value = input.value.substring(0, input.value.length - 1);
      }
      old++;
    };
  }

  setShowPopupHandler();
  setRemovePopupHandler();
  setMaskTel(inputTelForm);
  setMaskTel(inputTelPopup);
  svg4everybody();
}) ();
