// Connect Supabase with your website
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Your Supabase credentials
const supabaseUrl = 'https://dnimfbfmysroayjculow.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuaW1mYmZteXNyb2F5amN1bG93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMzAxOTMsImV4cCI6MjA3NjgwNjE5M30.6slwRavUPClozrWubmKL_8ZUjnEXhM0zofROItWvD9E'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
