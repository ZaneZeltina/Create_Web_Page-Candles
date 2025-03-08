const menuBtn = document.querySelector('.header-menu__btn');
const menuMobile = document.querySelector('.header-menu__list');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('header-menu__list--active');
});

const swiperOne = new Swiper('.feedback__slider', {
  loop: true,
  slidesPerView: 1,
  speed: 6500,
  freeMode: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperTwo = new Swiper('.certificates__slider', {
  loop: true,
  slidesPerView: 3,
  speed: 6500,
  freeMode: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  },
});

const accordion = document.querySelector('.accordion');
const accordionTitles = accordion.querySelectorAll('.accordion__title');

accordionTitles.forEach.call(accordionTitles, function (accordionTitle) {
  accordionTitle.addEventListener('click', function () {

    const currentText = accordionTitle.parentElement.querySelector('.accordion__text');

    accordionTitle.classList.toggle('accordion__title--active');
    currentText.classList.toggle('accordion__text--visible');

    if (currentText.classList.contains('accordion__text--visible')) {
      currentText.style.maxHeight = currentText.scrollHeight + 'px';
    }
    else {
      currentText.style.maxHeight = null;
    }

  });
});
