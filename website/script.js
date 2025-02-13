// Functie om de productcategorie te tonen

function goToMainPage() {
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'block';
}

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
            { title: "Spa Water", imageSrc: "https://img.discountoffice.cloud/pb7Rq9rrkwr7iOXhP7iKGxdUKWyU6Eq9Tc7M919ezW4/bg:ffffff/rs:fit:640:480:1:1/g:ce/bG9jYWw6Ly8vZGlzY291bnQtd2Vic2l0ZS9wcm9kdWN0SW1hZ2VzLzgvb3JnL1ExNDAxNTk0LTIuanBn.webp", price: 2.00 },
            { title: "Spa Rood", imageSrc: "https://media.spar.nl/productdetail/spa-intens-bruisend-500-Milliliter-9157116-142821.jpg", price: 2.00 },
            { title: "Cola zero", imageSrc: "https://lazzerisas.it/wp-content/uploads/2017/10/coca-cola-zero-sleek-can-cl33-768x768.jpg", price: 1.80 },
            { title: "Cola vanille", imageSrc: "https://media.spar.nl/productdetail/coca-cola-vanilla-zero-250-Milliliter-9192914-151956.jpg", price: 1.80 },
            { title: "Cola cherry", imageSrc: "https://media.spar.nl/productdetail/coca-cola-cherry-blik-250-ml-250-Milliliter-9192923-151796.jpg", price: 1.80 },
            { title: "Cola", imageSrc: "https://media.spar.nl/productdetail/coca-cola-original-250-Milliliter-9192888-151953.jpg", price: 1.80 },
            { title: "Sprite", imageSrc: "https://th.bing.com/th/id/OIP.K5tBIkwpcNJUUCUBfaoGdgHaHa?w=218&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7", price: 1.80 },
            { title: "Dr pepper", imageSrc: "https://www.kantinewinkel.nl/media/cache/gallery_main/product/7091/dr-pepper-blik-24-x-33-cl.jpg", price: 1.80 },
            { title: "Fanta orange original", imageSrc: "https://media.spar.nl/product/fanta-orange-original-330-Milliliter-9192913-155864.jpg", price: 1.80 },
            { title: "Fanta orange zero", imageSrc: "https://media.spar.nl/product/fanta-orange-zero-250-Milliliter-9197230-157232.jpg", price: 1.80 },
            { title: "Fanta exotic zero", imageSrc: "https://media.spar.nl/product/fanta-exotic-zero-250-Milliliter-9192899-152006.jpg", price: 1.80 },
            { title: "Fanta lemon zero", imageSrc: "https://media.spar.nl/product/fanta-lemon-zero-blik-250-ml-250-Milliliter-9192882-153455.jpg", price: 1.80 },
            { title: "Fanta cassis", imageSrc: "https://media.spar.nl/product/fanta-fanta-cassis-blik-250-Milliliter-9192826-152000.jpg", price: 1.80 }, ]
    } else if (category === 'Warme-Dranken') {
        items = [
            { title: "Chocomel", imageSrc: "media/chocomel.jpg", price: 1.00 },
            { title: "Chocomel met slagroom", imageSrc: "media/chocomel.jpg", price: 1.25 },
            { title: "Koffie", imageSrc: "media/koffie.jpg", price: 1.50 },
            { title: "Thee", imageSrc: "media/thee.jpg", price: 1.50 },
        ];
    }
    else if (category === 'Snacks') {
        items = [
            { title: "Frikandel", imageSrc: "media/frikandel.jpg", price: 2.00 },
            { title: "Bitterballen", imageSrc: "media/bitterbal.jpg", price: 2.50 },
            { title: "Kroketten", imageSrc: "media/kroket.webp", price: 2.50 },
        ];
    } else if (category === 'deserts') {
        items = [
            { title: "Ijsjes", imageSrc: "media/Ijs.png", price: 2.00 },
            { title: "Sorbet", imageSrc: "media/sorbet.webp", price: 2.50 },
        ];
    } else if (category === 'Deals') {
        items = [
            { title: "Lunch Deal", imageSrc: "media/deals.jpg", price: 5.00 },
            { title: "Diner Deal", imageSrc: "media/deals.jpg", price: 10.00 },
        ];
    } else if (category === 'Soepen') {
        items = [
            { title: "Tomatensoep", imageSrc: "media/soep.jpg", price: 2.50 },
            { title: "Kippensoep", imageSrc: "media/soep.jpg", price: 2.80 },
        ];
    } else if (category === 'Salades') {
        items = [
            { title: "Caesar Salade", imageSrc: "media/salade.jpg", price: 4.00 },
            { title: "Griekse Salade", imageSrc: "media/salade.jpg", price: 4.50 },
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
        addToCart({ title, price });
    };

    document.getElementById('modal').style.display = 'block';
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
    }
    return "";
}

// Functie om het modaal venster te sluiten
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
