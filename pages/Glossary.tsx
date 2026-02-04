import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { GlossaryTerm } from '../types';

const glossaryData: GlossaryTerm[] = [
  { term: 'RAG', definition: 'Retrieval-Augmented Generation. A technique where an LLM is provided with external data (context) to generate more accurate answers.', category: 'Architecture' },
  { term: 'Zero-shot Learning', definition: 'The ability of a model to perform a task without having seen any examples of that specific task during training.', category: 'Training' },
  { term: 'Temperature', definition: 'A parameter that controls the randomness of the model\'s output. Higher values (0.8+) make output more creative/random, lower values (0.2) make it more focused/deterministic.', category: 'Parameters' },
  { term: 'Token', definition: 'The basic unit of text processing for an LLM. Roughly 0.75 words. "Hamburger" might be 2-3 tokens.', category: 'Basics' },
  { term: 'Fine-tuning', definition: 'The process of taking a pre-trained model and training it further on a specific dataset to specialize it for a certain task.', category: 'Training' },
  { term: 'Hallucination', definition: 'When an AI model confidently generates false or nonsensical information.', category: 'Issues' },
  { term: 'Multimodal', definition: 'The ability of a model to process and generate multiple types of media (text, images, audio) simultaneously.', category: 'Capabilities' },
  { term: 'Context Window', definition: 'The limit on the amount of text (tokens) a model can consider at one time (input + output).', category: 'Architecture' },
];

const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = glossaryData.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
         <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">AI <span className="text-brand-accent">Glossary</span></h1>
            <p className="text-slate-400">Decide the buzzwords. A simple dictionary for modern AI terminology.</p>
         </div>

         {/* Search Bar */}
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

         <div className="grid gap-6">
            {filteredTerms.map((item, index) => (
                <div key={index} className="bg-card-gradient border border-white/5 p-6 rounded-xl hover:bg-white/[0.07] transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                        <h3 className="text-2xl font-bold text-brand-cta">{item.term}</h3>
                        <span className="text-xs font-mono text-slate-500 bg-black/30 px-2 py-1 rounded">{item.category}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                        {item.definition}
                    </p>
                </div>
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