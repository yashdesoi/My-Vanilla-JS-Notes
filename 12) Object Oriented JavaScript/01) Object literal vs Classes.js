const userOne = {
    name: 'Yash',
    age: 22,
    speak() {
        console.log(this, this.name, this.age);
    }
}

userOne.speak();

// To create second instance of user object we have to create an entire new object literal.
const userTwo = {
    name: 'Khabib',
    age: 32,
    speak() {
        console.log(this, this.name, this.age);
    }
}

userTwo.speak();


// We can create an instance of an object by using class constructor, which is pretty much similar to __init__ magic method in python and this is similar to self. constructor() runs automatically when a new instance of an object is created.
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(this, this.name, this.age);
    }
}

const userThree = new User('Tony', 28);

console.log(userThree);
userThree.speak();

// Inside class, 'this' points to the current instance of an object.