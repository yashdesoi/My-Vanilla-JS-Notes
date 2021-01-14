// PARENT OBJECT
const Animal = function(name) {
    this.name = name;
    this.speed = 0;
}

Animal.prototype.run = function(speed) {
    this.speed += speed;
    console.log(`${this.name} is running with a speed of ${this.speed}mph`);
    return this;
}

Animal.prototype.stop = function() {
    this.speed = 0;
    console.log(`${this.name} has stopped running`);
    return this;
}

const animal = new Animal('Shera');
console.log(animal);

animal
    .run(55)
    .stop();


// CHILD OBJECT
const Rabbit = function(name, earLen) {
    Animal.call(this, name); // Inheriting properties from parent object
    this.earLen = earLen; // Property specific to rabbit
}

// Inheriting methods from parent object
Rabbit.prototype = Object.create(Animal.prototype);

// Object.create(p) --> returns an empty object which has __proto__ property set to p. Parameter p is necessary it can either be some object datatype, or null for no __proto__ at all. Therefore Rabbit's prototype is set to empty object which has a __proto__ set to Animal's prototype.

const rabbit = new Rabbit('Buggs', 25);

// Method specific to rabbit. Now Rabbit's prototype won't be empty
Rabbit.prototype.hide = function() {
    console.log(`${this.name} is hiding`);
    return this;
};

console.log('');
console.log(rabbit);

rabbit
    .run(105)
    .stop()
    .hide();