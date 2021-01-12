const o = {};
const a = [];
const f = function() {};
const d = new Date();

// Object literal
console.log(o);
console.log(o.__proto__);
console.log(o.__proto__.__proto__); // returns null

// Array
console.log('');
console.log(a);
console.log(a.__proto__);
console.log(a.__proto__.__proto__); // same as o.__proto__
console.log(a.__proto__.__proto__.__proto__); // returns null

// Function
console.log('');
console.log(f);
console.log(f.__proto__); // type f. in console then a dropdown will open where we can see all the methods belonging to function f
console.log(f.__proto__.__proto__); // same as o.__proto__
console.log(f.__proto__.__proto__.__proto__); // returns null

// Date
console.log('');
console.log(d);
console.log(d.__proto__);
console.log(d.__proto__.__proto__); // same as o.__proto__
console.log(d.__proto__.__proto__.__proto__); // returns null