import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Clapperboard,
  Layers,
  Volume2,
  FileCode2,
  UserRound,
  ArrowRight,
} from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';
import MotionOptInForm from '../components/MotionOptInForm';

const features = [
  {
    icon: Clapperboard,
    title: 'A real MP4 at the end',
    body: 'Claude writes the animation and renders it to a video file you can drop straight into your editor.',
  },
  {
    icon: Layers,
    title: '8 ready-made animation styles',
    body: 'Big-word title intros, animated charts, how-it-works diagrams, task lists that tick off, 3D card carousels, clip walls and more.',
  },
  {
    icon: Volume2,
    title: '58 free sound effects',
    body: 'Keyboard taps, pops, whooshes and thuds, with a tool that adds them to your video. Licences are included.',
  },
  {
    icon: FileCode2,
    title: 'A working example',
    body: 'A small finished animation to open and learn from, so Claude has a good starting point.',
  },
  {
    icon: UserRound,
    title: 'Titles behind a person',
    body: 'Optional, Mac only: put words between you and the background in your own footage. It has limits, and the skill tells Claude what they are.',
  },
];

const steps = [
  {
    n: '01',
    title: 'Install the skill in your folder',
    body: 'Unzip the download and put the folder inside a project folder, in .claude/skills. The download page shows exactly where.',
  },
  {
    n: '02',
    title: 'Ask Claude in plain English',
    body: 'Open Claude Code in that folder and say what you want, like "make an 8-second animated intro that says Hello".',
  },
  {
    n: '03',
    title: 'Claude builds and renders it',
    body: 'Claude writes the animation, looks at frames to check them, then renders the MP4 and tells you where the file is.',
  },
];

const needs = [
  'Claude Code, on a paid plan. Pro is enough, and you do not need a Team plan.',
  'Node.js and ffmpeg on your computer. Claude checks for them and can install them for you.',
  'A few GB of free disk space while a video renders.',
];

const Motion: React.FC = () => {
  return (
    <div className="min-h-screen pt-4 px-6 pb-24">
      <SEO
        title="Free Motion Graphics Skill for Claude Code"
        description="Get the free skill from my video. Add it to a project folder, ask Claude Code for an animation in plain English, and get a real MP4. Works on the Pro plan, no Claude Motion or Team plan needed."
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cta/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-premium text-sm font-bold text-brand-cta uppercase tracking-widest">
              <Sparkles size={16} /> Free Skill
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 pb-2">
              Make Motion Graphics With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
                Claude Code
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={250}>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              You saw the video. Drop your email and I'll send you the skill.
              Add it to a project folder, ask Claude for an animation, and get a
              real MP4. Works on the Pro plan, no Claude Motion or Team plan
              needed.
            </p>
          </FadeIn>

          <FadeIn delay={350}>
            <div id="get" className="max-w-2xl mx-auto mb-4">
              <MotionOptInForm />
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
            One folder. It teaches Claude Code how to build motion graphics and
            turn them into video.
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

      {/* Prompts mention */}
      <section className="max-w-3xl mx-auto pb-8">
        <FadeIn>
          <p className="text-center text-slate-400 leading-relaxed">
            The download page has{' '}
            <strong className="text-white">12 prompts to try</strong>: title
            behind you, 3D carousel, gallery wall, cartoon mascot, animated
            chart and more. Copy one, paste it into Claude Code, and go.
          </p>
        </FadeIn>
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
            <p className="mt-6 text-sm text-slate-500 leading-relaxed">
              This is a skill for Claude Code. It does not use Claude Motion, and
              Claude Code itself still needs a paid plan.
            </p>
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
                <span className="text-white">Ready to make </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
                  your first animation?
                </span>
              </h2>
              <p className="text-slate-400 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                Enter your email and confirm it. The download link comes in the
                next email.
              </p>
              <div className="max-w-2xl mx-auto mb-6">
                <MotionOptInForm />
              </div>
              <p className="text-sm text-slate-500">
                Already subscribed and confirmed?{' '}
                <Link
                  to="/motion/skill"
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

export default Motion;
