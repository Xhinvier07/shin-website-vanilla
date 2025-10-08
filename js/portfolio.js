// ============================================
// PORTFOLIO PAGE FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // PROJECTS DATA
    // ============================================
    const projects = [
        {
            id: 1,
            title: "TrashScan",
            subtitle: "Real-Time Street Litter Monitoring System",
            category: "system",
            sdgs: [11, 12, 15],
            techStack: ["Electron", "Python", "Flask", "YOLOv8", "Google API"],
            description: "An AI-powered litter monitoring and analytics system that uses video surveillance to detect, log, and visualize street litter to support smarter waste management decisions.",
            image: "../public/projects/trashscan.png",
            demoLink: "https://trashscan.vercel.app/",
            githubLink: "https://github.com/xhinvier07/"
        },
        {
            id: 2,
            title: "BIPBIP",
            subtitle: "Branch Digital-Twin & Performance Analytics Platform",
            category: "webapp",
            sdgs: [8, 9],
            techStack: ["React", "Python", "Google API", "Supabase", "AI/ML"],
            description: "A branch intelligence analytics platform that creates a digital twin of physical branches by fusing operational signals, customer feedback, and predictive insights to improve service delivery.",
            image: "../public/projects/bipbip.png",
            demoLink: "https://bipbip-bpi.vercel.app/",
            githubLink: "https://github.com/xhinvier07/"
        },
        {
            id: 3,
            title: "Enigma 29",
            subtitle: "Capture the Flag Platform",
            category: "webapp",
            sdgs: [4],
            techStack: ["React", "Tailwind", "Supabase"],
            description: "A capture-the-flag (CTF) style web platform for cybersecurity education that delivers interactive challenges, user authentication, and event-driven game management for learners.",
            image: "../public/projects/Enigma29.PNG",
            demoLink: "https://enigma29.vercel.app/",
            githubLink: "https://github.com/xhinvier07/"
        },
        {
            id: 4,
            title: "OFES Form Autofill",
            subtitle: "Survey Form Automation Extension",
            category: "extension",
            sdgs: [4],
            techStack: ["JavaScript", "DOM", "Chrome Extension"],
            description: "A browser extension that automates repetitive form tasks to streamline online faculty evaluation survey completion and improve efficiency for users.",
            image: "../public/projects/ofes.PNG",
            demoLink: "https://chromewebstore.google.com/detail/ofes-form-autofill/bdofpldekddfihbjjocobphafcfibijg",
            githubLink: "#"
        },
        {
            id: 5,
            title: "FEUTECH GWA Calculator",
            subtitle: "Automated GWA Calculator for FEUTech Portal",
            category: "extension",
            sdgs: [4],
            techStack: ["JavaScript", "DOM", "Chrome Extension"],
            description: "A student-focused tool designed to simplify academic grade calculations through an accessible interface integrated with student workflows.",
            image: "../public/projects/feutechgwa.PNG",
            demoLink: "https://chromewebstore.google.com/detail/feu-tech-gwa-calculator/hbkeghiakiepmnjlilmgabffcamlceoa",
            githubLink: "#"
        },
        {
            id: 6,
            title: "Create & Conquer",
            subtitle: "Hackathon Website for CPEO Organization",
            category: "website",
            sdgs: [4, 8],
            techStack: ["React", "Tailwind", "Framer", "GSAP", "Three"],
            description: "An event platform website crafted to support hackathon management, participant information, and event logistics with a clean, navigable interface.",
            image: "../public/projects/cnc.PNG",
            demoLink: "https://createconquerhackathon.vercel.app/",
            githubLink: "#"
        },
        {
            id: 7,
            title: "SARI",
            subtitle: "Point-of-Sale & Inventory System",
            category: "webapp",
            sdgs: [8, 9],
            techStack: ["PHP", "SQL", "CSS", "CRUD"],
            description: "A point-of-sale and inventory system built to simplify operations for small businesses, featuring user-focused interfaces and robust data validation.",
            image: "../public/projects/sari_1.png",
            demoLink: "https://github.com/Xhinvier07/posinv",
            githubLink: "https://github.com/Xhinvier07/posinv"
        },
        {
            id: 8,
            title: "SPARC",
            subtitle: "Energy Usage Tracking Dashboard",
            category: "webapp",
            sdgs: [7, 12],
            techStack: ["React", "D3.js", "APIs"],
            description: "An energy usage tracking dashboard that visualizes appliance consumption data and helps users monitor household or personal electricity use.",
            image: "../public/projects/sparc.PNG",
            demoLink: "http://sparc-calcu.vercel.app/",
            githubLink: "https://github.com/xhinvier07/"
        },
        {
            id: 9,
            title: "FLOODY",
            subtitle: "IoT Flood Monitoring Platform",
            category: "website",
            sdgs: [11, 13],
            techStack: ["React", "Framer", "D3", "Three", "MUI"],
            description: "An IoT-inspired flood monitoring and visualization platform that maps flood risk and environmental data to help communities anticipate and prepare for flooding events.",
            image: "../public/projects/floody.png",
            demoLink: "https://floody.vercel.app/",
            githubLink: "https://github.com/xhinvier07/"
        },
        {
            id: 10,
            title: "NootNote",
            subtitle: "Web3 Collaborative Note Platform",
            category: "website",
            sdgs: [4, 9],
            techStack: ["React", "Tailwind"],
            description: "A Web3-enabled collaborative note sharing platform that encourages peer learning through reviews, discussions, and AI-generated quizzes, with gamified elements tied to virtual pet progression.",
            image: "../public/projects/nootnote.png",
            demoLink: "#",
            githubLink: "https://github.com/xhinvier07/"
        },
        {
            id: 11,
            title: "Wishlist",
            subtitle: "Personal Wishlist Web App",
            category: "webapp",
            sdgs: [],
            techStack: ["React", "Google API", "Tailwind", "Framer"],
            description: "A personal wishlist web app that enables users to organize and track desired items with a simple, cloud-synced interface and intuitive interactions.",
            image: "../public/projects/wishlist.png",
            demoLink: "https://shin-wishlist.vercel.app/",
            githubLink: "https://github.com/xhinvier07/"
        },
        {
            id: 12,
            title: "Piezdestrian",
            subtitle: "Renewable Energy Concept Project",
            category: "other",
            sdgs: [7, 9],
            techStack: ["Research", "Documentation"],
            description: "A renewable energy concept that harnesses kinetic power from foot traffic through engineered tiles, accompanied by technical documentation and pitch materials.",
            image: "../public/projects/piezdestrian.png",
            demoLink: "#",
            githubLink: "#"
        },
        {
            id: 13,
            title: "Vypr",
            subtitle: "Custom Programming Language Compiler",
            category: "other",
            sdgs: [4, 9],
            techStack: ["C++"],
            description: "A custom programming language and compiler project that implements lexical analysis, parsing, semantic checks, intermediate representation, and code generation for educational and experimental use.",
            image: "../public/projects/vypr_1.png",
            demoLink: "https://github.com/d-quint/VYPR",
            githubLink: "https://github.com/d-quint/VYPR"
        },
        {
            id: 14,
            title: "Glutaga",
            subtitle: "Retro-Style Arcade Shooter",
            category: "other",
            sdgs: [],
            techStack: ["C++"],
            description: "A retro-style arcade shooter inspired by classic space shooters, featuring pixel-art visuals, responsive gameplay mechanics, and optimized rendering for smooth play.",
            image: "../public/projects/glutaga.PNG",
            demoLink: "https://github.com/d-quint/glutaga",
            githubLink: "https://github.com/d-quint/glutaga"
        },
        {
            id: 15,
            title: "BEBOL",
            subtitle: "Child-Friendly Gamified Learning App",
            category: "mobile",
            sdgs: [4, 10],
            techStack: ["Figma", "Canva", "Photoshop"],
            description: "A child-friendly gamified learning app designed to make math and reading engaging for children and SPED learners.",
            image: "../public/projects/bebol.png",
            demoLink: "#",
            githubLink: "#"
        },
        {
            id: 16,
            title: "BioluminEssence",
            subtitle: "Glow-in-the-Dark Product & E-commerce Prototype",
            category: "other",
            sdgs: [9, 12],
            techStack: ["HTML", "CSS", "Glide", "Chemistry"],
            description: "A biotechnology-inspired consumer product concept that blends chemistry and design to create glow-in-the-dark items, accompanied by an e-commerce showcase and a physical prototype.",
            image: "../public/projects/bioluminessence.PNG",
            demoLink: "#",
            githubLink: "#"
        },
        {
            id: 17,
            title: "NEXUS",
            subtitle: "AI Mentoring & Skill-Development Platform",
            category: "mobile",
            sdgs: [4, 8],
            techStack: ["Figma", "Canva", "UI/UX", "AI/ML"],
            description: "An AI mentoring and skill-development platform that personalizes learning pathways, offers AI-powered mock interviews with real-time feedback, and uses gamified progression to prepare learners for the workforce.",
            image: "../public/projects/nexus.png",
            demoLink: "#",
            githubLink: "#"
        }
    ];
    
    // ============================================
    // SDG DATA
    // ============================================
    const sdgData = {
        4: "Quality Education",
        7: "Affordable and Clean Energy",
        8: "Decent Work and Economic Growth",
        9: "Industry, Innovation and Infrastructure",
        10: "Reduced Inequalities",
        11: "Sustainable Cities and Communities",
        12: "Responsible Consumption and Production",
        13: "Climate Action",
        15: "Life on Land"
    };
    
    // ============================================
    // RENDER PROJECTS
    // ============================================
    const projectsGrid = document.getElementById('projectsGrid');
    
    function renderProjects(filteredProjects) {
        projectsGrid.innerHTML = '';
        
        if (filteredProjects.length === 0) {
            document.getElementById('emptyState').style.display = 'block';
            return;
        }
        
        document.getElementById('emptyState').style.display = 'none';
        
        filteredProjects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = `project-card ${project.category}`;
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            card.innerHTML = `
                <div class="project-border"></div>
                
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" onerror="this.src='../public/projects/bebol.png'">
                    <div class="image-overlay"></div>
                    
                    <div class="category-badge ${project.category}">${getCategoryName(project.category)}</div>
                    
                    ${project.sdgs.length > 0 ? `
                        <div class="sdg-icons">
                            ${project.sdgs.map(sdgNum => `
                                <div class="sdg-icon" data-sdg="${sdgNum}" onmouseenter="showSDGTooltip(event, ${sdgNum})" onmouseleave="hideSDGTooltip()">
                                    <img src="../public/sdg/sdg${sdgNum}.png" alt="SDG ${sdgNum}">
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
                
                <div class="project-content">
                    <div class="project-header">
                        <h3 class="project-title">${project.title}</h3>
                        ${project.subtitle ? `<p class="project-subtitle">${project.subtitle}</p>` : ''}
                    </div>
                    
                    <p class="project-description">${project.description}</p>
                    
                    <div class="tech-stack">
                        ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    
                    <div class="project-actions">
                        ${project.demoLink !== '#' ? `
                            <a href="${project.demoLink}" target="_blank" class="action-btn demo-btn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <polyline points="15 3 21 3 21 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <line x1="10" y1="14" x2="21" y2="3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span>Live Demo</span>
                            </a>
                        ` : ''}
                        
                        ${project.githubLink !== '#' ? `
                            <a href="${project.githubLink}" target="_blank" class="action-btn code-btn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                <span>Code</span>
                            </a>
                        ` : ''}
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(card);
            
            // Stagger animation
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    function getCategoryName(category) {
        const categoryNames = {
            'system': 'System',
            'webapp': 'Web App',
            'website': 'Website',
            'extension': 'Extension',
            'mobile': 'Mobile App',
            'other': 'Other'
        };
        return categoryNames[category] || category;
    }
    
    // ============================================
    // FILTER FUNCTIONALITY
    // ============================================
    window.filterProjects = function(category) {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });
        
        const filtered = category === 'all' 
            ? projects 
            : projects.filter(p => p.category === category);
        
        renderProjects(filtered);
    };
    
    // Filter button click handlers
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterProjects(btn.dataset.category);
        });
    });
    
    // ============================================
    // SDG TOOLTIP
    // ============================================
    window.showSDGTooltip = function(event, sdgNumber) {
        const tooltip = document.getElementById('sdgTooltip');
        const rect = event.currentTarget.getBoundingClientRect();
        
        tooltip.textContent = `SDG ${sdgNumber}: ${sdgData[sdgNumber]}`;
        tooltip.style.display = 'block';
        tooltip.style.left = rect.left + (rect.width / 2) + 'px';
        tooltip.style.top = (rect.top - 10) + 'px';
    };
    
    window.hideSDGTooltip = function() {
        const tooltip = document.getElementById('sdgTooltip');
        tooltip.style.display = 'none';
    };
    
    // Initial render
    renderProjects(projects);
});

