const grid = document.getElementById('recruitGrid');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('search');
const rankSelect = document.getElementById('rankFilter');

const rankClass = {
  "Cadet": "badge-cadet",
  "Junior Responder": "badge-junior",
  "Full Firefighter": "badge-full",
  "Chief": "badge-chief"
};

function renderRecruits(list) {
  grid.innerHTML = '';
  if (list.length === 0) {
    noResults.hidden = false;
    return;
  }
  noResults.hidden = true;
  list.forEach(function(r) {
    const card = document.createElement('div');
    card.className = 'dog-card';
    card.innerHTML = '<div class="dog-photo-wrap"><img src="' + r.photo + '" alt="' + r.name + ' the ' + r.breed + '"></div>' +
      '<div class="dog-body">' +
      '<div class="dog-name-row"><h3>' + r.name + '</h3><span class="rank-badge ' + rankClass[r.rank] + '">' + r.rank + '</span></div>' +
      '<p class="dog-breed">' + r.breed + '</p>' +
      '<p class="dog-bio">' + r.bio + '</p>' +
      '<p class="photo-credit">Photo: ' + r.credit + '</p>' +
      '</div>';
    grid.appendChild(card);
  });
}

function applyFilters() {
  const q = searchInput.value.trim().toLowerCase();
  const rank = rankSelect.value;
  const filtered = RECRUITS.filter(function(r) {
    const matchesQuery = !q || r.name.toLowerCase().includes(q) || r.breed.toLowerCase().includes(q);
    const matchesRank = !rank || r.rank === rank;
    return matchesQuery && matchesRank;
  });
  renderRecruits(filtered);
}

searchInput.addEventListener('input', applyFilters);
rankSelect.addEventListener('change', applyFilters);
renderRecruits(RECRUITS);

document.querySelectorAll('.accordion-trigger').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const item = btn.parentElement;
    item.classList.toggle('open');
  });
});
