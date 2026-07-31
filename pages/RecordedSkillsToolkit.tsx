import React, { useState } from 'react';
import {
  Check,
  ChevronDown,
  CircleCheckBig,
  Copy,
  ExternalLink,
  LockKeyhole,
  MessageSquareText,
  MousePointer2,
  Play,
  Sparkles,
  TestTube2,
} from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';
import {
  RECORDED_SKILL_TEMPLATES,
  RecordedSkillTemplate,
} from '../data/recordedSkillPrompts';

const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
};

const SkillCard: React.FC<{
  template: RecordedSkillTemplate;
  defaultOpen?: boolean;
}> = ({ template, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [copied, setCopied] = useState<'prompt' | 'test' | null>(null);

  const handleCopy = async (kind: 'prompt' | 'test', text: string) => {
    await copyText(text);
    setCopied(kind);
    window.setTimeout(() => setCopied(null), 2200);
  };

  return (
    <article
      id={template.id}
      className="glass-premium rounded-3xl overflow-hidden scroll-mt-32"
    >
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="w-full p-6 md:p-8 text-left flex items-start gap-5 hover:bg-white/[0.025] transition-colors"
        aria-expanded={isOpen}
        aria-controls={`${template.id}-content`}
      >
        <span className="text-4xl md:text-5xl font-black text-white/10 leading-none shrink-0">
          {template.number}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block text-brand-cta text-xs font-black tracking-widest uppercase mb-2">
            {template.eyebrow}
          </span>
          <span className="block text-xl md:text-2xl font-extrabold text-white mb-2">
            {template.name}
          </span>
          <span className="block text-slate-400 leading-relaxed">
            {template.summary}
          </span>
        </span>
        <span className="p-2 rounded-full bg-white/5 text-slate-300 shrink-0">
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </span>
      </button>

      {isOpen && (
        <div
          id={`${template.id}-content`}
          className="border-t border-white/10 p-6 md:p-8 animate-fade-in"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 mb-7">
            <div className="rounded-2xl bg-brand-cta/[0.05] border border-brand-cta/15 p-6">
              <h3 className="font-bold text-brand-cta mb-3 flex items-center gap-2">
                <CircleCheckBig size={19} /> What it produces
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {template.outcome}
              </p>
            </div>
            <div className="rounded-2xl bg-white/[0.025] border border-white/10 p-6">
              <h3 className="font-bold text-white mb-3">Before you paste</h3>
              <ul className="space-y-2">
                {template.setup.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-400">
                    <span className="text-brand-accent font-black">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 overflow-hidden mb-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 bg-white/[0.035] border-b border-white/10">
              <div>
                <span className="block text-xs text-slate-500 font-black uppercase tracking-widest mb-1">
                  Skill builder
                </span>
                <span className="text-sm font-bold text-slate-200">
                  Paste this into a new Claude chat
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('prompt', template.prompt)}
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shrink-0 ${
                  copied === 'prompt'
                    ? 'bg-brand-accent/20 text-brand-accent'
                    : 'bg-brand-cta text-brand-dark hover:bg-brand-ctaHover'
                }`}
              >
                {copied === 'prompt' ? (
                  <>
                    <Check size={16} /> Copied
                  </>
                ) : (
                  <>
                    <Copy size={16} /> Copy skill builder
                  </>
                )}
              </button>
            </div>
            <pre className="max-h-[52vh] overflow-auto p-5 md:p-6 text-sm text-slate-300 whitespace-pre-wrap break-words leading-relaxed bg-black/30">
              {template.prompt}
            </pre>
          </div>

          <div className="rounded-2xl border border-brand-accent/20 bg-brand-accent/[0.04] p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <TestTube2 className="text-brand-accent shrink-0" size={24} />
            <div className="flex-1 min-w-0">
              <span className="text-xs text-brand-accent font-black uppercase tracking-widest">
                Test it with
              </span>
              <p className="text-slate-300 mt-1 leading-relaxed">
                “{template.testPrompt}”
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleCopy('test', template.testPrompt)}
              className="inline-flex items-center justify-center gap-2 text-sm font-bold text-slate-300 hover:text-white rounded-full px-4 py-2 border border-white/10 hover:border-white/20 shrink-0"
            >
              {copied === 'test' ? <Check size={15} /> : <Copy size={15} />}
              {copied === 'test' ? 'Copied' : 'Copy test'}
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

const RecordedSkillsToolkit: React.FC = () => {
  return (
    <div className="min-h-screen pt-4 px-6 pb-24">
      <SEO
        title="Your Claude Skill Toolkit"
        description="Six copy-ready Claude skill builders with setup notes, privacy guardrails, and test prompts."
        image="https://adambuilds.io/record-a-skill-og.png"
      />

      <section className="max-w-4xl mx-auto pt-16 md:pt-20 pb-12 text-center">
        <FadeIn delay={80}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full glass-premium text-sm font-bold text-brand-cta uppercase tracking-widest">
            <Sparkles size={16} /> Your Free Toolkit
          </div>
        </FadeIn>
        <FadeIn delay={140}>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 pb-2">
            Build six useful{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
              Claude Skills
            </span>
          </h1>
        </FadeIn>
        <FadeIn delay={210}>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Pick one workflow, personalize the bracketed fields, copy the skill
            builder, and paste it into Claude. You can build all six, but start
            with the task you already repeat most often.
          </p>
        </FadeIn>
      </section>

      <section className="max-w-5xl mx-auto pb-14">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-premium rounded-3xl p-7">
              <h2 className="font-extrabold text-xl mb-5 flex items-center gap-3">
                <Play size={21} className="text-brand-cta" /> Build from a prompt
              </h2>
              <ol className="space-y-4 text-slate-400">
                <li className="flex gap-3">
                  <span className="text-brand-accent font-black">1.</span>
                  Open a new Claude chat and choose one skill below.
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-accent font-black">2.</span>
                  Replace every [BRACKETED FIELD] with your own safe details.
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-accent font-black">3.</span>
                  Paste the builder and ask Claude to create the skill files.
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-accent font-black">4.</span>
                  In Claude, go to Customize → Skills → + → Create skill to add
                  the finished skill.
                </li>
              </ol>
              <a
                href="https://support.claude.com/en/articles/12512180-use-skills-in-claude"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-brand-cta hover:text-white text-sm font-bold mt-6"
              >
                Claude’s official skill instructions <ExternalLink size={14} />
              </a>
            </div>

            <div className="glass-premium rounded-3xl p-7">
              <h2 className="font-extrabold text-xl mb-5 flex items-center gap-3">
                <MousePointer2 size={21} className="text-brand-cta" /> Build by recording
              </h2>
              <ol className="space-y-4 text-slate-400">
                <li className="flex gap-3">
                  <span className="text-brand-accent font-black">1.</span>
                  In Claude Desktop, open Cowork and choose Record a skill from
                  the + menu if it is available on your plan.
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-accent font-black">2.</span>
                  Close private windows, start recording, and perform the task
                  once with a safe example.
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-accent font-black">3.</span>
                  Say your rules, rejections, exceptions, and definition of done
                  out loud.
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-accent font-black">4.</span>
                  After Claude drafts the skill, use the matching builder below
                  as a checklist for anything the recording missed.
                </li>
              </ol>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="max-w-4xl mx-auto pb-12">
        <FadeIn>
          <div className="rounded-3xl border border-amber-300/20 bg-amber-300/[0.04] p-7 flex flex-col sm:flex-row gap-5">
            <div className="p-3 rounded-2xl bg-amber-300/10 text-amber-300 w-fit h-fit shrink-0">
              <LockKeyhole size={24} />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white mb-2">
                Do the 60-second privacy check
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Never paste passwords, API keys, private links, customer data,
                payment details, or machine-specific paths into a skill. Review
                what Claude creates before enabling it, and keep sending,
                deleting, publishing, and money movement behind explicit human
                approval.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <nav className="max-w-4xl mx-auto pb-8" aria-label="Skill templates">
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-2">
            {RECORDED_SKILL_TEMPLATES.map((template) => (
              <a
                key={template.id}
                href={`#${template.id}`}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.025] hover:border-brand-accent/40 hover:text-white text-slate-400 text-sm font-bold transition-colors"
              >
                {template.number} {template.shortName}
              </a>
            ))}
          </div>
        </FadeIn>
      </nav>

      <section className="max-w-4xl mx-auto space-y-5">
        {RECORDED_SKILL_TEMPLATES.map((template, index) => (
          <FadeIn key={template.id} delay={Math.min(index * 60, 180)}>
            <SkillCard template={template} defaultOpen={index === 0} />
          </FadeIn>
        ))}
      </section>

      <section className="max-w-4xl mx-auto pt-16">
        <FadeIn>
          <div className="glass-premium rounded-3xl p-8 md:p-10 text-center">
            <MessageSquareText
              className="text-brand-accent mx-auto mb-5"
              size={32}
            />
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              The first draft is not the finish line.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Run the test prompt on a fresh example. When the skill hits a new
              failure, add the missing rule. That editability—not perfect
              one-shot automation—is what makes a reusable skill valuable.
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default RecordedSkillsToolkit;
