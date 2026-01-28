document.writeln(`
   <header class="sticky-top border-bottom">
      <nav aria-label="Main navigation" class="navbar navbar-expand-lg d-block py-3 py-lg-4">
         <div class="navbar-mobile d-block d-lg-none">
            <div class="container d-grid align-items-center gap-3" style="grid-template-columns: auto 1fr;">
               <div>
                  <a href="index.html" class="navbar-brand d-flex">
                     <img src="../assets/img/logo-indraco.png" data-light="../assets/img/logo-indraco.png" data-dark="../assets/img/logo-indraco-invert.png" alt="INDRACO Logo" class="w-100 img-fluid theme-image" style="max-width: 10rem;">
                  </a>
               </div>
               <div class="d-flex align-items-center gap-3">
                  <ul class="list-unstyled mb-0 d-flex align-items-center ms-auto gap-3">
                     <li>
                        <button class="theme-toggle d-flex" aria-label="Toggle theme">
                           <svg class="theme-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                              <!-- Sun -->
                              <g class="icon-sun">
                                 <circle cx="12" cy="12" r="5" fill="currentColor"/>
                                 <g stroke="currentColor" stroke-width="2"> 
                                    <line x1="12" y1="1" x2="12" y2="4"/>
                                    <line x1="12" y1="20" x2="12" y2="23"/>
                                    <line x1="1" y1="12" x2="4" y2="12"/>
                                    <line x1="20" y1="12" x2="23" y2="12"/>
                                    <line x1="4.2" y1="4.2" x2="6.3" y2="6.3"/>
                                    <line x1="17.7" y1="17.7" x2="19.8" y2="19.8"/>
                                    <line x1="4.2" y1="19.8" x2="6.3" y2="17.7"/>
                                    <line x1="17.7" y1="6.3" x2="19.8" y2="4.2"/>
                                 </g>
                              </g>
                     
                              <!-- Moon -->
                              <g class="icon-moon">
                                 <path d="M21 12.8A9 9 0 1111.2 3 a7 7 0 109.8 9.8z" fill="currentColor"/>
                              </g>
                           </svg>
                        </button>
                     </li>
                     <li>
                        <a href="contact.html" class="text-reset text-decoration-none d-flex">
                           <svg width="18" height="18" viewBox="0 0 640 640"><path fill="currentColor" d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>
                        </a>
                     </li>
                     <li>
                        <a href="#" target="_blank" class="text-reset text-decoration-none d-flex">
                           <svg width="18" height="18" viewBox="0 0 640 640"><path fill="currentColor" d="M94.7 136.3C101.6 112.4 123.5 96 148.4 96L492.4 96C517.3 96 539.2 112.4 546.2 136.3L569.6 216.5C582.4 260.2 549.5 304 504 304C477.7 304 454.6 289.1 443.2 266.9C431.6 288.8 408.6 304 381.8 304C355.2 304 332.1 289 320.5 267C308.9 289 285.8 304 259.2 304C232.4 304 209.4 288.9 197.8 266.9C186.4 289 163.3 304 137 304C91.4 304 58.6 260.3 71.4 216.5L94.7 136.3zM160.4 416L480.4 416L480.4 349.6C488 351.2 495.9 352 503.9 352C518.2 352 531.9 349.4 544.4 344.8L544.4 496C544.4 522.5 522.9 544 496.4 544L144.4 544C117.9 544 96.4 522.5 96.4 496L96.4 344.8C108.9 349.4 122.5 352 136.9 352C145 352 152.8 351.2 160.4 349.6L160.4 416z"/></svg>
                        </a>
                     </li>
                     <li>
                        <a href="#" class="text-reset text-decoration-none d-flex">
                           ID
                        </a>
                     </li>
                  </ul>
                  <button class="navbar-toggler rounded-0 p-0 border-0 shadow-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-mobile">
                     <span class="navbar-toggler-icon"></span>
                  </button>
               </div>
            </div>
         </div>
         <div class="navbar-desktop d-none d-lg-block">
            <div class="container d-grid align-items-center gap-3" style="grid-template-columns: 1fr auto 1fr;">
               <div class="d-flex">
                  <a href="index.html" class="navbar-brand d-flex">
                     <img src="../assets/img/logo-indraco.png" data-light="../assets/img/logo-indraco.png" data-dark="../assets/img/logo-indraco-invert.png" alt="INDRACO Logo" class="w-100 img-fluid theme-image" style="max-width: 12rem;">
                  </a>
               </div>
               <div>
                  <nav aria-label="Primary navigation (desktop)">
                     <ul class="list-unstyled mb-0 d-flex flex-wrap align-items-center gap-4 column-gap-xl-5 text-capitalize">
                        <li><a href="about.html" class="link-hover-underline">tentang kami</a></li>
                        <li><a href="product.html" class="link-hover-underline">produk</a></li>
                        <li><a href="download.html" class="link-hover-underline">unduh</a></li>
                        <li><a href="article.html" class="link-hover-underline">berita & acara</a></li>
                        <li><a href="career.html" class="link-hover-underline">karir</a></li>
                     </ul>
                  </nav>
               </div>
               <div>
                  <ul class="list-unstyled mb-0 d-flex align-items-center gap-3 column-gap-4 float-end">
                     <li>
                        <button class="theme-toggle d-flex" aria-label="Toggle theme">
                           <svg class="theme-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                              <!-- Sun -->
                              <g class="icon-sun">
                                 <circle cx="12" cy="12" r="5" fill="currentColor"/>
                                 <g stroke="currentColor" stroke-width="2">
                                    <line x1="12" y1="1" x2="12" y2="4"/>
                                    <line x1="12" y1="20" x2="12" y2="23"/>
                                    <line x1="1" y1="12" x2="4" y2="12"/>
                                    <line x1="20" y1="12" x2="23" y2="12"/>
                                    <line x1="4.2" y1="4.2" x2="6.3" y2="6.3"/>
                                    <line x1="17.7" y1="17.7" x2="19.8" y2="19.8"/>
                                    <line x1="4.2" y1="19.8" x2="6.3" y2="17.7"/>
                                    <line x1="17.7" y1="6.3" x2="19.8" y2="4.2"/>
                                 </g>
                              </g>
                     
                              <!-- Moon -->
                              <g class="icon-moon">
                                 <path d="M21 12.8A9 9 0 1111.2 3 a7 7 0 109.8 9.8z" fill="currentColor"/>
                              </g>
                           </svg>
                        </button>
                     </li>
                     <li>
                        <a href="contact.html" class="text-reset text-decoration-none d-flex">
                           <svg width="18" height="18" viewBox="0 0 640 640"><path fill="currentColor" d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>
                        </a>
                     </li>
                     <li>
                        <a href="#" target="_blank" class="text-reset text-decoration-none d-flex">
                           <svg width="18" height="18" viewBox="0 0 640 640"><path fill="currentColor" d="M94.7 136.3C101.6 112.4 123.5 96 148.4 96L492.4 96C517.3 96 539.2 112.4 546.2 136.3L569.6 216.5C582.4 260.2 549.5 304 504 304C477.7 304 454.6 289.1 443.2 266.9C431.6 288.8 408.6 304 381.8 304C355.2 304 332.1 289 320.5 267C308.9 289 285.8 304 259.2 304C232.4 304 209.4 288.9 197.8 266.9C186.4 289 163.3 304 137 304C91.4 304 58.6 260.3 71.4 216.5L94.7 136.3zM160.4 416L480.4 416L480.4 349.6C488 351.2 495.9 352 503.9 352C518.2 352 531.9 349.4 544.4 344.8L544.4 496C544.4 522.5 522.9 544 496.4 544L144.4 544C117.9 544 96.4 522.5 96.4 496L96.4 344.8C108.9 349.4 122.5 352 136.9 352C145 352 152.8 351.2 160.4 349.6L160.4 416z"/></svg>
                        </a>
                        </a>
                     </li>
                     <li>
                        <a href="#" class="text-reset text-decoration-none d-flex">
                           ID
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </nav>
   </header>
`)