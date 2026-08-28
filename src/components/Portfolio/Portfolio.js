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
      id: 13,
      title: {
        en: "Onyx Mobile Detailing — Booking & Operations Platform",
        es: "Onyx Mobile Detailing — Plataforma de reservas y operación"
      },
      description: {
        en: "Onyx Mobile Detailing is a production Next.js 16 application built end-to-end for a real mobile detailing business: a bilingual marketing site, a 5-step booking wizard backed by live Square availability with an online-or-pay-later checkout choice, and a full admin back office — all kept in sync with the owner's Square app, deployed with its own domain and CI/CD.",
        es: "Onyx Mobile Detailing es una aplicación Next.js 16 en producción, construida de punta a punta para un negocio real de detailing móvil: sitio bilingüe, wizard de reserva con disponibilidad real de Square y pago en línea o después del trabajo, y panel de administración completo — todo sincronizado con la app de Square del dueño, desplegado con dominio propio y CI/CD."
      },
      category: "web-development",
      images: [
        "/images/Onyx/01-home.png",
        "/images/Onyx/02-services.png",
        "/images/Onyx/03-add-ons.png",
        "/images/Onyx/04-gallery.png",
        "/images/Onyx/05-about.png",
        "/images/Onyx/06-contact.png",
        "/images/Onyx/07-home-es.png",
        "/images/Onyx/08-book-step1-vehicle.png",
        "/images/Onyx/09-book-step2-addons.png",
        "/images/Onyx/10-book-step3-datetime.png",
        "/images/Onyx/11-sign-in.png",
        "/images/Onyx/12-admin-login.png"
      ],
      technologies: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Square API", "NextAuth", "Tailwind"],
      results: {
        en: "Live Square-synced booking engine, own domain & CI/CD",
        es: "Motor de reservas en vivo sincronizado con Square, dominio propio y CI/CD"
      },
      link: "https://www.onyxmobiledetailers.com/"
    },
    {
      id: 8,
      title: {
        en: "TaskForge — Work-order & Operations SaaS",
        es: "TaskForge — SaaS de órdenes de trabajo y operaciones"
      },
      description: {
        en: "TaskForge is a full-stack operations SaaS with Kanban boards, dashboards, role-based access, asset tracking, and real-time notifications. Built with NestJS, PostgreSQL, React, and Flutter — designed for concurrent multi-user workflows within each organization.",
        es: "TaskForge es un SaaS full-stack de gestión operativa con Kanban, dashboard, roles, activos y notificaciones en tiempo real. Incluye API NestJS + PostgreSQL, cliente web React y app Flutter, pensado para varios usuarios concurrentes en la misma organización."
      },
      category: "web-development",
      images: [
        "/images/TaskForge/02-dashboard.png",
        "/images/TaskForge/01-login.png",
        "/images/TaskForge/03-activity.png",
        "/images/TaskForge/04-kanban.png",
        "/images/TaskForge/05-teams.png",
        "/images/TaskForge/06-departments.png",
        "/images/TaskForge/08-users-roles.png",
        "/images/TaskForge/09-reports.png",
        "/images/TaskForge/10-create-task.png",
        "/images/TaskForge/12-settings.png",
        "/images/TaskForge/13-profile.png",
        "/images/TaskForge/14-edit-profile.png",
        "/images/TaskForge/16-task-detail.png",
        "/images/TaskForge/17-edit-task.png"
      ],
      technologies: ["NestJS", "Prisma", "PostgreSQL", "React", "TypeScript", "Flutter", "Socket.IO"],
      results: {
        en: "Multi-tenant Kanban, live ops & reporting",
        es: "Kanban multi-tenant, ops en vivo y reportes"
      },
      link: "#"
    },
    {
      id: 12,
      title: {
        en: "Digital Commerce — Luxury Fragrance Headless Store",
        es: "Digital Commerce — E-commerce headless de fragancias"
      },
      description: {
        en: "Digital Commerce is a headless luxury-fragrance commerce stack: a branded Next.js storefront (“The Scented” Digital Sommelier), a Medusa API, and a Gatsby admin for orders, catalog, and multi-region/currency ops—with EN/ES i18n and Stripe-ready checkout.",
        es: "Digital Commerce es una plataforma headless de e-commerce orientada a perfumería de lujo: storefront “The Scented” (Next.js) con experiencia editorial y sommelier digital, API Medusa y panel admin Gatsby para operar pedidos, catálogo y configuración multi-región/moneda, con i18n EN/ES y pagos Stripe."
      },
      category: "web-development",
      images: [
        "/images/Digital_Commerce/01-home.png",
        "/images/Digital_Commerce/02-store.png",
        "/images/Digital_Commerce/03-library.png",
        "/images/Digital_Commerce/04-product-detail.png",
        "/images/Digital_Commerce/05-cart.png",
        "/images/Digital_Commerce/06-checkout.png",
        "/images/Digital_Commerce/07-account-login.png",
        "/images/Digital_Commerce/08-account.png",
        "/images/Digital_Commerce/09-account-profile.png",
        "/images/Digital_Commerce/10-account-orders.png",
        "/images/Digital_Commerce/11-account-addresses.png",
        "/images/Digital_Commerce/12-admin-login.png",
        "/images/Digital_Commerce/13-admin-orders.png",
        "/images/Digital_Commerce/14-admin-draft-orders.png",
        "/images/Digital_Commerce/15-admin-products.png",
        "/images/Digital_Commerce/16-admin-customers.png",
        "/images/Digital_Commerce/17-admin-discounts.png",
        "/images/Digital_Commerce/18-admin-gift-cards.png",
        "/images/Digital_Commerce/19-admin-pricing.png",
        "/images/Digital_Commerce/20-admin-settings.png",
        "/images/Digital_Commerce/21-admin-settings-regions.png",
        "/images/Digital_Commerce/22-admin-settings-currencies.png",
        "/images/Digital_Commerce/23-admin-settings-details.png",
        "/images/Digital_Commerce/24-admin-settings-return-reasons.png",
        "/images/Digital_Commerce/25-admin-settings-team.png",
        "/images/Digital_Commerce/26-admin-settings-personal.png",
        "/images/Digital_Commerce/27-admin-settings-taxes.png",
        "/images/Digital_Commerce/28-admin-order-detail.png",
        "/images/Digital_Commerce/29-admin-product-detail.png"
      ],
      technologies: ["Medusa", "Next.js", "Gatsby", "Stripe", "Tailwind", "i18next"],
      results: {
        en: "Storefront + admin, multi-region & Stripe",
        es: "Storefront + admin, multi-región y Stripe"
      },
      link: "#"
    },
    {
      id: 11,
      title: {
        en: "Tus Servicios — Errands, Shipments & Payments App",
        es: "Tus Servicios — App de trámites, envíos y pagos"
      },
      description: {
        en: "Tus Servicios is a Flutter app for requesting and tracking local errands and paperwork (medicine pickup, filings, deliveries, and more), including support tickets, payments, and notifications. It was upgraded to Dart 3/GetX and ships with mock data so the portfolio demo works without a live GraphQL backend.",
        es: "Tus Servicios es una app Flutter para solicitar y seguir trámites urbanos (medicamentos, radicaciones, envíos y más), con soporte, pagos y notificaciones. El proyecto se modernizó a Dart 3/GetX y puede demostrarse con datos mock cuando el GraphQL remoto no está disponible."
      },
      category: "mobile-development",
      images: [
        "/images/TuServicios/02-dashboard.png",
        "/images/TuServicios/01-login.png",
        "/images/TuServicios/03-profile.png",
        "/images/TuServicios/04-procedures.png",
        "/images/TuServicios/05-procedure-details.png",
        "/images/TuServicios/06-support.png",
        "/images/TuServicios/07-support-add.png",
        "/images/TuServicios/08-support-details.png",
        "/images/TuServicios/09-payment-history.png",
        "/images/TuServicios/10-payments.png",
        "/images/TuServicios/11-shipments.png",
        "/images/TuServicios/12-shipment-details.png",
        "/images/TuServicios/13-notifications.png"
      ],
      technologies: ["Flutter", "Dart 3", "GetX", "GraphQL", "Google Maps", "Geolocator"],
      results: {
        en: "Errands, shipments, payments & support in one flow",
        es: "Trámites, envíos, pagos y soporte en un flujo"
      },
      link: "#"
    },
    {
      id: 10,
      title: {
        en: "CentralBooks — Operations & Finance Console",
        es: "CentralBooks — Consola de operaciones y finanzas"
      },
      description: {
        en: "CentralBooks is a full-stack platform for a single-owner LLC that runs international transfers, mobile recharges, expenses, couriers, and taxes. It ships a Next.js admin console, a NestJS/Prisma API, and a Flutter companion for admin and courier roles—margins, receipts, and operational workflow in one product.",
        es: "CentralBooks es una plataforma full-stack para una LLC que gestiona transferencias internacionales, recargas, gastos, mensajeros e impuestos. Incluye panel web (Next.js), API NestJS/Prisma y app Flutter para admin y courier, con márgenes, comprobantes y flujo operativo en un solo producto."
      },
      category: "web-development",
      images: [
        "/images/CentralBooks/02-dashboard.png",
        "/images/CentralBooks/01-login.png",
        "/images/CentralBooks/03-transfers.png",
        "/images/CentralBooks/04-recharges.png",
        "/images/CentralBooks/05-expenses.png",
        "/images/CentralBooks/06-users.png",
        "/images/CentralBooks/07-beneficiaries.png",
        "/images/CentralBooks/08-taxes.png",
        "/images/CentralBooks/09-reports.png",
        "/images/CentralBooks/10-settings.png",
        "/images/CentralBooks/11-receipts.png"
      ],
      technologies: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Flutter", "Tailwind"],
      results: {
        en: "Transfers, margins, receipts & courier ops",
        es: "Transferencias, márgenes, recibos y mensajeros"
      },
      link: "#"
    },
    {
      id: 9,
      title: {
        en: "Crimson Ascension — Space Strategy MMO (In Development)",
        es: "Crimson Ascension — MMO de estrategia espacial (En desarrollo)"
      },
      description: {
        en: "Crimson Ascension is a full-stack space strategy MMO still in active development: colonies, fleets, alliances, and a tick-driven galaxy on NestJS + PostgreSQL, paired with a Next.js tactical command UI (EN/ES). Hangar, combat simulation, planetary defense network, and galaxy browser are playable in demo form as the game continues to evolve.",
        es: "Crimson Ascension es un MMO de estrategia espacial full-stack aún en fase de desarrollo: colonias, flotas, alianzas y un universo por ticks sobre NestJS + PostgreSQL, con una UI Next.js de mando táctico (EN/ES). Incluye hangar, simulación, red de defensa planetaria y explorador de galaxias jugables en demo mientras el juego sigue evolucionando."
      },
      category: "game",
      images: [
        "/images/Crimsom_Ascension/07-dashboard.png",
        "/images/Crimsom_Ascension/01-login.png",
        "/images/Crimsom_Ascension/02-register.png",
        "/images/Crimsom_Ascension/03-recover-password.png",
        "/images/Crimsom_Ascension/04-auth.png",
        "/images/Crimsom_Ascension/05-select-caste.png",
        "/images/Crimsom_Ascension/06-select-caste-detail.png",
        "/images/Crimsom_Ascension/08-colonies.png",
        "/images/Crimsom_Ascension/09-colony-detail.png",
        "/images/Crimsom_Ascension/10-colony-infrastructure.png",
        "/images/Crimsom_Ascension/11-colony-buildings.png",
        "/images/Crimsom_Ascension/12-constructions.png",
        "/images/Crimsom_Ascension/13-alliances.png",
        "/images/Crimsom_Ascension/14-alliance-create.png",
        "/images/Crimsom_Ascension/15-alliance-detail.png",
        "/images/Crimsom_Ascension/16-fleet.png",
        "/images/Crimsom_Ascension/17-fleet-hangar.png",
        "/images/Crimsom_Ascension/18-fleet-defense.png",
        "/images/Crimsom_Ascension/19-fleet-simulation.png",
        "/images/Crimsom_Ascension/20-market.png",
        "/images/Crimsom_Ascension/21-intel.png",
        "/images/Crimsom_Ascension/22-ranking.png",
        "/images/Crimsom_Ascension/23-caste-profile.png",
        "/images/Crimsom_Ascension/24-research.png",
        "/images/Crimsom_Ascension/25-galaxies.png",
        "/images/Crimsom_Ascension/26-events.png",
        "/images/Crimsom_Ascension/27-season.png",
        "/images/Crimsom_Ascension/28-action-queue.png",
        "/images/Crimsom_Ascension/29-settings.png",
        "/images/Crimsom_Ascension/30-player-profile.png",
        "/images/Crimsom_Ascension/31-admin-telemetry.png",
        "/images/Crimsom_Ascension/32-home-redirect.png"
      ],
      technologies: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Redis", "Three.js", "Tailwind"],
      results: {
        en: "In development — tick galaxy, fleets & alliances",
        es: "En desarrollo — galaxia por ticks, flotas y alianzas"
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
    { key: 'mobile-development', label: { en: 'Mobile Apps', es: 'Apps Móviles' } },
    { key: 'game', label: { en: 'Games', es: 'Juegos' } }
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
                      <div className="project-actions">
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
                        {project.images && project.images.length > 0 && project.link && project.link !== '#' && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link project-link-secondary"
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