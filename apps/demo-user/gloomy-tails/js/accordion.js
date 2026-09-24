document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".accordion-item button").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("open");
    });
  });
});
