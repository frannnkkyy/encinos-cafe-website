import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const pages = ['index.html', 'menu.html', 'cookbook.html', 'about.html', 'contact.html'];
const errors = [];

for (const pageName of pages) {
  const page = resolve(pageName);
  const html = readFileSync(page, 'utf8');
  for (const match of html.matchAll(/(?:src|href)=["']([^"'#?]+)["']/g)) {
    const reference = match[1];
    if (/^(?:https?:|mailto:|tel:|javascript:)/.test(reference)) continue;
    if (!existsSync(resolve(dirname(page), reference))) errors.push(`${pageName}: no existe ${reference}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validación correcta: ${pages.length} páginas sin recursos locales faltantes.`);
