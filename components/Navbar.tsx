import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { NavLink as RouterNavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Tools', path: '/tools' },
    { label: 'News', path: '/news' },
    { label: 'Glossary', path: '/glossary' },
    { label: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSubscribeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (location.pathname === '/') {
      const subscribeSection = document.getElementById('subscribe');
      if (subscribeSection) {
        subscribeSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      navigate('/', { state: { scrollTo: 'subscribe' } });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 ${
        isScrolled 
          ? 'py-4' 
          : 'py-8'
      }`}
    >
      <div 
        className={`max-w-5xl mx-auto transition-all duration-500 ease-in-out flex items-center justify-between px-6 ${
          isScrolled 
            ? 'glass-premium rounded-full py-2 shadow-2xl' 
            : 'bg-transparent py-0'
        }`}
      >
        <div className="flex items-center gap-3 group">
            <img 
              src="https://github.com/apurden/AdamBuilds-Website/releases/download/v1.0-assets/logo.png" 
              alt="AdamBuilds Logo" 
              className={`object-contain transition-all duration-500 ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'}`} 
            />
            <RouterNavLink to="/" className="text-2xl font-black tracking-tighter transition-all duration-500">
              <span className="text-white">Adam</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">Builds</span>
            </RouterNavLink>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-sm font-bold tracking-wide transition-all rounded-full hover:bg-white/5 ${
                isActive(link.path) 
                  ? 'text-brand-accent bg-white/5' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.label.toUpperCase()}
            </RouterNavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
           <button 
             className="text-slate-300 hover:text-brand-accent transition-colors p-2"
             onClick={() => window.dispatchEvent(new CustomEvent('open-search'))}
           >
             <Search size={20} />
           </button>
           <button
            onClick={handleSubscribeClick}
            className="flex items-center justify-center bg-brand-cta hover:bg-brand-ctaHover text-black font-bold px-6 py-2 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-brand-cta/20 text-xs tracking-widest"
          >
            SUBSCRIBE
          </button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 glass-premium rounded-3xl p-8 flex flex-col space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-black tracking-tight ${
                 isActive(link.path) ? 'text-brand-accent' : 'text-white'
              }`}
            >
              {link.label}
            </RouterNavLink>
          ))}
          <div className="pt-4 flex flex-col gap-4">
            <button
               onClick={() => {
                 setIsMobileMenuOpen(false);
                 window.dispatchEvent(new CustomEvent('open-search'));
               }}
               className="flex items-center justify-center gap-2 glass-premium text-white font-bold py-4 rounded-2xl"
            >
              <Search size={20} /> SEARCH
            </button>
            <button
              onClick={handleSubscribeClick}
              className="flex items-center justify-center bg-white text-black font-black py-4 rounded-2xl shadow-xl"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;