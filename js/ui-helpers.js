(function (window) {
  'use strict';

  // === EMPTY STATE ===
  // Dipakai saat daftar kosong supaya pengguna tahu belum ada data, bukan melihat area kosong.
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
  // Spinner SVG memberi tanda proses sedang berjalan tanpa bergantung pada gambar eksternal.
  function renderLoadingState(message) {
    var msg = message || 'Memuat data...';
    return '<div class="flex flex-col items-center justify-center px-6 py-12 text-center">' +
      '<svg class="h-10 w-10 animate-spin text-primary" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>' +
      '<p class="mt-3 text-sm text-text-muted">' + msg + '</p>' +
      '</div>';
  }

  // Efek pulse bikin bentuk tabel sementara terlihat aktif selama data tabel belum siap.
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
  // Pakai dialog bawaan browser agar konfirmasi tetap sederhana dan berfungsi tanpa komponen modal tambahan.
  function confirmAction(message, onConfirm, onCancel) {
    var msg = message || 'Yakin ingin melanjutkan?';
    if (window.confirm(msg)) {
      if (typeof onConfirm === 'function') onConfirm();
    } else {
      if (typeof onCancel === 'function') onCancel();
    }
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  function renderApresiasiTable(containerId, data, categoryTitle, period) {
    var container = document.getElementById(containerId);
    if (!container) return;

    if (!Array.isArray(data) || data.length === 0) {
      container.innerHTML = '<p class="rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-8 text-center text-sm text-text-muted">Belum ada data penilaian untuk periode ini.</p>';
      return;
    }

    var isAttendance = String(categoryTitle || '').toLowerCase() === 'kehadiran';
    var heading = isAttendance ? 'Nilai/Indikator (Kehadiran)' :
      'Nilai/Indikator' + (categoryTitle ? ' (' + escapeHtml(categoryTitle) + ')' : '');
    var rows = data.map(function (item) {
      var rankClass = item.rank === 1 ? 'text-yellow-500 font-bold' :
        item.rank === 2 ? 'text-slate-500 font-bold' :
          item.rank === 3 ? 'text-amber-700 font-bold' : 'text-text';
      var score = Number(item.nilai);
      var formattedScore = Number.isFinite(score) ? score + (isAttendance ? '%' : '') : '-';
      return '<tr class="border-t border-slate-100 dark:border-slate-700 transition hover:bg-slate-50 dark:hover:bg-slate-700/50">' +
        '<td class="whitespace-nowrap px-4 py-3 ' + rankClass + '">' + escapeHtml(item.rank) + '</td>' +
        '<td class="px-4 py-3 font-medium">' + escapeHtml(item.nama) + '</td>' +
        '<td class="px-4 py-3">' + escapeHtml(item.kelas) + '</td>' +
        '<td class="whitespace-nowrap px-4 py-3">' + escapeHtml(formattedScore) + '</td>' +
        '<td class="whitespace-nowrap px-4 py-3">' + escapeHtml(item.periode || period) + '</td>' +
        '</tr>';
    }).join('');

    container.innerHTML = '<div class="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">' +
      '<table class="min-w-full divide-y divide-slate-100 dark:divide-slate-700 text-left text-sm">' +
      '<thead class="bg-slate-50 dark:bg-slate-700/60"><tr>' +
      '<th scope="col" class="px-4 py-3 font-semibold">Peringkat</th>' +
      '<th scope="col" class="px-4 py-3 font-semibold">Nama Siswa</th>' +
      '<th scope="col" class="px-4 py-3 font-semibold">Kelas</th>' +
      '<th scope="col" class="px-4 py-3 font-semibold">' + heading + '</th>' +
      '<th scope="col" class="px-4 py-3 font-semibold">Periode</th>' +
      '</tr></thead><tbody>' + rows + '</tbody></table></div>';
  }

  // === FORMAT DATE ===
  // Format 'short' memakai nama bulan singkat, 'day' hanya nama hari, dan default menampilkan tanggal lengkap.
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
    formatDate: formatDate,
    renderApresiasiTable: renderApresiasiTable
  };
  window.renderApresiasiTable = renderApresiasiTable;
})(window);