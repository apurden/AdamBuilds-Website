import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, Newspaper, Wrench, Book, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { newsData } from '../data/news';
import { toolsData } from '../data/tools';
import { glossaryData } from '../data/glossary';

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleOpenSearch = () => setIsOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-search', handleOpenSearch);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-search', handleOpenSearch);
    };
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    
    const matchedNews = newsData
      .filter(item => item.title.toLowerCase().includes(q) || item.excerpt.toLowerCase().includes(q))
      .map(item => ({ ...item, type: 'News', icon: Newspaper, link: `/news/${item.slug}` }));

    const matchedTools = toolsData
      .filter(item => item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q))
      .map(item => ({ ...item, type: 'Tool', icon: Wrench, title: item.name, link: '/tools' }));

    const matchedGlossary = glossaryData
      .filter(item => item.term.toLowerCase().includes(q) || item.definition.toLowerCase().includes(q))
      .map(item => ({ ...item, type: 'Glossary', icon: Book, title: item.term, link: '/glossary' }));

    setResults([...matchedNews, ...matchedTools, ...matchedGlossary].slice(0, 8));
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 md:px-0">
      <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md" onClick={() => setIsOpen(false)} />
      
      <div className="w-full max-w-2xl glass-premium rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-white/10 flex items-center gap-4">
          <SearchIcon className="text-brand-accent" size={24} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search news, tools, glossary... (Cmd+K)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow bg-transparent border-none text-xl text-white placeholder-slate-500 focus:outline-none focus:ring-0"
          />
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400"
          >
            <X size={20} />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
          {results.length > 0 ? (
            <div className="grid gap-2">
              {results.map((result, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    navigate(result.link);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group text-left"
                >
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-brand-accent/20 text-slate-400 group-hover:text-brand-accent transition-colors">
                    <result.icon size={20} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cta opacity-70">{result.type}</span>
                    </div>
                    <h4 className="text-white font-bold group-hover:text-brand-accent transition-colors">{result.title}</h4>
                    <p className="text-sm text-slate-500 line-clamp-1">{result.excerpt || result.definition}</p>
                  </div>
                  <ArrowRight size={18} className="text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          ) : query ? (
            <div className="py-12 text-center text-slate-500">
              No results found for "{query}"
            </div>
          ) : (
            <div className="py-12 text-center text-slate-500">
              <p className="text-sm font-bold uppercase tracking-widest mb-4 opacity-50">Quick Links</p>
              <div className="flex justify-center gap-4">
                {['Tools', 'News', 'Glossary'].map(l => (
                  <button 
                    key={l}
                    onClick={() => { navigate(`/${l.toLowerCase()}`); setIsOpen(false); }}
                    className="px-6 py-2 glass-premium rounded-full text-xs font-bold hover:bg-brand-accent/20 transition-all"
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 bg-black/20 border-t border-white/5 flex justify-between items-center text-[10px] font-bold text-slate-500 tracking-widest uppercase">
          <div className="flex items-center gap-4">
            <span><kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white">ESC</kbd> to close</span>
            <span><kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white">↵</kbd> to select</span>
          </div>
          <span className="text-brand-accent/50">AdamBuilds Search v1.0</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
