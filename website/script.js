// Functie om de details van een geselecteerd item weer te geven
        function showItemDetails(item) {
            var title = '';
            var description = '';
            var imageSrc = '';

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
                imageSrc = "https://www.google.com/url?sa=i&url=https%3A%2F%2Farchies.com%2Fmeal-deals%2F&psig=AOvVaw1_NfFf4gcmKiCqOgfey2ct&ust=1739435784222000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj9m7_dvYsDFQAAAAAdAAAAABAE"; 
                description = "Onze beste deals met de beste prijzen!";
            }   else if (item === 'Placeholder1') {
                title = "Placeholder 1";
                imageSrc = "";
                description = "Beschrijving voor Placeholder 1.";
            }   else if (item === 'Placeholder2') {
                title = "Placeholder 2";
                imageSrc = "";
                description = "Beschrijving voor Placeholder 2.";
            }
    

            // Toon de details aan de rechterkant
            document.getElementById("item-title").innerText = title;
            document.getElementById("item-image").src = imageSrc;
            document.getElementById("item-description").innerText = description;

            // Zorg ervoor dat de detailsectie zichtbaar wordt
            document.getElementById("menu-detail").style.display = "block";
        }