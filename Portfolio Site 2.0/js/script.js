const navbar = document.getElementById('nav-fixed');

const navbarHeightPx = 90.594;

window.addEventListener('scroll', () => {
  if (
    document.body.scrollTop > navbarHeightPx ||
    document.documentElement.scrollTop > navbarHeightPx
  ) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});