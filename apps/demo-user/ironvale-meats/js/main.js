// Ironvale Meats -- shared site behavior

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  var form = document.getElementById('inquiry-form');
  var success = document.getElementById('form-success');
  if (form && success) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      success.classList.add('visible');
      form.reset();
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
