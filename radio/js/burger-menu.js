//-------------------------Burger-------------------------------------//

let burger = document.querySelector('#burger-btn-open');
let menu = document.querySelector('.nav-burger');
let menuLinks = menu.querySelectorAll('.nav__item-link');
let burgerClose = document.querySelector('.burger-btn-close');

burger.addEventListener('click',
    function () {
        menu.classList.add('nav-burger--active');
        document.body.classList.add('stop-scroll');
    });

burgerClose.addEventListener('click', function () {
    menu.classList.remove('nav-burger--active');
});

menuLinks.forEach(function(el) {
    el.addEventListener('click', function () {
        menu.classList.remove('nav-burger--active');
        document.body.classList.remove('stop-scroll');
    });
});