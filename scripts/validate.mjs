import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const page = resolve('index.html');
const html = readFileSync(page, 'utf8');
const errors = [];
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);

for (const id of ids.filter((id, index) => ids.indexOf(id) !== index)) {
  errors.push(`ID duplicado: ${id}`);
}

for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const reference = match[1];
  if (/^(?:https?:|mailto:|tel:|#)/.test(reference)) continue;
  const localPath = resolve(dirname(page), reference);
  if (!existsSync(localPath)) errors.push(`Archivo faltante: ${reference}`);
}

for (const match of html.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.includes(match[1])) errors.push(`Ancla inexistente: #${match[1]}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validación correcta: ${ids.length} secciones/elementos y enlaces locales completos.`);
