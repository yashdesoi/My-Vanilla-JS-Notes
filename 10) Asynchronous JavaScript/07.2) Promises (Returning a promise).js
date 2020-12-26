// A handler, used in .then(handler) may create and return a promise. In that case further handlers wait until it settles, and then get its result.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    }, 2000);
});

// promise.then(result => {
//     console.log(result);
//     return promise;
// }).then(result => {
//     console.log(result);
// });

promise.then(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result * 2);
        }, 2000);
    });
}).then(result => {
    console.log(result);
});