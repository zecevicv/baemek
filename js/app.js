/* #Header
  ======================================================= */
const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.header-hamburger');
const body = document.querySelector('body');

// Scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header-scroll');
  } else {
    header.classList.remove('header-scroll');
  }
});

if (window.scrollY > 50) {
  header.classList.add('header-scroll');
} else {
  header.classList.remove('header-scroll');
}

// Menu
if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    header.classList.toggle('show-menu');
    body.classList.toggle('no-scroll');
  });
}