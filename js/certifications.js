// ============================================
// CERTIFICATIONS PAGE FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // CERTIFICATE DATA
    // ============================================
    const certificates = [
        {
            title: "Lean Six Sigma White Belt Certification",
            issuer: "Six Sigma PH",
            description: "Introductory certification in Lean Six Sigma principles and basic process-improvement tools.",
            skills: ["Lean Six Sigma", "Process Improvement", "Problem Solving"],
            category: "professional",
            image: "LeanSixSigma-White.jpg"
        },
        {
            title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
            issuer: "Oracle",
            description: "Foundation-level credential covering AI concepts and how they map to Oracle Cloud services.",
            skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Cloud Fundamentals (OCI)"],
            category: "professional",
            image: "Oracle.jpg"
        },
        {
            title: "PMI Project Management Ready™",
            issuer: "Project Management Institute",
            description: "Basic project management fundamentals and team/collaboration basics for entry-level practitioners.",
            skills: ["Project Planning", "Teamwork", "Communication", "Task Scheduling"],
            category: "professional",
            image: "MORAL_PMI.jpg"
        },
        {
            title: "2024 SAS Hackathon: Participant",
            issuer: "SAS",
            description: "Participated in a data-focused hackathon solving analytics problems under time constraints.",
            skills: ["Python", "Data Analysis", "Problem Solving"],
            category: "technical",
            image: "sas.jpeg"
        },
        {
            title: "Artificial Intelligence Fundamentals",
            issuer: "IBM",
            description: "Introductory course on AI concepts, workflows, and practical ML/DL applications.",
            skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Model Evaluation"],
            category: "technical",
            image: "ai_ibm.jpg"
        },
        {
            title: "CCNA: Introduction to Networks",
            issuer: "Cisco",
            description: "Foundational networking course covering IP addressing, routing basics, and router configuration.",
            skills: ["IP Networking", "Routing", "Subnetting", "Router Configuration"],
            category: "technical",
            image: "intronetworks.jpg"
        },
        {
            title: "Engaging Stakeholders for Success",
            issuer: "Cisco",
            description: "Course on stakeholder identification, communication, and engagement techniques.",
            skills: ["Stakeholder Engagement", "Communication", "Relationship Building"],
            category: "professional",
            image: "stakeholder.jpg"
        },
        {
            title: "Introduction to Cybersecurity",
            issuer: "Cisco",
            description: "Foundational cybersecurity concepts including threats, defenses, and basic best practices.",
            skills: ["Cybersecurity Fundamentals", "Threat Awareness", "Security Best Practices"],
            category: "security",
            image: "cybersecurity.jpg"
        },
        {
            title: "IT Specialist – Python",
            issuer: "Certiport – A Pearson VUE Business",
            description: "Certification validating practical Python skills for IT and automation tasks.",
            skills: ["Python", "Scripting", "Automation", "Debugging"],
            category: "technical",
            image: "ITS-Python.jpg"
        },
        {
            title: "Python Complete Course For Beginners",
            issuer: "Udemy",
            description: "End-to-end beginner Python course covering syntax, data structures, and basic libraries.",
            skills: ["Python", "Anaconda", "Scripting"],
            category: "technical",
            image: "pythonbeginner.jpg"
        },
        {
            title: "Ethical Hacking: Post-Exploitation",
            issuer: "Udemy",
            description: "Focus on post-exploitation techniques and persistence in ethical hacking contexts.",
            skills: ["Post-Exploitation", "Kali Linux", "Security Testing"],
            category: "security",
            image: "ethicalhack.jpg"
        },
        {
            title: "PHP",
            issuer: "Sololearn",
            description: "Introductory PHP course covering server-side scripting fundamentals.",
            skills: ["PHP", "Server-Side Scripting", "Web Development Basics"],
            category: "technical",
            image: "PHP.jpg"
        },
        {
            title: "Python Video Processing",
            issuer: "Udemy",
            description: "Hands-on course on processing and manipulating video with Python tools and libraries.",
            skills: ["Python", "Video Processing", "OpenCV (concepts)"],
            category: "technical",
            image: "videoprocess.jpg"
        },
        {
            title: "Image Processing with Python PIL",
            issuer: "Udemy",
            description: "Practical course on using PIL/Pillow for image manipulation tasks in Python.",
            skills: ["Python", "Image Processing", "Pillow (PIL)"],
            category: "creative",
            image: "imageprocess.jpg"
        },
        {
            title: "Introduction to Python",
            issuer: "Sololearn",
            description: "Beginner-level overview of Python essentials and programming fundamentals.",
            skills: ["Python", "Basic Programming", "Data Types"],
            category: "technical",
            image: "intropython.jpg"
        },
        {
            title: "Mindful Computing",
            issuer: "Udemy",
            description: "Course on mindful and responsible computing practices across platforms.",
            skills: ["Digital Wellbeing", "Cross-Platform Awareness (Windows, Android)"],
            category: "professional",
            image: "mindfulcomputing.jpg"
        },
        {
            title: "Java Intermediate",
            issuer: "Sololearn",
            description: "Intermediate Java concepts including OOP, collections, and practical coding tasks.",
            skills: ["Java", "Object-Oriented Programming", "Problem Solving"],
            category: "technical",
            image: "JavaIntermediate.jpg"
        },
        {
            title: "Java",
            issuer: "Sololearn",
            description: "Introductory Java programming course covering syntax and basic application structure.",
            skills: ["Java", "Basic Programming"],
            category: "technical",
            image: "Java.jpg"
        },
        {
            title: "Problem Solving (Basic)",
            issuer: "HackerRank",
            description: "Verified competence in basic algorithmic problem solving and coding challenges.",
            skills: ["Algorithms", "Data Structures", "C++", "Python"],
            category: "technical",
            image: "ProbSolving.png"
        },
        {
            title: "Threat Intelligence",
            issuer: "Udemy",
            description: "Overview of cyber threat intelligence concepts and how to analyze threats.",
            skills: ["Cyber Threat Intelligence", "Ethical Hacking", "Cybersecurity"],
            category: "security",
            image: "threatintelligence.jpg"
        },
        {
            title: "Basics of Database Design & Development",
            issuer: "Udemy",
            description: "Fundamentals of database modelling, SQL, and common DB admin tools.",
            skills: ["Database Design", "MongoDB", "SQL", "PhpMyAdmin"],
            category: "technical",
            image: "databasedesign.jpg"
        },
        {
            title: "Fundaments of Digital Forensics",
            issuer: "Udemy",
            description: "Introductory digital forensics methods for evidence collection and analysis.",
            skills: ["Digital Forensics", "Evidence Handling", "Analysis Basics"],
            category: "security",
            image: "digitalforensics.jpg"
        },
        {
            title: "Unity 3D Make A Complete Racing Game",
            issuer: "Udemy",
            description: "Project-based Unity course building a complete racing game to teach game dev workflows.",
            skills: ["Unity3D", "C#", "Game Development", "UI Design"],
            category: "creative",
            image: "racinggame.jpg"
        }
    ];

    // ============================================
    // CAROUSEL SETUP
    // ============================================
    const carouselTrack = document.getElementById('certCarousel');
    
    // Create carousel slides (duplicate for seamless loop)
    const carouselCerts = certificates.filter(cert => cert.image);
    const allSlides = [...carouselCerts, ...carouselCerts]; // Duplicate for infinite scroll
    
    allSlides.forEach(cert => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `
            <img src="../public/cert/${cert.image}" alt="${cert.title}">
            <div class="slide-overlay">
                <div class="slide-caption">${cert.title}</div>
            </div>
        `;
        carouselTrack.appendChild(slide);
    });
    
    // ============================================
    // CAROUSEL DRAG FUNCTIONALITY
    // ============================================
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    
    // Prevent default drag on images
    carouselTrack.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', (e) => e.preventDefault());
    });
    
    carouselTrack.addEventListener('mousedown', dragStart, { passive: false });
    carouselTrack.addEventListener('touchstart', dragStart, { passive: false });
    window.addEventListener('mouseup', dragEnd);
    window.addEventListener('touchend', dragEnd);
    carouselTrack.addEventListener('mousemove', drag, { passive: false });
    carouselTrack.addEventListener('touchmove', drag, { passive: false });
    carouselTrack.addEventListener('mouseleave', dragEnd);
    
    function dragStart(event) {
        isDragging = true;
        startPos = getPositionX(event);
        carouselTrack.classList.add('dragging');
        
        // Pause animation
        const computedStyle = window.getComputedStyle(carouselTrack);
        const transform = computedStyle.getPropertyValue('transform');
        
        if (transform !== 'none') {
            const matrix = new WebKitCSSMatrix(transform);
            prevTranslate = matrix.m41;
        } else {
            prevTranslate = 0;
        }
        
        carouselTrack.style.animationPlayState = 'paused';
        carouselTrack.style.transform = `translateX(${prevTranslate}px)`;
    }
    
    function drag(event) {
        if (!isDragging) return;
        
        event.preventDefault();
        const currentPosition = getPositionX(event);
        const diff = currentPosition - startPos;
        currentTranslate = prevTranslate + diff;
        
        // Apply the drag transform
        carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
    }
    
    function dragEnd() {
        if (!isDragging) return;
        
        isDragging = false;
        carouselTrack.classList.remove('dragging');
        
        // Resume animation
        setTimeout(() => {
            carouselTrack.style.transform = '';
            carouselTrack.style.animationPlayState = 'running';
        }, 300);
    }
    
    function getPositionX(event) {
        return event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
    }
    
    // Hover pause/play
    carouselTrack.addEventListener('mouseenter', function() {
        if (!isDragging) {
            this.style.animationPlayState = 'paused';
        }
    });
    
    carouselTrack.addEventListener('mouseleave', function() {
        if (!isDragging) {
            this.style.animationPlayState = 'running';
        }
    });
    
    // ============================================
    // CERTIFICATIONS GRID
    // ============================================
    const certificationsGrid = document.getElementById('certificationsGrid');
    
    function renderCertifications(filter = 'all') {
        certificationsGrid.innerHTML = '';
        
        const filteredCerts = filter === 'all' 
            ? certificates 
            : certificates.filter(cert => cert.category === filter);
        
        filteredCerts.forEach(cert => {
            const card = document.createElement('div');
            card.className = `cert-card ${cert.category}`;
            card.innerHTML = `
                <div class="cert-icon">${getCertIcon(cert)}</div>
                <h3 class="cert-title">${cert.title}</h3>
                <div class="cert-issuer">${cert.issuer}</div>
                <p class="cert-description">${cert.description}</p>
                <div class="cert-skills">
                    ${cert.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            `;
            certificationsGrid.appendChild(card);
        });
        
        // Trigger scroll reveal
        observeCertCards();
    }
    
    function getCertIcon(cert) {
        // Map certificates to their company logos
        const logoMap = {
            'Lean Six Sigma White Belt Certification': '../public/six-sigma-logo.png',
            'Oracle Cloud Infrastructure 2025 AI Foundations Associate': '../public/oracle.png',
            'PMI Project Management Ready™': '../public/pmi.png',
            '2024 SAS Hackathon: Participant': '../public/sas.png',
            'Artificial Intelligence Fundamentals': '../public/ibm.png',
            'CCNA: Introduction to Networks': '../public/cisco.jpeg',
            'Engaging Stakeholders for Success': '../public/cisco.jpeg',
            'Introduction to Cybersecurity': '../public/cisco.jpeg',
            'IT Specialist – Python': '../public/pearson.png',
            'Python Complete Course For Beginners': '../public/udemy.png',
            'Ethical Hacking: Post-Exploitation': '../public/udemy.png',
            'PHP': '../public/sololearn.webp',
            'Python Video Processing': '../public/udemy.png',
            'Image Processing with Python PIL': '../public/udemy.png',
            'Introduction to Python': '../public/sololearn.webp',
            'Mindful Computing': '../public/udemy.png',
            'Java Intermediate': '../public/sololearn.webp',
            'Java': '../public/sololearn.webp',
            'Problem Solving (Basic)': '../public/hackerrank.png',
            'Threat Intelligence': '../public/udemy.png',
            'Basics of Database Design & Development': '../public/udemy.png',
            'Fundaments of Digital Forensics': '../public/udemy.png',
            'Unity 3D Make A Complete Racing Game': '../public/udemy.png'
        };
        
        const logoPath = logoMap[cert.title];
        if (logoPath) {
            return `<img src="${logoPath}" alt="${cert.issuer}" class="company-logo">`;
        }
        
        // Fallback to category-based icons if no specific logo found
        const categoryIcons = {
            professional: '🎓',
            technical: '💻',
            creative: '🎨',
            security: '🔒'
        };
        return categoryIcons[cert.category] || '📜';
    }
    
    // ============================================
    // FILTER FUNCTIONALITY
    // ============================================
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Filter certifications
            const filter = tab.dataset.filter;
            renderCertifications(filter);
        });
    });
    
    // ============================================
    // SCROLL REVEAL FOR CERT CARDS
    // ============================================
    function observeCertCards() {
        const certCards = document.querySelectorAll('.cert-card');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const certObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 100);
                    certObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        certCards.forEach((card, index) => {
            setTimeout(() => {
                certObserver.observe(card);
            }, index * 30);
        });
    }
    
    // Initial render
    renderCertifications('all');
    
    // ============================================
    // PARTICLE EFFECTS ON CARD HOVER
    // ============================================
    function createParticleBurst(x, y) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.borderRadius = '50%';
        particle.style.background = 'var(--accent)';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.opacity = '1';
        particle.style.transition = 'all 0.6s ease-out';
        
        document.body.appendChild(particle);
        
        const angle = Math.random() * Math.PI * 2;
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
    
    certificationsGrid.addEventListener('mouseenter', (e) => {
        if (e.target.classList.contains('cert-card')) {
            const rect = e.target.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            
            for (let i = 0; i < 8; i++) {
                setTimeout(() => createParticleBurst(x, y), i * 50);
            }
        }
    }, true);
});

