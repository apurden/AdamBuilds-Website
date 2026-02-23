import React from 'react';
import { Youtube, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
           <h3 className="text-2xl font-bold mb-6">
            <span className="text-white">Adam</span>
            <span className="text-gradient">Builds</span>
          </h3>
          <p className="text-slate-400 text-base leading-relaxed">
            Building practical software and workflows without writing code. Join the vibe coding movement.
          </p>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Explore</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><NavLink to="/tools" className="hover:text-brand-cta transition-colors link-lift inline-block">AI Tools</NavLink></li>
            <li><NavLink to="/news" className="hover:text-brand-cta transition-colors link-lift inline-block">News</NavLink></li>
            <li><NavLink to="/glossary" className="hover:text-brand-cta transition-colors link-lift inline-block">Glossary</NavLink></li>
          </ul>
        </div>

         <div className="col-span-1">
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Legal</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-brand-cta transition-colors link-lift inline-block">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand-cta transition-colors link-lift inline-block">Terms of Service</a></li>
            <li><a href="#" className="hover:text-brand-cta transition-colors link-lift inline-block">Contact</a></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Connect</h4>
          <div className="flex space-x-6">
            <a href="mailto:adam@adambuilds.io" className="p-3 rounded-full bg-white/5 text-slate-400 hover:text-brand-cta transition-all hover:scale-110 border border-white/5"><Mail size={24} /></a>
            <a href="https://www.youtube.com/@AdamVincentBuilds" className="p-3 rounded-full bg-white/5 text-slate-400 hover:text-brand-cta transition-all hover:scale-110 border border-white/5"><Youtube size={24} /></a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs font-mono uppercase tracking-widest">
        <span>© {new Date().getFullYear()} AdamBuilds. All rights reserved.</span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-brand-cta rounded-full animate-pulse" />
          <span>System Status: Operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
