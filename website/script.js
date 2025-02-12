// Functie om de details van een geselecteerd item weer te geven
        function showItemDetails(item) {
            var title = '';
            var description = '';
            var imageSrc = '';

            // Afhankelijk van het geselecteerde item, pas de details aan
            if (item === 'Broodjes') {
                title = "Broodje gezond";
                imageSrc = "https://thumbs.dreamstime.com/b/submarine-sandwich-ham-cheese-clipping-path-egg-tomato-cucumber-lettuce-white-48580716.jpg";
                description = "Op dit broodje zit kaas, veldsla, komkommer, tomaat, ei, ham en/of kip en bufkes saus.";
            } else if (item === 'drinks') {
                title = "Spa water";
                imageSrc = "https://m.media-amazon.com/images/I/71VrczELeaL._AC_SY741_.jpg";
                description = "Koude verfrissende water";
            } else if (item === 'Snacks') {
                title = "Frikandel";
                imageSrc = "https://boshuis.huisjebezorgd.nl/wp-content/uploads/2020/03/29512948_652505005141152_1601506864166600704_o.jpg"; 
                description = "Een frikandel, dat wil je wel!";
            }  else if (item === 'deserts') {
                title = "Ijsjes";
                imageSrc = "https://th.bing.com/th/id/R.5e81f369a0da6a92106391e7b0a5119b?rik=KD0kNGiRjGM22g&riu=http%3a%2f%2fwww.brookersicecream.com%2fwp-content%2fuploads%2f2018%2f09%2fIce-Cream-Fan.png&ehk=%2bfZOURa%2fKgmE4uuuESx9We3OBrwXpPaaMZpJaBJt4bo%3d&risl=&pid=ImgRaw&r=0"; 
                description = "Een lekker ijsje met vele smaken, zoals aardbei, vannille, chocolade, mint, bosbes en nog veel meer (alleen in de zomer!)";
            }

            // Toon de details aan de rechterkant
            document.getElementById("item-title").innerText = title;
            document.getElementById("item-image").src = imageSrc;
            document.getElementById("item-description").innerText = description;

            // Zorg ervoor dat de detailsectie zichtbaar wordt
            document.getElementById("menu-detail").style.display = "block";
        }