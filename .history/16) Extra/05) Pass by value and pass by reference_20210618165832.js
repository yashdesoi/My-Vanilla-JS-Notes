const modify = function(arr) {
  arr.push(5);
}

console.log('EXAMPLE 1');
const arr = [1, 2, 3, 4];

console.log('Before:', arr);
modify(arr);
console.log('After:', arr);


console.log('\nEXAMPLE 2');
const array = [1, 2, 3, 4];

console.log('Before:', array);
modify(array);
console.log('After:', array);