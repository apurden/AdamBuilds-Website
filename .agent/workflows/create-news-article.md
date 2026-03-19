---
description: how to create a new news article for the website
---
// turbo-all
1. Add the new article to the `newsData` array in `data/news.ts`.
2. Ensure the following structure is followed:
    - **id**: Incremental unique string.
    - **slug**: URL-friendly version of the title.
    - **title**: Engaging and professional headline.
    - **date**: Format 'MMM DD, YYYY' (e.g. 'Mar 18, 2026').
    - **time**: Current post time (e.g. '06:30 AM PST').
    - **author**: "Adam Vincent" (unless specified otherwise).
    - **category**: Relevant category.
    - **readTime**: Calculated based on ~200 words/min.
    - **content**: Use standard Markdown. DO NOT include "Published:" or "By:" strings in the content, as the metadata component handles this.
3. Use high-quality images with proper `imageScale` if needed.
4. Add the article to the top of the `newsData` array for chronological order.
