const functionOne = () => {
    return 5
};

const functionTwo = callbackFunction => {
    let value = 6;
    return value + callbackFunction();
};

// Whenever a function is passed as an argument, then that function is known as callback function.

console.log(functionTwo(functionOne));

// We can even pass the function directly as an argument in function call.

let temp = functionTwo(function(){
    return 4;
});

console.log(temp);

// As an arrow function.

temp = functionTwo(() => {
    return 8;
});

console.log(temp);

