// In global scope this points to window object
console.log(this);

// We can attach new properties to this.
this.firstName = 'Yash';
this.lastName = 'Desai';

function printFullName() {
  // Function can access variables from its outter scope if they can't find them within themselfs.
  console.log(this);
  console.log(this.firstName + ' ' + this.lastName);
}

printFullName();

// call, apply and bind are methods present on the function object. They have them same functionality which they executes in different ways. We can simply just execute methods with different reference of this.
function introduce(city, country) {
  console.log(`${this.firstName}-${this.lastName}-${city}-${country}`);
}

class Person {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  introduce(city, country) {
    console.log(`${this.firstName}-${this.lastName}-${city}-${country}`);
  }
}

const p1 = new Person('John', 'Doe');
const p2 = new Person('Robin', 'Cage');

// CALL:- 
introduce('Mumbai', 'India');
introduce.call(p1, 'Austin', 'USA');
introduce.call(p2, 'Yazd', 'Iran');

p1.introduce('Denver', 'USA');
p1.introduce.call(p2, 'Wonderland', 'Russia');
p1.introduce.call(this, 'Pune', 'India');
//                 ^
//           window object

// APPLY:-
p2.introduce('Pizza', 'Mexica');
p2.introduce.apply(p1, ['Steak', 'SA']);

// BIND:-
const introduceJohnDoe = p2.introduce.bind(p1, 'Soup', 'Dish');
introduceJohnDoe();