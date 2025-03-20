/*
  # Add brand preference to waitlist table

  1. Changes
    - Add brand_preference column to waitlist table
    - Add check constraint to ensure valid values

  2. Security
    - Maintain existing RLS policies
*/

-- Add brand_preference column
ALTER TABLE waitlist 
ADD COLUMN IF NOT EXISTS brand_preference text;

-- Add constraint for brand_preference values
ALTER TABLE waitlist
ADD CONSTRAINT valid_brand_preference 
CHECK (brand_preference IN ('branded', 'privateLabel', 'both'));

-- Update existing rows with default value if needed
UPDATE waitlist 
SET brand_preference = 'both' 
WHERE brand_preference IS NULL;