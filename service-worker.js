// Service Worker Installation
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/script.js',
                '/manifest.json',
                '/icon.png', // Passe dies entsprechend an, wenn du ein Icon hast
                '/image1.jpg',
                '/image2.jpg',
                '/image3.jpg',
                '/image4.jpg',
                '/image5.jpg'
            ]);
        })
    );
});

// Service Worker Aktivierung
self.addEventListener('activate', function(event) {
    // Hier können alte Caches bereinigt werden
});

// Fetch Event für das Caching
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});