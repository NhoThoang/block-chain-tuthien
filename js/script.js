// ===== VNDCoin Website JavaScript =====
const loadingScreen = document.getElementById('loading-screen');
const navbar = document.querySelector('.navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const backToTop = document.getElementById('back-to-top');
const faqItems = document.querySelectorAll('.faq-item');
const contactForm = document.getElementById('contact-form');
const statNumbers = document.querySelectorAll('.stat-number');

// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 2000);
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== MOBILE NAVIGATION =====
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// ===== SMOOTH SCROLLING =====
// Loader: sequentially load modular JS files for easier maintenance
const scripts = [
  'js/utils.js',
  'js/nav.js',
  'js/hero.js',
  'js/faq.js',
  'js/contact.js'
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.defer = true;
    s.onload = resolve;
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

(async function() {
  for (const src of scripts) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await loadScript(src);
    } catch (err) {
      console.error(err);
    }
  }
  // Initialization hook
  document.addEventListener('DOMContentLoaded', () => {
    console.log('VNDCoin modular scripts loaded.');
    document.body.classList.add('loaded');
  });
})();
    

    // Close all FAQ items

    faqItems.forEach(faq => faq.classList.remove('active'));
