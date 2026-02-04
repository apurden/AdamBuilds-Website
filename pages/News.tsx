import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { NewsItem } from '../types';

const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'OpenAI Releases Sora: A New Era for Video?',
    date: 'Oct 12, 2024',
    category: 'Industry News',
    excerpt: 'The text-to-video model has shocked the creative world with its physics simulation and temporal consistency.',
    readTime: '5 min read',
    imageUrl: 'https://picsum.photos/600/400?random=1'
  },
  {
    id: '2',
    title: 'Cursor vs. VS Code: Why I Switched',
    date: 'Oct 08, 2024',
    category: 'Opinion',
    excerpt: 'Is the "AI-first" editor hype real? Here is a breakdown of how it changed my daily workflow.',
    readTime: '8 min read',
    imageUrl: 'https://picsum.photos/600/400?random=2'
  },
  {
    id: '3',
    title: 'The Rise of Local LLMs on Mac',
    date: 'Sep 29, 2024',
    category: 'Tutorial',
    excerpt: 'How to run Llama 3 8B locally on your M3 Macbook Pro using Ollama.',
    readTime: '6 min read',
    imageUrl: 'https://picsum.photos/600/400?random=3'
  },
  {
    id: '4',
    title: 'Agentic Workflows Explained',
    date: 'Sep 15, 2024',
    category: 'Deep Dive',
    excerpt: 'Moving beyond chat interfaces: How agents are beginning to perform multi-step complex tasks.',
    readTime: '10 min read',
    imageUrl: 'https://picsum.photos/600/400?random=4'
  }
];

const News: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-4xl font-bold mb-4">Latest <span className="text-brand-accent">Insights</span></h1>
            <p className="text-slate-400">Thoughts on the rapidly evolving landscape of artificial intelligence.</p>
        </div>

        <div className="grid gap-12">
            {newsData.map((item) => (
                <article key={item.id} className="flex flex-col md:flex-row gap-8 items-start group">
                    <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden bg-slate-800">
                        <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        />
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-xs text-brand-cta font-bold uppercase tracking-wider mb-2">
                            <span>{item.category}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors cursor-pointer">
                            {item.title}
                        </h2>
                        <p className="text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                            {item.excerpt}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-slate-500">
                            <span className="flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
                            <span className="flex items-center gap-1"><Clock size={14} /> {item.readTime}</span>
                            <span className="flex items-center gap-1 text-white group-hover:underline cursor-pointer ml-auto">
                                Read Article <ChevronRight size={14} />
                            </span>
                        </div>
                    </div>
                </article>
            ))}
        </div>
      </div>
    </div>
  );
};

export default News;