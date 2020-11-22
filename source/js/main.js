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
