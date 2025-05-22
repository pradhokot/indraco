document.write(`
<div class="dropdown">
   <button class="nav-link dropdown-toggle text-capitalize text-light px-0" id="bd-theme" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="theme-icon theme-icon-active">
         <i class="bi bi-circle-half"></i>
      </span>
      <span class="d-none ms-2" id="bd-theme-text">
         toggle theme
      </span>
   </button>
   <ul class="dropdown-menu dropdown-menu-end position-absolute border-dark-subtle" aria-labelledby="bd-theme-text">
      <li>
         <button class="dropdown-item" data-bs-theme-value="light" aria-pressed="false">
            <span class="me-2 opacity-50 theme-icon">
               <i class="bi bi-sun-fill"></i>
            </span>
            Light
         </button>
      </li>
      <li>
         <button class="dropdown-item" data-bs-theme-value="dark" aria-pressed="false">
            <span class="me-2 opacity-50 theme-icon">
               <i class="bi bi-moon-stars-fill"></i>
            </span>
            Dark
         </button>
      </li>
      <li>
         <button class="dropdown-item" data-bs-theme-value="auto" aria-pressed="true">
            <span class="me-2 opacity-50 theme-icon">
               <i class="bi bi-circle-half"></i>
            </span>
            Auto
         </button>
      </li>
   </ul>
</div>
`)