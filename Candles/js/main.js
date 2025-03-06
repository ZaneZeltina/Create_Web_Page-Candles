const menuBtn = document.querySelector('.header-menu__btn');
const menuMobile = document.querySelector('.header-menu__list');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('header-menu__list--active');
});

const swiperOne = new Swiper(".feedback__slider", {
  loop: true,
  slidesPerView: 1,
  speed: 6500,
  freeMode: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperTwo = new Swiper(".certificates__slider", {
  loop: true,
  slidesPerView: 3,
  speed: 6500,
  freeMode: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});