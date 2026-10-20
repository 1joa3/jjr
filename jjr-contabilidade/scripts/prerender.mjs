// Injeta o HTML pré-renderizado do React em dist/index.html.
// Executado por `npm run build` depois dos builds de cliente e SSR.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const indexPath = path.join(root, 'dist', 'index.html');
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render();

const template = fs.readFileSync(indexPath, 'utf-8');
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  throw new Error('prerender: <div id="root"></div> não encontrado em dist/index.html');
}

fs.writeFileSync(indexPath, template.replace(placeholder, `<div id="root">${appHtml}</div>`));
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });

console.log(`prerender: ${(appHtml.length / 1024).toFixed(1)} kB de HTML injetados em dist/index.html`);
