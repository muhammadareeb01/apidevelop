/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, unique, required)
      - `zip_code` (text)
      - `preferred_retailers` (text array)
      - `device_preference` (text)
      - `brand_preference` (text)
      - `feedback` (text)
      - `metadata` (jsonb)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on waitlist table
    - Add policy for public inserts
*/

-- Create the waitlist table in the public schema
CREATE TABLE IF NOT EXISTS public.waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (length(TRIM(BOTH FROM name)) > 0),
  email text NOT NULL UNIQUE,
  zip_code text CHECK (zip_code ~ '^[0-9]{5}$'),
  preferred_retailers text[],
  device_preference text CHECK (device_preference = ANY (ARRAY['web'::text, 'mobile'::text])),
  brand_preference text CHECK (brand_preference = ANY (ARRAY['branded'::text, 'privateLabel'::text, 'both'::text])),
  feedback text,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DO $$ 
BEGIN
    DROP POLICY IF EXISTS "Allow public inserts" ON public.waitlist;
    DROP POLICY IF EXISTS "Allow insert for authenticated users" ON public.waitlist;
EXCEPTION
    WHEN undefined_object THEN 
        NULL;
END $$;

-- Create policy to allow public inserts
CREATE POLICY "Allow public inserts" ON public.waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy for authenticated users
CREATE POLICY "Allow insert for authenticated users" ON public.waitlist
  FOR INSERT
  TO public
  WITH CHECK (auth.uid() IS NOT NULL);