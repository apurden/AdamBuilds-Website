import React, { useState } from 'react';
import { Copy, Check, ExternalLink, FileSpreadsheet, Wand2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';
import { COACH_PROMPT } from '../data/coachPrompt';

const steps = [
  {
    icon: ExternalLink,
    title: 'Open Claude in Cowork mode',
    body: (
      <>
        Go to{' '}
        <a
          href="https://claude.ai/cowork"
          target="_blank"
          rel="noreferrer"
          className="text-brand-cta hover:text-white underline"
        >
          claude.ai/cowork
        </a>{' '}
        and start a new Cowork session. Cowork is what lets the dashboard talk
        back to you with the built-in AI coach — a normal chat works too, but
        you'll lose the in-artifact coaching panel.
      </>
    ),
  },
  {
    icon: FileSpreadsheet,
    title: 'Export your transactions as CSV',
    body: (
      <>
        From your bank or money app (Copilot Money, Chase, Mint, Monarch, YNAB,
        etc.) export your transactions as a <strong>CSV</strong>. More history =
        better insights. You'll attach this file to the chat.
      </>
    ),
  },
  {
    icon: Copy,
    title: 'Copy the prompt below',
    body: (
      <>
        Hit the <strong>Copy prompt</strong> button, paste it into Cowork, and
        attach your CSV in the same message.
      </>
    ),
  },
  {
    icon: Wand2,
    title: 'Send it',
    body: (
      <>
        Claude inspects your file, builds a self-contained dashboard artifact,
        and reports what it found. Re-open the artifact and drop in a fresh CSV
        next month — no need to start over.
      </>
    ),
  },
];

const CoachPrompt: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(COACH_PROMPT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for browsers/contexts without clipboard API
      const ta = document.createElement('textarea');
      ta.value = COACH_PROMPT;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen pt-4 px-6 pb-24">
      <SEO
        title="Your AI Money Coach Prompt"
        description="The exact prompt to paste into Claude Cowork to build your personal AI money coach dashboard from a bank CSV."
      />

      <section className="max-w-3xl mx-auto pt-20 pb-10 text-center">
        <FadeIn delay={100}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 pb-2">
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">AI Money Coach</span> prompt
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Four steps. Two minutes. Then you've got a live finance dashboard
            built from your own numbers.
          </p>
        </FadeIn>
      </section>

      {/* Steps */}
      <section className="max-w-3xl mx-auto pb-12">
        <div className="grid gap-4">
          {steps.map((s, i) => (
            <FadeIn key={s.title} delay={i * 100}>
              <div className="glass-premium rounded-2xl p-6 flex items-start gap-5">
                <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent shrink-0">
                  <s.icon size={22} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">
                    <span className="text-slate-500 mr-2">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {s.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{s.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* The prompt */}
      <section className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="glass-premium rounded-3xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">
                Personal Finance Coach — prompt
              </span>
              <button
                onClick={copyPrompt}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all ${
                  copied
                    ? 'bg-brand-accent/20 text-brand-accent'
                    : 'bg-brand-cta text-brand-dark hover:bg-brand-cta-hover'
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
            <pre className="max-h-[60vh] overflow-auto p-6 text-sm text-slate-300 whitespace-pre-wrap break-words leading-relaxed bg-black/30">
              {COACH_PROMPT}
            </pre>
            <div className="px-6 py-4 border-t border-white/10 text-center">
              <button
                onClick={copyPrompt}
                className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${
                  copied
                    ? 'bg-brand-accent/20 text-brand-accent'
                    : 'bg-brand-cta text-brand-dark hover:bg-brand-cta-hover'
                }`}
              >
                {copied ? (
                  <>
                    <Check size={18} /> Copied to clipboard
                  </>
                ) : (
                  <>
                    <Copy size={18} /> Copy the full prompt
                  </>
                )}
              </button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="text-center text-sm text-slate-500 mt-8">
            Tip: paste the prompt and attach your CSV in the{' '}
            <em>same</em> message so Claude can inspect the file before it
            builds.
          </p>
        </FadeIn>
      </section>
    </div>
  );
};

export default CoachPrompt;
