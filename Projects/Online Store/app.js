const numberOfItems = document.querySelector('.number-of-items-in-cart');
const cartIcon = document.querySelector('.cart-icon');
const products = document.querySelector('.products');
const cart = document.querySelector('.cart-wrapper');
const items = document.querySelector('.cart__items');
const totalPrice = document.querySelector('.cart__footer > .cart__item-price > .value');

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
        for(let i=0; i<data.length; i++) {
            loadData(data[i]);
        }

        const products = document.querySelector('.products');

        // Toggling display of cart
        cartIcon.addEventListener('click', event => {
            event.stopPropagation();
            cart.style.display = 'block';
        });

        cart.addEventListener('click', event => {
            event.stopPropagation();
            if (event.target.className.includes('cart-wrapper') || event.target.className.includes('close')) {
                cart.style.display = 'none';
            }
        });

        // Creating and adding items to cart
        products.addEventListener('click', event => {
            event.stopPropagation();
            if (event.target.className === 'add') {
                const details = event.target.previousElementSibling.children;
                const name = details[0].textContent;
                const weight = details[1].children[0].textContent;
                const price = details[3].children[0].textContent;

                // Checking whether if the item is already in cart
                let alreadyAdded = false;
                const nameOfItemsInCart = items.querySelectorAll('.cart__item-name');
                nameOfItemsInCart.forEach(element => {
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
                        <input class="cart__item-quantity" name="quantity" type="number" min="1" max="10" value="1">
                        <div class="cart__item-price">
                            &#8377;<span class="value">${price}</span>
                        </div>
                        <div class="cart__item-remove">
                            <i class="remove fas fa-trash-alt"></i>
                        </div>
                    `;

                    // Adding an item to cart
                    items.append(item);

                    // Updating number of items icon
                    numberOfItems.textContent = items.children.length;

                    // Updating total price in cart list
                    totalPrice.textContent = Number(totalPrice.textContent) + Number(price);
                } else {
                    alert('Item already in cart');
                }
            }
        });

        // Removing and item from cart
        items.addEventListener('click', event => {
            event.stopPropagation();
            if (event.target.className.includes('remove')) {
                event.target.parentElement.parentElement.remove();
                const price = event.target.parentElement.previousElementSibling.children[0].textContent;

                // Updating number of items icon
                numberOfItems.textContent = items.children.length;
                
                // Updating total price in cart list
                totalPrice.textContent = Number(totalPrice.textContent) - Number(price);
            }
        });


    })
    .catch(() => {
        console.log("Data couldn't be loaded :(")
    });