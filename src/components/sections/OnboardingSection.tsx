import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, MapPin, Mail, Phone, MessageSquare, Sparkles, Lock, ArrowRight, Loader2, HelpCircle } from 'lucide-react';
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

  const [activeStep, setActiveStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChannel = (channel: string) => {
    setFormData((prev) => ({ ...prev, preferred_communication: channel }));
  };

  const handleSelectSales = (range: string) => {
    setFormData((prev) => ({ ...prev, avg_monthly_sales: range }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await submitOnboardingForm(formData);
      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong while saving details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const commOptions = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      description: 'Instant team group chat & voice notes',
      icon: '💬',
      badge: 'Popular',
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Dedicated workspace channel & integration',
      icon: '⚡',
      badge: 'Pro',
    },
    {
      id: 'telegram',
      name: 'Telegram',
      description: 'Fast encrypted group communication',
      icon: '✈️',
      badge: 'Direct',
    },
  ];

  const salesRanges = [
    { label: 'Under $10k / mo', val: 'Under $10,000 / month', desc: 'Starter Stage' },
    { label: '$10k - $50k / mo', val: '$10,000 - $50,000 / month', desc: 'Scaling Stage' },
    { label: '$50k - $100k / mo', val: '$50,000 - $100,000 / month', desc: 'Growth Stage' },
    { label: '$100k - $250k / mo', val: '$100,000 - $250,000 / month', desc: 'Expansion Stage' },
    { label: '$250k+ / mo', val: '$250,000+ / month', desc: 'Enterprise' },
  ];

  return (
    <section className="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-[#09090c] text-neutral-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Background Gradients & Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-amber-500/10 via-yellow-600/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form-container"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Header Badge & Title */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/30 text-xs font-semibold uppercase tracking-widest text-amber-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Onboarding Portal</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-serif leading-tight">
                  Welcome to <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">Ganeo AI</span>
                </h1>

                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
                  Now that you've been onboarded, please provide your business details below so we can set minimum marketing standards and build your growth engine.
                </p>
              </div>

              {/* Progress Steps Header */}
              <div className="max-w-xl mx-auto grid grid-cols-3 gap-2 text-center text-xs font-medium border-b border-neutral-800 pb-4">
                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className={`flex flex-col items-center gap-1.5 pb-2 transition-all cursor-pointer ${
                    activeStep === 1
                      ? 'text-amber-400 font-bold border-b-2 border-amber-400 -mb-[18px]'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[11px]">1</span>
                  <span>Contact Details</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveStep(2)}
                  className={`flex flex-col items-center gap-1.5 pb-2 transition-all cursor-pointer ${
                    activeStep === 2
                      ? 'text-amber-400 font-bold border-b-2 border-amber-400 -mb-[18px]'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[11px]">2</span>
                  <span>Communication & Sales</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveStep(3)}
                  className={`flex flex-col items-center gap-1.5 pb-2 transition-all cursor-pointer ${
                    activeStep === 3
                      ? 'text-amber-400 font-bold border-b-2 border-amber-400 -mb-[18px]'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[11px]">3</span>
                  <span>Notes & Submit</span>
                </button>
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

              {/* Main Form Body */}
              <form onSubmit={handleSubmit} className="rounded-3xl bg-[#121216]/90 border border-neutral-800/80 p-6 sm:p-10 shadow-2xl space-y-8 backdrop-blur-xl">

                {/* STEP 1: Contact Details */}
                {activeStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-neutral-800 pb-3">
                      <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <User className="w-5 h-5 text-amber-400" />
                        <span>Step 1: Personal & Business Info</span>
                      </h2>
                      <p className="text-xs text-neutral-400 mt-1">Basic contact and location information for your account.</p>
                    </div>

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
                            placeholder="e.g. Sarah Jenkins"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950/90 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition-all text-sm"
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
                            placeholder="sarah@company.com"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950/90 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition-all text-sm"
                          />
                        </div>
                      </div>
                    </div>

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
                            placeholder="+1 (555) 000-0000"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950/90 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition-all text-sm"
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
                            placeholder="123 Tech Blvd, Suite 400, NY"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950/90 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition-all text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="px-6 py-3 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-all flex items-center gap-2 text-sm cursor-pointer"
                      >
                        <span>Next: Communication & Sales</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Communication & Sales */}
                {activeStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-neutral-800 pb-3">
                      <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-amber-400" />
                        <span>Step 2: Communication & Minimum Standards</span>
                      </h2>
                      <p className="text-xs text-neutral-400 mt-1">Select your primary messaging medium and sales benchmark.</p>
                    </div>

                    {/* Primary Communication Channel Selector */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-200 mb-3">
                        Primary Communication Channel (Choose 1) <span className="text-amber-400">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {commOptions.map((option) => {
                          const isSelected = formData.preferred_communication === option.id;
                          return (
                            <div
                              key={option.id}
                              onClick={() => handleSelectChannel(option.id)}
                              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                                isSelected
                                  ? 'bg-amber-500/10 border-amber-400 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400'
                                  : 'bg-neutral-950/80 border-neutral-800 hover:border-neutral-700'
                              }`}
                            >
                              <div className="flex justify-between items-start">
                                <span className="text-2xl">{option.icon}</span>
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase ${
                                  isSelected ? 'bg-amber-400 text-black' : 'bg-neutral-800 text-neutral-400'
                                }`}>
                                  {option.badge}
                                </span>
                              </div>
                              <div>
                                <div className="font-bold text-white text-base">{option.name}</div>
                                <div className="text-xs text-neutral-400 mt-0.5">{option.description}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Monthly Sales Benchmark Pill Selector */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-200 mb-3">
                        Average Monthly Sales <span className="text-amber-400">*</span>
                        <span className="block text-xs font-normal text-neutral-400 mt-0.5">Used to set minimum standard for marketing campaigns.</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {salesRanges.map((item) => {
                          const isSelected = formData.avg_monthly_sales === item.val;
                          return (
                            <button
                              key={item.val}
                              type="button"
                              onClick={() => handleSelectSales(item.val)}
                              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-amber-500/10 border-amber-400 text-white font-semibold ring-1 ring-amber-400'
                                  : 'bg-neutral-950/80 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                              }`}
                            >
                              <div className="text-xs font-bold text-amber-300">{item.label}</div>
                              <div className="text-[11px] text-neutral-400">{item.desc}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveStep(1)}
                        className="px-5 py-2.5 rounded-xl border border-neutral-800 text-neutral-400 hover:text-white transition-all text-sm cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveStep(3)}
                        className="px-6 py-3 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-all flex items-center gap-2 text-sm cursor-pointer"
                      >
                        <span>Next: Additional Notes</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Additional Notes & Complete */}
                {activeStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-neutral-800 pb-3">
                      <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <HelpCircle className="w-5 h-5 text-amber-400" />
                        <span>Step 3: Anything Else To Share?</span>
                      </h2>
                      <p className="text-xs text-neutral-400 mt-1">Share any specific goals, target audiences, or instructions for your campaign.</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-200 mb-2">
                        Anything else you want to share? (Optional)
                      </label>
                      <textarea
                        name="additional_notes"
                        rows={5}
                        value={formData.additional_notes}
                        onChange={handleChange}
                        placeholder="Tell us about your team, current bottlenecks, or marketing expectations..."
                        className="w-full p-4 rounded-xl bg-neutral-950/90 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition-all text-sm resize-none"
                      />
                    </div>

                    {/* Final Review Summary Box */}
                    <div className="p-4 rounded-xl bg-neutral-950/50 border border-neutral-800 space-y-2 text-xs text-neutral-300">
                      <div className="font-semibold text-amber-400 uppercase tracking-wider">Quick Review</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div><span className="text-neutral-500">Name:</span> {formData.full_name || '(Not filled)'}</div>
                        <div><span className="text-neutral-500">Email:</span> {formData.email || '(Not filled)'}</div>
                        <div><span className="text-neutral-500">Channel:</span> <span className="capitalize text-amber-300">{formData.preferred_communication}</span></div>
                        <div><span className="text-neutral-500">Sales Benchmark:</span> <span className="text-amber-300">{formData.avg_monthly_sales}</span></div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="px-5 py-2.5 rounded-xl border border-neutral-800 text-neutral-400 hover:text-white transition-all text-sm cursor-pointer"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-black font-bold flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-all cursor-pointer disabled:opacity-50 text-base uppercase tracking-wider"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Submitting Intake...</span>
                          </>
                        ) : (
                          <>
                            <span>Complete Onboarding</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}

                <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 pt-2 border-t border-neutral-800/60">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Securely submitted & stored in Supabase</span>
                </div>
              </form>
            </motion.div>
          ) : (
            <ThankYouCard
              key="thank-you-card"
              data={formData}
              onReset={() => {
                setIsSubmitted(false);
                setActiveStep(1);
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
        </AnimatePresence>
      </div>
    </section>
  );
};
