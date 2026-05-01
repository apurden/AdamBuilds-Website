import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router', 'react-router-dom']
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true
  },
  publicDir: 'public',
  ssgOptions: {
    script: 'async',
    formatting: 'none',
    includedRoutes(paths) {
      // Find all news articles via filesystem to avoid import.meta.glob issues
      const newsDir = path.resolve(__dirname, 'data/news');
      const newsPaths: string[] = [];
      
      if (fs.existsSync(newsDir)) {
        const years = fs.readdirSync(newsDir).filter(f => /^\d{4}$/.test(f));
        years.forEach(year => {
          const yearDir = path.join(newsDir, year);
          const months = fs.readdirSync(yearDir).filter(f => /^\d{2}$/.test(f));
          months.forEach(month => {
            const monthDir = path.join(yearDir, month);
            const slugs = fs.readdirSync(monthDir).filter(f => fs.statSync(path.join(monthDir, f)).isDirectory());
            slugs.forEach(slug => {
              newsPaths.push(`/news/${year}/${month}/${slug}`);
            });
          });
        });
      }
      
      return [...paths, ...newsPaths];
    }
  }
})