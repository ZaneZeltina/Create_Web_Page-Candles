const menuBtn = document.querySelector('.header-menu__btn');
const menuMobile = document.querySelector('.header-menu__list');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('header-menu__list--active');
});