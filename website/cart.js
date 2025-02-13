

// Array to hold items added to the shopping cart
const cart = [];



// Functie om een item aan het winkelwagentje toe te voegen
function addToCart(item) {
    cart.unshift(item); // Add item to the beginning of the cart array
    updateCart();
    closeModal();
}



// Functie om het winkelwagentje bij te werken
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


// Functie om een item uit het winkelwagentje te verwijderen
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Initial call to updateCart to ensure the button is hidden on page load
updateCart();

// Functie om het modaal venster te sluiten
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

let cartCount = 0;

function addToCart() {
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
}
