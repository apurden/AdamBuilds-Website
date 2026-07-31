import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CirclePlay,
  Eye,
  LockKeyhole,
  Mic2,
  MousePointer2,
  Repeat2,
  Sparkles,
} from 'lucide-react';
import FadeIn from '../components/FadeIn';
import RecordedSkillsOptInForm from '../components/RecordedSkillsOptInForm';
import SEO from '../components/SEO';

const benefits = [
  {
    icon: BrainCircuit,
    title: 'Teach the judgment',
    body: 'The prompts capture why you choose, reject, verify, and stop—not only where you click.',
  },
  {
    icon: Repeat2,
    title: 'Run it again',
    body: 'Turn a repeated explanation into an editable procedure Claude can recognize and reuse.',
  },
  {
    icon: LockKeyhole,
    title: 'Built privacy-first',
    body: 'Each template uses placeholders and approval gates instead of hard-coded personal data or credentials.',
  },
];

const included = [
  'YouTube AI Outlier Scout',
  'Weekly Competitor & Customer Brief',
  'Meeting Follow-Through',
  'Inbox Triage & Reply Drafts',
  'Receipt & Invoice Expense Logger',
  'Long-Form Content Repurposer',
];

const RecordASkill: React.FC = () => {
  return (
    <div className="min-h-screen pt-4 px-6 pb-24">
      <SEO
        title="6 Free Claude Skill Builders"
        description="Get six copy-and-paste prompts that turn repeatable work into reusable Claude skills, including the YouTube AI Outlier Scout from the video."
        image="https://adambuilds.io/record-a-skill-og.png"
      />

      <section className="relative overflow-hidden pt-16 md:pt-20 pb-16">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cta/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeIn delay={80}>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-premium text-sm font-bold text-brand-cta uppercase tracking-widest">
              <Sparkles size={16} /> Free Claude Skill Pack
            </div>
          </FadeIn>

          <FadeIn delay={140}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 pb-2">
              Don’t explain the same job twice.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
                Teach Claude once.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={220}>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Get the exact framework behind the YouTube outlier workflow from
              the video, plus five more useful jobs worth turning into reusable
              Claude skills. Each one includes setup notes, a copy-ready skill
              builder, and a test prompt.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div id="get" className="max-w-xl mx-auto mb-4 scroll-mt-32">
              <RecordedSkillsOptInForm />
            </div>
            <p className="text-xs text-slate-500">
              One confirmation email, then the private toolkit link. Unsubscribe
              anytime.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-14">
        <FadeIn>
          <div className="glass-premium rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-brand-accent/10 blur-[70px]" />
            <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center relative z-10">
              <div>
                <span className="text-brand-cta text-sm font-bold tracking-widest uppercase">
                  From the video
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-5 tracking-tight">
                  A skill is more than a screen recording.
                </h2>
                <p className="text-slate-400 leading-relaxed text-lg">
                  The useful part is the reasoning you say out loud: what a good
                  result looks like, what to reject, what not to guess, how to
                  handle interruptions, and when a person should review the work.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Eye, label: 'Claude watches' },
                  { icon: Mic2, label: 'You explain why' },
                  { icon: MousePointer2, label: 'You do the task' },
                  { icon: BrainCircuit, label: 'It becomes a skill' },
                ].map(({ icon: Icon, label }, index) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5 min-h-32 flex flex-col justify-between"
                  >
                    <span className="text-xs font-black text-white/20">
                      0{index + 1}
                    </span>
                    <div>
                      <Icon className="text-brand-accent mb-3" size={24} />
                      <span className="font-bold text-slate-200">{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="max-w-6xl mx-auto py-16">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            What makes these prompts{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta">
              actually useful
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14 text-lg">
            They give Claude a finish line, not just a list of clicks.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, body }, index) => (
            <FadeIn key={title} delay={index * 90}>
              <div className="glass-card h-full p-8 hover:bg-white/[0.05] transition-all group hover:-translate-y-2 duration-500">
                <div className="p-4 w-fit bg-brand-accent/10 rounded-2xl text-brand-accent group-hover:scale-110 transition-transform mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-400 leading-relaxed">{body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-16">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="glass-premium rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 text-brand-cta mb-6">
                <CirclePlay size={25} />
                <span className="font-bold uppercase tracking-widest text-sm">
                  Inside the pack
                </span>
              </div>
              <h2 className="text-3xl font-extrabold mb-8">
                Six workflows worth teaching Claude
              </h2>
              <div className="space-y-4">
                {included.map((item, index) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center text-xs font-black shrink-0">
                      {index + 1}
                    </span>
                    <span className="font-semibold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-brand-cta/20 bg-brand-cta/[0.04] p-8 md:p-10">
              <div className="flex items-center gap-3 text-brand-cta mb-6">
                <LockKeyhole size={25} />
                <span className="font-bold uppercase tracking-widest text-sm">
                  Before you record
                </span>
              </div>
              <h2 className="text-3xl font-extrabold mb-6">
                Clean your screen first.
              </h2>
              <p className="text-slate-400 leading-relaxed mb-7">
                Close passwords, private messages, customer records, payment
                details, and anything else Claude does not need to learn the job.
                Give it the minimum access required.
              </p>
              <div className="space-y-3">
                {[
                  'Use a safe sample when you can',
                  'Narrate decisions and exceptions',
                  'Keep sending, deleting, and payments behind approval',
                  'Test the finished skill on a fresh example',
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-slate-300">
                    <CheckCircle2
                      size={19}
                      className="text-brand-cta shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="max-w-4xl mx-auto py-16">
        <FadeIn>
          <div className="glass-premium rounded-3xl p-10 md:p-16 relative overflow-hidden text-center transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.2)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -z-10 animate-pulse-slow" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5 tracking-tight">
              Ready to stop repeating yourself?
            </h2>
            <p className="text-slate-400 mb-9 max-w-xl mx-auto text-lg leading-relaxed">
              Enter your email and I’ll send you the private link to all six
              copy-ready Claude skill builders.
            </p>
            <div className="max-w-xl mx-auto mb-6">
              <RecordedSkillsOptInForm />
            </div>
            <p className="text-sm text-slate-500">
              Already confirmed?{' '}
              <Link
                to="/record-a-skill/toolkit"
                className="inline-flex items-center gap-1 text-brand-cta hover:text-white transition-colors font-bold"
              >
                Open the toolkit <ArrowRight size={14} />
              </Link>
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default RecordASkill;
