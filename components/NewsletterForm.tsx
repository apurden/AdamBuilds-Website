import React, { useId, useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import useMagnetic from '../hooks/useMagnetic';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const KIT_NEWSLETTER_FORM_ID = '9057261';
const KIT_NEWSLETTER_FORM_UID = '5891806fc7';

const NewsletterForm: React.FC = () => {
  const iframeName = `kit-newsletter-subscribe-target-${useId().replace(/:/g, '')}`;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const buttonRef = useMagnetic<HTMLButtonElement>(0.2);

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
         <h3 className="text-2xl font-bold text-brand-cta mb-2">Welcome to the Club!</h3>
         <p className="text-slate-300">
           Check your email to confirm your subscription. If it does not show up,
           check spam, promotions, and updates.
         </p>
         <p className="text-xs text-slate-500 mt-3">
           Look for an email from adam@adambuilds.io.
         </p>
         <button 
           onClick={() => setStatus('idle')}
           className="mt-4 text-sm text-slate-500 hover:text-white underline"
         >
           Add another email
         </button>
      </div>
    );
  }

  return (
    <>
      <iframe
        title="Kit newsletter subscription"
        name={iframeName}
        className="hidden"
      />
      <form
        action={`https://app.kit.com/forms/${KIT_NEWSLETTER_FORM_ID}/subscriptions`}
        method="post"
        target={iframeName}
        data-sv-form={KIT_NEWSLETTER_FORM_ID}
        data-uid={KIT_NEWSLETTER_FORM_UID}
        data-format="inline"
        data-version="5"
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-20"
      >
        <input
          type="email"
          name="email_address"
          required
          placeholder="Enter your email"
          className="flex-1 min-w-0 px-6 py-4 rounded-full bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent/50 transition-all shadow-inner backdrop-blur-sm"
        />

        <button
          ref={buttonRef}
          type="submit"
          disabled={status === 'loading'}
          className="btn-magnetic group relative px-8 py-4 bg-brand-cta text-brand-dark font-bold rounded-full overflow-hidden min-w-[140px]"
        >
          <span className="bg-layer bg-brand-cta-hover" />
          <span className="relative z-10">
            {status === 'loading' ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin"></span>
                Sending...
              </span>
            ) : (
              'Join Free'
            )}
          </span>
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

export default NewsletterForm;
