document.writeln(`
<nav class="navbar navbar-expand-lg flex-column p-0 fixed-top">
   <div class="container navbar-top">
      <div class="navbar-start d-lg-none">
         <button class="btn toggler-menu rounded-0 border-0" data-bs-toggle="offcanvas" data-bs-target="#menu">
            <span class="fas fa-ellipsis-h fa-lg"></span>
         </button>
      </div><!-- navbar start -->
      <div class="navbar-center">
         <h1 class="lh-1 m-0">
            <a href="index.html" class="navbar-brand d-flex m-0 py-lg-0">
               <img src="../asset/img/logo-indraco.png" class="img-default" width="100%" height="auto" alt="">
               <img src="../asset/img/logo-indraco-invert.png" class="img-invert" width="100%" height="auto" alt="">
            </a>
         </h1>
      </div><!-- navbar center -->
      <div class="navbar-end">
         <div class="d-lg-none">
            <script src="layout/toggler-search.js"></script>
         </div>
         <div class="d-none d-lg-block small">
            <script src="layout/navtop.js"></script>
         </div>
      </div><!-- navbar end -->
   </div><!-- end container navbar top -->
   <div class="container navbar-bottom p-0">
      <div class="offcanvas-lg offcanvas-start d-flex w-lg-100" z-index="-1" id="menu">
         <div class="offcanvas-header menu-header">
            <button class="btn-close rounded-0" data-bs-toggle="offcanvas" data-bs-target="#menu"></button>
         </div><!-- end menu header -->
         <div class="offcanvas-body menu-body flex-lg-grow-1">
            <ul class="navbar-nav nav-divider menu-list">
               <li class="nav-item menu-item">
                  <a href="#" class="nav-link menu-link" id="nav-about">
                     <span>about us</span>
                  </a>
               </li><!-- end menu item about -->
               <li class="nav-item menu-item dropdown">
                  <a href="#" data-bs-toggle="dropdown" data-bs-target="#dropProduct" class="nav-link menu-link dropdown-toggle" id="nav-products">
                     <span>products</span>
                  </a>
                  <div class="dropdown-menu rounded-0 border-0 m-0" id="dropProduct">
                     <script src="layout/dropdown-products.js"></script>
                  </div>
               </li><!-- end menu item products -->
               <li class="nav-item menu-item">
                  <a href="#" class="nav-link menu-link" id="nav-businesses">
                     <span>businesses</span>
                  </a>
               </li><!-- end menu item businesses -->
               <li class="nav-item menu-item dropdown">
                  <a href="#" data-bs-toggle="dropdown" data-bs-target="#dropStores" class="nav-link menu-link dropdown-toggle" id="nav-stores">
                     <span>stores</span>
                  </a>
                  <div class="dropdown-menu rounded-0 border-0 m-0" id="dropStores">
                     <script src="layout/dropdown-stores.js"></script>
                  </div>
               </li><!-- end menu item stores -->
               <li class="nav-item menu-item">
                  <a href="#" class="nav-link menu-link" id="nav-events">
                     <span>news & events</span>
                  </a>
               </li><!-- end menu item events -->
               <li class="nav-item menu-item">
                  <a href="#" class="nav-link menu-link" id="nav-brochure">
                     <span>brochure</span>
                  </a>
               </li><!-- end menu item brochure -->
               <li class="nav-item menu-item">
                  <a href="#" class="nav-link menu-link" id="nav-career">
                     <span>career</span>
                  </a>
               </li><!-- end menu item career -->
               <li class="nav-item menu-item">
                  <a href="#" class="nav-link menu-link" id="nav-contact">
                     <span>contact</span>
                  </a>
               </li><!-- end menu item contact -->
            </ul><!-- end menu list -->
         </div><!-- end menu body -->
         <div class="offcanvas-header menu-footer d-block py-0 p-lg-0 flex-lg-grow-0">
            <hr class="m-0 d-lg-none">
            <div class="py-3 p-lg-0 h-100">
               <div class="w-100 d-lg-none">
                  <script src="layout/navtop.js"></script>
               </div>
               <div class="d-none d-lg-block h-100">
                  <script src="layout/toggler-search.js"></script>
               </div>
            </div>
         </div><!-- end menu footer -->
      </div><!-- end menu -->
   </div><!-- end container navbar bottom -->
</nav><!-- end navbar -->`)