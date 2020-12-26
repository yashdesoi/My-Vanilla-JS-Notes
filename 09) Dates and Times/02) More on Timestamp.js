// To get the date object of past we have to pass following argument to date constructor, and then create an instance of it and store it inside a variable. The argument which we need to pass can be in several different format, but now we will see on of such format which is a string datatype.
const before = new Date('October 1 1998 13:55:02');

// We can use all the methods onto this object
console.log(before.getFullYear());
console.log(before.getMonth());
console.log(before.getDate());
console.log(before.getDay());
console.log(before.getHours());
console.log(before.getMinutes());
console.log(before.getSeconds());
console.log(before.getTime(), '\n');


// We use timestamps to get the time past between two dates
const now = new Date();

const diff = now.getTime() - before.getTime();

const mins = Math.round(diff / 1000 / 60); // mins past since before --> now
const hours = Math.round(mins / 60); // hours past since before --> now
const days = Math.round(hours / 24); // days past since before --> now
const years = Math.round(days / 365); // years past since before --> now

console.log('before --> now: ', `mins ${mins}`, `hours ${hours}`, `days ${days}`, `years ${years}`, '\n');

// We can use yet another format as an argument to pass into the date constructor, which is the timestamp itself. Time stamp is the time past since unix epoch, so the constructor will return a date object with respect to unix epoch which we will create an instance of and the store it in variable.
const timestamp = 1675938474990;
const date = new Date(timestamp);

console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds(), '\n');
