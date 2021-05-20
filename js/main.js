$(document).ready(function () {
  var searchBlock = $('.header__navigation__search');
  $(document).on('click', '.header__navigation__button', function () {
    searchBlock.slideToggle();
    return false;
  });
});