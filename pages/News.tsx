import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight, X } from 'lucide-react';
import { NewsItem } from '../types';
import FadeIn from '../components/FadeIn';

const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'The Ethics of AI in the Workplace: Navigating the New Normal',
    date: 'Oct 12, 2024',
    category: 'Ethics & Society',
    excerpt: 'As AI tools become ubiquitous in offices, companies are grappling with new ethical dilemmas around privacy, bias, and job displacement.',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
    content: `The integration of Artificial Intelligence into the modern workplace is accelerating at an unprecedented pace. While the productivity gains are undeniable, this rapid adoption has brought a host of ethical considerations to the forefront.\n\nOne of the primary concerns is data privacy. AI systems, particularly those used for monitoring employee productivity or analyzing communications, often require access to vast amounts of personal data. Striking the right balance between operational efficiency and employee privacy is becoming a critical challenge for HR departments and executives alike.\n\nFurthermore, the issue of algorithmic bias remains a significant hurdle. If the data used to train AI models reflects historical prejudices, the resulting systems can inadvertently perpetuate discrimination in hiring, performance evaluations, and resource allocation. Companies are increasingly recognizing the need for "human-in-the-loop" systems, ensuring that critical decisions are augmented by AI, not entirely delegated to it.\n\nFinally, the conversation around job displacement is shifting towards job transformation. While certain repetitive tasks are being automated, new roles centered around managing, auditing, and collaborating with AI are emerging. The ethical imperative for organizations now lies in reskilling their workforce, ensuring that employees are equipped to thrive alongside their new digital colleagues.`
  },
  {
    id: '2',
    title: 'Generative AI and the Future of Education',
    date: 'Oct 08, 2024',
    category: 'Education',
    excerpt: 'Rather than replacing teachers, generative AI is poised to become a personalized tutor for every student, fundamentally changing how we learn.',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    content: `The initial reaction to Generative AI in educational settings was largely one of apprehension, with concerns about plagiarism and academic integrity dominating the discourse. However, as the technology matures, a more optimistic vision is taking shape: AI as a catalyst for personalized learning.\n\nImagine a classroom where every student has access to an AI tutor tailored to their specific learning style and pace. For a student struggling with algebra, the AI can break down complex concepts into digestible steps, offering infinite patience and varied explanations until the material clicks. For advanced learners, it can provide challenging extensions and deeper dives into subjects of interest.\n\nCrucially, this does not diminish the role of the human teacher. Instead, it elevates it. By offloading routine tasks like grading and basic instruction, educators can focus on what they do best: mentoring, facilitating complex discussions, and providing emotional support. The teacher transforms from a "sage on the stage" to a "guide on the side."\n\nThe challenge moving forward will be ensuring equitable access to these tools. If deployed thoughtfully, Generative AI has the potential to democratize high-quality education, bridging learning gaps and fostering a generation of critical thinkers equipped to navigate an increasingly complex world.`
  },
  {
    id: '3',
    title: 'Demystifying the Environmental Impact of AI',
    date: 'Sep 29, 2024',
    category: 'Environment',
    excerpt: 'Training large language models requires massive computational power. What is the true carbon footprint of our AI-driven future?',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    content: `Behind the seamless interfaces of modern AI applications lies a massive, energy-intensive infrastructure. The training of Large Language Models (LLMs) requires thousands of specialized processors running continuously for weeks or even months, consuming vast amounts of electricity and water for cooling.\n\nAs AI adoption scales globally, its environmental footprint is coming under increased scrutiny. Researchers estimate that training a single, state-of-the-art model can emit as much carbon as five cars over their entire lifetimes. This reality poses a stark contradiction for tech companies that have simultaneously pledged to achieve net-zero emissions.\n\nHowever, the industry is not standing still. There is a growing push towards "Green AI," which focuses on developing more efficient algorithms that require less computational power without sacrificing performance. Techniques like model quantization and pruning are helping to shrink the size of AI models, making them less resource-intensive to run.\n\nMoreover, major tech firms are increasingly locating their data centers in regions with abundant renewable energy and investing heavily in next-generation cooling technologies. While the environmental cost of AI is significant, the technology itself may also hold the key to solving complex climate challenges, from optimizing power grids to accelerating materials science for better batteries.`
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedArticle(null)}
          ></div>
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="overflow-y-auto p-6 sm:p-10">
              <div className="mb-8">
                <div className="flex items-center gap-4 text-xs text-brand-cta font-bold uppercase tracking-wider mb-4">
                    <span>{selectedArticle.category}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    {selectedArticle.title}
                </h2>
                <div className="flex items-center gap-6 text-sm text-slate-400 mb-8 border-b border-white/10 pb-8">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {selectedArticle.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {selectedArticle.readTime}</span>
                </div>
              </div>
              
              {selectedArticle.imageUrl && (
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-800 mb-8">
                    <img 
                        src={selectedArticle.imageUrl} 
                        alt={selectedArticle.title} 
                        className="w-full h-full object-cover"
                    />
                </div>
              )}
              
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