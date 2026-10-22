/* Offline support: cache the app shell, refresh it in the background. */
const CACHE = 'dpsy-v1';
const SHELL = ['./', 'index.html', 'assets/style.css', 'assets/app.js', 'assets/content-common.js', 'assets/content-clinical.js', 'assets/content-consumer.js', 'assets/content-health.js', 'assets/content-organisational.js', 'icon.svg', 'manifest.webmanifest'];

self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (url.origin !== location.origin && !isFont) return; // YouTube etc. go straight to the network
  // stale-while-revalidate: answer from cache instantly, update the cache in the background
  e.respondWith(caches.open(CACHE).then(async cache => {
    const cached = await cache.match(req, { ignoreSearch: url.origin === location.origin });
    const fresh = fetch(req).then(res => { if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone()); return res; }).catch(() => cached);
    return cached || fresh;
  }));
});
