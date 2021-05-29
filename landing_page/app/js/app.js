const hamburger = document.querySelector('#hamburger');
const header = document.querySelector('.header');
const overLay = document.querySelector('.overlay_menu');

header.addEventListener('click', openMenu);
function openMenu() {
 header.classList.toggle('open');
 if (header.classList.contains('open')) {
  overLay.classList.add('fade_in');
  overLay.classList.remove('fade_out');
 } else {
  overLay.classList.remove('fade_in');
  overLay.classList.add('fade_out');
 }
}
//

