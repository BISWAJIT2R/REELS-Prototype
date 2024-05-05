import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://grsxaoahwbugkcnldohw.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdyc3hhb2Fod2J1Z2tjbmxkb2h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3ODgxODYsImV4cCI6MjAzMDM2NDE4Nn0.FAX6chufC8msBbZyQFT-C96VEeah4TLC7OWJrbOdJYo"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;