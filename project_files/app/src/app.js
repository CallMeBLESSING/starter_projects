const mobile = document.querySelector(".nav__mobile");
mobile.addEventListener('click', open);
function open() {
 mobile.classList.toggle("openMobile");
}