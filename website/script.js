// Functie om de details van een geselecteerd item weer te geven
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
    } else if (item === 'drinks') {
        title = "Spa Water";
        imageSrc = "media/spa.webp";
        description = "Koude verfrissende water.";
        price = 1.00;
    } else if (item === 'Warme dranken') {
        title = "Warme dranken";
        imageSrc = "";
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

    // Zet het modaal venster zichtbaar
    document.getElementById("modal").style.display = "block";
}

// Functie om het modaal venster te sluiten
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Zorg ervoor dat het modaal venster sluit wanneer er buiten het venster wordt geklikt
window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        closeModal();
    }
}
