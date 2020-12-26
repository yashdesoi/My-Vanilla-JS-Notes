// EXAMPLE 1
console.log(1);
console.log(2);
console.log(3);

// Following code is asynchronous in nature. Synchronous code means each line of code is going to be executed one after another. In following example, line 1 to 3 and line 10 to 14 is synchronous, but on line 6 we have setTimeout which is going to trigger after 5 seconds are passed after its execution. But setTimeout being async, not going to halt the execution of line 10 for next 5 seconds, instead javascript is going to execute reset of the code and then going to execute setTimeout after completing 5 seconds.
setTimeout(() => {
    console.log(4)
}, 8000);

setTimeout(() => {
    console.log(5);
}, 5000);

console.log(6);
console.log(7);
console.log(8);
console.log(9);
