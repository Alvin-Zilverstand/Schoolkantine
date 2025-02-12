// Functie om de details van een geselecteerd item weer te geven
function showItemDetails(item) {
    var title = "";
    var imageSrc = "";
    var description = "";

    // Afhankelijk van het geselecteerde item, pas de details aan
    if (item === 'Broodjes') {
        title = "Broodje Gezond";
        imageSrc = "media/broodje-gezond.jpg";
        description = "Op dit broodje zit kaas, veldsla, komkommer, tomaat, ei, ham en/of kip en bufkes saus.";
    } else if (item === 'drinks') {
        title = "Spa Water";
        imageSrc = "media/spa.jpg";
        description = "Koude verfrissende water.";
    } else if (item === 'Snacks') {
        title = "Frikandel";
        imageSrc = "media/frikandel.jpg";
        description = "Een frikandel, dat wil je wel!";
    } else if (item === 'deserts') {
        title = "Ijsjes";
        imageSrc = "media/ijs.png";
        description = "Een lekker ijsje met vele smaken, zoals aardbei, vanille, chocolade, mint, bosbes en nog veel meer (alleen in de zomer!).";
    } else if (item === 'Deals') {
        title = "Deals";
        imageSrc = "media/deals.jpg"; 
        description = "Onze beste deals met de beste prijzen!";
    } else if (item === 'Soepen') {
        title = "Soepen";
        imageSrc = "media/soep.jpg";
        description = "Soep van de dag! (Allergieën? Meld het bij ons!)";
    } else if (item === 'Placeholder2') {
        title = "Placeholder 2";
        imageSrc = "";
        description = "Beschrijving voor Placeholder 2.";
    }

    // Update de inhoud van het modaal venster
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal-description").innerText = description;

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
