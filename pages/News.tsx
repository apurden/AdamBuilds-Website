import React, { useState, useMemo } from 'react';
import { Calendar, Clock, ChevronRight, Search, Tag, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { newsData } from '../data/news';
import { calculateReadTime } from '../utils/readingTime';

// Helper to get URL components from date
const getUrlPath = (dateStr: string, slug: string) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `/news/${year}/${month}/${slug}`;
};

const News: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(newsData.map(item => item.category))];
    return cats;
  }, []);

  const filteredNews = useMemo(() => {
    return newsData.filter(item => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <FadeIn direction="down">
          <div className="mb-12 border-b border-white/10 pb-8">
              <h1 className="text-4xl font-bold mb-4 text-white">Latest <span className="text-[#a855f7]">AI</span> News</h1>
              
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mt-8">
                {/* Search Bar */}
                <div className="relative w-full md:w-96 group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-cta transition-colors" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search articles or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-brand-cta/50 focus:ring-1 focus:ring-brand-cta/50 transition-all"
                  />
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        selectedCategory === cat 
                          ? 'bg-brand-cta text-black shadow-[0_0_15px_rgba(45,212,191,0.3)]' 
                          : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
          </div>
        </FadeIn>

        <div className="grid gap-12">
            {filteredNews.length > 0 ? (
              filteredNews.map((item, index) => (
                  <FadeIn key={item.id} delay={index * 150} fullWidth>
                    <article className="flex flex-col md:flex-row gap-8 items-start group">
                        <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden bg-slate-800">
                            <img 
                                src={item.imageUrl} 
                                alt={item.title} 
                                className={`w-full h-full object-cover object-center transition-transform duration-500 ${item.imageScale || 'scale-125'} group-hover:scale-[1.3] opacity-80 group-hover:opacity-100`}
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="w-full md:w-2/3 flex flex-col justify-center">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                <span className="text-xs text-brand-cta font-bold uppercase tracking-wider">{item.category}</span>
                                {item.tags.slice(0, 2).map(tag => (
                                  <span key={tag} className="flex items-center gap-1 text-[10px] bg-white/5 text-slate-500 px-2 py-0.5 rounded border border-white/5">
                                    <Tag size={10} /> {tag}
                                  </span>
                                ))}
                            </div>
                            <Link to={getUrlPath(item.date, item.slug)}>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 hover:text-brand-accent transition-colors cursor-pointer">
                                    {item.title}
                                </h2>
                            </Link>
                            <p className="text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                                {item.excerpt}
                            </p>
                            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-500">
                                <span className="flex items-center gap-1.5"><User size={14} className="text-brand-cta" /> {item.author}</span>
                                <span className="flex items-center gap-1.5"><Calendar size={14} className="text-brand-cta" /> {item.date}</span>
                                <span className="flex items-center gap-1.5"><Clock size={14} className="text-brand-cta" /> {calculateReadTime(item.content || item.excerpt)}</span>
                                <Link to={getUrlPath(item.date, item.slug)} className="flex items-center gap-1 text-white hover:text-brand-accent transition-colors ml-auto">
                                    Read Article <ChevronRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </article>
                  </FadeIn>
              ))
            ) : (
              <FadeIn>
                <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                  <Search className="mx-auto text-slate-600 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                  <p className="text-slate-500">Try adjusting your search or category filters.</p>
                  <button 
                    onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                    className="mt-6 text-brand-cta hover:underline font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              </FadeIn>
            )}
        </div>
      </div>
    </div>
  );
};

export default News;