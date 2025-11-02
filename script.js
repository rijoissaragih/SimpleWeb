// Small enhancements for the simple site

// Smooth scroll for on-page anchors
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Contact form mock submit
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || 'there';
    alert(`Thanks, ${name}! Your message has been received.`);
    form.reset();
  });
}

// Dynamic year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Header: toggle compact/shadow on scroll
(function () {
  const onScroll = () => {
    const scrolled = window.scrollY > 8;
    document.body.classList.toggle('scrolled', scrolled);
  };
  // Run once on load, then on scroll
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Mobile nav toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  const closeNav = () => {
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  const openNav = () => {
    document.body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
  };

  toggle.addEventListener('click', () => {
    const willOpen = !document.body.classList.contains('nav-open');
    if (willOpen) openNav(); else closeNav();
  });

  // Close when clicking a nav link
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeNav));
  // Close on Escape
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });
  // Close when resizing to desktop
  window.addEventListener('resize', () => { if (window.innerWidth > 720) closeNav(); });
})();
