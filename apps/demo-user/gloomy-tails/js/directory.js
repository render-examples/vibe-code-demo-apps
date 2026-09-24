function renderCards(list) {
  const grid = document.getElementById("specialist-grid");
  if (!grid) return;
  if (list.length === 0) {
    grid.innerHTML = '<p class="no-results">No specialists match that search — even the most dedicated pup-ologists have their limits. Try another term!</p>';
    return;
  }
  grid.innerHTML = list.map(s => `
    <article class="card">
      <img src="${s.img}" alt="${s.alt}">
      <div class="card-body">
        <h3>${s.name}</h3>
        <p class="credentials">${s.credentials}</p>
        <div class="tags">${s.tagLabels.map(t => `<span>${t}</span>`).join("")}</div>
        <p>${s.bio}</p>
      </div>
    </article>
  `).join("");
}

function initDirectory() {
  const grid = document.getElementById("specialist-grid");
  if (!grid) return;
  renderCards(SPECIALISTS);

  const searchInput = document.getElementById("search-input");
  const tagButtons = document.querySelectorAll(".tag-btn");
  let activeTag = "all";

  function applyFilters() {
    const query = (searchInput.value || "").toLowerCase();
    const filtered = SPECIALISTS.filter(s => {
      const matchesTag = activeTag === "all" || s.tags.includes(activeTag);
      const matchesSearch = !query ||
        s.name.toLowerCase().includes(query) ||
        s.bio.toLowerCase().includes(query) ||
        s.tagLabels.join(" ").toLowerCase().includes(query);
      return matchesTag && matchesSearch;
    });
    renderCards(filtered);
  }

  searchInput.addEventListener("input", applyFilters);
  tagButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tagButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeTag = btn.dataset.tag;
      applyFilters();
    });
  });
}

document.addEventListener("DOMContentLoaded", initDirectory);
