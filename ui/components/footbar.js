document.write(`
<div class="footbar border-top bg-light border-secondary small">
   <main class="container py-4 d-grid column-grid-1 row-gap-4 py-lg-5 d-lg-flex flex-wrap row-gap-lg-0 column-gap-lg-4 justify-content-between align-items-baseline column-gap-xxl-5">
      <section>
         <h1 class="text-capitalize m-0 footbar-title d-none d-lg-block">
            <b>
               <a href="#" class="d-grid disabled" style="pointer-events: none;">
                  <img src="../assets/img/logo/logo-indraco-grey.png" width="auto" height="32" alt="INDRACO">
               </a>
            </b>
         </h1>
         <div class="collapse show">
            <p class="pt-2 m-0 d-none d-lg-block">
               <q><small>Indraco Roasting Fine Exquisite Coffee Since 1971.</small></q>
            </p>
            <nav class="pt-3" style="font-size: 1rem;">
               <a href="#" target="_blank" class="me-3">
                  <i class="fab fa-x-twitter fa-xl"></i>
               </a>
               <a href="#" target="_blank" class="me-3">
                  <i class="fab fa-facebook-f fa-xl"></i>
               </a>
               <a href="#" target="_blank" class="me-3">
                  <i class="fab fa-instagram fa-xl"></i>
               </a>
               <a href="#" target="_blank" class="me-3">
                  <i class="fab fa-youtube fa-xl"></i>
               </a>
               <a href="#" target="_blank" class="me-3">
                  <i class="fab fa-linkedin fa-xl"></i>
               </a>
            </nav>
         </div>
      </section>
      <section>
         <h5 class="text-capitalize m-0 footbar-title">
            <b>
               <a href="#collapse-footbar-products" data-bs-toggle="collapse" class="collapsed d-grid">
                  laman produk
               </a>
            </b>
         </h5>
         <div class="collapse d-lg-block" id="collapse-footbar-products">
            <ul class="list-unstyled m-0 text-uppercase pt-4 nav-products d-grid column-grid-1 row-gap-1 column-grid-lg-2 row-gap-lg-2 column-gap-lg-4">
               <li><a href="#">supresso</a></li>
               <li><a href="#">balicafe</a></li>
               <li><a href="#">ucafe</a></li>
               <li><a href="#">rasa sayang</a></li>
               <li><a href="#">tugu buaya</a></li>
               <li><a href="#">uang emas</a></li>
               <li><a href="#">brochoco</a></li>
               <li><a href="#">jaheku</a></li>
            </ul>
         </div>
      </section>
      <section>
         <h5 class="text-capitalize m-0 footbar-title">
            <b>
               <a href="#collapse-footbar-contact" data-bs-toggle="collapse" class="collapsed d-grid">
                  hubungi kami
               </a>
            </b>
         </h5>
         <div class="collapse d-lg-block" id="collapse-footbar-contact">
            <address class="pt-4 m-0">
               <p>
                  <a href="#" target="_blank">
                     Jl. Semeru Industri 1 No. 133-135 Bambe,
                     <br class="d-none d-lg-block">Driyorejo, Gresik 61177 - Indonesia
                  </a>
               </p>
               <p class="m-0">
                  <b>T</b>. <a href="#" target="_blank">+62 31 766 8777</a>,
                  <a href="#" target="_blank">+62 31 766 8777</a>
                  <br>
                  <b>F</b>. <a href="#" target="_blank">+62 31 766 9590</a>
                  <br>
                  <b>E</b>. <a href="#" target="_blank">info@indraco.com</a>
               </p>
            </address>
         </div>
      </section>
   </main>
   <footer class="border-top border-secondary-subtle">
      <div class="container d-flex flex-wrap align-items-baseline justify-content-between py-3 row-gap-3 py-lg-4">
         <nav style="--bs-breadcrumb-divider: '|';" aria-label="breadcrumb">
            <ol class="breadcrumb text-capitalize m-0">
               <li class="breadcrumb-item">
                  <a href="#" target="_blank">privacy policy</a>
               </li>
               <li class="breadcrumb-item">
                  <a href="#" target="_blank">terms & conditions</a>
               </li>
               <li class="breadcrumb-item">
                  <a href="#" target="_blank">information on data protection</a>
               </li>
               <li class="breadcrumb-item">
                  <a href="#" target="_blank">help?</a>
               </li>
            </ol>
         </nav>
         <p class="m-0">
            Hak cipta &copy; 2019 -
            <script>document.write(new Date().getFullYear())</script>
            INDRACO. Seluruh hak dilindungi undang-undang.
         </p>
      </div>
   </footer>
</div>
`)