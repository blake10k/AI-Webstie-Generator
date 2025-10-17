// app.js

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Example: add “back to top” button dynamically
  const btn = document.createElement('button');
  btn.textContent = '↑ Top';
  btn.id = 'backToTop';
  btn.style.position = 'fixed';
  btn.style.bottom = '2rem';
  btn.style.right = '2rem';
  btn.style.padding = '0.75rem 1rem';
  btn.style.fontSize = '1rem';
  btn.style.display = 'none';
  btn.style.border = 'none';
  btn.style.borderRadius = '4px';
  btn.style.backgroundColor = '#1a73e8';
  btn.style.color = '#fff';
  btn.style.cursor = 'pointer';
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
