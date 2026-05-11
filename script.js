// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach((el) => io.observe(el));

// Smooth anchor offset for sticky header
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 60;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  });
});

// Placeholder checkout handler
const ctaCheckout = document.getElementById('ctaCheckout');
if (ctaCheckout) {
  ctaCheckout.addEventListener('click', (e) => {
    e.preventDefault();
    // TODO: integrar com checkout (API)
    alert('Em breve: integração com checkout. Aqui o tutor seria levado para a página de pagamento.');
  });
}

// Placeholder WhatsApp
const wa = document.getElementById('waFloat');
if (wa) {
  wa.addEventListener('click', (e) => {
    e.preventDefault();
    // TODO: trocar pelo número real do Dr. Washington
    window.open('https://wa.me/5500000000000?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20M%C3%A9todo%20Vitapet', '_blank');
  });
}
