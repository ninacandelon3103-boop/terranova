/*
  # Create Contests Table

  1. New Tables
    - `contest_registrations`
      - `id` (uuid, primary key)
      - `email` (text) - reference to the person registering
      - `contest_type` (text) - "skate-freestyle" or "musique"
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contest_registrations` table
    - Add policy for public insert
*/

CREATE TABLE IF NOT EXISTS contest_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  contest_type text NOT NULL CHECK (contest_type IN ('skate-freestyle', 'musique')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contest_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register for a contest"
  ON contest_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
