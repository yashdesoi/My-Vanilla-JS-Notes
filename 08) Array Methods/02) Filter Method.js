// In python we have an in-built generator filter(callback_function, list_object).


// EXAMPLE 1

// mathod 1
const array = [10, 30, 15, 25, 50, 40, 5];

let filteredArray = array.filter(element => {
    if (element > 20) {
        return true;
    } else {
        return false;
    }
});

console.log(filteredArray);

// method 2
filteredArray = array.filter(element => element > 20);

console.log(filteredArray);


// EXAMPLE 2
filteredArray = array.filter(() => false);

console.log(filteredArray);


// EXAMPLE 3
const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];

// To filter out the users which don't have the premium account
const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);