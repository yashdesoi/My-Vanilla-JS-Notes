console.log('Start');

let getUserData = function(userName, callback) {
    setTimeout(() => {
        console.log('got data');
        callback({
            name: userName,
            data: 'Data'
        });
    }, 3000);
};

// We can access the async user data inside the callback
getUserData('Yash', (userData) => {
    console.log(userData);
});

console.log('End');

