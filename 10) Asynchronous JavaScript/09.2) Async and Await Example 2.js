const tick = (new Date()).getTime();

async function f() {
    const promiseOne = new Promise(resolve => {
        setTimeout(() => {
            resolve(4);
        }, 5000);
    });

    const promiseTwo = new Promise(resolve => {
        setTimeout(() => {
            resolve(5);
        }, 6000);
    });

    // <----------------------------------------> //

    const resultOne = await promiseOne;

    const resultTwo = await promiseTwo;

    return resultOne + resultTwo;
}


f().then(result => {
    console.log(result);

    const tock = (new Date()).getTime();
    console.log(`Time elapsed ${(tock - tick) / 1000}s`);
});