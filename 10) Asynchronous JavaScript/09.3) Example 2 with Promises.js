const tick = (new Date()).getTime();

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

Promise.all([promiseOne, promiseTwo]).then(result => {
    console.log(result[0] + result[1]);

    const tock = (new Date()).getTime();
    console.log(`Time elapsed ${(tock - tick) / 1000}s`);
});