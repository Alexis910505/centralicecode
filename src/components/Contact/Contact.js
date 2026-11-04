import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import profile from '../../config/profile';
import CopyEmail from '../CopyEmail/CopyEmail';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = [
    { icon: 'fas fa-envelope', title: t('contact.info.email'), content: profile.email, copy: true },
    { icon: 'fas fa-phone', title: t('contact.info.phone'), content: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: 'fas fa-map-marker-alt', title: t('contact.info.location'), content: profile.location },
  ];

  return (
    <section id="contacto" className="contact section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label mono">{t('contact.label')}</span>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {contactInfo.map((info) => (
              <div key={info.title} className="contact-item">
                <i className={info.icon}></i>
                <div>
                  <h4>{info.title}</h4>
                  {info.copy ? (
                    <CopyEmail className="contact-copy">{info.content} <i className="far fa-copy"></i></CopyEmail>
                  ) : info.href ? (
                    <a href={info.href}>{info.content}</a>
                  ) : (
                    <p>{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="contact-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {profile.available && (
              <span className="hero-badge">
                <span className="pulse-dot"></span>
                {t('hero.available')}
              </span>
            )}
            <h3>{t('contact.cta_title')}</h3>
            <p>{t('contact.cta_text')}</p>
            <div className="contact-cta-actions">
              <CopyEmail className="btn-primary">
                <i className="fas fa-envelope"></i> {t('contact.copy_email')}
              </CopyEmail>
              <a className="btn-secondary" href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
              <a className="btn-secondary" href={profile.social.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
