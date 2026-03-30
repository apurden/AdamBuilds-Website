import React, { useEffect } from 'react';
import { ArrowRight, PlayCircle, Code, Zap, Bot } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import CallToAction from '../components/CallToAction';
import useMagnetic from '../hooks/useMagnetic';

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
    <div className="min-h-screen">
      <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-32 px-6">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cta/10 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">

          <FadeIn delay={100}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 pb-2">
              Build Real Software.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">No Code Required.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="w-full max-w-3xl mx-auto mb-16 rounded-3xl overflow-hidden glass-premium shadow-[0_0_100px_rgba(168,85,247,0.1)] border border-white/10 p-1 md:p-2">
              <div className="aspect-video relative rounded-2xl overflow-hidden">
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
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Exploring the intersection of AI tools, workflow automation, and vibe coding. Join me as I learn to build without writing a single line of code.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <NavLink
                to="/tools"
                className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group shadow-xl hover:shadow-white/10"
              >
                Explore Tools <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </NavLink>
              <a
                href="https://www.youtube.com/@AdamVincentBuilds"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-10 py-5 glass-premium text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 glow-on-hover"
              >
                Watch Latest <PlayCircle size={20} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px] -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right" className="relative group">
              <div className="aspect-square relative glass-premium rounded-3xl p-8 group-hover:shadow-[0_0_50px_rgba(45,212,191,0.15)] transition-all duration-700">
                <img
                  src="https://github.com/apurden/AdamBuilds-Website/releases/download/v1.0-assets/adam.png"
                  alt="Adam Builds Profile"
                  className="w-full h-full object-contain drop-shadow-2xl animate-float"
                />
              </div>
            </FadeIn>

            <div>
              <FadeIn delay={100}>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cta to-brand-accent">the Future Together</span></h2>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
                  I'm Adam — on a mission to master AI tools and build professional software through vibe coding. Join me as we explore:
                </p>
              </FadeIn>

              <div className="grid gap-6">
                <FadeIn delay={200} direction="left">
                  <div className="flex items-start gap-5 p-6 glass-premium rounded-2xl glass-card-hover group">
                    <div className="p-4 rounded-xl bg-brand-accent/10 text-brand-accent group-hover:scale-110 transition-transform">
                      <Code size={28} />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-1">Leverage AI Tools</h3>
                      <p className="text-slate-400">Master the next generation of building blocks to ship apps at lightning speed.</p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={300} direction="left">
                  <div className="flex items-start gap-5 p-6 glass-premium rounded-2xl glass-card-hover group">
                    <div className="p-4 rounded-xl bg-brand-cta/10 text-brand-cta group-hover:scale-110 transition-transform">
                      <Bot size={28} />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-1">Automate Workflows</h3>
                      <p className="text-slate-400">Connect the world's most powerful APIs with intelligent, autonomous flows.</p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={400} direction="left">
                  <div className="flex items-start gap-5 p-6 glass-premium rounded-2xl glass-card-hover group">
                    <div className="p-4 rounded-xl bg-brand-purple/20 text-purple-400 group-hover:scale-110 transition-transform">
                      <Zap size={28} />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-1">Build for Real Life</h3>
                      <p className="text-slate-400">Solving actual problems and creating real utility, no filler, just vibe builds.</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Home;