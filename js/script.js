const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
  });
});
