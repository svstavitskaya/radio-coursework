//---------------------------------Search-bar-----------------------------------//

document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#search-btn').addEventListener('click', function (){
        document.querySelector('#search-form').classList.add('search-form--active')
    });

    document.addEventListener("click", function (e) {
        let target = e.target;
        let searchform = document.querySelector("#search-form");
        if (!target.closest(".header__search")) {
            searchform.classList.remove("search-form--active");
            searchform.querySelector(".search-bar").value = "";
        }
    });

//---------------------------------Scroll to block-----------------------------------//

    const anchors = document.querySelectorAll('.nav__list a[href*="#"]')

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
            item.querySelector('.on-air__play-icon').classList.toggle('on-air__play-icon--disable');
            item.querySelector('.on-air__stop-icon').classList.toggle('on-air__stop-icon--active');
        })
    });

//---------------------------------Accordion-----------------------------------//

    $( function() {
        $( ".accordion" ).accordion({
            animate: 800,
            heightStyle: "content",
            active: false,
            collapsible: true,
        });

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

    const validation = new JustValidate('#form', {
        errorLabelCssClass: 'about-us__form-invalid',
        errorLabelStyle: {
            color: '#FF6F6F',
        }
    });

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
        ])

//---------------------------------Burger-menu-----------------------------------//

    document.querySelector('#burger-btn-open').addEventListener('click', function (){
        document.querySelector('.nav-burger').classList.toggle('nav-burger--active')
    });

    document.querySelector('.burger-btn-close').addEventListener('click', function (){
        document.querySelector('.nav-burger').classList.toggle('nav-burger--active')
    });

//---------------------------------On-air-768-----------------------------------//

    document.querySelector('.on-air-initialization').addEventListener('click', function (){
        document.querySelector('.on-air-mobile').classList.toggle('on-air-mobile--active')
    });


//---------------------------------On-air-320-----------------------------------//

    document.querySelector('.on-air-burger__btn').addEventListener('click', function (){
        document.querySelector('.on-air-burger__opened').classList.toggle('on-air-burger__opened--active')
        document.querySelector('.on-air-burger__icon').classList.toggle('on-air-burger__icon--active')
        document.querySelector('.header__bottom').classList.toggle('header__bottom--active')
    });


});


//---------------------------------Guest-active---------------------------------------//

$(function () {
    document.querySelector('.guest__item-wrapper').addEventListener('click', function () {
        document.querySelector('#guest__info-6').classList.toggle('guest__info-active')
        document.querySelector('#guest-6').classList.toggle('guest__expanded-item--active')
        document.querySelector('#plug').classList.toggle('guest__plug-disable')
    });
});

//---------------------------------Guest-scroll---------------------------------------//

if (window.matchMedia("(max-width: 767px)").matches) {

            const guestscroll = document.querySelectorAll('.guest__expanded-item a[href*="#"]')

            for (let guestscroll of guestscroll) {
                guestscroll.addEventListener('click', function (e) {
                    e.preventDefault()

                    const itemID = guestscroll.getAttribute('href').substr(1)

                    document.getElementById(itemID).scrollIntoView({
                        behavior: 'smooth',
                        speed: 9000,
                        block: 'start'
                    })
                })
            }
    };

//--------------Modal-enter----------------------//

document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#enter-btn').addEventListener('click', function () {
        document.querySelector('#modal-enter').classList.add('modal--active')
    });

    document.querySelector('#enter-btn--mobile').addEventListener('click', function () {
        document.querySelector('#modal-enter').classList.add('modal--active')
    });

    document.querySelector('.modal-header-btn').addEventListener('click', function () {
        document.querySelector('#modal-enter').classList.remove('modal--active')
    });

//--------------Modal-promo----------------------//

    document.querySelector('#modal-promo-btn').addEventListener('click', function () {
        document.querySelector('#modal-promo').classList.add('modal--active')
    });

    document.querySelector('.modal-header-btn--promo').addEventListener('click', function () {
        document.querySelector('#modal-promo').classList.remove('modal--active')
    });

});