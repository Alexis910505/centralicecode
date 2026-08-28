// Creada por Centralized Code - 2026
/**
 * Onyx Mobile Detailing — portfolio screenshots (live production site)
 * Public pages only: marketing site + booking wizard steps + sign-in/admin login forms.
 *
 *   cd public/images/Onyx && node capture.mjs
 */
import { chromium } from "playwright"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = __dirname
const SITE = "https://onyxmobiledetailers.com"
const VIEWPORT = { width: 1440, height: 900 }

const indexRows = []
let n = 0

function nextName(slug) {
  n += 1
  return `${String(n).padStart(2, "0")}-${slug}.png`
}

async function shot(page, slug, routeTitle, routePath) {
  await page.waitForTimeout(500)
  const file = nextName(slug)
  await page.screenshot({ path: path.join(OUT, file), fullPage: true })
  indexRows.push({ n, file, path: routePath, title: routeTitle })
  console.log(`OK  ${file}  <-  ${routePath}`)
  return file
}

async function safeGoto(page, url) {
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 })
    await page.waitForLoadState("networkidle", { timeout: 20000 }).catch(() => {})
    await page.waitForTimeout(600)
    return true
  } catch (e) {
    console.warn(`GOTO fail ${url}: ${e.message}`)
    return false
  }
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true })
  for (const f of fs.readdirSync(OUT)) {
    if (/^\d{2}-.+\.png$/.test(f)) fs.unlinkSync(path.join(OUT, f))
  }

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    viewport: VIEWPORT,
    locale: "en-US",
    deviceScaleFactor: 1,
  })
  const page = await context.newPage()

  if (await safeGoto(page, `${SITE}/`)) {
    await shot(page, "home", "Marketing — Home (EN)", "/")
  }
  if (await safeGoto(page, `${SITE}/services`)) {
    await shot(page, "services", "Marketing — Services", "/services")
  }
  if (await safeGoto(page, `${SITE}/add-ons`)) {
    await shot(page, "add-ons", "Marketing — Add-ons", "/add-ons")
  }
  if (await safeGoto(page, `${SITE}/gallery`)) {
    await shot(page, "gallery", "Marketing — Gallery", "/gallery")
  }
  if (await safeGoto(page, `${SITE}/about`)) {
    await shot(page, "about", "Marketing — About", "/about")
  }
  if (await safeGoto(page, `${SITE}/contact`)) {
    await shot(page, "contact", "Marketing — Contact", "/contact")
  }

  // Spanish toggle on the home page
  if (await safeGoto(page, `${SITE}/`)) {
    try {
      const esBtn = page.getByRole("button", { name: /^ES$/ }).first()
      if (await esBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
        await esBtn.click()
        await page.waitForTimeout(800)
        await shot(page, "home-es", "Marketing — Home (ES)", "/ (ES)")
      }
    } catch (e) {
      console.warn("ES toggle failed:", e.message)
    }
  }

  // Switch back to EN before the booking wizard (ES toggle persists across navigation)
  if (await safeGoto(page, `${SITE}/`)) {
    try {
      const enBtn = page.getByRole("button", { name: /^EN$/ }).first()
      if (await enBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
        await enBtn.click()
        await page.waitForTimeout(500)
      }
    } catch (e) {
      console.warn("EN toggle failed:", e.message)
    }
  }

  // Booking wizard — step 1 (vehicle size)
  if (await safeGoto(page, `${SITE}/book`)) {
    await shot(page, "book-step1-vehicle", "Booking wizard — Step 1: Vehicle size", "/book")

    try {
      const next2 = page.getByRole("button", { name: /CONTINUE TO ADD-ONS/i })
      await next2.scrollIntoViewIfNeeded()
      await next2.click({ timeout: 10000, force: true })
      await page.waitForTimeout(800)
      await shot(page, "book-step2-addons", "Booking wizard — Step 2: Add-ons", "/book (step 2)")
    } catch (e) {
      console.warn("Step 2 nav failed:", e.message)
    }

    try {
      const next3 = page.getByRole("button", { name: /CONTINUE TO DATE|CONTINUE/i }).first()
      await next3.scrollIntoViewIfNeeded()
      await next3.click({ timeout: 10000, force: true })
      await page.waitForTimeout(1000)
      await shot(page, "book-step3-datetime", "Booking wizard — Step 3: Date & time", "/book (step 3)")
    } catch (e) {
      console.warn("Step 3 nav failed:", e.message)
    }
  }

  if (await safeGoto(page, `${SITE}/sign-in`)) {
    await shot(page, "sign-in", "Client sign-in", "/sign-in")
  }

  if (await safeGoto(page, `${SITE}/admin/login`)) {
    await shot(page, "admin-login", "Admin — Login", "/admin/login")
  }

  await browser.close()

  const indexMd = [
    "# Screenshots index",
    "",
    "Viewport: **1440x900** · `fullPage: true` · Live production site: " + SITE,
    "",
    "| # | archivo | ruta | titulo |",
    "|---|---------|------|--------|",
    ...indexRows.map(
      (r) => `| ${r.n} | ${r.file} | \`${r.path}\` | ${r.title} |`
    ),
    "",
  ].join("\n")
  fs.writeFileSync(path.join(OUT, "INDEX.md"), indexMd, "utf8")
  fs.writeFileSync(
    path.join(OUT, "_manifest.json"),
    JSON.stringify({ site: SITE, viewport: VIEWPORT, locale: "en/es", rows: indexRows }, null, 2),
    "utf8"
  )
  console.log(`\nWrote INDEX.md with ${indexRows.length} rows`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
