// Coat color filter (appearance.html)
(function () {
  var filterBar = document.getElementById('coat-filters');
  if (!filterBar) return;
  var buttons = filterBar.querySelectorAll('button');
  var cards = document.querySelectorAll('#coat-grid .coat-card');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      cards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-color') === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
})();

// FAQ live search (faq.html)
(function () {
  var search = document.getElementById('faq-search');
  if (!search) return;
  var items = document.querySelectorAll('.faq-item');

  search.addEventListener('input', function () {
    var term = search.value.trim().toLowerCase();
    items.forEach(function (item) {
      var text = item.textContent.toLowerCase();
      item.classList.toggle('hidden', term !== '' && text.indexOf(term) === -1);
    });
  });
})();
