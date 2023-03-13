var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/main.css',

        './assets/js/main.js',


        './assets/img/hero-img.png',
        './assets/img/favicon.jpg',
        './assets/img/about.avif',
        './assets/img/stats-bg.jpg',
        './assets/img/reservation.jpg',
        './assets/img/menu/menu-item-1.png',
        './assets/img/menu/menu-item-2.png',
        './assets/img/menu/menu-item-3.png',
        './assets/img/menu/menu-item-4.png',
        './assets/img/menu/menu-item-5.png',
        './assets/img/menu/menu-item-6.png',
        './assets/img/167.png',
        './assets/img/172.png',
        './assets/img/180.png',
        './assets/img/196.png',
        './assets/img/216.png',
        './assets/img/256.png',
        './assets/img/512.png',
        './assets/img/1024.png'
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});