document.addEventListener('DOMContentLoaded', () => {
  // Nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Portfolio filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(item => {
        item.classList.toggle('hidden', filter !== 'all' && item.dataset.category !== filter);
      });
    });
  });

  // Testimonial carousel
  const testimonials = document.querySelectorAll('.testimonial');
  const dotsWrap = document.getElementById('carouselDots');
  let current = 0;

  testimonials.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showTestimonial(i));
    dotsWrap.appendChild(dot);
  });

  function showTestimonial(index) {
    testimonials[current].classList.remove('active');
    dotsWrap.children[current].classList.remove('active');
    current = index;
    testimonials[current].classList.add('active');
    dotsWrap.children[current].classList.add('active');
  }

  setInterval(() => {
    showTestimonial((current + 1) % testimonials.length);
  }, 6000);
});
