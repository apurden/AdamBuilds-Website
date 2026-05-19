import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Upload,
  Brain,
  ShieldCheck,
  LineChart,
  MessagesSquare,
  Lock,
  ArrowRight,
} from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';
import CoachOptInForm from '../components/CoachOptInForm';

const features = [
  {
    icon: Upload,
    title: 'Upload any bank CSV',
    body: 'Copilot Money, Chase, BofA, Capital One, Mint, Monarch, YNAB — it auto-detects the format.',
  },
  {
    icon: Brain,
    title: 'Smart re-categorization',
    body: 'Fixes the "Other / Uncategorized" mess by reading merchant names, so your numbers are actually right.',
  },
  {
    icon: ShieldCheck,
    title: 'Knows what NOT to cut',
    body: 'Separates real subscriptions from fixed obligations like mortgage, tuition and insurance.',
  },
  {
    icon: LineChart,
    title: 'A real dashboard',
    body: 'Cash flow, top categories, merchants, money-leak watch — re-openable, drop in next month’s CSV anytime.',
  },
  {
    icon: MessagesSquare,
    title: 'Built-in AI coach',
    body: 'Ask "why was March high?" or "where are my leaks?" and get specific, numbers-backed answers.',
  },
  {
    icon: Lock,
    title: 'Your data stays local',
    body: 'It runs as a live artifact in your browser. No accounts, no uploads, nothing leaves your machine.',
  },
];

const steps = [
  {
    n: '01',
    title: 'Drop your email',
    body: 'Enter your email below and confirm the subscription email Kit sends you.',
  },
  {
    n: '02',
    title: 'Get the prompt',
    body: 'The confirmation email links you straight to the full prompt + a one-click copy button.',
  },
  {
    n: '03',
    title: 'Paste into Claude Cowork',
    body: 'Paste it, attach your transactions CSV, and Claude builds your personal money dashboard.',
  },
];

const Coach: React.FC = () => {
  return (
    <div className="min-h-screen pt-4 px-6 pb-24">
      <SEO
        title="Free AI Money Coach Prompt"
        description="Get the exact prompt I used to turn Claude into a live AI money coach. Paste it into Claude Cowork, attach your bank CSV, and get a personal finance dashboard with a built-in AI coach. Free."
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cta/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-premium text-sm font-bold text-brand-cta uppercase tracking-widest">
              <Sparkles size={16} /> Free Prompt
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 pb-2">
              Turn Claude Into Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
                Personal Money Coach
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={250}>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              You saw the video. This is the exact prompt. Drop your email and
              I'll send it straight to your inbox — paste it into Claude Cowork,
              attach your bank export, and get a live finance dashboard with an
              AI coach built in. No spreadsheet. No subscription. Free.
            </p>
          </FadeIn>

          <FadeIn delay={350}>
            <div id="get" className="max-w-md mx-auto mb-4">
              <CoachOptInForm />
            </div>
            <p className="text-xs text-slate-500">
              One email with the prompt. Unsubscribe anytime. Your bank data
              never leaves your browser.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What you get */}
      <section className="max-w-6xl mx-auto py-16">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            What you'll <span className="text-gradient">actually get</span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
            Not a budgeting app. A live artifact you own — built from your real
            transactions in a few minutes.
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
                <h3 className="text-xl font-bold text-brand-cta mb-3">
                  {s.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto py-16">
        <FadeIn>
          <div className="glass-premium rounded-3xl p-10 md:p-16 relative overflow-hidden text-center group transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.2)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -z-10 animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-cta/5 rounded-full blur-[60px] -z-10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                <span className="text-white">Ready to </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
                  see your money clearly?
                </span>
              </h2>
              <p className="text-slate-400 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                Enter your email and the prompt is in your inbox in under a
                minute.
              </p>
              <div className="max-w-md mx-auto mb-6">
                <CoachOptInForm />
              </div>
              <p className="text-sm text-slate-500">
                Already subscribed and confirmed?{' '}
                <Link
                  to="/coach/prompt"
                  className="inline-flex items-center gap-1 text-brand-cta hover:text-white transition-colors font-bold"
                >
                  Go straight to the prompt{' '}
                  <ArrowRight size={14} />
                </Link>
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default Coach;
