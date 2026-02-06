import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-logo">
            <img src="/images/logo.png" alt="Centralized Code" className="footer-logo-img" />
            <span>Centralized Code LLC</span>
          </div>
          <p>{t('footer.copyright')}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 