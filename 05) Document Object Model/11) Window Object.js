/*
1) window (object)
2) window.console.log()
3) window.outerWidth & window.outerHeight
4) window.document.querySelector()
5) window.alert()
6) window.setTimeout()
7) window.scrollTo()
8) window.setInterval()
*/

// Window object is a global object in JavaScript. 
console.log(window);

// console is a property of window object. It is an object itself (nested object) which has a method .log()
window.console.log('Hello World');

// outerWidth is one of the properties belonging to window object, which returns the current width of our browser window.
console.log(window.outerWidth);

// Since window is a global object we need not have to refer to it all the time using dot notation. Methods and properties of window object can be accessed standalone, like how we use console.log() and not window.console.log().
console.log(outerWidth, outerHeight);

// document is also one of the nested object of window.
console.log(document.querySelector('h1'));
console.log(window.document.querySelector('h1'));

// .alert() is one of the method of window object.

document.querySelector('.alert-one').addEventListener('click', () => {
    window.alert('Hello World 1');
});

document.querySelector('.alert-two').addEventListener('click', () => {
    alert('Hello World 2');
});



// .setTimeout(callbackFunction, time in milliseconds) is also one of methods of window object. This method is going to fire the callback function after a certain amount of time.
setTimeout(() => {
    document.querySelectorAll('p').forEach(element => {
        element.style.display = 'block';
    });
}, 5000);



// scrollTo(x, y) is one methods of window object which when executed, scrolls to a particular set of coordinates in the document.
document.querySelector('.scroll-method-1').addEventListener('click', () => {
    scrollTo(0,0);
});

document.querySelector('.scroll-method-2').addEventListener('click', () => {
    scrollTo({
        // Following is ScrollToOptions dictionary
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});



// .setInterval(callbackFunction, time in milliseconds) method will fire the callback function after every certain amount of time.
let seconds = document.querySelector('.seconds');
let minutes = document.querySelector('.minutes');

let i = 1;

setInterval(() => {
    if (i > 60) {
        i = 1;
        seconds.textContent = 0;
        minutes.textContent = Number(minutes.textContent) + 1;
    } else {
        seconds.textContent = i;
        i += 1;
    }
}, 1000);


// .clearInterval(intervalID) method cancels a timed, repeating action which was previously established by a call to setInterval().
let j = 1;
let counter = setInterval(() => {
    console.log(j);
    j += 1;

    if (j > 20) {
        clearInterval(counter);
    }
}, 500);