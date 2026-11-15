import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Users, Gauge, Award, Film, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';
import WorkshopOptInForm from '../components/WorkshopOptInForm';

const features = [
  {
    icon: Hammer,
    title: 'See what Claude is doing',
    body: 'A little worker acts out every step. Reading files at the desk, thinking on the rug, searching the web at the telescope, running commands at the machine, and resting by the stove when it is done.',
  },
  {
    icon: Users,
    title: 'A crew for background jobs',
    body: 'When Claude starts side jobs, helpers run in with a sign that says what each job is. Up to three at once, and they wake the worker when they finish.',
  },
  {
    icon: Gauge,
    title: 'The usage bar',
    body: 'How full your chat is, your 5-hour limit and your week, right above the chat box. Green, yellow, orange, red, so you know when to start fresh.',
  },
  {
    icon: Award,
    title: '31 badges',
    body: 'Earned from what Claude actually does for you. The first ones unlock from your past chats the moment you install it.',
  },
  {
    icon: Film,
    title: 'One-click time-lapse',
    body: 'Turn an hour of Claude work into a 25-second video, with a clock and counters. You get a wide version and a tall one for Shorts.',
  },
  {
    icon: ShieldCheck,
    title: 'Private by design',
    body: 'It reads only the names of the actions and the short job labels, never your conversation. It runs on your computer and changes none of your Claude settings.',
  },
];

const steps = [
  {
    n: '01',
    title: 'Download and unzip',
    body: 'You get one folder called claude-workshop. Leave it in your Downloads folder for now.',
  },
  {
    n: '02',
    title: 'Ask Claude to install it',
    body: 'In the Claude desktop app, open the Code tab and paste one sentence. The download page has it ready to copy.',
  },
  {
    n: '03',
    title: 'Use Claude like normal',
    body: 'The workshop appears along the bottom of your screen and follows your Claude Code chats. The usage bar and badges sit above your chat box.',
  },
];

const needs = [
  'The Claude desktop app, using the Code tab. The workshop follows Claude Code chats, not chats in the browser.',
  'Node 18 or newer, the free tool the workshop runs on. If you don\'t have it, Claude offers to install it for you.',
  'A few minutes for the first install while Claude sets everything up. No coding.',
];

const Workshop: React.FC = () => {
  return (
    <div className="min-h-screen pt-4 px-6 pb-24">
      <SEO
        title="Free Claude Workshop Pack"
        description="Get the free Claude Workshop pack from my video: a tiny 3D workshop that shows what Claude is doing, plus the usage bar and badges. Claude installs it for you."
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cta/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-premium text-sm font-bold text-brand-cta uppercase tracking-widest">
              <Sparkles size={16} /> Free Claude Skill
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 pb-2">
              Now You Can{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
                Watch Claude Work
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={250}>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              You saw the video. Drop your email and I'll send you the Workshop
              pack: the little workshop that acts out what Claude is doing, plus
              the usage bar and badges. Claude installs it for you from one sentence.
            </p>
          </FadeIn>

          <FadeIn delay={350}>
            <div id="get" className="max-w-2xl mx-auto mb-4">
              <WorkshopOptInForm />
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
            One folder. Claude installs it for you from one sentence.
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
                <span className="text-white">Ready to watch </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
                  Claude work?
                </span>
              </h2>
              <p className="text-slate-400 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                Enter your email and confirm it. The download link comes in the
                next email.
              </p>
              <div className="max-w-2xl mx-auto mb-6">
                <WorkshopOptInForm />
              </div>
              <p className="text-sm text-slate-500">
                Already subscribed and confirmed?{' '}
                <Link
                  to="/workshop/pack"
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

export default Workshop;
