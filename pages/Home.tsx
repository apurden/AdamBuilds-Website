import React, { useEffect, useRef } from 'react';
import { ArrowRight, PlayCircle, Code, Zap, Bot } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NewsletterForm from '../components/NewsletterForm';
import FadeIn from '../components/FadeIn';
import TelemetryTypewriter from '../components/TelemetryTypewriter';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const location = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-title', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      });

      gsap.from('.hero-video', {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: 'power3.out'
      });

      // Stacking Cards Interaction
      const cards = gsap.utils.toArray('.stacking-card') as HTMLElement[];
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(card, {
              scale: 1 - progress * 0.1,
              opacity: 1 - progress * 0.5,
              filter: `blur(${progress * 20}px)`,
              duration: 0.1
            });
          }
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-cta/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 hero-title">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cta opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cta"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Live Feed: Building the Future</span>
          </div>
          
          <h1 className="hero-title text-6xl md:text-8xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 leading-[1.1]">
            Build Real Software.<br />
            <span className="text-gradient">No Code Required.</span>
          </h1>

          <div className="hero-title mb-12">
            <TelemetryTypewriter 
              text="Exploring the intersection of AI tools, workflow automation, and vibe coding."
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed h-12"
            />
          </div>

          <div className="hero-title flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <NavLink 
              to="/tools" 
              className="btn-magnetic group relative px-10 py-5 bg-white text-brand-dark font-bold rounded-full overflow-hidden flex items-center gap-2"
            >
              <span className="bg-layer bg-slate-200" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Tools <ArrowRight size={20} />
              </span>
            </NavLink>
            <a 
              href="https://www.youtube.com/@AdamVincentBuilds"
              target="_blank"
              rel="noreferrer"
              className="btn-magnetic group relative px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full overflow-hidden flex items-center gap-2 backdrop-blur-sm"
            >
              <span className="bg-layer bg-white/10" />
              <span className="relative z-10 flex items-center gap-2">
                Watch Latest <PlayCircle size={20} />
              </span>
            </a>
          </div>

          <div className="hero-video w-full max-w-5xl mx-auto glass-card shadow-2xl">
             <div className="aspect-video relative">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/Tyd24xC26ro?rel=0&modestbranding=1" 
                  title="AdamBuilds Intro Video"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
             </div>
          </div>
        </div>
      </section>

      {/* Stacking Interaction Section */}
      <section className="py-32 px-6 bg-brand-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="glass-card aspect-[4/5] relative group overflow-hidden rounded-4xl">
                 <img 
                    src="https://github.com/apurden/AdamBuilds-Website/releases/download/v1.0-assets/adam.png" 
                    alt="Adam Builds Profile" 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                 <div className="absolute bottom-10 left-10">
                    <p className="text-xs font-mono text-brand-accent uppercase tracking-widest mb-2">Lead Builder</p>
                    <h3 className="text-3xl font-bold">Adam Vincent</h3>
                 </div>
              </div>
            </div>

            <div className="space-y-12">
              <FadeIn direction="right">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Let's Build <span className="text-brand-cta">the Future Together</span>
                </h2>
                <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                  I'm on a journey of learning AI tools to build real software without writing a single line of code. Join me as we explore the new frontier of development.
                </p>
              </FadeIn>
              
              <div className="grid gap-8">
                {[
                  { icon: Code, title: 'Leverage AI Tools', desc: 'To build applications at the speed of thought.', color: 'brand-accent' },
                  { icon: Bot, title: 'Automate Workflows', desc: 'Connect apps and data with intelligent automation.', color: 'brand-cta' },
                  { icon: Zap, title: 'Build for Real Life', desc: 'Practical solutions for the modern world.', color: 'purple-400' }
                ].map((item, i) => (
                  <FadeIn key={i} delay={i * 100} direction="right">
                    <div className="glass-card p-8 flex items-start gap-6 hover:bg-white/[0.05] transition-colors group">
                      <div className={`p-4 rounded-2xl bg-${item.color}/10 text-${item.color} group-hover:scale-110 transition-transform`}>
                        <item.icon size={32} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section id="subscribe" className="py-40 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px]" />
        </div>

        <FadeIn delay={200} className="max-w-5xl mx-auto">
          <div className="glass-card p-12 md:p-24 text-center relative overflow-hidden rounded-4xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -z-10"></div>
             
             <h2 className="text-4xl md:text-6xl font-bold mb-6">Join the Revolution</h2>
             <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
               Get the latest AI tools, workflow automations, and practical vibe coding tips delivered straight to your inbox.
             </p>
             
             <NewsletterForm />
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default Home;
