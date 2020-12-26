console.log('Text 1');

// When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result. Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked.
let promise = new Promise((resolve) => {
    console.log('Text 2');
    resolve(4);
    console.log('Text 3');
});

console.log('Text 4');

// Promise handlers .then/.catch/.finally are always asynchronous. Even when a Promise is immediately resolved, the code on the lines below .then/.catch/.finally will still execute before these handlers. Promise handlers are know as microtask.
promise.then(result => console.log(result));

console.log('Text 5');