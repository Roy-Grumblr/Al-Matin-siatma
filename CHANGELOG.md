# Changelog

## [1.1.0] - 2026-09-30
### Added
- Dark mode toggle dengan preferensi localStorage
- PWA: manifest, service worker, offline page
- Co-branding logo TK Al-Matin & Universitas Pamulang di login
- Logo TK di favicon, manifest, dan sidebar
- Toast notification untuk online/offline
- Skeleton loading di tabel
- Format tanggal otomatis via SIATMA_UI.formatDate

### Changed
- Refactor layout.js: mobile-first sidebar dengan toggle
- Update README dengan section Kolaborasi & Aset
- Ganti favicon dari SVG ke PNG (logo TK)

### Fixed
- Notifikasi badge dinamis (dari hardcoded "3")
- Form validasi login min length 6
- Login error di bawah input password
- Redirect loop guard di requireAuth

## [1.0.0] - 2026-09-24
### Added
- Login multi-role (admin, guru, orang tua)
- Dashboard admin dengan statistik
- Manajemen data siswa (CRUD, search, filter)
- Manajemen data guru
- Manajemen data kelas
- Absensi digital dengan status Hadir/Sakit/Izin/Alpa
- Pengumuman dengan target penerima
- Perkembangan siswa
- Portal orang tua
- Import Excel (prototype)
- Export laporan (prototype)
- Layout injection sidebar & header
- Toast notification
- Empty state & loading state
- Responsive design

### Security
- Disclaimer: bukan untuk production, gunakan backend untuk auth
