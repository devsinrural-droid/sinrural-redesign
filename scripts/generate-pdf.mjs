// Gera apresentacao-sinrural.pdf renderizando /sistema com Puppeteer + print styles.
// Uso: npm run pdf  (precisa de servidor rodando em PDF_URL ou localhost:3000)

import puppeteer from "puppeteer";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { mkdir, stat } from "node:fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const URL = process.env.PDF_URL || "http://localhost:3000/sistema";
const OUTPUT = path.resolve(__dirname, "../public/apresentacao-sinrural.pdf");

console.log(`→ rendering ${URL}`);

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 1800, deviceScaleFactor: 2 });
await page.emulateMediaType("print");

await page.goto(URL, { waitUntil: "networkidle0", timeout: 90_000 });

// Aguarda fontes (Bricolage + Fraunces via next/font)
await page.evaluateHandle("document.fonts.ready");

// Pequeno delay extra pra garantir layout estabilizado
await new Promise((r) => setTimeout(r, 600));

await mkdir(path.dirname(OUTPUT), { recursive: true });

await page.pdf({
  path: OUTPUT,
  format: "A4",
  printBackground: true,
  margin: { top: "12mm", right: "10mm", bottom: "14mm", left: "10mm" },
  displayHeaderFooter: true,
  headerTemplate: `<div></div>`,
  footerTemplate: `
    <div style="font-family: 'Helvetica Neue', sans-serif; font-size: 8px; color: #666; width: 100%; padding: 0 10mm; display: flex; justify-content: space-between; align-items: center;">
      <span style="text-transform: uppercase; letter-spacing: 0.16em;">Sistema SinRural · Apresentação</span>
      <span><span class="pageNumber"></span> / <span class="totalPages"></span></span>
    </div>
  `,
  preferCSSPageSize: false,
});

await browser.close();

const { size } = await stat(OUTPUT);
console.log(`✓ PDF gerado: ${OUTPUT}`);
console.log(`  ${(size / 1024).toFixed(1)} KB`);
