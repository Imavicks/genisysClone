// Retrieve the stored product details from the session storage
var product = JSON.parse(sessionStorage.getItem("product"));

// Update the cart page with the selected product details
var cartItemImage = document.querySelector(".cart-item-image");
var cartItemPrice = document.querySelector(".cart-item-price");
var cartItemColor = document.querySelector(".cart-item-color");
var cartItemSize = document.querySelector(".cart-item-size");
var cartItemWidth = document.querySelector(".cart-item-width");

cartItemImage.src = product.image;
cartItemPrice.innerHTML = "<b>&#8358;<b>" + product.price;
cartItemColor.innerHTML = "<b>Color: <b>" + product.color;
cartItemSize.innerHTML = "<b>Select Size: <b>" + product.size;
cartItemWidth.innerHTML = "<b>Select Width: <b>" + product.width;

// Add event listener to remove items button
var removeItemsButton = document.getElementById("remove-items");
removeItemsButton.addEventListener("click", function() {
  // Clear the session storage
  sessionStorage.clear();
  // Remove the product details from the cart page
  cartItemImage.src = "";
  cartItemPrice.innerHTML = "Price: &#8358;0";
  cartItemColor.innerHTML = "Color: ";
  cartItemSize.innerHTML = "Size: ";
  cartItemWidth.innerHTML = "Width: ";
});

// Increment and Decrement Buttons
const decrementCount = document.getElementById("decrease-count");
const incrementCount = document.getElementById("increase-count");
const totalCount = document.getElementById("total-count");

// Variable to track count
var count = 0;

// Display initial count value
totalCount.innerHTML = count;

// Function to decrement count
const handleDecrement = () => {
    if (count > 0) {
      count--;
      totalCount.innerHTML = count;
    }
}; 

// Function to increment count
const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
};

// Add click event to buttons
decrementCount.addEventListener("click", handleDecrement);
incrementCount.addEventListener("click", handleIncrement);

// Add event listener to checkout button
var checkoutButton = document.querySelector(".checkout-button button");
checkoutButton.addEventListener("click", function() {
  // Perform checkout process here
  // Redirect to the checkout page and checkout logic
});
