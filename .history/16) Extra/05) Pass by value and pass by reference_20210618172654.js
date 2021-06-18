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

// Modifying by function

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


// Modifying by assignment

// PASS BY REFERENCE
const a1 = [6, 7, 8, 9];
const a2 = a1;

a1.push(10);
console.log(a1);
console.log(a2);

// PASS BY REFERENCE
const o1 = {place: 'Gulag'};
const o2 = o1;

o1.fish = 'Shark'
console.log(o1);
console.log(o2);

// PASS BY VALUE
let n1 = 11;
let n2 = n1;

n1 += 5;
console.log(n1);
console.log(n2);