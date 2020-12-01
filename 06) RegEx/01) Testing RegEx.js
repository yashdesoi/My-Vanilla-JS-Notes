let username = 'yasdesoi';
let pattern = /^\w{4,}$/;
result = pattern.test(username);
console.log(result);

let name = 'Yash';
pattern = /^[a-zA-Z][a-z]{2,}$/;
result = pattern.test(name);
console.log(result);
