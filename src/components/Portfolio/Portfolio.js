import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import './Portfolio.css';

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = useMemo(() => [
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
        en: "Project P.O.P. — Logistics & Transportation Mobile App",
        es: "Project P.O.P. — App móvil para gestión logística y de transporte"
      },
      description: {
        en: "I developed a Flutter mobile application that optimizes freight and transportation management in Mexico. It registers shipments, displays optimized routes, and updates delivery status in real time, integrating geolocation and push notifications to boost traceability and operational efficiency.",
        es: "Desarrollé una aplicación móvil Flutter que optimiza la gestión de carga y transporte en México. Permite registrar envíos, visualizar rutas optimizadas y actualizar el estado de las entregas en tiempo real, integrando geolocalización y notificaciones push para mejorar la trazabilidad y eficiencia operativa."
      },
      category: "mobile-development",
      images: [
        "/images/POP/POP.png",
        "/images/POP/Desktop - 1.jpg",
        "/images/POP/Calendar_Day Expanded.png",
        "/images/POP/Calendar.png",
        "/images/POP/Calendar_Day_To Print_with printer.png",
        "/images/POP/Calendar_Day_To Print_without printer.png",
        "/images/POP/Calendar_Day_To Print_without printer-1.png"
      ],
      technologies: ["Flutter", "Firebase", "Google Maps", "Geolocalización", "Notificaciones Push"],
      results: {
        en: "Real-time tracking for nationwide freight",
        es: "Trazabilidad en tiempo real para carga nacional"
      },
      link: "#"
    },
    {
      id: 4,
      title: {
        en: "Galarraga LLC - Pediatric Clinic Website",
        es: "Galarraga LLC - Sitio Web de Clínica Pediátrica"
      },
      description: {
        en: "Bilingual (Spanish/English) website for Dr. Yolanda A. Galarraga Ramirez MD PA",
        es: "Sitio web bilingüe (Español/Inglés) para la Dra. Yolanda A. Galarraga Ramirez MD PA"
      },
      category: "web-development",
      image: "/images/hero_image.jpg",
      technologies: ["React.js 18.2.0", "JavaScript ES6+", "CSS3", "react-i18next", "GitHub Pages"],
      results: {
        en: "Professional medical presence",
        es: "Presencia médica profesional"
      },
      link: "https://www.galarragamd.com"
    },
    {
      id: 7,
      title: {
        en: "Galarraga Research - Medical Research Platform",
        es: "Galarraga Research - Plataforma de Investigación Médica"
      },
      description: {
        en: "Advanced medical research platform with access to reliable medical articles, clinical trials, and scientific reviews. Features advanced search filters by specialty, study type, and date. Database with over 50,000 medical articles from recognized medical institutions worldwide.",
        es: "Plataforma avanzada de investigación médica con acceso a artículos médicos confiables, ensayos clínicos y revisiones científicas. Incluye búsqueda avanzada con filtros por especialidad, tipo de estudio y fecha. Base de datos con más de 50,000 artículos médicos de instituciones reconocidas mundialmente."
      },
      category: "web-development",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      technologies: ["HTML5", "CSS3 (ITCSS y BEM)", "JavaScript ES6+", "i18n personalizado", "GitHub Pages"],
      results: {
        en: "50,000+ medical articles accessible",
        es: "Más de 50,000 artículos médicos accesibles"
      },
      link: "https://www.drgalallc.com/"
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
  ], []);

  const [activeImages, setActiveImages] = useState(() =>
    projects.reduce((acc, project) => {
      if (project.images && project.images.length > 0) {
        acc[project.id] = 0;
      }
      return acc;
    }, {})
  );
  const [galleryModal, setGalleryModal] = useState(null);
  const [imageZoom, setImageZoom] = useState({ scale: 1, x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleViewProject = (project, event) => {
    if (project.images && project.images.length > 0) {
      event.preventDefault();
      setGalleryModal(project);
      setActiveImages(prev => ({ ...prev, [project.id]: 0 }));
    }
  };

  const closeGalleryModal = () => {
    setGalleryModal(null);
  };

  const handleModalGalleryNavigate = (direction) => {
    if (!galleryModal) return;
    const current = activeImages[galleryModal.id] ?? 0;
    const total = galleryModal.images.length;
    const next = (current + direction + total) % total;
    setActiveImages(prev => ({ ...prev, [galleryModal.id]: next }));
    setImageZoom({ scale: 1, x: 0, y: 0 });
  };

  const handleImageZoom = (event) => {
    event.preventDefault();
    if (event.deltaY < 0) {
      setImageZoom(prev => ({
        ...prev,
        scale: Math.min(prev.scale * 1.1, 3)
      }));
    } else {
      setImageZoom(prev => ({
        ...prev,
        scale: Math.max(prev.scale / 1.1, 1),
        x: prev.scale / 1.1 <= 1 ? 0 : prev.x,
        y: prev.scale / 1.1 <= 1 ? 0 : prev.y
      }));
    }
  };

  const handleImageDoubleClick = () => {
    if (imageZoom.scale === 1) {
      setImageZoom({ scale: 2, x: 0, y: 0 });
    } else {
      setImageZoom({ scale: 1, x: 0, y: 0 });
    }
  };

  const handleMouseDown = (e) => {
    if (imageZoom.scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - imageZoom.x,
        y: e.clientY - imageZoom.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetZoom = () => {
    setImageZoom({ scale: 1, x: 0, y: 0 });
  };

  useEffect(() => {
    if (isDragging) {
      const handleMove = (e) => {
        if (isDragging && imageZoom.scale > 1) {
          setImageZoom(prev => ({
            ...prev,
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y
          }));
        }
      };
      
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart, imageZoom.scale]);

  useEffect(() => {
    if (galleryModal) {
      setImageZoom({ scale: 1, x: 0, y: 0 });
    }
  }, [galleryModal]);

  const filters = [
    { key: 'all', label: { en: 'All Projects', es: 'Todos los Proyectos' } },
    { key: 'web-development', label: { en: 'Web Development', es: 'Desarrollo Web' } },
    { key: 'mobile-development', label: { en: 'Mobile Apps', es: 'Apps Móviles' } }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects.filter(project => project.category !== 'digital-marketing' && project.category !== 'software-development')
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
              {filter.label[i18n.language] || filter.label.en}
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
                  <img
                    src={project.images && project.images.length > 0 
                      ? (project.id === 3 ? "/images/POP/POP.png" : project.images[activeImages[project.id] ?? 0])
                      : project.image}
                    alt={project.title[i18n.language] || project.title.en}
                  />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <h3>{project.title[i18n.language] || project.title.en}</h3>
                      <p>{project.description[i18n.language] || project.description.en}</p>
                      <div className="project-technologies">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <div className="project-results">
                        <i className="fas fa-chart-line"></i>
                        <span>{project.results[i18n.language] || project.results.en}</span>
                      </div>
                      {project.images && project.images.length > 0 ? (
                        <motion.button
                          type="button"
                          className="project-link"
                          onClick={(e) => handleViewProject(project, e)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="fas fa-images"></i>
                          {t('portfolio.viewGallery', { defaultValue: 'Ver Galería' })}
                        </motion.button>
                      ) : (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="fas fa-external-link-alt"></i>
                          {t('portfolio.viewProject')}
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {galleryModal && (
        <motion.div
          className="gallery-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeGalleryModal}
        >
          <motion.div
            className="gallery-modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-modal-close"
              onClick={closeGalleryModal}
              aria-label="Cerrar galería"
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="gallery-modal-header">
              <h3>{galleryModal.title[i18n.language] || galleryModal.title.en}</h3>
              <p className="gallery-counter">
                {((activeImages[galleryModal.id] ?? 0) + 1)} / {galleryModal.images.length}
              </p>
            </div>

            <div className="gallery-modal-image-container">
              <button
                className="gallery-modal-nav gallery-modal-nav-prev"
                onClick={() => handleModalGalleryNavigate(-1)}
                aria-label="Imagen anterior"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              
              <div 
                className="gallery-modal-image-wrapper"
                onWheel={handleImageZoom}
                onMouseDown={handleMouseDown}
                style={{ cursor: imageZoom.scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in' }}
              >
                <img
                  src={galleryModal.images[activeImages[galleryModal.id] ?? 0]}
                  alt={`${galleryModal.title[i18n.language] || galleryModal.title.en} - Imagen ${((activeImages[galleryModal.id] ?? 0) + 1)}`}
                  className="gallery-modal-image"
                  style={{
                    transform: `scale(${imageZoom.scale}) translate(${imageZoom.x / imageZoom.scale}px, ${imageZoom.y / imageZoom.scale}px)`,
                    transition: isDragging ? 'none' : 'transform 0.3s ease'
                  }}
                  onDoubleClick={handleImageDoubleClick}
                  draggable={false}
                />
                {imageZoom.scale > 1 && (
                  <button
                    className="gallery-zoom-reset"
                    onClick={resetZoom}
                    aria-label="Resetear zoom"
                    title="Resetear zoom"
                  >
                    <i className="fas fa-compress"></i>
                  </button>
                )}
              </div>
              
              <button
                className="gallery-modal-nav gallery-modal-nav-next"
                onClick={() => handleModalGalleryNavigate(1)}
                aria-label="Imagen siguiente"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            <div className="gallery-modal-thumbs">
              {galleryModal.images.map((image, index) => (
                <button
                  key={`modal-thumb-${index}`}
                  className={`gallery-modal-thumb ${activeImages[galleryModal.id] === index ? 'active' : ''}`}
                  onClick={() => {
                    setActiveImages(prev => ({ ...prev, [galleryModal.id]: index }));
                    resetZoom();
                  }}
                >
                  <img src={image} alt={`Miniatura ${index + 1}`} />
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio; 