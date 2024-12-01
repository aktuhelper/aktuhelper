self.addEventListener('install', function (event) {
    console.log('SW Installed');
    event.waitUntil(
      caches.open('static')
        .then(function (cache) {
          // cache.add('/');
          // cache.add('/s.html');
          // cache.add('/java.js');
          cache.addAll([
            '/',
            '/index.html',
            '/java.js',
            '/trial.css',
            '/maskable_icon_x192.png',
            'https://fonts.googleapis.com/css?family=Raleway:400,700'
          ]);
        })
    );
  });
  
  self.addEventListener('activate', function () {
    console.log('SW Activated');
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(res) {
          if (res) {
            return res;
          } else {
            return fetch(event.request);
          }
        })
    );
  });