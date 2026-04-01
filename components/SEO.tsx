import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  schema?: any;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image, 
  article,
  schema
}) => {
  const { pathname } = useLocation();
  
  const siteName = "AdamBuilds";
  const defaultTitle = "AdamBuilds | AI & Vibe Coding";
  const defaultDescription = "Exploring the intersection of AI tools, workflow automation, and vibe coding. Personal blog and resources by Adam Vincent.";
  const siteUrl = "https://adambuilds.io";
  const defaultImage = `${siteUrl}/og-image.png`; // Fallback image
  
  const seo = {
    title: title ? `${title} | ${siteName}` : defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />
      
      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
