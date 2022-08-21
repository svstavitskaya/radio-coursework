//---------------------------------Guest-active---------------------------------------//

$(function () {
    document.querySelector('.guest__item-wrapper').addEventListener('click', function () {
        document.querySelector('#guest__info-6').classList.toggle('guest__info-active')
        document.querySelector('#guest-init-6').classList.add('guest-initials--active')
        document.querySelector('#plug').classList.toggle('guest__plug-disable')
    });
});

//--------------Guests-Tabs----------------------//

document.querySelectorAll('.guest-initials').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.guest-initials').forEach(function(btn){
            btn.classList.remove('guest-initials--active')});
        e.currentTarget.classList.add('guest-initials--active');

        document.querySelectorAll('.guest__info').forEach(function(tabsBtn){
            tabsBtn.classList.remove('guest__info-active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('guest__info-active');
    });
});

//---------------------------------Guest-scroll---------------------------------------//

if (window.matchMedia("(max-width: 1023px)").matches) {

    const guestscroll = document.querySelectorAll('.guest-initials a[href*="#"]')

    for (let guestscroll of guestscroll) {
        guestscroll.addEventListener('click', function (e) {
            e.preventDefault()

            const itemID = guestscroll.getAttribute('href').substr(1)

            document.getElementById(itemID).scrollIntoView(
                {
                behavior: 'smooth',
                speed: 9000,
                block: 'start'
            });
        });
    };
};


