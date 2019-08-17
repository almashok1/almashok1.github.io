window.onscroll = function () {
    scrollFunction();
}
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav").classList.add('black');
    } else {
        document.getElementById("nav").classList.remove('black');
    }
}