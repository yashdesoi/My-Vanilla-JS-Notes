const products = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
];


// Without chaining
const filtered = products.filter(product => product.price > 20);

let promos = filtered.map(product => `${product.name} is ${product.price / 2} pounds`);

console.log(promos);


// Method chaining
promos = products.filter(product => product.price > 20).map(product => `${product.name} is ${product.price / 2} pounds`);

console.log(promos);


// Method chaining (consise way)
promos = products
    .filter(product => product.price > 20)
    .map(product => `${product.name} is ${product.price / 2} pounds`);

console.log(promos);