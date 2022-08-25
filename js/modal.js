//--------------Modal-enter----------------------//

let modalEnter = document.querySelector('#enter-btn');
let modalEnterMobile = document.querySelector( '#enter-btn--mobile');
let modalClose = document.querySelector('#modal-close');

modalEnter.addEventListener('click', function () {
    document.querySelector('#modal-enter').classList.add('modal--active');
    document.querySelector('.modal-container').classList.add('modal-container--active')
    document.body.classList.add('stop-scroll');
});

modalEnterMobile.addEventListener('click', function () {
    document.querySelector('#modal-enter').classList.add('modal--active');
    document.querySelector('.modal-container').classList.add('modal-container--active')
});

modalClose.addEventListener('click', function () {
    document.querySelector('#modal-enter').classList.remove('modal--active');
    document.querySelector('.modal-container').classList.remove('modal-container--active')
    document.body.classList.remove('stop-scroll');
});


//--------------Modal-promo----------------------//

let modalPromo = document.querySelector('#modal-promo-btn');
let modalPromoClose = document.querySelector('.modal-header-btn--promo')

modalPromo.addEventListener('click', function () {
    document.querySelector('#modal-promo').classList.add('modal--active');
    document.querySelector('.modal-container-promo').classList.add('modal-container--active')
    document.body.classList.add('stop-scroll');
});

modalPromoClose.addEventListener('click', function () {
    document.querySelector('#modal-promo').classList.remove('modal--active');
    document.querySelector('.modal-container-promo').classList.remove('modal-container--active')
    document.body.classList.remove('stop-scroll');
});


//-------------------------------Modal-Enter-----------------------//

const validation = new JustValidate('#form--modal', {
    errorLabelCssClass: 'form-invalid',
    errorLabelStyle: {
        color: '#FF6F6F',
    }
});

validation
    .addField('#login', [
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

    .addField('#password', [
        {
            rule: 'required',
            errorMessage: 'Ошибка',
        },

        {
            rule: 'password',
            errorMessage:'Пароль должен состоять минимум из 8 символов',
        },
    ]);

//-------------------------------Modal-Promo-----------------------//

    (function(){
        let speed = 2; // Скорость скролла.

        let scroll = document.querySelector('.product-list', '.modal');

        let left = 0; // отпустили мышку - сохраняем положение скролла
        let drag = false;
        let coorX = 0; // нажали мышку - сохраняем координаты.

        scroll.addEventListener('mousedown', function(e) {
            drag = true;
            coorX = e.pageX - this.offsetLeft;
        });
        document.addEventListener('mouseup', function() {
            drag = false;
            left = scroll.scrollLeft;
        });
        scroll.addEventListener('mousemove', function(e) {
            if (drag) {
                this.scrollLeft = left + (e.pageX - this.offsetLeft - coorX)*speed;
            }
        });

    })();