# PROJECT.md — Portfolio brief

## Nombre

**Digital Commerce / The Scented**

## Tagline

Headless commerce for luxury fragrance — storefront *Digital Sommelier* + admin operations console.

## Problema / Solución

**Problema:** Montar un e-commerce de nicho (perfumería) con experiencia de marca premium, catálogo multi-variante, checkout real y un back-office operable, sin atarse a un monolito SaaS cerrado.

**Solución:** Plataforma headless basada en **Medusa**: API en Node, **storefront Next.js** con UI editorial oscura (“The Scented”), e **admin Gatsby** multi-idioma para pedidos, catálogo, clientes, precios, regiones e impuestos. Pagos Stripe/manual, envíos manuales, i18n EN/ES.

## Rol

Full-stack / product engineering — integración Medusa, storefront de marca, admin operable, i18n, seed de catálogo perfume y flujos de carrito/checkout.

## Stack

| Capa | Tecnología |
|------|------------|
| API | Medusa (Node.js), TypeORM, SQLite/Postgres |
| Storefront | Next.js 12, React 17, Tailwind, medusa-js / medusa-react, i18next |
| Admin | Gatsby 4, React, Tailwind, medusa-react, i18next |
| Pagos | Stripe + medusa-payment-manual |
| Email (opcional) | SendGrid plugin |
| Capturas | Playwright (Chromium), viewport 1440×900, `fullPage: true` |

## Features

- Catálogo de fragancias con variantes por volumen, precios multi-moneda (USD/EUR)
- Home / Explore / Library con búsqueda y quick-buy
- Carrito y checkout multi-paso (envío → entrega → pago)
- Cuenta cliente: perfil, pedidos, direcciones
- Admin: pedidos (fulfillment/pago), productos, clientes, descuentos, gift cards, price lists
- Ajustes: regiones, monedas, impuestos, return reasons, equipo
- i18n EN/ES en storefront y admin

## Highlights técnicos

- Arquitectura **headless** Medusa + dos frontends (tienda vs ops)
- Proxy mismo-origen en storefront (`/api/medusa` → `:9000`) y admin (`/__medusa`) para cookies de sesión
- UI de marca “Digital Sommelier” (dark + gold) frente a admin light operativo
- Seed de catálogo perfume (`backend/data/seed.json` / `seed-products`)
- Locale forzado a **EN** en capturas (`/en` + `admin-locale=en`); la UI también soporta ES

## URLs locales (demo)

| Servicio | URL |
|----------|-----|
| Storefront (`BASE_URL`) | http://127.0.0.1:8000 |
| Admin (`ADMIN_URL`) | http://localhost:7000 *(Gatsby escucha en `::1`; preferir `localhost`)* |
| API (`API_URL`) | http://127.0.0.1:9000 |

## Credenciales demo

| Rol | Email | Password |
|-----|-------|----------|
| Admin | `admin@oceansoft.io` | `supersecret` |
| Cliente storefront | `demo.port@oceansoft.io` | `supersecret` |

> Admin seed: `backend/README.md` / `backend/data/seed.json`. Cliente creado para capturas de cuenta (o vía `POST /store/customers`).

## Índice de capturas

Ver [INDEX.md](./INDEX.md) — **29** pantallas en orden de flujo (storefront → admin).

Omitidas a propósito: colecciones vacías sin datos seed; pantallas 404/error.

## Párrafo corto (ES)

Digital Commerce es una plataforma headless de e-commerce orientada a perfumería de lujo: storefront “The Scented” (Next.js) con experiencia editorial y sommelier digital, API Medusa y panel admin Gatsby para operar pedidos, catálogo y configuración multi-región/moneda, con i18n EN/ES y pagos Stripe.

## Short paragraph (EN)

Digital Commerce is a headless luxury-fragrance commerce stack: a branded Next.js storefront (“The Scented” Digital Sommelier), a Medusa API, and a Gatsby admin for orders, catalog, and multi-region/currency ops—with EN/ES i18n and Stripe-ready checkout.

## Cómo regenerar las capturas

1. Levantar servicios:
   ```bash
   cd backend && npm run dev          # :9000
   cd storefront && npm run dev       # 127.0.0.1:8000
   cd admin && npm run dev            # localhost:7000
   ```
2. Instalar Playwright (una vez):
   ```bash
   cd screenshots
   npm install
   npx playwright install chromium
   ```
3. Capturar:
   ```bash
   npm run capture
   # Detalles admin (pedido/producto) si hace falta:
   node capture-details.mjs
   ```
4. Variables opcionales: `BASE_URL`, `ADMIN_URL`, `API_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `CUSTOMER_EMAIL`, `CUSTOMER_PASSWORD`, `PRODUCT_HANDLE`.

Salida: PNG numerados + `INDEX.md` + `_manifest.json` en esta carpeta.
