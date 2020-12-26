const getTodos = function(callback) {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(false, request.responseText);
        } else if (request.readyState === 4) {
            callback(true, null);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

    request.send();
};


console.log(1);
console.log(2);

// Following is asynchronous code
getTodos((error, data) => {
    if (error) {
        console.log('could not fetch the data');
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);

// This is how we structure HTTP request, putting it inside a function which takes callback function as an argument. We can now pass different callback functions each with different functionality, thus making code reusable.