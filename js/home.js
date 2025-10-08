// ============================================
// HOME PAGE FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // CRYPTIC TEXT ANIMATION
    // ============================================
    const crypticText = document.getElementById('crypticText');
    const originalText = 'Xhinvier';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    function getRandomChar() {
        return chars[Math.floor(Math.random() * chars.length)];
    }
    
    function animateText() {
        let iterations = 0;
        const maxIterations = 20;
        
        const interval = setInterval(() => {
            crypticText.textContent = originalText
                .split('')
                .map((letter, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    return getRandomChar();
                })
                .join('');
            
            if (iterations >= originalText.length) {
                clearInterval(interval);
                crypticText.textContent = originalText;
            }
            
            iterations += 1 / 3;
        }, 50);
    }
    
    // Start animation after a delay
    setTimeout(() => {
        animateText();
    }, 2000);
    
    // Repeat animation every 8 seconds
    setInterval(() => {
        animateText();
    }, 8000);
    
    // ============================================
    // PARTICLE BURST ON BUTTON CLICK
    // ============================================
    function createParticleBurst(x, y, color) {
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.borderRadius = '50%';
            particle.style.background = color;
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.opacity = '1';
            particle.style.transition = 'all 0.6s ease-out';
            
            document.body.appendChild(particle);
            
            const angle = (Math.PI * 2 * i) / 8;
            const distance = 40 + Math.random() * 60;
            const offsetX = Math.cos(angle) * distance;
            const offsetY = Math.sin(angle) * distance;
            
            requestAnimationFrame(() => {
                particle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
                particle.style.opacity = '0';
            });
            
            setTimeout(() => {
                particle.remove();
            }, 600);
        }
    }
    
    // Add particle effects to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            const color = btn.classList.contains('btn-primary') 
                ? 'rgba(51, 161, 224, 0.8)' 
                : 'rgba(255, 249, 175, 0.8)';
            
            createParticleBurst(x, y, color);
        });
    });
    
    // ============================================
    // CRYPTIC TEXT HOVER EFFECT
    // ============================================
    crypticText.addEventListener('mouseenter', () => {
        crypticText.style.animation = 'cryptic-glow 0.5s ease-in-out infinite alternate';
    });
    
    crypticText.addEventListener('mouseleave', () => {
        crypticText.style.animation = 'cryptic-glow 3s ease-in-out infinite alternate';
    });
    
    // ============================================
    // TYPING EFFECT FOR CRYPTIC LABEL
    // ============================================
    const crypticLabel = document.querySelector('.cryptic-label');
    const labelText = 'Developer Name:';
    let labelIndex = 0;
    
    function typeLabel() {
        if (labelIndex < labelText.length) {
            crypticLabel.textContent = labelText.slice(0, labelIndex + 1);
            labelIndex++;
            setTimeout(typeLabel, 100);
        }
    }
    
    // Start typing effect after initial animations
    setTimeout(() => {
        crypticLabel.textContent = '';
        labelIndex = 0;
        typeLabel();
    }, 1000);
    
    // ============================================
    // STARFIELD INTERACTION
    // ============================================
    const starfield = document.querySelector('.starfield');
    
    // Add mouse movement parallax effect
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        starfield.style.transform = `translate(${x}px, ${y}px) scale(1)`;
    });
    
    // ============================================
    // SCROLL TRIGGERED ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe hero elements for scroll animations
    document.querySelectorAll('.hero-badge, .hero-title, .cryptic-name, .hero-description, .hero-actions').forEach(el => {
        observer.observe(el);
    });
});

