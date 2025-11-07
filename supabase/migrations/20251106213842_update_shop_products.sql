/*
  # Update Shop Products

  1. Changes
    - Delete existing placeholder products
    - Add new products with correct information:
      - T-Shirt 20€
      - Casquette 15€
      - Porte-clefs 5€
      - Stickers gratuit
      - Verres consignés 1€
      - Capote de verre (offerte pour 1 consommation)
*/

DELETE FROM shop_products;

INSERT INTO shop_products (name, description, price) VALUES
  ('T-Shirt Terra Nova', 'Disponible en 3 coloris', 20),
  ('Casquette Terra Nova', 'Disponible en 3 coloris', 15),
  ('Porte-clefs gravé', 'Porte-clefs exclusif Terra Nova', 5),
  ('Stickers Terra Nova', 'Lot de stickers', 0),
  ('Verres consignés', 'Verre réutilisable avec consigne', 1),
  ('Capote de verre', 'Offerte pour 1 consommation (max 1 par personne avec billet)', 0);
