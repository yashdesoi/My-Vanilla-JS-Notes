/*
1) HTMLElement.childern
2) HTMLElement.parentElement
3) HTMLElement.nextElementSibiling
4) HTMLElement.previousElementSibiling
*/

// To grab all the elements inside <article>, we can either do this which will return node list.
let elements = document.querySelectorAll('article > *');
console.log(elements);

// To convert node list into array we can use built in Array object along with one of its method like this. Following will return an array.
let array = Array.from(elements);
console.log(array);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Or in more standard way we can do this. Grab the parent HTMLElement.
let element = document.querySelector('article');

// Following HTMLElement property will grab all the child HTMLElements of HTMLElement which is <article>, and store them in HTMLCollection.
console.log(element.children);

// Converting HTMLCollection into array.
array = Array.from(element.children);
console.log(array);

// Adding classes to each child elements of <article>.
array.forEach(child => {
    child.classList.add('article-content');
});

elements = document.querySelectorAll('.article-content');
console.log(elements);

// We can also grab parent element via HTMLElement.parentElement property, here HTMLElement is <article> so, its parent is going to be <body>.
console.log(element.parentElement);

// HTMLElement.nextElementSibiling & HTMLElement.previousElementSibiling will grab HTMLElement just next to or HTMLElement which is just before to it. In this example element just next to <article> is <p> and just before it is <div>.
console.log(element.nextElementSibling);
console.log(element.previousElementSibling);


// TRAVERSING THE DOM
element = document.querySelector('body > div > p');
console.log(element);

element = element.parentElement.nextElementSibling.nextElementSibling.children
element[0].textContent = 'TeXt';
element[0].style.color = 'red'; element[0].style.fontSize = '20px';

