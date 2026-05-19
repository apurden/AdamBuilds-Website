import React, { useState } from 'react';
import { MailCheck } from 'lucide-react';

const CoachOptInForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const email = (new FormData(form).get('email_address') as string) || '';

    try {
      const response = await fetch('/api/coach-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error(`Subscribe failed: ${response.status}`);
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
          Confirm your email and you'll get the link to the AI Money Coach
          prompt. If it does not show up, check spam, promotions, and updates.
        </p>
        <p className="text-xs text-slate-500 mt-3">
          Look for an email from adam@adambuilds.io with the subject
          "Confirm to unlock your AI Money Coach prompt."
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
      className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto relative z-20"
    >
      <input
        type="email"
        name="email_address"
        required
        placeholder="Enter your email"
        className="flex-1 min-w-0 px-6 py-4 rounded-full bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent/50 transition-all shadow-inner backdrop-blur-sm"
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className="shrink-0 px-8 py-4 bg-brand-cta hover:bg-brand-cta-hover text-brand-dark font-bold rounded-full transition-colors whitespace-nowrap disabled:opacity-70"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin"></span>
            Sending...
          </span>
        ) : (
          'Send Me The Prompt'
        )}
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
