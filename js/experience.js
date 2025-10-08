/**
 * EXPERIENCE PAGE JAVASCRIPT
 * Card animations and interactive effects
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Experience Page - Loaded Successfully');
    
    // ============================================
    // CARD SCROLL REVEAL
    // ============================================
    const experienceCards = document.querySelectorAll('.experience-card');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 150);
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    experienceCards.forEach(card => {
        cardObserver.observe(card);
    });
    
    // ============================================
    // CARD SCALE PULSE ON HOVER
    // ============================================
    experienceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
    
    // ============================================
    // BADGE LOGO SCALE
    // ============================================
    const badgeLogos = document.querySelectorAll('.badge-logo');
    
    badgeLogos.forEach(logo => {
        const card = logo.closest('.experience-card');
        
        card.addEventListener('mouseenter', function() {
            logo.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            logo.style.transform = 'scale(1)';
        });
    });
    
    // ============================================
    // SKILL TAGS WAVE ANIMATION
    // ============================================
    const skillTags = document.querySelectorAll('.skill-tag');
    
    experienceCards.forEach(card => {
        const tags = card.querySelectorAll('.skill-tag');
        
        card.addEventListener('mouseenter', function() {
            tags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'translateY(-2px)';
                    tag.style.opacity = '1';
                }, index * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            tags.forEach(tag => {
                tag.style.transform = 'translateY(0)';
            });
        });
    });
    
    // ============================================
    // RESPONSIBILITY ITEMS STAGGER
    // ============================================
    const responsibilityItems = document.querySelectorAll('.responsibilities li');
    
    const itemObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 75);
            }
        });
    }, { threshold: 0.5 });
    
    responsibilityItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-10px)';
        item.style.transition = 'all 0.4s ease';
        itemObserver.observe(item);
    });
    
    // ============================================
    // GRAIN TEXTURE ANIMATION
    // ============================================
    const grainOverlays = document.querySelectorAll('.card-grain');
    
    grainOverlays.forEach(grain => {
        const card = grain.closest('.experience-card');
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const moveX = (x / rect.width - 0.5) * 20;
            const moveY = (y / rect.height - 0.5) * 20;
            
            grain.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
        });
        
        card.addEventListener('mouseleave', function() {
            grain.style.transform = 'translate(0, 0) scale(1)';
        });
    });
    
    // ============================================
    // CARD GLOW PULSE
    // ============================================
    const cardGlows = document.querySelectorAll('.card-glow');
    
    experienceCards.forEach((card, index) => {
        const glow = card.querySelector('.card-glow');
        
        // Add random delay to pulse animation
        if (glow) {
            glow.style.animationDelay = `${index * 0.3}s`;
        }
    });
    
    // ============================================
    // SMOOTH SCROLL TO CARDS
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
    // PARTICLE EFFECT ON CARD CLICK
    // ============================================
    experienceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            createParticles(e.clientX, e.clientY);
        });
    });
    
    function createParticles(x, y) {
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'click-particle';
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: var(--accent);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                z-index: 9999;
                animation: particle-burst 0.6s ease-out forwards;
            `;
            
            const angle = (Math.PI * 2 * i) / 8;
            const velocity = 50;
            
            particle.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
            particle.style.setProperty('--ty', Math.sin(angle) * velocity + 'px');
            
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 600);
        }
    }
    
    // Add particle animation
    if (!document.getElementById('particle-animation')) {
        const style = document.createElement('style');
        style.id = 'particle-animation';
        style.textContent = `
            @keyframes particle-burst {
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
    
    console.log('Experience Page Animations - Initialized');
});

