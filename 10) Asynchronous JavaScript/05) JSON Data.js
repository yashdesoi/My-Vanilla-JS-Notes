// JSON is a string whose format very much resembles JavaScript object literal format
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        // Following response is a JSON data, but it is in string format
        let data = request.responseText;
        console.log(data, typeof data);

        // To convert the JSON string into javascript object in JSON format, we have to use built in javascript object JSON which has a method called parse() which will parse the string and returns raw JSON data.
        data = JSON.parse(data);
        console.log(data, typeof data);

    }
});

// We can also provide local .json file
request.open('GET', 'profiles.json');

request.send();