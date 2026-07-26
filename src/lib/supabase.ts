import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qvjjuqgsrtpguatenurm.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_UwLbTr_InLtYUmX74un_Vw_skeGWmy-';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface OnboardingData {
  full_name: string;
  business_address: string;
  email: string;
  phone: string;
  preferred_communication: 'whatsapp' | 'slack' | 'telegram' | string;
  avg_monthly_sales: string;
  additional_notes?: string;
}

export async function submitOnboardingForm(formData: OnboardingData) {
  const url = `${supabaseUrl}/rest/v1/onboarding_submissions`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': supabaseAnonKey,
      'Authorization': `Bearer ${supabaseAnonKey}`,
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify({
      full_name: formData.full_name,
      business_address: formData.business_address,
      email: formData.email,
      phone: formData.phone,
      preferred_communication: formData.preferred_communication,
      avg_monthly_sales: formData.avg_monthly_sales,
      additional_notes: formData.additional_notes || '',
      created_at: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    let errMessage = 'Failed to submit details to database.';
    try {
      const errJson = await response.json();
      errMessage = errJson.message || errJson.error_description || errMessage;
    } catch (_) {}
    console.error('Supabase submission error:', errMessage);
    throw new Error(errMessage);
  }

  return { success: true };
}
