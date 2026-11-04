import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import profile from '../../config/profile';
import './Experience.css';

const Experience = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en';

  return (
    <section id="experiencia" className="experience section">
      <div className="container">
        <div className="section-header">
          <span className="section-label mono">{t('experience.label')}</span>
          <h2 className="section-title">{t('experience.title')}</h2>
          <p>{t('experience.subtitle')}</p>
        </div>

        <ol className="timeline">
          {profile.experience.map((job, i) => (
            <motion.li
              key={`${job.company}-${i}`}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <span className={`timeline-dot ${i === 0 ? 'current' : ''}`}></span>
              <div className="timeline-card card">
                <span className="timeline-period mono">{job.period[lang]}</span>
                <h3>{job.role[lang]}</h3>
                <p className="timeline-company">{job.company}</p>
                {job.highlights[lang].length > 0 && (
                  <ul className="timeline-highlights">
                    {job.highlights[lang].map((h) => <li key={h}>{h}</li>)}
                  </ul>
                )}
                <div className="chips">
                  {job.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
