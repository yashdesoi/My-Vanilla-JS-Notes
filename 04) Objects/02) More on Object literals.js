let temp = {};

// We cannot use datatypes for keys in dot notation. Following will give error.

temp.128 = [1, 2, 3, 4]; //Error

temp.'key' = 'value'; //Error


// Dot notation must follow variable naming scheme.
temp.key_1 = 'value';

console.log(temp, '\n');


// We can use datatypes as keys in case of indexing, but inside object respective datatype
// will be converted into string datatype.

// Number --> String
temp[3.14] = [1,2,3];
// Array --> String
temp[['a', 'b', 'c']] = 'Vertigo';
// Boolean --> Name
temp[true] = 85;

console.log(temp, '\n');

// To access these keys with string datatypes, since we cannot we cannot use do notation.
// Indexing will come to rescue.
console.log(temp.'3.14'); // Error

console.log(temp[3.14]);
console.log(temp['3.14'], '\n');

console.log(temp[['a', 'b', 'c']]);
console.log(temp['a,b,c'], '\n');

console.log(temp[true]);
console.log(temp['true']);
console.log(temp.true, '\n');


// Setting object by creating it as a whole
temp = {
    // Keys
    // Numbers accepted
    128: 4.85,
    // String accepted
    'india': [1, 2, 3, 4],
    // Boolean accepted (It also gets converted into variable name)
    false: 'Random',
    // Array not accepted (Though it is accepted by indexing)
    ['1', '2', '3']: 45
};

console.log(temp); // Error


temp = {
    128: 4.85,
    'india': [1, 2, 3, 4],
    false: 'Random'
}

console.log(temp,'\n');

console.log(temp[128]);
console.log(temp['128'], '\n');

console.log(temp.india);
console.log(temp['india'], '\n');

console.log(temp.false);
console.log(temp['false']);
console.log(temp[false]);


