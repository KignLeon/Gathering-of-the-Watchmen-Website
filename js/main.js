/* ============================================
   GATHERING OF THE WATCHMEN — Main JS
   Elegant Transitions · Scroll Reveals · Forms
   Zero Dependencies
   ============================================ */

(function () {
    'use strict';

    /* ---- Preloader ---- */
    function initPreloader() {
        const loader = document.querySelector('.c-loader');
        if (!loader) return;

        document.body.classList.add('loading');
        const fill = loader.querySelector('.loader-fill');
        const percent = loader.querySelector('.loader-percent');
        let progress = 0;

        const interval = setInterval(() => {
            progress += Math.random() * 12 + 3;
            if (progress > 100) progress = 100;
            if (fill) fill.style.width = progress + '%';
            if (percent) percent.textContent = Math.round(progress) + '%';
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loader.classList.add('done');
                    document.body.classList.remove('loading');
                }, 400);
            }
        }, 120);
    }

    /* ---- Navigation ---- */
    function initNav() {
        const nav = document.getElementById('main-nav');
        const toggle = document.getElementById('nav-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        // Scroll behaviour
        if (nav) {
            let lastScroll = 0;
            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;
                if (scrollY > 60) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
                lastScroll = scrollY;
            }, { passive: true });
        }

        // Mobile toggle
        if (toggle && mobileMenu) {
            toggle.addEventListener('click', () => {
                const isOpen = mobileMenu.classList.contains('open');
                mobileMenu.classList.toggle('open');
                toggle.classList.toggle('active');
                toggle.setAttribute('aria-expanded', String(!isOpen));
                document.body.style.overflow = isOpen ? '' : 'hidden';
            });

            // Close when clicking a link
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('open');
                    toggle.classList.remove('active');
                    toggle.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                });
            });
        }
    }

    /* ---- Scroll Reveal (IntersectionObserver) ---- */
    function initScrollReveal() {
        const elements = document.querySelectorAll('.animate-on-scroll, .reveal, .reveal-scale, .reveal-fade');
        if (!elements.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        elements.forEach(el => observer.observe(el));
    }

    /* ---- Parallax ---- */
    function initParallax() {
        const items = document.querySelectorAll('[data-parallax]');
        if (!items.length) return;

        function onScroll() {
            const scrollY = window.scrollY;
            items.forEach(item => {
                const speed = parseFloat(item.getAttribute('data-parallax')) || 0.15;
                const rect = item.getBoundingClientRect();
                const offset = (rect.top + scrollY - window.innerHeight / 2) * speed;
                item.style.transform = 'translateY(' + offset + 'px)';
            });
        }

        window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* ---- Text Animations (elegant fade-in) ---- */
    function initTextAnimations() {
        // Word-level fade for [data-paragraph]
        const paragraphs = document.querySelectorAll('[data-paragraph]');
        paragraphs.forEach(el => {
            const text = el.textContent.trim();
            const words = text.split(/\s+/);
            el.innerHTML = '';
            words.forEach((word, i) => {
                const span = document.createElement('span');
                span.textContent = word + ' ';
                span.style.cssText = 'display:inline-block;margin-right:0.3em;opacity:0;transform:translateY(8px);transition:opacity 0.6s ease ' + (i * 0.04) + 's, transform 0.6s ease ' + (i * 0.04) + 's;';
                el.appendChild(span);
            });

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        el.querySelectorAll('span').forEach(s => {
                            s.style.opacity = '1';
                            s.style.transform = 'translateY(0)';
                        });
                        observer.unobserve(el);
                    }
                });
            }, { threshold: 0.2 });

            observer.observe(el);
        });

        // Heading fade-up for [data-header]
        const headers = document.querySelectorAll('[data-header]');
        headers.forEach(el => {
            el.style.cssText = 'opacity:0;transform:translateY(16px);transition:opacity 0.8s ease, transform 0.8s ease;';

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                        observer.unobserve(el);
                    }
                });
            }, { threshold: 0.2 });

            observer.observe(el);
        });
    }

    /* ---- Form Handler ---- */
    function initForms() {
        const forms = document.querySelectorAll('[data-static-form]');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const successId = form.getAttribute('data-success-id');
                const formWrapperId = form.getAttribute('data-form-id');

                if (successId && formWrapperId) {
                    const success = document.getElementById(successId);
                    const wrapper = document.getElementById(formWrapperId);
                    if (success) success.style.display = 'block';
                    if (wrapper) wrapper.style.display = 'none';
                }

                form.reset();
            });
        });
    }

    /* ---- Lazy Images Fallback ---- */
    function initLazyImages() {
        if ('loading' in HTMLImageElement.prototype) return;

        const images = document.querySelectorAll('img[loading="lazy"]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => observer.observe(img));
    }

    /* ---- Init ---- */
    document.addEventListener('DOMContentLoaded', () => {
        initPreloader();
        initNav();
        initScrollReveal();
        initParallax();
        initTextAnimations();
        initForms();
        initLazyImages();
    });

})();
