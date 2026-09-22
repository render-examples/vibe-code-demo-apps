document.addEventListener('DOMContentLoaded', function () {
  var path = location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('nav.main-nav a');
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute('href') === path) {
      links[i].classList.add('active');
    }
  }
});
