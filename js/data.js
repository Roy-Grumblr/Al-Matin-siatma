(function (window) {
  'use strict';

  var SIATMA_DATA = {
    users: [
      { username: 'admin', password: 'admin123', nama: 'Admin Sekolah', role: 'admin' },
      { username: 'guru', password: 'guru123', nama: 'Siti Aminah', role: 'guru' },
      { username: 'orangtua', password: 'ortu123', nama: 'Siti Rahma', role: 'orangtua', studentId: 2 },
    ],

    students: [
      {
        id: 1,
        nis: '2024001',
        nik: '3171010101200001',
        nama: 'Andi Pratama',
        namaPanggilan: 'Andi',
        tempatLahir: 'Jakarta',
        tanggalLahir: '2020-01-15',
        jenisKelamin: 'Laki-laki',
        alamat: 'Jl. Melati No. 10, Jakarta Timur',
        kelas: 'TK A',
        tahunAjaran: '2026/2027',
        status: 'Aktif',
        namaAyah: 'Budi Pratama',
        namaIbu: 'Sari Pratama',
        nomorHP: '081234567801',
        email: 'sari.pratama@example.com',
      },
      {
        id: 2,
        nis: '2024002',
        nik: '3171010101200002',
        nama: 'Aisyah Putri',
        namaPanggilan: 'Aisyah',
        tempatLahir: 'Jakarta',
        tanggalLahir: '2020-02-20',
        jenisKelamin: 'Perempuan',
        alamat: 'Jl. Mawar No. 8, Jakarta Selatan',
        kelas: 'TK A',
        tahunAjaran: '2026/2027',
        status: 'Aktif',
        namaAyah: 'Rizal Hidayat',
        namaIbu: 'Dewi Hidayat',
        nomorHP: '081234567802',
        email: 'dewi.hidayat@example.com',
      },
      {
        id: 3,
        nis: '2024003',
        nik: '3171010101200003',
        nama: 'Budi Saputra',
        namaPanggilan: 'Budi',
        tempatLahir: 'Depok',
        tanggalLahir: '2020-03-15',
        jenisKelamin: 'Laki-laki',
        alamat: 'Jl. Anggrek No. 12, Depok',
        kelas: 'TK A',
        tahunAjaran: '2026/2027',
        status: 'Aktif',
        namaAyah: 'Hendra Saputra',
        namaIbu: 'Maya Saputra',
        nomorHP: '081234567803',
        email: 'maya.saputra@example.com',
      },
      {
        id: 4,
        nis: '2024004',
        nik: '3171010101200004',
        nama: 'Citra Dewi',
        namaPanggilan: 'Citra',
        tempatLahir: 'Bekasi',
        tanggalLahir: '2020-04-18',
        jenisKelamin: 'Perempuan',
        alamat: 'Jl. Kenanga No. 5, Bekasi',
        kelas: 'TK A',
        tahunAjaran: '2026/2027',
        status: 'Aktif',
        namaAyah: 'Agus Setiawan',
        namaIbu: 'Rina Setiawan',
        nomorHP: '081234567804',
        email: 'rina.setiawan@example.com',
      },
      {
        id: 5,
        nis: '2024005',
        nik: '3171010101200005',
        nama: 'Dinda Ayu',
        namaPanggilan: 'Dinda',
        tempatLahir: 'Jakarta',
        tanggalLahir: '2020-05-25',
        jenisKelamin: 'Perempuan',
        alamat: 'Jl. Dahlia No. 7, Jakarta Barat',
        kelas: 'TK A',
        tahunAjaran: '2026/2027',
        status: 'Aktif',
        namaAyah: 'Fajar Nugroho',
        namaIbu: 'Lilis Nugroho',
        nomorHP: '081234567805',
        email: 'lilis.nugroho@example.com',
      },
      {
        id: 6,
        nis: '2024006',
        nik: '3171010101200006',
        nama: 'Eka Nugraha',
        namaPanggilan: 'Eka',
        tempatLahir: 'Bogor',
        tanggalLahir: '2020-06-10',
        jenisKelamin: 'Laki-laki',
        alamat: 'Jl. Flamboyan No. 3, Bogor',
        kelas: 'TK B',
        tahunAjaran: '2026/2027',
        status: 'Aktif',
        namaAyah: 'Dedi Nugraha',
        namaIbu: 'Nia Nugraha',
        nomorHP: '081234567806',
        email: 'nia.nugraha@example.com',
      },
      {
        id: 7,
        nis: '2024007',
        nik: '3171010101200007',
        nama: 'Fajar Ramadhan',
        namaPanggilan: 'Fajar',
        tempatLahir: 'Tangerang',
        tanggalLahir: '2020-07-15',
        jenisKelamin: 'Laki-laki',
        alamat: 'Jl. Cempaka No. 14, Tangerang',
        kelas: 'TK B',
        tahunAjaran: '2026/2027',
        status: 'Aktif',
        namaAyah: 'Rudi Ramadhan',
        namaIbu: 'Wati Ramadhan',
        nomorHP: '081234567807',
        email: 'wati.ramadhan@example.com',
      },
      {
        id: 8,
        nis: '2024008',
        nik: '3171010101200008',
        nama: 'Gita Permata',
        namaPanggilan: 'Gita',
        tempatLahir: 'Jakarta',
        tanggalLahir: '2020-08-22',
        jenisKelamin: 'Perempuan',
        alamat: 'Jl. Teratai No. 9, Jakarta Utara',
        kelas: 'TK B',
        tahunAjaran: '2026/2027',
        status: 'Aktif',
        namaAyah: 'Hadi Permata',
        namaIbu: 'Susi Permata',
        nomorHP: '081234567808',
        email: 'susi.permata@example.com',
      },
      {
        id: 9,
        nis: '2024009',
        nik: '3171010101200009',
        nama: 'Hana Safitri',
        namaPanggilan: 'Hana',
        tempatLahir: 'Tangerang Selatan',
        tanggalLahir: '2020-09-19',
        jenisKelamin: 'Perempuan',
        alamat: 'Jl. Kamboja No. 6, Tangerang Selatan',
        kelas: 'TK B',
        tahunAjaran: '2026/2027',
        status: 'Aktif',
        namaAyah: 'Imam Safitri',
        namaIbu: 'Yani Safitri',
        nomorHP: '081234567809',
        email: 'yani.safitri@example.com',
      },
      {
        id: 10,
        nis: '2024010',
        nik: '3171010101200010',
        nama: 'Irfan Maulana',
        namaPanggilan: 'Irfan',
        tempatLahir: 'Jakarta',
        tanggalLahir: '2020-10-10',
        jenisKelamin: 'Laki-laki',
        alamat: 'Jl. Nusa Indah No. 11, Jakarta Pusat',
        kelas: 'TK B',
        tahunAjaran: '2026/2027',
        status: 'Aktif',
        namaAyah: 'Joko Maulana',
        namaIbu: 'Erna Maulana',
        nomorHP: '081234567810',
        email: 'erna.maulana@example.com',
      },
    ],

    teachers: [
      { id: 1, nip: 'G001', nama: 'Siti Aminah', email: 'siti.aminah@almatin.sch.id', nomorHP: '081234568001', kelas: 'TK A', status: 'Aktif' },
      { id: 2, nip: 'G002', nama: 'Rina Wulandari', email: 'rina.wulandari@almatin.sch.id', nomorHP: '081234568002', kelas: 'TK B', status: 'Aktif' },
      { id: 3, nip: 'G003', nama: 'Dewi Lestari', email: 'dewi.lestari@almatin.sch.id', nomorHP: '081234568003', kelas: 'Kelompok Bermain', status: 'Aktif' },
      { id: 4, nip: 'G004', nama: 'Nur Hidayah', email: 'nur.hidayah@almatin.sch.id', nomorHP: '081234568004', kelas: 'TK A Sore', status: 'Aktif' },
      { id: 5, nip: 'G005', nama: 'Fitri Handayani', email: 'fitri.handayani@almatin.sch.id', nomorHP: '081234568005', kelas: 'TK B Sore', status: 'Aktif' },
    ],

    classes: [
      { id: 1, nama: 'TK A', guru: 'Siti Aminah', jumlahSiswa: 5, tahunAjaran: '2026/2027', status: 'Aktif' },
      { id: 2, nama: 'TK B', guru: 'Rina Wulandari', jumlahSiswa: 5, tahunAjaran: '2026/2027', status: 'Aktif' },
      { id: 3, nama: 'Kelompok Bermain', guru: 'Dewi Lestari', jumlahSiswa: 0, tahunAjaran: '2026/2027', status: 'Aktif' },
      { id: 4, nama: 'TK A Sore', guru: 'Nur Hidayah', jumlahSiswa: 0, tahunAjaran: '2026/2027', status: 'Aktif' },
      { id: 5, nama: 'TK B Sore', guru: 'Fitri Handayani', jumlahSiswa: 0, tahunAjaran: '2026/2027', status: 'Aktif' },
    ],

    attendance: [
      { id: 1, studentId: 1, tanggal: '2026-09-20', status: 'Hadir', catatan: '' },
      { id: 2, studentId: 1, tanggal: '2026-09-21', status: 'Hadir', catatan: '' },
      { id: 3, studentId: 1, tanggal: '2026-09-22', status: 'Sakit', catatan: 'Demam ringan' },
      { id: 4, studentId: 1, tanggal: '2026-09-23', status: 'Hadir', catatan: '' },
      { id: 5, studentId: 1, tanggal: '2026-09-24', status: 'Hadir', catatan: '' },
      { id: 6, studentId: 2, tanggal: '2026-09-20', status: 'Hadir', catatan: '' },
      { id: 7, studentId: 2, tanggal: '2026-09-21', status: 'Izin', catatan: 'Keperluan keluarga' },
      { id: 8, studentId: 2, tanggal: '2026-09-22', status: 'Hadir', catatan: '' },
      { id: 9, studentId: 2, tanggal: '2026-09-23', status: 'Hadir', catatan: '' },
      { id: 10, studentId: 2, tanggal: '2026-09-24', status: 'Hadir', catatan: '' },
      { id: 11, studentId: 3, tanggal: '2026-09-20', status: 'Hadir', catatan: '' },
      { id: 12, studentId: 3, tanggal: '2026-09-21', status: 'Hadir', catatan: '' },
      { id: 13, studentId: 3, tanggal: '2026-09-22', status: 'Hadir', catatan: '' },
      { id: 14, studentId: 3, tanggal: '2026-09-23', status: 'Sakit', catatan: 'Batuk dan pilek' },
      { id: 15, studentId: 3, tanggal: '2026-09-24', status: 'Hadir', catatan: '' },
      { id: 16, studentId: 4, tanggal: '2026-09-20', status: 'Hadir', catatan: '' },
      { id: 17, studentId: 4, tanggal: '2026-09-21', status: 'Hadir', catatan: '' },
      { id: 18, studentId: 4, tanggal: '2026-09-22', status: 'Izin', catatan: 'Acara keluarga' },
      { id: 19, studentId: 4, tanggal: '2026-09-23', status: 'Hadir', catatan: '' },
      { id: 20, studentId: 4, tanggal: '2026-09-24', status: 'Hadir', catatan: '' },
      { id: 21, studentId: 5, tanggal: '2026-09-20', status: 'Hadir', catatan: '' },
      { id: 22, studentId: 5, tanggal: '2026-09-21', status: 'Hadir', catatan: '' },
      { id: 23, studentId: 5, tanggal: '2026-09-22', status: 'Hadir', catatan: '' },
      { id: 24, studentId: 5, tanggal: '2026-09-23', status: 'Alpa', catatan: 'Tidak ada keterangan' },
      { id: 25, studentId: 5, tanggal: '2026-09-24', status: 'Hadir', catatan: '' },
    ],

    announcements: [
      { id: 1, judul: 'Kegiatan Maulid Nabi', isi: 'Kegiatan Maulid Nabi akan dilaksanakan di aula sekolah dengan melibatkan seluruh siswa dan guru.', tanggal: '2026-09-22', target: 'Semua Orang Tua', status: 'Aktif', author: 'Admin Sekolah' },
      { id: 2, judul: 'Outing Class TK A', isi: 'Siswa TK A akan mengikuti kegiatan belajar di luar kelas. Informasi perlengkapan akan dibagikan melalui wali kelas.', tanggal: '2026-09-21', target: 'TK A', status: 'Aktif', author: 'Siti Aminah' },
      { id: 3, judul: 'Libur Semester Ganjil', isi: 'Libur semester ganjil mengikuti kalender akademik TK Al-Matin.', tanggal: '2026-09-20', target: 'Semua', status: 'Aktif', author: 'Admin Sekolah' },
      { id: 4, judul: 'Rapat Orang Tua Siswa', isi: 'Rapat orang tua siswa akan membahas evaluasi pembelajaran dan program sekolah.', tanggal: '2026-09-19', target: 'Semua Orang Tua', status: 'Aktif', author: 'Admin Sekolah' },
      { id: 5, judul: 'Pembagian Rapor', isi: 'Jadwal pembagian rapor semester ganjil sedang disiapkan oleh pihak sekolah.', tanggal: '2026-09-18', target: 'Semua', status: 'Draft', author: 'Admin Sekolah' },
    ],

    developments: [
      { id: 1, studentId: 1, tanggal: '2026-09-20', kategori: 'Bahasa', catatan: 'Mampu menceritakan pengalaman sederhana dengan kalimat yang semakin runtut.', guru: 'Siti Aminah' },
      { id: 2, studentId: 1, tanggal: '2026-09-21', kategori: 'Kemandirian', catatan: 'Mulai terbiasa menyimpan tas dan perlengkapan belajar di tempatnya.', guru: 'Siti Aminah' },
      { id: 3, studentId: 2, tanggal: '2026-09-20', kategori: 'Sosial', catatan: 'Mau berbagi alat bermain dan bekerja sama dengan teman dalam kelompok kecil.', guru: 'Siti Aminah' },
      { id: 4, studentId: 2, tanggal: '2026-09-22', kategori: 'Kognitif', catatan: 'Mampu mengelompokkan benda berdasarkan warna dan bentuk dengan tepat.', guru: 'Siti Aminah' },
      { id: 5, studentId: 3, tanggal: '2026-09-20', kategori: 'Motorik', catatan: 'Koordinasi gerak dan keseimbangan berkembang baik saat mengikuti permainan gerak.', guru: 'Siti Aminah' },
      { id: 6, studentId: 3, tanggal: '2026-09-23', kategori: 'Bahasa', catatan: 'Kosakata bertambah dan mampu mengikuti instruksi dua tahap.', guru: 'Siti Aminah' },
      { id: 7, studentId: 4, tanggal: '2026-09-21', kategori: 'Sosial', catatan: 'Mulai berani menyampaikan pendapat dan menunggu giliran berbicara.', guru: 'Siti Aminah' },
      { id: 8, studentId: 4, tanggal: '2026-09-24', kategori: 'Kemandirian', catatan: 'Mampu mencuci tangan dan merapikan meja setelah kegiatan tanpa diingatkan.', guru: 'Siti Aminah' },
    ],
  };

  function readStoredArray(key) {
    try {
      var value = JSON.parse(window.localStorage.getItem(key) || '[]');
      if (!Array.isArray(value)) throw new TypeError('Expected an array in ' + key);
      return value;
    } catch (error) {
      console.error('Gagal memuat data tersimpan: ' + key, error);
      return [];
    }
  }

  function mergeStoredRecords(target, records, match) {
    records.forEach(function (record) {
      var index = target.findIndex(function (item) { return match(item, record); });
      if (index >= 0) target[index] = Object.assign({}, target[index], record);
      else target.push(record);
    });
  }

  mergeStoredRecords(SIATMA_DATA.students, readStoredArray('siatma_students_extra'), function (item, record) {
    return item.id === record.id || item.nis === record.nis;
  });
  readStoredArray('siatma_students_override').forEach(function (override) {
    var student = SIATMA_DATA.students.find(function (item) { return item.id === Number(override.id); });
    if (student) student.status = override.status;
  });
  mergeStoredRecords(SIATMA_DATA.teachers, readStoredArray('siatma_teachers_extra'), function (item, record) {
    return item.id === record.id || item.nip === record.nip;
  });
  readStoredArray('siatma_teachers_override').forEach(function (override) {
    var teacher = SIATMA_DATA.teachers.find(function (item) { return item.id === Number(override.id); });
    if (teacher) teacher.status = override.status;
  });
  mergeStoredRecords(SIATMA_DATA.announcements, readStoredArray('siatma_announcements_extra'), function (item, record) {
    return item.id === record.id;
  });
  mergeStoredRecords(SIATMA_DATA.developments, readStoredArray('siatma_developments_extra'), function (item, record) {
    return item.id === record.id;
  });

  readStoredArray('siatma_attendance').forEach(function (record) {
    var student = SIATMA_DATA.students.find(function (item) { return item.nis === record.nis; });
    if (!student) return;
    var attendance = {
      id: record.id,
      studentId: student.id,
      tanggal: record.tanggal,
      status: record.status,
      catatan: record.catatan || ''
    };
    var index = SIATMA_DATA.attendance.findIndex(function (item) {
      return item.studentId === student.id && item.tanggal === record.tanggal;
    });
    if (index >= 0) SIATMA_DATA.attendance[index] = Object.assign({}, SIATMA_DATA.attendance[index], attendance);
    else SIATMA_DATA.attendance.push(attendance);
  });

  var SIATMA = {
    getStudentById: function (id) {
      return SIATMA_DATA.students.find(function (student) {
        return student.id === Number(id);
      });
    },

    getStudentsByClass: function (kelas) {
      return SIATMA_DATA.students.filter(function (student) {
        return student.kelas === kelas;
      });
    },

    getAttendanceByStudent: function (studentId) {
      return SIATMA_DATA.attendance.filter(function (record) {
        return record.studentId === Number(studentId);
      });
    },

    getAttendanceSummary: function (studentId, month) {
      var attendance = this.getAttendanceByStudent(studentId);
      if (month) {
        attendance = attendance.filter(function (record) {
          return record.tanggal.slice(0, 7) === month;
        });
      }
      return attendance.reduce(
        function (summary, record) {
          var status = record.status.toLowerCase();
          if (Object.prototype.hasOwnProperty.call(summary, status)) {
            summary[status] += 1;
          }
          return summary;
        },
        { hadir: 0, sakit: 0, izin: 0, alpa: 0 },
      );
    },

    getTeacherById: function (id) {
      return SIATMA_DATA.teachers.find(function (teacher) {
        return teacher.id === Number(id);
      });
    },

    getDevelopmentsByStudent: function (studentId) {
      return SIATMA_DATA.developments.filter(function (development) {
        return development.studentId === Number(studentId);
      });
    },
  };

  window.SIATMA_DATA = SIATMA_DATA;
  window.SIATMA = SIATMA;
})(window);
