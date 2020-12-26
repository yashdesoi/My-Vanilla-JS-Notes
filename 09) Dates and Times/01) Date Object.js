// Like Arrays and Object Literals, Date is an object in javascript which falls under object datatype


// Following will create a new instance of the date object and store it in "now" variable. Date object corresponds to current date and time.
const now = new Date();
//                ^
//           Constructor

console.log(now, typeof now);

// Date object has following methods

// returns Year
let year = now.getFullYear();
console.log('Year-->', year, typeof year);

// returns Month --> JavaScript creates an imaginary array of months and returns the index of corresponding month [Jan, Feb, Mar, Apr, ... Nov, Dec]
let month = now.getMonth();
console.log('Month-->', month, typeof month);

// returns Date --> Exact Date of month
console.log('Date-->', now.getDate());

// returns Day --> [Sun, Mon, Tue, ... Fri, Sat]
console.log('Day-->', now.getDay());

// returns Hour of current time in 24hr format
console.log('Hour-->', now.getHours());

// returns Minutes
console.log('Minutes-->', now.getMinutes());

// returns Seconds
console.log('Seconds-->', now.getSeconds());

// Timestamp --> Number of milliseconds passed since 12:00AM, 01/Jan/1970 (unix epoch) till "now" is created
console.log('Timestamp-->', now.getTime());

// Returns date in string format 
console.log(now.toDateString());

// Returns time in string format
console.log(now.toTimeString());

// Return both date and time in string format
console.log(now.toLocaleString());
