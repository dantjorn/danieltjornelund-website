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

  // Contact form -> Formspree (plain native submission, avoids CORS issues on free tier)
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrewaqpn';

  document.querySelectorAll('form.contact-form').forEach(form => {
    form.setAttribute('action', FORMSPREE_ENDPOINT);
    form.setAttribute('method', 'POST');
    const status = form.querySelector('.form-status');
    if (status) {
      status.textContent = '';
    }
    // Let the browser submit natively. Formspree will redirect back
    // to this page with ?submitted=true on success.
    form.addEventListener('submit', () => {
      if (status) { status.textContent = 'Sending…'; status.className = 'form-status'; }
    });
  });

  // Show a success message if we've just been redirected back from Formspree
  if (window.location.search.includes('submitted') || window.location.hash.includes('thanks')) {
    const status = document.querySelector('form.contact-form .form-status');
    if (status) { status.textContent = "Thanks — message sent. I'll reply by email shortly."; status.className = 'form-status ok'; }
  }
});
