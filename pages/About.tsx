import React from 'react';
import NewsletterForm from '../components/NewsletterForm';
import FadeIn from '../components/FadeIn';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <FadeIn className="flex flex-col md:flex-row items-center gap-16 mb-32">
            <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 relative group">
                <div className="absolute inset-0 bg-brand-accent/20 rounded-full blur-3xl group-hover:bg-brand-accent/30 transition-all duration-700" />
                <img 
                    src="https://github.com/apurden/AdamBuilds-Website/releases/download/v1.0-assets/adam.png" 
                    alt="Adam Profile" 
                    className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="text-center md:text-left">
                <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
                    Hi, I'm <span className="text-gradient">Adam.</span>
                </h1>
                <p className="text-2xl text-slate-300 leading-relaxed max-w-xl">
                    I'm on a journey of learning AI tools to build real software without writing a single line of code.
                </p>
            </div>
        </FadeIn>

        {/* Content Blocks */}
        <div className="space-y-20">
            <FadeIn delay={200}>
              <div className="glass-card p-12 md:p-16 rounded-4xl">
                  <p className="text-slate-300 text-xl md:text-2xl leading-relaxed">
                      I'm using AI tools to build real software without writing a single line of code.
                  </p>
                  <p className="text-slate-300 text-xl md:text-2xl leading-relaxed mt-8">
                      I'm here to share what I am learning and show you exactly how I'm building, and hope to inspire you to do the same (mistakes included).
                  </p>
              </div>
            </FadeIn>

            {/* Subscribe Section */}
            <FadeIn delay={400}>
              <div className="glass-card rounded-4xl p-12 md:p-24 relative overflow-hidden text-center">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -z-10"></div>
                  
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">Join the Revolution</h2>
                  <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Get the latest AI tools, workflow automations, and practical vibe coding tips delivered straight to your inbox.
                  </p>
                  
                  <NewsletterForm />
              </div>
            </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default About;
