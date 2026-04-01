import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { glossaryData } from '../data/glossary';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = glossaryData.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-4 px-6 pb-20">
      <SEO 
        title="AI Glossary" 
        description="A dictionary of modern AI terminology. From RAG to Vibe Coding, we decode the buzzwords of the agentic era."
      />
      <div className="max-w-4xl mx-auto">
         <div className="text-center mb-12">
            <FadeIn direction="down">
              <h1 className="text-4xl font-bold mb-4">AI <span className="text-brand-accent">Glossary</span></h1>
              <p className="text-slate-400">Decide the buzzwords. A simple dictionary for modern AI terminology.</p>
            </FadeIn>
         </div>

         {/* Search Bar */}
         <FadeIn delay={200}>
            <div className="relative max-w-lg mx-auto mb-16">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="text-slate-500" size={20} />
                </div>
                <input 
                    type="text"
                    placeholder="Find a term (e.g., 'RAG')"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                />
            </div>
         </FadeIn>

         <div className="grid gap-6">
            {filteredTerms.map((item, index) => (
                <FadeIn key={index} delay={index * 50} fullWidth>
                    <div className="bg-card-gradient border border-white/5 p-6 rounded-xl hover:bg-white/[0.07] transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                            <h3 className="text-2xl font-bold text-brand-cta">{item.term}</h3>
                            <span className="text-xs font-mono text-slate-500 bg-black/30 px-2 py-1 rounded">{item.category}</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                            {item.definition}
                        </p>
                    </div>
                </FadeIn>
            ))}

            {filteredTerms.length === 0 && (
                <div className="text-center py-12 text-slate-500">
                    No terms found for "{searchTerm}".
                </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default Glossary;