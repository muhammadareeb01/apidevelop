/*
  # Add user_id column to waitlist table

  1. Changes
    - Add user_id column to waitlist table
    - Add foreign key constraint to auth.users
    - Update existing rows with NULL values

  2. Security
    - Maintain existing RLS policies
*/

-- Add user_id column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'waitlist' AND column_name = 'user_id'
  ) THEN
    ALTER TABLE waitlist 
    ADD COLUMN user_id uuid REFERENCES auth.users(id);
  END IF;
END $$;