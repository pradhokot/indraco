// $(document).ready(function () {
//    if ($(window).width() <= 991.98) {
//       $('#nav-product, #nav-store').removeAttr('href');
//    } else if ($(window).width() >= 992) {
//       $('#nav-product, #nav-store').removeAttr('data-bs-toggle data-bs-target');
//    }
// });

document.addEventListener('DOMContentLoaded', function () {
    const navProduct = document.getElementById('nav-product');
    const navStore = document.getElementById('nav-store');

    if (window.innerWidth <= 991.98) {
        navProduct.removeAttribute('href');
        navStore.removeAttribute('href');
    } else if (window.innerWidth >= 992) {
        navProduct.removeAttribute('data-bs-toggle');
        navProduct.removeAttribute('data-bs-target');
        navStore.removeAttribute('data-bs-toggle');
        navStore.removeAttribute('data-bs-target');
    }
});


const themeSelector = document.getElementById('theme-selector');

// Fungsi untuk mengatur tema
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    } else if (theme === 'light') {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    } else {
        // Otomatis: Cek preferensi tema pengguna
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (prefersDarkScheme.matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
}

// Cek preferensi tema pengguna saat halaman dimuat
setTheme('auto');

// Tambahkan event listener untuk perubahan tema
themeSelector.addEventListener('change', (e) => {
    setTheme(e.target.value);
});

// Tambahkan event listener untuk perubahan preferensi tema
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (e) => {
    if (themeSelector.value === 'auto') {
        setTheme(e.matches ? 'dark' : 'light');
    }
});