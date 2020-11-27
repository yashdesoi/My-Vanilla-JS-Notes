// Document object model is the javascript object created by the browser at the
// time when we load our HTML in it. Document object has several methods as well
// as properties in it. We cannot use node.js here, since it doesn't run in our
// browser.
console.log(document);


// Quering means selecting a particular element from our HTML.
/*
1) document.querySelector()
2) document.querySelectorAll()
*/

// .querySelector() will grab first element which matches that selector. And will ignore the rest of them.
// .querySelector() will return HTMLElement which is mutable in nature.
// EXAMPLE 1
let element = document.querySelector('p');
//                              ^
//                CSS selector in string format
console.log(element, typeof element);

// EXAMPLE 2
element = document.querySelector('.container');

console.log(element);


// EXAMPLE 3
// To select the 2nd "p" inside "div" we can do some thing like this.
element = document.querySelector('div > p:nth-of-type(2)');

console.log(element);


// EXAMPLE 4
// To select div with .special class we can use following selector.
element = document.querySelector('div.special');

console.log(element);


// .querySelectorAll() grabs all the elements from HTML with given selector. And return them in Array
// format which is called as NODE LIST. Note that NODE LIST is not an Array, hence only limited methods
// of Array are available to Node List.
// EXAMPLE 1
let elements = document.querySelectorAll('p');

console.log(elements, typeof elements);

console.log(elements.length);

elements.forEach((element,index) => {
    console.log(`${index+1})`, element);
});


// EXAMPLE 2
elements = document.querySelectorAll('.special');

for (let i = 0; i < elements.length; i++) {
    console.log(`${i+1})`, elements[i]);
}