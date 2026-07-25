import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Calendar, MessageSquare, Rocket } from 'lucide-react';
import type { OnboardingData } from '../../lib/supabase';

interface ThankYouCardProps {
  data: OnboardingData;
  onReset?: () => void;
}

export const ThankYouCard: React.FC<ThankYouCardProps> = ({ data, onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#121216]/90 border border-amber-500/30 backdrop-blur-2xl shadow-[0_20px_80px_rgba(212,175,55,0.08)] text-center relative overflow-hidden"
    >
      {/* Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Success Badge */}
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500/20 via-yellow-500/20 to-amber-600/10 border border-amber-400/50 mb-6 text-amber-400 shadow-xl shadow-amber-500/10 relative">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Onboarding Intake Complete</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight mb-3">
        Thank You, <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">{data.full_name || 'Valued Client'}</span>!
      </h2>

      <p className="text-base sm:text-lg text-neutral-300 mb-8 max-w-lg mx-auto leading-relaxed">
        Your onboarding profile has been registered in our system. Our growth team is preparing your custom marketing benchmark report.
      </p>

      {/* Profile Summary Box */}
      <div className="mb-8 p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 text-left space-y-3 text-sm">
        <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 border-b border-neutral-800 pb-2 flex justify-between items-center">
          <span>Submission Summary</span>
          <span className="text-neutral-500 font-normal">Encrypted</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-300">
          <div><span className="text-neutral-500">Email:</span> {data.email}</div>
          <div><span className="text-neutral-500">Phone:</span> {data.phone}</div>
          <div><span className="text-neutral-500">Preferred Channel:</span> <span className="capitalize font-semibold text-amber-300">{data.preferred_communication}</span></div>
          <div><span className="text-neutral-500">Sales Benchmark:</span> <span className="font-semibold text-amber-300">{data.avg_monthly_sales}</span></div>
        </div>
        <div>
          <span className="text-neutral-500">Address:</span> {data.business_address}
        </div>
      </div>

      {/* Roadmap Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
        <div className="p-4 rounded-xl bg-neutral-950/60 border border-amber-500/20 flex flex-col gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Step 1</div>
          <div className="text-sm font-medium text-white">Channel Invite</div>
          <div className="text-xs text-neutral-400">Invite sent to {data.preferred_communication}</div>
        </div>

        <div className="p-4 rounded-xl bg-neutral-950/60 border border-amber-500/20 flex flex-col gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Calendar className="w-4 h-4" />
          </div>
          <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Step 2</div>
          <div className="text-sm font-medium text-white">Kickoff Booking</div>
          <div className="text-xs text-neutral-400">Calendar link dispatched</div>
        </div>

        <div className="p-4 rounded-xl bg-neutral-950/60 border border-amber-500/20 flex flex-col gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Rocket className="w-4 h-4" />
          </div>
          <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Step 3</div>
          <div className="text-sm font-medium text-white">Campaign Execution</div>
          <div className="text-xs text-neutral-400">Marketing engines go live</div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 mb-8">
        <ShieldCheck className="w-4 h-4 text-amber-400" />
        <span>Stored securely in Supabase backend</span>
      </div>

      {onReset && (
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-amber-300 transition-colors border-b border-neutral-700 hover:border-amber-400 pb-0.5"
        >
          Submit another onboarding response
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      )}
    </motion.div>
  );
};
