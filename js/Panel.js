$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});

$(function() {
    $('a').click(function() {
        $(this).find('i').toggleClass('fa-star fa-star-o');
    });
});

