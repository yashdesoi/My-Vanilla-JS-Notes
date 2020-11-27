// After querying the DOM we can do whatever we want with the object which is returned.
/*
1) HTMLElement.innerText
2) HTMLElement.innerHTML
3) HTMLElement.textContent
*/

// This exercise will deal with grabbing the inner content inside HTML tags.

let element = document.querySelector('.content_1');
console.log(element, typeof element);

// Following property returns the text present inside "element" object.
let text = element.innerText;
console.log(text, typeof text);


// Let us see what happen if we use .innerText on HTML object which also has other tags
// inside it.
element = document.querySelector('.special');
console.log(element);

// Following will omit the inner tag names.
text = element.innerText;
console.log(text, typeof text);

// Following property will retain the tag names and return the string.
text = element.innerHTML;
console.log(text, typeof text);


// We can alter the strings which are returned via above .innerText and .innerHTML properties.
// APPENDING
element = document.querySelector('.content_1');
element.innerText += ' appended Text :)';
// OVERWRITING
element = document.querySelector('.content_2');
element.innerText = 'Overwritten!'


// Problem with .innerText
element = document.querySelector('.content_3');
element.innerText += ' <span style="color: red;">appended Text :)</span>';

// Solved by .innerHTML
element = document.querySelector('.content_4');
element.innerHTML += ' <span style="color: red;">appended Text :)</span>';

//APPLICATION
let elements = document.querySelectorAll('li');
// Above code will return node list of HTMLElements
let items = {
    'Item 1': 'Book',
    'Item 2': 'Toothbrush',
    'Item 3': 'Towel'
}

elements.forEach(element => {
    element.innerText = items[element.innerText];
});

console.log('\n');
// We have one more property like which is kinda similar to .innerText, which is .textContent The way in which it is different from .innerText is that, .innerText will not include hidden text in the string which it returns but .textContent will. By hidden text we mean that by hidding content via CSS property "display: none;"

element = document.querySelector('.content_5');

console.log( element.innerText );
console.log( element.textContent );
console.log( element.innerHTML );
