// Functie om de productcategorie te tonen
function showCategory(category) {
    const productDisplay = document.getElementById('product-display');
    productDisplay.innerHTML = ''; // Maak het display leeg voordat we nieuwe items toevoegen

    let items = [];

    // Afhankelijk van de gekozen categorie, voeg je de juiste producten toe
    if (category === 'Broodjes') {
        items = [
            { title: "Broodje Gezond", imageSrc: "media/broodje-gezond.jpg", price: 3.50 },
            { title: "Bagel", imageSrc: "media/bagel.jpeg", price: 3.00 },
        ];
    } else if (category === 'Koude-Dranken') {
        items = [
            { title: "Spa Water", imageSrc: "media/spa.webp", price: 2.00 },
            { title: "Spa Rood", imageSrc: "media/spa-rood.jpg", price: 2.00 },
            { title: "Cola zero", imageSrc: "media/cola-zero.jpg", price: 1.80 },
            { title: "Cola vanille", imageSrc: "media/cola-vanilla.jpg", price: 1.80 },
            { title: "Cola cherry", imageSrc: "media/cola-cherry.jpg", price: 1.80 },
            { title: "Cola", imageSrc: "media/cola.jpg", price: 1.80 },
            { title: "Sprite", imageSrc: "media/sprite.jpg", price: 1.80 },
            { title: "Dr pepper", imageSrc: "media/drpeper.jpg", price: 1.80 },
            { title: "Fanta orange original", imageSrc: "media/fanta.jpg", price: 1.80 },
            { title: "Fanta orange zero", imageSrc: "media/fanta-zero.jpg", price: 1.80 },
            { title: "Fanta exotic zero", imageSrc: "media/fanta-exotic-zero.jpg", price: 1.80 },
            { title: "Fanta lemon zero", imageSrc: "media/fanta-lemon-zero.jpg", price: 1.80 },
            { title: "Ice tea", imageSrc: "https://www.manutan.nl/img/S/GRP/ST/AIG12165970.jpg", price: 1.80},
            { title: "Fanta cassis", imageSrc: "media/fanta-cassis.jpg", price: 1.80 },
            { title: "Milkshake", imageSrc: "https://s3.amazonaws.com/static.realcaliforniamilk.com/media/recipes_2/sunset-sprinkle-shakes.jpg", price: 2.50 }, ]
    } else if (category === 'Warme-Dranken') {
        items = [
            { title: "Chocomel", imageSrc: "media/choco-gs.jpg", price: 1.00 },
            { title: "Chocomel met slagroom", imageSrc: "media/chocomel.jpg", price: 1.25 },
            { title: "Koffie", imageSrc: "media/koffie.jpg", price: 1.50 },
            { title: "Thee", imageSrc: "media/thee.jpg", price: 1.50 },
        ];
    }
    else if (category === 'Snacks') {
        items = [
            { title: "Frikandel", imageSrc: "media/frikandel.jpg", price: 2.00 },
            { title: "Bitterballen", imageSrc: "media/bitterbal.jpg", price: 2.50 },
            { title: "Mexicano", imageSrc: "media/mexicano.png", price: 2.00 },
            { title: "Kipcorn", imageSrc: "media/kipcorn.png", price: 2.20 },
            { title: "Friet", imageSrc: "media/friet.png", price: 3.20 },
            { title: "Kipnuggets", imageSrc: "media/kipnuggets.png", price: 2.70 },
        ];
    } else if (category === 'deserts') {
        items = [
            { title: "Ijsjes", imageSrc: "media/Ijs.png", price: 1.50 },
            { title: "Sorbet", imageSrc: "media/sorbet.webp", price: 2.50 },
            { title: "Softijs", imageSrc: "media/softijs.jpg", price: 2.50 },
            { title: "Sundea ijs", imageSrc: "media/sundea.jpg", price: 2.50 },
        ];
    } else if (category === 'Deals') {
        items = [
            { title: "Lunch Deal", imageSrc: "media/deals.jpg", price: 5.00 },
            { title: "Diner Deal", imageSrc: "media/deals.jpg", price: 10.00 },
        ];
    } else if (category === 'Soepen') {
        items = [
            { title: "Tomatensoep", imageSrc: "media/soep.jpg", price: 2.50 },
            { title: "Kippensoep", imageSrc: "media/kippensoep.jpg", price: 2.80 },
            { title: "Erwtensoep", imageSrc: "media/erwtensoep.webp", price: 2.50 },
            { title: "Groentesoep (met gehaktballetjes)", imageSrc: "media/groentesoep.jpg", price: 2.80 },
        ];
    } else if (category === 'Salades') {
        items = [
            { title: "Caesar Salade", imageSrc: "media/salade.jpg", price: 2.50 },
            { title: "Griekse Salade", imageSrc: "media/griekse.jpg", price: 3.50 },
            { title: "Krokante Kip Salade", imageSrc: "media/krokante-kip.jpg", price: 3.00 },
            { title: "Aardappel Salade", imageSrc: "media/aardappel.jpg", price: 2.50 },
        ];
    } else if (category === 'Sausjes') {
    items = [
        { title: "Ketchup", imageSrc: "https://www.ahealthylife.nl/wp-content/uploads/2021/06/Ketchup_voedingswaarde.jpg", price: 0.25 },
        { title: "Mayonaise", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4FVmHO_hK3mw43z0fuHv1OFUr-hhsfGe1A&s", price: 0.25 },
        { title: "Mosterd", imageSrc: "", price: 0.25 },
        { title: "Sweet Chili", imageSrc: "", price: 0.25 }
    	];
    }
    // Voeg de items toe aan de weergave
    items.forEach(item => {
        const productBox = document.createElement('div');
        productBox.classList.add('product-box');
        productBox.onclick = () => showItemDetails(item);

        productBox.innerHTML = `
            <img src="${item.imageSrc}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>€${item.price.toFixed(2)}</p>
        `;

        productDisplay.appendChild(productBox);
    });
}

// Functie om de details van een item weer te geven in het modaal
function showItemDetails(item) {
    const title = item.title;
    const imageSrc = item.imageSrc;
    const description = getDescription(item.title); // Haal de beschrijving dynamisch op
    const price = item.price;

    // Update de inhoud van het modaal venster
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-price").innerText = `Prijs: €${price.toFixed(2)}`;
    document.getElementById("add-to-cart").onclick = function() {
        const quantity = parseInt(document.getElementById("item-quantity").value);
        addToCart({ title, price, quantity });
    };

    document.getElementById('modal').style.display = 'block';
    document.querySelector('.menu-bar').classList.add('dark'); // Add dark class to menu-bar
}

// Functie om de beschrijving op te halen afhankelijk van de titel
function getDescription(title) {
    if (title === "Broodje Gezond") {
        return "Op dit broodje zit kaas, veldsla, komkommer, tomaat, ei, ham en/of kip en bufkes saus.";
    } else if (title === "Spa Water") {
        return "Koude verfrissende water.";
    } else if (title === "Warme dranken") {
        return "Een warme drank naar keuze.";
    } else if (title === "Frikandel") {
        return "Een frikandel, dat wil je wel!";
    } else if (title === "Ijsjes") {
        return "Een lekker ijsje met vele smaken, zoals aardbei, vanille, chocolade, mint, bosbes en nog veel meer (alleen in de zomer!).";
    } else if (title === "Deals") {
        return "Onze beste deals met de beste prijzen!";
    } else if (title === "Soepen") {
        return "Soep van de dag! (Allergieën? Meld het bij ons!)";
    } else if (title === "Salades") {
        return "Een heerlijke salade met verse groenten en een dressing naar keuze.";
    }   else if (title === "Sausjes") {
        return "Kies de saus naar je keuze!";
    }
    return "";
}

// Functie om een item aan het winkelwagentje toe te voegen
function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    for (let i = 0; i < item.quantity; i++) {
        cart.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Functie om het winkelwagentje bij te werken
function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
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

    // Update the cart count in the cart icon
    document.getElementById('cart-count').innerText = cart.length;
}

// Functie om een item uit het winkelwagentje te verwijderen
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Functie om het modaal venster te sluiten
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.querySelector('.menu-bar').classList.remove('dark'); // Remove dark class from menu-bar
}

// Zorg ervoor dat het modaal venster sluit wanneer er buiten het venster wordt geklikt
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}

// Initial call to updateCart to ensure the button is hidden on page load
updateCart();
