import React from 'react';
import { ArrowRight, PlayCircle, Code, Zap, Bot } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 px-6">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cta/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-brand-cta text-xs font-bold tracking-wider uppercase">Vibe Coding is Here</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 pb-2">
            Build Real Software.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta">No Code Required.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
             Exploring the intersection of AI tools, workflow automation, and vibe coding. A place to explore tools, news, and learn how to build without writing a single line of code.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NavLink 
              to="/tools" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
            >
              Explore Tools <ArrowRight size={18} />
            </NavLink>
            <a 
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
            >
              Watch Latest <PlayCircle size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Content / "Vibe" Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo of Me Placeholder */}
            <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="aspect-[4/3] bg-slate-800 relative">
                 <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=800&h=800&q=80" 
                    alt="Adam Builds Profile" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                 />
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold mb-6">What is <span className="text-brand-cta">Vibe Coding?</span></h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                It's not about being a software engineer. It's about having an idea and using AI to make it real. I'm a layperson using tools like Cursor, Claude, and n8n to build practical software and automations. Here, I document that journey and show you how to:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-brand-accent/10 text-brand-accent">
                    <Code size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Leverage AI Tools</h3>
                    <p className="text-slate-500 text-sm">Use Claude, ChatGPT, and Cursor to generate code instantly.</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-brand-cta/10 text-brand-cta">
                    <Bot size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Automate Workflows</h3>
                    <p className="text-slate-500 text-sm">Connect apps and data with n8n and Zapier.</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Build for Real Life</h3>
                    <p className="text-slate-500 text-sm">Practical solutions for personal and professional tasks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-card-gradient border border-white/5 rounded-3xl p-10 md:p-16 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -z-10"></div>
           
           <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
           <p className="text-slate-400 mb-8 max-w-lg mx-auto">Get the latest AI tools, workflow automations, and practical vibe coding tips delivered straight to your inbox.</p>
           
           <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
             <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-5 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent/50 transition-colors"
             />
             <button 
              type="submit"
              className="px-6 py-3 bg-brand-cta text-black font-bold rounded-lg hover:bg-brand-ctaHover transition-colors"
             >
               Join Free
             </button>
           </form>
        </div>
      </section>
    </div>
  );
};

export default Home;