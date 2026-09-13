const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// In-memory cache for ultra-fast response times (<1ms)
let cachedIndexHtml = null;
let cachedMtime = 0;

function getIndexHtml() {
  const indexPath = path.join(__dirname, 'index.html');
  try {
    const stat = fs.statSync(indexPath);
    if (!cachedIndexHtml || stat.mtimeMs > cachedMtime) {
      cachedIndexHtml = fs.readFileSync(indexPath);
      cachedMtime = stat.mtimeMs;
    }
  } catch (e) {
    if (!cachedIndexHtml) cachedIndexHtml = Buffer.from('404 Not Found');
  }
  return cachedIndexHtml;
}

// Pre-warm cache on start
getIndexHtml();

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '' || reqPath === '/index.html') {
    const data = getIndexHtml();
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=UTF-8',
      'Content-Length': data.length,
      'Connection': 'keep-alive',
      'Cache-Control': 'no-cache'
    });
    res.end(data);
    return;
  }

  const filePath = path.join(__dirname, reqPath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Fallback to index.html for SPA routes
      const fallback = getIndexHtml();
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8',
        'Content-Length': fallback.length,
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
      });
      res.end(fallback);
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Length': data.length,
        'Connection': 'keep-alive',
        'Cache-Control': 'public, max-age=3600'
      });
      res.end(data);
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`⚡ ENVIRYX Platform running ultra-fast at http://localhost:${PORT}/`);
});
