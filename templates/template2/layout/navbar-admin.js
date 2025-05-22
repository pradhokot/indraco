document.writeln(`
<nav class="navbar navbar-expand fixed-top py-lg-3">
   <div class="container column-gap-3">
      <button class="navbar-toggler d-block rounded-0 border-0 p-0 d-lg-none shadow-none" data-bs-toggle="offcanvas" data-bs-target="#menu">
         <span class="navbar-toggler-icon"></span>
      </button>
      <a href="admin.html" class="navbar-brand d-lg-none">
         <img src="../asset/img/icon-indraco.png" width="32" height="32" alt="" class="img-default">
         <img src="../asset/img/icon-indraco-invert.png" width="32" height="32" alt="" class="img-invert">
      </a>
      <div class="navbar-collapse collapse">
         <ul class="navbar-nav ms-auto column-gap-2 ms-lg-0 w-lg-100 column-gap-xl-3">
            <li class="nav-item w-100">
               <div class="input-group search-toggler position-relative">
                  <input stype="search" class="form-control d-none d-lg-block rounded-1 pe-lg-5 z-1" placeholder="Search">
                  <button class="btn position-lg-absolute top-0 end-0 z-2">
                     <i class="fas fa-search"></i>
                  </button>
               </div>
            </li>
            <li class="nav-item">
               <a class="nav-link">
                  <img src="../asset/img/flag-eng.png" width="16" height="16" alt="">
               </a>
            </li>
            <li class="nav-item dropdown">
               <a data-bs-toggle="dropdown" href="#drop-themes" class="nav-link dropdown-toggle" id="bd-theme" aria-expanded="false">
                  <span class="theme-icon theme-icon-active">
                     <i class="fas fa-circle-half-stroke"></i>
                  </span>
                  <span class="d-none ms-2" id="bd-theme-text">
                     toggle theme
                  </span>
               </a>
               <ul class="dropdown-menu dropdown-menu-end" id="drop-themes" aria-labelledby="bd-theme-text">
                  <li>
                     <button class="dropdown-item media" data-bs-theme-value="auto" aria-pressed="false">
                        <span class="media-header theme-icon">
                           <i class="fas fa-circle-half-stroke"></i>
                        </span>
                        <span class="media-body">
                           Auto
                        </span>
                     </button>
                  </li>
                  <li><div class="dropdown-divider"></div></li>
                  <li>
                     <button class="dropdown-item media" data-bs-theme-value="dark" aria-pressed="false">
                        <span class="media-header theme-icon">
                           <i class="fas fa-moon"></i>
                        </span>
                        <span class="media-body">
                           Dark
                        </span>
                     </button>
                  </li>
                  <li><div class="dropdown-divider"></div></li>
                  <li>
                     <button class="dropdown-item media" data-bs-theme-value="light" aria-pressed="false">
                        <span class="media-header theme-icon">
                           <i class="fas fa-sun"></i>
                        </span>
                        <span class="media-body">
                           Light
                        </span>
                     </button>
                  </li>
               </ul>
            </li>
            <li class="nav-item">
               <a class="nav-link">
                  <i class="fas fa-bell"></i>
               </a>
            </li>
            <li class="nav-item dropdown">
               <a data-bs-toggle="dropdown" href="#drop-user" class="nav-link dropdown-toggle" aria-expanded="false">
                  <i class="far fa-user-circle"></i>
               </a>
               <ul class="dropdown-menu dropdown-menu-end" id="drop-user">
                  <li>
                     <a href="#" class="dropdown-item media">
                        <span class="media-header">
                           <i class="fas fa-user-alt"></i>
                        </span>
                        <span class="media-body">
                           Login
                        </span>
                     </a>
                  </li>
                  <li><div class="dropdown-divider"></div></li>
                  <li>
                     <a href="#" class="dropdown-item media">
                        <span class="media-header">
                           <i class="fas fa-user-alt"></i>
                        </span>
                        <span class="media-body">
                           Logup
                        </span>
                     </a>
                  </li>
                  <li><div class="dropdown-divider"></div></li>
                  <li>
                     <a href="#" class="dropdown-item media">
                        <span class="media-header">
                           <i class="fas fa-user-alt"></i>
                        </span>
                        <span class="media-body">
                           Logout
                        </span>
                     </a>
                  </li>
               </ul>
            </li>
         </ul>
      </div>
   </div><!-- end container -->
</nav><!-- end navbar -->`)