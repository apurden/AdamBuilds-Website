---
description: Create a new article for the AdamBuilds website
---

Whenever you are asked to create a new article, follow these rules to ensure consistency with the established structure:

1.  **Metadata Requirements**: Every article MUST have the following fields in `data/news.ts`:
    *   `id`: A unique string ID (increment from the highest existing ID).
    *   `slug`: A URL-friendly version of the title.
    *   `title`: The full title of the article.
    *   `date`: The current date in the format "MMM DD, YYYY" (e.g., "Mar 19, 2026").
    *   `time`: The current time (e.g., "06:47 AM PST").
    *   `author`: Set to "Adam Vincent".
    *   `category`: One of 'Breaking News', 'Industry News', 'Product Update', 'Feature Release', etc.
    *   `tags`: An array of relevant keywords.
    *   `excerpt`: A 1-2 sentence summary for the list view.
    *   `imageUrl`: Path to the banner image.
    *   `content`: Full article content in Markdown format.

2.  **Read Time**: Do NOT include a `readTime` field in the data. The reading time is calculated automatically by the `calculateReadTime` utility based on the content.

3.  **Image Scaling**: Use `imageScale: 'scale-150'` (or similar) if the image needs specific scaling in the list view.

4.  **Order**: Add the new article to the top of the `newsData` array in `data/news.ts` to ensure it appears as the latest news.

5.  **Types**: Ensure the new object adheres to the `NewsItem` interface in `types.ts`.
