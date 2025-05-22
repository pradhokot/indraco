$(document).ready(function () {

   // responsive screen
   if ($(window).width() > 992) {
      // remove dropdown data-bs attribbute
      $('.dropdown-toggle').removeAttr('data-bs-toggle data-bs-target');

      // when dropdown mouseover on desktop view
      $('.dropdown').mouseenter(function () {
         $('.navbar').addClass('drop-show');
      });
      $('.navbar').mouseleave(function () {
         $(this).removeClass('drop-show');
      });
   } else {
      // remove dropdown href attribbute
      $('.dropdown-toggle').removeAttr('href');
   }

   // setPadding();
   $('.page').css('padding-top', $('.navbar').outerHeight());

   // add active class on first navbar tab menu
   $('.nav-pills>.nav-item:first-of-type>.nav-link>span').addClass('active');
   $('.tab-content>.tab-pane:first-of-type').addClass('active show');

   // change trigger nav-tabs from click to hover
   document.querySelectorAll('.nav-pills>.nav-item>.nav-link>span').forEach(function (everyitem) {
      var tabTrigger = new bootstrap.Tab(everyitem)
      everyitem.addEventListener('mouseenter', function () {
         tabTrigger.show();
      });
   });

   // scrolltop window
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('.navbar').addClass('on-scroll');
      } else {
         $('.navbar').removeClass('on-scroll');
      };
   });

   // toggle scroll
   let prevScrollpos = $(window).scrollTop();
   $(window).on('scroll', function () {
      $('.navbar').toggleClass('toggle-scroll', prevScrollpos <= $(this).scrollTop());
      prevScrollpos = $(this).scrollTop();
   });

   // refresh page
   var windowWidth = $(window).width();
   $(window).resize(function () {
      if (windowWidth != $(window).width()) {
         location.reload();
         return;
      }
   });

});