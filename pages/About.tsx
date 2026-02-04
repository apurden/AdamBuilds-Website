import React from 'react';
import { Camera, Code, Heart, Mail, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-brand-accent shadow-[0_0_30px_rgba(168,85,247,0.3)] shrink-0">
                <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=800&h=800&q=80" 
                    alt="Adam Profile" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta">Adam.</span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                    I started this channel to document my journey into Vibe Coding.
                </p>
            </div>
        </div>

        {/* Content Blocks */}
        <div className="space-y-16">
            <div className="bg-card-gradient border border-white/5 p-8 rounded-2xl">
                <p className="text-slate-300 text-lg leading-8">
                    I'm using AI tools like <strong>Claude</strong>, <strong>Google Antigravity</strong>, and <strong>n8n workflows</strong> to build real software without writing a single line of code.
                </p>
                <p className="text-slate-300 text-lg leading-8 mt-4">
                    I'm here to share what I am learning and show you exactly how I'm building, and hope to inspire you to do the same (mistakes included).
                </p>
            </div>

            <div className="bg-card-gradient border border-white/5 p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                    <Heart className="text-brand-cta" size={28} />
                    <h2 className="text-2xl font-bold">Join the Exploration</h2>
                </div>
                <div className="space-y-4">
                    <a href="https://www.adambuilds.io" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-brand-cta transition-colors">
                        <Globe size={20} />
                        <span>Get our newsletter: www.adambuilds.io</span>
                    </a>
                    <a href="mailto:adam@adambuilds.io" className="flex items-center gap-3 text-slate-300 hover:text-brand-cta transition-colors">
                        <Mail size={20} />
                        <span>Contact: adam@adambuilds.io</span>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;