// EXAMPLE 2:- (WARNING) long loop
console.log('Start');

// Here though we have set the timer to 5 seconds, but even after 5 seconds, execution of synchronous code was not over. Hence setTimeout was triggred after the end of synchronous code.
setTimeout(() => {
    console.log('Mid');
}, 5000);

let i = 0
while (i < 10000000000) {
    i += 1;
}

console.log('End');