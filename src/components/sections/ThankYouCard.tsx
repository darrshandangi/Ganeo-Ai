import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThankYouCardProps {
  customerName: string;
  onReset?: () => void;
}

export const ThankYouCard: React.FC<ThankYouCardProps> = ({ customerName, onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-neutral-900/95 border border-amber-500/30 backdrop-blur-2xl shadow-2xl text-center relative overflow-hidden"
    >
      {/* Gold & Amber background ambient glows */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-yellow-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500/20 to-yellow-500/20 border border-amber-400/40 mb-6 text-amber-400 shadow-lg shadow-amber-500/10">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Onboarding Verified</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight mb-3">
        Thank You, <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">{customerName || 'Partner'}</span>!
      </h2>

      <p className="text-base sm:text-lg text-neutral-300 mb-8 max-w-lg mx-auto leading-relaxed">
        Your business intake details have been securely recorded. Our growth strategy team is analyzing your minimum marketing standards and will connect with you shortly.
      </p>

      {/* Progress Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
        <div className="p-4 rounded-xl bg-neutral-950/80 border border-amber-500/20">
          <div className="text-xs text-amber-400 font-semibold mb-1 uppercase tracking-wider">Step 1</div>
          <div className="text-sm font-medium text-white">Details Submitted</div>
        </div>
        <div className="p-4 rounded-xl bg-neutral-950/80 border border-amber-500/20">
          <div className="text-xs text-amber-400 font-semibold mb-1 uppercase tracking-wider">Step 2</div>
          <div className="text-sm font-medium text-white">KPI Benchmarking</div>
        </div>
        <div className="p-4 rounded-xl bg-neutral-950/80 border border-amber-500/20">
          <div className="text-xs text-amber-400 font-semibold mb-1 uppercase tracking-wider">Step 3</div>
          <div className="text-sm font-medium text-white">Strategy Kickoff</div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 mb-8">
        <ShieldCheck className="w-4 h-4 text-amber-400" />
        <span>Encrypted & stored in your Supabase backend database</span>
      </div>

      {onReset && (
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-amber-300 transition-colors border-b border-neutral-700 hover:border-amber-400 pb-0.5"
        >
          Submit another response
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      )}
    </motion.div>
  );
};

