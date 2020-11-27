let number = document.querySelector('.number');
const add = document.querySelector('button.add');
const subtract = document.querySelector('button.subtract');
const reset = document.querySelector('button.reset');

add.addEventListener('click', event => {
    number.textContent = String(Number(number.textContent) + 1);
    event.stopPropagation();
});

subtract.addEventListener('click', event => {
    if (Number(number.textContent) === 0) {
        
    } else {
        number.textContent = String(Number(number.textContent) - 1);
        event.stopPropagation();
    }
});

reset.addEventListener('click', event => {
    number.textContent = '0';
    event.stopPropagation();
});