//---------------------------------Search-bar-----------------------------------//

document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#search__btn').addEventListener('click', function (){
        document.querySelector('#search__form').classList.add('search__form-active')
    });

    document.addEventListener("click", function (e) {
        let target = e.target;
        let searchform = document.querySelector("#search__form");
        if (!target.closest(".header__search")) {
            searchform.classList.remove("search__form-active");
            searchform.querySelector(".search-bar").value = "";
        }
    });

//---------------------------------Scroll to block-----------------------------------//

    const anchors = document.querySelectorAll('.nav-top__list a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

//---------------------------------Header__play-stop-----------------------------------//

    document.querySelectorAll(".on-air__play-btn").forEach(item => {
        item.addEventListener("click", function () {
            item.querySelector('.on-air__play-icon').classList.toggle('on-air__play-icon-disable');
            item.querySelector('.on-air__stop-icon').classList.toggle('on-air__stop-icon-active');
        })
    });

//---------------------------------Accordion-----------------------------------//

    $( function() {
        $( ".accordion" ).accordion({
            heightStyle: "content",
            active: false,
            collapsible: true,
        });
    });

//------Guest-info-------//

    document.querySelector('#guest-6').addEventListener('click', function (){
        document.querySelector('#guest__info-6').classList.toggle('guest__info-active')
        document.querySelector('#plug').classList.toggle('guest__plug-disable')

    });

//---------------------------------Select-----------------------------------//


const element = document.querySelector('#custom-select');
const choices = new Choices(element, {
    searchEnabled: false,
    searchChoices: false,
    labelId: 'choices--custom-select-item-choice-1, choices--custom-select-item-choice-2, choices--custom-select-item-choice-3, choices--custom-select-item-choice-4',
    itemSelectText: '',
    shouldSortItems: true,
    sorter: () => {},
});

//---------------------------------Podcast--------------------------------------------//

//-------Play-stop-button---------//

    document.querySelectorAll('.podcast__play-btn').forEach(item => {
        item.addEventListener('click', function () {
            item.querySelector('.podcast__play-icon').classList.toggle('podcast__play-icon-disable');
            item.querySelector('.podcast__stop-icon').classList.toggle('podcast__stop-icon-active');
        })
    });

//-------More-button---------//

    document.querySelector('.podcast__btn').addEventListener('click', function (){
        document.querySelectorAll('.podcast__item-overflow').forEach(el => el.classList.toggle('podcast__item-active'))
       });


//---------------------------------Validator-----------------------------------//

    const validation = new JustValidate('#form');

    validation
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Ошибка',
            },

            {
                rule: 'minLength',
                value: 3,
            },
        ])

        .addField('#email', [
            {
                rule: 'email',
                errorMessage: 'Ошибка',

            },
        ]);

//---------------------------------Burger-menu-----------------------------------//

    document.querySelector('#burger__btn-open').addEventListener('click', function (){
        document.querySelector('.burger__nav').classList.toggle('burger__nav-active')
    });

    document.querySelector('.burger__btn-close').addEventListener('click', function (){
        document.querySelector('.burger__nav').classList.toggle('burger__nav-active')
    });

//---------------------------------On-air-768-----------------------------------//

    document.querySelector('.on-air__container-initialization').addEventListener('click', function (){
        document.querySelector('.on-air__top-menu').classList.toggle('on-air__top-menu-active')
    });


//---------------------------------On-air-320-----------------------------------//

    document.querySelector('.on-air__burger-btn').addEventListener('click', function (){
        document.querySelector('.on-air__burger-opened').classList.toggle('on-air__burger-opened-active')
        document.querySelector('.on-air__burger-icon').classList.toggle('on-air__burger-icon-active')
        document.querySelector('.header__bottom').classList.toggle('header__bottom-active')
    });

//---------------------------------Swiper-320-----------------------------------//

const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: 5,
    spaceBetween: 15,
    focusableElements: 'button',
    width: 1600,

});





});
