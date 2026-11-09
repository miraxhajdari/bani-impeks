// Start at the home section on every fresh page load, even if the browser retained an old section hash.
if (window.location.hash) {
  window.history.replaceState(null, '', window.location.pathname + window.location.search);
  window.scrollTo(0, 0);
}
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

// Flag remote photos that fail to load so the content remains understandable.
document.querySelectorAll('img').forEach(image => {
  image.addEventListener('error', () => image.classList.add('image-unavailable'), { once: true });
});
