import React from 'react';
import NewsletterForm from './NewsletterForm';
import FadeIn from './FadeIn';

interface CallToActionProps {
  id?: string;
  title?: string;
  description?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  id = "subscribe", 
  title = "Subscribe Today!", 
  description = "Get the latest AI tools, workflow automations, and practical vibe coding tips delivered straight to your inbox." 
}) => {
  return (
    <section id={id} className="py-20 px-6">
      <FadeIn delay={200} className="max-w-4xl mx-auto">
        <div className="glass-premium rounded-3xl p-10 md:p-16 relative overflow-hidden text-center group transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.2)]">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -z-10 group-hover:bg-brand-accent/20 transition-colors duration-700 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-cta/5 rounded-full blur-[60px] -z-10 group-hover:bg-brand-cta/10 transition-colors duration-700"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              <span className="text-white">{title.split(' ')[0]} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
                {title.split(' ').slice(1).join(' ')}
              </span>
            </h2>
            
            <p className="text-slate-400 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
              {description}
            </p>
            
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default CallToAction;
