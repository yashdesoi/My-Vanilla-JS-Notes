// "this" keysword is kinda similar to "self" parameter used inside class in python.
// "this" keyword points to the object inside which it is used.

let myObject = {
    key1: 'value1',
    key2: 'value2',
    insideMyObject: function(){
        // "this" will point to myObject, since it is used inside myObject.
        console.log(this);
    }
};


myObject.insideMyObject();

// If "this" is used in root document, then it will point to window object if javascript is
// used in browser console, or else if javascript is used with node.js then it will point to
// an empty object. 
console.log(this, '\n');


// APPLICATION of 'this'
let user = {
    // Property
    username: 'nisachr',
    blogs: ['Summer of 69', 'What I do in my free time', 'Welcome to the Jungle'],
    // Method
    logBlogs: function(){
        console.log(`${this.username} has following blogs:-`);
        this.blogs.forEach(function(blog,index){
            console.log(`${index + 1} ${blog}`);
        })
    }
}

user.logBlogs()


/* PROBLEM with Arrow functions in methods. */ console.log('');
myObject = {
    key1: 'value1',
    key2: 'value2',

    regularFunction: function(){
        console.log(this);
    },
    arrowFunction: () => {
        // Inside arrow function, "this" keyword points to the
        // root document object. 
        console.log(this);
    }
}

myObject.regularFunction();
myObject.arrowFunction();
console.log(this, '\n');

// Hence we don't use arrow functions for creating methods.


// We can create methods like FUNCTION DECLARATION
myObject = {
    key1: 'value1',
    key2: 'value2',

    add: function(num1,num2){
        return num1 + num2;
    },
    // Alternate way to create methods using regular functions
    subtract(num1,num2){
        return num1 - num2;
    }
}

console.log(myObject.add(5,6));
console.log(myObject.subtract(2,7));






