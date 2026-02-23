import React from 'react';
import NewsletterForm from '../components/NewsletterForm';
import FadeIn from '../components/FadeIn';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <FadeIn className="flex flex-col md:flex-row items-center gap-10 mb-20">
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 flex items-center justify-center">
                {/* FIXED: Using Release Asset URL */}
                <img 
                    src="https://github.com/apurden/AdamBuilds-Website/releases/download/v1.0-assets/adam.png" 
                    alt="Adam Profile" 
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta">Adam.</span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                    I'm on a journey of learning AI tools to build real software without writing a single line of code. .
                </p>
            </div>
        </FadeIn>

        {/* Content Blocks */}
        <div className="space-y-16">
            <FadeIn delay={200}>
              <div className="bg-card-gradient border border-white/5 p-8 rounded-2xl">
                  <p className="text-slate-300 text-lg leading-8">
                      I'm using AI tools to build real software without writing a single line of code.
                  </p>
                  <p className="text-slate-300 text-lg leading-8 mt-4">
                      I'm here to share what I am learning and show you exactly how I'm building, and hope to inspire you to do the same (mistakes included).
                  </p>
              </div>
            </FadeIn>

            {/* Subscribe Section */}
            <FadeIn delay={400}>
              <div className="bg-card-gradient border border-white/5 rounded-3xl p-10 md:p-16 relative overflow-hidden text-center">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -z-10"></div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe Today!</h2>
                  <p className="text-slate-400 mb-8 max-w-lg mx-auto">Get the latest AI tools, workflow automations, and practical vibe coding tips delivered straight to your inbox.</p>
                  
                  <NewsletterForm />
              </div>
            </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default About;