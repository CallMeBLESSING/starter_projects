const hamburger = document.querySelector('.header__hamburger');
const header = document.querySelector('.header');
const fadeElements = document.querySelectorAll('.fade');

hamburger.addEventListener('click', openMenu);
function openMenu() {
 header.classList.toggle('open');
 if (header.classList.contains('open')) {
  fadeElements.forEach((e) => {
   e.classList.add('fadeIn');
   e.classList.remove('fadeOut');
  })
 } else {
  fadeElements.forEach((e) => {
   e.classList.add('fadeOut');
   e.classList.remove('fadeIn');
  })
 }
}
