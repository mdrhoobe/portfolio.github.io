(function () {
'use strict';

// ═══════════════════════════════════════════
//  CONSTANTS
// ═══════════════════════════════════════════
var TOAST_MS = 2200;
var STAGGER  = 60;

// ═══════════════════════════════════════════
//  DOM REFS
// ═══════════════════════════════════════════
var yearSpan     = document.getElementById('year');
var toast        = document.getElementById('copied-toast');
var toastText    = document.getElementById('toast-text');
var contactBtn   = document.getElementById('btn');
var contactPanel = document.getElementById('contact-panel');
var socialBtn    = document.getElementById('social-btn');
var socialPanel  = document.getElementById('social-panel');
var backToTop    = document.getElementById('back-to-top');
var progress     = document.getElementById('reading-progress');
var printBtn     = document.getElementById('print-btn');
var themeToggle  = document.getElementById('theme-toggle');
var cmdOverlay   = document.getElementById('cmd-overlay');
var cmdInput     = document.getElementById('cmd-input');
var cmdResults   = document.getElementById('cmd-results');
var cmdTrigger   = document.getElementById('cmd-trigger');
var cursorDot    = document.getElementById('cursor-dot');
var easterEgg    = document.getElementById('easter-egg');
var easterClose  = document.getElementById('easter-close');

// ═══════════════════════════════════════════
//  YEAR
// ═══════════════════════════════════════════
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// ═══════════════════════════════════════════
//  THEME
// ═══════════════════════════════════════════
(function () {
  var saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next    = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }
})();

// ═══════════════════════════════════════════
//  READING PROGRESS
// ═══════════════════════════════════════════
function updateProgress() {
  if (!progress) return;
  var scrollTop = window.scrollY;
  var docH      = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (docH > 0 ? (scrollTop / docH) * 100 : 0) + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });

// ═══════════════════════════════════════════
//  BACK TO TOP
// ═══════════════════════════════════════════
window.addEventListener('scroll', function () {
  if (!backToTop) return;
  if (window.scrollY > 400) backToTop.classList.add('visible');
  else backToTop.classList.remove('visible');
}, { passive: true });

if (backToTop) {
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ═══════════════════════════════════════════
//  PRINT
// ═══════════════════════════════════════════
if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

// ═══════════════════════════════════════════
//  CUSTOM CURSOR
// ═══════════════════════════════════════════
(function () {
  if (!cursorDot) return;
  var mx = 0, my = 0, cx = 0, cy = 0;
  var raf;

  document.addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
  });

  function animateCursor() {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    cursorDot.style.transform = 'translate(' + cx + 'px,' + cy + 'px)';
    raf = requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.addEventListener('mouseleave', function () {
    cursorDot.style.opacity = '0';
  });
  document.addEventListener('mouseenter', function () {
    cursorDot.style.opacity = '1';
  });

  // Enlarge on interactive elements
  var interactives = 'a,button,.project-card,.skill-bar-item,.cert-item';
  document.querySelectorAll(interactives).forEach(function (el) {
    el.addEventListener('mouseenter', function () { cursorDot.classList.add('hover'); });
    el.addEventListener('mouseleave', function () { cursorDot.classList.remove('hover'); });
  });
})();

// ═══════════════════════════════════════════
//  SCROLL REVEAL
// ═══════════════════════════════════════════
(function () {
  var els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(function (el) { observer.observe(el); });
})();

// ═══════════════════════════════════════════
//  SKILL BARS ANIMATION
// ═══════════════════════════════════════════
(function () {
  var bars = document.querySelectorAll('.skill-bar-fill');
  if (!bars.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var pct = entry.target.dataset.pct || '0';
        setTimeout(function () {
          entry.target.style.width = pct + '%';
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(function (bar) { observer.observe(bar); });
})();

// ═══════════════════════════════════════════
//  STATS COUNTER ANIMATION
// ═══════════════════════════════════════════
(function () {
  var nums = document.querySelectorAll('.stat-num[data-target]');
  if (!nums.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el     = entry.target;
      var target = parseInt(el.dataset.target, 10);
      var start  = 0;
      var dur    = 1200;
      var step   = dur / target;
      var timer  = setInterval(function () {
        start++;
        el.textContent = start;
        if (start >= target) clearInterval(timer);
      }, step);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  nums.forEach(function (el) { observer.observe(el); });
})();

// ═══════════════════════════════════════════
//  VISITOR COUNTER (localStorage simulation)
// ═══════════════════════════════════════════
(function () {
  var el = document.getElementById('visitor-count');
  if (!el) return;
  var base  = 1247;
  var extra = parseInt(localStorage.getItem('vc_extra') || '0', 10);
  if (!localStorage.getItem('vc_visited')) {
    extra++;
    localStorage.setItem('vc_extra', extra);
    localStorage.setItem('vc_visited', '1');
  }
  var total = base + extra;
  // Animate count
  var current = 0;
  var step = Math.ceil(total / 60);
  var timer = setInterval(function () {
    current = Math.min(current + step, total);
    el.textContent = current.toLocaleString();
    if (current >= total) clearInterval(timer);
  }, 20);
})();

// ═══════════════════════════════════════════
//  TYPING ANIMATION
// ═══════════════════════════════════════════
(function () {
  var el = document.getElementById('typing-text');
  if (!el) return;
  var phrases = [
    'Full Stack Developer',
    'OSINT Researcher',
    'Cybersecurity Enthusiast',
    'Network Engineer',
    'Problem Solver',
  ];
  var pi = 0, ci = 0, del = false, paused = false;

  function tick() {
    var cur = phrases[pi];
    if (!del) {
      el.textContent = cur.slice(0, ++ci);
      if (ci === cur.length) {
        paused = true;
        setTimeout(function () { paused = false; del = true; loop(); }, 1800);
        return;
      }
    } else {
      el.textContent = cur.slice(0, --ci);
      if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; }
    }
    loop();
  }

  function loop() {
    if (!paused) setTimeout(tick, del ? 45 : 80);
  }
  loop();
})();

// ═══════════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════════
function showToast(label) {
  toastText.textContent = label + ' copied ✓';
  toast.classList.add('show');
  setTimeout(function () { toast.classList.remove('show'); }, TOAST_MS);
}

function copyText(text, label) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
      .then(function () { showToast(label); })
      .catch(function () { fallbackCopy(text, label); });
  } else { fallbackCopy(text, label); }
}

function fallbackCopy(text, label) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none;';
  document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); showToast(label); } catch (e) {}
  document.body.removeChild(ta);
}

document.querySelectorAll('.copyable').forEach(function (item) {
  item.addEventListener('click', function () { copyText(item.dataset.copy, item.dataset.label || 'Value'); });
  item.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); copyText(item.dataset.copy, item.dataset.label || 'Value'); }
  });
});

// ═══════════════════════════════════════════
//  PANEL TOGGLE
// ═══════════════════════════════════════════
function setupToggle(btnEl, panelEl, openLabel, closeLabel) {
  if (!btnEl || !panelEl) return;
  btnEl.innerHTML = '<span class="btn-label">' + closeLabel + '</span><span class="btn-arrow" aria-hidden="true">→</span>';

  btnEl.addEventListener('click', function () {
    var isOpen = panelEl.classList.contains('open');
    if (isOpen) {
      panelEl.classList.remove('open'); btnEl.classList.remove('open');
      btnEl.setAttribute('aria-expanded', 'false');
      btnEl.querySelector('.btn-label').textContent = closeLabel;
      panelEl.querySelectorAll('.contact-item').forEach(function (el) { el.classList.remove('visible'); });
    } else {
      panelEl.classList.add('open'); btnEl.classList.add('open');
      btnEl.setAttribute('aria-expanded', 'true');
      btnEl.querySelector('.btn-label').textContent = openLabel;
      panelEl.querySelectorAll('.contact-item').forEach(function (el, i) {
        setTimeout(function () { el.classList.add('visible'); }, i * STAGGER);
      });
    }
  });
}

setupToggle(contactBtn, contactPanel, 'Hide contact',  'Get in touch');
setupToggle(socialBtn,  socialPanel,  'Hide profiles', 'View profiles');

// ═══════════════════════════════════════════
//  COMMAND PALETTE
// ═══════════════════════════════════════════
(function () {
  if (!cmdOverlay) return;

  var sections = [
    { id: 'sec-about',        label: 'About',          icon: '👤' },
    { id: 'sec-projects',     label: 'Projects',       icon: '🚀' },
    { id: 'sec-skills',       label: 'Skills',         icon: '⚡' },
    { id: 'sec-experience',   label: 'Experience',     icon: '💼' },
    { id: 'sec-credentials',  label: 'Credentials',    icon: '🎓' },
    { id: 'sec-testimonials', label: 'Testimonials',   icon: '💬' },
    { id: 'sec-contact',      label: 'Contact',        icon: '✉' },
    { id: 'sec-profiles',     label: 'Profiles',       icon: '🔗' },
  ];

  var active = 0;

  function openCmd() {
    cmdOverlay.classList.add('open');
    cmdOverlay.removeAttribute('aria-hidden');
    cmdInput.value = '';
    renderResults(sections);
    setTimeout(function () { cmdInput.focus(); }, 50);
  }

  function closeCmd() {
    cmdOverlay.classList.remove('open');
    cmdOverlay.setAttribute('aria-hidden', 'true');
  }

  function renderResults(list) {
    cmdResults.innerHTML = '';
    active = 0;
    list.forEach(function (item, i) {
      var btn = document.createElement('button');
      btn.className = 'cmd-item' + (i === 0 ? ' cmd-active' : '');
      btn.innerHTML = '<span class="cmd-icon">' + item.icon + '</span><span class="cmd-label">' + item.label + '</span>';
      btn.addEventListener('click', function () { goTo(item.id); });
      cmdResults.appendChild(btn);
    });
  }

  function goTo(id) {
    var el = document.getElementById(id);
    if (el) { closeCmd(); setTimeout(function () { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100); }
  }

  function setActive(i) {
    var items = cmdResults.querySelectorAll('.cmd-item');
    if (!items.length) return;
    items[active].classList.remove('cmd-active');
    active = Math.max(0, Math.min(i, items.length - 1));
    items[active].classList.add('cmd-active');
    items[active].scrollIntoView({ block: 'nearest' });
  }

  if (cmdInput) {
    cmdInput.addEventListener('input', function () {
      var q   = cmdInput.value.toLowerCase();
      var filtered = sections.filter(function (s) { return s.label.toLowerCase().includes(q); });
      renderResults(filtered);
    });

    cmdInput.addEventListener('keydown', function (e) {
      var items = cmdResults.querySelectorAll('.cmd-item');
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(active + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
      else if (e.key === 'Enter') {
        if (items[active]) items[active].click();
      } else if (e.key === 'Escape') { closeCmd(); }
    });
  }

  cmdOverlay.addEventListener('click', function (e) {
    if (e.target === cmdOverlay) closeCmd();
  });

  if (cmdTrigger) cmdTrigger.addEventListener('click', openCmd);

  document.addEventListener('keydown', function (e) {
    if ((e.key === '/' && !e.ctrlKey && !e.metaKey && document.activeElement.tagName !== 'INPUT') ||
        ((e.ctrlKey || e.metaKey) && e.key === 'k')) {
      e.preventDefault();
      cmdOverlay.classList.contains('open') ? closeCmd() : openCmd();
    }
    if (e.key === 'Escape') closeCmd();
  });
})();

// ═══════════════════════════════════════════
//  EASTER EGG  ↑↑↓↓←→←→
// ═══════════════════════════════════════════
(function () {
  var seq  = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight'];
  var idx  = 0;

  document.addEventListener('keydown', function (e) {
    if (e.key === seq[idx]) {
      idx++;
      if (idx === seq.length) {
        if (easterEgg) easterEgg.classList.add('show');
        idx = 0;
      }
    } else { idx = 0; }
  });

  if (easterClose) {
    easterClose.addEventListener('click', function () {
      easterEgg.classList.remove('show');
    });
  }
})();

// ═══════════════════════════════════════════
//  CUSTOM SCROLLBAR COLOR
// ═══════════════════════════════════════════
document.documentElement.style.setProperty('--scrollbar-thumb', '#c8f135');

})();
