import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import profile from '../../config/profile';
import './Skills.css';

const Skills = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="stack" className="skills section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label mono">{t('skills.label')}</span>
          <h2 className="section-title">{t('skills.title')}</h2>
          <p>{t('skills.subtitle')}</p>
        </div>

        <div className="skills-grid">
          {profile.skills.map((group, i) => (
            <motion.div
              key={group.key}
              className="skill-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="skill-card-head">
                <span className="icon-box"><i className={group.icon}></i></span>
                <h3>{t(`skills.groups.${group.key}`)}</h3>
              </div>
              <div className="chips">
                {group.items.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
