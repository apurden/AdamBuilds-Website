/// <reference types="vite/client" />
import { NewsItem } from '../../types';

// Use Vite's glob import to discover all news articles automatically
const articleModules = import.meta.glob<{ article: NewsItem }>('./*/*/*/index.ts', { eager: true });

export const newsData: NewsItem[] = Object.values(articleModules)
  .map((module: any) => module.article)
  // Sort by date descending (newest first)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
