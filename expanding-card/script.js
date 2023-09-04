// when we click on a div of class container, all the containers have the passive class container, and the clicked container has the active class container

const containers = document.querySelectorAll('.container');

containers.forEach(container => {
    container.addEventListener('click', () => {
        containers.forEach(container => {
            container.classList.remove('active');
            container.classList.add('passive');
        });
        container.classList.remove('passive');
        container.classList.add('active');
    });
});