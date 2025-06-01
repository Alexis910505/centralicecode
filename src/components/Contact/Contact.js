import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: t('contact.info.email'),
      content: 'centralizedcode@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: t('contact.info.phone'),
      content: '7865697502'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: t('contact.info.location'),
      content: 'Miami, Florida, USA'
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-linkedin', href: '#' },
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-facebook', href: '#' },
    { icon: 'fab fa-instagram', href: '#' }
  ];

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simular envío del formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      showNotification(t('contact.form.notifications.success'), 'success');
      reset();
    } catch (error) {
      showNotification(t('contact.form.notifications.error'), 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <>
      <section id="contacto" className="contact" ref={ref}>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.subtitle')}</p>
          </motion.div>
          
          <div className="contact-content">
            <motion.div 
              className="contact-info"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="contact-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <i className={info.icon}></i>
                  <div>
                    <h4>{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                </motion.div>
              ))}
              
              <motion.div 
                className="social-links"
                variants={itemVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -3,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.form 
              className="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder={t('contact.form.name')}
                  {...register('nombre', { required: t('contact.form.errors.name_required') })}
                  className={errors.nombre ? 'error' : ''}
                />
                {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  placeholder={t('contact.form.email')}
                  {...register('email', { 
                    required: t('contact.form.errors.email_required'),
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: t('contact.form.errors.email_invalid')
                    }
                  })}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  placeholder={t('contact.form.phone')}
                  {...register('telefono')}
                />
              </div>
              
              <div className="form-group">
                <select 
                  {...register('servicio', { required: t('contact.form.errors.service_required') })}
                  className={errors.servicio ? 'error' : ''}
                >
                  <option value="">{t('contact.form.service_options.placeholder')}</option>
                  <option value="it">{t('contact.form.service_options.it')}</option>
                  <option value="marketing">{t('contact.form.service_options.marketing')}</option>
                  <option value="both">{t('contact.form.service_options.both')}</option>
                </select>
                {errors.servicio && <span className="error-message">{errors.servicio.message}</span>}
              </div>
              
              <div className="form-group">
                <textarea
                  placeholder={t('contact.form.message')}
                  rows="5"
                  {...register('mensaje', { required: t('contact.form.errors.message_required') })}
                  className={errors.mensaje ? 'error' : ''}
                ></textarea>
                {errors.mensaje && <span className="error-message">{errors.mensaje.message}</span>}
              </div>
              
              <motion.button 
                type="submit"
                className={`btn-primary ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Notification */}
      {notification && (
        <motion.div 
          className={`notification notification-${notification.type}`}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
        >
          <div className="notification-content">
            <i className={`fas ${notification.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
            <span>{notification.message}</span>
            <button 
              className="notification-close"
              onClick={() => setNotification(null)}
            >
              &times;
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Contact; 