import React from 'react';
import { Youtube, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 border-t border-white/5 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
           <h3 className="text-xl font-bold mb-4">
            <span className="text-white">Adam</span>
            <span className="text-brand-accent">Builds</span>
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Building practical software and workflows without writing code.
          </p>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><NavLink to="/tools" className="hover:text-brand-cta transition-colors">AI Tools</NavLink></li>
            <li><NavLink to="/news" className="hover:text-brand-cta transition-colors">News</NavLink></li>
            <li><NavLink to="/glossary" className="hover:text-brand-cta transition-colors">Glossary</NavLink></li>
          </ul>
        </div>

         <div className="col-span-1">
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#" className="hover:text-brand-cta transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand-cta transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-brand-cta transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="mailto:adam@adambuilds.io" className="text-slate-400 hover:text-brand-cta transition-colors"><Mail size={20} /></a>
            <a href="https://youtube.com" className="text-slate-400 hover:text-brand-cta transition-colors"><Youtube size={20} /></a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
        © {new Date().getFullYear()} AdamBuilds. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;