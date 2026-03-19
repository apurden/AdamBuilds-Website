export const calculateReadTime = (content: string): string => {
  const wordsPerMinute = 225; // Slightly faster for tech readers
  
  // Clean up markdown/extra spaces to get a better word count
  const cleanContent = content
    .replace(/[#*`\[\]()]/g, '') // Remove simple markdown symbols
    .trim();
  
  const wordCount = cleanContent.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  
  return `${minutes} min read`;
};
