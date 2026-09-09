const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
  });
});

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  if (window.scrollY > 40) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
