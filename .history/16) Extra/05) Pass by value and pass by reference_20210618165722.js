const modify = function(arr) {
  arr.push(5);
}

const arr = [1, 2, 3, 4];

console.log('EXAMPLE 1\n', 'Before:', arr);
modify(arr);
console.log('After:', arr);


const array = [1, 2, 3, 4];

console.log('\nEXAMPLE 2\n', 'Before:', array);
modify(array);
console.log('After:', array);