(function (window) {
  'use strict';

  var deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', function (event) {
    event.preventDefault();
    deferredPrompt = event;
    showBanner();
  });

  function isSub() {
    return /\/(admin|guru|orangtua)\//.test(window.location.pathname);
  }

  function showBanner() {
    if (document.getElementById('pwa-install-banner')) return;
    if (localStorage.getItem('siatma_pwa_dismissed') === '1') return;

    var banner = document.createElement('div');
    banner.id = 'pwa-install-banner';
    banner.className = 'fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-800';
    banner.innerHTML =
      '<div class="flex items-start gap-3">' +
        '<img src="' + (isSub() ? '../' : '') + 'assets/logo-tk.png" alt="SIATMA" class="h-12 w-12 rounded-lg object-contain" />' +
        '<div class="flex-1">' +
          '<p class="text-sm font-semibold">Install SIATMA</p>' +
          '<p class="mt-1 text-xs text-text-muted dark:text-slate-400">Akses lebih cepat dari home screen.</p>' +
          '<div class="mt-3 flex gap-2">' +
            '<button id="pwa-install-accept" class="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white hover:bg-primary-dark">Install</button>' +
            '<button id="pwa-install-dismiss" class="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium dark:border-slate-600">Nanti</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(banner);

    document.getElementById('pwa-install-accept').addEventListener('click', function () {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function (choice) {
          if (choice.outcome === 'accepted' && window.SIATMA_TOAST) {
            window.SIATMA_TOAST.success('SIATMA berhasil diinstall');
          }
          deferredPrompt = null;
        });
      }
      banner.remove();
    });

    document.getElementById('pwa-install-dismiss').addEventListener('click', function () {
      banner.remove();
      try { localStorage.setItem('siatma_pwa_dismissed', '1'); } catch (e) {}
    });
  }

  window.addEventListener('appinstalled', function () {
    if (window.SIATMA_TOAST) window.SIATMA_TOAST.success('SIATMA berhasil diinstall');
  });
})(window);
