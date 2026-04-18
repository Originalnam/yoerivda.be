document.getElementById('year').textContent = new Date().getFullYear();

const trigger = document.querySelector('.nav-dropdown-trigger');
const menu    = document.querySelector('.nav-dropdown-menu');

if (trigger && menu) {
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('open', !open);
  });

  document.addEventListener('click', () => {
    trigger.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
  });
}
