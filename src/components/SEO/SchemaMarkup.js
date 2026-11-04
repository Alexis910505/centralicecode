import React from 'react';
import { Helmet } from 'react-helmet-async';
import profile from '../../config/profile';

const SITE_URL = 'https://www.censtacks.com';

const SchemaMarkup = () => {
  const sameAs = [profile.social.github, profile.social.linkedin].filter((u) => u && u !== '#');

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role.en,
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Snowmass Village', addressRegion: 'CO', addressCountry: 'US' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Informatics Sciences (UCI)' },
    worksFor: { '@type': 'Organization', name: 'Centralized Code LLC' },
    knowsLanguage: ['es', 'en'],
    knowsAbout: profile.skills.flatMap((g) => g.items),
    sameAs,
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${profile.name} — Portfolio`,
    url: SITE_URL,
    inLanguage: ['en', 'es'],
    author: { '@type': 'Person', name: profile.name },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
    </Helmet>
  );
};

export default SchemaMarkup;
