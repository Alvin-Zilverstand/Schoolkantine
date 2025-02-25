CREATE DATABASE IF NOT EXISTS schoolkantine;
USE schoolkantine;

-- Create the items table
CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    title VARCHAR(100) NOT NULL,
    imageSrc VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT
);

-- Insert sample data into the items table
INSERT INTO items (category, title, imageSrc, price, description) VALUES
('Broodjes', 'Broodje Gezond', 'media/broodje-gezond.jpg', 3.80, 'Op dit broodje zit kaas, veldsla, komkommer, tomaat, ei, ham en/of kip en bufkes saus.'),
('Broodjes', 'Bagel', 'media/bagel.jpeg', 4.20, 'Doughnut brood met spek, ei en kaas'),
('Broodjes', 'Broodje Gehakt met Joppiesaus', 'media/GehaktJoppie.png', 3.80, 'Een wit of bruin broodje met Gehakt, Ei, Sla en Joppiesaus'),
('Broodjes', 'Frikandelbroodje', 'media/Frikandelbroodje.png', 1.20, 'Een knapperige korstje met een warme frikandel en curry saus erin'),
('Broodjes', 'Saucijzenbroodje', 'media/Saucijz.png', 1.20, 'Een knapperig korstje met een warme, kruidige vleesvulling'),
('Koude-Dranken', 'Spa Water', 'media/spa.webp', 2.00, 'Koude verfrissende water.'),
('Koude-Dranken', 'Spa Rood', 'media/spa-rood.jpg', 2.00, 'Koude verfrissende water.'),
('Koude-Dranken', 'Cola zero', 'media/cola-zero.jpg', 1.80, 'Koude verfrissende cola zero.'),
('Koude-Dranken', 'Cola vanille', 'media/cola-vanilla.jpg', 1.80, 'Koude verfrissende cola vanille.'),
('Koude-Dranken', 'Cola cherry', 'media/cola-cherry.jpg', 1.80, 'Koude verfrissende cola cherry.'),
('Koude-Dranken', 'Cola', 'media/cola.jpg', 1.80, 'Koude verfrissende cola.'),
('Koude-Dranken', 'Sprite', 'media/sprite.jpg', 1.80, 'Koude verfrissende sprite.'),
('Koude-Dranken', 'Dr pepper', 'media/drpepper.png', 1.80, 'Koude verfrissende dr pepper.'),
('Koude-Dranken', 'Fanta orange original', 'media/fanta.jpg', 1.80, 'Koude verfrissende fanta orange original.'),
('Koude-Dranken', 'Fanta orange zero', 'media/fanta-zero.jpg', 1.80, 'Koude verfrissende fanta orange zero.'),
('Koude-Dranken', 'Fanta exotic zero', 'media/fanta-exotic-zero.jpg', 1.80, 'Koude verfrissende fanta exotic zero.'),
('Koude-Dranken', 'Fanta lemon zero', 'media/fanta-lemon-zero.jpg', 1.80, 'Koude verfrissende fanta lemon zero.'),
('Koude-Dranken', 'Ice tea', 'https://www.manutan.nl/img/S/GRP/ST/AIG12165970.jpg', 1.80, 'Koude verfrissende ice tea.'),
('Koude-Dranken', 'Fanta cassis', 'media/fanta-cassis.jpg', 1.80, 'Koude verfrissende fanta cassis.'),
('Koude-Dranken', 'Milkshake', 'https://s3.amazonaws.com/static.realcaliforniamilk.com/media/recipes_2/sunset-sprinkle-shakes.jpg', 3.00, 'Verschillende diverse milkshake (keuze bij de counter maken).'),
('Warme-Dranken', 'Warme Chocomel', 'media/choco-gs.jpg', 2.30, 'Een lekker warme chocolade melk.'),
('Warme-Dranken', 'Warme Chocomel met slagroom', 'media/chocomel.jpg', 3.00, 'Een lekkere warme chocolade melk met slagroom.'),
('Warme-Dranken', 'Koffie', 'media/koffie.jpg', 2.20, 'Een lekker warme koffie.'),
('Warme-Dranken', 'Thee', 'media/thee.jpg', 2.00, 'Heerlijke warme thee (keuze bij de kassa).'),
('Snacks', 'Frikandel', 'media/frikandel.jpg', 1.60, 'Gemalen gehakt in een staafje.'),
('Snacks', 'Bitterballen', 'media/bitterbal.jpg', 2.50, 'Een bakje met 9 Bitterballen.'),
('Snacks', 'Mexicano', 'media/mexicano.png', 1.60, 'Een pittige mexicano.'),
('Snacks', 'Kipcorn', 'media/kipcorn.png', 1.60, 'Een lekkere krokante Kipcorn.'),
('Snacks', 'Friet', 'media/friet.png', 4.00, 'Een bakje friet.'),
('Snacks', 'Kipnuggets', 'media/kipnuggets.png', 2.50, 'Een bakje met 9 kipnuggets.'),
('Desserts', 'Ijsjes', 'media/Ijs.png', 2.30, 'Een lekker ijsje met vele smaken, zoals aardbei, vanille, chocolade, mint, bosbes en nog veel meer (alleen in de zomer!).'),
('Desserts', 'Sorbet', 'media/sorbet.webp', 3.20, 'Lekkeresorbet met saus naar keuze.'),
('Desserts', 'Softijs', 'media/softijs.jpg', 1.50, 'Een melk ijsje.'),
('Desserts', 'Sundea ijs', 'media/sundea.jpg', 2.30, 'Een softijs ijsje in een bakje met een sas naar keuze!'),
('Deals', 'Lunch Deal', 'media/deals.jpg', 7.00, 'Bij deze deal krijg je 1 snack naar keuze, wat frietjes en drinken naar keuze erbij!'),
('Deals', 'Gezonde Deal', 'media/deals.jpg', 7.00, 'Bij deze deal krijg je een keuze naar een broodje en een keuze naar een koude drank!!'),
('Soepen', 'Tomatensoep', 'media/soep.jpg', 3.80, 'Tomatensoep met gehakt balletje.'),
('Soepen', 'Kippensoep', 'media/kippensoep.jpg', 3.80, 'Kippensoep met kip en groenten.'),
('Soepen', 'Erwtensoep', 'media/erwtensoep.webp', 3.80, 'Gemalen erwten met stukjes worst erin.'),
('Soepen', 'Groentesoep (met gehaktballetjes)', 'media/groentesoep.jpg', 4.80, 'Een soep met veel groente erin en gehaktballetjes.'),
('Salades', 'Caesar Salade', 'media/salade.jpg', 5.10, 'In een klassieke Ceesar salade zit sla romaine, ui, kipfilet, citroen, mayonaise en olijfolie.'),
('Salades', 'Griekse Salade', 'media/griekse.jpg', 5.10, 'In een Griekse salade zit komkommer, snoeptomatjes, klein beetje rode ui, olijven, feta kaas en croutons.'),
('Salades', 'Krokante Kip Salade', 'media/krokante-kip.jpg', 6.00