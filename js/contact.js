// ============================================
// CONTACT PAGE FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // QUOTES DATA
    // ============================================
    const quotes = [
        { text: "Code is poetry written in logic.", author: "Anonymous" },
        { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
        { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
        { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
        { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
        { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
        { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
        { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
        { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
        { text: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay" }
    ];
    
    // ============================================
    // SET INITIAL QUOTE
    // ============================================
    const today = new Date().getDate();
    const initialQuote = quotes[today % quotes.length];
    document.getElementById('quoteText').textContent = `"${initialQuote.text}"`;
    document.getElementById('quoteAuthor').textContent = `— ${initialQuote.author}`;
    
    // ============================================
    // QUOTE CARD FLIP FUNCTIONALITY
    // ============================================
    const quoteCard = document.getElementById('quoteCard');
    let isFlipped = false;
    
    // Hover to flip
    quoteCard.addEventListener('mouseenter', () => {
        quoteCard.classList.add('flipped');
        isFlipped = true;
    });
    
    quoteCard.addEventListener('mouseleave', () => {
        quoteCard.classList.remove('flipped');
        isFlipped = false;
    });
    
    // Click to get new quote
    quoteCard.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const newQuote = quotes[randomIndex];
        
        document.getElementById('quoteText').textContent = `"${newQuote.text}"`;
        document.getElementById('quoteAuthor').textContent = `— ${newQuote.author}`;
    });
    
    // ============================================
    // CONTACT FORM SUBMISSION
    // ============================================
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('.submit-btn');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Disable button and show loading state
        submitBtn.disabled = true;
        const originalContent = submitBtn.innerHTML;
        submitBtn.innerHTML = `
            <div style="width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spin 0.6s linear infinite;"></div>
            <span>Sending...</span>
        `;
        
        // Add spin animation if not exists
        if (!document.getElementById('spin-animation')) {
            const style = document.createElement('style');
            style.id = 'spin-animation';
            style.textContent = `
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Simulate form submission
        setTimeout(() => {
            alert('Message sent! Thank you for reaching out.');
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalContent;
        }, 1000);
    });
    
    // ============================================
    // GITHUB CONTRIBUTIONS
    // ============================================
    function generateGitHubContributions() {
        const container = document.getElementById('githubContributions');
        
        const html = `
            <div class="github-header">
                <svg class="github-icon" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <h3>GitHub Contributions</h3>
            </div>
            <div class="contributions-grid" id="contributionsGrid">
                ${generateContributionCells()}
            </div>
            <div class="github-footer">
                <span>Contributions over the last year</span>
            </div>
        `;
        
        container.innerHTML = html;
    }
    
    function generateContributionCells() {
        let html = '';
        const days = 365;
        
        for (let i = 0; i < days; i++) {
            // Generate random contribution level (0-4)
            const level = Math.floor(Math.random() * 5);
            const levelClass = level > 0 ? `level-${level}` : '';
            html += `<div class="contribution-day ${levelClass}"></div>`;
        }
        
        return html;
    }
    
    // Initialize GitHub contributions
    generateGitHubContributions();
    
    // ============================================
    // STATS ANIMATION
    // ============================================
    function animateStats() {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter('.stat-projects', 15, 1500);
                    animateCounter('.stat-years', 3, 1200);
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        const statsCard = document.querySelector('.stats-card');
        if (statsCard) {
            statsObserver.observe(statsCard);
        }
    }
    
    function animateCounter(selector, target, duration) {
        const element = document.querySelector(selector);
        if (!element) return;
        
        const start = 0;
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeOutQuad = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * easeOutQuad);
            
            element.textContent = current + '+';
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }
    
    // Initialize stats animation
    animateStats();
    
    // ============================================
    // FORM INPUT ANIMATIONS
    // ============================================
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
    
    // ============================================
    // PARTICLE EFFECTS ON CARD HOVER
    // ============================================
    function createParticleBurst(x, y, color) {
        for (let i = 0; i < 6; i++) {
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
            
            const angle = (Math.PI * 2 * i) / 6;
            const distance = 30 + Math.random() * 40;
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
    
    // Add particle effects to cards
    document.querySelectorAll('.bento-card').forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const rect = card.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            const color = getComputedStyle(card).borderColor;
            
            createParticleBurst(x, y, 'rgba(51, 161, 224, 0.8)');
        });
    });
});

