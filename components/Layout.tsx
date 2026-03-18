import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SearchBar from './SearchBar';

interface LayoutProps {
  children: React.ReactNode;
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Custom metadata based on route
  const getPageMeta = () => {
    const path = location.pathname;
    if (path === '/') return { title: 'AdamBuilds | Build Real Software with AI', description: 'Exploring the intersection of AI tools, workflow automation, and vibe coding.' };
    if (path === '/tools') return { title: 'Tools | AdamBuilds AI Showcase', description: 'The best AI tools for coding, writing, and productivity.' };
    if (path === '/news') return { title: 'News | Latest in AI & Automation', description: 'Stay updated with the rapidly evolving world of AI.' };
    if (path === '/glossary') return { title: 'Glossary | AI Terminology Expert', description: 'Understand the language of AI and building.' };
    if (path === '/about') return { title: 'About | The Journey of AdamBuilds', description: 'Learning to build real software without writing a single line of code.' };
    return { title: 'AdamBuilds', description: 'Build Real Software with AI.' };
  };

  const { title, description } = getPageMeta();

  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen font-sans text-white bg-brand-dark selection:bg-brand-accent selection:text-white overflow-x-hidden">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
        </Helmet>
        
        <ScrollToTop />
        <Navbar />
        <SearchBar />
        
        <main className="flex-grow pt-20 md:pt-0">
          {children}
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Layout;
