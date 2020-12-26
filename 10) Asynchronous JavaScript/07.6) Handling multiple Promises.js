// Let’s say we want many promises to execute in parallel and wait until all of them are ready. For instance, download several URLs in parallel and process the content once they are all done.

const tick = (new Date()).getTime();


// 1
const promiseOne = new Promise(resolve => {
    setTimeout(() => {
        resolve(4);
    }, 3000);
});

// 2
const promiseTwo = Promise.resolve(5);

// Above code is equivalent to
// const promiseTwo = new Promise(resolve => {
//     resolve(5);
// });

// 3
const promiseThree = new Promise(resolve => {
    setTimeout(() => {
        resolve(6);
    }, 5000);
});

// Promise.all takes an array of promises (it technically can be any iterable, but is usually an array) and returns a new promise. The new promise resolves when all listed promises are settled, and the array of their results becomes its result. Hence this example will take roughly 5 sec because longest time setTimeout has is 5sec for promiseThree and all three promises are handled asynchronously.

Promise.all([promiseOne, promiseTwo, promiseThree]).then(result => {
    console.log(result);

    const tock = (new Date()).getTime();
    console.log(`Time elapsed ${(tock - tick) / 1000}s`);
});