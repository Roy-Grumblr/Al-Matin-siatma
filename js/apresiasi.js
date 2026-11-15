(function (window, document) {
  'use strict';

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  function initialize() {
    var section = document.getElementById('apresiasi-section');
    if (!section || !window.SIATMA_AUTH || !window.getRankingData || !window.renderApresiasiTable) return;

    var user = window.SIATMA_AUTH.getCurrentUser();
    if (!user) return;
    var userId = user.id != null ? user.id : user.username;
    var classFilter = document.getElementById('apresiasi-class-filter');
    var periodFilter = document.getElementById('apresiasi-period-filter');
    var childClass = document.getElementById('apresiasi-child-class');

    if (user.role === 'orangtua') {
      var parent = window.SIATMA_DATA.users.find(function (item) {
        return item.role === 'orangtua' &&
          ((item.id != null && String(item.id) === String(userId)) ||
            (item.username && String(item.username) === String(userId)));
      });
      var student = parent && window.SIATMA.getStudentById(parent.studentId || parent.anakId);
      if (!student || !window.SIATMA_AUTH.validateParentAccess(userId, null)) {
        if (window.SIATMA_TOAST) window.SIATMA_TOAST.error('Akses Ditolak: Anda hanya bisa melihat kelas anak Anda.');
        return;
      }
      childClass.textContent = 'Kelas anak: ' + student.kelas;
    } else if (classFilter) {
      var classes = window.SIATMA_DATA.classes || [];
      classFilter.innerHTML = classes.map(function (item) {
        return '<option value="' + escapeHtml(item.id) + '">' + escapeHtml(item.nama) + '</option>';
      }).join('');
      if (user.role === 'guru') {
        var teacher = window.SIATMA_DATA.teachers.find(function (item) {
          return item.nama === user.nama;
        });
        if (teacher) {
          var teacherClass = classes.find(function (item) { return item.nama === teacher.kelas; });
          if (teacherClass) classFilter.value = teacherClass.id;
        }
      }
    }

    function render() {
      var selectedClassId = user.role === 'orangtua' ? null : classFilter.value;
      var period = periodFilter.value;
      [
        { id: 'table-terajin', category: 'kehadiran', title: 'kehadiran' },
        { id: 'table-membaca', category: 'membaca', title: 'membaca' },
        { id: 'table-menulis', category: 'menulis', title: 'menulis' },
        { id: 'table-ujian', category: 'ujian', title: 'ujian' }
      ].forEach(function (item) {
        var data = window.getRankingData(user.role, userId, selectedClassId, period, item.category);
        window.renderApresiasiTable(item.id, data, item.title, period);
      });
    }

    if (classFilter) classFilter.addEventListener('change', render);
    periodFilter.addEventListener('change', render);
    render();
  }

  window.SIATMA_APRESIASI = { init: initialize };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})(window, document);
