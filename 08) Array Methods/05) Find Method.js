// array.find(callbackFunction()) returns the value by referance of the first element inside an array which passes a certain test in callback function.

// EXAMPLE 1
let scores = [10, 5, 0, 40, 60, 10, 20, 70];

let firstHighestScore = scores.find(score => {
    if (score > 50) {
        return true;
    }
});

console.log(firstHighestScore);


// EXAMPLE 2
scores = [10, 61, 0, 40, 60, 10, 20, 70];

firstHighestScore = scores.find(score => score > 50);
console.log(firstHighestScore);

firstHighestScore = scores.find(score => score > 101); // If it cannot find it will return undefined
console.log(firstHighestScore);




// Example 3 (Value is passed by reference)
serverList = [
    { id: 1, name: 'Dev', status: 'online' },
    { id: 2, name: 'Production', status: 'offline' },
];

const server = serverList.find(server => {
    return server.id === 2;
});

console.log(server);

server.status = 'online';

console.table(serverList);

