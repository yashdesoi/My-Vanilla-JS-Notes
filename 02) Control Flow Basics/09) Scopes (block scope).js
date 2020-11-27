// Block scoped is defined as the portion between {}. So let it be {} belonging to function, 
// if-else statements, loops etc.

// With "let" only updating is allowed. Redefining inside same scope will give us an error. But
// If we create a new block by creating {} and redefined inside that block then scope of that 
// block will be isolated.
// Updating -->
let variable = 15;
variable = 25;
// Redefining -->
let variable = 35;

console.log(variable);


/* EXAMPLE 1 */console.log('')
let x = 15;

if (true) {
    x += 5;
    console.log('Inside x =',x);    
}
console.log('Outside x =', x);

/* EXAMPLE 2 */console.log('')
let y = 15;

if (true) {
    let y = 20;
    y += 5;
    console.log('Inside y =',y);
}
console.log('Outside y =',y);



