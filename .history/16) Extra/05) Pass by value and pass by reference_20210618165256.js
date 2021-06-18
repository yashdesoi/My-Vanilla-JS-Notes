const modify = function(arr) {
  this.arr.push(5);
}

const arr = [1, 2, 3, 4];

console.log('Before:', arr);
modify(arr);
console.log('After:', arr);