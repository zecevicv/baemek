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

// Close on outside click
document.addEventListener('click', (e) => {
  if (document.querySelector('.header.show-menu') && !e.target.closest('.header')) {
    header.classList.remove('show-menu');
    body.classList.remove('no-scroll');
  }
});

/* #Tabs
  ======================================================= */
const tabs = document.querySelectorAll('.tabs');

if (tabs) {
  tabs.forEach((tab) => {
    const tabBtns = tab.querySelectorAll('.tab-btn');
    const tabPanels = tab.querySelectorAll('.tab-panel');

    tabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const tabPanel = tab.querySelector(tabBtn.dataset.tab);

        tabBtns.forEach((btn) => {
          if (btn == tabBtn) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });

        tabPanels.forEach((panel) => {
          if (panel == tabPanel) {
            panel.classList.add('active');
          } else {
            panel.classList.remove('active');
          }
        });

      });
    });
  });
}

/* #Sliders
  ======================================================= */

window.addEventListener('load', () => {
  // Posts Slider
  if (document.querySelector('.posts-slider .swiper-container')) {
    new Swiper('.posts-slider .swiper-container', {
      loop: true,
      pagination: {
        el: '.posts-slider .swiper-pagination',
      },
      breakpoints: {
        0: {
          allowTouchMove: true,
          slidesPerView: 1.25
        },
        1023: {
          allowTouchMove: false,
          slidesPerView: 3
        }
      }
    });
  }

  // Posts Slider
  if (document.querySelector('.clients .swiper-container')) {
    new Swiper('.clients .swiper-container', {
      breakpoints: {
        0: {
          allowTouchMove: true,
          slidesPerView: 2,
          centeredSlides: true,
          loop: true
        },
        1023: {
          allowTouchMove: false,
          slidesPerView: 11,
          centeredSlides: false,
          loop: false
        }
      }
    });
  }
});