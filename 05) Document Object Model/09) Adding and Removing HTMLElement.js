/*
1) HTMLElement.remove()
2) document.createElement()
3) parentHTMLElement.append(childHTMLElement)
4) parentHTMLElement.prepend(childHTMLElement)
*/

// Removing HTMLElements
const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', () => {
        item.remove()
    });
});


// Adding HTMLElements in not so standard way
const buttonOne = document.querySelector('body > button');
const containerOne = document.querySelector('body > ul');

buttonOne.addEventListener('click', () => {
    // To add the element below
    containerOne.innerHTML += '<li>Non-Removable</li>';

    // To add the element above
    containerOne.innerHTML = '<li>Non-Removable</li>' + containerOne.innerHTML;

    // Flaw with this is that once item is added in this way, then event listner for removing element won't work;
});


// Adding HTMLElements in more standard way
const buttonTwo = document.querySelector('body > button:nth-of-type(2)');
const containerTwo = document.querySelector('body > ul:nth-of-type(2)');

buttonTwo.addEventListener('click', () => {
    const item = document.createElement('li');
    item.textContent += 'Non-Removable';

    // To add items below
    containerTwo.append(item);

    // To add items above
    containerTwo.prepend(item);

    // This one also got one flaw, item cannot be appended and prepended at the same time. The one which is written later will be executed
});


// To do both append and prepend, we have to attach two event listners to the same button element doing separate things. Note that, attaching another event listner with same event won't overwrite the first one.
const buttonThree = document.querySelector('body > button:nth-of-type(3)');
const containerThree = document.querySelector('body > ul:nth-of-type(3)');
// To append
buttonThree.addEventListener('click', () => {
    const item = document.createElement('li');
    item.textContent += 'Non-Removable';

    containerThree.append(item);
});
// to prepend
buttonThree.addEventListener('click', () => {
    const item = document.createElement('li');
    item.textContent += 'Non-Removable';

    containerThree.prepend(item);
});


// In above examples we have seen that, the new elements which are added cannod be removed inspite of us adding event listner for removing elements aswell. This is because we attached this event listner to initial elements only, then elements present in actual HTML page, not the elements which are created via document.createElement('li'). Hence to remove the elements which are created like this, we have to attach a new event listner inside the event listner which is suppose to add elements. Threefore whenever a button is clicked element is created and appended with event listner attached.
const buttonFour = document.querySelector('body > button:nth-of-type(4)');
const containerFour = document.querySelector('body > ul:nth-of-type(4)');

buttonFour.addEventListener('click', () => {
    const item = document.createElement('li');
    item.textContent += 'Removable';

    // To add items below
    containerFour.append(item);

    item.addEventListener('click', () => {
        item.remove();
    });

});
