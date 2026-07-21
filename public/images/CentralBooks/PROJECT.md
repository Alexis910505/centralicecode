# CentralBooks — Portfolio brief

## Name
**CentralBooks**

## Tagline
Operations and finance console for a single-owner LLC that moves money, recharges, and courier deliveries with clear margins.

## Problem
Small remittance / courier-style businesses track transfers, mobile top-ups, expenses, receipts, and taxes across spreadsheets and chat. Margins, missing vouchers, and messenger assignments get lost.

## Solution
A full-stack product with:
- **Web admin** (Next.js) for dashboards, transfers, recharges, expenses, beneficiaries, users/couriers, taxes, reports, and receipts.
- **Mobile companion** (Flutter / CentralOps) for **Admin** and **Courier** roles: operations list, assignment, evidence upload, status updates.
- **API** (NestJS + Prisma + PostgreSQL) with JWT auth, role-aware endpoints, and file receipts.

## Role
**Full-stack** — backend API, web UI, mobile app, data model, Dockerized Postgres.

## Stack
| Layer | Tech |
|-------|------|
| Web | Next.js 16, React 19, Tailwind CSS 4, Axios |
| API | NestJS 11, Prisma 6, PostgreSQL 16, JWT / Passport, Multer |
| Mobile | Flutter, GetX, Dio |
| Infra | Docker Compose (Postgres), env-based config |

## Features
- Auth (login + cookie-gated protected routes)
- Dashboard KPIs (received / delivered / net profit / margin / commissions / missing receipts)
- Transfers CRUD + filters + courier assignment context
- Mobile recharges and item expenses
- Beneficiaries / clients management
- Users (messengers / couriers)
- Tax quarter summaries
- Reports overview
- Receipt upload & linking to operations
- Mobile: admin operations + courier workflow + evidence

## Technical highlights
- Monorepo: `backend/`, `web/`, `mobile/`, shared Docker Compose DB on port **5434**
- Prisma migrations + seed (`owner@centralbooks.local` / `ChangeMe123!`)
- NestJS modular domain (auth, transfers, recharges, expenses, taxes, users, operations, receipts)
- Next.js App Router with protected layout + sidebar shell
- Flutter dual-shell (AdminShell / CourierShell) over the same API
- Receipt static serving under `/api/uploads/`

## Routes inventory

### Web (`http://localhost:3000`)
| Route | View |
|-------|------|
| `/` | Redirect → `/login` |
| `/login` | Login |
| `/dashboard` | Main panel / KPIs |
| `/transfers` | Transfer management |
| `/recharges` | Mobile recharges |
| `/expenses` | Item expenses |
| `/users` | Couriers / users |
| `/beneficiaries` | Beneficiaries |
| `/taxes` | Taxes |
| `/reports` | Reports |
| `/settings` | Settings |
| `/receipts` | Receipts (linked ops; not in sidebar) |

### Mobile (Flutter — not screenshotted here)
| Route | View |
|-------|------|
| `/splash` | Splash |
| `/login` | Login |
| `/admin`, `/admin/operations` | Admin ops |
| `/admin/couriers` | Couriers |
| `/admin/evidence` | Evidence |
| `/admin/settings` | Settings |
| `/admin/clients` | Clients |
| `/admin/operations/new` | New operation |
| `/admin/operation/:id` | Operation detail |
| `/courier` | Courier home |
| `/courier/operations` | My operations |
| `/courier/map` | Map |
| `/courier/profile` | Profile |
| `/courier/operations/new` | New op (courier) |
| `/courier/operation/:id` | Courier op detail |

## Screenshots index
See [`screenshots/INDEX.md`](./screenshots/INDEX.md) — **11** web captures (1440×900, fullPage).

**Language note:** There is **no i18n**. UI strings are hardcoded in Spanish. Browser locale was forced to `en-US`, but labels remain ES.

## Demo credentials
| Field | Value |
|-------|--------|
| Email | `owner@centralbooks.local` |
| Password | `ChangeMe123!` |
| Web | http://localhost:3000 |
| API | http://localhost:3001/api |

## Portfolio blurb (ES)
**CentralBooks** es una plataforma full-stack para una LLC que gestiona transferencias internacionales, recargas, gastos, mensajeros e impuestos. Incluye panel web (Next.js), API NestJS/Prisma y app Flutter para admin y courier, con márgenes, comprobantes y flujo operativo en un solo producto.

## Portfolio blurb (EN)
**CentralBooks** is a full-stack platform for a single-owner LLC that runs international transfers, mobile recharges, expenses, couriers, and taxes. It ships a Next.js admin console, a NestJS/Prisma API, and a Flutter companion for admin and courier roles—margins, receipts, and operational workflow in one product.

## How to recapture
```bash
# With DB + API (3001) + web (3000) running:
cd portfolio/capture
npm install
npx playwright install chromium
npm run capture
```
