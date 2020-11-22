'use strict';

(function () {
  var form = document.querySelector('.form');
  var question = document.querySelectorAll('textarea');

  form.addEventListener('input', function () {
    question.value = localStorage.question;
    localStorage.setItem('key', 'value');
  });

  // TODO пыталась сохранить вопрос в localStorage
})();
