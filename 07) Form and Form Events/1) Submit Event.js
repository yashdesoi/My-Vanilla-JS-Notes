/*
1) HTMLFormElement.addEventListner('submit', callbackFunction)
2) eventObject.preventDefault()
2) HTMLInputElement.value
3) HTMLFormElement.idOfHTMLInputElement --> HTMLInputElement
4) HTMLFormElement.idOfHTMLInputElement.value
5) HTMLFormElement.nameOfHTMLInputElement --> HTMLInputElement, RadioNodeList in case of radio buttons with same name attribute.
6) HTMLFormElement.nameOfHTMLInputElement.value

Note:- HTMLInputElement must be child of HTMLFormElement.
*/

// Note that the submit event fires on the <form> element itself, and not on any <button> or <input type="submit"> inside it. The submit event fires when the user clicks a submit button (<button> or <input type="submit">) or presses Enter while editing a field (e.g. <input type="text">) in a form.

// If we add an event listner to the <button> or <input type="submit">, then that thing is only responsible for click evnets, but won't respond if we press Enter while editing a field.

let form = document.querySelector('.signup-form');
let username = document.querySelector('#username')

form.addEventListener('submit', event => {
    // When we submit the form, by default the page refreshes and all the values of the <input> fields appear in the address bar (Also the password). To prevent this we can do the following.
    event.preventDefault()

    // To get the values of the <input> fields entered by the user, we can either grab a specific element and do HTMLInputElement.value property.
    console.log(username.value);
    console.log('\n\n');

    // Or we can use the form element itself, and do HTMLFormElement.id.value or HTMLFormElement.name.value to grab the value of the HTMLInputElement, here name and id belongs to respective HTMLInputElement.
    // Note:- HTMLFormElement.id is going to return HTMLElement which has that id as attribute.
    // HTMLFormElement.id.value -->
    console.log(form.username);
    console.log(form.username.value);

    console.log(form.password);
    console.log(form.password.value);

    console.log(form.male);
    console.log(form.male.value);
    console.log(form.female.value);
    console.log(form.other.value);

    console.log(form.language);
    console.log(form.language.value)

    console.log(form.birthday);
    console.log(form.birthday.value);

    console.log(form.agreement);
    console.log(form.agreement.value);
    console.log('\n\n');

    // HTMLFormElement.name.value --> Best way to grab the user entered values, because it works with <input type="radio">. Each radio buttons have one common name but each one of them have unique ids, which makes it difficult to grab user input.
    // Note:- HTMLFormElement.name is going to return HTMLElement which has that name as attribute. In case of radio buttons which have one common name for all three elements, HTMLFormElement.GENDER is going to return RadioNodeList.
    console.log(form.USERNAME);
    console.log(form.USERNAME.value)

    console.log(form.PASSWORD);
    console.log(form.PASSWORD.value);

    console.log(form.GENDER);
    console.log(form.GENDER.value);

    console.log(form.LANGUAGE);
    console.log(form.LANGUAGE.value);

    console.log(form.BIRTHDAY);
    console.log(form.BIRTHDAY.value);

    console.log(form.terms);
    console.log(form.terms.value);
    
});