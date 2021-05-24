$(document).ready(function () {
  var searchBlock = $('.header__navigation__search');
  var logisticsBlock = $('.express__card--logistics');
  var expressBlock = $('.express__card');
  var expressSservice = $('.express__service__list');
  var expressPoint = $('.express__point__list');
  var expressLogin = $('.express__login__list');
  var expressTrack = $('.express__track__list');
  var expressSserviceField = $('.express__service');
  var expressPointField = $('.express__point');
  var expressLoginField = $('.express__login');
  var expressTrackField = $('.express__track');
  var expressSserviceTittle = $('.express__card__text__service');
  var expressPointTittle = $('.express__card__text__point');
  var expressLoginTittle = $('.express__card__text__login');
  var expressTrackTittle = $('.express__card__text__track');
  var expressSserviceButton = $('.express__service__button');
  var expressPointButton = $('.express__point__button');
  var expressLoginButton = $('.express__login__button');
  var expressTrackButton = $('.express__track__button');
  var servicesDropdown = $('.dropdown__ul');
  var servicesLocation = $('.dropdown__text');
  var servicesCountry = $('#location');


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
    $(document).on('click', '.express__service__button', function () {
    expressSservice.slideToggle();
    expressSserviceTittle.toggleClass('open');
    expressSserviceButton.toggleClass('open__button');
    expressSserviceField.toggleClass('open__border');
    return false;
  });
  $(document).on('click', '.express__point__button', function () {
    expressPoint.slideToggle();
    expressPointTittle.toggleClass('open');
    expressPointButton.toggleClass('open__button');
    expressPointField.toggleClass('open__border');
    return false;
  });
  $(document).on('click', '.express__login__button', function () {
    expressLogin.slideToggle();
    expressLoginTittle.toggleClass('open');
    expressLoginButton.toggleClass('open__button');
    expressLoginField.toggleClass('open__border');
    return false;
  });
  $(document).on('click', '.express__track__button', function () {
    expressTrack.slideToggle();
    expressTrackTittle.toggleClass('open');
    expressTrackButton.toggleClass('open__button');
    expressTrackField.toggleClass('open__border');
    return false;
  });
    $(document).on('click', '.dropdown__button', function () {
      servicesLocation.toggleClass('dn');
      servicesDropdown.slideToggle();
    return false;
  });
  $(document).on('click', '.russia', function () {
    servicesLocation.toggleClass('dn');
    servicesDropdown.slideToggle();
    document.getElementById("location").innerHTML = "Russia";
    return false;
  });
    $(document).on('click', '.usa', function () {
    servicesLocation.toggleClass('dn');
    servicesDropdown.slideToggle();
    document.getElementById("location").innerHTML = "USA";
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

  
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '1150',
      videoId: 'OsXjF63_Etw',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event) {
    event.target.playVideo();
  }

});