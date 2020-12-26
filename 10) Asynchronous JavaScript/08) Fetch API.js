// Instead of using XMLHttpRequest for making an HTTP request, we can use fetch() function which is built into javascript.

// fetch() takes two arguments fetch(URL, {options}), {options} object is used to make POST request but if it is simple GET request we can use fetch(URL) which returns a promise which has a Response object as an argument of resolve()

// If we chain .then() to fetch(URL), we can use this Response object which is not a JSON data coming from URL. Response object has a method .json(), Response.json() return a promise which has a resolved value as parsed JSON data, but if Response doesn't have a valid JSON then Response.json() is going to be rejected.

// We can chain another .then() to use this data.

// If we chain .catch(), then this will only catch a network error, meaning if we are offline or something. but won't catch 404 error. If there is 404 error still promise is going to resolve Response object.

// Try going offline and then running the script vs. making deliberate change in URL and running the script.

fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => {
        console.log('Resolved', response);
        return response.json();
        //           ^
        //     promise object
    })
    .then(data => console.log('Resolved', data))
    .catch(message => console.log('Rejected', message));


// Better way to use fetch
// fetch('https://jsonplaceholder.typicode.com/todo/')
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error("Data couldn't be fetched :(");
//         }
//     })
//     .then(data => console.log(data))
//     .catch(message => console.log('Rejected', message));