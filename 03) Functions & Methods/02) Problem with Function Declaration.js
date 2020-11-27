// Functions which are declared are hoisted in javascript. Therefore in ES6+ function
// expressions are used. Which are not hoisted.

// Following code won't give any error.
foo();

function foo(){
    console.log('Inside function declaration');
}


// Following code will give an error.
bar();

const bar = function(){
    console.log('Inside function expression');
};