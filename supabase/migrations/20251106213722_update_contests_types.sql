/*
  # Update Contest Types

  1. Changes
    - Update CHECK constraint on contest_registrations table to include 'bataille-danse', 'tombola', 'blind-test'
    - Remove 'musique' from allowed values
    - Keep 'skate-freestyle' as is
*/

DO $$
BEGIN
  ALTER TABLE contest_registrations DROP CONSTRAINT contest_registrations_contest_type_check;
  ALTER TABLE contest_registrations ADD CONSTRAINT contest_registrations_contest_type_check CHECK (contest_type IN ('skate-freestyle', 'bataille-danse', 'tombola', 'blind-test'));
EXCEPTION WHEN OTHERS THEN
  NULL;
END $$;
