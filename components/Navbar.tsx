import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink as RouterNavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
            {/* FIXED: Using Raw GitHub Link from public folder */}
            <img 
              src="https://raw.githubusercontent.com/apurden/AdamBuilds-Website/main/public/logo.png" 
              alt="AdamBuilds Logo" 
              className="w-10 h-10 object-contain" 
            />
            <RouterNavLink to="/" className="text-2xl font-extrabold tracking-tighter group">
            <span className="text-white">Adam</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta group-hover:opacity-80 transition-opacity">Builds</span>
            </RouterNavLink>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                isActive(link.path) ? 'text-brand-accent' : 'text-slate-300'
              }`}
            >
              {link.label}
            </RouterNavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
           <button
            onClick={handleSubscribeClick}
            className="flex items-center justify-center bg-brand-cta hover:bg-brand-ctaHover text-black font-bold px-6 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(45,212,191,0.4)] cursor-pointer"
          >
            <span className="tracking-wide">SUBSCRIBE</span>
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark border-b border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium ${
                 isActive(link.path) ? 'text-brand-accent' : 'text-slate-300'
              }`}
            >
              {link.label}
            </RouterNavLink>
          ))}
          <button
            onClick={handleSubscribeClick}
            className="flex items-center justify-center space-x-2 bg-brand-cta text-black font-bold px-6 py-3 rounded-full cursor-pointer"
          >
            <span>SUBSCRIBE</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;