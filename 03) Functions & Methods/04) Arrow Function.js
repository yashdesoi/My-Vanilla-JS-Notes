// I'm using "let" for declaring the variable "circleArea" with function as a function expression,
// so that we can re-assign them with new function. "const" will prohibit this.


// REGULAR FUNCTION
let circleArea = function(radius){
    return 3.14 * (radius ** 2);
};

console.log(circleArea(5));


// ARROW FUNCTION
circleArea = (radius) => {
    return 3.14 * (radius ** 2);
};

console.log(circleArea(5))


// If function has only one parameter, then we can omit the round brackets around it.
// Note:- If there are more than or less than one parameter, then it is compulsory to
// add the round brackets around, it can't be omitted.
circleArea = radius => {
    return 3.14 * (radius ** 2);
};

console.log(circleArea(5));


// If there is only one return statement inside function body then we can do something
// like this. This is what we do in python as lambda expressions.
circleArea = radius => 3.14 * (radius  ** 2);

console.log(circleArea(5));


// Arraow function with no parameters.
const greet = () => 'Hello, World!';

console.log(greet());


// Arrow functions with more than one parameter.
const coneVolume = (radius, height = 1) => (1/3)*3.14*(radius**2)*height;

console.log(coneVolume(5));


// When arrow function do not have just one return statement, then we have
// to write the complete code.
const factorial = num => {
    if ([0,1].includes(num)) {
        return 1
    }

    let sign = 1;

    if (num < 0) {
        num = -num;
        sign = -1
    }

    let product = 1;

    while (num > 1) {
        product = product * num;
        num = num - 1;
    }

    return sign * product;
};

console.log(factorial(-4));


