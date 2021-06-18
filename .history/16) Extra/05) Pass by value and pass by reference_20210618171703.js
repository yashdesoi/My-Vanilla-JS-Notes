const modify = function(data) {
  if (typeof data === 'number') {
    console.log('Number');
    data += 1;
  } else if (typeof data === 'string') {
    console.log('String');
    data += ' hello...';
  } else if (Array.isArray(data)) {
    console.log('Array');
    data.push(5);
  } else {
    console.log('Dictionary');
    data.key = 'world';
  }
}

// PASS BY REFERENCE
console.log('Example 1');
const arr = [1, 2, 3, 4];

console.log('Before:', arr);
modify(arr);
console.log('After:', arr);