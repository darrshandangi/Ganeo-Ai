import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, MapPin, Mail, Phone, MessageSquare, TrendingUp, HelpCircle, Loader2, Sparkles } from 'lucide-react';
import { submitOnboardingForm, isSupabaseConfigured } from '../../lib/supabase';
import type { OnboardingData } from '../../lib/supabase';
import { ThankYouCard } from './ThankYouCard';

export const OnboardingSection: React.FC = () => {
  const [formData, setFormData] = useState<OnboardingData>({
    full_name: '',
    business_address: '',
    email: '',
    phone: '',
    preferred_communication: 'whatsapp',
    avg_monthly_sales: '$10,000 - $50,000',
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
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const salesRanges = [
    'Under $10,000 / month',
    '$10,000 - $50,000 / month',
    '$50,000 - $100,000 / month',
    '$100,000 - $250,000 / month',
    '$250,000+ / month',
  ];

  return (
    <section className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-[#0C0C0C] text-white flex items-center justify-center overflow-hidden">
      {/* Dynamic light glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-900/20 via-blue-900/20 to-emerald-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-3xl relative z-10">
        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-neutral-900/90 border border-neutral-800/80 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl"
          >
            {/* Header Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-300 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Onboarding Form</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                Client Onboarding Details
              </h1>
              <p className="mt-3 text-base sm:text-lg text-neutral-400 max-w-xl mx-auto">
                Welcome aboard! Please provide your business details below to customize your growth strategy.
              </p>
              {!isSupabaseConfigured && (
                <div className="mt-4 p-3 text-xs rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 max-w-md mx-auto">
                  ℹ️ Demo Mode: Connected with local fallback logic (Supabase env vars can be added anytime).
                </div>
              )}
            </div>

            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name & Email grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-neutral-300 mb-2">
                    <User className="w-4 h-4 text-purple-400" />
                    Full Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    required
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/60 border border-neutral-700/60 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-neutral-300 mb-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    Email Address <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sarah@yourcompany.com"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/60 border border-neutral-700/60 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Phone & Business Address grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-neutral-300 mb-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    Phone Number <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/60 border border-neutral-700/60 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-neutral-300 mb-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    Business Address <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="business_address"
                    required
                    value={formData.business_address}
                    onChange={handleChange}
                    placeholder="123 Tech Blvd, Suite 400, NY"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/60 border border-neutral-700/60 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Primary Communication & Sales grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-neutral-300 mb-2">
                    <MessageSquare className="w-4 h-4 text-purple-400" />
                    Primary Communication <span className="text-purple-400">*</span>
                  </label>
                  <select
                    name="preferred_communication"
                    value={formData.preferred_communication}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/60 border border-neutral-700/60 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all text-sm cursor-pointer"
                  >
                    <option value="whatsapp" className="bg-neutral-900 text-white">WhatsApp</option>
                    <option value="slack" className="bg-neutral-900 text-white">Slack</option>
                    <option value="telegram" className="bg-neutral-900 text-white">Telegram</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-neutral-300 mb-2">
                    <TrendingUp className="w-4 h-4 text-purple-400" />
                    Average Monthly Sales <span className="text-purple-400">*</span>
                  </label>
                  <select
                    name="avg_monthly_sales"
                    value={formData.avg_monthly_sales}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/60 border border-neutral-700/60 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all text-sm cursor-pointer"
                  >
                    {salesRanges.map((range) => (
                      <option key={range} value={range} className="bg-neutral-900 text-white">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional notes */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-neutral-300 mb-2">
                  <HelpCircle className="w-4 h-4 text-purple-400" />
                  Anything else you'd like to share?
                </label>
                <textarea
                  name="additional_notes"
                  rows={4}
                  value={formData.additional_notes}
                  onChange={handleChange}
                  placeholder="Share your goals, current bottlenecks, or team specifics..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-800/60 border border-neutral-700/60 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting Onboarding Details...</span>
                  </>
                ) : (
                  <>
                    <span>Complete Onboarding</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <ThankYouCard
            customerName={formData.full_name}
            onReset={() => {
              setIsSubmitted(false);
              setFormData({
                full_name: '',
                business_address: '',
                email: '',
                phone: '',
                preferred_communication: 'whatsapp',
                avg_monthly_sales: '$10,000 - $50,000',
                additional_notes: '',
              });
            }}
          />
        )}
      </div>
    </section>
  );
};
