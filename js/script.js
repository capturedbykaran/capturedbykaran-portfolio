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
<<<<<<< HEAD
=======

// Mobile menu toggle
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
// On Hire me button click send email
const hireMeBtn = document.getElementById("hireMeBtn");

  hireMeBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const email = "karan.singh022005@gmail.com";
    const subject = "Hiring Inquiry – Portfolio Website";
    const body =
      "Hi Karan,%0D%0A%0D%0A" +
      "I visited your portfolio and would like to work with you.%0D%0A%0D%0A" +
      "Project Details:%0D%0A" +
      "- Type:%0D%0A" +
      "- Budget:%0D%0A" +
      "- Timeline:%0D%0A%0D%0A" +
      "Regards,%0D%0A" +
      "Your Name";

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
>>>>>>> b772b30e660fb0b033a9240a2475687119e553aa
