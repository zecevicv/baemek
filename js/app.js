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

/* #Accordion
================================================== */
const accordions = document.querySelectorAll('.accordion');

if (accordions) {
  accordions.forEach((accordion) => {
    const collapsibles = accordion.querySelectorAll('.collapsible');

    accordion.addEventListener('click', (e) => {
      if (e.target.closest('.collapse-toggler')) {
        e.preventDefault();

        const collapsible = e.target.closest('.collapsible');
        const collapse = collapsible.querySelector('.collapse');

        if (!accordion.classList.contains('no-close')) {
          collapsibles.forEach((coll) => {
            if (coll.classList.contains('show') && coll != collapsible) {
              collCollapse = coll.querySelector('.collapse');

              coll.classList.remove('show');
              gsap.to(collCollapse, {
                height: '0'
              });
            }
          });
        }

        collapsible.classList.toggle('show');

        if (collapsible.classList.contains('show')) {
          gsap.to(collapse, {
            height: 'auto',
            duration: .4,
            ease: 'power1.inOut'
          });
        } else {
          gsap.to(collapse, {
            height: '0'
          });
        }
      }
    });
  })
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

  // Clients Slider
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

  // Products Slider
  if (document.querySelector('.products-slider .swiper-container')) {
    new Swiper('.products-slider .swiper-container', {
      navigation: {
        nextEl: '.products-slider .swiper-next',
        prevEl: '.products-slider .swiper-prev',
      },
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          centeredSlides: true
        },
        1023: {
          slidesPerView: 3,
          centeredSlides: false
        }
      }
    });
  }

  // Product Info Slider
  if (document.querySelector('.product-info .swiper-container')) {
    new Swiper('.product-info .swiper-container', {
      breakpoints: {
        0: {
          allowTouchMove: true,
          slidesPerView: 1.35,
          centeredSlides: true,
          loop: true
        },
        1023: {
          allowTouchMove: false,
          slidesPerView: 4,
          centeredSlides: false,
          loop: false
        }
      }
    });
  }

  // Job Requirements Slider
  if (document.querySelector('.job-requirements .swiper-container')) {
    new Swiper('.job-requirements .swiper-container', {
      navigation: {
        nextEl: '.job-requirements .swiper-next',
        prevEl: '.job-requirements .swiper-prev',
      },
      breakpoints: {
        0: {
          allowTouchMove: true,
          slidesPerView: 2.25,
          centeredSlides: true,
          loop: true
        },
        1023: {
          allowTouchMove: false,
          slidesPerView: 8,
          centeredSlides: false,
          loop: false
        }
      }
    });
  }
});

/* #AOS Animations
    ======================================================= */
AOS.init({
  startEvent: 'load',
  once: true,
  duration: 800,
  offset: 300,
});