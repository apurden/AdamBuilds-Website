export interface Tool {
  id: string;
  name: string;
  category: 'Coding' | 'Writing' | 'Image' | 'Video' | 'Productivity';
  description: string;
  url: string;
  isNew?: boolean;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  readTime?: string;
  imageUrl?: string;
  imageScale?: string;
  content?: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

export interface NavLink {
  label: string;
  path: string;
}