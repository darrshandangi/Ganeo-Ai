# Supabase Database Setup Script for Ganeo AI Onboarding

Run the following SQL query inside your **Supabase SQL Editor** to create the table required for storing onboarding submissions:

```sql
-- Create table for onboarding submissions
CREATE TABLE IF NOT EXISTS public.onboarding_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    business_address TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    preferred_communication TEXT NOT NULL CHECK (preferred_communication IN ('whatsapp', 'slack', 'telegram')),
    avg_monthly_sales TEXT NOT NULL,
    additional_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.onboarding_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous form submissions
CREATE POLICY "Allow public insert to onboarding_submissions"
ON public.onboarding_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Allow authenticated users (or admins) to view submissions
CREATE POLICY "Allow authenticated read"
ON public.onboarding_submissions
FOR SELECT
TO authenticated
USING (true);
```

## `.env.local` Configuration

To connect this application to your Supabase project, create or update `.env.local` in the project root:

```env
VITE_SUPABASE_URL=https://your-supabase-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here
```
