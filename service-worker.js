const CACHE_NAME = "football-pwa-v1.5.0";
var urlsToCache = [
  "/",
  "/nav.html", "/index.html",
  "/detail_match.html", "/detail_player.html",
  "/detail_team.html",
  "/pages/home.html", "/pages/jadwal.html",
  "/pages/klasemen.html", "/pages/tentang.html",
  "/pages/favorit.html",
  "/images/icon.png", "/images/icon-512.jpg",
  "/images/stadium.jpg", "/images/fotoprofil.png",
  "/css/fontawesome/fontawesome.min.css", "/css/fontawesome/all.min.css",
  "/css/materialize.min.css", "/css/main.css",
  "/js/materialize.min.js", "/js/jquery.min.js",
  "/js/nav.js", "/js/main.js",
  "/js/klasemen.js", "/js/latestmatch.js",
  "/js/upcoming.js", "/js/matchleague.js",
  "/js/detail_team.js", "/js/detail_match.js",
  "/js/idb.js", "/js/dbfootball.js",
  "/js/dbfunction.js"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
    .match(event.request, {
      cacheName: CACHE_NAME
    })
    .then(function (response) {
      if (response) {
        console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
        return response;
      }

      console.log(
        "ServiceWorker: Memuat aset dari server: ",
        event.request.url
      );
      return fetch(event.request);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: 'img/notification.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});