

// add a counter
var step = 1;

const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');


/*
    when we click on the prev button, we go back one step (decrease the counter)
    if we are at the first step, we disable the prev button
    if we are not at the last step, we enable the next button
*/
prevButton.addEventListener('click', () => {
    if (step >1){
        step--;
        if (step == 1){
            prevButton.classList.add('disabled');
        }
        if (nextButton.classList.contains('disabled')){
            nextButton.classList.remove('disabled');
        }

        // we get the stepX element where X is the step value and we remove the class active
        const stepId = document.querySelector('#step'+(step+1));
        stepId.classList.remove('active');

        // we change the progress bar
        progressBar();
    }
})

/*
    when we click on the next button, we go forward one step (increase the counter)
    if we are at the last step, we disable the next button
    if we are not at the first step, we enable the prev button
*/
nextButton.addEventListener('click', () => {
    if (step <4){
        step++;
        if (step == 4){
            nextButton.classList.add('disabled');
        }
        if (prevButton.classList.contains('disabled')){ 
            prevButton.classList.remove('disabled');
        }

        // we check the stepX element where X is the step value and we add the class active
        const stepId = document.querySelector('#step'+step);
        stepId.classList.add('active');


        // we change the progress bar
        progressBar();
    }
});




progressBar = () => {
    const progress = document.querySelector('#progress-bar');
    if (step == 1){
        progress.style.width = '0%';
    } else if (step == 2){
        progress.style.width = '33%';
    } else if (step == 3){
        progress.style.width = '66%';
    } else if (step == 4){
        progress.style.width = '99%';
    }
};