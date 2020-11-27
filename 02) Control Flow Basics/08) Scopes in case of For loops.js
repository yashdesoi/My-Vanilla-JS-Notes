// EXAMPLE 1
let i;

for (i = 0; i < 5; i++) {
    
    console.log('Inside i=', i, `& ${i}^2 =`, i ** 2);  
}

console.log('Outside i=', i, '\n');

// EXAMPLE 2
for (let j = 0; j < 5; j++) {

    console.log('Inside j=', j, `& ${j}^2 =`, j ** 2);
}

console.log('Outside j=', j, '\n');
// Since 'j' is defined indide the for loop, it has scope only inside that block.

// EXAMPLE 3
let k = 10;

for (let k = 0; k < 5; k++) {

    console.log('Inside k=', k, `& ${k}^2 =`, k ** 2);
}

console.log('Outside k=', k, '\n');