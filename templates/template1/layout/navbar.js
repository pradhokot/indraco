document.writeln(`
<div class="navbar navbar-expand-lg d-block text-capitalize fixed-top py-0" style="z-index: 1035;">
   <div class="navbar-top">
      <div class="container py-3 pb-lg-2 pt-lg-5">
         <div class="navtop-start d-lg-none">
            <button class="btn rounded-0 border-0 shadow-none p-0 text-reset text-reset link-hover" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
               <i class="fas fa-bars fa-lg"></i>
            </button>
         </div>
         <div class="navtop-center">
            <h1 class="navbrand fs-reset m-0 lh-base">
               <a href="index.html" class="text-decoration-none text-reset d-flex">
                  <img src="../../asset/img/logo-indraco.png" class="img-default" width="100%" height="auto" alt="">
                  <img src="../../asset/img/logo-indraco-invert.png" class="img-invert" width="100%" height="auto" alt="">
               </a>
            </h1>
         </div>
         <div class="navtop-end">
            <div class="float-end">
               <div class="d-lg-none">
                  <script src="layout/trigger-search.js"></script>
               </div>
               <div class="d-none d-lg-block small">
                  <script src="layout/submenu.js"></script>
               </div>
            </div>
         </div>
      </div><!-- end container -->
   </div><!-- end navbar top -->
   <div class="navbar-bottom">
      <div class="offcanvas-lg offcanvas-start container-lg p-0 d-lg-flex flex-lg-nowrap column-gap-lg-4 align-items-lg-baseline justify-content-lg-between" z-index="-1" id="sidebar">
         <div class="offcanvas-header">
            <button class="btn-close border-0 rounded-0 shadow-none" data-bs-toggle="offcanvas" data-bs-target="#sidebar"></button>
         </div>
         <div class="offcanvas-body py-0">
            <ul class="navbar-nav py-0">
               <li class="nav-item">
                  <a href="about.html" class="nav-link px-lg-3 text-uppercase text-reset link-hover" id="nav-about">
                     <b class="fw-medium">about us</b>
                  </a>
               </li>
               <li class="nav-item d-none d-lg-block position-relative">
                  <div class="vr h-75 position-absolute top-50 start-50 translate-middle"></div>
               </li>
               <li class="nav-item dropdown">
                  <a href="products.html" data-bs-toggle="collapse" data-bs-target="#collapse-products" class="nav-link px-lg-3 text-uppercase text-reset link-hover collapsed" id="nav-products">
                     <b class="fw-medium">products</b>
                  </a>
                  <script src="layout/collapse-products.js"></script>
               </li>
               <li class="nav-item d-none d-lg-block position-relative">
                  <div class="vr h-75 position-absolute top-50 start-50 translate-middle"></div>
               </li>
               <li class="nav-item">
                  <a href="businesses.html" class="nav-link px-lg-3 text-uppercase text-reset link-hover" id="nav-businesses">
                     <b class="fw-medium">businesses</b>
                  </a>
               </li>
               <li class="nav-item d-none d-lg-block position-relative">
                  <div class="vr h-75 position-absolute top-50 start-50 translate-middle"></div>
               </li>
               <li class="nav-item dropdown">
                  <a href="stores.html" data-bs-toggle="collapse" data-bs-target="#collapse-stores" class="nav-link px-lg-3 text-uppercase text-reset link-hover collapsed" id="nav-stores">
                     <b class="fw-medium">stores</b>
                  </a>
                  <script src="layout/collapse-stores.js"></script>
               </li>
               <li class="nav-item d-none d-lg-block position-relative">
                  <div class="vr h-75 position-absolute top-50 start-50 translate-middle"></div>
               </li>
               <li class="nav-item">
                  <a href="events.html" class="nav-link px-lg-3 text-uppercase text-reset link-hover" id="nav-events">
                     <b class="fw-medium">news & events</b>
                  </a>
               </li>
               <li class="nav-item d-none d-lg-block position-relative">
                  <div class="vr h-75 position-absolute top-50 start-50 translate-middle"></div>
               </li>
               <li class="nav-item">
                  <a href="brochures.html" class="nav-link px-lg-3 text-uppercase text-reset link-hover" id="nav-brochures">
                     <b class="fw-medium">brochures</b>
                  </a>
               </li>
               <li class="nav-item d-none d-lg-block position-relative">
                  <div class="vr h-75 position-absolute top-50 start-50 translate-middle"></div>
               </li>
               <li class="nav-item">
                  <a href="career.html" class="nav-link px-lg-3 text-uppercase text-reset link-hover" id="nav-career">
                     <b class="fw-medium">career</b>
                  </a>
               </li>
               <li class="nav-item d-none d-lg-block position-relative">
                  <div class="vr h-75 position-absolute top-50 start-50 translate-middle"></div>
               </li>
               <li class="nav-item">
                  <a href="contact.html" class="nav-link px-lg-3 text-uppercase text-reset link-hover" id="nav-contact">
                     <b class="fw-medium">contact</b>
                  </a>
               </li>
            </ul>
         </div>
         <div class="offcanvas-header d-lg-block p-lg-0 position-relative">
            <div class="px-3 w-100 position-absolute top-0 start-0 end-0 translate-middle-y d-lg-none">
               <hr class="m-0">
            </div>
            <div class="d-lg-none">
               <script src="layout/submenu.js"></script>
            </div>
            <div class="d-none d-lg-block">
               <script src="layout/trigger-search.js"></script>
            </div>
         </div>
      </div>
   </div><!-- end navbar bottom -->
</div><!-- end navbar -->
<script src="layout/btn-to-top.js"></script>
`)