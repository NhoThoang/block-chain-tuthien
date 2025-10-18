// Hero animations and floating coins

function initHero() {
  const loadingScreen = document.getElementById('loading-screen');
  const floatingCoins = document.querySelectorAll('.coin-float');
  const statNumbers = document.querySelectorAll('.stat-number');

  // Loading screen (also keep existing load behavior)
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => loadingScreen.style.display = 'none', 500);
      }
    }, 2000);
  });

  // Floating coins
  if (floatingCoins && floatingCoins.length) {
    floatingCoins.forEach((coin, index) => {
      coin.style.animationDelay = `${index * 0.5}s`;
      coin.style.animationDuration = `${4 + index}s`;
    });
  }

  // Animated counters
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start);
      }
    }, 16);
  }

  const observerOptions = { threshold: 0.5, rootMargin: '0px 0px -100px 0px' };
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target, 10) || 0;
        // add a small animation class when counter starts
        entry.target.classList.add('animate-fade-in-up');
        animateCounter(entry.target, target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  if (statNumbers && statNumbers.length) {
    statNumbers.forEach(stat => counterObserver.observe(stat));
  }

  // Typing effect
  function typeWriter(element, text, speed = 100) {
    let i = 0; element.innerHTML = '';
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++; setTimeout(type, speed);
      }
    }
    type();
  }

  window.addEventListener('load', () => {
    setTimeout(() => {
      const heroTitle = document.querySelector('.hero-title .gradient-text');
      if (heroTitle) typeWriter(heroTitle, heroTitle.textContent, 150);
    }, 2500);
  });
}

// Initialize when DOM is ready to ensure elements exist
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHero);
} else {
  initHero();
}
