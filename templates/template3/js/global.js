$(document).ready(function () {
   // ----------------- variabel height
   var windowHeight = $(window).height();
   // var headerHeight = $('.page-header').outerHeight();
   var navbarHeight = $('.navbar').outerHeight();
   var footerHeight = $('.page-footer').outerHeight();
   var footerHeight = $('.page-footer').outerHeight();
   var bodyHeight = windowHeight - navbarHeight - footerHeight;

   $('.page-body').css('min-height', bodyHeight + 'px');/* add minimal height on page-body */
   $('.page').css('padding-top', navbarHeight + 'px');/* padding page over page header */


   // ----------------- scrolltop window
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('.navbar').addClass('scrollTop');
      } else {
         $('.navbar').removeClass('scrollTop');
      };
   });


   // ----------------- toggle scroll
   let prevScrollpos = $(window).scrollTop();
   $(window).on('scroll', function () {
      $('.navbar').toggleClass('toggle-scroll', prevScrollpos <= $(this).scrollTop());
      prevScrollpos = $(this).scrollTop();
   });


   // ----------------- match media width
   if ($(window).width() < 992) {
      // mobile preview
      $('.dropdown>.nav-link').removeAttr('href');
   }
   else {
      // desktop preview
      $('.dropdown>.nav-link').removeAttr('data-bs-toggle data-bs-target');

      $('.dropdown').mouseenter(function() {
         $('.navbar').addClass('show-dropdown');
      });
      $('.navbar').mouseleave(function() {
         $('.navbar').removeClass('show-dropdown');
      });
   }


   // ----------------- auto refresh page on responsive width
   // let lastWindowWidth = $(window).width();
   // $(window).resize(function () {
   //    const currentWidth = $(window).width();
   //    const crossed768 = (lastWindowWidth < 768 && currentWidth >= 768) || (lastWindowWidth >= 768 && currentWidth < 768);
   //    const crossed992 = (lastWindowWidth < 992 && currentWidth >= 992) || (lastWindowWidth >= 992 && currentWidth < 992);
   //    if (crossed768 || crossed992) {
   //       location.reload();
   //    }
   //    lastWindowWidth = currentWidth;
   // });

   let lastWindowWidth = $(window).width();
   $(window).resize(function () {
      const currentWidth = $(window).width();
      const crossed992 = (lastWindowWidth < 992 && currentWidth >= 992) || (lastWindowWidth >= 992 && currentWidth < 992);
      if (crossed992) {
         location.reload();
      }
      lastWindowWidth = currentWidth;
   });

   // var windowWidth = $(window).width();
   // $(window).resize(function () {
   //    if (windowWidth != $(window).width()) {
   //       location.reload();
   //       return;
   //    }
   // });
})