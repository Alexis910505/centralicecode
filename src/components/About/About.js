import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import profile from '../../config/profile';
import './About.css';

const About = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en';
  const [avatarError, setAvatarError] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const facts = [
    { icon: 'fas fa-map-marker-alt', label: t('about.facts.location'), value: profile.location },
    { icon: 'fas fa-language', label: t('about.facts.languages'), value: profile.languages[lang].join(' · ') },
    { icon: 'fas fa-graduation-cap', label: t('about.facts.education'), value: `${profile.education.degree[lang]} — UCI ${profile.education.year}` },
    { icon: 'fas fa-laptop-house', label: t('about.facts.mode'), value: t('about.facts.mode_value') },
  ];

  return (
    <section id="sobre-mi" className="about section" ref={ref}>
      <div className="container about-content">
        <motion.div
          className="about-avatar"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="avatar-ring">
            {avatarError ? (
              <div className="avatar-fallback">{profile.initials}</div>
            ) : (
              <img src={profile.avatar} alt={profile.name} onError={() => setAvatarError(true)} />
            )}
          </div>
          <div className="avatar-tag mono">
            <i className="fas fa-code"></i> {profile.stats.years}+ {lang === 'es' ? 'años' : 'years'}
          </div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="section-label mono">{t('about.label')}</span>
          <h2 className="section-title">{t('about.title')}</h2>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>

          <div className="about-facts">
            {facts.map((f) => (
              <div className="fact" key={f.label}>
                <i className={f.icon}></i>
                <div>
                  <span className="fact-label mono">{f.label}</span>
                  <span className="fact-value">{f.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about-actions">
            <a className="btn-primary" href={profile.cv} download={profile.cvFileName}>
              <i className="fas fa-file-download"></i> {t('navbar.cv')}
            </a>
            <a className="btn-secondary" href={profile.social.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a className="btn-secondary" href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
