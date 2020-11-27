// In python array is termed as list, and it belongs to list data-type.
// But in javascript it belongs to "object" data-type.
let arrayOfStrings = ['Brandon','Lua','Jessica','Bob'];
console.log(arrayOfStrings);
console.log(typeof arrayOfStrings);

let arrayOfNumbers = [1,2,3,4,5,6];
console.log(arrayOfNumbers);

let mixedArray = ['Keith',3.14,5,'Ema',47];
console.log(mixedArray);


/* INDEXING IN ARRAYS */console.log('')
console.log( arrayOfStrings[2],mixedArray[1] );


/* ARRAY ATTRIBUTS */console.log('')
// 1) To find length of array (similar to strings)
console.log( arrayOfNumbers.length );


/* ARRAY METHODS */console.log('')
// 1)
console.log( mixedArray.indexOf('Ema') );
console.log( mixedArray.indexOf('Pan') ); // Index of something which is not in the given array will return -1

// 2)
let result = arrayOfStrings.join('-');
console.log(result);
console.log(typeof result);

// 3) .concat() concatenate two lists. I python we do this by simply by + operator [1,2,3] + [4,5] --> [1,2,3,4,5]
result = arrayOfNumbers.concat([7,8,9,10]);
console.log(result);

// 4) .push() is JavaScript version of .append() from python. .append() return nothing, whereas .push() return the length
//    of array after the .push() method was applied. It mutates the array.
result = arrayOfStrings.push('Alex');
console.log(arrayOfStrings);
console.log(result);

// 5)
result = mixedArray.pop();
console.log(mixedArray);
console.log(result);

// 6) .slice() is used to slice an array, in python below code is done like this result = arrayOfNumbers[2:5]
result = arrayOfNumbers.slice(2,5);
console.log(arrayOfNumbers);
console.log(result);

// Cloning of immutable datatype array, in python --> result = arrayOfNumbers[::]
result = arrayOfNumbers.slice(0,arrayOfNumbers.length);
console.log(arrayOfNumbers);
console.log(result);
