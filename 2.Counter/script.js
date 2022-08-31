const counterInt = document.querySelector('.counter');
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');

let counter = 0;

increase.addEventListener('click', () => {
    counter++;
    counterInt.textContent = counter;
    color();
});

decrease.addEventListener('click', () => {
    counter--;
    counterInt.textContent = counter;
    color();
});

reset.addEventListener('click', () => {
    counter = 0;
    counterInt.textContent = counter;
    color();
});

function color() {
    if (counter > 0) {
        counterInt.style.color = 'green';
    }

    else if (counter < 0) {
        counterInt.style.color = 'red';
    }

    else counterInt.style.color = 'black';
};