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

// AddToCart — dispara quando o usuário clica em qualquer CTA da oferta
document.querySelectorAll('a[href^="#oferta"], a[href*="cakto.com.br"]').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'AddToCart');
    }
  });
});

// InitiateCheckout — dispara só ao clicar nos botões que vão pra Cakto
document.querySelectorAll('a[href*="cakto.com.br"]').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'InitiateCheckout');
    }
  });
});

// Placeholder WhatsApp
const wa = document.getElementById('waFloat');
if (wa) {
  wa.addEventListener('click', (e) => {
    e.preventDefault();
    // TODO: trocar pelo número real do Dr. Washington
    window.open('https://wa.me/5500000000000?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20M%C3%A9todo%20Vitapet', '_blank');
  });
}
