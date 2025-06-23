import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEOHelmet = ({ 
  title, 
  description, 
  keywords, 
  image = '/images/og-image.jpg',
  url = 'https://www.censtacks.com',
  type = 'website'
}) => {
  const { i18n } = useTranslation();
  
  // SEO data específico por idioma
  const seoData = {
    en: {
      siteName: 'Centralized Code LLC - IT Services & Digital Marketing',
      defaultTitle: 'Centralized Code LLC | Professional IT Services & Digital Marketing Solutions',
      defaultDescription: 'Transform your business with our comprehensive IT services and digital marketing solutions. Web development, software solutions, and digital growth strategies.',
      defaultKeywords: 'IT services, digital marketing, web development, software solutions, Miami, technology consulting, digital transformation'
    },
    es: {
      siteName: 'Centralized Code LLC - Servicios IT y Marketing Digital',
      defaultTitle: 'Centralized Code LLC | Servicios IT Profesionales y Soluciones de Marketing Digital',
      defaultDescription: 'Transforma tu negocio con nuestros servicios integrales de IT y soluciones de marketing digital. Desarrollo web, soluciones de software y estrategias de crecimiento digital.',
      defaultKeywords: 'servicios IT, marketing digital, desarrollo web, soluciones de software, Miami, consultoría tecnológica, transformación digital'
    }
  };

  const currentLang = i18n.language;
  const currentSEO = seoData[currentLang] || seoData.en;
  
  const pageTitle = title || currentSEO.defaultTitle;
  const pageDescription = description || currentSEO.defaultDescription;
  const pageKeywords = keywords || currentSEO.defaultKeywords;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="Centralized Code LLC" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={currentLang} />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={currentSEO.siteName} />
      <meta property="og:locale" content={currentLang === 'es' ? 'es_ES' : 'en_US'} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@centralizedcode" />

      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#667eea" />
      <meta name="msapplication-TileColor" content="#667eea" />
      
      {/* Alternate Language Links */}
      <link rel="alternate" hrefLang="en" href="https://www.censtacks.com?lang=en" />
      <link rel="alternate" hrefLang="es" href="https://www.censtacks.com?lang=es" />
      <link rel="alternate" hrefLang="x-default" href="https://www.censtacks.com" />

      {/* Business Contact Info */}
      <meta name="contact:phone_number" content="+1-786-569-7502" />
      <meta name="contact:email" content="centralizedcode@gmail.com" />
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Miami, Florida" />
    </Helmet>
  );
};

export default SEOHelmet; 