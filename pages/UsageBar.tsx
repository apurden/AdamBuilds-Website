import React from 'react';
import { Link } from 'react-router-dom';
import { Gauge, Layers, ShieldCheck, Palette, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';
import UsageBarOptInForm from '../components/UsageBarOptInForm';

const features = [
  {
    icon: Gauge,
    title: 'Context, 5h and Week',
    body: 'Three small meters above your chat box. Context is how full this chat is. 5h and Week are how much of your five-hour and weekly limits you have used.',
  },
  {
    icon: Palette,
    title: 'Green to red as it fills',
    body: 'The filled squares start green, then turn yellow, orange and red, so you see a long chat or a heavy week coming before you hit the wall.',
  },
  {
    icon: Layers,
    title: 'In every new chat',
    body: 'Install it once and it shows up in every chat you start. No rebuilding it each time.',
  },
  {
    icon: ShieldCheck,
    title: 'One short file you can read',
    body: 'It only reads the usage numbers Claude already has and draws one line. No network calls, no files touched.',
  },
];

const steps = [
  {
    n: '01',
    title: 'Download and unzip',
    body: 'You get one folder called usage-bar-plugin. Move it somewhere it can stay, like your Documents folder.',
  },
  {
    n: '02',
    title: 'Tell Claude to install it',
    body: 'In the Claude desktop app, Code tab, type one sentence. The download page has it ready to copy.',
  },
  {
    n: '03',
    title: 'See the bar',
    body: 'It appears above the chat box right away, and in every new chat from now on.',
  },
];

const needs = [
  'The Claude desktop app (the Code tab), signed in to a paid plan. I tested it on Pro.',
  'About one minute. There is nothing to compile or configure.',
  'I tested on one Mac and one plan. If the bar does not show up on yours, tell me and I will look.',
];

const UsageBar: React.FC = () => {
  return (
    <div className="min-h-screen pt-4 px-6 pb-24">
      <SEO
        title="Free Usage Bar for Claude"
        description="Get the free plugin from my video. It adds a small bar above the Claude chat box that shows how full your chat is and how much of your five-hour and weekly limits you have used, in green to red."
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cta/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-premium text-sm font-bold text-brand-cta uppercase tracking-widest">
              <Gauge size={16} /> Free Plugin
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 pb-2">
              See Your Claude Limits{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
                Before You Hit Them
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={250}>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              You saw the video. Drop your email and I'll send you the plugin.
              It adds a small bar above your chat box showing how full the chat
              is and how much of your five-hour and weekly limits you have used.
            </p>
          </FadeIn>

          <FadeIn delay={350}>
            <div id="get" className="max-w-2xl mx-auto mb-4">
              <UsageBarOptInForm />
            </div>
            <p className="text-xs text-slate-500">
              One email with the download link. Unsubscribe anytime.
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
            One small folder. Claude installs it for you from one sentence.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* How to use it */}
      <section className="max-w-5xl mx-auto py-16">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">
            How to <span className="text-gradient">use it</span>
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
                <span className="text-white">Ready to see </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
                  your limits?
                </span>
              </h2>
              <p className="text-slate-400 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                Enter your email and confirm it. The download link comes in the
                next email.
              </p>
              <div className="max-w-2xl mx-auto mb-6">
                <UsageBarOptInForm />
              </div>
              <p className="text-sm text-slate-500">
                Already subscribed and confirmed?{' '}
                <Link
                  to="/usage-bar/plugin"
                  className="inline-flex items-center gap-1 text-brand-cta hover:text-white transition-colors font-bold"
                >
                  Go straight to the download <ArrowRight size={14} />
                </Link>
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default UsageBar;
