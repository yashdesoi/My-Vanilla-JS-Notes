// EXAMPLE 1
const request_one = new XMLHttpRequest();

request_one.addEventListener('readystatechange', () => {
    if (request_one.readyState === 4) {
        console.log(request_one.responseText);
    }
});

request_one.open('GET', 'https://jsonplaceholder.typicode.com/todox/');
//                                                                ^
//                                                Following API endpoint doesn't exist

request_one.send();


// XMLHttpRequest object also comes with .status property which returns HTTP response status code. Responses are grouped in five classes:

// Informational responses (100–199)
// Successful responses (200–299)
// Redirects (300–399)
// Client errors (400–499)
// Server errors (500–599)

// XMLHttpRequest is going to go through all 4 states anyway even if there are client errors or server errors. In above example URL is incorrect hence we got 404 error. Hence we have to check both state of the XMLHttpRequest aswell as status of XMLHttpRequest before getting response text

// EXAMPLE 2
const request_two = new XMLHttpRequest();

request_two.addEventListener('readystatechange', () => {
    if (request_two.readyState === 4 && request_two.status === 200) {
        console.log(request_two.responseText);
    } else if (request_two.readyState === 4) {
        console.log('could not fetch the data');
    }
});

request_two.open('GET', 'https://jsonplaceholder.typicode.com/todox/');
//                                                                ^
//                                                Following API endpoint doesn't exist

request_two.send();

// EXAMPLE 3
const request_three = new XMLHttpRequest();

request_three.addEventListener('readystatechange', () => {
    if (request_three.readyState === 4 && request_three.status === 200) {
        console.log(request_three.responseText);
    } else if (request_three.readyState === 4) {
        console.log('could not fetch the data');
    }
});

request_three.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

request_three.send();


