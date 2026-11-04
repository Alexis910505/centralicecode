import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import profile from '../../config/profile';

const SITE_URL = 'https://www.censtacks.com';

const SEOHelmet = ({ title, description, keywords, image = `${SITE_URL}/images/profile.jpg`, url = SITE_URL, type = 'website' }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en';

  const seoData = {
    en: {
      title: `${profile.name} | Senior Full Stack Developer — Flutter, React, Next.js, NestJS`,
      description: 'Portfolio of Alexis Gongora Smith, Senior Full Stack Developer with 8+ years building production web and mobile apps with Flutter, React, Next.js, NestJS, Node.js and PostgreSQL.',
      keywords: 'full stack developer, flutter developer, react developer, next.js, nestjs, node.js, postgresql, firebase, mobile apps, portfolio, Colorado, remote',
    },
    es: {
      title: `${profile.name} | Desarrollador Full Stack Senior — Flutter, React, Next.js, NestJS`,
      description: 'Portafolio de Alexis Gongora Smith, Desarrollador Full Stack Senior con más de 8 años creando apps web y móviles en producción con Flutter, React, Next.js, NestJS, Node.js y PostgreSQL.',
      keywords: 'desarrollador full stack, desarrollador flutter, react, next.js, nestjs, node.js, postgresql, firebase, apps móviles, portafolio, Colorado, remoto',
    },
  };

  const seo = seoData[lang];
  const pageTitle = title || seo.title;
  const pageDescription = description || seo.description;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywords || seo.keywords} />
      <meta name="author" content={profile.name} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={profile.name} />
      <meta property="og:locale" content={lang === 'es' ? 'es_ES' : 'en_US'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />

      <meta name="theme-color" content="#0b0f17" />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}?lang=en`} />
      <link rel="alternate" hrefLang="es" href={`${SITE_URL}?lang=es`} />
      <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
    </Helmet>
  );
};

export default SEOHelmet;
