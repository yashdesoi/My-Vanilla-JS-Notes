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
const arr = [1, 2, 3, 4];

console.log('Before:', arr);
modify(arr);
console.log('After:', arr);


// PASS BY REFERENCE
const obj = {
  name: 'Yash'
};

console.log('Before:', obj);
modify(obj);
console.log('After:', obj);


// PASS BY VALUE
const num = 3;

console.log('Before:', num);
modify(num);
console.log('After:', num);


// PASS BY VALUE
const str = 'Jimmy';

console.log('Before:', str);
modify(str);
console.log('After:', str);