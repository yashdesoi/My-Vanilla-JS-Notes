// Whenever a function is passed as an argument, then that function is known as callback function.
const callback = function() {
    return 5
};

const foo = function(callback) {
    let value = 6;
    return value + callback();
};

console.log(foo(callback));


// We can even pass the function directly as an argument in function call.
const bar = function(num, arr, callback) {
    arr.push(num);
    callback(arr);
};

bar(8, [1,5,13], arr => {
    console.log(arr);
});

