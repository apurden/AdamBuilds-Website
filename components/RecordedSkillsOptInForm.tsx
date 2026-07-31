import React, { useId, useState } from 'react';
import { MailCheck } from 'lucide-react';

const KIT_RECORDED_SKILLS_FORM_ID = '9750951';
const KIT_RECORDED_SKILLS_FORM_UID = '37672f45e6';

const RecordedSkillsOptInForm: React.FC = () => {
  const iframeName = `kit-recorded-skills-target-${useId().replace(/:/g, '')}`;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const isConfigured = Boolean(
    KIT_RECORDED_SKILLS_FORM_ID && KIT_RECORDED_SKILLS_FORM_UID,
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!isConfigured) {
      event.preventDefault();
      return;
    }

    const form = event.currentTarget;
    setStatus('loading');
    window.setTimeout(() => {
      setStatus('success');
      form.reset();
    }, 1200);
  };

  if (status === 'success') {
    return (
      <div
        className="p-8 bg-brand-accent/10 border border-brand-accent/20 rounded-3xl animate-fade-in max-w-md mx-auto text-center"
        role="status"
      >
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-2xl bg-brand-cta/15 text-brand-cta">
            <MailCheck size={32} />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-brand-cta mb-2">
          Check your inbox
        </h3>
        <p className="text-slate-300">
          Confirm your email and I’ll send the private link to all six skill
          builders. Check spam, promotions, or updates if it takes a minute.
        </p>
        <button
          type="button"
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
        title="Kit recorded skills subscription"
        name={iframeName}
        className="hidden"
      />
      <form
        action={
          isConfigured
            ? `https://app.kit.com/forms/${KIT_RECORDED_SKILLS_FORM_ID}/subscriptions`
            : undefined
        }
        method="post"
        target={iframeName}
        data-sv-form={KIT_RECORDED_SKILLS_FORM_ID || undefined}
        data-uid={KIT_RECORDED_SKILLS_FORM_UID || undefined}
        data-format="inline"
        data-version="5"
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto relative z-20"
      >
        <label htmlFor={`${iframeName}-email`} className="sr-only">
          Email address
        </label>
        <input
          id={`${iframeName}-email`}
          type="email"
          name="email_address"
          required
          placeholder="Enter your email"
          className="flex-1 min-w-0 px-6 py-4 rounded-full bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent/50 transition-all shadow-inner backdrop-blur-sm"
        />

        <button
          type="submit"
          disabled={status === 'loading' || !isConfigured}
          title={!isConfigured ? 'Email delivery is being connected' : undefined}
          className="shrink-0 px-8 py-4 bg-brand-cta hover:bg-brand-ctaHover text-brand-dark font-bold rounded-full transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin" />
              Sending...
            </span>
          ) : (
            'Send Me The 6 Skills'
          )}
        </button>
      </form>
      {!isConfigured && (
        <p className="mt-3 text-xs text-amber-300/80 text-center" role="status">
          Email delivery is being connected. Please check back shortly.
        </p>
      )}
    </>
  );
};

export default RecordedSkillsOptInForm;
