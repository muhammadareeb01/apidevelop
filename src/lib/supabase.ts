import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yhyaslxqzwqptknmybqa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloeWFzbHhxendxcHRrbm15YnFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzNDI0NzEsImV4cCI6MjA1NDkxODQ3MX0.PuEgYieC6zTb15QZg8aEhnon5JkRXXpZYW4u0cV26W8';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});