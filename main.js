// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.mobile-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
      const expanded = nav.classList.contains('open');
      btn.setAttribute('aria-expanded', String(expanded));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // Contact form -> Formspree
  // IMPORTANT: replace YOUR_FORM_ID below with the ID Formspree gives you
  // after you create a free form at https://formspree.io
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

  document.querySelectorAll('form.contact-form').forEach(form => {
    form.setAttribute('action', FORMSPREE_ENDPOINT);
    form.setAttribute('method', 'POST');
    const status = form.querySelector('.form-status');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (status) { status.textContent = 'Sending…'; status.className = 'form-status'; }
      const data = new FormData(form);
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          form.reset();
          if (status) { status.textContent = 'Thanks — message sent. I\'ll reply by email shortly.'; status.className = 'form-status ok'; }
        } else {
          if (status) { status.textContent = 'Something went wrong. Please email daniel@danieltjornelund.com directly.'; status.className = 'form-status err'; }
        }
      } catch (err) {
        if (status) { status.textContent = 'Something went wrong. Please email daniel@danieltjornelund.com directly.'; status.className = 'form-status err'; }
      }
    });
  });
});
