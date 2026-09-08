const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    mobileNav.hidden = isOpen;
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
