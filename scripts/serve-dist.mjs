// Static server emulating production hosting: /route -> /route/index.html, unknown -> 404.html (status 404). Test helper only.
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'
const dist = path.resolve('dist'); const port = Number(process.argv[2] || 4173)
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain', '.json': 'application/json' }
http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]); let f = path.join(dist, u)
  if (!f.startsWith(dist)) { res.writeHead(403); return res.end() }
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html')
  if (!fs.existsSync(f)) { res.writeHead(404, { 'content-type': types['.html'] }); return res.end(fs.readFileSync(path.join(dist, '404.html'))) }
  res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' }); res.end(fs.readFileSync(f))
}).listen(port, () => console.log('serving', port))
