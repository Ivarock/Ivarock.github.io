/* Bitácora de Ivarock · extras: modo oscuro, buscador, compartir y modo autor */
(function () {
  var doc = document, root = doc.documentElement;
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { return null; } }
  function ico(p) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>'; }
  var I = {
    search: ico('<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>'),
    moon: ico('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>'),
    sun: ico('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z"/></svg>',
    li: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.5 8.5H3V21h3.5zM4.8 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM21 13.6c0-3.4-1.8-5.3-4.4-5.3a3.8 3.8 0 0 0-3.4 1.9V8.5H9.7V21h3.5v-6.5c0-1.7.8-2.8 2.2-2.8s2 1 2 2.8V21H21z"/></svg>',
    tg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.5 3.6 2.9 10.8c-1 .4-1 1.6 0 1.9l4.7 1.5 1.8 5.7c.2.7 1.1.9 1.6.4l2.6-2.4 4.9 3.6c.6.4 1.4.1 1.6-.6l3.2-15.6c.2-.9-.7-1.7-1.8-1.7zM9.7 14.6l-.4 3.6-1.3-4.2 9.3-5.9z"/></svg>',
    cp: ico('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>'),
    ok: ico('<path d="M5 12l5 5 9-10"/>')
  };

  /* ---- Modo autor: ?soy-yo marca este navegador (no cuenta visitas) ---- */
  var q = location.search;
  if (/[?&]soy-yo\b/.test(q)) { ls('ivk-yo', '1'); ls('skipgc', 't'); toast('Listo: este navegador quedó marcado como tuyo. Tus visitas ya no se cuentan.'); }
  if (/[?&]no-soy-yo\b/.test(q)) { ls('ivk-yo', null); ls('skipgc', null); toast('Este navegador vuelve a contar como visitante.'); }

  function toast(msg) {
    doc.addEventListener('DOMContentLoaded', function () {
      var t = doc.createElement('div');
      t.textContent = msg; t.setAttribute('role', 'status');
      t.style.cssText = 'position:fixed;left:50%;bottom:22px;transform:translateX(-50%);z-index:200;max-width:92vw;padding:12px 18px;border-radius:16px;font:700 .95rem var(--font-sans);color:#fff;background:linear-gradient(180deg,#8ff07a,#3aa82f);box-shadow:0 8px 24px rgba(0,0,0,.25)';
      doc.body.appendChild(t); setTimeout(function () { t.remove(); }, 6000);
    });
  }

  /* ---- Modo oscuro ---- */
  function setDark(on) { root.classList.toggle('dark', on); ls('ivk-tema', on ? 'dark' : 'light'); var b = doc.getElementById('btn-tema'); if (b) { b.innerHTML = on ? I.sun : I.moon; b.setAttribute('aria-label', on ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'); b.title = b.getAttribute('aria-label'); } }

  doc.addEventListener('DOMContentLoaded', function () {
    var base = (doc.querySelector('meta[name="ivk-base"]') || {}).content || '';
    /* botones de cabecera */
    var inner = doc.querySelector('.site-header__inner');
    if (inner && !doc.querySelector('.hdr-tools')) {
      var tools = doc.createElement('div'); tools.className = 'hdr-tools';
      tools.innerHTML = '<a href="' + base + '/buscar/" aria-label="Buscar en la página" title="Buscar">' + I.search + '</a><button id="btn-tema" type="button"></button>';
      inner.appendChild(tools);
      doc.getElementById('btn-tema').onclick = function () { setDark(!root.classList.contains('dark')); };
      setDark(root.classList.contains('dark'));
    }
    /* barra de compartir (todas las páginas menos el inicio) */
    var main = doc.querySelector('main');
    var path = location.pathname.replace(/index\.html$/, '');
    if (main && path !== base + '/' && !doc.body.hasAttribute('data-noshare')) {
      var url = location.origin + path, title = doc.title;
      var e = encodeURIComponent, bar = doc.createElement('div'); bar.className = 'share-bar';
      bar.innerHTML = '<span>Compartir:</span>' +
        '<a class="wa" target="_blank" rel="noopener" aria-label="Compartir por WhatsApp" href="https://wa.me/?text=' + e(title + ' ' + url) + '">' + I.wa + '</a>' +
        '<a class="fb" target="_blank" rel="noopener" aria-label="Compartir en Facebook" href="https://www.facebook.com/sharer/sharer.php?u=' + e(url) + '">' + I.fb + '</a>' +
        '<a class="li" target="_blank" rel="noopener" aria-label="Compartir en LinkedIn" href="https://www.linkedin.com/sharing/share-offsite/?url=' + e(url) + '">' + I.li + '</a>' +
        '<a class="tg" target="_blank" rel="noopener" aria-label="Compartir en Telegram" href="https://t.me/share/url?url=' + e(url) + '&text=' + e(title) + '">' + I.tg + '</a>' +
        '<button class="cp" type="button" aria-label="Copiar enlace">' + I.cp + '</button>';
      main.appendChild(bar);
      var cp = bar.querySelector('.cp');
      cp.onclick = function () {
        function done() { cp.className = 'ok'; cp.innerHTML = I.ok; setTimeout(function () { cp.className = 'cp'; cp.innerHTML = I.cp; }, 1800); }
        if (navigator.share && /Mobi|Android/i.test(navigator.userAgent)) { navigator.share({ title: title, url: url }).catch(function () {}); return; }
        if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, done); else done();
      };
    }
  });
})();
