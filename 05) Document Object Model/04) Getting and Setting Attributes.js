// We can get the value of the attributes of HTMLElements, and also we can set them to a different value.
/*
1) HTMLElement.getAttribute()
2) HTMLElement.setAttribute()
*/

let link = document.querySelector('a');


// GETTING ATTRIBUTE
// Following will return the value of "href" attribute in string format.
let value = link.getAttribute('href');
console.log(value, typeof value);


// SETTING ATTRIBUTE (Same HTMLElement <a>)
// Example 1
link.setAttribute('href', 'https://www.facebook.com');


// Example 2
// Getting
let para = document.querySelector('p');
value = para.getAttribute('class');
console.log(value);
// Setting
para.setAttribute('class', value + ' extra');


// Example 3
// We can also set the attributes which currently don't exist in DOM. 2nd paragraph don't have any
// attributes associated with it right now.
// Getting
para = document.querySelector('p:nth-of-type(2)');
value = para.getAttribute('style'); //Following will return null, since there is no "style" attribute associated with it.
console.log(value);
// Setting
para.setAttribute('style', 'color: maroon; font-family: cursive;');