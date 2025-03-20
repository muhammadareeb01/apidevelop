/*
  # Add ZIP code and preferred retailers to waitlist table

  1. Changes
    - Add zip_code column to waitlist table
    - Add preferred_retailers column to waitlist table as an array of strings
    - Add validation for ZIP code format

  2. Security
    - Maintain existing RLS policies
*/

-- Add new columns to waitlist table
ALTER TABLE waitlist 
ADD COLUMN IF NOT EXISTS zip_code text,
ADD COLUMN IF NOT EXISTS preferred_retailers text[];

-- Add constraint for ZIP code format
ALTER TABLE waitlist
ADD CONSTRAINT valid_zip_code 
CHECK (zip_code ~ '^[0-9]{5}$');

-- Update existing rows with default values if needed
UPDATE waitlist 
SET preferred_retailers = ARRAY[]::text[] 
WHERE preferred_retailers IS NULL;