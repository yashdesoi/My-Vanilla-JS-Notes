// In python we have map(callback_function, list_object). This is a generator in python which does not return anything by itself, but can be used with for loops to access the mapped elements, or with list() function to get a list with mapped elements.

// In JavaScript .map() is one of array method like .forEach(). .map() is non-mutating method i.e. it doesn't alter the original array in place, but rather it returns a new array with mapped elements.

// It operates in a same way how map() the generator works in python. In javascript .map() method is going to traverse through all the elements array, and going to return an array where element_j = callbackFunction(element_i). here i is the original element whereas j is the new mapped element.


// EXAMPLE 1
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map(price => {
    if (price >= 30) {
        // If the product's price is atleast 30 units then give a discount of 30%
        return price - (price*0.3);
    } else {
        return price;
    }
});

console.log(salePrices);


// EXAMPLE 2
const products = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'green shells', price: 30 },
    { name: 'banana skin', price: 10 },
    { name: 'red shells', price: 50 },
];

const saleProducts = products.map(product => {
    if (product.price > 30) {
        return { name: product.name, price: product.price / 2 };
    } else {
        return product;
    }
});

console.log(saleProducts);


// EXAMPLE 3
const array = [0,1,2,3,4,5,6,7,8,9];

const newArray = array.map(() => {

});

console.log(newArray);
