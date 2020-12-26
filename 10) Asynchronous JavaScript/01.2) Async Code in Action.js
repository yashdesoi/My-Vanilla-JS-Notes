let i = 4;

setTimeout(() => {
    // data defined in global/parent scope is accessible in this callback
    console.log(i);
    i += 1;
    console.log(i);
}, 3000);

console.log(i);