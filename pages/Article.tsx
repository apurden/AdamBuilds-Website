import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { newsData } from '../data/news';
import FadeIn from '../components/FadeIn';
import Markdown from 'react-markdown';

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const articleIndex = newsData.findIndex(item => item.id === id);
  const article = newsData[articleIndex];

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  // Get the next article, looping back to the first if at the end
  const nextArticle = newsData[(articleIndex + 1) % newsData.length];

  return (
    <div className="min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-3xl mx-auto">
        <FadeIn direction="down">
          <Link to="/news" className="inline-flex items-center gap-2 text-brand-cta hover:text-brand-accent transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to News
          </Link>
          
          <div className="mb-8">
            <div className="flex items-center gap-4 text-xs text-brand-cta font-bold uppercase tracking-wider mb-4">
              <span>{article.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{article.title}</h1>
            
            <div className="flex items-center gap-6 text-sm text-slate-400 border-b border-white/10 pb-8">
              <span className="flex items-center gap-2"><Calendar size={16} /> {article.date}</span>
              <span className="flex items-center gap-2"><Clock size={16} /> {article.readTime}</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          {article.imageUrl && (
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-800 mb-10">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
          
          <div className="prose prose-invert prose-lg max-w-none prose-a:text-brand-cta hover:prose-a:text-brand-accent prose-img:rounded-xl">
            {article.content ? (
              <div className="markdown-body">
                <Markdown>{article.content}</Markdown>
              </div>
            ) : (
              <p>{article.excerpt}</p>
            )}
          </div>
        </FadeIn>

        {/* Read Next Section */}
        {nextArticle && (
          <FadeIn delay={400}>
            <div className="mt-20 pt-10 border-t border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white text-center">Read Next</h3>
              <Link to={`/news/${nextArticle.id}`} className="block group">
                <div className="relative overflow-hidden rounded-2xl bg-slate-800 aspect-[21/9] flex items-center justify-center p-8">
                  {nextArticle.imageUrl && (
                    <img 
                      src={nextArticle.imageUrl} 
                      alt={nextArticle.title} 
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                    />
                  )}
                  <div className="relative z-10 text-center">
                    <div className="text-brand-cta text-sm font-bold uppercase tracking-wider mb-3">
                      {nextArticle.category}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:text-brand-accent transition-colors drop-shadow-md">
                      {nextArticle.title}
                    </h4>
                    <p className="mt-4 text-slate-300 max-w-xl mx-auto line-clamp-2">
                       {nextArticle.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
};

export default Article;
