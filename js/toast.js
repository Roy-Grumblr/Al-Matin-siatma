(function (window) {
  'use strict';

  function createToastContainer() {
    var container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none';
      document.body.appendChild(container);
    }
    return container;
  }

  function show(message, type, duration) {
    type = type || 'success';
    duration = duration || 3000;

    var container = createToastContainer();

    var toneClasses = {
      success: 'bg-green-50 border-green-200 text-green-800',
      error: 'bg-red-50 border-red-200 text-red-800',
      info: 'bg-blue-50 border-blue-200 text-blue-800',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-800'
    };

    var icons = {
      success: '<svg class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 2.25 2.25L15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>',
      error: '<svg class="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5m9.75-2.25a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"/></svg>',
      info: '<svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/></svg>',
      warning: '<svg class="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/></svg>'
    };

    var toast = document.createElement('div');
    toast.className = 'pointer-events-auto flex items-start gap-3 rounded-xl border ' + (toneClasses[type] || toneClasses.info) + ' px-4 py-3 shadow-lg transition-all duration-300 opacity-0 translate-x-full';
    toast.setAttribute('role', 'alert');
    toast.innerHTML = (icons[type] || icons.info) + '<p class="text-sm font-medium">' + message + '</p>';

    container.appendChild(toast);

    requestAnimationFrame(function () {
      toast.classList.remove('opacity-0', 'translate-x-full');
    });

    setTimeout(function () {
      toast.classList.add('opacity-0', 'translate-x-full');
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, duration);
  }

  window.SIATMA_TOAST = {
    show: show,
    success: function (msg) { show(msg, 'success'); },
    error: function (msg) { show(msg, 'error'); },
    info: function (msg) { show(msg, 'info'); },
    warning: function (msg) { show(msg, 'warning'); }
  };
})(window);