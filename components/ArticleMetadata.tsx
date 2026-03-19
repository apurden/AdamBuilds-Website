import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

interface ArticleMetadataProps {
  author: string;
  date: string;
  time?: string;
  readTime: string;
  className?: string;
}

const ArticleMetadata: React.FC<ArticleMetadataProps> = ({ 
  author, 
  date, 
  time, 
  readTime,
  className = "" 
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-y-4 gap-x-6 text-sm text-slate-400 border-b border-white/10 pb-8 ${className}`}>
      <span className="flex items-center gap-2">
        <User size={16} className="text-brand-cta" /> 
        {author}
      </span>
      <span className="flex items-center gap-2">
        <Calendar size={16} className="text-brand-cta" /> 
        {date} {time && `| ${time}`}
      </span>
      <span className="flex items-center gap-2">
        <Clock size={16} className="text-brand-cta" /> 
        {readTime}
      </span>
    </div>
  );
};

export default ArticleMetadata;
