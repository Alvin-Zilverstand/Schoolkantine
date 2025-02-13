// Array to hold items added to the shopping cart
const cart = [];
let cartCount = 0; // Initialize cart count

// Function to add an item to the shopping cart
function addToCart(item) {
    cart.unshift(item); // Add item to the beginning of the cart array
    updateCart();
    cartCount++; // Increment cart count
    updateCartCountDisplay(); // Update the cart count display
    closeModal();
}

// Function to update the shopping cart display
function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;
    cart.forEach((item, index) => {
        const cartItemElement = document.createElement('li');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <span>${item.title}</span>
            <span>€${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Verwijderen</button>
        `;
        cartItemsContainer.appendChild(cartItemElement);
        totalPrice += item.price;
    });
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);

    // Show or hide the "Bestellen" button based on the cart's content
    const orderButton = document.getElementById('order-button');
    if (cart.length > 0) {
        orderButton.style.display = 'block';
    } else {
        orderButton.style.display = 'none';
    }
}

// Function to remove an item from the shopping cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
    cartCount--; // Decrement cart count
    updateCartCountDisplay(); // Update the cart count display
}

// Function to update the cart count display
function updateCartCountDisplay() {
    const cartCountElement = document.getElementById("cart-count"); // Get the element to display the count
    if (cartCountElement) { // Check if the element exists
        cartCountElement.textContent = cartCount; // Update the text content with the cart count
    }
}


// Initial calls
updateCart();
updateCartCountDisplay(); // Initialize the cart count on page load


// Function to close the modal window
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}