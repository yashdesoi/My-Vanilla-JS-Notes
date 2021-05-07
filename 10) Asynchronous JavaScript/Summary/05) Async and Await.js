const tick = (new Date()).getTime();

async function f() {
    const promiseOne = new Promise(resolve => {
        setTimeout(() => {
            resolve(4);
        }, 5000);
    });
    
    console.log('Break 1');
    const resultOne = await promiseOne;
    
    const promiseTwo = new Promise(resolve => {
        setTimeout(() => {
            resolve(5);
        }, 10000);
    });
    
    console.log('Break 2');
    const resultTwo = await promiseTwo;
    
    return resultOne + resultTwo;
}

f().then(result => {
    console.log(result);

    const tock = (new Date()).getTime();
    console.log(`Time elapsed ${(tock - tick) / 1000}s`);
});