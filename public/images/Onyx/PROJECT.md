# PROJECT.md — Portfolio brief

## Nombre

**Onyx Mobile Detailing**

## URL en vivo

https://onyxmobiledetailers.com

## Tagline

Plataforma full-stack de reservas y operación para un negocio de detailing automotriz móvil — agenda en tiempo real, pagos y panel de administración, construida desde cero.

## Problema / Solución

**Problema:** El negocio necesitaba más que un sitio de marketing: un motor de reservas propio que respetara la disponibilidad real de su única cuadrilla, aceptara pago en línea o en persona, y le diera al dueño un panel para operar reservas, disponibilidad, clientes y contenido sin depender de hojas de cálculo.

**Solución:** Square como fuente de verdad del calendario (para no duplicar el flujo que el dueño ya usa a diario en su celular) y una base de datos propia para todo lo que Square no modela (add-ons, direcciones, historial, analítica).

## Rol

Diseño y desarrollo full-stack end-to-end — arquitectura, modelo de datos, integraciones, seguridad y despliegue a producción.

## Stack

| Capa | Tecnología |
|------|------------|
| Framework | Next.js 16 (App Router, Turbopack), React 19, TypeScript |
| UI | Tailwind CSS + shadcn/ui |
| Datos | Prisma 7 + PostgreSQL (Neon) |
| Auth | NextAuth v5 |
| Reservas / pagos | Square (Bookings, Catalog, Customers, Payments, Webhooks) |
| Email | Resend + React Email |
| CI/CD | GitHub Actions + Vercel |
| Capturas | Playwright (Chromium), viewport 1440×900, `fullPage: true`, sitio en producción |

## Features

- Sitio de marketing bilingüe (EN/ES) completo
- Wizard de reserva de 5 pasos con disponibilidad real de Square y elección de pagar en línea o después del trabajo (efectivo/Venmo/Zelle)
- Panel admin: reservas, bloqueo de horarios (sincronizado con Square), clientes, cotizaciones/contacto, galería, precios con sync a Square
- Cuentas de cliente con historial de reservas
- Sincronización bidireccional con Square vía webhooks verificados por firma
- Seguridad: CSP con nonces, rate limiting, bloqueo de cuenta admin, HSTS

## Highlights técnicos

- Integración real con Square Bookings API — disponibilidad en tiempo real y prevención de doble-reserva sin lógica propia
- CSP basado en nonces verificado con pruebas de navegador real en todo el sitio
- Manejo correcto de zona horaria en todo el stack (UTC en datos, conversión explícita a America/New_York en toda la UI)
- Login unificado que detecta admin vs. cliente sin mezclar los mecanismos de seguridad
- CI/CD con GitHub Actions + Vercel, dominio propio con HTTPS automático, Postgres gestionado (Neon)

## Índice de capturas

Ver [INDEX.md](./INDEX.md) — **12** pantallas: sitio de marketing (EN + toggle ES), wizard de reserva (pasos 1–3 públicos), sign-in de cliente y login de admin.

Omitido a propósito: interior del panel admin y cuenta de cliente autenticada (requieren credenciales privadas del dueño, no capturadas desde el sitio en producción).

## Párrafo corto (ES)

Onyx Mobile Detailing es una aplicación Next.js 16 en producción, construida de punta a punta para un negocio real de detailing móvil: sitio bilingüe, wizard de reserva con disponibilidad real de Square y pago en línea o después del trabajo, y panel de administración completo — todo sincronizado con la app de Square del dueño, desplegado con dominio propio y CI/CD.

## Short paragraph (EN)

Onyx Mobile Detailing is a production Next.js 16 application built end-to-end for a real mobile detailing business: a bilingual marketing site, a 5-step booking wizard backed by live Square availability with an online-or-pay-later checkout choice, and a full admin back office — all kept in sync with the owner's Square app, deployed with its own domain and CI/CD.

## Cómo regenerar las capturas

```bash
cd public/images/Onyx
npm install
npx playwright install chromium
npm run capture
```

Captura páginas públicas del sitio en producción (no requiere servicios locales). Salida: PNG numerados + `INDEX.md` + `_manifest.json` en esta carpeta.
