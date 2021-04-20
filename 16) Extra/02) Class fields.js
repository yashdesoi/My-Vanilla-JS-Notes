class Person {
  gender = 'Male';

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}. I'm ${this.age} years old ${this.gender}`);
  }
}

const p1 = new Person('Yash', 23);

p1.greet();
console.log(p1);