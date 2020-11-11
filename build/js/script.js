'use strict';

(function () {
  var anchors = document.querySelectorAll('a[href*="#"]');

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

  var inputTelPopup = document.querySelector('.popup__input--tel');
  var inputTelForm = document.querySelector('.form__input--tel');

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

 setMaskTel(inputTelForm);
  setMaskTel(inputTelPopup);
  svg4everybody();
}) ();
