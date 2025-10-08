/**
 * EDUCATION PAGE JAVASCRIPT
 * Timeline animations and interactive effects
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Education Page - Loaded Successfully');
    
    // ============================================
    // TIMELINE SCROLL REVEAL
    // ============================================
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = entry.target.dataset.index || 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 200); // Stagger animation
                
                timelineObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
    
    // ============================================
    // PHILOSOPHY SECTION REVEAL
    // ============================================
    const philosophyContent = document.querySelector('.philosophy-content');
    
    if (philosophyContent) {
        const philosophyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    philosophyObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        philosophyObserver.observe(philosophyContent);
    }
    
    // ============================================
    // CARD HOVER EFFECTS WITH PARALLAX
    // ============================================
    const timelineCards = document.querySelectorAll('.timeline-card');
    
    timelineCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / 50;
            const moveY = (y - centerY) / 50;
            
            this.style.transform = `translateX(10px) translateZ(0) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) translateZ(0) rotateY(0) rotateX(0)';
        });
    });
    
    // ============================================
    // ACHIEVEMENT BADGES ANIMATION
    // ============================================
    const achievementBadges = document.querySelectorAll('.achievement-badge');
    
    achievementBadges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            badge.style.transition = 'all 0.5s ease';
            badge.style.opacity = '1';
            badge.style.transform = 'scale(1)';
        }, 1000 + (index * 100));
    });
    
    // ============================================
    // LOGO ROTATION ON CARD HOVER
    // ============================================
    timelineCards.forEach(card => {
        const logo = card.querySelector('.institution-logo img');
        
        card.addEventListener('mouseenter', function() {
            if (logo) {
                logo.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (logo) {
                logo.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // ============================================
    // GRADIENT SHIMMER EFFECT
    // ============================================
    const gradientText = document.querySelector('.gradient-text-shimmer');
    
    if (gradientText) {
        // Already animated via CSS, but can add interactive effects here
        gradientText.addEventListener('mouseenter', function() {
            this.style.animationDuration = '3s';
        });
        
        gradientText.addEventListener('mouseleave', function() {
            this.style.animationDuration = '8s';
        });
    }
    
    // ============================================
    // DETAIL ITEMS STAGGER ANIMATION
    // ============================================
    const detailItems = document.querySelectorAll('.detail-item');
    
    const detailObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 50);
            }
        });
    }, { threshold: 0.5 });
    
    detailItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-10px)';
        item.style.transition = 'all 0.4s ease';
        detailObserver.observe(item);
    });
    
    // ============================================
    // FLOATING GLOW ORBS PARALLAX
    // ============================================
    const glowOrbs = document.querySelectorAll('.glow-orb');
    
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        
        glowOrbs.forEach((orb, index) => {
            const speed = 0.3 + (index * 0.2);
            const yPos = -(scrolled * speed);
            orb.style.transform = `translateY(${yPos}px)`;
        });
    }, 10));
    
    // ============================================
    // TIMELINE MARKER PULSE ANIMATION
    // ============================================
    const markerDots = document.querySelectorAll('.marker-dot');
    
    markerDots.forEach((dot, index) => {
        // Add pulsing animation when card is in view
        const card = dot.closest('.timeline-item');
        
        const markerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        dot.style.animation = 'pulse 2s ease-in-out infinite';
                    }, index * 200);
                }
            });
        }, { threshold: 0.3 });
        
        if (card) {
            markerObserver.observe(card);
        }
    });
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = target.offsetTop - navbarHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ============================================
    // CARD ENTRANCE ANIMATION ON LOAD
    // ============================================
    window.addEventListener('load', function() {
        setTimeout(() => {
            timelineItems.forEach((item, index) => {
                if (isInViewport(item)) {
                    setTimeout(() => {
                        item.classList.add('revealed');
                    }, index * 200);
                }
            });
        }, 300);
    });
    
    // ============================================
    // UTILITY FUNCTIONS
    // ============================================
    
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
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // ============================================
    // PAGE LOAD COMPLETE
    // ============================================
    setTimeout(() => {
        document.body.classList.add('page-loaded');
    }, 100);
    
    console.log('Education Page Animations - Initialized');
});

