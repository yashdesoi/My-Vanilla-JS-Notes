// As you can see, the .catch doesn’t have to be immediate. It may appear after one or maybe several .then. The easiest way to catch all errors is to append .catch to the end of chain. Normally, such .catch doesn’t trigger at all. But if any of the promises above rejects (a network problem or invalid json or whatever), then it would catch it and all the .then afterwards would be ignored.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    }, 2000);
});


promise
    .then(result => {
        console.log('1st Resolved', result);
        return result * 2;
    })
    .then(result => {
        console.log('2nd Resolved', result);
        return new Promise((resolve, reject) => {
            reject(result * 2);
        })
    })
    .then(result => {
        console.log('3rd Resolved', result);
        return new Promise((resolve, reject) => {
            resolve(result * 2);
        })
    })
    .then(result => {
        console.log('4th Resolved', result);
        return new Promise((resolve, reject) => {
            resolve(result * 2);
        })
    })
    .catch(result => {
        console.log('1st Rejected', result);
    });

    
// promise
//     .then(result => {
//         console.log('1st Resolved', result);
//         return result * 2;
//     })
//     .then(result => {
//         console.log('2nd Resolved', result);
//         return new Promise((resolve, reject) => {
//             resolve(result * 2);
//         })
//     })
//     .then(result => {
//         console.log('3rd Resolved', result);
//         return new Promise((resolve, reject) => {
//             resolve(result * 2);
//         })
//     })
//     .then(result => {
//         console.log('4th Resolved', result);
//         return new Promise((resolve, reject) => {
//             resolve(result * 2);
//         })
//     })
//     .catch(result => {
//         console.log('1st Rejected', result);
//     });