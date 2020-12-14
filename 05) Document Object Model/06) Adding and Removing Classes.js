/*
1) HTMLElement.classList
2) HTMLElement.classList.add()
3) HTMLElement.classList.remove()
4) HTMLElement.classList.contains('class-name')
5) HTMLElement.classList.toggle()
*/

// Adding and removing classes with HTMLElement.setAttribute() method.
let para = document.querySelector('body > p:nth-of-type(1)');

para.setAttribute('class', 'error');
para.setAttribute('class', 'general error');


// We cannot possibly remove classes with HTMLElement.setAttriibute(), instead we can do something like this to get around it.
para = document.querySelector('body > p:nth-of-type(2)');

para.setAttribute('class', '');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// GENERAL WAY TO ADD OR REMOVE CLASSES IS FOLLOWING
para = document.querySelector('body > p:nth-of-type(3)');

// .classList property return DOMTokenList, it looks like an array but its not an array.
console.log( para.classList, typeof para.classList );

// DOMTokenList has following methods to play with.
para.classList.add('success'); // Adding Class
para.classList.add('extra'); // Adding Class (Adding class means appending to class list)
para.classList.remove('general'); // Removing Class

// .contains() is similar to .includes() but for DOMTokenList
console.log(para.classList.contains('success'));
console.log(para.classList.contains('general'));
// console.log(para.classList.includes('success')); // Error


// CHALLENGE
let paras = document.querySelectorAll('.challenge > p');
console.log(paras);

paras.forEach(para => {
    if (para.textContent.includes('error')) {
        para.classList.add('error');
    }
    else if (para.textContent.includes('success')) {
        para.classList.add('success');
    }
});


// HTMLElement.classList.toggle('className') method will add the class className if HTMLElement doesn't have that class, or will remove it if it has it.
para = document.querySelector('body > p:nth-of-type(4)');
para.classList.toggle('error'); // Removed "error" class because following para had it

para = document.querySelector('body > p:nth-of-type(5)');
para.classList.toggle('extra'); // Added "extra" class because following para didn't had it


