import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const itServices = [
    {
      icon: 'fas fa-cloud',
      title: t('services.it_services.cloud.title'),
      description: t('services.it_services.cloud.description')
    },
    {
      icon: 'fas fa-shield-alt',
      title: t('services.it_services.security.title'),
      description: t('services.it_services.security.description')
    },
    {
      icon: 'fas fa-code',
      title: t('services.it_services.development.title'),
      description: t('services.it_services.development.description')
    },
    {
      icon: 'fas fa-tools',
      title: t('services.it_services.support.title'),
      description: t('services.it_services.support.description')
    }
  ];

  const marketingServices = [
    {
      icon: 'fab fa-facebook',
      title: t('services.marketing_services.social_media.title'),
      description: t('services.marketing_services.social_media.description')
    },
    {
      icon: 'fas fa-ad',
      title: t('services.marketing_services.advertising.title'),
      description: t('services.marketing_services.advertising.description')
    },
    {
      icon: 'fas fa-chart-line',
      title: t('services.marketing_services.seo.title'),
      description: t('services.marketing_services.seo.description')
    },
    {
      icon: 'fas fa-pen-nib',
      title: t('services.marketing_services.content.title'),
      description: t('services.marketing_services.content.description')
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const ServiceCard = ({ service, index }) => (
    <motion.div
      className="service-card"
      variants={cardVariants}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.i 
        className={service.icon}
        whileHover={{ 
          scale: 1.2,
          color: "var(--secondary-color)"
        }}
        transition={{ duration: 0.3 }}
      />
      <h4>{service.title}</h4>
      <p>{service.description}</p>
    </motion.div>
  );

  return (
    <section id="servicios" className="services" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2>{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </motion.div>
        
        <div className="services-grid">
          {/* Servicios IT */}
          <div className="service-category">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <i className="fas fa-server"></i> {t('services.it_title')}
            </motion.h3>
            <motion.div 
              className="service-cards"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {itServices.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Marketing Digital */}
          <div className="service-category">
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <i className="fas fa-bullhorn"></i> {t('services.marketing_title')}
            </motion.h3>
            <motion.div 
              className="service-cards"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {marketingServices.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 