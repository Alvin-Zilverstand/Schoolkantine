        // Functie om de details van een geselecteerd item weer te geven
        function showItemDetails(item) {
            var title = "";
            var image = "";
            var description = "";

            // Afhankelijk van het geselecteerde item, pas de details aan
            if (item === 'Broodjes') {
                title = "Broodje gezond";
                image = "https://thumbs.dreamstime.com/b/submarine-sandwich-ham-cheese-clipping-path-egg-tomato-cucumber-lettuce-white-48580716.jpg";
                description = "Broodje met ei en sla ectr.";
            } else if (item === 'drinks') {
                title = "Spa water";
                image = "https://m.media-amazon.com/images/I/71VrczELeaL._AC_SY741_.jpg";
                description = "Koude verfrissende watuuur ectr.";
            } else if (item === 'Snacks') {
                title = "Frikandel";
                image = "https://boshuis.huisjebezorgd.nl/wp-content/uploads/2020/03/29512948_652505005141152_1601506864166600704_o.jpg"; 
                description = "vlees etc.";
            }

            // Toon de details aan de rechterkant
            document.getElementById("item-title").innerText = title;
            document.getElementById("item-image").src = image;
            document.getElementById("item-description").innerText = description;

            // Zorg ervoor dat de detailsectie zichtbaar wordt
            document.getElementById("menu-detail").style.display = "block";
        }