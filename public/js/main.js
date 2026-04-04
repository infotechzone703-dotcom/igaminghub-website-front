// iGaming Hub - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {

  // ─── Auto-dismiss alerts ──────────────────────────────────────────────────
  document.querySelectorAll('.alert').forEach(alert => {
    setTimeout(() => {
      alert.style.opacity = '0';
      alert.style.transform = 'translateY(-10px)';
      alert.style.transition = 'all 0.4s ease';
      setTimeout(() => alert.remove(), 400);
    }, 4500);
  });

  // ─── Active sidebar link ──────────────────────────────────────────────────
  const currentPath = window.location.pathname;
  document.querySelectorAll('.sidebar-nav a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // ─── Modal management ────────────────────────────────────────────────────
  window.openModal = (id) => {
    document.getElementById(id).classList.add('active');
  };

  window.closeModal = (id) => {
    document.getElementById(id).classList.remove('active');
  };

  // Close modal on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  });

  // ─── Copy to clipboard ───────────────────────────────────────────────────
  window.copyText = (text, btn) => {
    navigator.clipboard.writeText(text).then(() => {
      const originalText = btn.innerHTML;
      btn.innerHTML = '✅';
      setTimeout(() => { btn.innerHTML = originalText; }, 2000);
    });
  };

  // ─── Confirm delete / toggle ─────────────────────────────────────────────
  document.querySelectorAll('[data-confirm]').forEach(el => {
    el.addEventListener('click', (e) => {
      if (!confirm(el.dataset.confirm)) e.preventDefault();
    });
  });

  // ─── Theme: Animate numbers ──────────────────────────────────────────────
  document.querySelectorAll('.stat-value[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const isDecimal = target % 1 !== 0;
    let start = 0;
    const duration = 1200;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      el.textContent = prefix + (isDecimal ? start.toFixed(2) : Math.floor(start).toLocaleString()) + suffix;
    }, 16);
  });

  // ─── Game launch handler ─────────────────────────────────────────────────
  window.launchGame = async (gameUid, gameName) => {
    const modal = document.getElementById('launchModal');
    if (modal) {
      document.getElementById('launchGameName').textContent = gameName;
      openModal('launchModal');
    }

    const res = await fetch('/proxy/launch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ game_uid: gameUid })
    });

    const data = await res.json();

    if (data.success && data.url) {
      window.open(data.url, '_blank', 'width=1200,height=700,resizable=yes');
      if (modal) closeModal('launchModal');
    } else {
      if (modal) closeModal('launchModal');
      showToast(data.message || 'Failed to launch game', 'error');
    }
  };

  // ─── Toast notifications ─────────────────────────────────────────────────
  window.showToast = (msg, type = 'info') => {
    const toast = document.createElement('div');
    const colors = { success: '#10b981', error: '#ef4444', info: '#6366f1', warning: '#f59e0b' };
    toast.style.cssText = `
      position:fixed; bottom:24px; right:24px; z-index:9999;
      background:var(--bg-card); border:1px solid ${colors[type]}44;
      border-left:3px solid ${colors[type]};
      color:var(--text-primary); padding:14px 18px;
      border-radius:10px; font-size:0.875rem; max-width:320px;
      box-shadow:0 8px 32px rgba(0,0,0,0.4);
      animation: slideIn 0.3s ease;
    `;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

  // ─── Mobile sidebar toggle ────────────────────────────────────────────────
  const menuBtn = document.getElementById('menuToggle');
  const sidebar = document.querySelector('.sidebar');
  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
  }

  // ─── Form validation ─────────────────────────────────────────────────────
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', (e) => {
      const required = form.querySelectorAll('[required]');
      let valid = true;
      required.forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = 'var(--danger)';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });
      if (!valid) {
        e.preventDefault();
        showToast('Please fill all required fields', 'error');
      }
    });
  });

  // ─── Provider filter ──────────────────────────────────────────────────────
  const providerFilter = document.getElementById('providerFilter');
  if (providerFilter) {
    providerFilter.addEventListener('change', () => {
      const url = new URL(window.location);
      url.searchParams.set('provider', providerFilter.value);
      window.location = url;
    });
  }

  // ─── Search ──────────────────────────────────────────────────────────────
  const searchInput = document.getElementById('gameSearch');
  if (searchInput) {
    let timeout;
    searchInput.addEventListener('input', () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const url = new URL(window.location);
        url.searchParams.set('search', searchInput.value);
        window.location = url;
      }, 500);
    });
  }

  // ─── Marketing: Smooth scroll ────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ─── Sticky nav on scroll ────────────────────────────────────────────────
  const nav = document.querySelector('.marketing-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.background = window.scrollY > 50
        ? 'rgba(8,10,20,0.98)'
        : 'rgba(8,10,20,0.85)';
    });
  }

});
