import React, { useState } from 'react';
import { ExternalLink, Search } from 'lucide-react';
import { Tool } from '../types';
import FadeIn from '../components/FadeIn';

const toolsData: Tool[] = [
  { id: '1', name: 'Cursor', category: 'Coding', description: 'The AI-first code editor. A fork of VS Code with built-in GPT-4 and Claude 3.5 Sonnet integration.', url: '#', isNew: true },
  { id: '2', name: 'Claude 3.5', category: 'Writing', description: 'Anthropic’s latest model. Exceptional at coding, reasoning, and nuanced creative writing.', url: '#', isNew: true },
  { id: '3', name: 'Midjourney', category: 'Image', description: 'The gold standard for AI image generation. Photorealistic text-to-image creation.', url: '#' },
  { id: '4', name: 'Perplexity', category: 'Productivity', description: 'An AI-powered answer engine that replaces traditional search for research tasks.', url: '#' },
  { id: '5', name: 'Runway Gen-3', category: 'Video', description: 'Text-to-video generation tool offering high fidelity and control.', url: '#', isNew: true },
  { id: '6', name: 'V0.dev', category: 'Coding', description: 'Generative UI system by Vercel. Text-to-React components instantly.', url: '#' },
  { id: '7', name: 'ElevenLabs', category: 'Video', description: 'Realistic AI voice synthesis and text-to-speech capabilities.', url: '#' },
  { id: '8', name: 'Notion AI', category: 'Writing', description: 'Integrated AI assistant for your notes, docs, and project management.', url: '#' },
];

const Tools: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Coding', 'Writing', 'Image', 'Video', 'Productivity'];

  const filteredTools = toolsData.filter(tool => {
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-40 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn direction="down">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">AI <span className="text-gradient">Toolbox</span></h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A curated list of the tools I use daily to build, create, and automate.
            </p>
          </FadeIn>
        </div>

        {/* Filters */}
        <FadeIn delay={200}>
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                      ? 'bg-brand-accent text-white shadow-xl shadow-brand-accent/20' 
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" size={20} />
              <input 
                type="text" 
                placeholder="Search tools..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-3 bg-black/30 border border-white/10 rounded-full text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent/50 transition-all backdrop-blur-sm"
              />
            </div>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool, index) => (
            <FadeIn key={tool.id} delay={index * 100}>
              <div className="glass-card h-full p-8 hover:bg-white/[0.05] transition-all group hover:-translate-y-2 duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-brand-accent/10 rounded-2xl text-brand-accent group-hover:scale-110 transition-transform">
                     <span className="text-2xl font-bold">{tool.name.charAt(0)}</span>
                  </div>
                  {tool.isNew && (
                    <span className="px-3 py-1 bg-brand-cta/20 text-brand-cta text-[10px] font-bold rounded-full uppercase tracking-widest">New</span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-cta transition-colors">{tool.name}</h3>
                <p className="text-xs text-brand-accent mb-4 uppercase tracking-widest font-bold">{tool.category}</p>
                <p className="text-slate-400 text-base mb-8 leading-relaxed">
                  {tool.description}
                </p>
                
                <a 
                  href={tool.url}
                  className="inline-flex items-center text-sm font-bold text-white hover:text-brand-cta transition-colors link-lift"
                >
                  Visit Website <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {filteredTools.length === 0 && (
            <FadeIn>
              <div className="text-center py-32 text-slate-500">
                  <p className="text-xl">No tools found matching your criteria.</p>
              </div>
            </FadeIn>
        )}
      </div>
    </div>
  );
};

export default Tools;
