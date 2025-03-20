/*
  # Add device preference to waitlist table

  1. Changes
    - Add device_preference column to waitlist table
    - Add check constraint to ensure valid values

  2. Security
    - Maintain existing RLS policies
*/

-- Add device_preference column
ALTER TABLE waitlist 
ADD COLUMN IF NOT EXISTS device_preference text;

-- Add constraint for device_preference values
ALTER TABLE waitlist
ADD CONSTRAINT valid_device_preference 
CHECK (device_preference IN ('web', 'mobile'));

-- Update existing rows with default value if needed
UPDATE waitlist 
SET device_preference = 'web' 
WHERE device_preference IS NULL;