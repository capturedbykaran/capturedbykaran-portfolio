
// ============================
// SMOOTH SCROLL (FIXED)
// ============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    if (targetId === "#" || targetId === "") return;

    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ============================
// SCROLL REVEAL ANIMATION (BEST METHOD)
// ============================

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.15
});

// Apply observer
reveals.forEach(el => {
  observer.observe(el);
});


// ============================
// MOBILE MENU TOGGLE
// ============================

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Close menu when clicking a link
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
}


// ============================
// HIRE ME BUTTON (SAFE VERSION)
// ============================

const hireMeBtn = document.getElementById("hireMeBtn");

if (hireMeBtn) {
  hireMeBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const email = "karan.singh022005@gmail.com";
    const subject = "Hiring Inquiry – Portfolio Website";
    const body =
      "Hi Karan,%0D%0A%0D%0A" +
      "I came across your portfolio and would like to discuss an opportunity.%0D%0A%0D%0A" +
      "Project Details:%0D%0A" +
      "- Type:%0D%0A" +
      "- Budget:%0D%0A" +
      "- Timeline:%0D%0A%0D%0A" +
      "Regards,%0D%0A" +
      "Your Name";

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
}


// ============================
// OPTIONAL: BUTTON CLICK EFFECT
// ============================

document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "";
    }, 150);
  });
});
