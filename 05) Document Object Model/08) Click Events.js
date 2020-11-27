/*
1) HTMLElement.addEventListner()
*/

// .addEventListner() is a method belonging to HTMLElement. It is attached to that element which is expected to undergo an event, it is immediatly called whenever an event has occured uppon that element. Like in click event, element.addEventListner() is called whenever that element is clicked.

// EXAMPLE 1
// Grabbing the element from DOM, where we expect the event to take place.
const buttonOne = document.querySelector('button:nth-of-type(1)');

let numberOfClicksOne = 1

// Attaching an event listner to that element --> HTMLElement.addEventListner(typeOfEvent, callBackFUnction).
buttonOne.addEventListener('click', () => {
    console.log(buttonOne.textContent);
    
    if (numberOfClicksOne % 2 == 0) {
        buttonOne.style.textDecoration = '';
    }

    else {
        buttonOne.style.textDecoration = 'line-through';
    }

    numberOfClicksOne += 1
});


// EXAMPLE 2
// To make buttons independent of each other, we have to name them differently as buttonOne, buttonTwo, buttonThree, etc.
const buttonTwo = document.querySelector('button:nth-of-type(2)');
const body = document.querySelector('body');
let numberOfClicksTwo = 0;

const colors = ['red', 'blue', 'green', 'purple', 'yellow', 'pink', 'orange', 'white'];

buttonTwo.addEventListener('click', () => {
    if (numberOfClicksTwo >= colors.length) {
        numberOfClicksTwo = 0;
    }

    body.style.backgroundColor = colors[numberOfClicksTwo];

    numberOfClicksTwo += 1;
});


// Example 3
// Attaching event listners to a group of elements.
const list = document.querySelectorAll('.colors > li');

list.forEach(listItem => {
    listItem.style.color = listItem.textContent.toLowerCase();

    listItem.addEventListener('mouseover', () => {
        body.style.backgroundColor = colors[ colors.indexOf(listItem.textContent.toLowerCase()) ];
        //                                                          ^
        //                                                Using array as hashmap 
    });
});

