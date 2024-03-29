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

    document.querySelector('.podcast__btn').addEventListener('click',
        function (){
        document.querySelectorAll('.podcast__item-overflow').forEach(el => el.classList.toggle('podcast__item-active'))
       });

//---------------------------------Validator-----------------------------------//

    const validation = new JustValidate('#form', {
        errorLabelCssClass: 'form-invalid',
        errorLabelStyle: {
            color: '#FF6F6F',
            submitHandler: function(thisForm) {
                let formData = new FormData(thisForm);

                let xhr = new XMLHttpRequest();

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            console.log('Sent')
                        }
                    }
                }
                xhr.open('POST', 'mail.php', true);
                xhr.send(formData);

                thisForm.reset();
            }
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
                errorMessage: 'Логин должен состоять минимум из 3 символов',
            },
        ])

        .addField('#email', [
            {
                rule: 'email',
                errorMessage: 'Ошибка',

            },
        ])

//---------------------------------On-air-768-----------------------------------//

    document.querySelector('.on-air-initialization').addEventListener('click', function (){
        document.querySelector('.on-air-mobile').classList.toggle('on-air-mobile--active')
    });


//---------------------------------On-air-320-----------------------------------//

    let airBurger = document.querySelector('.on-air-burger__btn');

    airBurger.addEventListener('click', function () {
        document.querySelector('.on-air-burger__opened').classList.toggle('on-air-burger__opened--active');
        document.querySelector('.on-air__burger-icon').classList.toggle('on-air-burger__icon--active');
        document.querySelector('.header__bottom').classList.toggle('header__bottom--active');
    });

});

//--------------Swiper-promo----------------------//

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    speed: 400,
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    keyboard: {
        enable: true,
    },
    autoplay: {
        delay: 2000,
        stopOnLastSlide: true,

    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    }

});

