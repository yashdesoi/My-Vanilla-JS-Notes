const numberOfItems = document.querySelector('.number-of-items-in-cart');
const cartIcon = document.querySelector('.cart-icon');
const searchForm = document.querySelector('form.search-product');
const resetIcon = document.querySelector('.reset-icon');
const products = document.querySelector('.products');
const errorMessage = document.querySelector('.error');
const notFoundMessage = document.querySelector('.not-found');
const cart = document.querySelector('.cart-wrapper');
const items = document.querySelector('.cart__items');
const totalPrice = document.querySelector('.cart__footer > .cart__item-price > .value');
const purchaseForm = document.querySelector('form.purchase');
const checkoutFormWrapper = document.querySelector('.checkout-form__wrapper');

const productList = {};

const fetchData = async function() {
    const request = await fetch('products.json');
    const data = await request.json();

    return data;
};

const loadData = function(data) {
    const product = document.createElement('li');
    product.classList.add('product');

    const image = document.createElement('div');
    image.classList.add('image');

    const details = document.createElement('div');
    details.classList.add('details');

    const button = document.createElement('button');
    button.classList.add('add');

    image.style.backgroundImage = `url('${data['image url']}')`;    
    image.innerHTML = `
        <span class="category">${data.category}</span>
    `;

    details.innerHTML = `
        <div class="name">${data.name}</div>
        <div class="weight">Net Weight: <span class="value">${data['net weight']}</span></div>
        <div class="mrp">MRP: &#8377;<span class="value">${data.MRP}</span></div>
        <div class="discounted-price">Discounted Price: &#8377;<span class="value">${data['discounted price']}</span></div>
    `;

    button.textContent = 'Add';

    product.append(image, details, button);
    products.append(product);
};

fetchData()
    .then(data => {
        errorMessage.style.display = 'none';
        for(let i=0; i<data.length; i++) {
            // Loading UI
            loadData(data[i]);

            // Adding data to local product list
            productList[data[i].name] = {
                price: data[i]['discounted price'],
                weight: data[i]['net weight'],
                category: data[i].category
            };
        }
    })
    .catch(() => {
        errorMessage.style.display = 'block';
    });


// Toggling display of cart
cartIcon.addEventListener('click', event => {
    event.stopPropagation();
    cart.style.display = 'block';
    document.querySelector('header').style.position = 'static';
    document.querySelector('main').style.marginTop = '0px';
});

cart.addEventListener('click', event => {
    event.stopPropagation();
    if (event.target.className.includes('cart-wrapper') || event.target.className.includes('close')) {
        cart.style.display = 'none';
        document.querySelector('header').style.position = 'fixed';
        document.querySelector('main').style.marginTop = '80px';
    }
});

// Creating and adding items to cart
products.addEventListener('click', event => {
    event.stopPropagation();
    if (event.target.className === 'add') {
        const name = event.target.previousElementSibling.children[0].textContent;
        const weight = productList[name].weight;
        const price = productList[name].price;

        // Checking whether if the item is already in cart
        let alreadyAdded = false;
        const namesOfItemsInCart = items.querySelectorAll('.cart__item-name');
        namesOfItemsInCart.forEach(element => {
            if (element.textContent === name) {
                alreadyAdded = true;
            };
        });

        if (!alreadyAdded) {
            // Creating an item
            const item = document.createElement('li');
            item.classList.add('cart__item');
            item.innerHTML = `
                <div class="cart__item-name">${name}</div>
                <div class="cart__item-weight">${weight}</div>
                <input class="cart__item-quantity" name="quantity" type="number" min="1" value="1" required>
                <div class="cart__item-price">
                    &#8377;<span class="value">${price}</span>
                </div>
                <i class="cart__item-remove fas fa-trash-alt"></i>
            `;

            // Adding an item to cart
            items.append(item);

            // Updating number of items icon
            numberOfItems.textContent = items.children.length;

            // Updating total price in cart list
            totalPrice.textContent = Number(totalPrice.textContent) + Number(price);

            // Updating checkout button
            if (items.children.length > 0) {
                document.querySelector('form.purchase > button').style.display = 'block';
            }
        } else {
            alert('Item already added to cart');
        }
    }
});

// Removing and item from cart
items.addEventListener('click', event => {
    event.stopPropagation();
    if (event.target.className.includes('cart__item-remove')) {
        event.target.parentElement.remove();
        const price = event.target.previousElementSibling.children[0].textContent;

        // Updating number of items icon
        numberOfItems.textContent = items.children.length;
        
        // Updating total price in cart list
        totalPrice.textContent = Number(totalPrice.textContent) - Number(price);

        // Updating checkout button
        if (items.children.length > 0) {
            document.querySelector('form.purchase > button').style.display = 'block';
        } else {
            document.querySelector('form.purchase > button').style.display = 'none';
        }
    }
});

// Changing quantity of items (by clicking)
items.addEventListener('click', event => {
    event.stopPropagation();

    if (event.target.className === 'cart__item-quantity') {
        const name = event.target.previousElementSibling.previousElementSibling.textContent;
        
        // Updating price
        if (event.target.value >= 1) {
            event.target.nextElementSibling.children[0].textContent = productList[name].price * Number(event.target.value);
        } else {
            event.target.nextElementSibling.children[0].textContent = 0;
        }

        // Updating total price
        const itemPrices = document.querySelectorAll('.cart__item > .cart__item-price > .value');
        let sum = 0;
        itemPrices.forEach(itemPrice => {
            sum += Number(itemPrice.textContent);
        });
        totalPrice.textContent = sum;
    }
});

// Changing quantity of items (by keyboard)
purchaseForm.addEventListener('keyup', event => {
    event.stopPropagation();
    const name = event.target.previousElementSibling.previousElementSibling.textContent;
    
    // Updating price
    if (event.target.value < 1) {
        event.target.nextElementSibling.children[0].textContent = 0;
    } else {
        event.target.nextElementSibling.children[0].textContent = productList[name].price * Number(event.target.value);
    }

    // Updating total price
    const itemPrices = document.querySelectorAll('.cart__item > .cart__item-price > .value');
    let sum = 0;
    itemPrices.forEach(itemPrice => {
        sum += Number(itemPrice.textContent);
    });
    totalPrice.textContent = sum;
});

purchaseForm.addEventListener('submit', event => {
    event.preventDefault();
    cart.style.display = 'none';
    checkoutFormWrapper.style.display = 'block';
});

// Searching product
searchForm.addEventListener('submit', event => {
    event.preventDefault();
    notFoundMessage.style.display = 'none';
    const searchedText = searchForm.searchedProduct.value.trim().toLowerCase();
    //                ^             ^
    //          form element        ^
    //                        input element
    //                            name

    // Counting number of products
    let num = 0;
    for (let key in productList) {
        num += 1;
    }
    
    // Applying changes to UI
    let notDisplayed = 0
    if (num > 0) {
        const productElements = document.querySelectorAll('.products > .product');
        productElements.forEach(productElement => {
            const category = productElement.children[0].children[0].textContent.toLowerCase();
            const name = productElement.children[1].children[0].textContent.toLowerCase();
            
            if (name === searchedText || category === searchedText) {
                productElement.style.display = 'inline-block';
            } else {
                productElement.style.display = 'none';
                notDisplayed += 1;
            }

            // If number of products not displayed is equal to total number of products
            if (notDisplayed === num) {
                notFoundMessage.style.display = 'block';
            }
        });
    }

    searchForm.reset();
});

// Reseting UI
resetIcon.addEventListener('click', event => {
    event.stopPropagation();
    notFoundMessage.style.display = 'none';

    let num = 0;
    for (let key in productList) {
        num += 1;
    }

    if (num > 0) {
        const productElements = document.querySelectorAll('.products > .product');
        productElements.forEach(productElement => {
            productElement.style.display = 'inline-block';
        });
    }
});

// Going back to cart from checkout form
checkoutFormWrapper.addEventListener('click', event => {
    event.stopPropagation();

    if (event.target.className.includes('go-back')) {
        cart.style.display = 'block';
        checkoutFormWrapper.style.display = 'none';
    }
});
