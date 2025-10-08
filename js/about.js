/**
 * ABOUT PAGE JAVASCRIPT
 * Handles scroll animations, interactions, and visual effects
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('About Page - Loaded Successfully');
    
    // ============================================
    // SCROLL REVEAL ANIMATIONS
    // ============================================
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger delay
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('revealed');
                }, index * 100);
                
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        scrollObserver.observe(element);
    });
    
    // ============================================
    // PROFILE CARD 3D TILT EFFECT
    // ============================================
    const profileCard = document.querySelector('.profile-card');
    
    if (profileCard) {
        profileCard.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 25;
            const rotateY = (centerX - x) / 25;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        profileCard.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
    
    // ============================================
    // GRADIENT TEXT ANIMATION
    // ============================================
    const gradientTexts = document.querySelectorAll('.gradient-text, .title-name');
    
    gradientTexts.forEach(text => {
        text.style.backgroundSize = '200% 100%';
        text.style.animation = 'gradient 8s linear infinite';
    });
    
    // ============================================
    // STAT COUNTER ANIMATION
    // ============================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                animateStats();
                hasAnimated = true;
            }
        });
    }, { threshold: 0.5 });
    
    if (statNumbers.length > 0) {
        statObserver.observe(statNumbers[0].parentElement.parentElement);
    }
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const finalValue = stat.textContent;
            const numericValue = parseInt(finalValue);
            
            if (!isNaN(numericValue)) {
                let currentValue = 0;
                const increment = numericValue / 50;
                const duration = 1500;
                const stepTime = duration / 50;
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= numericValue) {
                        stat.textContent = finalValue;
                        clearInterval(counter);
                    } else {
                        stat.textContent = Math.floor(currentValue) + '+';
                    }
                }, stepTime);
            }
        });
    }
    
    // ============================================
    // VALUE CARDS HOVER EFFECT
    // ============================================
    const valueCards = document.querySelectorAll('.value-card');
    
    valueCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add sparkle effect
            createSparkle(this);
        });
    });
    
    function createSparkle(element) {
        const sparkle = document.createElement('div');
        sparkle.className = 'card-sparkle';
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--highlight);
            border-radius: 50%;
            pointer-events: none;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: sparkle-fade 1s ease-out forwards;
        `;
        
        element.style.position = 'relative';
        element.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
    
    // Add sparkle animation
    if (!document.getElementById('sparkle-animation')) {
        const style = document.createElement('style');
        style.id = 'sparkle-animation';
        style.textContent = `
            @keyframes sparkle-fade {
                0% {
                    opacity: 1;
                    transform: scale(0) translateY(0);
                }
                100% {
                    opacity: 0;
                    transform: scale(1.5) translateY(-20px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ============================================
    // PARALLAX EFFECT FOR BACKGROUND ELEMENTS
    // ============================================
    const floatingElements = document.querySelectorAll('.floating-dot, .floating-line');
    
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        
        floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, 10));
    
    // ============================================
    // SMOOTH SCROLL FOR CTA BUTTONS
    // ============================================
    const ctaButtons = document.querySelectorAll('.btn');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                left: ${x}px;
                top: ${y}px;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation
    if (!document.getElementById('ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ============================================
    // TYPING EFFECT FOR HERO SUBTITLE (Optional)
    // ============================================
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // ============================================
    // INTERSECTION OBSERVER FOR STAT CARDS
    // ============================================
    const statCards = document.querySelectorAll('.stat-card');
    
    const statCardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.3 });
    
    statCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        statCardObserver.observe(card);
    });
    
    // ============================================
    // MOUSE CURSOR TRAIL EFFECT (Optional Enhancement)
    // ============================================
    let cursorTrail = [];
    const maxTrailLength = 10;
    
    document.addEventListener('mousemove', function(e) {
        if (window.innerWidth > 768) { // Only on desktop
            cursorTrail.push({ x: e.clientX, y: e.clientY });
            
            if (cursorTrail.length > maxTrailLength) {
                cursorTrail.shift();
            }
        }
    });
    
    // ============================================
    // UTILITY: THROTTLE FUNCTION
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
    
    console.log('About Page Animations - Initialized');
});

// ============================================
// EXPORT FUNCTIONS (if needed)
// ============================================
if (typeof window !== 'undefined') {
    window.aboutPageUtils = {
        // Export any utility functions here if needed
    };
}

