jQuery(document).ready(function($) {
  const tabsItem = $('.tabs-item');

  tabsItem.on('click', function(event) {
    event.preventDefault();
    const activeContent = $(this).attr('href');
    $('.visible').toggleClass('visible');
    $(activeContent).toggleClass('visible');
    $('.tabs-item-active').toggleClass('tabs-item-active');
    $(this).toggleClass('tabs-item-active');
  })
});