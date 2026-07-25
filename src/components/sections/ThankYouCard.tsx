import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThankYouCardProps {
  customerName: string;
  onReset?: () => void;
}

export const ThankYouCard: React.FC<ThankYouCardProps> = ({ customerName, onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-xl shadow-2xl text-center relative overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6 text-emerald-400">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
        Thank You, {customerName || 'Partner'}!
      </h2>

      <p className="text-lg text-neutral-300 mb-8 max-w-md mx-auto leading-relaxed">
        Your onboarding details have been successfully recorded. Our team is now setting up your tailored marketing & AI roadmap.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
        <div className="p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50">
          <div className="text-xs text-neutral-400 mb-1">Step 1</div>
          <div className="text-sm font-medium text-white">Details Verified</div>
        </div>
        <div className="p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50">
          <div className="text-xs text-neutral-400 mb-1">Step 2</div>
          <div className="text-sm font-medium text-white">Strategy Prep</div>
        </div>
        <div className="p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50">
          <div className="text-xs text-neutral-400 mb-1">Step 3</div>
          <div className="text-sm font-medium text-white">Kickoff Call</div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 mb-8">
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        <span>Your data is securely stored in Supabase</span>
      </div>

      {onReset && (
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors border-b border-neutral-700 hover:border-white pb-0.5"
        >
          Submit another response
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      )}
    </motion.div>
  );
};
