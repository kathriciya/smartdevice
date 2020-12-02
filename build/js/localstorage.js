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
