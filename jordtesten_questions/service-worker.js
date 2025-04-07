self.addEventListener('install', function(event) {
  console.log('Service Worker installert.');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
