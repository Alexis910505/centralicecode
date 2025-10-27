import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import './Testimonials.css';

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      id: 1,
      name: "María González",
      position: "CEO, TechStart Solutions",
      content: {
        en: "Centralized Code transformed our digital presence completely. Their expertise in both IT and marketing delivered results beyond our expectations.",
        es: "Centralized Code transformó completamente nuestra presencia digital. Su experiencia en IT y marketing superó todas nuestras expectativas."
      },
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b884?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      company: "TechStart Solutions"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      position: "Director de Marketing, InnovaCorp",
      content: {
        en: "Professional, reliable, and innovative. They developed our website and managed our digital campaigns with exceptional quality.",
        es: "Profesionales, confiables e innovadores. Desarrollaron nuestro sitio web y gestionaron nuestras campañas digitales con calidad excepcional."
      },
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      company: "InnovaCorp"
    },
    {
      id: 3,
      name: "Ana Martínez",
      position: "Fundadora, Digital Ventures",
      content: {
        en: "Amazing team! They understood our vision and created a perfect solution. Our sales increased by 300% after their digital strategy implementation.",
        es: "¡Equipo increíble! Entendieron nuestra visión y crearon una solución perfecta. Nuestras ventas aumentaron 300% después de implementar su estrategia digital."
      },
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      company: "Digital Ventures"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="testimonials" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2>{t('testimonials.title')}</h2>
          <p>{t('testimonials.subtitle')}</p>
        </motion.div>

        <motion.div 
          className="testimonials-container"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="testimonial-navigation"
            variants={itemVariants}
          >
            <button 
              className="nav-btn prev"
              onClick={prevTestimonial}
              aria-label="Testimonio anterior"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <button 
              className="nav-btn next"
              onClick={nextTestimonial}
              aria-label="Siguiente testimonio"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="testimonial-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                
                <p className="testimonial-text">
                  {current.content[i18n.language] || current.content.en}
                </p>
                
                <div className="testimonial-rating">
                  {[...Array(current.rating)].map((_, i) => (
                    <motion.i
                      key={i}
                      className="fas fa-star"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={current.avatar} alt={current.name} />
                </div>
                <div className="author-info">
                  <h4>{current.name}</h4>
                  <p>{current.position}</p>
                  <span className="company">{current.company}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div 
            className="testimonial-indicators"
            variants={itemVariants}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 