import React, { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MailCheck } from 'lucide-react';
import useMagnetic from '../hooks/useMagnetic';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ── Kit (kit.com) form for the AI Money Coach lead magnet ──────────────────
// Create a NEW form in Kit dedicated to this offer, set its incentive /
// confirmation email to point at https://adambuilds.io/coach/prompt, then
// paste that form's numeric ID here. It is the number in the form's embed
// URL: app.kit.com/forms/<THIS_NUMBER>/subscriptions
const KIT_COACH_FORM_ID = '9461468';

const CoachOptInForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const buttonRef = useMagnetic<HTMLButtonElement>(0.2);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const email = (new FormData(form).get('email_address') as string) || '';

    const params = new URLSearchParams();
    params.append('email_address', email);
    params.append('form_id', KIT_COACH_FORM_ID);
    params.append('id', KIT_COACH_FORM_ID);

    try {
      await fetch(`https://app.kit.com/forms/${KIT_COACH_FORM_ID}/subscriptions`, {
        method: 'POST',
        body: params,
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      setStatus('success');
      form.reset();
    } catch (error) {
      console.error('Coach opt-in error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 bg-brand-accent/10 border border-brand-accent/20 rounded-3xl animate-fade-in max-w-md mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-2xl bg-brand-cta/15 text-brand-cta">
            <MailCheck size={32} />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-brand-cta mb-2">Check your inbox</h3>
        <p className="text-slate-300">
          Confirm your email and you'll get instant access to the exact AI Money
          Coach prompt — copy, paste into Claude, done.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm text-slate-500 hover:text-white underline"
        >
          Use another email
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-20"
    >
      <input
        type="email"
        name="email_address"
        required
        placeholder="Enter your email"
        className="flex-1 px-6 py-4 rounded-full bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent/50 transition-all shadow-inner backdrop-blur-sm"
      />

      <button
        ref={buttonRef}
        type="submit"
        disabled={status === 'loading'}
        className="btn-magnetic group relative px-8 py-4 bg-brand-cta text-brand-dark font-bold rounded-full overflow-hidden min-w-[180px]"
      >
        <span className="bg-layer bg-brand-cta-hover" />
        <span className="relative z-10">
          {status === 'loading' ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin"></span>
              Sending...
            </span>
          ) : (
            'Send Me The Prompt'
          )}
        </span>
      </button>

      {status === 'error' && (
        <div className="absolute -bottom-14 left-0 right-0 text-center bg-red-500/10 text-red-400 text-sm py-2 px-4 rounded-xl border border-red-500/20">
          Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
};

export default CoachOptInForm;
