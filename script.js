document.addEventListener('DOMContentLoaded', function() {

  // ── Year ──────────────────────────────────────────
  var yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // ── Toast ─────────────────────────────────────────
  var toast     = document.getElementById('copied-toast');
  var toastText = document.getElementById('toast-text');

  function showToast(label) {
    toastText.textContent = label + ' copied ✓';
    toast.classList.add('show');
    setTimeout(function() { toast.classList.remove('show'); }, 2200);
  }

  function copyText(text, label) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function() {
        showToast(label);
      }).catch(function() {
        fallback(text, label);
      });
    } else {
      fallback(text, label);
    }
  }

  function fallback(text, label) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); showToast(label); } catch(e) {}
    document.body.removeChild(ta);
  }

  // ── Copyable items ────────────────────────────────
  document.querySelectorAll('.copyable').forEach(function(item) {
    item.addEventListener('click', function() {
      copyText(item.dataset.copy, item.dataset.label || 'Value');
    });
  });

  // ── Panel toggle ──────────────────────────────────
  function setupToggle(btnId, panelId, openLabel, closeLabel) {
    var btn   = document.getElementById(btnId);
    var panel = document.getElementById(panelId);
    if (!btn || !panel) return;

    // wrap text in span
    btn.innerHTML =
      '<span class="btn-label">' + closeLabel + '</span>' +
      '<span class="btn-arrow" aria-hidden="true">→</span>';

    btn.addEventListener('click', function() {
      var isOpen = panel.classList.contains('open');

      if (isOpen) {
        panel.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.querySelector('.btn-label').textContent = closeLabel;
        panel.querySelectorAll('.contact-item').forEach(function(el) {
          el.classList.remove('visible');
        });
      } else {
        panel.classList.add('open');
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        btn.querySelector('.btn-label').textContent = openLabel;
        panel.querySelectorAll('.contact-item').forEach(function(el, i) {
          setTimeout(function() { el.classList.add('visible'); }, i * 60);
        });
      }
    });
  }

  setupToggle('btn',        'contact-panel', 'Hide contact',  'Get in touch');
  setupToggle('social-btn', 'social-panel',  'Hide profiles', 'View profiles');

  // ── CV Download ───────────────────────────────────
  var cvBtn = document.getElementById('cv-download-btn');
  if (!cvBtn) return;

  cvBtn.addEventListener('click', function() {
    var label = cvBtn.querySelector('.cv-btn-label');
    var orig  = label.textContent;
    label.textContent         = 'Loading...';
    cvBtn.style.pointerEvents = 'none';

    function afterLoad() {
      label.textContent = 'Generating...';
      setTimeout(function() {
        try {
          generateCV();
          label.textContent       = 'Downloaded ✓';
          cvBtn.style.borderColor = 'var(--accent)';
          setTimeout(function() {
            label.textContent         = orig;
            cvBtn.style.pointerEvents = '';
            cvBtn.style.borderColor   = '';
          }, 2500);
        } catch(e) {
          console.error(e);
          label.textContent = 'Error — try again';
          setTimeout(function() {
            label.textContent         = orig;
            cvBtn.style.pointerEvents = '';
          }, 2000);
        }
      }, 100);
    }

    if (window.jspdf) {
      afterLoad();
    } else {
      var s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      s.onload  = afterLoad;
      s.onerror = function() {
        label.textContent = 'No internet — try again';
        setTimeout(function() {
          label.textContent         = orig;
          cvBtn.style.pointerEvents = '';
        }, 3000);
      };
      document.body.appendChild(s);
    }
  });

});
