'use strict';

var CACHE_NAME = 'siatma-static-v5';
var STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './offline.html',
  './assets/logo-tk.png',
  './assets/logo-unpam.png',
  './js/data.js',
  './js/auth.js',
  './js/layout.js',
  './js/ui-helpers.js',
  './js/toast.js',
  './js/network-status.js',
  './admin/dashboard.html',
  './admin/data-siswa.html',
  './admin/data-guru.html',
  './admin/data-kelas.html',
  './admin/absensi.html',
  './admin/pengumuman.html',
  './admin/perkembangan.html',
  './admin/laporan.html',
  './admin/pengaturan.html',
  './admin/tambah-siswa.html',
  './admin/tambah-guru.html',
  './admin/tambah-kelas.html',
  './admin/detail-siswa.html',
  './admin/detail-guru.html',
  './admin/detail-kelas.html',
  './admin/import-excel.html',
  './guru/dashboard.html',
  './guru/absensi.html',
  './guru/pengumuman.html',
  './guru/perkembangan.html',
  './guru/pengaturan.html',
  './orangtua/dashboard.html',
  './orangtua/profil-anak.html',
  './orangtua/riwayat-absensi.html',
  './orangtua/pengumuman.html',
  './orangtua/perkembangan.html'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) { return cache.addAll(STATIC_ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (key) {
          return key !== CACHE_NAME;
        }).map(function (key) {
          return caches.delete(key);
        }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  var request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(request).then(function (response) {
      if (response && response.ok) {
        var copy = response.clone();
        caches.open(CACHE_NAME).then(function (cache) { cache.put(request, copy); });
      }
      return response;
    }).catch(function () {
      return caches.match(request).then(function (cached) {
        if (cached) return cached;
        if (request.mode === 'navigate') {
          return caches.match('./offline.html').then(function (offline) {
            return offline || caches.match('./index.html');
          });
        }
        return Response.error();
      });
    })
  );
});
