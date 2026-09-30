(function (window) {
  'use strict';

  // === EMPTY STATE ===
  function renderEmptyState(options) {
    var opts = options || {};
    var title = opts.title || 'Belum ada data';
    var description = opts.description || 'Data akan muncul di sini setelah ditambahkan.';
    var icon = opts.icon || '<svg class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/></svg>';

    return '<div class="flex flex-col items-center justify-center px-6 py-12 text-center">' +
      '<div class="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-text-muted">' + icon + '</div>' +
      '<h3 class="mt-4 text-base font-semibold text-text">' + title + '</h3>' +
      '<p class="mt-1 max-w-sm text-sm text-text-muted">' + description + '</p>' +
      '</div>';
  }

  // === LOADING STATE ===
  function renderLoadingState(message) {
    var msg = message || 'Memuat data...';
    return '<div class="flex flex-col items-center justify-center px-6 py-12 text-center">' +
      '<svg class="h-10 w-10 animate-spin text-primary" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>' +
      '<p class="mt-3 text-sm text-text-muted">' + msg + '</p>' +
      '</div>';
  }

  function renderSkeletonTable(rows, cols) {
    rows = rows || 5;
    cols = cols || 5;
    var html = '<div class="animate-pulse space-y-3 p-6">';
    for (var i = 0; i < rows; i += 1) {
      html += '<div class="flex gap-4">';
      for (var j = 0; j < cols; j += 1) {
        html += '<div class="h-4 flex-1 rounded bg-slate-200"></div>';
      }
      html += '</div>';
    }
    html += '</div>';
    return html;
  }

  // === CONFIRM DIALOG ===
  function confirmAction(message, onConfirm, onCancel) {
    var msg = message || 'Yakin ingin melanjutkan?';
    if (window.confirm(msg)) {
      if (typeof onConfirm === 'function') onConfirm();
    } else {
      if (typeof onCancel === 'function') onCancel();
    }
  }

  // === FORMAT DATE ===
  function formatDate(dateStr, format) {
    if (!dateStr) return '-';
    var d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;

    var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
                  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    var monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
                       'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

    if (format === 'short') {
      return d.getDate() + ' ' + monthsShort[d.getMonth()] + ' ' + d.getFullYear();
    }
    if (format === 'day') {
      return days[d.getDay()];
    }
    return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
  }

  window.SIATMA_UI = {
    emptyState: renderEmptyState,
    loadingState: renderLoadingState,
    skeletonTable: renderSkeletonTable,
    confirm: confirmAction,
    formatDate: formatDate
  };
})(window);