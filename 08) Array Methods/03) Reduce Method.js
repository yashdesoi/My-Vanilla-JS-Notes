// .reduce() method is bit different than .map() and .filter() Here .reduce() ain't gonna return a new array, but it is going to return a value.
// .reduce() takes two parameter .reduce(callbackFunction(accumulator, element), initial_value_of_accumulator) --> this is going to return final value of accumulator.
// When array.reduce() traverses through each element of array, it keeps track of previous value of accumulator, and uses that value of accumulator for next element and so on.


// EXAMPLE 1
let elements = [10, 20, 60, 40, 70, 90, 30];

let counter = elements.reduce((counter, element) => {
    // Return number of times an element greater than 50 appears
    if (element > 50) {
        counter += 1;
    }

    return counter;
}, 0);

console.log(counter);


// EXAMPLE 2: Calculate the total score of player mario
const scores = [
    {name: 'mario', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'mario', score: 70},
    {name: 'crystal', score: 60},
    {name: 'mario', score: 35},
    {name: 'yoshi', score: 20},
    {name: 'mario', score: 56},
    {name: 'crystal', score: 110},
    {name: 'mario', score: 148},
    {name: 'yoshi', score: 90},
    {name: 'mario', score: 110},
    {name: 'crystal', score: 70}
];

const marioTotal = scores.reduce((score, player) => {
    if (player.name === 'mario') {
        score += player.score;
    }

    return score;
}, 0);

console.log(marioTotal);


// EXAMPLE 3: To find the sum of each elements of an array
let array = [1,2,3,4,5];

let total = array.reduce((total, element) => {
    total += element;
    return total;
}, 0);

console.log(total);