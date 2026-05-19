import React, { useId, useState } from 'react';
import { MailCheck } from 'lucide-react';

const KIT_COACH_FORM_ID = '9461468';
const KIT_COACH_FORM_UID = '449abbcb4f';

const CoachOptInForm: React.FC = () => {
  const iframeName = `kit-coach-subscribe-target-${useId().replace(/:/g, '')}`;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setStatus('loading');

    const form = e.currentTarget;
    window.setTimeout(() => {
      setStatus('success');
      form.reset();
    }, 1200);
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
    <>
      <iframe
        title="Kit coach subscription"
        name={iframeName}
        className="hidden"
      />
      <form
        action={`https://app.kit.com/forms/${KIT_COACH_FORM_ID}/subscriptions`}
        method="post"
        target={iframeName}
        data-sv-form={KIT_COACH_FORM_ID}
        data-uid={KIT_COACH_FORM_UID}
        data-format="inline"
        data-version="5"
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
    </>
  );
};

export default CoachOptInForm;
