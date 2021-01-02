// localStorage is the object present inside window object of the browser. localStorage allows us to save key/value pairs in the browser itself.

// What’s interesting about them is that the data survives a page refresh, full browser restart and even OS reboot.

// The storage is bound to the origin (domain/protocol/port triplet). That is, different protocols or subdomains infer different storage objects, they can’t access data from each other.

// local storage for http://127.0.0.1:5501/ will remain same for all projects hence hence project hosted on 127.0.0.1:5501 can have access to data provided/leaked by previous project which was hosted there.

/*

1) window.localStorage
2) localStorage.length
3) localStorage.setItem(key, value)
4) localStorage.getitem(key)
5) localStorage.removeItem(key)
6) localStorage.clear()
7) localStorage.key(index)

*/

console.log(window.localStorage);

// Storing data:- Both key/value pair must be in string datatype, if data with different type is provided, then it will be automatically type coerced to string.
localStorage.setItem('name', 'Goku');
localStorage.setItem('age', 22);


// Retrieving data:-
console.log(localStorage.getItem('name'), localStorage.getItem('age'));


// Overwriting data:-
localStorage.setItem('name', 'Gohan');
console.log(localStorage.getItem('name'), localStorage.getItem('age'));


// Number of user defined properties:-
console.log(localStorage.length);


// Following key and value will be coerced to string:-
localStorage.setItem(['1', '2', '3'], {
    top: 23,
    left: 35
});


// Traversing the localStorage:-
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(`${key}:- ${localStorage.getItem(key)}`);
}


// Deleting single property:-
console.log('Length:', localStorage.length);
localStorage.removeItem('name');
console.log('Length:', localStorage.length);


// Deleting all properties:-
localStorage.clear();
console.log('Length:', localStorage.length);



