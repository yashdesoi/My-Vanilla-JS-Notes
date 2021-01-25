// Sets are similar to set datatype in python. In javascript set comes under object datatype like how array, date, object literal etc.

const array = [1, 2, 4, 7, 2, 3, 7]; // Array accepts duplicate values
console.log(array);

// This is how we create an empty set
const set = new Set();
console.log(set);

// Adding values to a set (Method 1)
const set_2 = new Set(array); // Array ommits duplicate values
console.log(set_2);

// Creating array out of set (array without any duplicate values)
const array_2 = [...set_2];
console.log(array_2);

// Creating array out of set directly
const array_3 = [...new Set(array)];
console.log(array_3);

// Adding values to set (Method 2)
const set_3 = new Set();
set_3.add(25);

// We can also do method chaining since add method return this internally. All methods mentioned below are mutating.
set_3
    .add(26)
    .add(57)
    .add(25) // Adding another 25
    .delete(26); // Removing value

console.log(set_3, set_3.size, set_3.has(57), set_3.has(26));
//                        ^           ^
//                 set equivalent  check whether
//                   of length       a value is
//                                 present in set

// Elements of sets cannot be accessed with indexing
console.log(set_3[1], set_3[0]);

// Though set has a method .forEach()
set_2.forEach(element => {
    console.log(element);
});

