/* =====================================================
   EVENTS PAGE JAVASCRIPT
   ===================================================== */

// Celebrations Carousel
const CelebrationCarousel = {
    init() {
        this.track = document.getElementById('celebration-track');
        this.prevBtn = document.getElementById('celebration-prev');
        this.nextBtn = document.getElementById('celebration-next');

        if (!this.track) return;

        this.cards = this.track.querySelectorAll('.celebration-card');
        this.cardWidth = 340; // card width + gap

        this.bindEvents();
    },

    bindEvents() {
        this.prevBtn?.addEventListener('click', () => this.scroll('prev'));
        this.nextBtn?.addEventListener('click', () => this.scroll('next'));
    },

    scroll(direction) {
        const scrollAmount = this.cardWidth * 2;

        if (direction === 'next') {
            this.track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        } else {
            this.track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    CelebrationCarousel.init();
});
