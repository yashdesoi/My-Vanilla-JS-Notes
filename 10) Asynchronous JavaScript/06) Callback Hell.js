const getBooks = function(requestURL, callback) {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(false, JSON.parse(request.responseText));
        } else if (request.readyState === 4) {
            callback(true, null);
        }
    });

    request.open('GET', requestURL);
    request.send();
};

// Callback hell:- If we want to fetch the data one after the another such that, when one data is loaded(with whatever status 200 or 404 doesn't matter) then only we want to fetch the decond data. For such case we can do something like this, calling getBooks inside callback again. (Uncomment the code below if its commented to see how it works, and comment the code above it)
// getBooks('books/stephen\ king.json', (error, data) => {
//     if (!error) {
//         console.log(data);
//     } else {
//         console.log('could not fetch the data');
//     }
//     getBooks('books/shirley\ jacksn.json', (error, data) => {
//         //                      ^
//         //            mistake in request url
//         if (!error) {
//             console.log(data);
//         } else {
//             console.log('could not fetch the data');
//         }
//         getBooks('books/clive\ barker.json', (error, data) => {
//             if (!error) {
//                 console.log(data);
//             } else {
//                 console.log('could not fetch the data');
//             }
//         });
//     });
// });


// Callback hell:- If we want to fetch the data one after the another such that, when one data is loaded successfully(status as 200) then only we want to fetch the second data. (Uncomment the code below if its commented to see how it works, and comment the code above it)
getBooks('books/stephen\ king.json', (error, data) => {
    if (!error) {
        console.log(data);

        getBooks('books/shirley\ jacksn.json', (error, data) => {
            //                      ^
            //            mistake in request url
            if (!error) {
                console.log(data);

                getBooks('books/clive\ barker.json', (error, data) => {
                    if (!error) {
                        console.log(data);
                    } else {
                        console.log('could not fetch the data');
                    }
                });
            } else {
                console.log('could not fetch the data');
            }
        });
    } else {
        console.log('could not fetch the data');
    }
});
