---
description: Create a new article for the AdamBuilds website
---

Whenever you are asked to create a new article, follow these rules to ensure consistency with the established modular structure:

1.  **Directory Structure**: Create a new folder for the article:
    `data/news/YYYY/MM/slug/`
    *   `YYYY`: 4-digit year.
    *   `MM`: 2-digit month (01-12).
    *   `slug`: URL-friendly title.

2.  **Files**: Inside the article folder, include:
    *   `index.ts`: The article data.
    *   `image.png`: The banner image (or logo).

3.  **Data Format (`index.ts`)**:
    ```typescript
    import { NewsItem } from '../../../../../types';
    import banner from './image.png';

    export const article: NewsItem = {
      id: 'next_id',
      slug: 'slug',
      title: 'Title',
      date: 'MMM DD, YYYY',
      time: 'HH:MM AM/PM PST',
      author: 'Adam Vincent',
      category: 'Category',
      tags: ['Tag1', 'Tag2'],
      excerpt: 'Summary...',
      imageUrl: banner,
      content: `Full Markdown Content`
    };
    ```

4.  **Auto-Discovery**: Do NOT modify `data/news/index.ts`. It will automatically discover your new article via Vite's `import.meta.glob`.

5.  **URLs**: The article will be accessible at `/news/YYYY/MM/slug`.
