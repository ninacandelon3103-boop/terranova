/*
  # Create Shop Products Table

  1. New Tables
    - `shop_products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (numeric)
      - `image_url` (text, nullable - for future image uploads)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `shop_products` table
    - Add policy for public select only
*/

CREATE TABLE IF NOT EXISTS shop_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE shop_products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON shop_products
  FOR SELECT
  TO anon, authenticated
  USING (true);

INSERT INTO shop_products (name, description, price) VALUES
  ('Porte-clefs Terra Nova', 'Porte-clefs exclusif Terra Nova', 4),
  ('T-shirt Terra Nova', 'T-shirt taille unique avec logo Terra Nova', 20),
  ('Capote de verre', 'Capote de verre réutilisable', 3),
  ('Bracelet tissé', 'Bracelet tissé personnalisé', 6);
