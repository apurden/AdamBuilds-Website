import React, { useState } from 'react';
import { Copy, Check, Plug, Coins, Sprout, ExternalLink } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';
import { AUDIT_PROMPTS, NEW_CHANNEL_PROMPTS, AuditPrompt } from '../data/auditPrompts';

const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // Fallback for browsers/contexts without the clipboard API
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
};

const PromptCard: React.FC<{ prompt: AuditPrompt; n: number }> = ({ prompt, n }) => {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await copyText(prompt.text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="glass-premium rounded-3xl overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b border-white/10">
        <div>
          <h3 className="text-white font-bold">
            <span className="text-slate-500 mr-2">{String(n).padStart(2, '0')}</span>
            {prompt.title}
          </h3>
          <p className="text-sm text-slate-400 mt-1">{prompt.when}</p>
        </div>
        <button
          type="button"
          onClick={onCopy}
          className={`shrink-0 self-start sm:self-auto flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all ${
            copied
              ? 'bg-brand-accent/20 text-brand-accent'
              : 'bg-brand-cta text-brand-dark hover:bg-brand-ctaHover'
          }`}
        >
          {copied ? (
            <>
              <Check size={16} /> Copied!
            </>
          ) : (
            <>
              <Copy size={16} /> Copy prompt
            </>
          )}
        </button>
      </div>
      <pre className="p-6 text-sm md:text-base text-slate-200 whitespace-pre-wrap break-words leading-relaxed bg-black/30 font-mono">
        {prompt.text}
      </pre>
      {prompt.note && (
        <p className="px-6 py-4 border-t border-white/10 text-sm text-slate-400 leading-relaxed">
          {prompt.note}
        </p>
      )}
    </div>
  );
};

const connectSteps = [
  'In the Claude app, click + → Plugins → Manage plugins.',
  "Search vidIQ, open it, click Connect, and approve it on vidIQ's page.",
  'In a chat, check vidIQ is switched on under + → Plugins, and start your message with "Use vidIQ to…"',
];

const costs = [
  'Free: $0, 150 AI credits a month.',
  'Boost: $16.58 a month billed yearly ($199 a year), or $19 month to month. 2,000 credits a month.',
  'Max: $39 a month billed yearly ($468 a year), or $49 month to month. 6,000 credits a month.',
];

const AuditPrompts: React.FC = () => {
  return (
    <div className="min-h-screen pt-4 px-6 pb-24">
      <SEO
        title="Your vidIQ Audit Prompts"
        description="The prompts from my video to audit your YouTube channel with vidIQ and Claude, pick your next video, and check your titles honestly."
      />

      <section className="max-w-3xl mx-auto pt-20 pb-10 text-center">
        <FadeIn delay={100}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 pb-2">
            Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
              vidIQ audit
            </span>{' '}
            prompts
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Connect vidIQ to Claude once, then send these in order in one chat.
            Each answer builds on the one before.
          </p>
        </FadeIn>
      </section>

      {/* Connect + costs */}
      <section className="max-w-3xl mx-auto pb-12 grid gap-4">
        <FadeIn>
          <div className="glass-card rounded-3xl p-8">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-white mb-4">
              <span className="p-2.5 rounded-xl bg-brand-accent/10 text-brand-accent">
                <Plug size={20} />
              </span>
              Connect vidIQ to Claude (one time)
            </h2>
            <ol className="space-y-3">
              {connectSteps.map((s, i) => (
                <li key={s} className="flex gap-3 text-slate-300 leading-relaxed">
                  <span className="text-brand-cta font-black">{i + 1}.</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Added from Claude's directory, it can read your channel's numbers
              but can't change your videos.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="glass-card rounded-3xl p-8">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-white mb-4">
              <span className="p-2.5 rounded-xl bg-brand-accent/10 text-brand-accent">
                <Coins size={20} />
              </span>
              What it costs in credits
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Most vidIQ lookups through Claude cost 5 credits, and one prompt
              can use several. On my channel the audit used 90 credits, the
              next-video pick 100 and the title check 60. Asking how many
              credits you have left is free.
            </p>
            <ul className="mt-4 space-y-2">
              {costs.map((c) => (
                <li key={c} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-brand-cta font-black">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              US list prices, checked Nov 16, 2026. They can change.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* The prompts */}
      <section className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
            The five <span className="text-gradient">prompts</span>
          </h2>
        </FadeIn>
        <div className="grid gap-6">
          {AUDIT_PROMPTS.map((p, i) => (
            <FadeIn key={p.id} delay={i * 60}>
              <PromptCard prompt={p} n={i + 1} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Brand-new channel */}
      <section className="max-w-3xl mx-auto pt-16">
        <FadeIn>
          <div className="text-center mb-8">
            <div className="inline-flex p-3 rounded-2xl bg-brand-accent/10 text-brand-accent mb-4">
              <Sprout size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
              Brand-new <span className="text-gradient">channel?</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
              The audit needs a few months of your own numbers. Until you have
              them, start from what is working for small channels in your topic.
              Swap in your topic where it says [your topic].
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-6">
          {NEW_CHANNEL_PROMPTS.map((p, i) => (
            <FadeIn key={p.id} delay={i * 60}>
              <PromptCard prompt={p} n={i + 1} />
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <p className="text-center text-sm text-slate-500 mt-6">
            After a few months of uploads, come back and run the audit.
          </p>
        </FadeIn>
      </section>

      {/* vidIQ link + disclosure */}
      <section className="max-w-3xl mx-auto pt-16">
        <FadeIn>
          <div className="glass-premium rounded-3xl p-8 text-center">
            <p className="text-slate-300 leading-relaxed">
              Don't have vidIQ yet?{' '}
              <a
                href="https://vidiq.com/adambuilds"
                target="_blank"
                rel="noreferrer sponsored"
                className="inline-flex items-center gap-1 text-brand-cta hover:text-white underline font-bold"
              >
                Try vidIQ <ExternalLink size={14} />
              </a>{' '}
              (affiliate link: if you sign up through it, it helps support the
              channel).
            </p>
            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
              vidIQ gave me a month of their Boost plan to try these tools out.
              They're not paying me for the video or this page.
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default AuditPrompts;
