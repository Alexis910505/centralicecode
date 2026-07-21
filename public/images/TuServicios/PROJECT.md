# Tus Servicios — Portfolio brief

## Nombre
**Tus Servicios**

## Tagline
Gestión móvil de trámites, envíos y pagos locales — del pedido al seguimiento en un solo flujo.

## Problema / Solución
**Problema:** Coordinar diligencias (medicamentos, radicaciones, llevar-y-traer, recargas) suele implicar filas, llamadas y pagos dispersos.  
**Solución:** App Flutter que centraliza solicitud de servicios, seguimiento de trámites, tickets de soporte, envíos y pagos pendientes, con mapa/agenda para el flujo de recogida-entrega.

## Rol
Modernización y estabilización de un proyecto Flutter legacy para portafolio/QA: migración a Dart 3 / null safety, GetX, datos mock para demos sin backend, tests de widget y capturas móviles en emulador.

## Stack
| Capa | Tecnología |
|------|------------|
| App | Flutter 3.x, Dart 3, Material |
| Estado / nav | GetX (`GetMaterialApp`, `Obx`, rutas nombradas) |
| API | GraphQL (`graphql` / `graphql_flutter`) → `http://80.208.231.213:6060/` |
| Maps | Google Maps Flutter, Geolocator, Geocoding, Directions/Places HTTP |
| Persistencia local | SharedPreferences |
| QA | Widget tests, capturas emulador (`adb screencap`) / Playwright web |
| Demo data | `MockData` + `MeRepository` (fallback si el API no responde) |

## Features
- Auth (login / signup) y acceso demo sin sesión
- Dashboard con contadores de trámites y catálogo de servicios
- Listado y detalle de trámites (estados, costos COP, observaciones)
- Soporte: listado, alta y detalle de tickets
- Pagos faltantes e historial
- Envíos y detalle de guía
- Notificaciones
- Flujo adapter (mapa + formularios) para nuevos servicios

## Highlights técnicos
- Migración de SDK pre–null-safety a **Dart 3** y dependencias actuales
- Estado global con **GetX** (`AppController`) y navegación por `GetPage`
- **`MeRepository`**: intenta GraphQL con timeout; si falla, sirve `MockData` para demos/QA
- `AppConfig.useMockData` para forzar demo sin red
- Widget tests de navegación (`pumpTestApp` + SharedPreferences mock)
- Capturas de portafolio en **emulador Android** (flujo automático + `adb screencap`)

## Índice de capturas
Ver [INDEX.md](INDEX.md) — 13 pantallas principales en orden de flujo (vista móvil / emulador).

## Credenciales demo
Con `AppConfig.useMockData = true` (estado actual del repo):

| Campo | Valor |
|-------|--------|
| Email | `alex.pruebas@demo.com` |
| Password | `demo1234` (cualquier clave ≥ 4 caracteres pasa validación) |
| Alternativa | Botón **Continuar sin sesión** en login |

URLs reales del proyecto:

| | |
|--|--|
| **BASE_URL** (web local, opcional) | `http://127.0.0.1:8080` |
| **API_URL** | `http://80.208.231.213:6060/` |
| **App Android** | `com.tusservicios.tusservicios` en emulador |

## Párrafo corto (ES)
Tus Servicios es una app Flutter para solicitar y seguir trámites urbanos (medicamentos, radicaciones, envíos y más), con soporte, pagos y notificaciones. El proyecto se modernizó a Dart 3/GetX y puede demostrarse con datos mock cuando el GraphQL remoto no está disponible.

## Short paragraph (EN)
Tus Servicios is a Flutter app for requesting and tracking local errands and paperwork (medicine pickup, filings, deliveries, and more), including support tickets, payments, and notifications. It was upgraded to Dart 3/GetX and ships with mock data so the portfolio demo works without a live GraphQL backend.

## Cómo regenerar las capturas

### Emulador Android (set actual en `screenshots/`)

```powershell
# Emulador encendido (p. ej. emulator-5554)
$env:JAVA_HOME = "C:\Program Files\Java\jdk-17"
$env:PATH = "C:\Sdk\flutter\bin;C:\Sdk\Android\Sdk\platform-tools;$env:JAVA_HOME\bin;$env:PATH"

powershell -ExecutionPolicy Bypass -File scripts\capture-screenshots-emulator.ps1
```

El script lanza `lib/main_portfolio_capture.dart`, escucha `PORTFOLIO_SHOT_READY:<nombre>` y guarda PNG con `adb screencap` + `pull` en `screenshots/`.

### Web desktop (opcional, Playwright)

```powershell
flutter run -d web-server --web-port=8080 --web-hostname=127.0.0.1
# otra terminal:
cd scripts
npm install
npx playwright install chromium
$env:BASE_URL = "http://127.0.0.1:8080"
node capture-screenshots.mjs
```

**Notas:** UI fija en **ES** (no hay i18n). Omitida la ruta `/adapter` (mapa). Idioma forzado EN no aplica.
