// Animasi header slide up/down saat scroll
document.addEventListener('DOMContentLoaded', function () {
   const header = document.querySelector('body>header');
   let lastScrollY = window.scrollY;
   let ticking = false;

   // Siapkan style agar header bisa di-animasi
   header.style.transition = 'transform 0.4s cubic-bezier(.4,0,.2,1)';
   header.style.willChange = 'transform';

   function onScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
         // Scroll ke bawah, sembunyikan header
         header.style.transform = 'translateY(calc(-100% + .25rem))';
      } else {
         // Scroll ke atas, tampilkan header
         header.style.transform = 'translateY(0)';
      }
      lastScrollY = currentScrollY;
      ticking = false;
   }

   window.addEventListener('scroll', function () {
      if (!ticking) {
         window.requestAnimationFrame(onScroll);
         ticking = true;
      }
   });
});