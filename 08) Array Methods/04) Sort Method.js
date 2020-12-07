// Example 1:- Sorting strings
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

names.sort();

// A --> Z
console.log(names);

names.reverse();

// Z --> A
console.log(names);


// Example 2:- Sorting numbers
let scores = [10, 9, 20, 5, 35, 70, 45];

scores.sort();

// There is one bug while sorting numbers. Javascript don't consider the number as a whole, javascript only compares the first digit while comparing. Hence scores[0] is 10 rather than 5 because first digit of 10 is 1, and first digit of 5 is 5 itself. And last number is 9 rather than 70.
console.log(scores);

// To tackle this bug, .sort() has following feature. array.sort(callbackFunction(element, nextElement))
scores.sort((firstElement, secondElement) => {
    if (firstElement > secondElement) {
        // returning +(ve) number signifies that, sort secondElement to an index lower than firstElement (i.e. secondElement comes first).
        return 1;
    } else if (secondElement > firstElement) {
        // returning -(ve) number signifies that, sort firstElement to an index lower than secondElement (i.e. firstElement comes first).
        return -1;
    } else {
        // returning 0 signifies that, leave firstElement and secondElement unchanged with respect to each other, but sorted with respect to all different elements.
        return 0;
    }
});

console.log(scores);

// EXAMPLE 3:- We can also make the above solution small.
scores = [10, 9, 20, 5, 35, 70, 45];

scores.sort((a,b) => a-b);
console.log(scores);

// REVERSE
scores.sort((a,b) => b-a);
console.log(scores);


// EXAMPLE 4
const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 10},
    {name: 'yoshik', score: 10},
    {name: 'shaun', score: 70},
    {name: 'maryo', score: 20}
];

// To sort players based on their scores, such that player with heighest score comes first in array. If 2 player have same scores then sort them according to their name in lexical order.
players.sort((a,b) => {
    if (a.score > b.score) {
        return -1;
    } else if (a.score < b.score) {
        return 1;
    } else {
        if (a.name.length > b.name.length) {
            let size = b.name.length;

            for (let i = 0; i < size; i++) {
                if (b.name[i] < a.name[i]) {
                    return 1;
                } else if (b.name[i] > a.name[i]) {
                    return -1;
                }
            }
            return 1;
        } else if (a.name.length < b.name.length) {
            let size = a.name.length;

            for (let i = 0; i < size; i++) {
                if (a.name[i] < b.name[i]) {
                    return -1;
                } else if (a.name[i] > b.name[i]) {
                    return 1;
                }
            }
            return -1;
        } else {
            for (let i = 0; i < a.name.size; i++) {
                if (a.name[i] < b.name[i]) {
                    return -1;
                } else if (a.name[i] > b.name[i]) {
                    return 1;
                } 
            }
            return 0;
        }

    }
});

console.log(players);


