let user = {
    // Properties
    email: 'yashdesai450@gmail.com',
    password: 's1mpleSob3r',

    // Methods
    add: function(a,b){
        return a+b;
    },
    subtract: (a,b) => {
        console.log(a-b);
    }
}


console.log(user.password);

user.subtract(10,4);

console.log(user.add(3,9));