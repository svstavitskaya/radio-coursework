const podcastsMore = document.querySelector('.podcast__btn');
const podcastsLength = document.querySelectorAll('.podcast__item').length;
let items = 8;

podcastsMore.addEventListener('click', () => {
    items += 2;
    const array = Array.from(document.querySelector('.podcast__list').children);
    const visibItems = array.slice(0, items);

    visibItems.forEach(el => el.classList.add('podcast__item--visible'));

    if (visibItems.length === podcastsLength) {
        podcastsMore.style.display = 'none';
    }
});
