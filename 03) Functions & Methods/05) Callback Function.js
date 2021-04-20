/* Whenever a function is passed as an argument, then that function is known as callback function. */ console.log('Example 1')
const callback = function() {
    return 5
};

const foo = function(callback) {
    let value = 6;
    return value + callback();
};

console.log(foo(callback));


/* We can even pass the function directly as an argument in function call. */ console.log('Example 2')
const bar = function(num, arr, callback) {
    // Cooking new array
    arr.push(num);
    arr = arr.map(element => {
        return num**2;
    });

    // Making use of callback function here
    callback(arr);
    //        ^
};

bar(8, [1,5,13], arr => {
    for (let val of arr) {
        console.log(val);
    }
});

