// NaN = Not a number
console.log(typeof NaN);

let result = 'Hi' * 3;
console.log(result);
// We don't have string multiplication in javascript

reult = 'Hello' / 5;
console.log(result);
// We won't get an error either.

// Unusual behaviour.
result = "I've " + 5 + " apples";
console.log(result);
console.log(typeof result);

result = '100' + 1;
console.log(result);
console.log(typeof result);

// Converting a number into string format.
let num = 17;
console.log(num);
console.log(typeof num);

num += '';
console.log(num);
console.log(typeof num);
