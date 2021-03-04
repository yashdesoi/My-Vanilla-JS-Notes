// The whole thing works, because a call to promise.then() returns a promise, so that we can call the next .then() on it. When a handler returns a value, it becomes the result of that promise, so the next .then is called with it.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    }, 2000);
});

// This is promise chaining
promise
    .then(result => {
        console.log(result);
        return result * 2;
    })
    .then(result => {
        console.log(result);
    });

    
// // This is not promise chaining
// promise.then(result => {
//     console.log(result);
// });

// promise.then(result => {
//     console.log(result * 2);
// });