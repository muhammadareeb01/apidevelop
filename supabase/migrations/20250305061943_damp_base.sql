/*
  # Add name and feedback columns to waitlist table

  1. Changes
    - Add `name` column to `waitlist` table
    - Add `feedback` column for optional product feature recommendations
    - Handle existing rows by setting a default value
    - Add name validation constraint

  2. Notes
    - Existing rows will get a default value for the name field
    - New entries will require a non-empty name
*/

-- First add the columns without constraints
ALTER TABLE waitlist 
ADD COLUMN IF NOT EXISTS name text,
ADD COLUMN IF NOT EXISTS feedback text;

-- Update existing rows with a default value
UPDATE waitlist 
SET name = 'Anonymous User'
WHERE name IS NULL;

-- Now make name required and add the constraint
ALTER TABLE waitlist 
ALTER COLUMN name SET NOT NULL;

-- Add constraint to ensure name is not empty for new entries
ALTER TABLE waitlist
ADD CONSTRAINT valid_name 
CHECK (length(trim(name)) > 0);