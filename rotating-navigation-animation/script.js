const navigationCircle = document.querySelector('.navigation-circle');
const container = document.querySelector('.container');
const navigation = document.querySelector('#nav');

navigationCircle.addEventListener('click', () => {
    container.classList.toggle('active');
    navigationCircle.classList.toggle('activeCircle');
});