'use strict';

// Naikkan versi setiap ada perubahan aset agar browser membangun cache baru.
var CACHE_NAME = 'siatma-static-v13';
// Daftarkan file penting supaya halaman dan fitur utama tetap bisa dibuka saat offline.
var STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './offline.html',
  './assets/logo-tk.png',
  './assets/logo-unpam.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './js/data.js',
  './js/auth.js',
  './js/layout.js',
  './js/ui-helpers.js',
  './js/toast.js',
  './js/network-status.js',
  './js/pwa-install.js',
  './admin/dashboard.html',
  './admin/data-siswa.html',
  './admin/data-guru.html',
  './admin/data-kelas.html',
  './admin/absensi.html',
  './admin/pengumuman.html',
  './admin/perkembangan.html',
  './admin/laporan.html',
  './admin/pengaturan.html',
  './admin/manajemen-akun.html',
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
  './orangtua/perkembangan.html',
  './orangtua/pengaturan.html'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        // allSettled membiarkan instalasi lanjut meski ada aset tertentu yang gagal diunduh; addAll akan gagal seluruhnya.
        return Promise.allSettled(STATIC_ASSETS.map(function (url) {
          return cache.add(url).catch(function (err) {
            console.warn('Gagal cache:', url, err);
          });
        }));
      })
      // Aktifkan versi baru segera tanpa menunggu semua tab lama ditutup.
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        // Bersihkan cache versi lama agar aset usang tidak terpakai dan tidak memenuhi penyimpanan.
        return Promise.all(keys.filter(function (key) {
          return key !== CACHE_NAME;
        }).map(function (key) {
          return caches.delete(key);
        }));
      })
      // Ambil kendali tab yang sudah terbuka supaya langsung memakai service worker versi ini.
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  var request = event.request;
  // Lewati request non-GET dan lintas origin; service worker ini hanya mengelola aset lokal yang aman di-cache.
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    // Coba jaringan dulu agar data terbaru dipakai, simpan respons sukses ke cache, lalu pakai cache kalau offline.
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
          // Kalau halaman navigasi tidak ada di cache saat offline, tampilkan halaman offline lalu halaman utama sebagai cadangan.
          return caches.match('./offline.html').then(function (offline) {
            return offline || caches.match('./index.html');
          });
        }
        return Response.error();
      });
    })
  );
});
