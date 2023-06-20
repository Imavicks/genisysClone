// Retrieve the stored product details from the session storage
const product = JSON.parse(sessionStorage.getItem('product'));

// Update the cart page with the selected product details
const cartItemImage = document.querySelector('.cart-item-image');
const cartItemPrice = document.querySelector('.cart-item-price');
const cartItemColor = document.querySelector('.cart-item-color');
const cartItemSize = document.querySelector('.cart-item-size');
const cartItemWidth = document.querySelector('.cart-item-width');

cartItemImage.src = product.image;
cartItemPrice.innerHTML = `<b>&#8358;<b>${product.price}`;
cartItemColor.innerHTML = `<b>Color: <b>${product.color}`;
cartItemSize.innerHTML = `<b>Select Size: <b>${product.size}`;
cartItemWidth.innerHTML = `<b>Select Width: <b>${product.width}`;

// Add event listener to remove items button
const removeItemsButton = document.getElementById('remove-items');
removeItemsButton.addEventListener('click', () => {
  // Clear the session storage
  sessionStorage.clear();
  // Remove the product details from the cart page
  cartItemImage.src = '';
  cartItemPrice.innerHTML = 'Price: &#8358;0';
  cartItemColor.innerHTML = 'Color: ';
  cartItemSize.innerHTML = 'Size: ';
  cartItemWidth.innerHTML = 'Width: ';
});

// Increment and Decrement Buttons
const decrementCount = document.getElementById('decrease-count');
const incrementCount = document.getElementById('increase-count');
const totalCount = document.getElementById('total-count');

// Variable to track count
let count = 0;

// Display initial count value
totalCount.innerHTML = count;

// Function to decrement count
const handleDecrement = () => {
  if (count > 0) {
    count -= 1;
    totalCount.innerHTML = count;
  }
};

// Function to increment count
const handleIncrement = () => {
  count += 1;
  totalCount.innerHTML = count;
};

// Add click event to buttons
decrementCount.addEventListener('click', handleDecrement);
incrementCount.addEventListener('click', handleIncrement);

// Add event listener to checkout button
const checkoutButton = document.querySelector('.checkout-button button');
checkoutButton.addEventListener('click', () => {
  // Perform checkout process here
  // Redirect to the checkout page and checkout logic
});
