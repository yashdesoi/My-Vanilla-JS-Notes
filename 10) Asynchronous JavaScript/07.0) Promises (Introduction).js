// Function inside Promise() is known as executor, executor takes two callbacks as parameters. A promise has two properties, state and result. Initially the state is 'pending' and result is undefined.

// After the promise is settled, the state is either 'fulfilled' if the promise is resolved with a result equals the argument of resolve(), or the state can be 'rejected' if the promise is rejected with a result equals the argument of reject().
const promise = new Promise(function(resolve, reject) {
    let num = Math.round(Math.random() * 100);
    
    if (num%2 === 0) {
        resolve(num);
    } else {
        reject(num);
    }
});


console.log('Start');

// Following is asynchronous code
// Once the promise is settled, then only following following code works. Callback functions inside .then() and .catch() is called as handler.
promise
    .then(value => {
        console.log(`Resolved: ${value} is even number`);
    })
    .catch(value => {
        console.log(`Rejected: ${value} is odd number`);
    });

console.log('End');