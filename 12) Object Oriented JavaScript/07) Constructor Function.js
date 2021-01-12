// Constructor function is just regular javascript function. Naming it with capital letter first re-assures a dev that, it must be called with 'new' operator in front of it. javascript class syntax is just a syntactic sugar which works on top of prototypal model.
const User = function(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    this.speak = function() {
        console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
    };
    // return this;
};

const u = new User('Khabib', 31);

console.log(u);
u.speak();


/*When a function is executed with new, it does the following steps:-

1) A new empty object is created and assigned to this.
2) The function body executes. Usually it modifies this, adds new properties to it.
3) The value of this is returned 

In constructor function above, line 3 and 9 gets automated because of 'new' keyword.*/


// Since function is an object, its __proto__ has a property named .prototype This property is used only when function is used as a constructor. Whenever a new instance an object is created using 'new' operator, its prototype points to an object we assign to F.prototype
User.prototype.birthday = function() {
    this.age += 1;
};

console.log(u.age);
u.birthday();
console.log(u.age);

// All the methods belonging to an object must be present inside its __proto__. This way is memory efficient, because since all the instances of an objects have only one prototype in the memory, to which __proto__ of that instance points to. And since objects have different properties but there methods are always same, hence they are stored in __proto__.

// The above instance of User object 'u' acts like an instance of Array, Date or Function object. Array 'array' has its own prototype array.__proto__ aswell as, its prototype also as base object prototype array.__proto__.__proto__

const Temp = {
    name: 'Khabib',
    age: 31,
    speak() {
        console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
    },
    birthday() {
        this.age += 1;
    }
}

console.log(Temp);






