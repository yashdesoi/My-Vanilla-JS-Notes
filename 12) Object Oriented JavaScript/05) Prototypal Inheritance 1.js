// Every object in javascript has a hidden property inside them named as __proto__. If javascript cannot find something inside the object itself then it will automatically go inside __proto__ to look for that thing.

const person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullname() {
        return this.firstname + ' ' + this.lastname;
    }
};

console.log(person.getFullname());

// For example, we did not put the method .hasOwnProperty() inside our object person. But still we have access to this method down there. It is because this method is present inside the __proto__ property of the person, so javascript automatically goes in __proto__ if it did not get it inside person object itself, we need not have to type person.__proto__.hasOwnProperty() to access it.
console.log(person.hasOwnProperty('firstname'), person.hasOwnProperty('middlename'));


// PROTOTYPAL INHERITANCE

// Example 1
const john = {
    firstname: 'John',
    lastname: 'Doe'
};

// Now john's __proto__ will point to person;
john.__proto__ = person;

// First javascript will look for getFullname() inside john, if it doesn't find it there, it will traverse to __proto__ of john.
console.log(john.getFullname());

// Here, first javascript will look for hasOwnProperty() inside john, if not found js will traverse in john's __proto__ if not found over there aswell then js will traverse in __proto__'s __proto__ which in this case is person's __proto__.
console.log(john.hasOwnProperty('firstname'));


// Example 2
const jane = {
    firstname: 'Jane'
};

jane.__proto__ = person;

console.log(jane.getFullname());

console.log('');
console.log(person);
console.log(john);
console.log(jane);

// Note:- john.__proto__ = person; Never ever inherit this way, in production code. We have F.prototype to handel this.