let form = document.querySelector('form');
let emailPattern = /^[a-z][a-z0-9_]{2,}@[a-z]{3,}\.(com|in|org|net|)$/;

let filler = document.querySelector('.filler');
filler.style.fontSize = '13px';

form.addEventListener('submit', event => {
    event.preventDefault();

    if (emailPattern.test(form.email.value)){
        filler.textContent = 'Valid email address';
        filler.style.color = 'green';
    } else {
        filler.textContent = 'Invalid email address';
        filler.style.color = 'red';
    }

});