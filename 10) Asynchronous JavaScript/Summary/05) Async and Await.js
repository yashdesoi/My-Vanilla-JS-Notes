console.log('Text 1'); // Break

const tick = (new Date()).getTime();

async function f() {
    console.log('Text 2'); // Break
    const promiseOne = new Promise(resolve => {
        setTimeout(() => {
            resolve(4);
        }, 15000);
    });
    console.log('Text 3'); // Break
    const resultOne = await promiseOne;
    console.log('Text 4'); // Break
    const promiseTwo = new Promise(resolve => {
        setTimeout(() => {
            resolve(5);
        }, 15000);
    });
    console.log('Text 5'); // Break
    const resultTwo = await promiseTwo;
    console.log('Text 6'); // Break
    return resultOne + resultTwo;
}

console.log('Text 7'); // Break


f().then(result => {
    console.log(result);

    const tock = (new Date()).getTime();
    console.log(`Time elapsed ${(tock - tick) / 1000}s`);
});

console.log('Text 8'); // Break