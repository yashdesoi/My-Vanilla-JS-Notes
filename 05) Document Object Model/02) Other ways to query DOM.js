// querySelectors take CSS selectors as arguments, but following selectors take tags, classes and ids as whole only.
/*
1) document.getElementById()
2) document.getElementsByClassName()
3) document.getElementsByTagName()
*/

// We can grab both ids by .querySelectorAll(), following will return Node List.
let heading = document.querySelectorAll('#title');
console.log(heading);

// 1)
// But following method will grab the first id title just like .querySelector().
// Here we don't have to put # before title because following methods don't take
// selectors as arguments.
heading = document.getElementById('title');
//                                   ^
//                            not a selector
console.log(heading);


// 2) 
// Following method will return HTML Collection, which is another type of Array
// format like Node List. Though HTML Collection is available with very few methods
// with it, like .forEach() method is not availabe with HTML Collection.
let classes = document.getElementsByClassName('special');
//                                              ^
//                                       not a selector
console.log(classes);

// classes.forEach(element => {
//     console.log(element)    
// }); // Error

// Though we can index HTML Collection
for (let i = 0; i < classes.length; i++) {
    console.log(`${i+1})`,classes[i]);
}


// 3) Following method will also return HTML Collection
let p = document.getElementsByTagName('p');
console.log(p);

let division = document.getElementsByTagName('div');
console.log(division);








