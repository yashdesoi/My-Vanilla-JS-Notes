// XMLHttpRequest (XHR) is a built-in browser object that allows to make HTTP requests in JavaScript. You can retrieve data from a URL without having to do a full page refresh. Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.

// Step 1:- Creating an instance of XMLHttpsRequest object
const request = new XMLHttpRequest();


// Step 4:- Request object goes through 4 states/events. We will attach an event listner with an event type 'readystatechange' which is going to trigger a callback function whenever request object undergoes a change in state. We are going to put step 4 before step 2 and 3 because, step 2 and 3 are states in themself. Attaching an eventlistner before step 2 and 3, so that we can listen to 'OPENED' (Step 2) and 'HEADERS_RECEIVED' (Step 3) states. Since XMLHttpRequest goest through 4 states, following event listner is going to trigger 4 times. 
request.addEventListener('readystatechange', () => {
    console.log(request);
    // XMLHttpRequest property which returns the state value
    console.log(request.readyState);
    // XMLHttpRequest property which returns the response form the API endpoint (JSON from this API endpoint). This is availabe only after state 3, but full data is available only after state 4.
    console.log(request.responseText);
});


// Step 2:- Initializing a request. open() is method belonging to XMLHttpRequest object
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//             ^                           ^
//      type of request              API endpoint



// Step 3:- Sending the request. send() is method belonging to XMLHttpRequest object
request.send();