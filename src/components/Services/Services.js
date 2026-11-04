import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import './Services.css';

const services = [
  { key: 'web', icon: 'fas fa-globe' },
  { key: 'api', icon: 'fas fa-network-wired' },
  { key: 'mobile', icon: 'fas fa-mobile-alt' },
  { key: 'ecommerce', icon: 'fas fa-credit-card' },
  { key: 'realtime', icon: 'fas fa-map-marked-alt' },
  { key: 'devops', icon: 'fas fa-rocket' },
];

const Services = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="servicios" className="services section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label mono">{t('services.label')}</span>
          <h2 className="section-title">{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.key}
              className="service-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="icon-box"><i className={s.icon}></i></span>
              <h3>{t(`services.items.${s.key}.title`)}</h3>
              <p>{t(`services.items.${s.key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
