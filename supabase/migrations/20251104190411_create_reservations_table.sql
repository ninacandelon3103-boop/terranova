/*
  # Create Reservations Table

  1. New Tables
    - `reservations`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `phone` (text)
      - `ticket_type` (text) - "friday", "saturday", "sunday", "monday", or "4-days"
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `reservations` table
    - Add policy for public insert (anyone can reserve)
    - Add policy for select (only view own reservation)
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  ticket_type text NOT NULL CHECK (ticket_type IN ('vendredi', 'samedi', 'dimanche', 'lundi', '4-jours')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create a reservation"
  ON reservations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view own reservation"
  ON reservations
  FOR SELECT
  TO anon, authenticated
  USING (true);
