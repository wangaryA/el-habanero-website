/* =====================================================
   EL HABANERO BAR & GRILL - Interactive JavaScript
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    Preloader.init();
    Navigation.init();
    Hero.init();
    Carousel.init();
    MenuFilter.init();
    Reviews.init();
    ReservationForm.init();
    ScrollEffects.init();
    BackToTop.init();
});

/* =====================================================
   PRELOADER
   ===================================================== */
const Preloader = {
    init() {
        const preloader = document.getElementById('preloader');
        if (!preloader) return;

        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 1000);
        });

        // Fallback if load event already fired
        if (document.readyState === 'complete') {
            setTimeout(() => {
                preloader.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 500);
        }
    }
};

/* =====================================================
   NAVIGATION
   ===================================================== */
const Navigation = {
    init() {
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
        this.navOverlay = document.getElementById('nav-overlay');
        this.navLinks = document.querySelectorAll('.nav-link');

        if (!this.navbar) return;

        this.bindEvents();
        this.handleScroll();
    },

    bindEvents() {
        // Scroll handling
        window.addEventListener('scroll', () => this.handleScroll());

        // Mobile menu toggle
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Close mobile menu on overlay click
        if (this.navOverlay) {
            this.navOverlay.addEventListener('click', () => this.closeMobileMenu());
        }

        // Close mobile menu on link click
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
                this.setActiveLink(link);
            });
        });

        // Close mobile menu on mobile reserve button click
        const mobileReserveBtn = document.querySelector('.mobile-reserve-btn a');
        if (mobileReserveBtn) {
            mobileReserveBtn.addEventListener('click', () => this.closeMobileMenu());
        }

        // Close mobile menu on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-menu') && !e.target.closest('.hamburger')) {
                this.closeMobileMenu();
            }
        });

        // Update active link on scroll
        window.addEventListener('scroll', () => this.updateActiveOnScroll());

        // Close mobile menu on window resize (if resizing to desktop)
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this.closeMobileMenu();
            }
        });
    },

    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    },

    toggleMobileMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
        this.navOverlay?.classList.toggle('active');
        document.body.style.overflow = this.navMenu.classList.contains('active') ? 'hidden' : 'auto';
    },

    closeMobileMenu() {
        this.hamburger?.classList.remove('active');
        this.navMenu?.classList.remove('active');
        this.navOverlay?.classList.remove('active');
        document.body.style.overflow = 'auto';
    },

    setActiveLink(activeLink) {
        this.navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    },

    updateActiveOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
};

/* =====================================================
   HERO SECTION
   ===================================================== */
const Hero = {
    init() {
        this.animateCounters();
    },

    animateCounters() {
        const counters = document.querySelectorAll('[data-count]');

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const timer = setInterval(() => {
                            current += step;
                            if (current >= target) {
                                counter.textContent = target;
                                clearInterval(timer);
                            } else {
                                counter.textContent = Math.floor(current);
                            }
                        }, 16);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(counter);
        });
    }
};

/* =====================================================
   SIGNATURE DISHES CAROUSEL
   ===================================================== */
const Carousel = {
    init() {
        this.track = document.getElementById('carousel-track');
        this.prevBtn = document.getElementById('carousel-prev');
        this.nextBtn = document.getElementById('carousel-next');

        if (!this.track) return;

        this.cards = this.track.querySelectorAll('.signature-card');
        this.cardWidth = 350; // Card width + gap
        this.currentPosition = 0;

        this.bindEvents();
    },

    bindEvents() {
        this.prevBtn?.addEventListener('click', () => this.slide('prev'));
        this.nextBtn?.addEventListener('click', () => this.slide('next'));

        // Touch swipe support
        let startX = 0;
        let isDragging = false;

        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        this.track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const currentX = e.touches[0].clientX;
            const diff = startX - currentX;

            if (Math.abs(diff) > 50) {
                this.slide(diff > 0 ? 'next' : 'prev');
                isDragging = false;
            }
        });

        this.track.addEventListener('touchend', () => {
            isDragging = false;
        });
    },

    slide(direction) {
        const maxScroll = this.track.scrollWidth - this.track.clientWidth;

        if (direction === 'next') {
            this.currentPosition = Math.min(this.currentPosition + this.cardWidth, maxScroll);
        } else {
            this.currentPosition = Math.max(this.currentPosition - this.cardWidth, 0);
        }

        this.track.scrollTo({
            left: this.currentPosition,
            behavior: 'smooth'
        });
    }
};

/* =====================================================
   MENU FILTER
   ===================================================== */
const MenuFilter = {
    init() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.menuItems = document.querySelectorAll('.menu-item');

        if (this.filterBtns.length === 0) return;

        this.bindEvents();
    },

    bindEvents() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => this.filter(btn));
        });
    },

    filter(activeBtn) {
        const filter = activeBtn.getAttribute('data-filter');

        // Update active button
        this.filterBtns.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');

        // Filter items with animation
        this.menuItems.forEach((item, index) => {
            const category = item.getAttribute('data-category');
            const shouldShow = filter === 'all' || category === filter;

            if (shouldShow) {
                item.classList.remove('hidden');
                item.style.animation = `fadeUp 0.4s ease ${index * 0.05}s forwards`;
            } else {
                item.classList.add('hidden');
            }
        });
    }
};

/* =====================================================
   REVIEWS CAROUSEL
   ===================================================== */
const Reviews = {
    init() {
        this.track = document.getElementById('reviews-track');
        this.prevBtn = document.getElementById('review-prev');
        this.nextBtn = document.getElementById('review-next');
        this.currentDisplay = document.getElementById('review-current');
        this.totalDisplay = document.getElementById('review-total');

        if (!this.track) return;

        this.cards = this.track.querySelectorAll('.review-card');
        this.currentIndex = 0;
        this.totalCards = this.cards.length;

        // Update total display
        if (this.totalDisplay) {
            this.totalDisplay.textContent = this.totalCards;
        }

        this.bindEvents();
        this.autoPlay();
    },

    bindEvents() {
        this.prevBtn?.addEventListener('click', () => this.navigate('prev'));
        this.nextBtn?.addEventListener('click', () => this.navigate('next'));

        // Pause auto-play on hover
        this.track.addEventListener('mouseenter', () => this.pauseAutoPlay());
        this.track.addEventListener('mouseleave', () => this.autoPlay());
    },

    navigate(direction) {
        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % this.totalCards;
        } else {
            this.currentIndex = (this.currentIndex - 1 + this.totalCards) % this.totalCards;
        }
        this.updateCarousel();
    },

    goTo(index) {
        this.currentIndex = index;
        this.updateCarousel();
    },

    updateCarousel() {
        const offset = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${offset}%)`;

        // Update counter display
        if (this.currentDisplay) {
            this.currentDisplay.textContent = this.currentIndex + 1;
        }
    },

    autoPlay() {
        this.interval = setInterval(() => this.navigate('next'), 5000);
    },

    pauseAutoPlay() {
        clearInterval(this.interval);
    }
};

/* =====================================================
   RESERVATION FORM
   ===================================================== */
const ReservationForm = {
    init() {
        this.form = document.getElementById('reservation-form');
        this.dateInput = document.getElementById('res-date');

        if (!this.form) return;

        this.setMinDate();
        this.bindEvents();
    },

    setMinDate() {
        if (this.dateInput) {
            const today = new Date().toISOString().split('T')[0];
            this.dateInput.setAttribute('min', today);
        }
    },

    bindEvents() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Phone number formatting
        const phoneInput = document.getElementById('res-phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => this.formatPhone(e));
        }
    },

    formatPhone(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        } else if (value.length >= 3) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        }
        e.target.value = value;
    },

    handleSubmit(e) {
        e.preventDefault();

        // Simple validation
        const name = this.form.querySelector('#res-name').value;
        const phone = this.form.querySelector('#res-phone').value;
        const date = this.form.querySelector('#res-date').value;
        const time = this.form.querySelector('#res-time').value;
        const guests = this.form.querySelector('#res-guests').value;

        if (!name || !phone || !date || !time || !guests) {
            this.showError('Please fill in all required fields.');
            return;
        }

        // Show success modal
        this.showSuccessModal();

        // Reset form
        this.form.reset();
    },

    showSuccessModal() {
        const modal = document.getElementById('success-modal');
        if (modal) {
            modal.classList.add('active');
        }
    },

    showError(message) {
        alert(message);
    }
};

// Modal close function
function closeModal() {
    const modal = document.getElementById('success-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal on backdrop click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
        closeModal();
    }
});

/* =====================================================
   SCROLL EFFECTS
   ===================================================== */
const ScrollEffects = {
    init() {
        this.revealElements();
        this.smoothScroll();
    },

    revealElements() {
        const elements = document.querySelectorAll(
            '.section-header, .about-content, .about-images, .special-card, ' +
            '.contact-info, .reservation-info, .reservation-form-wrapper'
        );

        elements.forEach(el => el.classList.add('reveal'));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => observer.observe(el));
    },

    smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};

/* =====================================================
   BACK TO TOP BUTTON
   ===================================================== */
const BackToTop = {
    init() {
        this.button = document.getElementById('back-to-top');
        if (!this.button) return;

        this.bindEvents();
    },

    bindEvents() {
        window.addEventListener('scroll', () => this.toggleVisibility());
        this.button.addEventListener('click', () => this.scrollToTop());
    },

    toggleVisibility() {
        if (window.scrollY > 500) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    },

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
};

/* =====================================================
   ADDITIONAL UTILITIES
   ===================================================== */

// Parallax effect for floating elements
document.addEventListener('mousemove', (e) => {
    const floatItems = document.querySelectorAll('.float-item');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    floatItems.forEach((item, index) => {
        const speed = (index + 1) * 10;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        item.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// Lazy load images (if real images are added later)
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
};

// Run lazy load
lazyLoadImages();

// Keyboard navigation for carousels
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        document.getElementById('carousel-prev')?.click();
        document.getElementById('review-prev')?.click();
    } else if (e.key === 'ArrowRight') {
        document.getElementById('carousel-next')?.click();
        document.getElementById('review-next')?.click();
    }
});

// Performance: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttle to scroll events
window.addEventListener('scroll', throttle(() => {
    // Any heavy scroll operations can go here
}, 100));

/* =====================================================
   LIGHTBOX GALLERY
   ===================================================== */
const Lightbox = {
    images: [],
    currentIndex: 0,

    init() {
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImg = document.getElementById('lightbox-img');
        this.currentDisplay = document.getElementById('lightbox-current');
        this.totalDisplay = document.getElementById('lightbox-total');

        if (!this.lightbox) return;

        // Collect all gallery images
        const galleryItems = document.querySelectorAll('.gallery-grid-new img');
        this.images = Array.from(galleryItems).map(img => img.src);

        // Update total count
        if (this.totalDisplay) {
            this.totalDisplay.textContent = this.images.length;
        }

        this.bindEvents();
    },

    bindEvents() {
        // Close on backdrop click
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.close();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') {
                this.close();
            } else if (e.key === 'ArrowLeft') {
                this.changeImage(-1);
            } else if (e.key === 'ArrowRight') {
                this.changeImage(1);
            }
        });
    },

    open(index) {
        this.currentIndex = index;
        this.updateImage();
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    close() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    },

    changeImage(direction) {
        this.currentIndex = (this.currentIndex + direction + this.images.length) % this.images.length;
        this.updateImage();
    },

    updateImage() {
        if (this.lightboxImg && this.images[this.currentIndex]) {
            this.lightboxImg.src = this.images[this.currentIndex];
        }
        if (this.currentDisplay) {
            this.currentDisplay.textContent = this.currentIndex + 1;
        }
    }
};

// Initialize lightbox on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    Lightbox.init();
});

// Global functions for onclick handlers
function openLightbox(index) {
    Lightbox.open(index);
}

function closeLightbox() {
    Lightbox.close();
}

function changeLightboxImage(direction) {
    Lightbox.changeImage(direction);
}

/* =====================================================
   PREMIUM SHOWCASE SLIDESHOW
   ===================================================== */
const Showcase = {
    currentIndex: 0,
    totalSlides: 0,
    isPlaying: false,
    interval: null,
    progressInterval: null,
    progress: 0,
    slideDuration: 5000, // 5 seconds per slide

    init() {
        this.slides = document.querySelectorAll('.showcase-slide');
        this.thumbs = document.querySelectorAll('.showcase-thumb');
        this.prevBtn = document.getElementById('showcase-prev');
        this.nextBtn = document.getElementById('showcase-next');
        this.currentDisplay = document.getElementById('showcase-current');
        this.totalDisplay = document.getElementById('showcase-total');
        this.progressBar = document.getElementById('showcase-progress');
        this.autoplayBtn = document.getElementById('showcase-autoplay');

        if (!this.slides.length) return;

        this.totalSlides = this.slides.length;

        if (this.totalDisplay) {
            this.totalDisplay.textContent = this.totalSlides;
        }

        this.bindEvents();
        // Start autoplay by default
        this.startAutoplay();
    },

    bindEvents() {
        // Navigation buttons
        this.prevBtn?.addEventListener('click', () => {
            this.stopAutoplay();
            this.navigate('prev');
        });

        this.nextBtn?.addEventListener('click', () => {
            this.stopAutoplay();
            this.navigate('next');
        });

        // Thumbnail clicks
        this.thumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                this.stopAutoplay();
                const index = parseInt(thumb.dataset.index);
                this.goToSlide(index);
            });
        });

        // Autoplay toggle
        this.autoplayBtn?.addEventListener('click', () => {
            if (this.isPlaying) {
                this.stopAutoplay();
            } else {
                this.startAutoplay();
            }
        });

        // Pause on hover
        const showcaseMain = document.getElementById('showcase-main');
        showcaseMain?.addEventListener('mouseenter', () => {
            if (this.isPlaying) {
                this.pauseProgress();
            }
        });

        showcaseMain?.addEventListener('mouseleave', () => {
            if (this.isPlaying) {
                this.resumeProgress();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            const showcase = document.getElementById('showcase');
            if (!showcase) return;

            const rect = showcase.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible) {
                if (e.key === 'ArrowLeft') {
                    this.stopAutoplay();
                    this.navigate('prev');
                } else if (e.key === 'ArrowRight') {
                    this.stopAutoplay();
                    this.navigate('next');
                }
            }
        });

        // Touch swipe support
        let touchStartX = 0;
        const showcaseEl = document.getElementById('showcase-main');

        showcaseEl?.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });

        showcaseEl?.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > 50) {
                this.stopAutoplay();
                if (diff > 0) {
                    this.navigate('next');
                } else {
                    this.navigate('prev');
                }
            }
        }, { passive: true });
    },

    navigate(direction) {
        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        } else {
            this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        }
        this.updateSlide();
        this.resetProgress();
    },

    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlide();
        this.resetProgress();
    },

    updateSlide() {
        // Update slides
        this.slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === this.currentIndex);
        });

        // Update thumbnails
        this.thumbs.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === this.currentIndex);
        });

        // Scroll thumbnail into view (horizontal only, without affecting page scroll)
        const activeThumb = this.thumbs[this.currentIndex];
        const thumbContainer = document.getElementById('showcase-thumbs');
        if (activeThumb && thumbContainer) {
            const thumbRect = activeThumb.getBoundingClientRect();
            const containerRect = thumbContainer.getBoundingClientRect();
            const scrollLeft = thumbContainer.scrollLeft;
            const thumbCenter = activeThumb.offsetLeft - (containerRect.width / 2) + (thumbRect.width / 2);
            thumbContainer.scrollTo({
                left: thumbCenter,
                behavior: 'smooth'
            });
        }

        // Update counter
        if (this.currentDisplay) {
            this.currentDisplay.textContent = this.currentIndex + 1;
        }
    },

    startAutoplay() {
        this.isPlaying = true;
        this.updateAutoplayButton();
        this.resetProgress();
        this.startProgress();

        this.interval = setInterval(() => {
            this.navigate('next');
        }, this.slideDuration);
    },

    stopAutoplay() {
        this.isPlaying = false;
        this.updateAutoplayButton();
        clearInterval(this.interval);
        clearInterval(this.progressInterval);
        this.progress = 0;
        if (this.progressBar) {
            this.progressBar.style.width = '0%';
        }
    },

    pauseProgress() {
        clearInterval(this.progressInterval);
        clearInterval(this.interval);
    },

    resumeProgress() {
        const remainingTime = (1 - this.progress / 100) * this.slideDuration;

        this.startProgress();

        this.interval = setTimeout(() => {
            this.navigate('next');
            this.startAutoplay();
        }, remainingTime);
    },

    startProgress() {
        const increment = 100 / (this.slideDuration / 50);

        this.progressInterval = setInterval(() => {
            this.progress += increment;
            if (this.progressBar) {
                this.progressBar.style.width = `${Math.min(this.progress, 100)}%`;
            }
        }, 50);
    },

    resetProgress() {
        this.progress = 0;
        if (this.progressBar) {
            this.progressBar.style.width = '0%';
        }
        clearInterval(this.progressInterval);
        if (this.isPlaying) {
            this.startProgress();
        }
    },

    updateAutoplayButton() {
        if (!this.autoplayBtn) return;

        const svg = this.autoplayBtn.querySelector('svg');
        const span = this.autoplayBtn.querySelector('span');

        if (this.isPlaying) {
            svg.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
            span.textContent = 'Pause';
        } else {
            svg.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
            span.textContent = 'Auto-play';
        }
    }
};

// Initialize showcase on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    Showcase.init();
});

/* =====================================================
   GUEST GALLERY CAROUSEL
   ===================================================== */
const GuestGallery = {
    scrollAmount: 0,
    cardWidth: 300, // card width + gap

    init() {
        this.track = document.getElementById('guest-gallery-track');
        this.prevBtn = document.getElementById('guest-gallery-prev');
        this.nextBtn = document.getElementById('guest-gallery-next');
        this.currentDisplay = document.getElementById('guest-gallery-current');
        this.visibleDisplay = document.getElementById('guest-gallery-visible');
        this.totalDisplay = document.getElementById('guest-gallery-total');
        this.dotsContainer = document.getElementById('guest-gallery-dots');

        if (!this.track) return;

        this.cards = this.track.querySelectorAll('.guest-card');
        this.totalCards = this.cards.length;

        // Update total display
        if (this.totalDisplay) {
            this.totalDisplay.textContent = this.totalCards;
        }

        this.calculateDimensions();
        this.createDots();
        this.bindEvents();
        this.updateCounter();

        // Recalculate on resize
        window.addEventListener('resize', () => {
            this.calculateDimensions();
            this.createDots();
            this.updateCounter();
        });
    },

    calculateDimensions() {
        if (!this.cards.length) return;

        const card = this.cards[0];
        const style = window.getComputedStyle(card);
        const cardWidth = card.offsetWidth;
        const gap = parseInt(window.getComputedStyle(this.track).gap) || 20;
        this.cardWidth = cardWidth + gap;

        // Calculate visible cards
        const trackWidth = this.track.parentElement.offsetWidth - 120; // minus padding
        this.visibleCards = Math.floor(trackWidth / this.cardWidth);
        this.visibleCards = Math.max(1, this.visibleCards);

        // Calculate total pages
        this.totalPages = Math.ceil(this.totalCards / this.visibleCards);
    },

    createDots() {
        if (!this.dotsContainer) return;

        this.dotsContainer.innerHTML = '';

        // Create dots for each page (max 10 dots for cleaner UI)
        const dotsCount = Math.min(this.totalPages, 10);

        for (let i = 0; i < dotsCount; i++) {
            const dot = document.createElement('div');
            dot.className = `guest-gallery-dot${i === 0 ? ' active' : ''}`;
            dot.addEventListener('click', () => this.goToPage(i));
            this.dotsContainer.appendChild(dot);
        }

        this.dots = this.dotsContainer.querySelectorAll('.guest-gallery-dot');
    },

    bindEvents() {
        this.prevBtn?.addEventListener('click', () => this.scroll('prev'));
        this.nextBtn?.addEventListener('click', () => this.scroll('next'));

        // Update on manual scroll
        this.track.addEventListener('scroll', () => {
            this.updateCounter();
            this.updateDots();
        });
    },

    scroll(direction) {
        const scrollDistance = this.cardWidth * Math.max(1, this.visibleCards - 1);

        if (direction === 'next') {
            this.track.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        } else {
            this.track.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        }
    },

    goToPage(pageIndex) {
        const scrollPosition = pageIndex * this.cardWidth * this.visibleCards;
        this.track.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    },

    updateCounter() {
        const scrollLeft = this.track.scrollLeft;
        const firstVisible = Math.floor(scrollLeft / this.cardWidth) + 1;
        const lastVisible = Math.min(firstVisible + this.visibleCards - 1, this.totalCards);

        if (this.currentDisplay) {
            this.currentDisplay.textContent = firstVisible;
        }
        if (this.visibleDisplay) {
            this.visibleDisplay.textContent = lastVisible;
        }
    },

    updateDots() {
        if (!this.dots || !this.dots.length) return;

        const scrollLeft = this.track.scrollLeft;
        const currentPage = Math.round(scrollLeft / (this.cardWidth * this.visibleCards));
        const activeDotIndex = Math.min(currentPage, this.dots.length - 1);

        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === activeDotIndex);
        });
    }
};

// Initialize guest gallery on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    GuestGallery.init();
});