$(document).ready(function () {
   // ----------------- variabel height
   // var headerHeight = $('.page-header').outerHeight();
   var windowHeight = $(window).height();
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
      // MOBILE PREVIEW
      $('.collapsed').removeAttr('href');/* remove attribute toggle href on mobile */
   }
   else {
      // DESKTOP PREVIEW
      $('.collapsed').removeAttr('data-bs-toggle data-bs-target');/* remove attribute toggle collapse on deskktop */

      // Hover multiple collapse on desktop
      $('.collapsed').closest('.nav-item').hover(
         function () {
            $(this).find('.collapse').stop(true, true).slideDown(250).addClass('show');
            $(this).find('.collapsed').removeClass('collapsed');
            $('.navbar').addClass('toggle-collapsed');
         },
         function () {
            $(this).find('.collapse').stop(true, true).slideUp(200).removeClass('show');
            $(this).find('.nav-link').addClass('collapsed');
         }
      );
      $('.navbar').on('mouseleave', function () {
         $(this).removeClass('toggle-collapsed');
      });


      document.querySelectorAll('.nav-pills>.nav-item>.nav-link>span').forEach(function (everyitem) {
         var tabTrigger = new bootstrap.Tab(everyitem)
         everyitem.addEventListener('mouseenter', function () {
            tabTrigger.show();
         });
      });/* change trigger nav-tabs from click to hover */

      // add active class on first navbar tab menu
      $('.nav-pills>.nav-item:first-of-type>.nav-link>span').addClass('active');
      $('.tab-content>.tab-pane:first-of-type').addClass('active show');
   }


   // ----------------- auto refresh page on responsive width
   let lastWindowWidth = $(window).width();
   $(window).resize(function () {
      const currentWidth = $(window).width();
      const crossed992 = (lastWindowWidth < 992 && currentWidth >= 992) || (lastWindowWidth >= 992 && currentWidth < 992);
      if (crossed992) {
         location.reload();
      }
      lastWindowWidth = currentWidth;
   });

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

   // var windowWidth = $(window).width();
   // $(window).resize(function () {
   //    if (windowWidth != $(window).width()) {
   //       location.reload();
   //       return;
   //    }
   // });
})