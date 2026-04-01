import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { newsData } from '../data/news';
import FadeIn from '../components/FadeIn';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ArticleMetadata from '../components/ArticleMetadata';
import { calculateReadTime } from '../utils/readingTime';
import SEO from '../components/SEO';

const Article: React.FC = () => {
  const { year, month, slug } = useParams<{ year: string; month: string; slug: string }>();
  // We can still find by slug as slugs are unique, but we could also verify year/month
  const articleIndex = newsData.findIndex(item => item.slug === slug);
  const article = newsData[articleIndex];

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "image": [article.imageUrl],
    "datePublished": new Date(article.date).toISOString(),
    "author": [{
        "@type": "Person",
        "name": article.author,
        "url": "https://adambuilds.io/about"
      }]
  };

  // Get the next article, looping back to the first if at the end
  const nextArticle = newsData[(articleIndex + 1) % newsData.length];

  // Helper to get URL components from date
  const getUrlPath = (dateStr: string, slug: string) => {
    const date = new Date(dateStr);
    const yearStr = date.getFullYear();
    const monthStr = String(date.getMonth() + 1).padStart(2, '0');
    return `/news/${yearStr}/${monthStr}/${slug}`;
  };

  return (
    <div className="min-h-screen pt-4 px-6 pb-20">
      <SEO 
        title={article.title} 
        description={article.excerpt}
        image={article.imageUrl}
        article={true}
        schema={articleSchema}
      />
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
            
            <ArticleMetadata 
              author={article.author}
              date={article.date}
              time={article.time}
              readTime={calculateReadTime(article.content || article.excerpt)}
            />
          </div>
        </FadeIn>

        <div className="mt-8">
          {article.imageUrl && (
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-800 mb-10">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className={`w-full h-full object-cover object-center ${article.imageScale || 'scale-125'}`}
                referrerPolicy="no-referrer"
              />
            </div>
          )}
          
          <div className="prose prose-invert prose-lg max-w-none prose-a:text-brand-cta hover:prose-a:text-brand-accent prose-img:rounded-xl">
            {article.content ? (
              <div className="markdown-body">
                <Markdown remarkPlugins={[remarkGfm]}>{article.content}</Markdown>
              </div>
            ) : (
              <p>{article.excerpt}</p>
            )}
          </div>
        </div>

        {/* Read Next Section */}
        {nextArticle && (
          <FadeIn delay={400}>
            <div className="mt-20 pt-10 border-t border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white text-center">Read Next</h3>
              <Link to={getUrlPath(nextArticle.date, nextArticle.slug)} className="block group">
                <div className="relative overflow-hidden rounded-2xl bg-slate-800 aspect-[21/9] flex items-center justify-center p-8">
                  {nextArticle.imageUrl && (
                    <img 
                      src={nextArticle.imageUrl} 
                      alt={nextArticle.title} 
                      className={`absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover:opacity-60 ${nextArticle.imageScale || 'scale-125'} group-hover:scale-[1.3] transition-all duration-700`}
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
