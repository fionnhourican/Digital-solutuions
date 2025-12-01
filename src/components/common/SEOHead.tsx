import { useEffect } from 'react';
import { SEOData } from '@/lib/seo';

interface SEOHeadProps {
  seo: SEOData;
  structuredData?: object;
}

const SEOHead = ({ seo, structuredData }: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = seo.title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', seo.description);
    if (seo.keywords) {
      updateMetaTag('keywords', seo.keywords.join(', '));
    }

    // Open Graph tags
    updateMetaTag('og:title', seo.title, true);
    updateMetaTag('og:description', seo.description, true);
    updateMetaTag('og:type', seo.type || 'website', true);
    
    if (seo.image) {
      updateMetaTag('og:image', seo.image, true);
    }
    
    if (seo.url) {
      updateMetaTag('og:url', seo.url, true);
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', seo.title);
    updateMetaTag('twitter:description', seo.description);
    
    if (seo.image) {
      updateMetaTag('twitter:image', seo.image);
    }

    // Structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      
      script.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function
    return () => {
      // Remove structured data script when component unmounts
      if (structuredData) {
        const script = document.querySelector('script[type="application/ld+json"]');
        if (script) {
          script.remove();
        }
      }
    };
  }, [seo, structuredData]);

  return null; // This component doesn't render anything visible
};

export default SEOHead;
