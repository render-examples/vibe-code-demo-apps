const SYNTHS = [
  { name: "Moog Minimoog Model D", brand: "Moog", type: "analog", poly: "monophonic", era: "1970s (reissue)", price: "$5,499", desc: "The classic fat bass and lead machine — three VCOs of pure analog warmth that defined synth bass forever." },
  { name: "Roland Juno-106", brand: "Roland", type: "analog", poly: "polyphonic", era: "1980s", price: "$1,800 used", desc: "Lush chorus pads courtesy of Roland's legendary chorus circuit. The gateway drug to analog polysynths." },
  { name: "Korg MS-20", brand: "Korg", type: "analog", poly: "semi-modular", era: "1970s", price: "$599", desc: "Aggressive filters and a patchable pin matrix — a screaming, snarling semi-modular built for sound design nerds." },
  { name: "Sequential Prophet-5", brand: "Sequential", type: "analog", poly: "polyphonic", era: "1970s", price: "$4,999", desc: "The first fully programmable polysynth. Save your patches, recall them instantly — a revolution in 1978." },
  { name: "Yamaha DX7", brand: "Yamaha", type: "digital", poly: "polyphonic", era: "1980s", price: "$1,200 used", desc: "Glassy bells and iconic 80s bass, all from six-operator FM synthesis. Love it or hate it, it's everywhere." },
  { name: "Elektron Digitone", brand: "Elektron", type: "digital", poly: "polyphonic", era: "2010s", price: "$999", desc: "A modern FM workstation with sequencing that makes deep FM patching feel approachable again." },
  { name: "Behringer Model D", brand: "Behringer", type: "analog", poly: "monophonic", era: "2010s", price: "$299", desc: "A budget Minimoog homage that nails the ladder-filter growl without the vintage price tag." },
  { name: "Make Noise 0-Coast", brand: "Make Noise", type: "modular", poly: "monophonic", era: "2010s", price: "$499", desc: "Harsh and beautiful drones from a west-coast semi-modular that mixes wavefolding with dynamic patching." },
  { name: "Novation Peak", brand: "Novation", type: "digital", poly: "polyphonic", era: "2010s", price: "$1,499", desc: "8-voice oxide oscillators bring a hybrid digital/analog sound with real bite and shimmer." },
  { name: "Teenage Engineering OP-1 Field", brand: "Teenage Engineering", type: "digital", poly: "monophonic", era: "2020s", price: "$2,000", desc: "A tape-style workflow synth built for sketching songs anywhere — pocketable, playful, powerful." },
];

function synthCard(s) {
  return `
    <div class="card" data-brand="${s.brand}" data-type="${s.type}" data-era="${s.era}" data-name="${s.name.toLowerCase()}">
      <h3>${s.name}</h3>
      <div>
        <span class="tag">${s.brand}</span>
        <span class="tag">${s.type}</span>
        <span class="tag">${s.poly}</span>
        <span class="tag">${s.era}</span>
      </div>
      <p class="price">${s.price}</p>
      <p>${s.desc}</p>
    </div>`;
}

function renderCatalog() {
  const grid = document.getElementById("catalog-grid");
  if (!grid) return;
  grid.innerHTML = SYNTHS.map(synthCard).join("");

  const search = document.getElementById("search");
  const brandFilter = document.getElementById("brand-filter");
  const typeFilter = document.getElementById("type-filter");
  const eraFilter = document.getElementById("era-filter");
  const empty = document.getElementById("catalog-empty");

  const brands = [...new Set(SYNTHS.map(s => s.brand))].sort();
  brandFilter.innerHTML = '<option value="">All brands</option>' + brands.map(b => `<option value="${b}">${b}</option>`).join("");
  const eras = [...new Set(SYNTHS.map(s => s.era))].sort();
  eraFilter.innerHTML = '<option value="">All eras</option>' + eras.map(e => `<option value="${e}">${e}</option>`).join("");

  function applyFilters() {
    const q = search.value.trim().toLowerCase();
    const brand = brandFilter.value;
    const type = typeFilter.value;
    const era = eraFilter.value;
    let visible = 0;
    grid.querySelectorAll(".card").forEach(card => {
      const matches =
        (!q || card.dataset.name.includes(q)) &&
        (!brand || card.dataset.brand === brand) &&
        (!type || card.dataset.type === type) &&
        (!era || card.dataset.era === era);
      card.style.display = matches ? "" : "none";
      if (matches) visible++;
    });
    empty.style.display = visible === 0 ? "block" : "none";
  }

  [search, brandFilter, typeFilter, eraFilter].forEach(el => el.addEventListener("input", applyFilters));
}

document.addEventListener("DOMContentLoaded", renderCatalog);
