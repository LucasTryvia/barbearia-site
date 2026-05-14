/* ============================================
   Yurizin Du Corte — script.js
   ============================================ */

(function () {
  'use strict';

  // NAV scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.esp-item, .barbeiro, .av-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.children];
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => entry.target.classList.add('visible'), idx * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));

  // Hero entrance animation
  const heroEls = [
    document.querySelector('.hero-logo'),
    document.querySelector('.hero-copy'),
    document.querySelector('.hero-body .btn-agendar'),
  ].filter(Boolean);

  heroEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = `opacity 0.8s ease ${180 + i * 150}ms, transform 0.8s ease ${180 + i * 150}ms`;
  });

  requestAnimationFrame(() => requestAnimationFrame(() => {
    heroEls.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }));

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();