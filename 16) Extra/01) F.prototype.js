const Human = function(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Human.prototype.getFullname = function() {
  return this.firstname + ' ' + this.lastname;
}

const person1 = new Human('Khabib', 'Nurmagomedov');
const person2 = new Human('Alister', 'Overeem');

// We could have also defined getFullName inside the Human constructor function and it would have been perfectly fine. But then, person1 and person2 would have different copies of the getFullname function which would be redundant. Unnecessarily, this would have consumed extra memory. Hence, getFullName function is defined on the Human prototype so that all the objects created using Human constructor function have the same copy of getFullName function.
console.log(person1);
console.log(person2.getFullname());
console.log(Human.prototype);

