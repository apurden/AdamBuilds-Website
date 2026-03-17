import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NewsItem } from '../types';
import FadeIn from '../components/FadeIn';
import { newsData } from '../data/news';

const News: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <FadeIn direction="down">
          <div className="mb-12 border-b border-white/10 pb-8">
              <h1 className="text-4xl font-bold mb-4">Latest <span className="text-brand-accent">Insights</span></h1>
              <p className="text-slate-400">Thoughts on the rapidly evolving landscape of artificial intelligence.</p>
          </div>
        </FadeIn>

        <div className="grid gap-12">
            {newsData.map((item, index) => (
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
                          <div className="flex items-center gap-4 text-xs text-brand-cta font-bold uppercase tracking-wider mb-2">
                              <span>{item.category}</span>
                          </div>
                          <Link to={`/news/${item.id}`}>
                              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 hover:text-brand-accent transition-colors cursor-pointer">
                                  {item.title}
                              </h2>
                          </Link>
                          <p className="text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                              {item.excerpt}
                          </p>
                          <div className="flex items-center gap-6 text-sm text-slate-500">
                              <span className="flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
                              <span className="flex items-center gap-1"><Clock size={14} /> {item.readTime}</span>
                              <Link to={`/news/${item.id}`} className="flex items-center gap-1 text-white hover:underline cursor-pointer ml-auto">
                                  Read Article <ChevronRight size={14} />
                              </Link>
                          </div>
                      </div>
                  </article>
                </FadeIn>
            ))}
        </div>
      </div>
    </div>
  );
};

export default News;