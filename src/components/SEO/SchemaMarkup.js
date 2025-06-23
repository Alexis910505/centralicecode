import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaMarkup = () => {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Centralized Code LLC",
    "alternateName": "CenStacks",
    "url": "https://www.censtacks.com",
    "logo": "https://www.censtacks.com/images/logo.png",
    "description": "Professional IT services and digital marketing solutions company specializing in web development, software solutions, and digital transformation.",
    "foundingDate": "2024",
    "founders": {
      "@type": "Person",
      "name": "Centralized Code Team"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-786-569-7502",
        "contactType": "customer service",
        "availableLanguage": ["English", "Spanish"]
      },
      {
        "@type": "ContactPoint",
        "email": "centralizedcode@gmail.com",
        "contactType": "customer service",
        "availableLanguage": ["English", "Spanish"]
      }
    ],
    "sameAs": [
      "https://github.com/Alexis910505/centralicecode"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services & Digital Marketing",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Web Development",
          "description": "Custom website and web application development"
        },
        {
          "@type": "OfferCatalog",
          "name": "Digital Marketing",
          "description": "SEO, social media marketing, and digital advertising"
        },
        {
          "@type": "OfferCatalog",
          "name": "Software Development",
          "description": "Custom software solutions and applications"
        },
        {
          "@type": "OfferCatalog",
          "name": "IT Consulting",
          "description": "Technology consulting and digital transformation"
        }
      ]
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Centralized Code LLC",
    "alternateName": "CenStacks",
    "url": "https://www.censtacks.com",
    "description": "Professional IT services and digital marketing solutions",
    "inLanguage": ["en", "es"],
    "author": {
      "@type": "Organization",
      "name": "Centralized Code LLC"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.censtacks.com/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT Services & Digital Marketing",
    "description": "Comprehensive IT services including web development, software solutions, digital marketing, and technology consulting",
    "provider": {
      "@type": "Organization",
      "name": "Centralized Code LLC",
      "url": "https://www.censtacks.com"
    },
    "serviceType": [
      "Web Development",
      "Digital Marketing", 
      "Software Development",
      "IT Consulting"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT & Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom website and web application development with modern technologies"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "SEO optimization, social media marketing, and digital advertising campaigns"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Software Development",
            "description": "Custom software solutions and application development"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup; 