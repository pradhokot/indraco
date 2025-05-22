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

      // Ubah event hover menjadi click untuk dropdown di mobile
      $('.nav-item.dropdown').off('mouseenter mouseleave').on('click', function (e) {
         // Toggle slide pada dropdown-menu
         var $menu = $(this).find('.dropdown-menu');
         if ($menu.is(':visible')) {
            $menu.stop(true, true).slideUp(200);
         } else {
            $menu.stop(true, true).slideDown(250);
         }
         // Agar tidak bubble ke parent (misal ada nested dropdown)
         e.stopPropagation();
         // Optional: tutup dropdown lain
         $(this).siblings('.nav-item.dropdown').find('.dropdown-menu').slideUp(200);
      });
   }
   else {
      // desktop preview
      // change trigger nav-tabs from click to hover
      document.querySelectorAll('.nav-pills>.nav-item>.nav-link>span').forEach(function (everyitem) {
         var tabTrigger = new bootstrap.Tab(everyitem)
         everyitem.addEventListener('mouseenter', function () {
            tabTrigger.show();
         });
      });

      // add active class on first navbar tab menu
      $('.nav-pills>.nav-item:first-of-type>.nav-link>span').addClass('active');
      $('.tab-content>.tab-pane:first-of-type').addClass('active show');


      // Untuk dropdown di navbar
      $('.nav-item.dropdown').hover(
         function () {
            // Saat mouse masuk, slide down menu
            $(this).find('.dropdown-menu').stop(true, true).slideDown(250);
            $('.navbar').addClass('show-dropdown');
         },
         function () {
            // Saat mouse keluar, slide up menu
            $(this).find('.dropdown-menu').stop(true, true).slideUp(200);
            $('.navbar').removeClass('show-dropdown');
         }
      );
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