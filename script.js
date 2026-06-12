// ─── Constants ────────────────────────────────────────
var TOAST_MS  = 2200;
var STAGGER   = 60;

// ─── DOM ─────────────────────────────────────────────
var yearSpan    = document.getElementById('year');
var toast       = document.getElementById('copied-toast');
var toastText   = document.getElementById('toast-text');
var contactBtn  = document.getElementById('btn');
var contactPanel= document.getElementById('contact-panel');
var socialBtn   = document.getElementById('social-btn');
var socialPanel = document.getElementById('social-panel');
var backToTop   = document.getElementById('back-to-top');
var progress    = document.getElementById('reading-progress');
var printBtn    = document.getElementById('print-btn');

// ─── Year ─────────────────────────────────────────────
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// ─── Reading progress bar ─────────────────────────────
function updateProgress() {
  if (!progress) return;
  var scrollTop  = window.scrollY || document.documentElement.scrollTop;
  var docHeight  = document.documentElement.scrollHeight - window.innerHeight;
  var pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progress.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });

// ─── Back to top ──────────────────────────────────────
function updateBackToTop() {
  if (!backToTop) return;
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}
window.addEventListener('scroll', updateBackToTop, { passive: true });
if (backToTop) {
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ─── Print button ─────────────────────────────────────
if (printBtn) {
  printBtn.addEventListener('click', function () {
    window.print();
  });
}

// ─── Typing animation ─────────────────────────────────
(function () {
  var el = document.getElementById('typing-text');
  var cursor = document.querySelector('.typing-cursor');
  if (!el) return;

  var phrases = [
    'Full Stack Developer',
    'OSINT Researcher',
    'Cybersecurity Enthusiast',
    'Network Engineer',
    'Problem Solver',
  ];

  var phraseIdx = 0;
  var charIdx   = 0;
  var deleting  = false;
  var paused    = false;

  function tick() {
    var current = phrases[phraseIdx];

    if (!deleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        paused = true;
        setTimeout(function () { paused = false; deleting = true; loop(); }, 1800);
        return;
      }
    } else {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        deleting  = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }
    loop();
  }

  function loop() {
    if (paused) return;
    var speed = deleting ? 45 : 80;
    setTimeout(tick, speed);
  }

  loop();
})();

// ─── Toast ────────────────────────────────────────────
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
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none;';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); showToast(label); } catch (e) {}
  document.body.removeChild(ta);
}

// ─── Copyable items ───────────────────────────────────
document.querySelectorAll('.copyable').forEach(function (item) {
  item.addEventListener('click', function () {
    copyText(item.dataset.copy, item.dataset.label || 'Value');
  });
  item.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      copyText(item.dataset.copy, item.dataset.label || 'Value');
    }
  });
});

// ─── Panel toggle ─────────────────────────────────────
function setupToggle(btnEl, panelEl, openLabel, closeLabel) {
  if (!btnEl || !panelEl) return;
  btnEl.innerHTML =
    '<span class="btn-label">' + closeLabel + '</span>' +
    '<span class="btn-arrow" aria-hidden="true">→</span>';

  btnEl.addEventListener('click', function () {
    var isOpen = panelEl.classList.contains('open');
    if (isOpen) {
      panelEl.classList.remove('open');
      btnEl.classList.remove('open');
      btnEl.setAttribute('aria-expanded', 'false');
      btnEl.querySelector('.btn-label').textContent = closeLabel;
      panelEl.querySelectorAll('.contact-item').forEach(function (el) {
        el.classList.remove('visible');
      });
    } else {
      panelEl.classList.add('open');
      btnEl.classList.add('open');
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
