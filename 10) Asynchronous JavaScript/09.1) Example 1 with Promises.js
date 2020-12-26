const tick = (new Date()).getTime();

(new Promise(resolve => {
    setTimeout(() => {
        resolve(4);
    }, 5000);
})).then(result => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(result + 5);
        }, 6000);
    });
}).then(result => {
    console.log(result);

    const tock = (new Date()).getTime();
    console.log(`Time elapsed ${(tock - tick) / 1000}s`);
});