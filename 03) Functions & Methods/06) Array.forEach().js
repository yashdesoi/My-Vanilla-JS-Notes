// The forEach() method executes a provided callback function once for each array element.

const names = ['Yash', 'Kunal', 'Hardik', 'Vaibhav', 'Jay', 'Savio'];

// The callback function can have at most two parameters.

const callbackFunction = (element, index) => {
    console.log(`${index + 1}. ${element}`);
};

names.forEach(callbackFunction);


// Example 2

const numbers = [7, 6, 5, 4, 3, 2, 1];

numbers.forEach((element,index) => {
    console.log(element + index);
});