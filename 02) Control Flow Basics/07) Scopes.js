// In javascript if we declare a variable in root of the document, then that variable is global.
// Even inside functions, we need not have to put "global" before them to use them inside functions,
// like what we use to do in python.

// EXAMPLE 1
let x = 10;

function foo() {
    x += 5;
}

console.log('x =', x);

// EXAMPLE 2
let y = 10;

function bar() {
    y += 5;
}

bar();

console.log('y =', y);
