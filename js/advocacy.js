// ============================================
// ADVOCACY PAGE FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // SDG DATA
    // ============================================
    const sdgs = [
        { number: 4, name: "Quality Education", projects: 4 },
        { number: 7, name: "Affordable and Clean Energy", projects: 1 },
        { number: 8, name: "Decent Work and Economic Growth", projects: 4 },
        { number: 9, name: "Industry, Innovation and Infrastructure", projects: 6 },
        { number: 11, name: "Sustainable Cities and Communities", projects: 2 },
        { number: 12, name: "Responsible Consumption and Production", projects: 2 },
        { number: 13, name: "Climate Action", projects: 1 },
        { number: 15, name: "Life on Land", projects: 1 }
    ];
    
    // ============================================
    // ADVOCACY AREAS DATA
    // ============================================
    const advocacyAreas = [
        {
            title: "Quality Education Through Technology",
            icon: "📚",
            description: "Developing educational platforms, tools, and resources that make learning more accessible, engaging, and effective for students and educators.",
            sdgs: [4],
            actions: ["Educational Platforms", "Learning Tools", "Student Resources", "Cybersecurity Training"],
            color: "#C5192D"
        },
        {
            title: "Sustainable Cities & Communities",
            icon: "🏙️",
            description: "Creating smart city solutions that leverage AI and IoT to improve urban sustainability, waste management, and environmental monitoring.",
            sdgs: [11, 13],
            actions: ["Smart City Tech", "Environmental Monitoring", "Flood Prevention", "Urban Planning"],
            color: "#FD9D24"
        },
        {
            title: "Industry Innovation & Infrastructure",
            icon: "🏭",
            description: "Building innovative digital solutions that modernize business operations, enhance productivity, and drive economic growth through technology.",
            sdgs: [8, 9],
            actions: ["Digital Transformation", "Business Analytics", "Automation Tools", "Infrastructure Tech"],
            color: "#FD6925"
        },
        {
            title: "Responsible Consumption & Production",
            icon: "♻️",
            description: "Leveraging technology to promote sustainable practices, reduce waste, and encourage responsible resource consumption through data-driven insights.",
            sdgs: [12, 7],
            actions: ["Waste Management", "Energy Tracking", "Sustainability Tools", "Resource Optimization"],
            color: "#BF8B2E"
        },
        {
            title: "Climate Action & Environmental Protection",
            icon: "🌱",
            description: "Developing AI-powered systems that monitor environmental health, track biodiversity, and support climate action initiatives.",
            sdgs: [13, 15],
            actions: ["Environmental AI", "Climate Monitoring", "Biodiversity Tracking", "Conservation Tech"],
            color: "#3F7E44"
        },
        {
            title: "Decent Work & Economic Growth",
            icon: "💼",
            description: "Creating tools and platforms that support small businesses, improve workplace efficiency, and contribute to sustainable economic development.",
            sdgs: [8],
            actions: ["Business Tools", "Economic Analytics", "Workplace Solutions", "SME Support"],
            color: "#A21942"
        }
    ];
    
    // ============================================
    // RENDER SDG GRID
    // ============================================
    const sdgGrid = document.getElementById('sdgGrid');
    
    sdgs.forEach((sdg, index) => {
        const card = document.createElement('div');
        card.className = 'sdg-card';
        card.innerHTML = `
            <img src="../public/sdg/sdg${sdg.number}.png" alt="SDG ${sdg.number}: ${sdg.name}">
            <div class="sdg-overlay">
                <div class="sdg-number">SDG ${sdg.number}</div>
            </div>
        `;
        sdgGrid.appendChild(card);
        
        // Stagger animation
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 50);
    });
    
    // ============================================
    // RENDER ADVOCACY AREAS
    // ============================================
    const advocacyGrid = document.getElementById('advocacyGrid');
    
    advocacyAreas.forEach((area, index) => {
        const card = document.createElement('div');
        card.className = 'advocacy-card';
        card.style.setProperty('--advocacy-color', area.color);
        
        card.innerHTML = `
            <div class="advocacy-icon">${area.icon}</div>
            <h3 class="advocacy-title">${area.title}</h3>
            <p class="advocacy-description">${area.description}</p>
            
            <div class="advocacy-sdgs">
                ${area.sdgs.map(sdgNum => `
                    <div class="advocacy-sdg-badge">
                        <img src="../public/sdg/sdg${sdgNum}.png" alt="SDG ${sdgNum}">
                    </div>
                `).join('')}
            </div>
            
            <div class="advocacy-actions">
                ${area.actions.map(action => `<span class="action-tag">${action}</span>`).join('')}
            </div>
        `;
        
        advocacyGrid.appendChild(card);
    });
    
    // ============================================
    // SCROLL REVEAL
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.advocacy-card').forEach((card, index) => {
        setTimeout(() => {
            observer.observe(card);
        }, index * 50);
    });
    
    // ============================================
    // IMPACT STATS COUNTER
    // ============================================
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, 0, target, 2000);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    function animateCounter(element, start, end, duration) {
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutQuad = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (end - start) * easeOutQuad);
            
            element.textContent = current + (end === 100 ? '%' : '+');
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = end + (end === 100 ? '%' : '+');
            }
        }
        
        requestAnimationFrame(update);
    }
    
    // ============================================
    // PARTICLE EFFECTS ON PROJECT CARD HOVER
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
    
    advocacyGrid.addEventListener('mouseenter', (e) => {
        if (e.target.classList.contains('advocacy-card')) {
            const rect = e.target.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            const color = getComputedStyle(e.target).getPropertyValue('--advocacy-color');
            
            createParticleBurst(x, y, color);
        }
    }, true);
});

