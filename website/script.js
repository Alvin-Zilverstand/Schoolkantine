// Functie om de productcategorie te tonen
function showCategory(category) {
    const productDisplay = document.getElementById('product-display');
    productDisplay.innerHTML = ''; // Maak het display leeg voordat we nieuwe items toevoegen

    let items = [];

    // Afhankelijk van de gekozen categorie, voeg je de juiste producten toe
    if (category === 'Broodjes') {
        items = [
            { title: "Broodje Gezond", imageSrc: "media/broodje-gezond.jpg", price: 3.50 },
            { title: "Broodje Kaas", imageSrc: "media/broodje-kaas.jpg", price: 3.00 },
        ];
    } else if (category === 'drinks') {
        items = [
            { title: "Spa Water", imageSrc: "media/spa.webp", price: 1.00 },
            { title: "Cola", imageSrc: "media/cola.jpg", price: 1.50 },
        ];
    } else if (category === 'Snacks') {
        items = [
            { title: "Frikandel", imageSrc: "media/frikandel.jpg", price: 2.00 },
            { title: "Bitterballen", imageSrc: "media/bitterballen.jpg", price: 2.50 },
        ];
    }else if (category === 'Snacks') {
        items = [
            { title: "Ijsjes", imageSrc: "media/Ijs.png", price: 2.00 },
            { title: "Bitterballen", imageSrc: "media/bitterballen.jpg", price: 2.50 },
        ];
    }else if (category === 'Snacks') {
        items = [
            { title: "Deals", imageSrc: "media/deals.jpg", price: 2.00 },
            { title: "Bitterballen", imageSrc: "media/bitterballen.jpg", price: 2.50 },
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
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const addToCartButton = document.getElementById('add-to-cart');

    modalTitle.innerText = item.title;
    modalImage.src = item.imageSrc;
    modalDescription.innerText = `Beschrijving van ${item.title}`;
    modalPrice.innerText = `Prijs: €${item.price.toFixed(2)}`;

    addToCartButton.onclick = function() {
        addToCart({ title: item.title, price: item.price });
    };

    document.getElementById('modal').style.display = 'block';
}

// Functie om het modaal venster te sluiten
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
