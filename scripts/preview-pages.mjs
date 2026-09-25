import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('docs');
const base = process.env.NUXT_APP_BASE_URL || '/rh-site/';
const port = Number(process.env.PAGES_PORT || 3002);
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2' };
http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (!url.pathname.startsWith(base)) { res.writeHead(404).end(); return; }
  const file = path.resolve(root, '.' + '/' + decodeURIComponent(url.pathname.slice(base.length)));
  if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  let target = file;
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, 'index.html');
  if (!fs.existsSync(target)) { res.writeHead(404).end(); return; }
  res.writeHead(200, { 'Content-Type': types[path.extname(target)] || 'application/octet-stream' });
  fs.createReadStream(target).pipe(res);
}).listen(port, '127.0.0.1', () => console.log(`Pages preview: http://127.0.0.1:${port}${base}`));
