document.writeln(`
   <nav class="navbar">
      <div class="container">
         <ul class="navbar-header list-unstyled m-0">
            <li class="d-lg-none">
               <button class="navbar-toggler rounded-0 border-0 p-0 shadow-none" data-bs-toggle="offcanvas" data-bs-target="#menu">
                  <script src="../assets/img/navbar-toggler.js"></script>
               </button>
            </li>
            <li>
               <h1 class="m-0 d-flex">
                  <a href="index.html" class="navbar-brand m-0 p-0">
                     <img src="../assets/img/logo-indraco.png" width="100%" height="auto" class="img-dark" alt="">
                     <img src="../assets/img/logo-indraco-invert.png" width="100%" height="auto" class="img-light" alt="">
                  </a>
               </h1>
            </li>
            <li>
               <button class="navbar-toggler rounded-0 border-0 p-0 float-end d-lg-none shadow-none" data-bs-toggle="modal" data-bs-target="#modal-search">
                  <i class="fas fa-search"></i>
               </button>
               <div class="d-none d-lg-block float-end small">
                  <script src="layout/nav-translate.js"></script>
               </div>
            </li>
         </ul><!-- end navbar header -->
         <div class="navbar-body w-100">
            <div class="offcanvas-lg offcanvas-start d-flex" z-index="1" id="menu">
               <div class="offcanvas-header pb-0">
                  <button class="btn-close shadow-none" data-bs-toggle="offcanvas" data-bs-target="#menu"></button>
               </div>
               <div class="offcanvas-body py-0 flex-lg-grow-1">
                  <ul class="navbar-nav flex-lg-row mb-3 mb-lg-0">
                     <li class="nav-item">
                        <a href="about.html" class="nav-link py-lg-4" id="nav-about">
                           about us
                        </a>
                     </li>
                     <li class="nav-item d-none d-lg-flex"><div class="vr h-25 mx-3 my-auto"></div></li>
                     <li class="nav-item">
                        <div class="menu-mobile">
                           <script src="layout/nav-products-mobile.js"></script>
                        </div><!-- end menu mobile -->
                        <div class="menu-desktop">
                           <script src="layout/nav-products-desktop.js"></script>
                        </div><!-- end menu desktop -->
                     </li>
                     <li class="nav-item d-none d-lg-flex"><div class="vr h-25 mx-3 my-auto"></div></li>
                     <li class="nav-item">
                        <a href="businesses.html" class="nav-link py-lg-4" id="nav-businesses">
                           businesses
                        </a>
                     </li>
                     <li class="nav-item d-none d-lg-flex"><div class="vr h-25 mx-3 my-auto"></div></li>
                     <li class="nav-item">                              
                        <div class="menu-mobile">
                           <a href="store.html" class="nav-link" id="nav-store-m">
                              official store
                           </a>
                        </div><!-- end menu mobile -->
                        <div class="menu-desktop">
                           <script src="layout/nav-store-desktop.js"></script>
                        </div><!-- end menu desktop -->
                     </li>
                     <li class="nav-item d-none d-lg-flex"><div class="vr h-25 mx-3 my-auto"></div></li>
                     <li class="nav-item">
                        <a href="events.html" class="nav-link py-lg-4" id="nav-events">
                           events
                        </a>
                     </li>
                     <li class="nav-item d-none d-lg-flex"><div class="vr h-25 mx-3 my-auto"></div></li>
                     <li class="nav-item">
                        <a href="#" class="nav-link py-lg-4" id="nav-brochures">
                           brochures
                        </a>
                     </li>
                     <li class="nav-item d-none d-lg-flex"><div class="vr h-25 mx-3 my-auto"></div></li>
                     <li class="nav-item">
                        <a href="career.html" class="nav-link py-lg-4" id="nav-career">
                           career
                        </a>
                     </li>
                     <li class="nav-item d-none d-lg-flex"><div class="vr h-25 mx-3 my-auto"></div></li>
                     <li class="nav-item">
                        <a href="contact.html" class="nav-link py-lg-4" id="nav-contact">
                           contact
                        </a>
                     </li>
                  </ul>
               </div>
               <div class="offcanvas-header pt-0 d-lg-block p-lg-0 flex-lg-grow-0">
                  <button class="btn p-0 rounded-0 shadow-none d-none d-lg-flex py-lg-4 border-0" data-bs-toggle="modal" data-bs-target="#modal-search">
                     <i class="fas fa-search"></i>
                  </button>
                  <div class="d-lg-none w-100">
                     <hr class="w-100 mt-0">
                     <div class="w-100">
                        <script src="layout/nav-translate.js"></script>
                     </div>
                  </div>
               </div>
            </div><!-- end menu -->
         </div><!-- end navbar body -->
      </div><!-- end container -->
   </nav><!-- end navbar -->`)