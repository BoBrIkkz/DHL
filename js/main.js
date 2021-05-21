$(document).ready(function () {
  var searchBlock = $('.header__navigation__search');
  var logisticsBlock = $('.express__card--logistics');
  var expressBlock = $('.express__card');
  var toggle = $('.toggle');
  var off = $('.off');

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
});