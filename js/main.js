/* =============================================
   VOILA PRODUCTIONS — Main JS
   Mobile nav, scroll animations, lightbox
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Mobile Navigation --- */
  const hamburger = document.querySelector('.hamburger');
  const navOverlay = document.querySelector('.nav-overlay');

  if (hamburger && navOverlay) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navOverlay.classList.toggle('active');
      document.body.style.overflow = navOverlay.classList.contains('active') ? 'hidden' : '';
    });

    // Close nav when a link is clicked
    navOverlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }


  /* --- Scroll Fade-In Animations --- */
  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  }


  /* --- Lightbox --- */
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox img');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (lightbox && galleryItems.length > 0) {
    galleryItems.forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

});


/* --- Contact Form (contact.html) --- */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const status = document.getElementById('form-status');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const btn = contactForm.querySelector('.submit-btn');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        contactForm.style.display = 'none';
        status.classList.add('visible');
      } else {
        btn.textContent = 'Something went wrong — try again';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Network error — try again';
      btn.disabled = false;
    }
  });
}
