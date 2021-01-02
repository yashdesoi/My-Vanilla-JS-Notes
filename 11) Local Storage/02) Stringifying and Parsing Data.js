let data = {
    name: 'Yash',
    age: 22,
    gender: 'male'
}

localStorage.setItem('data', data);
//                     ^
//          Following data will get
//          type coerced to string
console.log(localStorage.getItem('data'), typeof localStorage.getItem('data'));
console.log(localStorage);


// To store it properly we can use JSON.stringify() which returns JSON string from JS object
localStorage.setItem('data', JSON.stringify(data));
console.log(localStorage.getItem('data'), typeof localStorage.getItem('data'));
console.log(localStorage);


// To retrieve the data properly in javascript object, we can use JSON.parse()
let parsedData = JSON.parse(localStorage.getItem('data'));
console.log(parsedData, typeof parsedData);


// Clearing local storage for actual projects
localStorage.clear();