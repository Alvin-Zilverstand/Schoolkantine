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
    var title = "";
    var imageSrc = "";
    var description = "";
    var price = 0;

    // Afhankelijk van het geselecteerde item, pas de details aan
    if (item === 'Broodjes') {
        title = "Broodje Gezond";
        imageSrc = "media/broodje-gezond.jpg";
        description = "Op dit broodje zit kaas, veldsla, komkommer, tomaat, ei, ham en/of kip en bufkes saus.";
        price = 3.50;
    } else if (item === 'Koude-Dranken') {
        title = "Spa Water";
        imageSrc = "media/spa.webp";
        description = "Koude verfrissende water.";
        price = 1.00;
    } else if (item === 'Warme-Dranken') {
        title = "Warme dranken";
        imageSrc = "media/chocomel.jpg";
        description = "een warme drank naar keuze";
        price = 2,59;
    } else if (item === 'Snacks') {
        title = "Frikandel";
        imageSrc = "media/frikandel.jpg";
        description = "Een frikandel, dat wil je wel!";
        price = 2.00;
    } else if (item === 'deserts') {
        title = "Ijsjes";
        imageSrc = "media/ijs.png";
        description = "Een lekker ijsje met vele smaken, zoals aardbei, vanille, chocolade, mint, bosbes en nog veel meer (alleen in de zomer!).";
        price = 1.50;
    } else if (item === 'Deals') {
        title = "Deals";
        imageSrc = "media/deals.jpg"; 
        description = "Onze beste deals met de beste prijzen!";
        price = 10.00;
    } else if (item === 'Soepen') {
        title = "Soepen";
        imageSrc = "media/soep.jpg";
        description = "Soep van de dag! (Allergieën? Meld het bij ons!)";
        price = 2.50;
    } else if (item === 'Salades') {
        title = "Salades";
        imageSrc = "media/salade.jpg";
        description = "Een heerlijke salade met verse groenten en een dressing naar keuze.";
        price = 3.00;

    }

    // Update de inhoud van het modaal venster
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-price").innerText = `Prijs: €${price.toFixed(2)}`;
    document.getElementById("add-to-cart").onclick = function() {
        addToCart({ title, price });
    };

    document.getElementById('modal').style.display = 'block';
}

// Functie om het modaal venster te sluiten
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
