// Functie om de productcategorie te tonen
function showCategory(category) {
    const productDisplay = document.getElementById('product-display');
    productDisplay.innerHTML = ''; // Maak het display leeg voordat we nieuwe items toevoegen

    let items = [];

    // Afhankelijk van de gekozen categorie, voeg je de juiste producten toe
    if (category === 'Broodjes') {
        items = [
            { title: "Broodje Gezond", imageSrc: "media/broodje-gezond.jpg", price: 3.80 },
            { title: "Bagel", imageSrc: "media/bagel.jpeg", price: 4.20 },
            { title: "Broodje Gehakt met Joppiesaus", imageSrc: "media/GehaktJoppie.png", price: 3.80 },
            { title: "Frikandelbroodje", imageSrc: "media/Frikandelbroodje.png", price: 1.20 },
            { title: "Saucijzenbroodje", imageSrc: "media/Saucijz.png", price: 1.20 },
            
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
            { title: "Dr pepper", imageSrc: "media/drpepper.png", price: 1.80 },
            { title: "Fanta orange original", imageSrc: "media/fanta.jpg", price: 1.80 },
            { title: "Fanta orange zero", imageSrc: "media/fanta-zero.jpg", price: 1.80 },
            { title: "Fanta exotic zero", imageSrc: "media/fanta-exotic-zero.jpg", price: 1.80 },
            { title: "Fanta lemon zero", imageSrc: "media/fanta-lemon-zero.jpg", price: 1.80 },
            { title: "Ice tea", imageSrc: "https://www.manutan.nl/img/S/GRP/ST/AIG12165970.jpg", price: 1.80},
            { title: "Fanta cassis", imageSrc: "media/fanta-cassis.jpg", price: 1.80 },
            { title: "Milkshake", imageSrc: "https://s3.amazonaws.com/static.realcaliforniamilk.com/media/recipes_2/sunset-sprinkle-shakes.jpg", price: 3.00 }, ]
    } else if (category === 'Warme-Dranken') {
        items = [
            { title: "Chocomel", imageSrc: "media/choco-gs.jpg", price: 2.30 },
            { title: "Chocomel met slagroom", imageSrc: "media/chocomel.jpg", price: 3.00 },
            { title: "Koffie", imageSrc: "media/koffie.jpg", price: 2.20 },
            { title: "Thee", imageSrc: "media/thee.jpg", price: 2.00 },
        ];
    }
    else if (category === 'Snacks') {
        items = [
            { title: "Frikandel", imageSrc: "media/frikandel.jpg", price: 1.60 },
            { title: "Bitterballen", imageSrc: "media/bitterbal.jpg", price: 2.50 },
            { title: "Mexicano", imageSrc: "media/mexicano.png", price: 1.60 },
            { title: "Kipcorn", imageSrc: "media/kipcorn.png", price: 1.60 },
            { title: "Friet", imageSrc: "media/friet.png", price: 4.00 },
            { title: "Kipnuggets", imageSrc: "media/kipnuggets.png", price: 2.50 },
        ];
    } else if (category === 'Desserts') {
        items = [
            { title: "Ijsjes", imageSrc: "media/Ijs.png", price: 2.30 },
            { title: "Sorbet", imageSrc: "media/sorbet.webp", price: 3.20 },
            { title: "Softijs", imageSrc: "media/softijs.jpg", price: 1.50 },
            { title: "Sundea ijs", imageSrc: "media/sundea.jpg", price: 2.30 },
        ];
    } else if (category === 'Deals') {
        items = [
            { title: "Lunch Deal", imageSrc: "media/deals.jpg", price: 7.00 },
            { title: "Gezonde Deal", imageSrc: "media/deals.jpg", price: 7.00 },
        ];
    } else if (category === 'Soepen') {
        items = [
            { title: "Tomatensoep", imageSrc: "media/soep.jpg", price: 3.80 },
            { title: "Kippensoep", imageSrc: "media/kippensoep.jpg", price: 3.80 },
            { title: "Erwtensoep", imageSrc: "media/erwtensoep.webp", price: 3.80 },
            { title: "Groentesoep (met gehaktballetjes)", imageSrc: "media/groentesoep.jpg", price: 4.80 },
        ];
    } else if (category === 'Salades') {
        items = [
            { title: "Caesar Salade", imageSrc: "media/salade.jpg", price: 5.10 },
            { title: "Griekse Salade", imageSrc: "media/griekse.jpg", price: 5.10 },
            { title: "Krokante Kip Salade", imageSrc: "media/krokante-kip.jpg", price: 6.00 },
            { title: "Aardappel Salade", imageSrc: "media/aardappel.jpg", price: 5.10 },
        ];
    } else if (category === 'Sausjes') {
    items = [
        { title: "Ketchup", imageSrc: "https://www.ahealthylife.nl/wp-content/uploads/2021/06/Ketchup_voedingswaarde.jpg", price: 0.75 },
        { title: "Mayonaise", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4FVmHO_hK3mw43z0fuHv1OFUr-hhsfGe1A&s", price: 0.75 },
        { title: "Mosterd", imageSrc: "https://cdn.voedingswaardetabel.nl/img/prod/big/mosterd.jpg", price: 0.75 },
        { title: "Sweet Chili", imageSrc: "https://www.dechinesemuuregmond.nl/wp-content/uploads/2022/04/19.-Zoetzure-saus.jpg", price: 0.75 },
        {title: "Curry saus", imageSrc: "https://bestellen.hotelhetanker.nl/wp-content/uploads/2021/03/currysaus-1.png", price: 0.75}
    	];
    } else if (category === 'Yoghert') {
        items = [
            { title: "Aardbij yoghert", imageSrc: "media/aardbij-yoghurt.png", price: 5.10 },
        ];
    } else if (category === 'Snoep') {
        items = [
            { title: "Haribo starmix", imageSrc: "media/starmix.jpg", price: 5.10 },
            { title: "Haribo Kikkers", imageSrc: "media/kikkertjes.png", price: 5.10 },
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

    // Transition the menu bar to the top
    document.querySelector('.menu-bar').classList.add('top');

    // Show the shopping cart and cart icon
    document.getElementById('cart').classList.add('visible');
    document.querySelector('.cart-icon').classList.add('visible');

    // Remove the logo from the DOM
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.remove();
    }
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

    // Broodjes beschrijvingen
    if (title === "Broodje Gezond") {
        return "Op dit broodje zit kaas, veldsla, komkommer, tomaat, ei, ham en/of kip en bufkes saus.";
    }   else if (title === "Bagel") {
        return "Doughnut brood met spek, ei en kaas";
    } else if (title === "Broodje Gehakt met Joppiesaus") {
        return "Een wit of bruin broodje met Gehakt, Ei, Sla en Joppiesaus   .";  
    }    else if (title === "Saucijzenbroodje") {
            return "Een knapperig korstje met een warme, kruidige vleesvulling";
        }    else if (title === "Frikandelbroodje") {
            return "Een knapperige korstje met een warme frikandel en curry saus erin";

    // Koude dranken beschrijving
    } else if (title === "Spa Water") {
        return "Koude verfrissende water.";
    }    else if (title === "Milkshake") {
        return "Verschillende diverse milkshake (keuze bij de counter maken)";


    // Warme dranken beschrijving
    } else if (title === "Chocomel") {
        return "Een lekker warme chocolade melk";
    }   else if (title === "Chocomel met slagroom") {
        return "Een lekkere warme chocolade melk met slagroom";
    }   else if (title === "Koffie") {
        return "Een lekker warme koffie";
    }   else if (title === "Thee") {
        return "heerlijke warme thee (keuze bij de kassa)";

    // Snacks beschrijving
    } else if (title === "Frikandel") {
        return "Een frikandel, dat wil je wel!";
    } else if (title === "Friet") {
        return "Een klein bakje met friet.";
    } else if (title === "Kipcorn") {
        return "Een lekkere krokante Kipcorn.";
    } else if (title === "Kipnuggets") {
        return "Een bakje met 9 kipnuggets.";
    } else if (title === "Mexicano") {
        return "Een pittige mexicano.";
    } else if (title === "Bitterballen") {
        return "Een bakje met 9 Bitterballen    .";


    // Ijsjes beschrijving  
    } else if (title === "Ijsjes") {
        return "Een lekker ijsje met vele smaken, zoals aardbei, vanille, chocolade, mint, bosbes en nog veel meer (alleen in de zomer!).";
    }    else if (title === "Sorbet") {
        return "Lekkeresorbet met saus naar keuze";

    // Deals beschrijing
    } else if (title === "Lunch Deal") {
        return "Bij deze deal krijg je 1 snack naar keuze, wat frietjes en drinken naar keuze erbij!";
    }        else if (title === "Gezonde Deal") {
        return "Bij deze deal krijg je een keuze naar een broodje en een keuze naar een koude drank!!";
    
    
    // Soepen beschrijving
    } if (title === "TomatenSoep") {
        return "bluh";

    // Salades beschrijving
    }  if (title === "Caesar Salade") {
        return "bluh";

    // Sauzen beschrijving
    }   if (title === "Ketchup") {
        return "bluh";

    }    if (title === "Aardbij yoghert") {
        return "bluhllllllllllllllllllllll";

    }    if (title === "Haribo starmix") {
        return "bluh";
    }    if (title === "Haribo Kikkers") {
        return "bluh";

    }
        return "";
}

// Functie om een item aan het winkelwagentje toe te voegen
function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item); // Add item to the cart array
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

// Vertalingen voor beide talen (nl en en)
const translations = {
    en: {
        "Broodjes": "Sandwiches",
        "Koude Dranken": "Cold Drinks",
        "Warme Dranken": "Hot Drinks",
        "Snacks": "Snacks",
        "deserts": "Ice Creams",
        "Deals": "Deals",
        "Soepen": "Soups",
        "Salades": "Salads",
        "Sausjes": "Sauces",
        "Snoep": "Candy",
        "Winkelmandje": "Shopping Cart",
        "Prijs": "Price",
        "Toevoegen aan winkelmandje": "Add to cart",
        "Bestellen": "Order",
        "Totaal": "Total",
        "Op dit broodje zit kaas, veldsla, komkommer, tomaat, ei, ham en/of kip en bufkes saus.": "This sandwich contains cheese, lamb's lettuce, cucumber, tomato, egg, ham and/or chicken, and bufkes sauce.",
        "Doughnut brood met spek, ei en kaas": "Doughnut bread with bacon, egg, and cheese",
        "Een wit of bruin broodje met Gehakt, Ei, Sla en Joppiesaus": "A white or brown sandwich with minced meat, egg, lettuce, and Joppiesaus",
        "Een knapperig korstje met een warme, kruidige vleesvulling": "A crispy crust with a warm, spicy meat filling",
        "Een knapperige korstje met een warme frikandel en curry saus erin": "A crispy crust with a warm frikandel and curry sauce inside",
        "Koude verfrissende water.": "Cold refreshing water.",
        "Verschillende diverse milkshake (keuze bij de counter maken)": "Various milkshakes (choose at the counter)",
        "Een lekker warme chocolade melk": "A delicious hot chocolate milk",
        "Een lekkere warme chocolade melk met slagroom": "A delicious hot chocolate milk with whipped cream",
        "Een lekker warme koffie": "A delicious hot coffee",
        "heerlijke warme thee (keuze bij de kassa)": "Delicious hot tea (choose at the counter)",
        "Een frikandel, dat wil je wel!": "A frikandel, you want that!",
        "Een klein bakje met friet.": "A small box of fries.",
        "Een lekkere krokante Kipcorn.": "A delicious crispy Kipcorn.",
        "Een bakje met 9 kipnuggets.": "A box with 9 chicken nuggets.",
        "Een pittige mexicano.": "A spicy mexicano.",
        "Een bakje met 9 Bitterballen.": "A box with 9 Bitterballen.",
        "Een lekker ijsje met vele smaken, zoals aardbei, vanille, chocolade, mint, bosbes en nog veel meer (alleen in de zomer!).": "A delicious ice cream with many flavors, such as strawberry, vanilla, chocolate, mint, blueberry, and many more (only in summer!).",
        "Lekkeresorbet met saus naar keuze": "Delicious sorbet with sauce of your choice",
        "Bij deze deal krijg je 1 snack naar keuze, wat frietjes en drinken naar keuze erbij!": "With this deal, you get 1 snack of your choice, some fries, and a drink of your choice!",
        "Bij deze deal krijg je een keuze naar een broodje en een keuze naar een koude drank!!": "With this deal, you get a choice of a sandwich and a choice of a cold drink!!",
        "Soep van de dag! (Allergieën? Meld het bij ons!)": "Soup of the day! (Allergies? Let us know!)",
        "Een heerlijke salade met verse groenten en een dressing naar keuze.": "A delicious salad with fresh vegetables and a dressing of your choice.",
        "Kies de saus naar je keuze!": "Choose the sauce of your choice!", 
    },
    nl: {
        "Sandwiches": "Broodjes",
        "Cold Drinks": "Koude Dranken",
        "Hot Drinks": "Warme Dranken",
        "Snacks": "Snacks",
        "Ice Creams": "deserts",
        "Deals": "Deals",
        "Soups": "Soepen",
        "Salads": "Salades",
        "Sauces": "Sausjes",
        "Candy": "Snoep",
        "Shopping Cart": "Winkelmandje",
        "Price": "Prijs",
        "Add to cart": "Toevoegen aan winkelmandje",
        "Order": "Bestellen",
        "Total": "Totaal",
        "This sandwich contains cheese, lamb's lettuce, cucumber, tomato, egg, ham and/or chicken, and bufkes sauce.": "Op dit broodje zit kaas, veldsla, komkommer, tomaat, ei, ham en/of kip en bufkes saus.",
        "Doughnut bread with bacon, egg, and cheese": "Doughnut brood met spek, ei en kaas",
        "A white or brown sandwich with minced meat, egg, lettuce, and Joppiesaus": "Een wit of bruin broodje met Gehakt, Ei, Sla en Joppiesaus",
        "A crispy crust with a warm, spicy meat filling": "Een knapperig korstje met een warme, kruidige vleesvulling",
        "A crispy crust with a warm frikandel and curry sauce inside": "Een knapperige korstje met een warme frikandel en curry saus erin",
        "Cold refreshing water.": "Koude verfrissende water.",
        "Various milkshakes (choose at the counter)": "Verschillende diverse milkshake (keuze bij de counter maken)",
        "A delicious hot chocolate milk": "Een lekker warme chocolade melk",
        "A delicious hot chocolate milk with whipped cream": "Een lekkere warme chocolade melk met slagroom",
        "A delicious hot coffee": "Een lekker warme koffie",
        "Delicious hot tea (choose at the counter)": "heerlijke warme thee (keuze bij de kassa)",
        "A frikandel, you want that!": "Een frikandel, dat wil je wel!",
        "A small box of fries.": "Een klein bakje met friet.",
        "A delicious crispy Kipcorn.": "Een lekkere krokante Kipcorn.",
        "A box with 9 chicken nuggets.": "Een bakje met 9 kipnuggets.",
        "A spicy mexicano.": "Een pittige mexicano.",
        "A box with 9 Bitterballen.": "Een bakje met 9 Bitterballen.",
        "A delicious ice cream with many flavors, such as strawberry, vanilla, chocolate, mint, blueberry, and many more (only in summer!).": "Een lekker ijsje met vele smaken, zoals aardbei, vanille, chocolade, mint, bosbes en nog veel meer (alleen in de zomer!).",
        "Delicious sorbet with sauce of your choice": "Lekkeresorbet met saus naar keuze",
        "With this deal, you get 1 snack of your choice, some fries, and a drink of your choice!": "Bij deze deal krijg je 1 snack naar keuze, wat frietjes en drinken naar keuze erbij!",
        "With this deal, you get a choice of a sandwich and a choice of a cold drink!!": "Bij deze deal krijg je een keuze naar een broodje en een keuze naar een koude drank!!",
        "Soup of the day! (Allergies? Let us know!)": "Soep van de dag! (Allergieën? Meld het bij ons!)",
        "A delicious salad with fresh vegetables and a dressing of your choice.": "Een heerlijke salade met verse groenten en een dressing naar keuze.",
        "Choose the sauce of your choice!": "Kies de saus naar je keuze!"
    }
};

// Functie om de taal te wisselen
function switchLanguage(lang) {
    // Zoek alle elementen met een data-translate attribuut
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate"); // Verkrijg de sleutel uit het data-translate attribuut
        element.textContent = translations[lang][key] || key;  // Vertaal de tekst of behoud de sleutel als er geen vertaling is
    });
}

// Functie om de taal te wisselen wanneer de knop wordt aangeklikt
document.getElementById("language-switcher").addEventListener("click", () => {
    const currentLang = document.documentElement.lang; // Huidige taal ophalen
    const newLang = currentLang === "nl" ? "en" : "nl"; // Nieuwe taal bepalen
    document.documentElement.lang = newLang; // Wijzig de taal van de pagina
    switchLanguage(newLang); // Pas de vertalingen toe voor de nieuwe taal
    
    // Verander de tekst op de taalwisselknop
    const switcher = document.getElementById("language-switcher");
    switcher.textContent = newLang === "nl" ? "EN" : "NL"; // Zet de knop tekst naar de andere taal
});

// Stel de standaardtaal in
document.documentElement.lang = "nl"; // Begin met Nederlands
switchLanguage("nl"); // Pas de vertalingen toe voor Nederlands bij het laden van de pagina
