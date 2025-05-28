$(document).ready(function () {
   // Set tinggi minimum page-body dan padding page
   var windowHeight = $(window).height();
   var navbarHeight = $('.navbar').outerHeight();
   var footerHeight = $('.page-footer').outerHeight();
   var bodyHeight = windowHeight - navbarHeight - footerHeight;
   $('.page-body').css('min-height', bodyHeight + 'px');
   $('.page').css('padding-top', navbarHeight + 'px');
   
   // Responsive: klik di mobile, hover di desktop
   if ($(window).width() >= 992) {
      $('.navbar .collapse').css('top', navbarHeight + 'px');

      // Hapus atribut collapse agar tidak bentrok dengan Bootstrap JS
      $('#nav-products, #nav-stores').removeAttr('data-bs-toggle data-bs-target');

      // Hover untuk menampilkan collapse
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

      // Tutup semua collapse saat mouse keluar dari navbar
      $('.navbar').on('mouseleave', function () {
         $('#collapse-products, #collapse-stores').stop(true, true).slideUp(200).removeClass('show');
         $('#nav-products, #nav-stores').addClass('collapsed');
      });

      // Merubah trigger nav tabs dari klik ke hover
      document.querySelectorAll('.nav-pills>.nav-link>span').forEach(function (everyitem) {
         var tabTrigger = new bootstrap.Tab(everyitem)
         everyitem.addEventListener('mouseenter', function () {
            tabTrigger.show();
         });
      });

      // Menambahkan class active pada nav link pertama di setiap nav tabs list
      $('.nav-pills>.nav-link:first-of-type>span').addClass('active');
      $('.tab-content>.tab-pane:first-of-type').addClass('active show');
   } else {
      // Mobile: hapus href agar tidak lompat
      $('.navbar .collapsed').removeAttr('href');
   }

   // Auto refresh jika lebar window melewati batas 992px
   let lastWindowWidth = $(window).width();
   $(window).resize(function () {
      const currentWidth = $(window).width();
      if ((lastWindowWidth < 992 && currentWidth >= 992) || (lastWindowWidth >= 992 && currentWidth < 992)) {
         location.reload();
      }
      lastWindowWidth = currentWidth;
   });
});