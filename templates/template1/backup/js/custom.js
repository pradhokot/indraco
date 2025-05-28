$(document).ready(function () {
   // $('.page').css('padding-top', $('.page-header').height());/* add padding page to fixed header height */
   $('input, textarea, .form-control').hover(function() {
      $(this).select();
   });/* select input, textarea, fomr-control on hover */

   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('.navbar').addClass('scrollTop');
         $('.buy-trigger').removeClass('d-none');
      } else {
         $('.navbar').removeClass('scrollTop');
         $('.buy-trigger').addClass('d-none');
      };
   });/* add scrollTop class when windows scrolltop at 100px */

   let prevScrollpos = $(window).scrollTop();
   $(window).on('scroll', function () {
      $('.navbar').toggleClass('on-scroll', prevScrollpos <= $(this).scrollTop());
      prevScrollpos = $(this).scrollTop();
   });/* add on-scroll class when windows start & reverse scroll */

   document.querySelectorAll('.nav-pills .nav-link > span').forEach(function (everyitem) {
      var tabTrigger = new bootstrap.Tab(everyitem)
      everyitem.addEventListener('mouseenter', function () {
         tabTrigger.show();
      });
   });/* change trigger nav-tabs from click to hover */

   $('.dropdown').hover(
      function () {
         $('.navbar').addClass('on-hover');
      },
      function () {
         $('.navbar').removeClass('on-hover');
      }
   );/* add on-hover class when dropdown hover on navbar */
});