import { cpSync, mkdirSync, rmSync } from 'node:fs';

const pages = ['index.html', 'menu.html', 'cookbook.html', 'about.html', 'contact.html'];
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });

for (const page of pages) cpSync(page, `dist/${page}`);
cpSync('assets', 'dist/assets', { recursive: true });
console.log(`Sitio generado: ${pages.length} páginas y sus recursos.`);
