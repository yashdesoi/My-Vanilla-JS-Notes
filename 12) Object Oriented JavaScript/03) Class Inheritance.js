class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} is running with a speed of ${this.speed}mph`);
        return this;
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} has stopped running`);
        return this;
    }
    speak() {
        console.log(this);
    }
}

const animal = new Animal('Shera');
animal
    .run(85)
    .stop()
    .speak();

// Class Rabbit has inherited all the methods including constructor() from class Animal. Class Rabbit also has one of its own method hide() which is unique to it.
class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} is hiding`);
        return this;
    }
}

// Javscript moves from bottom to top while searching for methods in classes. Meaning, when a new instance of rabbit is created, JS first looks for constructor() inside class Rabbit if JS doesn't find it then it moves to class Animal, and executes that constructor. Same goes for method run() and stop(), javascript first looks for them inside class Rabbit if it doesn't find them inside class Rabbit, it will move to class Animal. Javascript found method hide() inside class Rabbit itself, hence it need not have to move to parent class. Even if in parent class it dosen't able to find that method, javascript will give error.
console.log();
const rabbit = new Rabbit('Bunny');
rabbit
    .run(105)
    .stop()
    .hide()
    .speak();