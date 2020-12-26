// Following code simulates network request for user data. Since network request takes time and async, hence setTimeout is used.

console.log('Start');

let userData = function(userName) {
    const data = setTimeout(() => {
        // Return inside setTimeout doesn't belongs to the parent function userData nor setTimeout, instead since it is present inside callback function of setTimeout hence it belong to this callback function only which is accessible inside setTimeout. We cannot use this data.
        
        console.log('got data');

        return {
            name: userName,
            data: 'Data'
        };
    }, 3000);

    return data; // Following returns the setTimeout object
};

console.log(userData('Yash'));

console.log('End');

// To Access the the async flow like this we use callbacks.

