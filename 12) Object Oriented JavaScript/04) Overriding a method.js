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
animal.run(25);

// Now javascript is able to find run() inside Cheeta class itself, hence it won't move up inside class Animal to look for method run().
class Cheeta extends Animal {
    run(speed) {
        this.speed = speed + 100;
        console.log(`${this.name} is running with a speed of ${this.speed}mph`);
        return this;
    }
}

console.log('');
const cheeta = new Cheeta('Xpynx');
cheeta.run(25);

// Usually we don’t want to totally replace a parent method, but rather to build on top of it to tweak or extend its functionality. We do something in our method, but call the parent method before/after it.

// Classes provide "super" keyword for that. We can use following versions of it:-
// 1) super.method(...) to call a parent method.
// 2) super(...) to call a parent constructor (inside our constructor only).

// For example, let rabbit autohide when stopped;
class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} is hiding`);
        return this;
    }

    // Overriding stop() from Animal class
    stop() {
        super.stop();
        this.hide();
    }
}

console.log('');
const rabbit = new Rabbit('Bunny');
rabbit
    .run(95)
    .stop();


// OVERRIDING CONSTRUCTOR
class AnimalX extends Animal {
    // Entirely new constructor
    constructor(wingspan) {
        this.wingspan = wingspan;
    }
}

// console.log('')
// const animalX = new AnimalX(25); // Error

class AnimalY extends Animal {
    // Same constructor as class Animal along with extra property
    constructor(name,wingspan) {
        this.name = name;
        this.speed = 0;
        this.wingspan = wingspan;
    }
}

// console.log('');
// const animalY = new AnimalY('Ryu', 85); // Error

// To override constructor we need to call super inside derived constructor
class AnimalZ extends Animal {
    constructor(name, wingspan) {
        super(name);
        this.wingspan = wingspan;
    }
}

console.log('');
const animalZ = new AnimalZ('Ryu', 85);
animalZ.speak();
