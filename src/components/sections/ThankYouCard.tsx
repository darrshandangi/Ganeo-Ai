import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import type { OnboardingData } from '../../lib/supabase';

interface ThankYouCardProps {
  data: OnboardingData;
  onReset?: () => void;
}

export const ThankYouCard: React.FC<ThankYouCardProps> = ({ data, onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-[640px] mx-auto p-6 sm:p-10 rounded-xl bg-[#131313]/90 border border-white/5 backdrop-blur-md shadow-2xl text-center relative overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFCC00]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Success Badge */}
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/30 mb-6 text-[#FFCC00] shadow-xl shadow-[#FFCC00]/10">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/30 text-[#FFCC00] text-xs font-semibold uppercase tracking-widest mb-4">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Ganeo AI Engine Initialized</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
        Thank You, <span className="text-[#FFCC00]">{data.full_name || 'Valued Client'}</span>!
      </h2>

      <p className="text-base text-neutral-300 mb-6 max-w-md mx-auto leading-relaxed">
        Your onboarding details have been verified and encrypted. Our engineering team is initializing your AI automation and 3D web platform.
      </p>

      {/* Submitted Details Box */}
      <div className="mb-6 p-5 rounded-lg bg-white/5 border border-white/10 text-left space-y-2 text-sm">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#FFCC00] border-b border-white/10 pb-2 flex justify-between">
          <span>Submitted Workspace Details</span>
          <span className="text-neutral-500 font-normal">Encrypted</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-300 pt-1">
          <div><span className="text-neutral-500">Email:</span> {data.email}</div>
          <div><span className="text-neutral-500">Phone:</span> {data.phone}</div>
          <div><span className="text-neutral-500">Communication:</span> <span className="font-semibold text-white">{data.preferred_communication}</span></div>
          <div><span className="text-neutral-500">Monthly Sales:</span> <span className="font-semibold text-white">{data.avg_monthly_sales}</span></div>
        </div>
        <div className="text-neutral-300">
          <span className="text-neutral-500">Address:</span> {data.business_address}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 mb-6 uppercase tracking-tighter">
        <ShieldCheck className="w-4 h-4 text-[#FFCC00]" />
        <span>Enterprise-grade 256-bit AES encryption active</span>
      </div>

      {onReset && (
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-[#FFCC00] transition-colors border-b border-neutral-700 hover:border-[#FFCC00] pb-0.5"
        >
          Submit another response
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      )}
    </motion.div>
  );
};
