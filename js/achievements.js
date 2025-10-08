/**
 * ACHIEVEMENTS PAGE JAVASCRIPT
 * Infinite carousel and timeline animations
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Achievements Page - Loaded Successfully');
    
    // ============================================
    // INFINITE CAROUSEL WITH DRAG
    // ============================================
    const carouselTrack = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    
    // Clone slides for seamless infinite scroll
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        carouselTrack.appendChild(clone);
    });
    
    // Pause on hover
    carouselTrack.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });
    
    carouselTrack.addEventListener('mouseleave', function() {
        if (!isDragging) {
            this.style.animationPlayState = 'running';
        }
    });
    
    // Draggable functionality
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = null;
    let currentIndex = 0;

    // Prevent default drag on images
    carouselTrack.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', (e) => e.preventDefault());
    });

    carouselTrack.addEventListener('mousedown', dragStart);
    carouselTrack.addEventListener('touchstart', dragStart);
    window.addEventListener('mouseup', dragEnd);
    window.addEventListener('touchend', dragEnd);
    carouselTrack.addEventListener('mousemove', drag);
    carouselTrack.addEventListener('touchmove', drag);
    carouselTrack.addEventListener('mouseleave', dragEnd);

    function dragStart(event) {
        isDragging = true;
        startPos = getPositionX(event);
        carouselTrack.classList.add('dragging');
        carouselTrack.style.cursor = 'grabbing';
        
        // Get current transform value
        const style = window.getComputedStyle(carouselTrack);
        const matrix = new DOMMatrix(style.transform);
        prevTranslate = matrix.m41;
        
        // Pause animation
        carouselTrack.style.animationPlayState = 'paused';
        
        // Clear any existing animation
        if (animationID) {
            cancelAnimationFrame(animationID);
        }
    }

    function drag(event) {
        if (!isDragging) return;
        
        event.preventDefault();
        const currentPosition = getPositionX(event);
        const diff = currentPosition - startPos;
        currentTranslate = prevTranslate + diff;
        
        // Apply the drag transform immediately
        setSliderPosition();
    }

    function dragEnd() {
        if (!isDragging) return;
        
        isDragging = false;
        carouselTrack.classList.remove('dragging');
        carouselTrack.style.cursor = 'grab';
        
        // Calculate movement amount
        const movedBy = currentTranslate - prevTranslate;
        
        // If moved enough, snap to next/prev slide
        if (movedBy < -500) {
            currentIndex += 1;
        } else if (movedBy > 500) {
            currentIndex -= 1;
        }
        
        // Update position and resume animation after a delay
        prevTranslate = currentTranslate;
        
        setTimeout(() => {
            carouselTrack.style.transform = '';
            carouselTrack.style.animationPlayState = 'running';
        }, 300);
    }

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
    }

    function setSliderPosition() {
        carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
    }
    
    // ============================================
    // TIMELINE SCROLL REVEAL
    // ============================================
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Force reveal with delay
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                timelineObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Ensure all items are observed
    timelineItems.forEach((item, index) => {
        // Add a small delay for initial items to ensure they render
        setTimeout(() => {
            timelineObserver.observe(item);
        }, index * 50);
    });
    
    // ============================================
    // AWARD CARD HOVER EFFECTS
    // ============================================
    const awardCards = document.querySelectorAll('.award-card');
    
    awardCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.award-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.award-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
        
        // Particle effect on click
        card.addEventListener('click', function(e) {
            createAwardParticles(e.clientX, e.clientY, this);
        });
    });
    
    function createAwardParticles(x, y, card) {
        const cardType = card.classList.contains('gold') ? 'gold' :
                        card.classList.contains('silver') ? 'silver' :
                        card.classList.contains('bronze') ? 'bronze' :
                        card.classList.contains('academic') ? 'academic' :
                        card.classList.contains('certification') ? 'certification' : 'default';
        
        const colors = {
            gold: ['#FFD700', '#FFA500', '#FFEA00'],
            silver: ['#C0C0C0', '#E8E8E8', '#A8A8A8'],
            bronze: ['#CD7F32', '#B8733C', '#E89B5E'],
            academic: ['#4169E1', '#6495ED', '#1E90FF'],
            certification: ['#00CED1', '#20B2AA', '#48D1CC'],
            default: ['#33A1E0', '#1C6EA4', '#154D71']
        };
        
        const cardColors = colors[cardType];
        
        // Create sparkle particles
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'award-particle';
            const color = cardColors[Math.floor(Math.random() * cardColors.length)];
            
            particle.style.cssText = `
                position: fixed;
                width: ${Math.random() * 6 + 4}px;
                height: ${Math.random() * 6 + 4}px;
                background: ${color};
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                z-index: 9999;
                box-shadow: 0 0 15px ${color};
            `;
            
            const angle = (Math.PI * 2 * i) / 15;
            const velocity = 60 + Math.random() * 60;
            const gravity = 100 + Math.random() * 50;
            
            particle.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
            particle.style.setProperty('--ty', Math.sin(angle) * velocity - gravity + 'px');
            particle.style.animation = 'award-particle-burst 1s ease-out forwards';
            
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1000);
        }
    }
    
    // Add particle animation
    if (!document.getElementById('award-particle-animation')) {
        const style = document.createElement('style');
        style.id = 'award-particle-animation';
        style.textContent = `
            @keyframes award-particle-burst {
                0% {
                    transform: translate(0, 0) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translate(var(--tx), var(--ty)) scale(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ============================================
    // YEAR BADGE ANIMATION
    // ============================================
    const yearBadges = document.querySelectorAll('.year-badge');
    
    yearBadges.forEach((badge, index) => {
        badge.style.animation = `badge-pop 0.6s ease-out ${index * 0.2}s backwards`;
    });
    
    if (!document.getElementById('badge-pop-animation')) {
        const style = document.createElement('style');
        style.id = 'badge-pop-animation';
        style.textContent = `
            @keyframes badge-pop {
                0% {
                    transform: translateX(-50%) scale(0);
                    opacity: 0;
                }
                50% {
                    transform: translateX(-50%) scale(1.2);
                }
                100% {
                    transform: translateX(-50%) scale(1);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ============================================
    // TROPHY FLOATING ICONS
    // ============================================
    const trophyIcons = document.querySelectorAll('.trophy-icon');
    
    trophyIcons.forEach((icon, index) => {
        icon.style.animation = `float-trophy ${6 + index * 0.5}s ease-in-out ${index * 1.5}s infinite`;
    });
    
    // ============================================
    // CAROUSEL SLIDE PARALLAX
    // ============================================
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    
    carouselSlides.forEach(slide => {
        slide.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const moveX = (x / rect.width - 0.5) * 10;
            const moveY = (y / rect.height - 0.5) * 10;
            
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
            }
        });
        
        slide.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.1) translate(0, 0)';
            }
        });
    });
    
    // ============================================
    // AWARD CARD RIPPLE EFFECT
    // ============================================
    awardCards.forEach(card => {
        card.addEventListener('mousedown', function(e) {
            const ripple = document.createElement('div');
            ripple.className = 'award-ripple';
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(255, 215, 0, 0.3), transparent);
                pointer-events: none;
                z-index: 999;
                animation: ripple-expand 0.6s ease-out;
            `;
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    if (!document.getElementById('ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes ripple-expand {
                from {
                    transform: scale(0);
                    opacity: 0.6;
                }
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ============================================
    // SCROLL PROGRESS INDICATOR
    // ============================================
    function updateScrollProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        // Update timeline line based on scroll
        const timelineLine = document.querySelector('.awards-section::before');
        if (timelineLine) {
            document.documentElement.style.setProperty('--scroll-progress', `${scrolled}%`);
        }
    }
    
    window.addEventListener('scroll', throttle(updateScrollProgress, 50));
    
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
    
    // ============================================
    // PAGE LOAD COMPLETE
    // ============================================
    setTimeout(() => {
        document.body.classList.add('page-loaded');
    }, 100);
    
    console.log('Achievements Page Animations - Initialized');
});

