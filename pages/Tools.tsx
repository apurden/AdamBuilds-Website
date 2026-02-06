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
    <div className="min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI <span className="text-brand-accent">Toolbox</span></h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A curated list of the tools I use daily to build, create, and automate.
            </p>
          </FadeIn>
        </div>

        {/* Filters */}
        <FadeIn delay={200}>
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat 
                      ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/25' 
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="text" 
                placeholder="Search tools..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent/50"
              />
            </div>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <FadeIn key={tool.id} delay={index * 100} fullWidth>
              <div className="group h-full bg-card-gradient border border-white/5 rounded-xl p-6 hover:border-brand-accent/30 transition-all hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/5 rounded-lg">
                     {/* Placeholder icon based on first letter */}
                     <span className="text-xl font-bold text-white">{tool.name.charAt(0)}</span>
                  </div>
                  {tool.isNew && (
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded uppercase">New</span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-cta transition-colors">{tool.name}</h3>
                <p className="text-xs text-brand-accent mb-3 uppercase tracking-wider font-semibold">{tool.category}</p>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {tool.description}
                </p>
                
                <a 
                  href={tool.url}
                  className="inline-flex items-center text-sm font-medium text-white hover:text-brand-cta transition-colors"
                >
                  Visit Website <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {filteredTools.length === 0 && (
            <FadeIn>
              <div className="text-center py-20 text-slate-500">
                  <p>No tools found matching your criteria.</p>
              </div>
            </FadeIn>
        )}
      </div>
    </div>
  );
};

export default Tools;