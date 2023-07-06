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

// Function to change background color indicator to selected product color
const prdColorElement = document.getElementById('prd-color');
const colorElement = document.querySelector('.product .color');

prdColorElement.addEventListener('DOMCharacterDataModified', () => {
  const prdColorText = prdColorElement.textContent.trim();
  const prdColor = prdColorText.toLowerCase().replace('color: ', '');
  let backgroundColor = '';

  if (prdColor === 'nimbus cloud with white') {
    backgroundColor = 'white';
  } else if (prdColor === 'black and white') {
    backgroundColor = 'black';
  } else if (prdColor === 'burgundy with white') {
    backgroundColor = 'brown';
  } else if (prdColor === 'navy with white') {
    backgroundColor = 'blue';
  }

  colorElement.style.backgroundColor = backgroundColor;
});

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
checkoutTotal.innerHTML = finalCheckoutPrice.toLocaleString();

// RESIZE MOBILE VIEW FOR HEADER

const mobileHeader = `<section class="title">
        <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand fw-bolder text-white" href="#">KICKIN' IT</a>
            <button class="navbar-toggler bg-dark text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon bg-light"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item bg-dark">
                <a class="nav-link text-white" aria-current="page" href="#">About</a>
                </li>
                <li class="nav-item bg-dark">
                <a class="nav-link text-white" href="#">Contact us</a>
                </li>
                <li class="nav-item bg-dark">
                <a class="nav-link text-white">Our location</a>
                </li>
                <li class="nav-item bg-dark">
                <a class="nav-link text-white">Return order</a>
                </li>
                <li class="nav-item bg-dark">
                <a class="nav-link text-white">Delivery</a>
                </li>
                <li class="nav-item bg-dark">
                <a class="nav-link text-white">Help</a>
                </li>
            </ul>
            <form class="d-flex bg-dark" role="search">
                <input class="form-control me-2 " type="search" placeholder="Search Product" aria-label="Search">
                <button class="btn btn-outline-light" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    </section>`;

    const originalHeader = document.querySelector(".main").innerHTML;
    const headDirectory = document.querySelector(".directory");
    function changeHeader() {
      const desktopHeader = document.querySelector(".main");
      

      if (window.innerWidth <= 744) {
        desktopHeader.innerHTML = mobileHeader;
        headDirectory.style.display = "none";
      } else{
        desktopHeader.innerHTML = originalHeader;
      }
    }

    changeHeader();
    window.addEventListener('resize', changeHeader)