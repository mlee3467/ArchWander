// ══════════════════════════════════════════════════════════════════
// LANDING / SPLASH SYSTEM  (mobile first-visit + explicit home)
// ══════════════════════════════════════════════════════════════════

var _mapInited = false;  // true once _doFullMapInit has been called

// ── Splash → Landing ─────────────────────────────────────────────

function showSplash() {
  var el = document.getElementById('landing-splash');
  if (!el) { showLandingScreen(); return; }
  el.style.display = 'flex';
  setTimeout(function() {
    el.classList.add('fade-out');
    setTimeout(function() {
      el.style.display = 'none';
      el.classList.remove('fade-out');
      showLandingScreen();
    }, 500);
  }, 1300);
}

function showLandingScreen() {
  var el = document.getElementById('landing-screen');
  if (!el) return;
  el.style.display = 'flex';
  requestAnimationFrame(function() {
    requestAnimationFrame(function() { el.classList.add('visible'); });
  });
}

function hideLandingScreen(cb) {
  var el = document.getElementById('landing-screen');
  if (!el) { if (cb) cb(); return; }
  el.classList.remove('visible');
  setTimeout(function() {
    el.style.display = 'none';
    if (cb) cb();
  }, 280);
}

// ── Public: go-home from anywhere ───────────────────────────────
// Called by logo tap (mobile) or Home button in action bar

function goHome() {
  if (window.innerWidth > 900) { location.reload(); return; }
  // Close any open mobile action bar first
  if (typeof closeMobileActions === 'function') closeMobileActions();
  showLandingScreen();
}

// ── Landing button handlers ──────────────────────────────────────

function landingGoCity() {
  localStorage.setItem('aw_landing_seen', '1');
  hideLandingScreen(function() {
    _ensureMapInit(function() {
      // Open Near Me bar so user can pick GPS or drop pin
      if (typeof nearMeActive !== 'undefined' && !nearMeActive) {
        if (typeof toggleNearMe === 'function') toggleNearMe();
      }
    });
  });
}

function landingGoIfl() {
  // Show IFL theme selector — no map init yet
  var landing = document.getElementById('landing-screen');
  var iflSel  = document.getElementById('ifl-select-screen');
  if (landing) landing.classList.remove('visible');
  setTimeout(function() {
    if (landing) landing.style.display = 'none';
    if (iflSel) {
      _renderIflSelectScreen();
      iflSel.style.display = 'flex';
      requestAnimationFrame(function() {
        requestAnimationFrame(function() { iflSel.classList.add('visible'); });
      });
    }
  }, 200);
}

function landingGoRec() {
  _landingToast(LANG === 'ko' ? '🚧 준비 중입니다' : '🚧 Coming soon');
}

function landingGoMyPage() {
  localStorage.setItem('aw_landing_seen', '1');
  hideLandingScreen(function() {
    _ensureMapInit(function() {
      // Open sidebar so user can see Favorites / Visited + advanced filters
      if (typeof openSidebar === 'function') openSidebar();
    });
  });
}

// ── IFL select screen ────────────────────────────────────────────

function iflSelBack() {
  var iflSel = document.getElementById('ifl-select-screen');
  if (iflSel) {
    iflSel.classList.remove('visible');
    setTimeout(function() { iflSel.style.display = 'none'; }, 280);
  }
  showLandingScreen();
}

function _renderIflSelectScreen() {
  var body = document.getElementById('ifl-sel-body');
  if (!body || typeof THEME_DEFS === 'undefined') return;
  body.innerHTML = THEME_DEFS.map(function(td) {
    var sel = state && state.themes && state.themes.includes(td.key);
    var label = typeof t === 'function' ? t('ifl_' + td.key) : td.key;
    return '<button class="ifl-sel-chip' + (sel ? ' selected' : '') +
      '" data-key="' + td.key + '" onclick="_iflSelToggle(\'' + td.key + '\')">' +
      '<span class="ifl-sel-icon">' + td.icon + '</span>' +
      '<span class="ifl-sel-label">' + label + '</span>' +
    '</button>';
  }).join('');
  _updateIflSelGo();
}

function _iflSelToggle(key) {
  if (!state || !state.themes) return;
  var idx = state.themes.indexOf(key);
  if (idx >= 0) state.themes.splice(idx, 1);
  else state.themes.push(key);
  document.querySelectorAll('#ifl-sel-body .ifl-sel-chip').forEach(function(btn) {
    btn.classList.toggle('selected', state.themes.includes(btn.getAttribute('data-key')));
  });
  _updateIflSelGo();
}

function _updateIflSelGo() {
  var btn = document.getElementById('ifl-sel-go');
  if (!btn) return;
  var count = (state && state.themes) ? state.themes.length : 0;
  if (count > 0) {
    btn.textContent = LANG === 'ko'
      ? count + '개 테마로 탐색 →'
      : 'Explore ' + count + ' theme' + (count > 1 ? 's' : '') + ' →';
    btn.classList.add('has-theme');
  } else {
    btn.textContent = LANG === 'ko' ? '테마 없이 모두 보기 →' : 'View all →';
    btn.classList.remove('has-theme');
  }
}

function iflSelConfirm() {
  localStorage.setItem('aw_landing_seen', '1');
  var iflSel = document.getElementById('ifl-select-screen');
  if (iflSel) {
    iflSel.classList.remove('visible');
    setTimeout(function() { iflSel.style.display = 'none'; }, 280);
  }
  _ensureMapInit(function() {
    if (typeof renderIflInline === 'function') renderIflInline();
    if (typeof updateClearBtn === 'function') updateClearBtn();
    if (typeof renderList === 'function') renderList();
    if (typeof syncMarkers === 'function') syncMarkers();
    // Also activate Near Me so user sees filtered nearby results
    if (typeof nearMeActive !== 'undefined' && !nearMeActive) {
      if (typeof toggleNearMe === 'function') toggleNearMe();
    }
  });
}

// ── Map init helpers ─────────────────────────────────────────────

function _ensureMapInit(afterFn) {
  if (_mapInited) {
    // Map already running — just call afterFn
    if (afterFn) afterFn();
    return;
  }
  _mapInited = true;
  if (typeof _doFullMapInit === 'function') {
    _doFullMapInit(afterFn);
  }
}

// ── Toast ────────────────────────────────────────────────────────

function _landingToast(msg) {
  var el = document.createElement('div');
  el.className = 'landing-toast';
  el.textContent = msg;
  document.body.appendChild(el);
  requestAnimationFrame(function() {
    requestAnimationFrame(function() { el.style.opacity = '1'; });
  });
  setTimeout(function() {
    el.style.opacity = '0';
    setTimeout(function() { if (el.parentNode) el.parentNode.removeChild(el); }, 400);
  }, 2200);
}

// ══════════════════════════════════════════════════════════════════
