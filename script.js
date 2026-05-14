
    // ===== DATA =====
    const skillsData = [
        { name: 'HTML/CSS', icon: '🌐', percent: 95, category: 'frontend' },
        { name: 'JavaScript', icon: '⚡', percent: 90, category: 'frontend' },
        { name: 'React.js', icon: '⚛️', percent: 88, category: 'frontend' },
        { name: 'Vue.js', icon: '💚', percent: 80, category: 'frontend' },
        { name: 'TypeScript', icon: '📘', percent: 82, category: 'frontend' },
        { name: 'Next.js', icon: '🔺', percent: 85, category: 'frontend' },
        { name: 'Node.js', icon: '🟢', percent: 87, category: 'backend' },
        { name: 'Python', icon: '🐍', percent: 80, category: 'backend' },
        { name: 'Laravel', icon: '🔴', percent: 78, category: 'backend' },
        { name: 'MongoDB', icon: '🍃', percent: 82, category: 'backend' },
        { name: 'PostgreSQL', icon: '🐘', percent: 75, category: 'backend' },
        { name: 'GraphQL', icon: '🔷', percent: 70, category: 'backend' },
        { name: 'React Native', icon: '📱', percent: 75, category: 'mobile' },
        { name: 'Flutter', icon: '🦋', percent: 70, category: 'mobile' },
        { name: 'Git', icon: '🔧', percent: 90, category: 'tools' },
        { name: 'Docker', icon: '🐳', percent: 75, category: 'tools' },
        { name: 'Figma', icon: '🎨', percent: 80, category: 'tools' },
        { name: 'AWS', icon: '☁️', percent: 70, category: 'tools' },
    ];

    const projectsData = [
        {
            title: 'E-Commerce Platform',
            desc: 'Platform belanja online lengkap dengan fitur cart, payment gateway, dan dashboard admin yang modern.',
            tags: ['React', 'Node.js', 'MongoDB'],
            emoji: '🛒',
            bg: 'linear-gradient(135deg, #6C63FF22, #FF658422)',
            category: 'web',
            stars: 48,
            github: '#',
            demo: '#'
        },
        {
            title: 'Task Management App',
            desc: 'Aplikasi manajemen tugas dengan fitur drag & drop, kolaborasi tim, dan notifikasi real-time.',
            tags: ['Vue.js', 'Socket.io', 'PostgreSQL'],
            emoji: '📋',
            bg: 'linear-gradient(135deg, #43E97B22, #38F9D722)',
            category: 'web',
            stars: 35,
            github: '#',
            demo: '#'
        },
        {
            title: 'Fitness Tracker Mobile',
            desc: 'Aplikasi mobile untuk tracking olahraga, kalori, dan progress kesehatan dengan UI yang intuitif.',
            tags: ['React Native', 'Firebase'],
            emoji: '💪',
            bg: 'linear-gradient(135deg, #FF6B6B22, #FFA07A22)',
            category: 'mobile',
            stars: 62,
            github: '#',
            demo: '#'
        },
        {
            title: 'Dashboard Analytics',
            desc: 'Dashboard analytics dengan visualisasi data yang indah, real-time updates, dan laporan otomatis.',
            tags: ['Next.js', 'D3.js', 'Python'],
            emoji: '📊',
            bg: 'linear-gradient(135deg, #A8EDEA22, #FED6E322)',
            category: 'web',
            stars: 29,
            github: '#',
            demo: '#'
        },
        {
            title: 'Social Media UI Kit',
            desc: 'Design system dan UI kit lengkap untuk aplikasi sosial media dengan 200+ komponen.',
            tags: ['Figma', 'CSS', 'Storybook'],
            emoji: '🎨',
            bg: 'linear-gradient(135deg, #F7971E22, #FFD20022)',
            category: 'ui',
            stars: 91,
            github: '#',
            demo: '#'
        },
        {
            title: 'AI Chat Application',
            desc: 'Aplikasi chat berbasis AI dengan kemampuan natural language processing dan multi-language support.',
            tags: ['Python', 'OpenAI', 'React'],
            emoji: '🤖',
            bg: 'linear-gradient(135deg, #6C63FF22, #43E97B22)',
            category: 'web',
            stars: 77,
            github: '#',
            demo: '#'
        }
    ];

    const experienceData = [
        {
            date: '2022 - Sekarang',
            company: 'Tech Startup XYZ',
            role: 'Senior Full Stack Developer',
            desc: 'Memimpin tim pengembangan untuk membangun platform SaaS dengan 10K+ pengguna aktif. Meningkatkan performa aplikasi sebesar 60%.'
        },
        {
            date: '2020 - 2022',
            company: 'Digital Agency ABC',
            role: 'Full Stack Developer',
            desc: 'Mengembangkan 20+ website dan aplikasi web untuk klien dari berbagai industri. Spesialisasi dalam React dan Node.js.'
        },
        {
            date: '2019 - 2020',
            company: 'Startup Fintech DEF',
            role: 'Frontend Developer',
            desc: 'Membangun antarmuka pengguna yang responsif dan modern untuk aplikasi fintech dengan 50K+ pengguna.'
        },
        {
            date: '2018 - 2019',
            company: 'Freelancer',
            role: 'Junior Web Developer',
            desc: 'Mengerjakan berbagai proyek freelance, mulai dari website company profile hingga sistem manajemen sederhana.'
        }
    ];

    // ===== LOADER =====
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('loader').classList.add('hidden');
        }, 1800);
    });

    // ===== CUSTOM CURSOR =====
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 80);
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // ===== PARTICLES =====
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 0.5;
            this.opacity = Math.random() * 0.4 + 0.1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(108, 99, 255, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        // Draw connections
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(108, 99, 255, ${0.1 * (1 - dist / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });
        });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // ===== NAVBAR =====
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    function toggleMenu() {
        document.getElementById('navLinks').classList.toggle('open');
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navLinks').classList.remove('open');
        });
    });

    // ===== TYPED TEXT =====
    const texts = [
        'Full Stack Developer',
        'UI/UX Enthusiast',
        'Problem Solver',
        'Creative Thinker',
        'Tech Innovator'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const el = document.getElementById('typedText');
        const current = texts[textIndex];

        if (isDeleting) {
            el.textContent = current.substring(0, charIndex--);
        } else {
            el.textContent = current.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex > current.length) {
            setTimeout(() => { isDeleting = true; typeWriter(); }, 2000);
            return;
        }

        if (isDeleting && charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(typeWriter, isDeleting ? 50 : 100);
    }
    typeWriter();

    // ===== COUNTER ANIMATION =====
    function animateCounter(id, target, suffix = '+') {
        let count = 0;
        const step = target / 60;
        const el = document.getElementById(id);
        const timer = setInterval(() => {
            count = Math.min(count + step, target);
            el.textContent = Math.floor(count) + suffix;
            if (count >= target) clearInterval(timer);
        }, 30);
    }

    // Trigger counters when visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter('stat1', 5);
                animateCounter('stat2', 50);
                animateCounter('stat3', 30);
                statsObserver.disconnect();
            }
        });
    }, { threshold: 0.5 });
    statsObserver.observe(document.querySelector('.hero-stats'));

    // ===== RENDER SKILLS =====
    function renderSkills(filter = 'all') {
        const grid = document.getElementById('skillsGrid');
        const filtered = filter === 'all' ? skillsData : skillsData.filter(s => s.category === filter);
        
        grid.innerHTML = '';
        filtered.forEach((skill, i) => {
            const card = document.createElement('div');
            card.className = 'skill-card animate-on-scroll';
            card.style.transitionDelay = `${i * 0.05}s`;
            card.innerHTML = `
                <span class="skill-icon">${skill.icon}</span>
                <div class="skill-name">${skill.name}</div>
                <div class="skill-bar-wrapper">
                    <div class="skill-bar" data-width="${skill.percent}"></div>
                </div>
                <div class="skill-percent">${skill.percent}%</div>
            `;
            grid.appendChild(card);
        });

        // Re-trigger animations
        setTimeout(() => {
            document.querySelectorAll('.skill-card').forEach(card => {
                card.classList.add('animated');
            });
            // Animate bars
            document.querySelectorAll('.skill-bar').forEach(bar => {
                bar.style.width = bar.dataset.width + '%';
            });
        }, 100);
    }

    function filterSkills(category, btn) {
        document.querySelectorAll('.skill-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderSkills(category);
    }

    renderSkills();

    // ===== RENDER PROJECTS =====
    function renderProjects(filter = 'all') {
        const grid = document.getElementById('projectsGrid');
        const filtered = filter === 'all' ? projectsData : projectsData.filter(p => p.category === filter);
        
        grid.innerHTML = '';
        filtered.forEach((project, i) => {
            const card = document.createElement('div');
            card.className = 'project-card animate-on-scroll';
            card.style.transitionDelay = `${i * 0.1}s`;
            card.innerHTML = `
                <div class="project-thumbnail">
                    <div class="project-thumb-bg" style="background: ${project.bg}">
                        <span>${project.emoji}</span>
                    </div>
                    <div class="project-overlay">
                        <a href="${project.demo}" class="overlay-btn" title="Live Demo">
                            <i class="fas fa-eye"></i>
                        </a>
                        <a href="${project.github}" class="overlay-btn" title="GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-tags">
                        ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.desc}</p>
                    <div class="project-footer">
                        <div class="project-stars">
                            <i class="fas fa-star" style="color: #FFD700"></i>
                            ${project.stars}
                        </div>
                        <div class="project-links">
                            <a href="${project.github}" class="project-link"><i class="fab fa-github"></i></a>
                            <a href="${project.demo}" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        setTimeout(() => {
            document.querySelectorAll('.project-card').forEach(card => {
                card.classList.add('animated');
            });
        }, 100);
    }

    function filterProjects(category, btn) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(category);
    }

    renderProjects();

    // ===== RENDER TIMELINE =====
    function renderTimeline() {
        const timeline = document.getElementById('timeline');
        experienceData.forEach((exp, i) => {
            const item = document.createElement('div');
            item.className = 'timeline-item animate-on-scroll';
            item.innerHTML = `
                ${i % 2 === 0 ? `
                    <div class="timeline-content">
                        <div class="timeline-date">${exp.date}</div>
                        <div class="timeline-company">${exp.company}</div>
                        <div class="timeline-role">${exp.role}</div>
                        <div class="timeline-desc">${exp.desc}</div>
                    </div>
                    <div class="timeline-spacer"></div>
                ` : `
                    <div class="timeline-spacer"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">${exp.date}</div>
                        <div class="timeline-company">${exp.company}</div>
                        <div class="timeline-role">${exp.role}</div>
                        <div class="timeline-desc">${exp.desc}</div>
                    </div>
                `}
                <div class="timeline-dot"></div>
            `;
            timeline.appendChild(item);
        });
    }

    renderTimeline();

    // ===== SCROLL ANIMATIONS =====
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Animate skill bars when in view
                if (entry.target.classList.contains('skill-card')) {
                    const bar = entry.target.querySelector('.skill-bar');
                    if (bar) bar.style.width = bar.dataset.width + '%';
                }
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    function observeElements() {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            scrollObserver.observe(el);
        });
    }
    observeElements();

    // Re-observe after dynamic content
    const mutationObserver = new MutationObserver(() => {
        observeElements();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // ===== BACK TO TOP =====
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // ===== CONTACT FORM =====
    function submitForm(e) {
        e.preventDefault();
        const btn = e.target.querySelector('.form-submit');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        btn.disabled = true;
        
        setTimeout(() => {
            document.getElementById('formSuccess').style.display = 'block';
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Pesan';
            btn.disabled = false;
            e.target.reset();
            setTimeout(() => {
                document.getElementById('formSuccess').style.display = 'none';
            }, 5000);
        }, 1500);
    }

    // ===== ACTIVE NAV LINK =====
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === '#' + current) {
                link.style.color = 'var(--text)';
            }
        });
    });
   