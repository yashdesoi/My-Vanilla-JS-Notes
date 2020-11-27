/*
1) HTMLElement.style
*/

let title = document.querySelector('.one');
let existingStyle = title.getAttribute('style');

console.log(existingStyle);

// Following code will overwrite the previous style
title.setAttribute('style', 'border: 1px solid orangered;');

console.log( title.getAttribute('style') );

// To add a new style along with preserving old style we have to do following
title = document.querySelector('.two');
existingStyle = title.getAttribute('style');

title.setAttribute('style', existingStyle + ' border: 1px solid orangered;');

console.log( title.getAttribute('style') );

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Instead of doing all this, we can simply make use of one of the HTMLElement property "style", this property is a nested object which has
// several other properties named as CSS properties.
title = document.querySelector('.three');

console.log( title.style );

title.style.border = '2px solid green'; // Adding
title.style.color = 'crimson'; // Overwriting

// CSS properties like font-family, border-left-width, text-decoration etc, which has "-" between them which signifies spacing between two word are not coded like "title.style.font-family" in javascript rather camel casing is used like fontFamily, borderLeftWidth etc.

title.style.textAlign = 'center';
title.style.textDecoration = ''; // Removing existing CSS property
title.style.borderRightWidth = title.style.borderLeftWidth = '4px';



