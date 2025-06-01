import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import './Portfolio.css';

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 1,
      title: {
        en: "E-commerce Platform",
        es: "Plataforma E-commerce"
      },
      description: {
        en: "Complete online store with payment integration and inventory management",
        es: "Tienda online completa con integración de pagos y gestión de inventario"
      },
      category: "web-development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      results: {
        en: "300% increase in sales",
        es: "300% aumento en ventas"
      },
      link: "#"
    },
    {
      id: 2,
      title: {
        en: "Digital Marketing Campaign",
        es: "Campaña de Marketing Digital"
      },
      description: {
        en: "SEO and social media strategy that boosted organic traffic significantly",
        es: "Estrategia SEO y redes sociales que incrementó significativamente el tráfico orgánico"
      },
      category: "digital-marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEO"],
      results: {
        en: "250% traffic increase",
        es: "250% aumento en tráfico"
      },
      link: "#"
    },
    {
      id: 3,
      title: {
        en: "Mobile Application",
        es: "Aplicación Móvil"
      },
      description: {
        en: "Cross-platform mobile app for delivery services with real-time tracking",
        es: "App móvil multiplataforma para servicios de delivery con rastreo en tiempo real"
      },
      category: "mobile-development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Maps API", "Push Notifications"],
      results: {
        en: "50k+ downloads",
        es: "50k+ descargas"
      },
      link: "#"
    },
    {
      id: 4,
      title: {
        en: "Corporate Website",
        es: "Sitio Web Corporativo"
      },
      description: {
        en: "Professional corporate website with content management system",
        es: "Sitio web corporativo profesional con sistema de gestión de contenido"
      },
      category: "web-development",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["WordPress", "Custom Theme", "SEO", "Analytics"],
      results: {
        en: "Enhanced brand presence",
        es: "Mejor presencia de marca"
      },
      link: "#"
    },
    {
      id: 5,
      title: {
        en: "Social Media Strategy",
        es: "Estrategia de Redes Sociales"
      },
      description: {
        en: "Complete social media management with content creation and community building",
        es: "Gestión completa de redes sociales con creación de contenido y construcción de comunidad"
      },
      category: "digital-marketing",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      technologies: ["Content Creation", "Instagram", "Facebook", "LinkedIn"],
      results: {
        en: "500% engagement growth",
        es: "500% crecimiento en engagement"
      },
      link: "#"
    },
    {
      id: 6,
      title: {
        en: "Enterprise Software",
        es: "Software Empresarial"
      },
      description: {
        en: "Custom enterprise solution for workflow automation and team collaboration",
        es: "Solución empresarial personalizada para automatización y colaboración en equipo"
      },
      category: "software-development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "Django", "PostgreSQL", "Docker"],
      results: {
        en: "40% productivity increase",
        es: "40% aumento en productividad"
      },
      link: "#"
    }
  ];

  const filters = [
    { key: 'all', label: { en: 'All Projects', es: 'Todos los Proyectos' } },
    { key: 'web-development', label: { en: 'Web Development', es: 'Desarrollo Web' } },
    { key: 'digital-marketing', label: { en: 'Digital Marketing', es: 'Marketing Digital' } },
    { key: 'mobile-development', label: { en: 'Mobile Apps', es: 'Apps Móviles' } },
    { key: 'software-development', label: { en: 'Software', es: 'Software' } }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    <section className="portfolio" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2>{t('portfolio.title')}</h2>
          <p>{t('portfolio.subtitle')}</p>
        </motion.div>

        <motion.div 
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label[t('language')] || filter.label.en}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="portfolio-item"
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title[t('language')] || project.title.en} />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <h3>{project.title[t('language')] || project.title.en}</h3>
                      <p>{project.description[t('language')] || project.description.en}</p>
                      <div className="project-technologies">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <div className="project-results">
                        <i className="fas fa-chart-line"></i>
                        <span>{project.results[t('language')] || project.results.en}</span>
                      </div>
                      <motion.a
                        href={project.link}
                        className="project-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className="fas fa-external-link-alt"></i>
                        {t('portfolio.viewProject')}
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 