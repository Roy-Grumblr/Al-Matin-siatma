(function (window) {
  'use strict';

  function init() {
    window.addEventListener('online', function () {
      if (window.SIATMA_TOAST) window.SIATMA_TOAST.success('Koneksi kembali online');
    });
    window.addEventListener('offline', function () {
      if (window.SIATMA_TOAST) window.SIATMA_TOAST.warning('Koneksi terputus. Beberapa fitur mungkin tidak berfungsi');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
