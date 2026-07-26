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
  if (supabase && isSupabaseConfigured) {
    const { data, error } = await supabase
      .from('onboarding_submissions')
      .insert([
        {
          full_name: formData.full_name,
          business_address: formData.business_address,
          email: formData.email,
          phone: formData.phone,
          preferred_communication: formData.preferred_communication,
          avg_monthly_sales: formData.avg_monthly_sales,
          additional_notes: formData.additional_notes || '',
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(error.message || 'Failed to submit details to database.');
    }
    return data;
  } else {
    // Simulated delay for local testing when Supabase keys are not set yet
    console.warn('Supabase env vars missing. Operating in mock submission mode.');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: true, mock: true };
  }
}
