// .catch not only catches reject() but it also catches first error before reject() and resolve() in the promise.

const promise = new Promise((resolve, reject) => {
    console.log(x);
    //          ^
    //   reference error
});

promise
    .then(() => {
        console.log('fulfilled');
    })
    .catch(() => {
        console.log('rejected');
    })
