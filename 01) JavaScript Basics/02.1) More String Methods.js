let fruit = 'Banana';
console.log(fruit);

// 1
console.log( fruit.lastIndexOf('n') );

// 2) Slicing of string object in javascript is done using sting method.
console.log( fruit.slice(2,5) );

// 3) .substr(x,n) in following method 'x' is the index of the starting character and 'n' is the number of character we want in our string after xth character including it.
console.log( fruit.substr(1,4) );

// 4) .replace() replaces the first character from string with the character we provide.
console.log( fruit.replace('a','k') );

// 5) .includes() is similar to "in" keyword in python
console.log( fruit.includes('nan') );
console.log( fruit.includes('fan') );

// 6) .split()
console.log( fruit.split('n') );

// 7) .trim() deletes the spaces before and after the string
fruit = ' Ban ana   ';
console.log(fruit);
console.log( fruit.trim() );