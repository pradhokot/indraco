document.writeln(`
   <div id="modal-search" class="modal fade" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
         <div class="modal-content rounded-1">
            <div class="modal-header border-0">
               <form action="" class="form-search input-group align-items-center border border-3 rounded-1 bg-white ps-3">
                  <label for="" class="form-label col-form-label-lg m-0">
                     <i class="fas fa-search"></i>
                  </label>
                  <input type="search" class="form-control form-control-lg rounded-0 bg-transparent border-0 shadow-none" placeholder="Search">
               </form>
            </div>
            <div class="modal-body d-flex flex-column row-gap-4">
               <div>
                  <h5 class="small">Recent</h5>
                  <ul class="list-group list-group-flush recent-list">
                     <li class="list-group-item px-0 position-relative">
                        <a href="" class="text-decoration-none">How it works</a>
                     </li>
                     <li class="list-group-item px-0 position-relative">
                        <a href="" class="text-decoration-none">How it works</a>
                     </li>
                     <li class="list-group-item px-0 position-relative">
                        <a href="" class="text-decoration-none">How it works</a>
                     </li>
                     <li class="list-group-item px-0 position-relative">
                        <a href="" class="text-decoration-none">How it works</a>
                     </li>
                     <li class="list-group-item px-0 position-relative">
                        <a href="" class="text-decoration-none">How it works</a>
                     </li>
                  </ul>
               </div>
               <div>
                  <h5 class="small">Result (3)</h5>
                  <ul class="list-group list-group-flush result-list">
                     <li class="list-group-item px-0 position-relative">
                        <a href="" class="text-decoration-none">How it works</a>
                     </li>
                     <li class="list-group-item px-0 position-relative">
                        <a href="" class="text-decoration-none">How it works</a>
                     </li>
                     <li class="list-group-item px-0 position-relative">
                        <a href="" class="text-decoration-none">How it works</a>
                     </li>
                     <li class="list-group-item px-0 position-relative">
                        <a href="" class="text-decoration-none">How it works</a>
                     </li>
                     <li class="list-group-item px-0 position-relative">
                        <a href="" class="text-decoration-none">How it works</a>
                     </li>
                  </ul>
               </div>
            </div>
            <div class="modal-footer border-0">
               <button type="button" class="btn btn-outline-dark rounded-1">Clear & Reset</button>       
               <button type="button" class="btn btn-dark rounded-1" data-bs-dismiss="modal">Close</button>
            </div>
         </div>
      </div>
   </div><!-- end modal -->`)