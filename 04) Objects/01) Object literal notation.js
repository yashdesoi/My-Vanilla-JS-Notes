// Object literal is similar to python's dictionary. But in python, both key and value
// must be of some datatype. In javascript its not the case.

let person = {
    // properties
    firstName: 'Yash',
    lastName: 'Desai',
    email: 'yashdesai450@gmail.com',
    location: 'Mumbai',
    languages: ['English', 'Marathi', 'Hindi']
};


console.log(person, '\n');

// Dot notation for accessing properties.
console.log(person.firstName);
console.log(person.languages, '\n');


// Indexing for accesing properties.
// We have to provide string form of property name, for indexing.
console.log( person['lastName']);
console.log( person['location'], '\n');


// We can change the existing properties.
person.firstName = 'Himani';
person['email'] = 'hdesoi2002@gmail.com';

console.log(person, '\n');


// We can add new properties.
person.age = 22;
person['employed'] = false;

console.log(person, '\n');


// Benifits of indexing ove dot notation.
let key = 'gender';

// Following code uses dot notation for creating a new property "gender" for person object. But flaw
// with this method is that, that javascript will create a property named "key" instead of "gender" and
// will assign the value 'female' to it.
person.key = 'Female';
console.log(person, '\n');


// Hence use indexing in this case.
person[key] = 'Female';
console.log(person, '\n');


// Accesing nested list
console.log(person.languages[2]);
