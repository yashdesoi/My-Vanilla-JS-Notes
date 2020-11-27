// With "let" updating/re-assignment is allowed
let x = 15;
x = 20;
x += 5;
console.log('x =', x);


// But with "const" updating/re-assignment is not allowed
const y = 20;
y += 5; // Error
console.log(y);


// Re-defining from "let" with "const" or vice versa is also not allowed. 
let z = 10;

const z = 15; // Error

console.log(z);


// But if mutable object is assigned to const, then we can nutate it. Since mutation will
// retain the id of the object. With const we cannot point to a different object in memory.
const array = [1,2,3,4,5];

console.log(array);
array.pop();
console.log(array);