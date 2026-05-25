 function () {
      const end = new Date(Date.now() + 8 * 3600 * 1000 + 45 * 60 * 1000);

      function pad(n) { return String(n).padStart(2, '0'); }

      function tick() {
        const diff = Math.max(0, end - Date.now());
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        document.getElementById('cd-hours').textContent = pad(h);
        document.getElementById('cd-mins').textContent  = pad(m);
        document.getElementById('cd-secs').textContent  = pad(s);
      }

      setInterval(tick, 1000);
      tick();
    })();

    /* ── Navbar scroll effect ── */
    (function () {
      const nav = document.querySelector('.navbar');
      window.addEventListener('scroll', () => {
        nav.style.padding = window.scrollY > 40 ? '12px 0' : '18px 0';
      }, { passive: true });
    })();