# Crimson Ascension — Portfolio brief

## Nombre
**Crimson Ascension**

## Tagline
*Space strategy MMO — command colonies, fleets, and alliances across a living tick-based galaxy.*

## Problema / solución
Los 4X / MMO espaciales suelen ser monolitos difíciles de iterar o demos sin backend real. **Crimson Ascension** es un monorepo full-stack jugable: NestJS + Prisma/PostgreSQL para ticks, colonias, flotas y alianzas; Next.js + Tailwind para una UI táctica “Ascendancy Prime” con i18n EN/ES, galaxias, construcciones, hangar y red de defensa planetaria.

## Rol
**Full-stack** (API NestJS, schema Prisma, UI Next.js 14, integración Stitch → componentes de juego).

## Stack
| Capa | Tecnología |
|------|------------|
| Frontend | Next.js 14, React 18, Tailwind, Zustand, Three.js |
| Backend | NestJS 10, Prisma, JWT/Passport |
| Datos | PostgreSQL, Redis |
| Infra local | Docker Compose |
| Diseño | Google Stitch exports → implementación fiel |

## Features destacadas
- Auth + selección de casta (role classes)
- Colonias: pilares, facilities, producción por tick, lealtad/población
- Construcciones / infrastructure control (producción + social)
- Flota: overview, hangar, simulación táctica, **Planetary Defense Network**
- Galaxias: browser, colonizar, bookmarks
- Alianzas, ranking, mercado, intel, cola de acciones, eventos, temporada
- i18n EN/ES, settings, telemetría admin

## Destacados técnicos
- **Tick engine** con scheduler (acciones, catástrofes, lealtad, flotas)
- **Modelo de recursos** unificado (Aetherium, Nexium, Crimsonite, Energy, Knowledge, Influence)
- UI de comando con hologramas wireframe (assets Stitch + locales)
- Separación clara: defensa planetaria en Flota (no en Construcciones)
- Seed de jugadores demo / alianzas para demos y capturas

## Índice de capturas
Ver [`screenshots/INDEX.md`](./screenshots/INDEX.md) — **32** pantallas, locale **EN**, viewport ~1440×900, fullPage.

| Rango | Área |
|-------|------|
| 01–06 | Auth / caste selection |
| 07–12 | Dashboard, colonias, construcciones |
| 13–15 | Alianzas |
| 16–19 | Flota / hangar / defensa / simulación |
| 20–25 | Market, intel, ranking, caste, research, galaxies |
| 26–32 | Events, season, queue, settings, profile, telemetry, home |

## Demo (desarrollo)
| | |
|--|--|
| Web (sesión captura) | `http://localhost:3010` (API `3011` si 3000/3001 ocupados) |
| Credencial demo | `kaelnexus@crimson.test` / `Crimson2026!` |
| Seed alianza | `npm run prisma:seed:test-alliance` (backend) |

## Párrafo corto — ES
**Crimson Ascension** es un MMO de estrategia espacial full-stack: colonias, flotas, alianzas y un universo por ticks sobre NestJS + PostgreSQL, con una UI Next.js de mando táctico (EN/ES). Incluye hangar, simulación, red de defensa planetaria y explorador de galaxias listos para demo.

## Short paragraph — EN
**Crimson Ascension** is a full-stack space strategy MMO: colonies, fleets, alliances, and a tick-driven galaxy on NestJS + PostgreSQL, paired with a Next.js tactical command UI (EN/ES). Hangar, combat simulation, planetary defense network, and galaxy browser ship ready for portfolio demos.

## Regenerar capturas
```bash
cd portfolio/tools
npm install
npx playwright install chromium
# Con API + frontend levantados:
BASE_URL=http://localhost:3010 API_URL=http://localhost:3011 node capture.mjs
```
