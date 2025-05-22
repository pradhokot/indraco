document.writeln(`
<aside class="offcanvas offcanvas-start sidebar" z-index="-1" id="menu">
   <div class="offcanvas-header sidebar-header">
      <img src="../asset/img/logo-indraco.png" class="logo img-default" width="100%" height="auto" alt="">
      <img src="../asset/img/logo-indraco-invert.png" class="logo img-invert" width="100%" height="auto" alt="">
      <button data-bs-toggle="offcanvas" data-bs-target="#menu" class="btn-close d-lg-none rounded-0 shadow-none"></button>
   </div><!-- end sidebar header -->
   <div class="offcanvas-body sidebar-body">

      <ul class="list-group list-group-flush sidebar-list">
         <li class="list-group-item sidebar-item">
            <ul class="nav menu-list">
               <li class="nav-item menu-item">
                  <a href="admin.html" class="nav-link menu-link media">
                     <span class="media-header">
                        <i class="fas fa-home"></i>
                     </span>
                     <span class="media-body">
                        dashboard
                     </span>
                  </a>
               </li><!-- end menu item -->
               <li class="nav-item menu-item">
                  <a href="index.html" target="_blank" class="nav-link menu-link media">
                     <span class="media-header">
                        <i class="fas fa-globe"></i>
                     </span>
                     <span class="media-body">
                        preview
                     </span>
                  </a>
               </li><!-- end menu item -->
            </ul><!-- end menu list -->
         </li><!-- end sidebar item -->
         <li class="list-group-item sidebar-item">
            <div class="sidebar-section">
               <header>
                  <h5 class="sidebar-section-title">
                     products
                  </h5>
               </header>
               <main>
                  <ul class="nav menu-list">
                     <li class="nav-item menu-item">
                        <a data-bs-toggle="collapse" href="#collapse-menu1" class="nav-link menu-link collapse-toggle collapsed media">
                           <span class="media-header">
                              <i class="fas fa-chevron-circle-down"></i>
                           </span>
                           <span class="media-body">menu1</span>
                        </a>
                        <div class="collapse collapse-menu" id="collapse-menu1" data-bs-parent="#menu">
                           <div class="submenu">
                              <ul class="nav submenu-list">
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu1</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu2</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu3</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu4</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu5</span>
                                    </a>
                                 </li><!-- end submenu item -->
                              </ul><!-- end submenu list -->
                           </div><!-- end submenu -->
                        </div>
                     </li><!-- end menu item -->
                     <li class="nav-item menu-item">
                        <a data-bs-toggle="collapse" href="#collapse-menu2" class="nav-link menu-link collapse-toggle collapsed media">
                           <span class="media-header">
                              <i class="fas fa-chevron-circle-down"></i>
                           </span>
                           <span class="media-body">menu2</span>
                        </a>
                        <div class="collapse collapse-menu" id="collapse-menu2" data-bs-parent="#menu">
                           <div class="submenu">
                              <ul class="nav submenu-list">
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu1</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu2</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu3</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu4</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu5</span>
                                    </a>
                                 </li><!-- end submenu item -->
                              </ul><!-- end submenu list -->
                           </div><!-- end submenu -->
                        </div>
                     </li><!-- end menu item -->
                     <li class="nav-item menu-item">
                        <a data-bs-toggle="collapse" href="#collapse-menu3" class="nav-link menu-link collapse-toggle collapsed media">
                           <span class="media-header">
                              <i class="fas fa-chevron-circle-down"></i>
                           </span>
                           <span class="media-body">menu3</span>
                        </a>
                        <div class="collapse collapse-menu" id="collapse-menu3" data-bs-parent="#menu">
                           <div class="submenu">
                              <ul class="nav submenu-list">
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu1</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu2</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu3</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu4</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu5</span>
                                    </a>
                                 </li><!-- end submenu item -->
                              </ul><!-- end submenu list -->
                           </div><!-- end submenu -->
                        </div>
                     </li><!-- end menu item -->
                  </ul><!-- end menu list -->
               </main>
            </div><!-- end sidebar section -->
         </li><!-- end sidebar item -->
         <li class="list-group-item sidebar-item">
            <div class="sidebar-section">
               <header>
                  <h5 class="sidebar-section-title">
                     career
                  </h5>
               </header>
               <main>
                  <ul class="nav menu-list">
                     <li class="nav-item menu-item">
                        <a data-bs-toggle="collapse" href="#collapse-menu4" class="nav-link menu-link collapse-toggle collapsed media">
                           <span class="media-header">
                              <i class="fas fa-chevron-circle-down"></i>
                           </span>
                           <span class="media-body">menu4</span>
                        </a>
                        <div class="collapse collapse-menu" id="collapse-menu4" data-bs-parent="#menu">
                           <div class="submenu">
                              <ul class="nav submenu-list">
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu1</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu2</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu3</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu4</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu5</span>
                                    </a>
                                 </li><!-- end submenu item -->
                              </ul><!-- end submenu list -->
                           </div><!-- end submenu -->
                        </div>
                     </li><!-- end menu item -->
                     <li class="nav-item menu-item">
                        <a data-bs-toggle="collapse" href="#collapse-menu5" class="nav-link menu-link collapse-toggle collapsed media">
                           <span class="media-header">
                              <i class="fas fa-chevron-circle-down"></i>
                           </span>
                           <span class="media-body">menu5</span>
                        </a>
                        <div class="collapse collapse-menu" id="collapse-menu5" data-bs-parent="#menu">
                           <div class="submenu">
                              <ul class="nav submenu-list">
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu1</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu2</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu3</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu4</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu5</span>
                                    </a>
                                 </li><!-- end submenu item -->
                              </ul><!-- end submenu list -->
                           </div><!-- end submenu -->
                        </div>
                     </li><!-- end menu item -->
                     <li class="nav-item menu-item">
                        <a data-bs-toggle="collapse" href="#collapse-menu6" class="nav-link menu-link collapse-toggle collapsed media">
                           <span class="media-header">
                              <i class="fas fa-chevron-circle-down"></i>
                           </span>
                           <span class="media-body">menu6</span>
                        </a>
                        <div class="collapse collapse-menu" id="collapse-menu6" data-bs-parent="#menu">
                           <div class="submenu">
                              <ul class="nav submenu-list">
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu1</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu2</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu3</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu4</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu5</span>
                                    </a>
                                 </li><!-- end submenu item -->
                              </ul><!-- end submenu list -->
                           </div><!-- end submenu -->
                        </div>
                     </li><!-- end menu item -->
                  </ul><!-- end menu list -->
               </main>
            </div><!-- end sidebar section -->
         </li><!-- end sidebar item -->
         <li class="list-group-item sidebar-item">
            <div class="sidebar-section">
               <header>
                  <h5 class="sidebar-section-title">
                     news & events
                  </h5>
               </header>
               <main>
                  <ul class="nav menu-list">
                     <li class="nav-item menu-item">
                        <a data-bs-toggle="collapse" href="#collapse-menu7" class="nav-link menu-link collapse-toggle collapsed media">
                           <span class="media-header">
                              <i class="fas fa-chevron-circle-down"></i>
                           </span>
                           <span class="media-body">menu7</span>
                        </a>
                        <div class="collapse collapse-menu" id="collapse-menu7" data-bs-parent="#menu">
                           <div class="submenu">
                              <ul class="nav submenu-list">
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu1</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu2</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu3</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu4</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu5</span>
                                    </a>
                                 </li><!-- end submenu item -->
                              </ul><!-- end submenu list -->
                           </div><!-- end submenu -->
                        </div>
                     </li><!-- end menu item -->
                     <li class="nav-item menu-item">
                        <a data-bs-toggle="collapse" href="#collapse-menu8" class="nav-link menu-link collapse-toggle collapsed media">
                           <span class="media-header">
                              <i class="fas fa-chevron-circle-down"></i>
                           </span>
                           <span class="media-body">menu8</span>
                        </a>
                        <div class="collapse collapse-menu" id="collapse-menu8" data-bs-parent="#menu">
                           <div class="submenu">
                              <ul class="nav submenu-list">
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu1</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu2</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu3</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu4</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu5</span>
                                    </a>
                                 </li><!-- end submenu item -->
                              </ul><!-- end submenu list -->
                           </div><!-- end submenu -->
                        </div>
                     </li><!-- end menu item -->
                     <li class="nav-item menu-item">
                        <a data-bs-toggle="collapse" href="#collapse-menu9" class="nav-link menu-link collapse-toggle collapsed media">
                           <span class="media-header">
                              <i class="fas fa-chevron-circle-down"></i>
                           </span>
                           <span class="media-body">menu9</span>
                        </a>
                        <div class="collapse collapse-menu" id="collapse-menu9" data-bs-parent="#menu">
                           <div class="submenu">
                              <ul class="nav submenu-list">
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu1</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu2</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu3</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu4</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu5</span>
                                    </a>
                                 </li><!-- end submenu item -->
                              </ul><!-- end submenu list -->
                           </div><!-- end submenu -->
                        </div>
                     </li><!-- end menu item -->
                  </ul><!-- end menu list -->
               </main>
            </div><!-- end sidebar section -->
         </li><!-- end sidebar item -->
         <li class="list-group-item sidebar-item">
            <div class="sidebar-section">
               <header>
                  <h5 class="sidebar-section-title">
                     account
                  </h5>
               </header>
               <main>
                  <ul class="nav menu-list">
                     <li class="nav-item menu-item">
                        <a data-bs-toggle="collapse" href="#collapse-menu0" class="nav-link menu-link collapse-toggle collapsed media">
                           <span class="media-header">
                              <i class="fas fa-chevron-circle-down"></i>
                           </span>
                           <span class="media-body">menu0</span>
                        </a>
                        <div class="collapse collapse-menu" id="collapse-menu0" data-bs-parent="#menu">
                           <div class="submenu">
                              <ul class="nav submenu-list">
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu1</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu2</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu3</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu4</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu5</span>
                                    </a>
                                 </li><!-- end submenu item -->
                              </ul><!-- end submenu list -->
                           </div><!-- end submenu -->
                        </div>
                     </li><!-- end menu item -->
                     <li class="nav-item menu-item">
                        <a data-bs-toggle="collapse" href="#collapse-menu0" class="nav-link menu-link collapse-toggle collapsed media">
                           <span class="media-header">
                              <i class="fas fa-chevron-circle-down"></i>
                           </span>
                           <span class="media-body">menu0</span>
                        </a>
                        <div class="collapse collapse-menu" id="collapse-menu0" data-bs-parent="#menu">
                           <div class="submenu">
                              <ul class="nav submenu-list">
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu1</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu2</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu3</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu4</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu5</span>
                                    </a>
                                 </li><!-- end submenu item -->
                              </ul><!-- end submenu list -->
                           </div><!-- end submenu -->
                        </div>
                     </li><!-- end menu item -->
                     <li class="nav-item menu-item">
                        <a data-bs-toggle="collapse" href="#collapse-menu0" class="nav-link menu-link collapse-toggle collapsed media">
                           <span class="media-header">
                              <i class="fas fa-chevron-circle-down"></i>
                           </span>
                           <span class="media-body">menu0</span>
                        </a>
                        <div class="collapse collapse-menu" id="collapse-menu0" data-bs-parent="#menu">
                           <div class="submenu">
                              <ul class="nav submenu-list">
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu1</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu2</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu3</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu4</span>
                                    </a>
                                 </li><!-- end submenu item -->
                                 <li class="nav-item submenu-item">
                                    <a href="#" class="nav-link submenu-link">
                                       <span>submenu5</span>
                                    </a>
                                 </li><!-- end submenu item -->
                              </ul><!-- end submenu list -->
                           </div><!-- end submenu -->
                        </div>
                     </li><!-- end menu item -->
                  </ul><!-- end menu list -->
               </main>
            </div><!-- end sidebar section -->
         </li><!-- end sidebar item -->
      </ul><!-- end sidebar list -->

   </div><!-- end sidebar body -->
   <div class="offcanvas-header sidebar-footer">
      <div class="media">
         <div class="media-header">
            <i class="fas fa-gear"></i>
         </div>
         <div class="media-body">
            <span>Settings</span>
         </div>
      </div>
   </div><!-- end sidebar footer -->
</aside><!-- end sidebar -->`)