export default function filter() {
    const showFilter = document.querySelector('[data-filter="button"]');
    const content = document.querySelector('[data-filter="content"]');

    showFilter.addEventListener('click', function () {
        content.classList.toggle('show-filter');
    })
}