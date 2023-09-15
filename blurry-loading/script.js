var load = 0;
const filter = document.querySelector('.filter');
const loader = document.querySelector('.loader');
let intervalId;

/*au chargement de la page, on lance la fonction*/
window.onload = function() {
    filter.classList.add('none');
    loader.classList.add('none');


    intervalId = setInterval(blurring, 50); /* the loading is finish after 5000ms, so we upddate the loader every 5ms */
}

blurring = () => {
    load++;

    loader.innerText = `Chargement: ${load}%`

    if (load >= 100) {
        clearInterval(intervalId); 
    }
}