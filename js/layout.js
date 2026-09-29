(function (window) {
  'use strict';

  var LOGOUT_ICON =
    '<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"/></svg>';

  var MENU_ICONS = {
    dashboard:
      '<svg class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75h6.5v6.5h-6.5v-6.5Zm10 0h6.5v6.5h-6.5v-6.5Zm-10 10h6.5v6.5h-6.5v-6.5Zm10 0h6.5v6.5h-6.5v-6.5Z"/></svg>',
    students:
      '<svg class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.125-.95M15 19.128v-.003c0-1.054-.252-2.06-.7-2.94M9 19.128a9.38 9.38 0 0 1-2.625.372 9.337 9.337 0 0 1-4.125-.95M9 19.128v-.003c0-1.054.252-2.06.7-2.94M12 12a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"/></svg>',
    teachers:
      '<svg class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/></svg>',
    classes:
      '<svg class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25V6.75Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 8.25h7.5m-7.5 3.75h7.5m-7.5 3.75h4.5"/></svg>',
    attendance:
      '<svg class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 2.25 2.25L15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>',
    announcements:
      '<svg class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 3.94a1.5 1.5 0 0 1 3.32 0l.36.86a1.5 1.5 0 0 0 1.12.88l.92.16a1.5 1.5 0 0 1 .8 2.55l-.67.66a1.5 1.5 0 0 0-.42 1.32l.16.92a1.5 1.5 0 0 1-2.18 1.58l-.83-.44a1.5 1.5 0 0 0-1.4 0l-.83.44a1.5 1.5 0 0 1-2.18-1.58l.16-.92a1.5 1.5 0 0 0-.42-1.32l-.67-.66a1.5 1.5 0 0 1 .8-2.55l.92-.16a1.5 1.5 0 0 0 1.12-.88l.36-.86Z"/></svg>',
    development:
      '<svg class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v18m0 0h18M6.75 16.5l3.75-4.5 3 2.25 4.5-6"/></svg>',
    report:
      '<svg class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-8.625a1.125 1.125 0 0 0-1.125-1.125H5.625A1.125 1.125 0 0 0 4.5 5.625v12.75A1.125 1.125 0 0 0 5.625 19.5h7.125m3.375-5.25 3 3m0 0 3-3m3 3v-7.5"/></svg>',
    settings:
      '<svg class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94a1.5 1.5 0 0 1 4.812 0l.247.607a1.5 1.5 0 0 0 1.89.83l.61-.227a1.5 1.5 0 0 1 1.916 1.916l-.227.61a1.5 1.5 0 0 0 .83 1.89l.607.247a1.5 1.5 0 0 1 0 2.812l-.607.247a1.5 1.5 0 0 0-.83 1.89l.227.61a1.5 1.5 0 0 1-1.916 1.916l-.61-.227a1.5 1.5 0 0 0-1.89.83l-.247.607a1.5 1.5 0 0 1-2.812 0l-.247-.607a1.5 1.5 0 0 0-1.89-.83l-.61.227a1.5 1.5 0 0 1-1.916-1.916l.227-.61a1.5 1.5 0 0 0-.83-1.89l-.607-.247a1.5 1.5 0 0 1 0-2.812l.607-.247a1.5 1.5 0 0 0 .83-1.89l-.227-.61A1.5 1.5 0 0 1 8.91 5.15l.61.227a1.5 1.5 0 0 0 1.89-.83l.247-.607Z"/></svg>',
    profile:
      '<svg class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/></svg>',
    notification:
      '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9a6 6 0 0 0-12 0v.75a8.967 8.967 0 0 1-2.312 6.022 23.848 23.848 0 0 0 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/></svg>',
  };

  var MENUS = {
    admin: [
      { key: 'dashboard', label: 'Dashboard', href: 'dashboard.html', icon: 'dashboard' },
      { key: 'data-siswa', label: 'Data Siswa', href: 'data-siswa.html', icon: 'students' },
      { key: 'data-guru', label: 'Data Guru', href: 'data-guru.html', icon: 'teachers' },
      { key: 'data-kelas', label: 'Data Kelas', href: 'data-kelas.html', icon: 'classes' },
      { key: 'absensi', label: 'Absensi', href: 'absensi.html', icon: 'attendance' },
      { key: 'pengumuman', label: 'Pengumuman', href: 'pengumuman.html', icon: 'announcements' },
      { key: 'perkembangan-siswa', label: 'Perkembangan Siswa', href: 'perkembangan.html', icon: 'development' },
      { key: 'laporan', label: 'Laporan', href: 'laporan.html', icon: 'report' },
      { key: 'pengaturan', label: 'Pengaturan', href: 'pengaturan.html', icon: 'settings' },
    ],
    guru: [
      { key: 'dashboard', label: 'Dashboard', href: 'dashboard.html', icon: 'dashboard' },
      { key: 'absensi', label: 'Absensi', href: 'absensi.html', icon: 'attendance' },
      { key: 'perkembangan-siswa', label: 'Perkembangan Siswa', href: 'perkembangan.html', icon: 'development' },
      { key: 'pengumuman', label: 'Pengumuman', href: 'pengumuman.html', icon: 'announcements' },
      { key: 'pengaturan', label: 'Pengaturan', href: 'pengaturan.html', icon: 'settings' },
    ],
    orangtua: [
      { key: 'dashboard', label: 'Dashboard', href: 'dashboard.html', icon: 'dashboard' },
      { key: 'profil-anak', label: 'Profil Anak', href: 'profil-anak.html', icon: 'profile' },
      { key: 'riwayat-absensi', label: 'Riwayat Absensi', href: 'riwayat-absensi.html', icon: 'attendance' },
      { key: 'pengumuman', label: 'Pengumuman', href: 'pengumuman.html', icon: 'announcements' },
      { key: 'perkembangan-anak', label: 'Perkembangan Anak', href: 'perkembangan.html', icon: 'development' },
    ],
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function normalizeBasePath(basePath) {
    var value = basePath || '';
    if (value && value.charAt(value.length - 1) !== '/') {
      value += '/';
    }
    return value;
  }

  function getRoleMenu(role) {
    return MENUS[role] || [];
  }

  function renderSidebar(role, activeMenu, basePath) {
    var user = window.SIATMA_AUTH && window.SIATMA_AUTH.getCurrentUser
      ? window.SIATMA_AUTH.getCurrentUser()
      : null;
    var menu = getRoleMenu(role);
    var prefix = normalizeBasePath(basePath);
    var displayName = user && user.nama ? user.nama : 'Pengguna';
    var roleLabel = role === 'orangtua' ? 'Orang Tua' : role === 'guru' ? 'Guru' : 'Administrator';
    var initial = displayName.charAt(0).toUpperCase();

    return (
      '<aside id="sidebar" class="fixed inset-y-0 left-0 z-30 flex h-screen w-64 flex-col border-r border-slate-200 bg-white" aria-label="Navigasi ' +
      escapeHtml(roleLabel) +
      '">' +
      '<div class="flex items-center gap-3 border-b border-slate-200 px-6 py-5"><div class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">S</div><div><p class="text-lg font-bold tracking-tight">SIATMA</p><p class="text-[10px] font-medium uppercase tracking-wider text-text-muted">TK Al-Matin</p></div></div>' +
      '<nav class="flex-1 overflow-y-auto py-4" aria-label="Menu ' +
      escapeHtml(roleLabel) +
      '">' +
      menu
        .map(function (item) {
          var active = item.key === activeMenu;
          return (
            '<a href="' +
            escapeHtml(prefix + item.href) +
            '" data-menu="' +
            escapeHtml(item.key) +
            '"' +
            (active ? ' aria-current="page"' : '') +
            ' class="mx-2 flex items-center gap-3 rounded-lg px-6 py-3 text-sm font-medium transition ' +
            (active ? 'bg-primary/10 text-primary' : 'text-text-muted hover:bg-primary/5 hover:text-primary') +
            '">' +
            (MENU_ICONS[item.icon] || '') +
            '<span>' +
            escapeHtml(item.label) +
            '</span></a>'
          );
        })
        .join('') +
      '</nav>' +
      '<div class="border-t border-slate-200 px-6 py-4"><div class="flex items-center gap-3"><div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">' +
      escapeHtml(initial) +
      '</div><div class="min-w-0 flex-1"><p class="truncate text-sm font-semibold">' +
      escapeHtml(displayName) +
      '</p><p class="truncate text-xs text-text-muted">' +
      escapeHtml(roleLabel) +
      '</p></div><button id="logoutButton" type="button" class="text-text-muted transition hover:text-primary" aria-label="Keluar">' +
      LOGOUT_ICON +
      '</button></div></div></aside>'
    );
  }

  function renderHeader(title, breadcrumb) {
    var user = window.SIATMA_AUTH && window.SIATMA_AUTH.getCurrentUser
      ? window.SIATMA_AUTH.getCurrentUser()
      : null;
    var displayName = user && user.nama ? user.nama : 'Pengguna';
    var initial = displayName.charAt(0).toUpperCase();

    return (
      '<header id="header" class="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">' +
      '<div class="min-w-0"><h1 class="truncate text-xl font-semibold">' +
      escapeHtml(title) +
      '</h1><p class="mt-0.5 truncate text-sm text-text-muted">' +
      escapeHtml(breadcrumb) +
      '</p></div><div class="flex items-center gap-5"><div class="relative hidden md:block"><label for="header-search" class="sr-only">Cari</label><svg class="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.2-4.2m0 0A7.5 7.5 0 1 0 6.194 6.194a7.5 7.5 0 0 0 10.606 10.606Z"/></svg><input id="header-search" type="search" placeholder="Cari..." class="w-56 rounded-lg border border-slate-200 bg-bg py-2 pl-10 pr-4 text-sm outline-none placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20" /></div><button type="button" class="relative text-text-muted transition hover:text-primary" aria-label="Notifikasi">' +
      MENU_ICONS.notification +
      '<span class="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-white">3</span></button><button type="button" aria-label="Profil ' +
      escapeHtml(displayName) +
      '"><span class="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">' +
      escapeHtml(initial) +
      '</span></button></div></header>'
    );
  }

  function initLayout(options) {
    var config = options || {};
    var role = config.role;
    var sidebar = document.getElementById('sidebar') || document.querySelector('aside');
    var header = document.getElementById('header') || document.querySelector('header');

    if (sidebar) {
      sidebar.outerHTML = renderSidebar(role, config.activeMenu, config.basePath);
    }
    if (header) {
      header.outerHTML = renderHeader(config.title || '', config.breadcrumb || '');
    }

    var logoutButton = document.getElementById('logoutButton');
    if (logoutButton && window.SIATMA_AUTH && window.SIATMA_AUTH.logout) {
      logoutButton.addEventListener('click', window.SIATMA_AUTH.logout);
    }

    var user = window.SIATMA_AUTH && window.SIATMA_AUTH.requireAuth
      ? window.SIATMA_AUTH.requireAuth(role)
      : null;

    return user;
  }

  window.SIATMA_LAYOUT = {
    renderSidebar: renderSidebar,
    renderHeader: renderHeader,
    initLayout: initLayout,
  };
})(window);
