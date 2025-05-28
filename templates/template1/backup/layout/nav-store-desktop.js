document.writeln(`
   <div class="dropdown position-static">
      <a href="store.html" class="nav-link py-lg-4" id="nav-store-d">
         official store
      </a>
      <div class="dropdown-menu position-absolute rounded-0 border-0 start-0 end-0 px-0" id="drop-store">
         <div class="container-lg">
            <h5 class="fs-4 opacity-50">
               <b class="fw-medium">Official Store</b>
            </h5>
            <hr>
            <div class="row g-0 flex-nowrap">
               <div class="col col-auto">
                  <nav class="nav nav-pills flex-column row-gap-2" role="tablist">
                     <a href="store.html#ecomm-section" class="nav-link p-0" id="nav-ecomm">
                        <span class="active" data-bs-toggle="pill" data-bs-target="#tab-ecomm">
                           E-commerce
                        </span>
                     </a>
                     <a href="store.html#market-section" class="nav-link p-0" id="nav-marketplace">
                        <span data-bs-toggle="pill" data-bs-target="#tab-marketplace">
                           marketplace
                        </span>
                     </a>
                  </nav>
               </div><!-- end col -->
               <div class="col col-auto">
                  <div class="vr h-100 mx-3"></div>
               </div><!-- end col -->
               <div class="col">
                  <div class="tab-content">
                     <div class="tab-pane fade show active" id="tab-ecomm">
                        <div class="row g-0 flex-nowrap">
                           <div class="col col-auto">
                              <nav class="nav nav-pills flex-column row-gap-2" role="tablist">
                                 <a href="#" class="nav-link p-0" id="nav-ecomm-indracostore">
                                    <span class="active" data-bs-toggle="pill" data-bs-target="#tab-ecomm-indracostore">
                                       INDRACO Store
                                    </span>
                                 </a>
                                 <a href="#" class="nav-link p-0" id="nav-ecomm-supresso">
                                    <span data-bs-toggle="pill" data-bs-target="#tab-ecomm-supresso">
                                       supresso
                                    </span>
                                 </a>
                              </nav>
                           </div><!-- end col -->
                           <div class="col col-auto">
                              <div class="vr h-100 mx-3"></div>
                           </div><!-- end col -->
                           <div class="col">
                              <div class="tab-content">
                                 <div class="tab-pane fade show active" id="tab-ecomm-indracostore">
                                    <img src="../assets/img/logo-indracostore.png" width="100%" height="auto" alt="" style="max-width: 16rem;">
                                 </div><!-- end tab ecomm indracostore -->
                                 <div class="tab-pane fade" id="tab-ecomm-supresso">
                                    <img src="../assets/img/logo-supresso-typograph.png" width="100%" height="auto" alt="" style="max-width: 16rem;">
                                 </div><!-- end tab ecomm supresso -->
                              </div><!-- end tab content -->
                           </div><!-- end col -->
                        </div><!-- end row -->
                     </div><!-- end tab ecomm -->
                     <div class="tab-pane fade" id="tab-marketplace">
                        <div class="row g-0 flex-nowrap">
                           <div class="col col-auto">
                              <nav class="nav nav-pills flex-column row-gap-2" role="tablist">
                                 <a href="#" class="nav-link p-0" id="nav-market-shopee">
                                    <span class="active" data-bs-toggle="pill" data-bs-target="#tab-market-shopee">
                                       shopee
                                    </span>
                                 </a>
                                 <a href="#" class="nav-link p-0" id="nav-market-lazada">
                                    <span data-bs-toggle="pill" data-bs-target="#tab-market-lazada">
                                       lazada
                                    </span>
                                 </a>
                                 <a href="#" class="nav-link p-0" id="nav-market-toped">
                                    <span data-bs-toggle="pill" data-bs-target="#tab-market-toped">
                                       tokopedia
                                    </span>
                                 </a>
                                 <a href="#" class="nav-link p-0" id="nav-market-blibli">
                                    <span data-bs-toggle="pill" data-bs-target="#tab-market-blibli">
                                       blibli
                                    </span>
                                 </a>
                                 <a href="#" class="nav-link p-0" id="nav-market-tiktok">
                                    <span data-bs-toggle="pill" data-bs-target="#tab-market-tiktok">
                                       tikTok shop
                                    </span>
                                 </a>
                              </nav>
                           </div><!-- end col -->
                           <div class="col col-auto">
                              <div class="vr h-100 mx-3"></div>
                           </div><!-- end col -->
                           <div class="col">
                              <div class="tab-content">
                                 <div class="tab-pane fade show active" id="tab-market-shopee">
                                    <img src="../assets/img/logo-shopee.png" width="100%" height="auto" alt="" style="max-width: 12rem;">
                                 </div><!-- end tab pane -->
                                 <div class="tab-pane fade" id="tab-market-lazada">
                                    <img src="../assets/img/logo-lazada.png" width="100%" height="auto" alt="" style="max-width: 12rem;">
                                 </div><!-- end tab pane -->
                                 <div class="tab-pane fade" id="tab-market-toped">
                                    <img src="../assets/img/logo-tokopedia.png" width="100%" height="auto" alt="" style="max-width: 14rem;">
                                 </div><!-- end tab pane -->
                                 <div class="tab-pane fade" id="tab-market-blibli">
                                    <img src="../assets/img/logo-blibli.png" width="100%" height="auto" alt="" style="max-width: 10rem;">
                                 </div><!-- end tab pane -->
                                 <div class="tab-pane fade" id="tab-market-tiktok">
                                    <img src="../assets/img/logo-tiktok.png" width="100%" height="auto" alt="" style="max-width: 16rem;">
                                 </div><!-- end tab pane -->
                              </div><!-- end tab content -->
                           </div><!-- end col -->
                        </div><!-- end row -->
                     </div><!-- end tab marketplace -->
                  </div><!-- end tab content -->
               </div><!-- end col -->
            </div><!-- end row -->
         </div><!-- end container -->
      </div>
   </div>`)