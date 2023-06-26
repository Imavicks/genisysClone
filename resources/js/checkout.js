// Retrieve the stored product details from the session storage
const checkoutProduct = JSON.parse(sessionStorage.getItem('checkoutProduct'));

// Update the checkout page with the selected product details
const checkoutItemImage = document.querySelector('.itemP img');
const checkoutItemColor = document.getElementById('prd-color');
const checkoutItemQuantity = document.getElementById('prd-qty');
const checkoutItemPrice = document.getElementById('prd-price');
const checkoutItemTotalPrice = document.getElementById('prd-total');
const checkoutCountIndicator = document.getElementById('cart-count');

checkoutItemImage.src = checkoutProduct.image;
checkoutItemColor.innerHTML = `${checkoutProduct.color}`;
checkoutItemQuantity.innerHTML = `x${checkoutProduct.quantity}`;
checkoutCountIndicator.innerHTML = `${checkoutProduct.quantity}`;


// Add commas to the displayed price
const formattedPrice = checkoutProduct.price.toLocaleString();
checkoutItemPrice.innerHTML = formattedPrice;

// Calculate and add commas to the displayed total price
const totalPrice = checkoutProduct.price * checkoutProduct.quantity;
const formattedTotalPrice = totalPrice.toLocaleString();
checkoutItemTotalPrice.innerHTML = formattedTotalPrice;

// Update Total Checkout Prices 
const prdTotal = document.getElementById('prd-total');
const prdShipping = document.getElementById('prd-shipping');
const prdTax = document.getElementById('prd-tax');
const checkoutTotal = document.getElementById('checkout-total');

// Parse the values from the HTML elements
const subtotal = parseFloat(prdTotal.innerHTML.replace(/,/g, ''));
const shippingCost = parseFloat(prdShipping.innerHTML.replace(/,/g, ''));
const tax = parseFloat(prdTax.innerHTML.replace(/,/g, ''));

// Calculate the final checkout price
const finalCheckoutPrice = subtotal + shippingCost + tax;

// Set the calculated value to the checkout total element
checkoutTotal.innerHTML = finalCheckoutPrice.toLocaleString()

