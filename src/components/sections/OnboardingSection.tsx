import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
import { submitOnboardingForm, isSupabaseConfigured } from '../../lib/supabase';
import type { OnboardingData } from '../../lib/supabase';
import { ThankYouCard } from './ThankYouCard';

export const OnboardingSection: React.FC = () => {
  const [formData, setFormData] = useState<OnboardingData>({
    full_name: '',
    business_address: '',
    email: '',
    phone: '',
    preferred_communication: 'WhatsApp',
    avg_monthly_sales: 'Under $10,000 / month',
    additional_notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await submitOnboardingForm(formData);
      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong while submitting.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-[calc(100vh-160px)] flex flex-col items-center justify-center py-8 relative overflow-hidden bg-[#0A0A0A] text-white">
      {/* Ambient Radial Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[600px] pointer-events-none opacity-10 blur-[140px] bg-gradient-to-b from-[#FFCC00]/40 to-transparent" />

      <div className="w-full max-w-[640px] px-4 relative z-10">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="onboarding-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-[#131313]/90 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/5 shadow-2xl space-y-6"
            >
              {/* Card Header */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
                  Customer Onboarding
                </h1>
                <p className="text-neutral-400 text-base">
                  Complete your profile to unlock Ganeo's high-performance AI engine for your business.
                </p>
                <p className="text-[#FFCC00] mt-2 font-semibold text-base">
                  We provide 3D websites and AI automation to small Businesses.
                </p>
              </div>

              {!isSupabaseConfigured && (
                <div className="p-3 text-xs rounded-lg bg-[#FFCC00]/10 border border-[#FFCC00]/20 text-[#FFCC00] text-center">
                  ℹ️ Demo Mode: Connected with local fallback logic (Supabase env vars can be added in `.env.local`).
                </div>
              )}

              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
                  {errorMessage}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6" id="onboardingForm">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-white" htmlFor="fullName">
                    Full Name <span className="text-[#FFCC00]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      name="full_name"
                      type="text"
                      required
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="e.g. Alexander Hamilton"
                      className="w-full h-[48px] px-4 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#FFCC00] focus:ring-0 transition-all placeholder:text-white/20 text-base"
                    />
                  </div>
                </div>

                {/* Business Address */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-white" htmlFor="address">
                    Business Address <span className="text-[#FFCC00]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="address"
                      name="business_address"
                      type="text"
                      required
                      value={formData.business_address}
                      onChange={handleChange}
                      placeholder="123 Corporate Way, Suite 500, New York, NY"
                      className="w-full h-[48px] px-4 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#FFCC00] focus:ring-0 transition-all placeholder:text-white/20 text-base"
                    />
                  </div>
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-white" htmlFor="email">
                      Work Email <span className="text-[#FFCC00]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full h-[48px] px-4 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#FFCC00] focus:ring-0 transition-all placeholder:text-white/20 text-base"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-white" htmlFor="phone">
                      Phone Number <span className="text-[#FFCC00]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full h-[48px] px-4 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#FFCC00] focus:ring-0 transition-all placeholder:text-white/20 text-base"
                      />
                    </div>
                  </div>
                </div>

                {/* Primary Communication & Sales */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-white" htmlFor="comms">
                      Primary Communication <span className="text-[#FFCC00]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="comms"
                        name="preferred_communication"
                        required
                        value={formData.preferred_communication}
                        onChange={handleChange}
                        className="w-full h-[48px] px-4 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#FFCC00] focus:ring-0 transition-all text-base cursor-pointer"
                      >
                        <option value="WhatsApp" className="bg-[#131313] text-white">WhatsApp</option>
                        <option value="Slack" className="bg-[#131313] text-white">Slack</option>
                        <option value="Telegram" className="bg-[#131313] text-white">Telegram</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-white" htmlFor="sales">
                      Average Monthly Sales <span className="text-[#FFCC00]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="sales"
                        name="avg_monthly_sales"
                        required
                        value={formData.avg_monthly_sales}
                        onChange={handleChange}
                        className="w-full h-[48px] px-4 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#FFCC00] focus:ring-0 transition-all text-base cursor-pointer"
                      >
                        <option value="Under $10,000 / month" className="bg-[#131313] text-white">Under $10,000 / month</option>
                        <option value="$10,000 - $50,000 / month" className="bg-[#131313] text-white">$10,000 - $50,000 / month</option>
                        <option value="$50,000 - $100,000 / month" className="bg-[#131313] text-white">$50,000 - $100,000 / month</option>
                        <option value="$100,000 - $250,000 / month" className="bg-[#131313] text-white">$100,000 - $250,000 / month</option>
                        <option value="$250,000+ / month" className="bg-[#131313] text-white">$250,000+ / month</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-white" htmlFor="additional">
                    Additional Information
                  </label>
                  <div className="relative">
                    <textarea
                      id="additional"
                      name="additional_notes"
                      rows={4}
                      value={formData.additional_notes}
                      onChange={handleChange}
                      placeholder="Any specific AI implementation goals?"
                      className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#FFCC00] focus:ring-0 transition-all placeholder:text-white/20 resize-none text-base"
                    />
                  </div>
                  <span className="text-xs text-neutral-400 italic">Tell our engineering team about your specific needs.</span>
                </div>

                {/* Submission Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[56px] bg-[#FFCC00] hover:bg-[#FFD633] text-black font-bold rounded-lg transition-all flex items-center justify-center gap-2 group shadow-[0_4px_14px_0_rgba(255,204,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,204,0,0.4)] hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span className="uppercase tracking-wider">Deploying...</span>
                      </>
                    ) : (
                      <>
                        <span className="uppercase tracking-wider font-extrabold">Submit Details</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Encryption Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-neutral-400 uppercase tracking-tighter opacity-70">
                <ShieldCheck className="w-4 h-4 text-[#FFCC00]" />
                <span>Enterprise-grade 256-bit AES encryption active</span>
              </div>
            </motion.div>
          ) : (
            <ThankYouCard
              key="thank-you"
              data={formData}
              onReset={() => {
                setIsSubmitted(false);
                setFormData({
                  full_name: '',
                  business_address: '',
                  email: '',
                  phone: '',
                  preferred_communication: 'WhatsApp',
                  avg_monthly_sales: 'Under $10,000 / month',
                  additional_notes: '',
                });
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
