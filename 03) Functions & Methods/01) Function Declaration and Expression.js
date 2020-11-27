// FUNCTION DECLARATION
function foo(){
    console.log('Inside function declaration');
}

// FUNCTIONN CALL
foo();
foo();
foo();


// FuUNCTION EXPRESSION:- Like every other expression in programming where there is an assignment to some
//                       variable, we can do the same but with functions. following are some common non-function
//                       expressions in javascript. "let variable = something;", "const x = 15;", etc.


let bar = function(){
    console.log('Inside function expression');
}; /* <-- Like every other expression we have to put ";" after them */

// FUNCTIONN CALL
bar();
bar();
bar();

// If we have use "let" in expression, we cas re-assign that function name to something else, hence we must use "const"
// in function expressions.
bar = 59;

bar();

// Function expression using "const"
const temp = function(){
    console.log('Inside another function expression');
};

// Now we cannot re-assign or update the temp, if we do that we will get an error.
temp();

temp = 85;