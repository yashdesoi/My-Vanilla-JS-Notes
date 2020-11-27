/*
1) event (<-- Object)
2) event.target (returns HTMLElement)
3) event.stopPropagation()
4) HTMLElement.tagName / event.target.tagName
*/

// HTMLElement.addEventListner() takes two parrameter, first is event type and second is the callback function. We have seen in our previous examples that, we haven't had any parameters for that callback function. But that callback function can take one parameter, which is event. Event is an object created when an actual type of event specified has occured uppon an element which has an event listner attached.
const buttonOne = document.querySelector('.button-one');

buttonOne.addEventListener('click', event => {
    console.log(event);
    event.stopPropagation();
});

buttonOne.addEventListener('mouseover', event => {
    console.log(event);
});


// Event object has yet another object present inside of it, target. Which represents the HTMLElement uppon which event has occured. Here event.target == HTMLElement which is buttonTwo itself, since buttonTwo was clicked. eventObject.target returns HTMLElement.
const buttonTwo = document.querySelector('.button-two');
let clicks = 1;

buttonTwo.addEventListener('click', event => {
    if (clicks === 1) {
        console.log(event);
        console.log(event.target);
    }

    if (clicks % 2 === 0) {
        event.target.style.fontFamily = 'monospace';
    } else {
        event.target.style.fontFamily = 'cursive';
    }
    clicks += 1;

    event.stopPropagation();
});


// event.target changes for HTMLElement which has other nested elements. event.target is child element, when a particular child element is clicked and element.target is parent element when we click in the region(parentElement - childElement).
const containerOne = document.querySelector('.container-one');

containerOne.addEventListener('click', event => {
    console.log(event.target);
    event.stopPropagation();
});


// Clever way to add and remove HTMLElements.
const containerTwo = document.querySelector('.container-two');
console.log(containerTwo.tagName);

containerTwo.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }

    event.stopPropagation();
});


const buttonThree = document.querySelector('.button-three');

buttonThree.addEventListener('click', event => {
    let item = document.createElement('li');
    let size = containerTwo.children.length;
    let array = containerTwo.children[size - 1].textContent.split(' ');
    let lastItemNumber = Number(array[1]);
    let newItemNumber = String(lastItemNumber + 1);

    item.textContent = 'Item ' + newItemNumber;

    containerTwo.append(item);

    event.stopPropagation();
});










// EVENT BUBBLING:- In event bubbling, if an event listner is attached to some element is triggred when that element undergoes that event. Event occuring causes a shockwave like phenomenon which makes the event listner of that child's parent to trigger aswell (only if child's parent has event listner attached with same event type), which inturn makes event listner of parent's parent to triggers also (only if parent's parent has event listner attached with same event type) and so on.

// To make event bubbling stop, event object has a method event.stopPropagation().

// Therefore in following code, event will propogate only upto <div>, <body>'s event listner is isolated now.
const body = document.querySelector('body');
body.addEventListener('click', () => {
    console.log("I'm <BODY>")
});

const parent = document.querySelector('.parent');
parent.addEventListener('click', event => {
    console.log("I'm <DIV>")
    event.stopPropagation();
});

const child = document.querySelector('.child');
child.addEventListener('click', () => {
    console.log("I'm <P>")
});