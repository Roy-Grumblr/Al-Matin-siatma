(function (window) {
  'use strict';

  // Kunci sesi di storage browser dan tujuan dashboard tiap role.
  var STORAGE_KEY = 'siatma_user';
  var REDIRECT_PATHS = {
    admin: 'admin/dashboard.html',
    guru: 'guru/dashboard.html',
    orangtua: 'orangtua/dashboard.html',
  };

  function getRedirectPath(role) {
    return REDIRECT_PATHS[role] || 'index.html';
  }

  function getPagePrefix() {
    var path = window.location.pathname.replace(/\\/g, '/');
    // Halaman role berada satu folder di bawah root, jadi butuh ../ saat mengarah balik ke login atau dashboard.
    return /\/(admin|guru|orangtua)\//.test(path) ? '../' : '';
  }

  function redirectTo(path) {
    window.location.href = getPagePrefix() + path;
  }

  function login(username, password, remember) {
    var users = window.SIATMA_DATA && window.SIATMA_DATA.users;
    var user = users
      ? users.find(function (item) {
          return item.username === username && item.password === password;
        })
      : null;

    if (!user) {
      return { success: false, message: 'Username atau password salah' };
    }

    // Jangan simpan password di storage sesi; halaman lain hanya perlu identitas dan role user.
    var storedUser = Object.assign({}, user);
    delete storedUser.password;
    try {
      if (remember) {
        window.sessionStorage.removeItem(STORAGE_KEY);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storedUser));
        // Pastikan sesi benar-benar tersimpan, karena localStorage bisa gagal tanpa hasil yang bisa dipakai.
        var verify = window.localStorage.getItem(STORAGE_KEY);
        if (!verify) {
          return { success: false, message: 'Gagal menyimpan sesi login.' };
        }
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storedUser));
      }
    } catch (error) {
      var message = error.name === 'QuotaExceededError'
        ? 'Penyimpanan browser penuh. Hapus data lama atau gunakan mode incognito.'
        : 'Gagal menyimpan data: ' + error.message;
      return { success: false, message: message };
    }

    return { success: true, role: user.role };
  }

  function logout() {
    window.localStorage.removeItem(STORAGE_KEY);
    window.sessionStorage.removeItem(STORAGE_KEY);
    window.location.href = getPagePrefix() + 'index.html';
  }

  function getCurrentUser() {
    var storedUser = window.localStorage.getItem(STORAGE_KEY) || window.sessionStorage.getItem(STORAGE_KEY);
    if (!storedUser) {
      return null;
    }

    try {
      return JSON.parse(storedUser);
    } catch (error) {
      window.localStorage.removeItem(STORAGE_KEY);
      window.sessionStorage.removeItem(STORAGE_KEY);
      return null;
    }
  }

  function isLoggedIn() {
    return getCurrentUser() !== null;
  }

  function requireAuth(role) {
    // Alurnya: ambil user, cek halaman login dan role, lalu izinkan akses atau arahkan ke halaman yang sesuai.
    var user = getCurrentUser();
    var currentPath = window.location.pathname;
    var isLoginPage = /\/index\.html$/.test(currentPath) || /\/$/.test(currentPath);

    if (!user) {
      // Di halaman login jangan redirect lagi agar pemeriksaan ini tidak membuat redirect loop.
      if (!isLoginPage) {
        window.location.href = getPagePrefix() + 'index.html';
      }
      return null;
    }

    if (isLoginPage) {
      return user;
    }

    if (role && user.role !== role) {
      redirectTo(getRedirectPath(user.role));
      return null;
    }

    return user;
  }

  function showLoginError(message) {
    var errorElement = document.getElementById('loginError');

    if (errorElement) {
      errorElement.textContent = message || '';
      errorElement.classList.toggle('hidden', !message);
      if (message) {
        var passwordInput = document.getElementById('password');
        if (passwordInput) passwordInput.focus();
      }
      if (window.SIATMA_TOAST) {
        if (message) window.SIATMA_TOAST.error(message);
      }
    }
  }

  function handleLoginForm(event) {
    event.preventDefault();

    var form = event.currentTarget;
    var errorElement = document.getElementById('loginError');
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.classList.add('hidden');
    }
    var username = form.elements.username.value.trim();
    var password = form.elements.password.value;
    // Cek panjang minimum di sisi form sebelum mencocokkan akun agar input kosong atau terlalu pendek ditolak.
    if (!username || username.length < 3) {
      showLoginError('Username minimal 3 karakter');
      return;
    }
    if (!password || password.length < 6) {
      showLoginError('Password minimal 6 karakter');
      return;
    }
    var remember = form.elements.remember && form.elements.remember.checked;
    var result = login(username, password, remember);

    if (!result.success) {
      showLoginError(result.message);
      return result;
    }

    window.location.href = getRedirectPath(result.role);
    if (window.SIATMA_TOAST) {
      window.SIATMA_TOAST.success('Login berhasil. Selamat datang!');
    }
    return result;
  }

  window.SIATMA_AUTH = {
    login: login,
    logout: logout,
    getCurrentUser: getCurrentUser,
    isLoggedIn: isLoggedIn,
    requireAuth: requireAuth,
    getRedirectPath: getRedirectPath,
    handleLoginForm: handleLoginForm,
  };

  document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', handleLoginForm);
    }
  });
})(window);
