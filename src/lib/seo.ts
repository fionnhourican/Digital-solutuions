export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
}

export const defaultSEO: SEOData = {
  title: "Public Sector IT Solutions | Government Digital Transformation Ireland",
  description: "Leading provider of IT solutions and digital transformation services for the Irish public sector. Specializing in government technology, cloud migration, and citizen services.",
  keywords: [
    "public sector IT",
    "government technology",
    "digital transformation",
    "Ireland",
    "cloud migration",
    "cybersecurity",
    "citizen services",
    "government consulting"
  ],
  image: "/images/og-image.jpg",
  type: "website"
};

export const generatePageSEO = (page: string, customData?: Partial<SEOData>): SEOData => {
  const baseTitle = "Public Sector IT Solutions";
  
  const pageSEO: Record<string, SEOData> = {
    home: {
      title: `${baseTitle} | Government Digital Transformation Ireland`,
      description: "Leading provider of IT solutions and digital transformation services for the Irish public sector. Specializing in government technology, cloud migration, and citizen services.",
      keywords: ["public sector IT", "government technology", "digital transformation", "Ireland"]
    },
    about: {
      title: `About Us | ${baseTitle}`,
      description: "Learn about our team of experts specializing in public sector digital transformation. 15+ years of experience delivering innovative IT solutions for Irish government organizations.",
      keywords: ["about", "team", "experience", "public sector experts", "Ireland"]
    },
    services: {
      title: `Our Services | ${baseTitle}`,
      description: "Comprehensive IT services for the public sector including digital transformation, cloud migration, cybersecurity, and citizen service platforms. Government-focused solutions.",
      keywords: ["services", "digital transformation", "cloud migration", "cybersecurity", "citizen services"]
    },
    portfolio: {
      title: `Portfolio & Case Studies | ${baseTitle}`,
      description: "Explore our successful public sector projects including Dublin City Council portal, HSE data platform, and Revenue system modernization. Proven results for government clients.",
      keywords: ["portfolio", "case studies", "projects", "government clients", "success stories"]
    },
    contact: {
      title: `Contact Us | ${baseTitle}`,
      description: "Get in touch with our public sector IT experts. Based in Dublin, Ireland. Contact us for government digital transformation and IT consulting services.",
      keywords: ["contact", "Dublin", "Ireland", "consultation", "government IT"]
    }
  };

  return {
    ...defaultSEO,
    ...pageSEO[page],
    ...customData
  };
};

export const generateStructuredData = (type: 'organization' | 'service' | 'article', data: any) => {
  const baseUrl = "https://publicsectoritsolutions.ie";
  
  switch (type) {
    case 'organization':
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Public Sector IT Solutions",
        "description": "Leading provider of IT solutions and digital transformation services for the Irish public sector",
        "url": baseUrl,
        "logo": `${baseUrl}/images/logo.png`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+353-1-234-5678",
          "contactType": "customer service",
          "email": "info@publicsectoritsolutions.ie"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Government Quarter",
          "addressLocality": "Dublin",
          "addressRegion": "Dublin",
          "postalCode": "D02 XY12",
          "addressCountry": "IE"
        },
        "sameAs": [
          "https://linkedin.com/company/public-sector-it-solutions",
          "https://twitter.com/publicsectorit"
        ]
      };
    
    case 'service':
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.title,
        "description": data.description,
        "provider": {
          "@type": "Organization",
          "name": "Public Sector IT Solutions"
        },
        "serviceType": "IT Consulting",
        "areaServed": "Ireland"
      };
    
    case 'article':
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.title,
        "description": data.description,
        "author": {
          "@type": "Organization",
          "name": "Public Sector IT Solutions"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Public Sector IT Solutions",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/images/logo.png`
          }
        }
      };
    
    default:
      return null;
  }
};
