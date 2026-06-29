/* ═══════════════════════════════════════════════════
   ECHONIX TECHNOLOGY — main.js
   Handles: Navbar scroll state, dropdown, mobile menu,
            page-load animations, hero parallax
═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── DOM References ────────────────────────────────
  const navbar       = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu   = document.getElementById('mobile-menu');
  const servicesBtn  = document.getElementById('services-dropdown-btn');
  const mobileServicesBtn = document.getElementById('mobile-services-btn');
  const mobileServicesSubmenu = document.getElementById('mobile-services-submenu');
  const heroImg      = document.getElementById('hero-img');
  const heroImageWrapper = document.getElementById('hero-image-wrapper');
  const animateItems = document.querySelectorAll('.animate-item');

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── 1. NAVBAR — Transparent → Solid on scroll ────
  function updateNavbar() {
    const scrolled = window.scrollY > 40;
    navbar.classList.toggle('navbar--solid', scrolled);
    navbar.classList.toggle('navbar--transparent', !scrolled);
  }

  updateNavbar(); // Initial call
  window.addEventListener('scroll', updateNavbar, { passive: true });

  // ── 2. NAVBAR — Dropdown (keyboard + hover) ───────
  if (servicesBtn) {
    // The CSS :hover handles mouse users. This handles keyboard.
    servicesBtn.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
    });

    // Close dropdown on outside click
    document.addEventListener('click', function (e) {
      if (!e.target.closest('#services-dropdown-container')) {
        servicesBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        servicesBtn.setAttribute('aria-expanded', 'false');
        servicesBtn.focus();
      }
    });
  }

  // ── 3. MOBILE MENU — Hamburger toggle ────────────
  function toggleMobileMenu(open) {
    hamburgerBtn.setAttribute('aria-expanded', String(open));
    mobileMenu.classList.toggle('is-open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));

    // Prevent body scroll when menu is open
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function () {
      const isOpen = this.getAttribute('aria-expanded') === 'true';
      toggleMobileMenu(!isOpen);
    });
  }

  // Close mobile menu on outside click / Escape
  document.addEventListener('click', function (e) {
    if (
      hamburgerBtn &&
      hamburgerBtn.getAttribute('aria-expanded') === 'true' &&
      !e.target.closest('#mobile-menu') &&
      !e.target.closest('#hamburger-btn')
    ) {
      toggleMobileMenu(false);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && hamburgerBtn?.getAttribute('aria-expanded') === 'true') {
      toggleMobileMenu(false);
      hamburgerBtn.focus();
    }
  });

  // ── 4. MOBILE MENU — Services sub-accordion ──────
  if (mobileServicesBtn && mobileServicesSubmenu) {
    mobileServicesBtn.addEventListener('click', function () {
      const isOpen = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!isOpen));
      mobileServicesSubmenu.classList.toggle('is-open', !isOpen);
      mobileServicesSubmenu.setAttribute('aria-hidden', String(isOpen));
    });
  }

  // ── 5. PAGE LOAD — Staggered Hero Animations ─────
  function triggerHeroAnimations() {
    document.body.classList.add('animated');
  }

  // Run after first paint
  if (document.readyState === 'complete') {
    triggerHeroAnimations();
  } else {
    window.addEventListener('load', triggerHeroAnimations);
  }

  // ── 6. PARALLAX — Hero image scrolls slower ───────
  // Uses requestAnimationFrame for 60fps performance.
  // The image moves at 15% the scroll speed (offset = scrollY * 0.15)
  if (heroImg && !prefersReducedMotion) {
    let ticking = false;
    let currentScrollY = 0;
    let targetOffset = 0;
    let currentOffset = 0;

    // Apply baseline scale 1.1 first
    heroImg.style.transform = 'scale(1.1) translateY(0px)';

    function applyParallax() {
      // Lerp for silky smoothness
      currentOffset += (targetOffset - currentOffset) * 0.08;
      // Parallax transform applied with scale 1.1 headroom
      heroImg.style.transform = `scale(1.1) translateY(${currentOffset}px)`;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      currentScrollY = window.scrollY;
      // Only apply parallax while the hero is in view
      const heroEl = document.getElementById('hero');
      if (heroEl && currentScrollY < heroEl.offsetHeight) {
        targetOffset = currentScrollY * 0.15;
        if (!ticking) {
          requestAnimationFrame(applyParallax);
          ticking = true;
        }
      }
    }, { passive: true });

    // Kick off parallax loop
    requestAnimationFrame(function loop() {
      if (Math.abs(targetOffset - currentOffset) > 0.1) {
        applyParallax();
      }
      requestAnimationFrame(loop);
    });
  } else if (heroImg) {
    // No parallax, skip all transforms
    heroImg.style.transform = 'scale(1.0) translateY(0px)';
  }

  // ── 7. Close mobile menu when a link is clicked ──
  mobileMenu?.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggleMobileMenu(false);
    });
  });

  // ── 8. SCROLL REVEAL — IntersectionObserver ───────
  // Handles all .scroll-reveal elements (trust bar stats, service cards, section headers)
  const scrollRevealItems = document.querySelectorAll('.scroll-reveal');

  if (prefersReducedMotion) {
    // Skip animation — show everything immediately
    scrollRevealItems.forEach(el => {
      el.classList.add('is-revealed');
    });
  } else {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseInt(el.dataset.revealDelay || '0', 10);

            setTimeout(function () {
              el.classList.add('is-revealed');
            }, delay);

            // Once revealed, stop observing (no re-animate on scroll back)
            revealObserver.unobserve(el);
          }
        });
      },
      {
        threshold: 0.15,        // Trigger when 15% visible
        rootMargin: '0px 0px -40px 0px'  // Slight bottom offset for elegance
      }
    );

    scrollRevealItems.forEach(el => revealObserver.observe(el));
  }

  // ── 8b. SERVICES SECTION REVEAL — IntersectionObserver ──
  const servicesSection = document.getElementById('services');
  if (servicesSection) {
    if (prefersReducedMotion) {
      servicesSection.classList.add('is-revealed');
    } else {
      const servicesObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              servicesSection.classList.add('is-revealed');
              servicesObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.2
        }
      );
      servicesObserver.observe(servicesSection);
    }
  }

  // ── 9. COUNT-UP — Trust Bar Stats ─────────────────
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function animateCount(el) {
    const target    = parseFloat(el.dataset.count);
    const suffix    = el.dataset.suffix || '';
    const isDecimal = target % 1 !== 0;
    const duration  = 1200; // ms
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed  = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = easeOutQuart(progress);
      const value    = eased * target;

      el.textContent = isDecimal
        ? value.toFixed(1) + suffix
        : Math.round(value) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  if (!prefersReducedMotion && statNumbers.length > 0) {
    const countObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const el    = entry.target;
            const delay = parseInt(
              el.closest('.stat-item')?.dataset.revealDelay || '0', 10
            );
            setTimeout(() => animateCount(el), delay);
            countObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    statNumbers.forEach(el => countObserver.observe(el));
  } else if (prefersReducedMotion) {
    statNumbers.forEach(function (el) {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const isDecimal = target % 1 !== 0;
      el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
    });
  }

  // ── 10. ABOUT — Directional slide-in (left & right) ─
  const aboutText     = document.getElementById('about-text');
  const aboutImageWrap = document.getElementById('about-image-wrap');

  if (!prefersReducedMotion && aboutText && aboutImageWrap) {
    const aboutObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            aboutObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    aboutObserver.observe(aboutText);
    aboutObserver.observe(aboutImageWrap);
  } else {
    aboutText?.classList.add('is-revealed');
    aboutImageWrap?.classList.add('is-revealed');
  }

  // ── 11. HOW IT WORKS — Steps stagger + SVG line draw ─
  const hiwSteps    = document.querySelectorAll('.hiw__step');
  const hiwConnector = document.getElementById('hiw-connector');

  if (hiwSteps.length > 0) {
    if (prefersReducedMotion) {
      hiwSteps.forEach(el => el.classList.add('is-revealed'));
      hiwConnector?.classList.add('is-drawn');
    } else {
      const hiwObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              // Stagger steps using their data-reveal-delay
              hiwSteps.forEach(function (step) {
                const delay = parseInt(step.dataset.revealDelay || '0', 10);
                setTimeout(() => step.classList.add('is-revealed'), delay);
              });

              // Trigger SVG line draw after a small delay
              setTimeout(function () {
                hiwConnector?.classList.add('is-drawn');
              }, 200);

              hiwObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      // Observe the steps container
      const stepsContainer = document.getElementById('hiw-steps');
      if (stepsContainer) hiwObserver.observe(stepsContainer);
    }
  }

  // ── 12. VIDEO TESTIMONIALS — Play facade ──────────
  // On click/Enter: hide thumbnail, inject & autoplay iframe
  document.querySelectorAll('.testi-card__thumb').forEach(function (thumb) {
    function activateVideo() {
      const videoId = thumb.dataset.videoId;
      if (!videoId) return;

      // Build iframe
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.className = 'testi-card__iframe is-playing';
      iframe.title = 'Customer testimonial video';

      // Insert into wrapper
      thumb.parentElement.appendChild(iframe);

      // Fade out thumbnail
      thumb.classList.add('is-hidden');

      // Remove thumbnail from DOM after transition
      thumb.addEventListener('transitionend', function () {
        thumb.remove();
      }, { once: true });
    }

    thumb.addEventListener('click', activateVideo);

    thumb.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateVideo();
      }
    });
  });

  // ── 13. DIFFERENTIATORS (Phase 9) — SVG icon draw ─
  // The diff-card already uses .scroll-reveal for fade-in.
  // We hook into the same observer to trigger the SVG path draw.
  const diffCards = document.querySelectorAll('.diff-card');

  if (diffCards.length > 0 && !prefersReducedMotion) {
    const diffObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const el    = entry.target;
            const delay = parseInt(el.dataset.revealDelay || '0', 10);

            // Fade-up reveal (handled by generic scroll-reveal observer)
            // but we also need to draw the SVG paths with a small extra delay
            setTimeout(function () {
              el.classList.add('is-revealed');
            }, delay);

            diffObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    diffCards.forEach(el => diffObserver.observe(el));
  } else if (prefersReducedMotion) {
    diffCards.forEach(el => el.classList.add('is-revealed'));
  }

  // ── 14. FAQ ACCORDION ─────────────────────────────
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const btn    = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!btn || !answer) return;

    btn.addEventListener('click', function () {
      const isCurrentlyOpen = item.classList.contains('is-open');

      // Close all items first (one-open-at-a-time)
      faqItems.forEach(function (other) {
        if (other !== item && other.classList.contains('is-open')) {
          other.classList.remove('is-open');
          other.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle clicked item
      if (isCurrentlyOpen) {
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ── 15. FINAL CTA FORM SUBMIT REDIRECTION ─────────
  const ctaForm = document.getElementById('cta-form');

  if (ctaForm) {
    ctaForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('cta-name');
      const phoneInput = document.getElementById('cta-phone');

      if (!nameInput || !phoneInput) return;

      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();

      // Basic validation
      if (!name) {
        alert('Please enter your name.');
        nameInput.focus();
        return;
      }

      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        phoneInput.focus();
        return;
      }

      // Prefill WhatsApp text link and redirect
      const baseText = `Hello Echonix, I would like to get a free solar consultation and quote.\n\nName: ${name}\nPhone: ${phone}`;
      const encodedText = encodeURIComponent(baseText);
      const waUrl = `https://wa.me/919072551144?text=${encodedText}`;

      // Open in new tab / redirect
      window.open(waUrl, '_blank');
    });
  }

})();

