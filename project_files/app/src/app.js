const mobile = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile__menu");
mobile.addEventListener('click', open);
function open() {
 mobile.classList.toggle("openMobile");
 menu.classList.toggle("open");

}