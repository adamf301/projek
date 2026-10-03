const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Tutup navigasi' : 'Buka navigasi');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Buka navigasi');
  });
});

const sections = document.querySelectorAll('main section[id]');
const menuItems = navLinks.querySelectorAll('a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      menuItems.forEach((item) => {
        item.classList.toggle(
          'active',
          item.hash === `#${entry.target.id}`
        );
      });
    });
  },
  { rootMargin: '-35% 0px -55% 0px' }
);

sections.forEach((section) => observer.observe(section));