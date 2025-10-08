/**
 * SKILLS PAGE JAVASCRIPT
 * Interactive tech card animations and effects
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Skills Page - Loaded Successfully');
    
    // ============================================
    // CATEGORY SCROLL REVEAL
    // ============================================
    const categories = document.querySelectorAll('.tech-category');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const categoryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Trigger card reveal animations
                const cards = entry.target.querySelectorAll('.tech-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('revealed');
                    }, index * 50);
                });
                
                categoryObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    categories.forEach(category => {
        categoryObserver.observe(category);
    });
    
    // ============================================
    // CARD HOVER EFFECTS
    // ============================================
    const techCards = document.querySelectorAll('.tech-card');
    
    // ============================================
    // ICON ROTATION ON HOVER
    // ============================================
    techCards.forEach(card => {
        const icon = card.querySelector('.tech-icon');
        
        card.addEventListener('mouseenter', function() {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // ============================================
    // GRAIN TEXTURE PARALLAX
    // ============================================
    const grainOverlays = document.querySelectorAll('.card-grain');
    
    grainOverlays.forEach(grain => {
        const card = grain.closest('.tech-card');
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const moveX = (x / rect.width - 0.5) * 15;
            const moveY = (y / rect.height - 0.5) * 15;
            
            grain.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
        });
        
        card.addEventListener('mouseleave', function() {
            grain.style.transform = 'translate(0, 0) scale(1)';
        });
    });
    
    // ============================================
    // CARD CLICK PARTICLE EFFECT
    // ============================================
    techCards.forEach(card => {
        card.addEventListener('click', function(e) {
            createParticles(e.clientX, e.clientY, this);
            
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'click-ripple';
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
                background: radial-gradient(circle, rgba(51, 161, 224, 0.3), transparent);
                pointer-events: none;
                z-index: 999;
                animation: ripple-expand 0.6s ease-out;
            `;
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    function createParticles(x, y, element) {
        const techName = element.querySelector('.tech-name').textContent;
        const colors = ['#33A1E0', '#1C6EA4', '#FFF9AF', '#154D71'];
        
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'click-particle';
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: ${color};
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                z-index: 9999;
                box-shadow: 0 0 10px ${color};
            `;
            
            const angle = (Math.PI * 2 * i) / 12;
            const velocity = 60 + Math.random() * 40;
            
            particle.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
            particle.style.setProperty('--ty', Math.sin(angle) * velocity + 'px');
            particle.style.animation = 'particle-burst 0.8s ease-out forwards';
            
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 800);
        }
    }
    
    // Add ripple animation
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
    // TECH CARD TOOLTIP (ON HOVER)
    // ============================================
    techCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const activeDots = this.querySelectorAll('.tech-level-dot.active').length;
            const tooltip = document.createElement('div');
            tooltip.className = 'skill-tooltip';
            tooltip.textContent = `Level: ${activeDots}/5`;
            tooltip.style.cssText = `
                position: absolute;
                top: -40px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.9);
                color: var(--text-primary);
                padding: 0.5rem 1rem;
                border-radius: 8px;
                font-size: 0.85rem;
                font-weight: 600;
                white-space: nowrap;
                z-index: 1000;
                border: 1px solid rgba(51, 161, 224, 0.5);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
                pointer-events: none;
                animation: tooltip-fade-in 0.3s ease;
            `;
            
            this.appendChild(tooltip);
        });
        
        card.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.skill-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
    
    // Add tooltip animation
    if (!document.getElementById('tooltip-animation')) {
        const style = document.createElement('style');
        style.id = 'tooltip-animation';
        style.textContent = `
            @keyframes tooltip-fade-in {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-5px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ============================================
    // FLOATING ICONS ANIMATION
    // ============================================
    const icons = document.querySelectorAll('.tech-icon');
    
    icons.forEach((icon, index) => {
        const floatDelay = index * 0.2;
        const floatDuration = 3 + Math.random() * 2;
        
        icon.style.animation = `icon-float ${floatDuration}s ease-in-out ${floatDelay}s infinite`;
    });
    
    // Add icon float animation if not exists
    if (!document.getElementById('icon-float-animation')) {
        const style = document.createElement('style');
        style.id = 'icon-float-animation';
        style.textContent = `
            @keyframes icon-float {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-5px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ============================================
    // DOT INDICATORS PULSE ON HOVER
    // ============================================
    techCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const activeDots = this.querySelectorAll('.tech-level-dot.active');
            activeDots.forEach((dot, index) => {
                setTimeout(() => {
                    dot.style.animation = 'dot-pulse 2s ease-in-out infinite';
                }, index * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            const activeDots = this.querySelectorAll('.tech-level-dot.active');
            activeDots.forEach(dot => {
                dot.style.animation = 'dot-pulse 2s ease-in-out infinite';
            });
        });
    });
    
    // ============================================
    // SMOOTH SCROLL
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
    // PAGE LOAD COMPLETE
    // ============================================
    setTimeout(() => {
        document.body.classList.add('page-loaded');
    }, 100);
    
    // ============================================
    // KEYBOARD NAVIGATION
    // ============================================
    let currentCardIndex = -1;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault();
            
            const visibleCards = Array.from(techCards).filter(card => {
                const rect = card.getBoundingClientRect();
                return rect.top >= 0 && rect.bottom <= window.innerHeight;
            });
            
            if (visibleCards.length === 0) return;
            
            if (e.key === 'ArrowRight') {
                currentCardIndex = (currentCardIndex + 1) % visibleCards.length;
            } else {
                currentCardIndex = (currentCardIndex - 1 + visibleCards.length) % visibleCards.length;
            }
            
            visibleCards[currentCardIndex].focus();
            visibleCards[currentCardIndex].style.outline = '2px solid var(--accent)';
            
            setTimeout(() => {
                visibleCards[currentCardIndex].style.outline = 'none';
            }, 1000);
        }
    });
    
    // Make cards focusable
    techCards.forEach(card => {
        card.setAttribute('tabindex', '0');
    });
    
    console.log('Skills Page Animations - Initialized');
});

