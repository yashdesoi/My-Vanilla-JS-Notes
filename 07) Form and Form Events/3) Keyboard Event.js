/*
1) HTMLFormElement.addEventListner('keyup', callbackFunction)
2) HTMLInputElement.addEventListner('keyup', callbackFunction) === HTMLFormElement.id/nameOFHTMLInputElement.addEventListner()
3) callbackFunction(event), event --> Keyboard event object.
4) event.target === HTMLInputElement --> Incase of event listner attached to HTMLFormElement.
*/

// Keyboard event provides live feedback
let form = document.querySelector('form');
let usernamePattern = /^[a-z_][a-z0-9_]{2,}$/;

let usernameFiller = document.querySelector('.username-field + .filler');
let passwordFiller = document.querySelector('.password-field + .filler');

[usernameFiller, passwordFiller].forEach(element => {
    element.style.fontSize = '12px';
    element.style.webkitTextStroke = '0.3px black';
});

let validation_one = false;
let validation_two = false;

form.addEventListener('keyup', event => {
    console.log(event)
    console.log(event.target);
    console.log(event.target.getAttribute('id'));

    if (event.target.getAttribute('id') === 'username') {
        if (usernamePattern.test(event.target.value)) {
            event.target.style.borderColor = 'green';
            event.target.style.backgroundColor = 'lightgreen';
            validation_one = true;
        } else {
            event.target.style.borderColor = 'red';
            event.target.style.backgroundColor = 'tomato';
            validation_one = false;
        }

    }

    else if (event.target.getAttribute('id') === 'password') {
        if(event.target.value.length >= 12){
            passwordFiller.textContent = 'Strong';
            passwordFiller.style.color = 'green';
            validation_two = true;
        } else if(event.target.value.length >= 6){
            passwordFiller.textContent = 'Fair';
            passwordFiller.style.color = 'yellow';
            validation_two = true;
        } else{
            passwordFiller.textContent = 'Weak';
            passwordFiller.style.color = 'red';
            validation_two = false;
        }
    }
});

form.username.addEventListener('keyup', event => {
    if (usernamePattern.test(event.target.value)) {
        usernameFiller.textContent = 'Valid';
        usernameFiller.style.color = 'green';
    } else {
        usernameFiller.textContent = 'Invalid';
        usernameFiller.style.color = 'red';
    }
});

form.password.addEventListener('keyup', event => {
    if(event.target.value.length >= 12){
        event.target.style.borderColor = 'green';
        event.target.style.backgroundColor = 'lightgreen';
    } else if(event.target.value.length >= 6){
        event.target.style.borderColor = 'gold';
        event.target.style.backgroundColor = 'yellow';
    } else{
        event.target.style.borderColor = 'red';
        event.target.style.backgroundColor = 'tomato';
    }
});

form.addEventListener('submit', event => {
    event.preventDefault();
    if (validation_one && validation_two) {
        console.log('Form Submitted');
    } else {
        console.log('Please enter valid details');
    }
    
});
