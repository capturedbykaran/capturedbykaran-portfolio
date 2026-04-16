// Smooth Scroll for internal links
document.querySelectorAll('a[href^="/"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    window.location.href = href;
  });
});

// Scroll animation trigger (optional if using AOS or GSAP later)
window.addEventListener('scroll', () => {
  document.querySelectorAll('.bottom-content div').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

// Theme switcher logic (optional future feature)
const toggleTheme = () => {
  document.body.classList.toggle('light-mode');
};
