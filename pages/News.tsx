import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight, X } from 'lucide-react';
import { NewsItem } from '../types';
import FadeIn from '../components/FadeIn';

const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'The Evolution of RAG: Making AI Smarter with Your Data',
    date: 'Feb 20, 2026',
    category: 'Data & AI',
    excerpt: 'Retrieval-Augmented Generation (RAG) is transforming how businesses use AI by grounding models in proprietary data. Here\'s why it matters.',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&h=400&auto=format&fit=crop',
    content: 'Retrieval-Augmented Generation, commonly known as RAG, has emerged as one of the most practical and impactful techniques in the modern AI landscape. Rather than relying solely on the pre-trained knowledge of a Large Language Model (LLM), RAG allows systems to dynamically fetch relevant information from external databases before generating a response.\n\nThis approach solves two major problems: hallucinations and outdated information. By grounding the AI\'s answers in specific, verifiable documents—such as a company\'s internal wikis, customer support logs, or proprietary research—RAG ensures that the output is both accurate and contextually relevant.\n\nAs organizations move beyond generic chatbots, RAG is becoming the standard architecture for enterprise AI applications. It provides a secure, scalable way to leverage the reasoning capabilities of LLMs while maintaining strict control over the underlying data.'
  },
  {
    id: '2',
    title: 'Understanding AI Agents: From Chatbots to Autonomous Assistants',
    date: 'Feb 15, 2026',
    category: 'Concepts',
    excerpt: 'We are moving from conversational AI to agentic workflows. What exactly is an AI agent, and how does it differ from a standard chatbot?',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=600&h=400&auto=format&fit=crop',
    content: 'For the past few years, the primary way we\'ve interacted with AI has been through chat interfaces. You ask a question, and the model provides an answer. However, the next frontier in artificial intelligence is the shift toward "Agentic Workflows."\n\nAn AI agent is a system that doesn\'t just answer questions, but actively plans and executes multi-step tasks to achieve a specific goal. Unlike a standard chatbot, an agent has access to tools—it can browse the web, run code, query databases, and interact with APIs.\n\nFor example, instead of asking an AI to write a Python script, you might ask an agent to "analyze this dataset, create a visualization, and email the report to the team." The agent will break this down into sub-tasks, execute them sequentially, and even correct its own errors along the way. This shift from passive conversationalists to active problem-solvers represents a massive leap in AI utility.'
  },
  {
    id: '3',
    title: 'The Ethics of Generative AI: Navigating Bias and Copyright',
    date: 'Feb 10, 2026',
    category: 'Ethics',
    excerpt: 'As generative models become more capable, the industry faces complex questions around data ownership, bias mitigation, and responsible deployment.',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&h=400&auto=format&fit=crop',
    content: 'The rapid advancement of generative AI has brought unprecedented capabilities, but it has also sparked intense debates around ethics, copyright, and bias. As these models are trained on vast swaths of the internet, questions about intellectual property have taken center stage.\n\nWho owns the output of an AI trained on copyrighted works? How can creators opt out of training datasets? These are not just theoretical questions, but active legal battles shaping the future of the industry.\n\nFurthermore, the issue of bias remains a critical challenge. Because AI models learn from human-generated data, they often inherit and amplify historical prejudices. Ensuring that these systems are fair, transparent, and aligned with human values requires ongoing effort from researchers, policymakers, and developers. As we integrate AI deeper into society, establishing robust ethical frameworks is just as important as advancing the technology itself.'
  }
];

const News: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  return (
    <div className="min-h-screen pt-24 px-6 pb-20 relative">
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
                  <article 
                    className="flex flex-col md:flex-row gap-8 items-start group cursor-pointer"
                    onClick={() => setSelectedArticle(item)}
                  >
                      <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden bg-slate-800">
                          <img 
                              src={item.imageUrl} 
                              alt={item.title} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                              referrerPolicy="no-referrer"
                          />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center">
                          <div className="flex items-center gap-4 text-xs text-brand-cta font-bold uppercase tracking-wider mb-2">
                              <span>{item.category}</span>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                              {item.title}
                          </h2>
                          <p className="text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                              {item.excerpt}
                          </p>
                          <div className="flex items-center gap-6 text-sm text-slate-500">
                              <span className="flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
                              <span className="flex items-center gap-1"><Clock size={14} /> {item.readTime}</span>
                              <span className="flex items-center gap-1 text-white group-hover:underline ml-auto">
                                  Read Article <ChevronRight size={14} />
                              </span>
                          </div>
                      </div>
                  </article>
                </FadeIn>
            ))}
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>
            <div className="w-full h-64 sm:h-80 relative shrink-0">
              <img 
                src={selectedArticle.imageUrl} 
                alt={selectedArticle.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>
            <div className="p-6 sm:p-10 -mt-20 relative z-10">
              <div className="flex items-center gap-4 text-xs text-brand-cta font-bold uppercase tracking-wider mb-4">
                <span>{selectedArticle.category}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-6 text-sm text-slate-400 mb-8 pb-8 border-b border-white/10">
                <span className="flex items-center gap-1"><Calendar size={14} /> {selectedArticle.date}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {selectedArticle.readTime}</span>
              </div>
              <div className="prose prose-invert prose-lg max-w-none">
                {selectedArticle.content?.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-slate-300 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;