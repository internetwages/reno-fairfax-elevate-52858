-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  project_type TEXT,
  details TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (customers aren't logged in)
CREATE POLICY "Allow public inserts" 
ON public.contact_submissions
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Prevent public reads (only backend can access via service role)
CREATE POLICY "Deny public reads" 
ON public.contact_submissions
FOR SELECT 
TO anon 
USING (false);