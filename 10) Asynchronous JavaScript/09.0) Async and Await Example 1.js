const tick = (new Date()).getTime();

// The word “async” before a function means the function always returns a promise. Other values are wrapped in a resolved promise automatically. What ever the function returns becomes the resolved value.
async function f() {
    const promiseOne = new Promise(resolve => {
        setTimeout(() => {
            resolve(4);
        }, 5000);
    });

    // The keyword await makes JavaScript wait until that promise settles and returns its result. promiseOne resolves in 5sec, the function execution “pauses” and resumes when the promise settles with returning its result. Await keyword works only inside async function, if we try to use await in non-async function, there would be a syntax error. The pause occurs only inside this function, all sync code outside this function will be executed.
    const resultOne = await promiseOne;

    // <----------------------------------------> //

    // After spending 5sec above, following code will be executed.
    const promiseTwo = new Promise(resolve => {
        setTimeout(() => {
            resolve(5);
        }, 6000);
    });

    const resultTwo = await promiseTwo;

    return resultOne + resultTwo;
}


f().then(result => {
    console.log(result);

    const tock = (new Date()).getTime();
    console.log(`Time elapsed ${(tock - tick) / 1000}s`);
});