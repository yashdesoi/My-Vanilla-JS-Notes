console.log('Text 1')

let promise = new Promise((resolve) => {
    console.log('Text 2');

    // Actual network request takes time like this. Therefor even though promises are eager, promise can be resolve/reject anytime in future. setTimeout is macrotask.
    setTimeout(() => {
        console.log('Text 3');
        resolve(4);
        console.log('Text 4');
    }, 3000);
    console.log('Text 5');
});

console.log('Text 6');

// Promise handlers are microtasks.
promise.then(result => console.log(result));

console.log('Text 7');