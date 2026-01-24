document.write(`
<div class="dropdown">
   <button class="nav-link dropdown-toggle" id="bd-theme" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="theme-icon theme-icon-active">
         <i class="bi bi-circle-half"></i>
         <!-- <i class="fas fa-circle-half-stroke"></i> -->
      </span>
      <span class="d-none ms-2" id="bd-theme-text">
         toggle theme
      </span>
   </button>
   <ul class="dropdown-menu position-absolute dropdown-menu-end border-dark-subtle" aria-labelledby="bd-theme-text">
      <li>
         <button class="dropdown-item" data-bs-theme-value="light" aria-pressed="false">
            <span class="me-2 opacity-50 theme-icon">
               <i class="bi bi-sun-fill"></i>
               <!-- <i class="fas fa-sun"></i> -->
            </span>
            Light
         </button>
      </li>
      <li>
         <button class="dropdown-item" data-bs-theme-value="dark" aria-pressed="false">
            <span class="me-2 opacity-50 theme-icon">
               <i class="bi bi-moon-stars-fill"></i>
               <!-- <i class="fas fa-moon"></i> -->
            </span>
            Dark
         </button>
      </li>
      <li>
         <button class="dropdown-item" data-bs-theme-value="auto" aria-pressed="true">
            <span class="me-2 opacity-50 theme-icon">
               <i class="bi bi-circle-half"></i>
               <!-- <i class="fas fa-circle-half-stroke"></i> -->
            </span>
            Auto
         </button>
      </li>
   </ul>
</div>
`);

(() => {
   'use strict'

   const storedTheme = localStorage.getItem('theme')

   const getPreferredTheme = () => {
      if (storedTheme) {
         return storedTheme
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
   }

   const setTheme = function (theme) {
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
         document.documentElement.setAttribute('data-bs-theme', 'dark')
      } else {
         document.documentElement.setAttribute('data-bs-theme', theme)
      }
   }

   setTheme(getPreferredTheme())

   const showActiveTheme = (theme, focus = false) => {
      const themeSwitcher = document.querySelector('#bd-theme')

      if (!themeSwitcher) {
         return
      }

      const themeSwitcherText = document.querySelector('#bd-theme-text')
      const activeThemeIcon = document.querySelector('.theme-icon-active i')
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
      const iconOfActiveBtn = btnToActive.querySelector('.theme-icon i').getAttribute('class')

      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
         element.classList.remove('active')
         element.setAttribute('aria-pressed', 'false')
      })

      btnToActive.classList.add('active')
      btnToActive.setAttribute('aria-pressed', 'true')
      activeThemeIcon.setAttribute('class', iconOfActiveBtn)
      const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
      themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

      if (focus) {
         themeSwitcher.focus()
      }
   }

   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (storedTheme !== 'light' || storedTheme !== 'dark') {
         setTheme(getPreferredTheme())
      }
   })

   window.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(getPreferredTheme())

      document.querySelectorAll('[data-bs-theme-value]')
         .forEach(toggle => {
            toggle.addEventListener('click', () => {
               const theme = toggle.getAttribute('data-bs-theme-value')
               localStorage.setItem('theme', theme)
               setTheme(theme)
               showActiveTheme(theme, true)
            })
         })
   })
})();