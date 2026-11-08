import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import './Portfolio.css';

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en';
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
      id: 14,
      title: {
        en: "Kido EdTech — Teacher Console",
        es: "Kido EdTech — Consola Docente"
      },
      description: {
        en: "Kido is a K-12 education platform with a Next.js teacher console and a Flutter mobile app sharing one Firebase backend. Plan units (UbD: annual plan → unit → lesson → board), run a live gradebook that feeds an auto-generated report card, and message entire classes — all in real time via Firestore, with instantly-switchable EN/ES/PT localization and a Zoom OAuth integration for video classes.",
        es: "Kido es una plataforma educativa K-12 con una consola docente en Next.js y una app móvil en Flutter sobre un mismo backend Firebase. Permite planificar unidades (UbD: plan anual → unidad → lección → tablero), llevar una libreta de calificaciones en vivo que alimenta un boletín automático, y comunicarse con las clases — todo en tiempo real vía Firestore, con localización EN/ES/PT de cambio instantáneo e integración OAuth con Zoom para videoclases."
      },
      category: "web-development",
      images: [
        "/images/Kido/01-login.png",
        "/images/Kido/02-sign-up.png",
        "/images/Kido/03-forgot-password.png",
        "/images/Kido/04-dashboard-home.png",
        "/images/Kido/05-messages.png",
        "/images/Kido/06-calendar.png",
        "/images/Kido/07-schedule.png",
        "/images/Kido/08-forum.png",
        "/images/Kido/09-chat.png",
        "/images/Kido/10-planning.png",
        "/images/Kido/11-subjects.png",
        "/images/Kido/12-groups.png",
        "/images/Kido/13-classes.png",
        "/images/Kido/14-notes.png",
        "/images/Kido/15-gradebook.png",
        "/images/Kido/16-report-card.png",
        "/images/Kido/17-whiteboard.png",
        "/images/Kido/18-profile.png",
        "/images/Kido/19-settings.png",
        "/images/Kido/20-help.png"
      ],
      technologies: ["Next.js 16", "TypeScript", "Tailwind", "Firebase", "Flutter", "Cloud Functions"],
      results: {
        en: "Live-synced teacher console + mobile app, one shared Firebase backend",
        es: "Consola docente + app móvil en vivo, un mismo backend Firebase"
      },
      link: "https://www.kidoedtech.com/"
    },
    {
      id: 15,
      title: {
        en: "Isla Market — Multi-vendor Marketplace for Cuba",
        es: "Isla Market — Marketplace multi-vendedor para Cuba"
      },
      description: {
        en: "Isla Market is a production multi-vendor marketplace: verified stores publish their catalog, buyers shop with cart, coupons and per-store payment methods, and every order is tracked through shipping, cancellations, returns and disputes. A NestJS + Prisma API with a 46-model PostgreSQL schema handles orders, payments, wallets, seller commissions and ledgers, chat, reviews, Q&A and email/push notifications, serving a React web store and a Flutter mobile app with Firebase Auth.",
        es: "Isla Market es un marketplace multi-vendedor en producción: tiendas verificadas publican su catálogo y los compradores compran con carrito, cupones y el método de pago que elige cada tienda, con seguimiento de cada pedido, cancelaciones, devoluciones y disputas. Una API NestJS + Prisma con un esquema PostgreSQL de 46 modelos gestiona pedidos, pagos, billeteras, comisiones y contabilidad de vendedores, chat, reseñas, preguntas y avisos por email y push, y sirve a una tienda web React y una app móvil Flutter con Firebase Auth."
      },
      category: "web-development",
      images: [
        "/images/IslaMarket/02-home-sections.png",
        "/images/IslaMarket/01-home.png",
        "/images/IslaMarket/04-catalog.png",
        "/images/IslaMarket/06-product.png",
        "/images/IslaMarket/07-product-details.png",
        "/images/IslaMarket/08-product-2.png",
        "/images/IslaMarket/10-product-3.png",
        "/images/IslaMarket/09-store.png",
        "/images/IslaMarket/05-search.png",
        "/images/IslaMarket/03-home-deals.png",
        "/images/IslaMarket/11-collections.png",
        "/images/IslaMarket/12-login.png"
      ],
      technologies: ["NestJS", "Prisma", "PostgreSQL", "React", "Vite", "Flutter", "Firebase Auth", "Swagger"],
      results: {
        en: "Full marketplace: orders, payments, commissions, disputes & returns",
        es: "Marketplace completo: pedidos, pagos, comisiones, disputas y devoluciones"
      },
      link: "https://islamarket-cu.vercel.app/"
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
      id: 16,
      title: {
        en: "Snowmass Transit — Real-time Fleet & Route Tracking",
        es: "Snowmass Transit — Rastreo de flota y rutas en tiempo real"
      },
      description: {
        en: "Snowmass Transit is a transit-operations platform for Snowmass Village, Colorado. Drivers run a Flutter app that streams their GPS position; the Next.js admin panel shows every vehicle live on a map over WebSockets and manages routes, 69 stops, vehicles, drivers, scheduled trips and recurring maintenance tasks, with dashboards and CSV/PDF exports. Backend: Node.js/Express, Prisma and PostgreSQL, JWT auth with roles, Swagger docs and Firebase push notifications.",
        es: "Snowmass Transit es una plataforma de operaciones de transporte para Snowmass Village, Colorado. Los choferes usan una app Flutter que envía su posición GPS y el panel en Next.js muestra cada vehículo en vivo en el mapa vía WebSockets, además de gestionar rutas, 69 paradas, vehículos, conductores, viajes programados y tareas de mantenimiento recurrentes, con dashboards y exportación CSV/PDF. Backend: Node.js/Express, Prisma y PostgreSQL, JWT con roles, Swagger y notificaciones push con Firebase."
      },
      category: "web-development",
      images: [
        "/images/SnowmassTransit/03-tracking.png",
        "/images/SnowmassTransit/01-dashboard.png",
        "/images/SnowmassTransit/02-dashboard-charts.png",
        "/images/SnowmassTransit/04-routes.png",
        "/images/SnowmassTransit/06-trips.png",
        "/images/SnowmassTransit/05-drivers.png",
        "/images/SnowmassTransit/07-maintenance.png"
      ],
      technologies: ["Next.js", "Node.js", "Express", "Socket.IO", "Prisma", "PostgreSQL", "Leaflet", "Flutter"],
      results: {
        en: "Live GPS tracking for a mountain-town bus fleet",
        es: "Rastreo GPS en vivo de la flota de buses de un pueblo de montaña"
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
      id: 17,
      title: {
        en: "Arena Stack — Dota 2 Tournament Analytics & Discord Bots",
        es: "Arena Stack — Analítica de torneos de Dota 2 y bots de Discord"
      },
      description: {
        en: "Arena Stack turns official Dota 2 replays into stats for a gaming community: players upload a .dem file and a Go parser (dotabuff/manta) extracts picks and bans, K/D/A, gold and XP timelines, items and minute-by-minute events. The site adds tournaments, hero meta, standings and a rating-based ELO, plus several serverless Discord bots (match rooms, announcements, moderation) and an admin panel to toggle them, all on Vercel Functions with Upstash Redis, Vercel Blob and Discord OAuth.",
        es: "Arena Stack convierte los replays oficiales de Dota 2 en estadísticas para una comunidad: los jugadores suben su archivo .dem y un parser en Go (dotabuff/manta) extrae picks y bans, K/D/A, curvas de oro y XP, items y eventos minuto a minuto. La web suma torneos, meta de héroes, clasificaciones y un ELO por rating, además de varios bots de Discord serverless (salas de partida, avisos y moderación) y un panel para activarlos, todo en Vercel Functions con Upstash Redis, Vercel Blob y login con Discord."
      },
      category: "game",
      images: [
        "/images/ArenaStack/01-home.png",
        "/images/ArenaStack/04-meta.png",
        "/images/ArenaStack/02-tournaments.png",
        "/images/ArenaStack/03-heroes.png",
        "/images/ArenaStack/05-elo.png"
      ],
      technologies: ["Node.js", "Go", "Vercel Functions", "Upstash Redis", "Discord API", "Firebase", "OpenDota API"],
      results: {
        en: "Replay parsing, tournaments, ELO & 3 Discord bots in one deploy",
        es: "Parseo de replays, torneos, ELO y 3 bots de Discord en un solo despliegue"
      },
      link: "https://discord-bot-vercel-woad.vercel.app/"
    },
    {
      id: 18,
      title: {
        en: "Cretalia — Game Server Community Platform",
        es: "Cretalia — Plataforma para servidor de juego comunitario"
      },
      description: {
        en: "Cretalia runs a community server for The Isle: Evrima. Behind the Next.js + Firebase site sits a microservice backend: a public API gateway with OpenAPI/Swagger docs, an identity service with Steam and Discord OAuth, account and commerce services that process Tebex payment webhooks (VIP queue priority and cosmetic skins), and a single game-ops gateway that owns every RCON/SSH call to the game server, so the Discord bot, web and scheduled jobs never touch it directly.",
        es: "Cretalia gestiona un servidor comunitario de The Isle: Evrima. Detrás del sitio en Next.js + Firebase hay un backend de microservicios: un gateway público con documentación OpenAPI/Swagger, un servicio de identidad con OAuth de Steam y Discord, servicios de cuenta y comercio que procesan los webhooks de pago de Tebex (prioridad VIP y skins cosméticas) y un único gateway game-ops que concentra todas las llamadas RCON/SSH al servidor de juego, así el bot de Discord, la web y los jobs nunca lo tocan directamente."
      },
      category: "game",
      images: [
        "/images/Cretalia/01-home.png",
        "/images/Cretalia/02-skins.png",
        "/images/Cretalia/03-support.png",
        "/images/Cretalia/04-rules.png",
        "/images/Cretalia/05-discord.png",
        "/images/Cretalia/06-about.png"
      ],
      technologies: ["Next.js", "Node.js", "Microservices", "OpenAPI", "Firebase", "Steam OAuth", "Discord Bot", "Tebex"],
      results: {
        en: "5 microservices behind one gateway, payments & OAuth",
        es: "5 microservicios tras un gateway, pagos y OAuth"
      },
      link: "https://web-next-jet.vercel.app/"
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
      technologies: ["React.js 18.2.0", "JavaScript ES6+", "CSS3", "react-i18next", "Vercel"],
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
      technologies: ["HTML5", "CSS3 (ITCSS y BEM)", "JavaScript ES6+", "i18n personalizado", "Vercel"],
      results: {
        en: "50,000+ medical articles accessible",
        es: "Más de 50,000 artículos médicos accesibles"
      },
      link: "https://www.drgalallc.com/"
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


  return (
    <section id="proyectos" className="portfolio section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label mono">{t('portfolio.label')}</span>
          <h2 className="section-title">{t('portfolio.title')}</h2>
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
              {filter.label[lang] || filter.label.en}
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
              <motion.article
                key={project.id}
                className="portfolio-item card"
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <button
                  type="button"
                  className={`project-image ${project.category === 'mobile-development' ? 'project-image--mobile' : ''}`}
                  onClick={(e) => project.images && project.images.length > 0 && handleViewProject(project, e)}
                  aria-label={t('portfolio.viewGallery')}
                >
                  <img
                    src={project.images && project.images.length > 0
                      ? (project.id === 3 ? "/images/POP/POP.png" : project.images[activeImages[project.id] ?? 0])
                      : project.image}
                    alt={project.title[lang] || project.title.en}
                    loading="lazy"
                  />
                  {project.images && project.images.length > 1 && (
                    <span className="project-image-count mono">
                      <i className="fas fa-images"></i> {project.images.length}
                    </span>
                  )}
                </button>

                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-category mono">
                      {(filters.find((f) => f.key === project.category)?.label[lang]) || project.category}
                    </span>
                    {project.link && project.link !== '#' && (
                      <span className="project-live mono"><span className="pulse-dot"></span>Live</span>
                    )}
                  </div>
                  <h3>{project.title[lang] || project.title.en}</h3>
                  <p>{project.description[lang] || project.description.en}</p>
                  <div className="chips">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="chip">{tech}</span>
                    ))}
                  </div>
                  <div className="project-results">
                    <i className="fas fa-bolt"></i>
                    <span>{project.results[lang] || project.results.en}</span>
                  </div>
                  <div className="project-actions">
                    {project.images && project.images.length > 0 && (
                      <button
                        type="button"
                        className="btn-secondary"
                        onClick={(e) => handleViewProject(project, e)}
                      >
                        <i className="fas fa-images"></i>
                        {t('portfolio.viewGallery')}
                      </button>
                    )}
                    {project.link && project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        {t('portfolio.viewProject')}
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
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
              <h3>{galleryModal.title[lang] || galleryModal.title.en}</h3>
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
                  alt={`${galleryModal.title[lang] || galleryModal.title.en} - Imagen ${((activeImages[galleryModal.id] ?? 0) + 1)}`}
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