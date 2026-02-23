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
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  imageUrl?: string;
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