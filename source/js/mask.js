'use strict';

(function () {
  var inputTelPopup = document.querySelector('#popup-tel');
  var inputTelForm = document.querySelector('#tel');


  function setMaskTel(input) {
    input.onfocus = function () {
      input.value = '+7(';
    };
    var old = 0;
    input.onkeydown = function (evt) {
      var curLen = input.value.length;
      if (!/\d/.test(evt.key)) {
        evt.preventDefault();
      }
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
    };
  }

  window.mask = {
    inputForm: setMaskTel(inputTelForm),
    inputPopup: setMaskTel(inputTelPopup),
    telForm: inputTelForm
  };
})();
