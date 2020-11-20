'use strict';

(function () {
  // var question = document.querySelector('.question');
  var form = document.querySelector ('.form');
  var question = document.querySelectorAll('textarea');

  form.addEventListener('input', function () {
    question.value = localStorage.question;
    localStorage.setItem('key', 'value');
    console.log(localStorage.length)
  })

}) ();
