$('.trigger-sidebar-show').click(function () {
   $('body').css({ 'overflow': 'hidden' });
   $('.sidebar').addClass('show');
   $('<div class="backdrop-sidebar"></div>').appendTo('body');
});

$('.trigger-sidebar-hide').click(function () {
   $('body').removeAttr('style');
   $('.sidebar').removeClass('show');
   $('.backdrop-sidebar').remove();
});