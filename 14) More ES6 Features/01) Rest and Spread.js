// Rest
// Rest is similar to *args in python. Following is the rest parameter syntax in javascript.
const showRest = function(...nums) {
    console.log(nums);
};

showRest(2, 3, 4, 9, 7); // Function call

// Application of rest parameter
const sum = function(...nums) {
    const total = nums.reduce((acc, element) => {
        acc += element;
        return acc;
    }, 0);

    return total;
}

console.log(sum(2, 3, 4, 9, 7)); // Function call
console.log();


// Spread
// Like how rest combines individual values into single array, spread disintegrates single array into individual values.
// Rest is a parameter whereas spread is an argument, that is rest is used in function declaration/expression and spread is used in function call.

// Spread syntax for Array
const array = [2, 3, 4, 9, 7];

console.log(...array);
//      ^
// Above statement is similar to following
console.log(2, 3, 4, 9, 7);

const total = function(a=0, b=0, c=0, d=0, e=0) {
    return a + b + c + d + e;
};

console.log(total());
console.log(total(...array));
console.log();

// We can also use spread inside another array, to extend the other array or to clone the current array.
// Extending array
const arrayTwo = [1, 2, 3, ...array];
console.log(arrayTwo);

// Cloning array
const arrayThree = [...array];
console.log(arrayThree);
console.log();


// Spread syntax for Object literal
const object = {
    name: 'Yash',
    age: 22
};

// Extending object literal
const objectTwo = {
    ...object,
    gender: 'Male'
};
console.log(objectTwo);

// Cloning object literal
const objectThree = {...object};
console.log(object);

// But we cannot use it in function call