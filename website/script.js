// Functie om de details van een geselecteerd item weer te geven
function showItemDetails(item) {
    var items = [];


    // Afhankelijk van het geselecteerde item, voeg de producten toe
    if (item === 'Broodjes') {
        items = [
            {
                title: "Broodje Gezond",
                image: "https://thumbs.dreamstime.com/b/submarine-sandwich-ham-cheese-clipping-path-egg-tomato-cucumber-lettuce-white-48580716.jpg",
                description: "Op dit broodje zit kaas, veldsla, komkommer, tomaat, ei, ham en/of kip en bufkes saus."
            }
        ];
    } else if (item === 'drinks') {
        items = [
            {
                title: "Spa Water",
                image: "https://m.media-amazon.com/images/I/71VrczELeaL._AC_SY741_.jpg",
                description: "Koude verfrissende water."
            }
        ];
    } else if (item === 'Snacks') {
        items = [
            {
                title: "Frikandel",
                image: "https://boshuis.huisjebezorgd.nl/wp-content/uploads/2020/03/29512948_652505005141152_1601506864166600704_o.jpg",
                description: "Een frikandel, dat wil je wel!"
            }
        ];
    } else if (item === 'deserts') {
        items = [
            {
                title: "Ijsjes",
                image: "https://th.bing.com/th/id/R.5e81f369a0da6a92106391e7b0a5119b?rik=KD0kNGiRjGM22g&riu=http%3a%2f%2fwww.brookersicecream.com%2fwp-content%2fuploads%2f2018%2f09%2fIce-Cream-Fan.png&ehk=%2bfZOURa%2fKgmE4uuuESx9We3OBrwXpPaaMZpJaBJt4bo%3d&risl=&pid=ImgRaw&r=0",
                description: "Een lekker ijsje met vele smaken, zoals aardbei, vanille, chocolade, mint, bosbes en nog veel meer (alleen in de zomer!)."
            }
        ];
    }

    else if (item === 'Deals') {
        items = [
            {
                title: "deals",
                image: "",
                description: "Onze beste deals met de beste prijzen!."
            }
        ];
    }

    else if (item === 'soepen') {
        items = [
            {
                title: "soepen",
                image: "",
                description: "Soep van de dag! (Allergieën? Meld het bij ons!)."
            }
        ];
    }


 // Leeg de productweergave
 const productDisplay = document.getElementById('product-display');
 productDisplay.innerHTML = '';

 // Voeg de items toe aan de weergave
 items.forEach(item => {
     const productBox = document.createElement('div');
     productBox.classList.add('product-box');
     productBox.innerHTML = `
         <img src="${item.image}" alt="${item.title}" onclick="openModal('${item.title}', '${item.image}', '${item.description}')">
         <h3>${item.title}</h3>
     `;
     productDisplay.appendChild(productBox);
 });
}

// Functie om het modaal venster te openen
function openModal(title, image, description) {
 document.getElementById("modal-title").innerText = title;
 document.getElementById("modal-image").src = image;
 document.getElementById("modal-description").innerText = description;

 // Zet het modaal venster zichtbaar
 document.getElementById("modal").style.display = "block";
}

// Functie om het modaal venster te sluiten
function closeModal() {
 document.getElementById("modal").style.display = "none";
}