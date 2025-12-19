const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    nav.classList.toggle('_active');
    body.classList.toggle('_active');
})