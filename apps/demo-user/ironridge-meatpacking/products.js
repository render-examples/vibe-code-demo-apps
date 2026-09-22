var PRODUCTS = [
  { name: "Ribeye Primal", category: "beef", price: "$6.25/lb", spec: "specs/ribeye-primal.html" },
  { name: "Beef Chuck Roll", category: "beef", price: "$3.10/lb", spec: "specs/beef-chuck-roll.html" },
  { name: "Ground Beef 80/20", category: "beef", price: "$2.85/lb", spec: "specs/ground-beef-80-20.html" },
  { name: "Brisket Whole", category: "beef", price: "$3.60/lb", spec: "specs/brisket-whole.html" },
  { name: "Pork Belly", category: "pork", price: "$3.95/lb", spec: "specs/pork-belly.html" },
  { name: "Boston Butt", category: "pork", price: "$2.40/lb", spec: "specs/boston-butt.html" },
  { name: "Baby Back Ribs", category: "pork", price: "$4.75/lb", spec: "specs/baby-back-ribs.html" },
  { name: "Chicken Breast Boneless", category: "poultry", price: "$2.60/lb", spec: "specs/chicken-breast-boneless.html" },
  { name: "Whole Fryer Chicken", category: "poultry", price: "$1.45/lb", spec: "specs/whole-fryer-chicken.html" },
  { name: "Smoked Bacon Slab", category: "specialty", price: "$5.20/lb", spec: "specs/smoked-bacon-slab.html" },
  { name: "Andouille Sausage", category: "specialty", price: "$4.10/lb", spec: "specs/andouille-sausage.html" }
];

var currentFilter = "all";
var currentSearch = "";

function renderProducts() {
  var tbody = document.getElementById("product-body");
  tbody.innerHTML = "";
  var rows = PRODUCTS.filter(function (p) {
    var matchesFilter = currentFilter === "all" || p.category === currentFilter;
    var matchesSearch = p.name.toLowerCase().indexOf(currentSearch.toLowerCase()) !== -1;
    return matchesFilter && matchesSearch;
  });
  if (rows.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4">No products match your search.</td></tr>';
    return;
  }
  rows.forEach(function (p) {
    var tr = document.createElement("tr");
    tr.innerHTML =
      "<td>" + p.name + "</td>" +
      "<td>" + p.category.charAt(0).toUpperCase() + p.category.slice(1) + "</td>" +
      "<td>" + p.price + " wholesale</td>" +
      '<td><a class="spec-link" href="' + p.spec + '" target="_blank">View Spec Sheet</a></td>';
    tbody.appendChild(tr);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderProducts();
  document.querySelectorAll(".filter-bar button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".filter-bar button").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      currentFilter = btn.dataset.category;
      renderProducts();
    });
  });
  document.getElementById("search").addEventListener("input", function (e) {
    currentSearch = e.target.value;
    renderProducts();
  });
});
