import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink as RouterNavLink, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav-item', {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, navRef);
    return () => ctx.revert();
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
    <header
      ref={navRef}
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-4xl",
        isScrolled || isMobileMenuOpen
          ? "top-4"
          : "top-8"
      )}
    >
      <nav
        className={cn(
          "relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border border-white/10",
          isScrolled || isMobileMenuOpen
            ? "bg-brand-dark/60 backdrop-blur-2xl shadow-2xl"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-3 nav-item">
          <img 
            src="https://github.com/apurden/AdamBuilds-Website/releases/download/v1.0-assets/logo.png" 
            alt="AdamBuilds Logo" 
            className="w-8 h-8 object-contain" 
          />
          <RouterNavLink to="/" className="text-xl font-bold tracking-tighter group">
            <span className="text-white">Adam</span>
            <span className="text-gradient group-hover:opacity-80 transition-opacity">Builds</span>
          </RouterNavLink>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              className={cn(
                "nav-item text-sm font-medium transition-all link-lift",
                isActive(link.path) ? "text-brand-accent" : "text-slate-300 hover:text-white"
              )}
            >
              {link.label}
            </RouterNavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center nav-item">
           <button
            onClick={handleSubscribeClick}
            className="btn-magnetic group relative px-6 py-2 rounded-full bg-brand-cta text-brand-dark font-bold text-sm overflow-hidden"
          >
            <span className="bg-layer bg-brand-cta-hover" />
            <span className="relative z-10">SUBSCRIBE</span>
          </button>
        </div>

        <button
          className="md:hidden text-white nav-item"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-4 bg-brand-dark/95 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-lg font-medium transition-colors",
                isActive(link.path) ? "text-brand-accent" : "text-slate-300 hover:text-white"
              )}
            >
              {link.label}
            </RouterNavLink>
          ))}
          <button
            onClick={handleSubscribeClick}
            className="w-full py-4 rounded-full bg-brand-cta text-brand-dark font-bold text-center"
          >
            SUBSCRIBE
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
