const getBooks = function(requestURL) {
    return new Promise(function(resolve, reject) {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                resolve(JSON.parse(request.responseText));
            } else if (request.readyState === 4) {
                reject('could not fetch the data');
            }
        });

        request.open('GET', requestURL);
        request.send();
    });
}

getBooks('books/stephen\ king.json')
    .then(data => {
        console.log(data);
        return getBooks('books/shirley\ jacksn.json');
    })
    .then(data => {
        console.log(data);
        return getBooks('books/clive\ barker.json');
    })
    .then(data => {
        console.log(data);
    })
    .catch(message => {
        console.log(message);
    })