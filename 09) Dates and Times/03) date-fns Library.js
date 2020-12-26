// Date-fns is JavaScript date library. Here we are using slightly older version(v1.9.0) of this library via CDN, latest version is v2.

const now = new Date();

console.log(dateFns.isToday());


// Formatting options:-
// Year
console.log(dateFns.format(now, 'YYYY'));
// Month
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'MMM'));
// Day of the week
console.log(dateFns.format(now, 'dddd'));
// Day of the month
console.log(dateFns.format(now, 'D'));
console.log(dateFns.format(now, 'Do'));
// Chaining
console.log(dateFns.format(now, 'Do MMMM YYYY'))
console.log(dateFns.format(now, '(dddd) Do/MMMM/YYYY'))


// Comparing two dates:- We do this usually with subtracting timestamps of two dates and then converting the difference to month or year manually. But in date-fns library it is very eary to compare two dates.
const before = new Date('October 1 1998 13:55:02');

console.log(dateFns.distanceInWords(now, before));
console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));

