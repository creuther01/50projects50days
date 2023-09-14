const btn = document.querySelector('#search-button');
const search = document.querySelector('#search-container');


btn.addEventListener('click', () => {
    search.classList.toggle('active');
});