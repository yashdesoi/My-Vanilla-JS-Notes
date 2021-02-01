// Modern code including const, arrow function, rest parameter, template string and classes.
const sum = (...nums) => {
    let total = nums.reduce((accumulator, element) => {
        accumulator += element;
        return accumulator;
    }, 0);

    return total;
};

console.log(`2 + 8 + 22 + 5 + 11 = ${sum(2, 8, 22, 5, 11)}`);

// Class syntax
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi my name is ${this.name}, I'm ${this.age} years old.`);
    }
}

const user = new User('Himani', 18);
user.greet();