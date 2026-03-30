import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ridsdfuiwgaohtvunduy.supabase.co'
const supabaseKey = sb_publishable_febcmpZdDAB_siaAXKfSfw_TZ8ySws5

export const supabase = createClient(supabaseUrl, supabaseKey)