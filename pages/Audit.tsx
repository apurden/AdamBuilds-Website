import React from 'react';
import { Link } from 'react-router-dom';
import {
  ClipboardCheck,
  Target,
  Scale,
  Coins,
  Sprout,
  Plug,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';
import AuditOptInForm from '../components/AuditOptInForm';

const features = [
  {
    icon: ClipboardCheck,
    title: 'The channel audit',
    body: 'Your last 90 days: what is working, where viewers leave, and what to stop doing. Every point is labelled FROM MY DATA or GUESS, so you know which advice comes from your numbers.',
  },
  {
    icon: Target,
    title: 'The next-video pick',
    body: 'Videos breaking out in your niche and searches rising for your channel, narrowed down to one video to make next, with the numbers behind it.',
  },
  {
    icon: Scale,
    title: 'The honest title check',
    body: 'Score your title ideas plus one lazy title, then ask whether the scores are far enough apart to actually choose between them.',
  },
  {
    icon: Coins,
    title: 'Two quick checks',
    body: 'How many credits you have left (asking is free), and the monthly searches for any idea before you spend a week making it.',
  },
  {
    icon: Sprout,
    title: 'A brand-new channel version',
    body: 'No data yet? Three prompts that start from what is working for small channels in your topic instead.',
  },
  {
    icon: Plug,
    title: 'How to connect vidIQ to Claude',
    body: 'The three steps from the video, plus what each prompt cost in credits on my channel.',
  },
];

const steps = [
  {
    n: '01',
    title: 'Drop your email',
    body: 'Enter your email below. Kit sends you one confirmation email.',
  },
  {
    n: '02',
    title: 'Confirm it',
    body: 'Click the button in that email and you go straight to the prompts page.',
  },
  {
    n: '03',
    title: 'Copy and paste',
    body: 'Each prompt has a copy button. Paste them into Claude, in order, with vidIQ connected.',
  },
];

const needs = [
  'The Claude app with vidIQ connected. The prompts page shows the three steps.',
  'A vidIQ account. vidIQ says the connector works on every plan, even Free, which gives you 150 credits a month. On my channel the audit used 90 credits and the next-video pick used 100.',
  'A few months of uploads for the audit. If your channel is brand new, use the new-channel prompts instead.',
];

const Audit: React.FC = () => {
  return (
    <div className="min-h-screen pt-4 px-6 pb-24">
      <SEO
        title="Free vidIQ Audit Prompts"
        description="The exact prompts from my video: connect vidIQ to Claude, audit your YouTube channel, pick your next video and check your titles honestly."
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cta/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-premium text-sm font-bold text-brand-cta uppercase tracking-widest">
              <Sparkles size={16} /> Free Prompts
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 pb-2">
              Let vidIQ and Claude{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
                Audit Your Channel
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={250}>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              You saw the video. Drop your email and I'll send you the exact
              prompts I typed into Claude with vidIQ connected: the channel
              audit, the next-video pick, the honest title check and two quick
              checks. Plus how I'd set it up for a brand-new channel.
            </p>
          </FadeIn>

          <FadeIn delay={350}>
            <div id="get" className="max-w-2xl mx-auto mb-4">
              <AuditOptInForm />
            </div>
            <p className="text-xs text-slate-500">
              One confirmation email, then the prompts. Unsubscribe anytime.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What you get */}
      <section className="max-w-6xl mx-auto py-16">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            What you'll <span className="text-gradient">get</span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
            Five prompts you send in one chat, in order, plus a version for
            channels that are just starting.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 80}>
              <div className="glass-card h-full p-8 hover:bg-white/[0.05] transition-all group hover:-translate-y-2 duration-500">
                <div className="p-4 w-fit bg-brand-accent/10 rounded-2xl text-brand-accent group-hover:scale-110 transition-transform mb-6">
                  <f.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cta transition-colors">
                  {f.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto py-16">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">
            How it <span className="text-gradient">works</span>
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 120}>
              <div className="glass-premium rounded-3xl p-8 h-full relative">
                <span className="text-5xl font-black text-white/10 absolute top-4 right-6">
                  {s.n}
                </span>
                <h3 className="text-xl font-bold text-brand-cta mb-3 pr-12">
                  {s.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* What you need */}
      <section className="max-w-3xl mx-auto py-8">
        <FadeIn>
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-white mb-2">
              What you need
            </h2>
            <ul className="mt-5 space-y-3">
              {needs.map((n) => (
                <li key={n} className="flex gap-3 text-slate-300 leading-relaxed">
                  <span className="text-brand-cta font-black">•</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto py-16">
        <FadeIn>
          <div className="glass-premium rounded-3xl p-10 md:p-16 relative overflow-hidden text-center group transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.2)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -z-10 animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-cta/5 rounded-full blur-[60px] -z-10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                <span className="text-white">Ready to see what your </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
                  channel is really doing?
                </span>
              </h2>
              <p className="text-slate-400 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                Enter your email and confirm it. The button in that email takes
                you to the prompts.
              </p>
              <div className="max-w-2xl mx-auto mb-6">
                <AuditOptInForm />
              </div>
              <p className="text-sm text-slate-500">
                Already subscribed and confirmed?{' '}
                <Link
                  to="/audit/prompts"
                  className="inline-flex items-center gap-1 text-brand-cta hover:text-white transition-colors font-bold"
                >
                  Go straight to the prompts <ArrowRight size={14} />
                </Link>
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <p className="max-w-2xl mx-auto text-center text-xs text-slate-500 leading-relaxed">
        vidIQ gave me a month of their Boost plan to try these tools out.
        They're not paying me for the video or this page.
      </p>
    </div>
  );
};

export default Audit;
