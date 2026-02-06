import React, { useEffect } from 'react';
import { ArrowRight, PlayCircle, Code, Zap, Bot } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import NewsletterForm from '../components/NewsletterForm';
import FadeIn from '../components/FadeIn';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo === 'subscribe') {
      const timer = setTimeout(() => {
        const element = document.getElementById('subscribe');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100); 
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-20">
      <section className="relative overflow-hidden py-20 lg:py-32 px-6">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cta/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <FadeIn direction="down">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-brand-cta text-xs font-bold tracking-wider uppercase">Vibe Coding is Here</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 pb-2">
              Build Real Software.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta">No Code Required.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
               Exploring the intersection of AI tools, workflow automation, and vibe coding. A place to explore tools, news, and learn how to build without writing a single line of code.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <NavLink 
                to="/tools" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
              >
                Explore Tools <ArrowRight size={18} />
              </NavLink>
              <a 
                href="https://www.youtube.com/@AdamVincentBuilds"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
              >
                Watch Latest <PlayCircle size={18} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right" className="relative group">
              <div className="aspect-[4/3] relative">
                 <img 
                    src="/adam.png" 
                    alt="Adam Builds Profile" 
                    className="w-full h-full object-contain transition-opacity"
                 />
              </div>
            </FadeIn>

            <div>
              <FadeIn delay={100}>
                <h2 className="text-3xl font-bold mb-6">Let's Build <span className="text-brand-cta">the Future Together</span></h2>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  I'm Adam - On a journey of learning AI tools to build real software without writing a single line of code. Join me as we explore how to:
                </p>
              </FadeIn>
              
              <div className="space-y-6">
                <FadeIn delay={200}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-brand-accent/10 text-brand-accent">
                      <Code size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Leverage AI Tools</h3>
                      <p className="text-slate-500 text-sm">To build applications FAST!</p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={300}>
                   <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-brand-cta/10 text-brand-cta">
                      <Bot size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Automate Workflows</h3>
                      <p className="text-slate-500 text-sm">Connect apps and data with AI workflow automation tools.</p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={400}>
                   <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Build for Real Life</h3>
                      <p className="text-slate-500 text-sm">Practical solutions for personal and professional tasks.</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="subscribe" className="py-20 px-6">
        <FadeIn delay={200} className="max-w-4xl mx-auto">
          <div className="text-center bg-card-gradient border border-white/5 rounded-3xl p-10 md:p-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -z-10"></div>
             
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe Today!</h2>
             <p className="text-slate-400 mb-8 max-w-lg mx-auto">Get the latest AI tools, workflow automations, and practical vibe coding tips delivered straight to your inbox.</p>
             
             <NewsletterForm />
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default Home;