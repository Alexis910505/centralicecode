import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>
            {t('hero.title')}
          </motion.h1>
          
          <motion.p variants={itemVariants}>
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            variants={itemVariants}
          >
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('servicios')}
            >
              {t('hero.cta_services')}
            </button>
            <button 
              className="btn-secondary"
              onClick={() => scrollToSection('contacto')}
            >
              {t('hero.cta_contact')}
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 100
          }}
        >
          <div className="hero-graphic">
            <motion.i 
              className="fas fa-laptop-code"
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 