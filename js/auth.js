(function (window) {
  'use strict';

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
    return /\/(admin|guru|orangtua)\//.test(path) ? '../' : '';
  }

  function redirectTo(path) {
    window.location.href = getPagePrefix() + path;
  }

  function login(username, password) {
    var users = window.SIATMA_DATA && window.SIATMA_DATA.users;
    var user = users
      ? users.find(function (item) {
          return item.username === username && item.password === password;
        })
      : null;

    if (!user) {
      return { success: false, message: 'Username atau password salah' };
    }

    var storedUser = Object.assign({}, user);
    delete storedUser.password;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storedUser));

    return { success: true, role: user.role };
  }

  function logout() {
    window.localStorage.removeItem(STORAGE_KEY);
    window.location.href = getPagePrefix() + 'index.html';
  }

  function getCurrentUser() {
    var storedUser = window.localStorage.getItem(STORAGE_KEY);
    if (!storedUser) {
      return null;
    }

    try {
      return JSON.parse(storedUser);
    } catch (error) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  }

  function isLoggedIn() {
    return getCurrentUser() !== null;
  }

  function requireAuth(role) {
    var user = getCurrentUser();

    if (!user) {
      redirectTo('index.html');
      return null;
    }

    if (role && user.role !== role) {
      redirectTo(getRedirectPath(user.role));
      return null;
    }

    return user;
  }

  function showLoginError(message) {
    var errorElement = document.getElementById('loginError');
    var form = document.getElementById('loginForm');

    if (!errorElement && form) {
      errorElement = document.createElement('p');
      errorElement.id = 'loginError';
      errorElement.className = 'text-sm text-red-600';
      errorElement.setAttribute('role', 'alert');
      form.insertBefore(errorElement, form.firstElementChild);
    }

    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  function handleLoginForm(event) {
    event.preventDefault();

    var form = event.currentTarget;
    var username = form.elements.username.value.trim();
    var password = form.elements.password.value;
    var result = login(username, password);

    if (!result.success) {
      showLoginError(result.message);
      return result;
    }

    window.location.href = getRedirectPath(result.role);
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
