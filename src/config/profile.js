// ============================================================
//  Datos personales del portafolio — edita SOLO este archivo
//  para cambiar nombre, links, cifras y experiencia.
//  Los campos marcados con TODO son placeholders.
// ============================================================

const profile = {
  name: 'Alexis Gongora Smith',
  shortName: 'Alexis',
  initials: 'AG',
  role: { en: 'Senior Full Stack Developer', es: 'Desarrollador Full Stack Senior' },
  location: 'Snowmass Village, Colorado, USA',
  email: 'alexisgongorasmith@gmail.com',
  phone: '+1 786 569 7502',
  avatar: '/images/profile.jpg', // TODO: agrega tu foto en public/images/profile.jpg
  cv: '/cv.pdf',
  cvFileName: 'Alexis_Gongora_Smith_CV.pdf', // nombre con el que se descarga
  available: true,

  social: {
    github: 'https://github.com/Alexis910505',
    linkedin: 'https://www.linkedin.com/in/alexis-gongora-smith-66a14319b/',
  },

  stats: {
    years: 8,
    projects: 20,
    technologies: 30,
    countries: 5, // USA, España, México, Chile, Cuba
  },

  heroRoles: {
    en: ['Full Stack Developer', 'Flutter Mobile Apps', 'React & Next.js', 'Node.js & NestJS APIs'],
    es: ['Desarrollador Full Stack', 'Apps móviles Flutter', 'React y Next.js', 'APIs Node.js y NestJS'],
  },

  languages: {
    en: ['Spanish — Native', 'English — Professional (B1–B2)'],
    es: ['Español — Nativo', 'Inglés — Profesional (B1–B2)'],
  },

  education: {
    degree: { en: "Bachelor's in Computer Science Engineering", es: 'Ingeniería en Ciencias Informáticas' },
    school: 'University of Informatics Sciences (UCI) — Havana, Cuba',
    year: '2016',
  },

  skills: [
    { key: 'mobile', icon: 'fas fa-mobile-alt', items: ['Flutter', 'Dart 3', 'Android', 'iOS', 'Riverpod', 'Provider', 'GetX', 'Clean Architecture'] },
    { key: 'frontend', icon: 'fas fa-desktop', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Gatsby', 'Three.js', 'i18next'] },
    { key: 'backend', icon: 'fas fa-server', items: ['Node.js', 'NestJS', 'REST APIs', 'GraphQL', 'Socket.IO', 'Medusa', 'NextAuth', 'Cloud Functions'] },
    { key: 'data', icon: 'fas fa-database', items: ['PostgreSQL', 'MySQL', 'Prisma ORM', 'Firebase / Firestore', 'Redis'] },
    { key: 'devops', icon: 'fas fa-cloud', items: ['Firebase', 'Vercel', 'Docker', 'CI/CD', 'Git', 'Agile / Scrum'] },
    { key: 'integrations', icon: 'fas fa-plug', items: ['Stripe', 'Square API', 'Payment Gateways', 'Google Maps API', 'Geolocation', 'Push Notifications', 'Deep Linking', 'OAuth'] },
  ],

  // Experiencia (más reciente primero)
  experience: [
    {
      period: { en: '2024 — Present', es: '2024 — Presente' },
      role: { en: 'Founder & Full Stack Developer', es: 'Fundador y Desarrollador Full Stack' },
      company: 'Centralized Code LLC · Miami, USA',
      highlights: {
        en: [
          'Onyx Mobile Detailing: Next.js 16 booking platform synced in real time with Square, own domain & CI/CD',
          'Kido EdTech: Next.js teacher console + Flutter app on a shared Firebase backend (EN/ES/PT)',
          'TaskForge: multi-tenant operations SaaS with NestJS, PostgreSQL, React, Flutter and Socket.IO',
        ],
        es: [
          'Onyx Mobile Detailing: plataforma de reservas Next.js 16 sincronizada en vivo con Square, dominio propio y CI/CD',
          'Kido EdTech: consola docente Next.js + app Flutter sobre un backend Firebase compartido (EN/ES/PT)',
          'TaskForge: SaaS operativo multi-tenant con NestJS, PostgreSQL, React, Flutter y Socket.IO',
        ],
      },
      tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Flutter', 'Firebase'],
    },
    {
      period: { en: 'Mar 2023 — Feb 2024', es: 'Mar 2023 — Feb 2024' },
      role: { en: 'Mobile Software Developer', es: 'Desarrollador de Software Móvil' },
      company: 'EncodeBiz · Spain (Remote)',
      highlights: {
        en: [
          'Led development of a sports event management platform running simultaneous tournaments across multiple locations',
          'Designed a scalable Flutter architecture integrated with Firebase and backend services',
          'Coordinated feature planning, user management, authentication and real-time sync',
        ],
        es: [
          'Lideré el desarrollo de una plataforma de gestión de eventos deportivos con torneos simultáneos en varias sedes',
          'Diseñé una arquitectura Flutter escalable integrada con Firebase y servicios backend',
          'Coordiné planificación de features, gestión de usuarios, autenticación y sincronización en tiempo real',
        ],
      },
      tags: ['Flutter', 'Firebase', 'Clean Architecture'],
    },
    {
      period: { en: 'Apr 2022 — Dec 2022', es: 'Abr 2022 — Dic 2022' },
      role: { en: 'Software Engineer', es: 'Ingeniero de Software' },
      company: 'idooGROUP Technologies · Mexico (Remote)',
      highlights: {
        en: [
          'Built a logistics app for battery distribution operations',
          'Implemented geolocation tracking, route management and delivery monitoring',
          'Integrated Firebase services, push notifications and REST APIs',
        ],
        es: [
          'Desarrollé una app logística para operaciones de distribución de baterías',
          'Implementé rastreo por geolocalización, gestión de rutas y monitoreo de entregas',
          'Integré servicios Firebase, notificaciones push y APIs REST',
        ],
      },
      tags: ['Flutter', 'Google Maps', 'REST'],
    },
    {
      period: { en: 'May 2021 — May 2022', es: 'May 2021 — May 2022' },
      role: { en: 'Mobile Software Developer', es: 'Desarrollador de Software Móvil' },
      company: 'EVSY · Chile (Remote)',
      highlights: {
        en: [
          'Developed the official EV charging app: charger discovery, session management and history',
          'Implemented payment processing, geolocation and real-time charging operations',
        ],
        es: [
          'Desarrollé la app oficial de carga de vehículos eléctricos: búsqueda de cargadores, sesiones e historial',
          'Implementé procesamiento de pagos, geolocalización y operaciones de carga en tiempo real',
        ],
      },
      tags: ['Flutter', 'Payments', 'Geolocation'],
    },
    {
      period: { en: 'Sep 2020 — Apr 2021', es: 'Sep 2020 — Abr 2021' },
      role: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
      company: 'Sponges · United States (Remote)',
      highlights: {
        en: [
          'Built a marketplace connecting customers with service providers via real-time booking',
          'Delivered mobile frontend and backend with Flutter, Node.js, Firebase and MySQL',
        ],
        es: [
          'Construí un marketplace que conecta clientes con proveedores mediante reservas en tiempo real',
          'Entregué frontend móvil y backend con Flutter, Node.js, Firebase y MySQL',
        ],
      },
      tags: ['Flutter', 'Node.js', 'MySQL', 'Firebase'],
    },
    {
      period: { en: 'Jul 2020 — Oct 2022', es: 'Jul 2020 — Oct 2022' },
      role: { en: 'Software Engineer (Freelance)', es: 'Ingeniero de Software (Freelance)' },
      company: 'P.O.P. Logistics · Oxygen · SwinDrinks',
      highlights: {
        en: [
          'P.O.P.: transportation management platform with route optimization and real-time delivery tracking',
          'Oxygen: music streaming app with playlists, discovery and real-time playback',
          'SwinDrinks: real-time digital menu and restaurant management platform',
        ],
        es: [
          'P.O.P.: plataforma de gestión de transporte con optimización de rutas y rastreo de entregas en vivo',
          'Oxygen: app de streaming musical con playlists, descubrimiento y reproducción en tiempo real',
          'SwinDrinks: menú digital en tiempo real y plataforma de gestión para restaurantes',
        ],
      },
      tags: ['Flutter', 'Firebase', 'Push'],
    },
    {
      period: { en: '2017 — 2020', es: '2017 — 2020' },
      role: { en: 'Mobile Software Developer', es: 'Desarrollador de Software Móvil' },
      company: 'Bios Technology Center · XETID',
      highlights: {
        en: [
          'Contributed to ENZONA, one of Cuba’s largest digital payment ecosystems',
          'Built apps for sports analytics, education, e-commerce and environmental monitoring',
        ],
        es: [
          'Contribuí a ENZONA, uno de los mayores ecosistemas de pagos digitales de Cuba',
          'Desarrollé apps de analítica deportiva, educación, e-commerce y monitoreo ambiental',
        ],
      },
      tags: ['Android', 'Fintech'],
    },
  ],
};

export default profile;
