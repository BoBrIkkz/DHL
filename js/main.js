$(document).ready(function () {
  var searchBlock = $('.header__navigation__search');
  var logisticsBlock = $('.express__card--logistics');
  var expressBlock = $('.express__card');
  
  
  $(document).on('click', '.header__navigation__button', function () {
    searchBlock.slideToggle();
    return false;
  });
  
  $(document).on('click', '.express__logistics__button--toggle', function () {
    expressBlock.removeClass('toggle');
    logisticsBlock.addClass('toggle');
    return false;
  });
  
  $(document).on('click', '.express__button--toggle', function () {
    expressBlock.addClass('toggle');
    logisticsBlock.removeClass('toggle');
    return false;
  });

  const select = document.querySelector('select');
  const allLang = ['en', 'ru'];
  select.addEventListener('change', changeUrlLanguage);
  function changeUrlLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
  }
  changeLanguage();
  function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
      location.href = window.location.pathname + '#en';
      location.reload();
      
    }
    select.value = hash;
    for (let key in langArr) {
      let elem = document.querySelector('.lng-' + key);
      if (elem) {
        elem.innerHTML = langArr[key][hash];
      }
    }
  }
});