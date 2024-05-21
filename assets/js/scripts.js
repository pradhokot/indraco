// get copyright year
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

// document on scrollTop
$(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
        $('body').addClass('scrollTop');
    } else {
        $('body').removeClass('scrollTop');
    }
});