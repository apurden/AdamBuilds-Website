import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { newsData } from '../data/news';
import FadeIn from '../components/FadeIn';
import Markdown from 'react-markdown';

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = newsData.find(item => item.id === id);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

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
                className="w-full h-full object-cover"
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
      </div>
    </div>
  );
};

export default Article;
