// Functie om de details van een geselecteerd item weer te geven
function showItemDetails(item) {
    var items = [];

            // Afhankelijk van het geselecteerde item, pas de details aan
            if (item === 'Broodjes') {
                title = "Broodje gezond";
                imageSrc = "media/broodje-gezond.jpg";
                description = "Op dit broodje zit kaas, veldsla, komkommer, tomaat, ei, ham en/of kip en bufkes saus.";
            } else if (item === 'drinks') {
                title = "Spa water";
                imageSrc = "media/spa.jpg";
                description = "Koude verfrissende water";
            } else if (item === 'Snacks') {
                title = "Frikandel";
                imageSrc = "media/frikandel.jpg"; 
                description = "Een frikandel, dat wil je wel!";
            }  else if (item === 'deserts') {
                title = "Ijsjes";
                imageSrc = "media/ijs.png"; 
                description = "Een lekker ijsje met vele smaken, zoals aardbei, vannille, chocolade, mint, bosbes en nog veel meer (alleen in de zomer!)";
            }   else if (item === 'Deals') {
                title = "Deals";
                imageSrc = "https://archies.com/wp-content/uploads/2024/07/MEAL-DEALS_HERO_MOBILE-1.jpg"; 
                description = "Onze beste deals met de beste prijzen!";
            }   else if (item === 'soep') {
                title = "soepen";
                imageSrc = "https://www.lekkeretenmetlinda.nl/wp-content/uploads/2025/01/Minestrone-soep-1a-768x576.jpg";
                description = "soep van de dag! (Allergieen? Meld het bij ons!";
            }   else if (item === 'Placeholder 2') {
                title = "Placeholder 2";
                imageSrc = "";
                description = "Beschrijving voor Placeholder 2.";
            }
    

            // Toon de details aan de rechterkant
            document.getElementById("item-title").innerText = title;
            document.getElementById("item-image").src = imageSrc;
            document.getElementById("item-description").innerText = description;

    // Zet het modaal venster zichtbaar
    document.getElementById("modal").style.display = "block";
}

// Functie om het modaal venster te sluiten
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
