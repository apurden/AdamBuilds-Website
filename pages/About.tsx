import React from 'react';
import FadeIn from '../components/FadeIn';
import CallToAction from '../components/CallToAction';

const About: React.FC = () => {
  return (
    <div className="min-h-screen px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <FadeIn className="flex flex-col md:flex-row items-center gap-12 mb-24 pt-4">
          <div className="w-56 h-56 md:w-80 md:h-80 shrink-0 flex items-center justify-center p-4 glass-premium rounded-3xl shadow-2xl relative">
            <div className="absolute inset-0 bg-brand-accent/5 rounded-3xl blur-3xl -z-10 animate-pulse-slow"></div>
            <img
              src="https://github.com/apurden/AdamBuilds-Website/releases/download/v1.0-assets/adam.png"
              alt="Adam Profile"
              className="w-full h-full object-contain animate-float"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">Adam.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-xl">
              I'm building real software without writing a single line of code. Welcome to the era of vibe coding.
            </p>
          </div>
        </FadeIn>

        {/* Content Blocks */}
        <div className="space-y-12 mb-20">
          <FadeIn delay={200}>
            <div className="glass-premium p-10 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cta/5 rounded-full blur-3xl -z-10"></div>
              <p className="text-slate-300 text-xl leading-relaxed mb-6">
                Traditional development is changing. AI tools have reached a point where intent is becoming more important than syntax.
              </p>
              <p className="text-slate-300 text-xl leading-relaxed">
                I'm here to share what I'm learning, show you exactly how I'm building, and hope to inspire you to build your own ideas — mistakes and all.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Subscribe Section */}
        <CallToAction />
      </div>
    </div>
  );
};

export default About;