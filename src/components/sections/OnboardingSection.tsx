import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, MapPin, Mail, Phone, MessageSquare, TrendingUp, FileText, CheckCircle2, Star, Award, Lock, Loader2 } from 'lucide-react';
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
    avg_monthly_sales: '$10,000 - $50,000 / month',
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
    <section className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#09090b] text-neutral-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Gold & Soft Amber Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Top Brand Header & Hero Banner */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Client Onboarding Portal</span>
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-serif leading-tight">
                Welcome To <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">Ganeo AI</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                Congratulations on completing your onboarding! Please fill in your primary details below so our marketing and AI execution team can set minimum standards and build your customized growth roadmap.
              </p>
            </div>

            {/* Feature Video / Intro Banner Card */}
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/60 backdrop-blur-md shadow-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-full sm:w-1/2 aspect-video rounded-xl overflow-hidden bg-neutral-950 border border-amber-500/20 flex items-center justify-center group">
                <iframe
                  className="w-full h-full object-cover pointer-events-auto"
                  src="https://www.youtube.com/embed/kTboMapntM0?autoplay=0&mute=1&controls=1"
                  title="Ganeo AI Onboarding Welcome"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="w-full sm:w-1/2 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
                  <Award className="w-4 h-4" />
                  <span>Next Steps After Submission</span>
                </div>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Your account details & primary channel setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Minimum sales benchmarking for targeted ROI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Dedicated 1-on-1 strategy kickoff session</span>
                  </li>
                </ul>
              </div>
            </div>

            {!isSupabaseConfigured && (
              <div className="p-3 text-xs rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-center">
                ℹ️ Demo Mode: Connected with local fallback logic (Supabase env vars can be added anytime in `.env.local`).
              </div>
            )}

            {errorMessage && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
                {errorMessage}
              </div>
            )}

            {/* Main Form Container */}
            <form onSubmit={handleSubmit} className="rounded-3xl bg-neutral-900/90 border border-neutral-800 p-6 sm:p-10 shadow-2xl space-y-6">
              <div className="border-b border-neutral-800 pb-4 mb-2">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-400" />
                  <span>Client Details Intake</span>
                </h2>
                <p className="text-xs text-neutral-400 mt-1">Fields marked with <span className="text-amber-400">*</span> are mandatory.</p>
              </div>

              {/* Grid 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-200 mb-2">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <User className="w-4 h-4 text-amber-400 absolute left-3.5 pointer-events-none" />
                    <input
                      type="text"
                      name="full_name"
                      required
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950/90 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-200 mb-2">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <Mail className="w-4 h-4 text-amber-400 absolute left-3.5 pointer-events-none" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@company.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950/90 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Grid 2: Phone & Business Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-200 mb-2">
                    Phone Number <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <Phone className="w-4 h-4 text-amber-400 absolute left-3.5 pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950/90 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-200 mb-2">
                    Business Address <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <MapPin className="w-4 h-4 text-amber-400 absolute left-3.5 pointer-events-none" />
                    <input
                      type="text"
                      name="business_address"
                      required
                      value={formData.business_address}
                      onChange={handleChange}
                      placeholder="Suite 502, Business Bay, Mumbai"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950/90 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Grid 3: Communication Channel & Sales Benchmark */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-200 mb-2">
                    Primary Medium of Communication <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <MessageSquare className="w-4 h-4 text-amber-400 absolute left-3.5 pointer-events-none" />
                    <select
                      name="preferred_communication"
                      value={formData.preferred_communication}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950/90 border border-neutral-700/80 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition-all text-sm cursor-pointer"
                    >
                      <option value="whatsapp" className="bg-neutral-900 text-white">WhatsApp</option>
                      <option value="slack" className="bg-neutral-900 text-white">Slack</option>
                      <option value="telegram" className="bg-neutral-900 text-white">Telegram</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-200 mb-2">
                    Average Monthly Sales <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <TrendingUp className="w-4 h-4 text-amber-400 absolute left-3.5 pointer-events-none" />
                    <select
                      name="avg_monthly_sales"
                      value={formData.avg_monthly_sales}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950/90 border border-neutral-700/80 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition-all text-sm cursor-pointer"
                    >
                      {salesRanges.map((range) => (
                        <option key={range} value={range} className="bg-neutral-900 text-white">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <span className="text-[11px] text-neutral-400 mt-1.5 block">Used to establish baseline marketing KPIs.</span>
                </div>
              </div>

              {/* Field 4: Anything else */}
              <div>
                <label className="block text-sm font-medium text-neutral-200 mb-2">
                  Anything else you want to share?
                </label>
                <textarea
                  name="additional_notes"
                  rows={4}
                  value={formData.additional_notes}
                  onChange={handleChange}
                  placeholder="Share specific goals, past marketing results, or team instructions..."
                  className="w-full p-4 rounded-xl bg-neutral-950 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition-all text-sm resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-black font-bold flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-all cursor-pointer disabled:opacity-50 text-base uppercase tracking-wider"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Saving Details...</span>
                  </>
                ) : (
                  <>
                    <span>Submit & Proceed</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 pt-2">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Your information is end-to-end encrypted and saved securely.</span>
              </div>
            </form>

            {/* Trust Footer Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4">
              <div className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800">
                <div className="text-amber-400 font-bold text-lg">100%</div>
                <div className="text-xs text-neutral-400">Confidential</div>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800">
                <div className="text-amber-400 font-bold text-lg">24h</div>
                <div className="text-xs text-neutral-400">Team Contact</div>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800">
                <div className="text-amber-400 font-bold text-lg">Supabase</div>
                <div className="text-xs text-neutral-400">Backend Ready</div>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800">
                <div className="text-amber-400 font-bold text-lg">AI</div>
                <div className="text-xs text-neutral-400">Powered Strategy</div>
              </div>
            </div>
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
                avg_monthly_sales: '$10,000 - $50,000 / month',
                additional_notes: '',
              });
            }}
          />
        )}
      </div>
    </section>
  );
};

