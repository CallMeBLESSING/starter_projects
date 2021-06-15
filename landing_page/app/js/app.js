const hamburger = document.querySelector('#hamburger');
const header = document.querySelector('.header');
const overLay = document.querySelector('.overlay_menu');
const fadeElements = document.querySelectorAll('.fade');
const body = document.querySelector('body');

header.addEventListener('click', openMenu);
function openMenu() {
 header.classList.toggle('open');
 if(header.classList.contains('open')) {
  body.classList.add('noScroll');
  fadeElements.forEach(function (e) {
   e.classList.remove('fade_out');
   e.classList.add('fade_in');
  });
 } else {
  body.classList.remove('noScroll');
  fadeElements.forEach(function (e) {
   e.classList.add('fade_out');
   e.classList.remove('fade_in');
  });
 }
}
//