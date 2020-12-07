'use strict';

(function () {
  var persons = [];
  var btn = document.querySelector('.form__button');
  var users = [];
  var btnPopup = document.querySelector('.popup__button');

  function saveUser() {
    var user = {
      name: document.querySelector('#popup-name').value,
      tel: document.querySelector('#popup-tel').value,
      question: document.querySelector('#popup-question').value
    };

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
  btnPopup.addEventListener('click', saveUser);

  function savePerson() {
    var person = {
      name: document.querySelector('#name').value,
      tel: document.querySelector('#tel').value,
      question: document.querySelector('#question').value
    };

    persons.push(person);
    localStorage.setItem('persons', JSON.stringify(persons));
  }
  btn.addEventListener('click', savePerson);
})();

'use strict';

(function () {
  var buttonInfo = document.querySelector('.info__button');

  buttonInfo.onclick = function () {
    var dot = document.querySelector('.info span');
    var text = document.querySelector('.info span:last-child');

    if (dot.style.display === 'none') {
      text.style.display = 'none';
      dot.style.display = 'inline-block';
    } else {
      text.style.display = 'block';
      dot.style.display = 'none';
    }
  };

})();

'use strict';

(function () {
  var inputTelPopup = document.querySelector('#popup-tel');
  var inputTelForm = document.querySelector('#tel');

  function setMaskTel(input) {
    input.onfocus = function () {
      if (input.value.length === 0) {
        input.value = '+7(';
      } else {
        return;
      }
    };
    input.onkeypress = function (evt) {
      var curLen = input.value.length;
      if (!/\d/.test(evt.key)) {
        evt.preventDefault();
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
