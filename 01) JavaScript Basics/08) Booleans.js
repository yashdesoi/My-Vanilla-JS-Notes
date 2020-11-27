// In python we have True and False, where as in javascript we have lowercase.
console.log(true, false);

let array = ['Jolly', 'Pan', 25, 'Boomer', 4.147, 'Jack'];
let string = 'yashdesai450@gmail.com';

console.log(array);
console.log(string);

// In python we have in keyword which checks whether a certain character or numeber
// is present inside that string or list and returns True or False. In javascript we
// have .include() method for both strings and arrays.

console.log( "'Pan' in array?",array.includes('Pan') );
console.log( '4.14 in array?',array.includes(4.14) );

console.log( "'@' in string?",string.includes('@') );
console.log( "'z' in string?",string.includes('z') );

console.log( '5 in string?',string.includes(5) );
console.log( "'5' in string?",string.includes('5') );


