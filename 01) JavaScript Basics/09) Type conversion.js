let num1 = '100';
let num2 = 5;
let result = num1 + num2;

console.log(`'${num1}' + ${num2} =`, result, typeof result);


// From string to number (String representing a number).
num1 = Number(num1);
result = num1 + num2;

console.log(`${num1} + ${num2} =`, result, typeof result);


// From string to number (String is not respesenting any numeber).
num2 = 'abc';
num2 = Number(num2);
result = num1 + num2;

console.log(`${num1} + ${num2} =`, result, typeof result);


// From number to string.
result = 123;
console.log(result, typeof result);

result = String(result);;
console.log(result, typeof result);