// ===== DATA =====

const skillsData = [
    // Cloud & Infra
    {
        name: 'Google Workspace', category: 'cloud', percent: 90,
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
    },
    {
        name: 'Docker', category: 'cloud', percent: 80,
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    {
        name: 'Linux Server', category: 'cloud', percent: 85,
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
    },
    {
        name: 'Redis Enterprise', category: 'cloud', percent: 75,
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
    },
    {
        name: 'N8N Automation', category: 'cloud', percent: 70,
        logoSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="16" fill="#EA4B71"/>
            <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" font-weight="900" font-family="Arial">n8n</text>
        </svg>`
    },
    {
        name: 'SAS Analytics', category: 'cloud', percent: 65,
        logoSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="16" fill="#0066CC"/>
            <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="18" font-weight="900" font-family="Arial">SAS</text>
        </svg>`
    },
    // Database & Monitoring
    {
        name: 'PostgreSQL', category: 'database', percent: 88,
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    {
        name: 'MySQL', category: 'database', percent: 82,
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
        name: 'Grafana', category: 'database', percent: 85,
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg'
    },
    {
        name: 'Elasticsearch', category: 'database', percent: 80,
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg'
    },
    {
        name: 'Kibana', category: 'database', percent: 78,
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kibana/kibana-original.svg'
    },
    {
        name: 'DBeaver', category: 'database', percent: 90,
        logoSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="32" cy="18" rx="22" ry="9" fill="#5B8DB8" opacity=".9"/>
            <path d="M10 18v28c0 4.97 9.85 9 22 9s22-4.03 22-9V18" stroke="#5B8DB8" stroke-width="3"/>
            <path d="M10 30c0 4.97 9.85 9 22 9s22-4.03 22-9" stroke="#5B8DB8" stroke-width="2.5" opacity=".5"/>
            <path d="M10 42c0 4.97 9.85 9 22 9s22-4.03 22-9" stroke="#5B8DB8" stroke-width="2.5" opacity=".3"/>
        </svg>`
    },
    // Development
    {
        name: 'PHP', category: 'dev', percent: 72,
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    },
    {
        name: 'Laravel', category: 'dev', percent: 65,
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'
    },
    {
        name: 'Flutter', category: 'dev', percent: 62,
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
    },
    {
        name: 'HTML / CSS', category: 'dev', percent: 75,
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    // Tools
    {
        name: 'Git', category: 'tools', percent: 80,
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
        name: 'Trello', category: 'tools', percent: 88,
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg'
    },
    {
        name: 'Microsoft Office', category: 'tools', percent: 92,
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg'
    },
    {
        name: 'Canva', category: 'tools', percent: 85,
        logoSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="26" height="26" rx="7" fill="#00C4CC"/>
            <rect x="34" y="4" width="26" height="26" rx="7" fill="#7B2FF7"/>
            <rect x="4" y="34" width="26" height="26" rx="7" fill="#FF6B6B"/>
            <rect x="34" y="34" width="26" height="26" rx="7" fill="#FFD700"/>
        </svg>`
    },
    {
        name: 'ProjectLibre', category: 'tools', percent: 80,
        logoSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="14" width="48" height="7" rx="3.5" fill="#6C63FF"/>
            <rect x="8" y="28" width="36" height="7" rx="3.5" fill="#6C63FF" opacity=".7"/>
            <rect x="8" y="42" width="24" height="7" rx="3.5" fill="#6C63FF" opacity=".45"/>
        </svg>`
    },
];

const projectsData = [
    {
        title: 'XBRL Reporting System — IDX',
        desc: 'Troubleshooting dan support implementasi sistem pelaporan XBRL untuk Indonesia Stock Exchange. Menganalisis error parsing, validasi, dan kepatuhan schema melalui log analysis mendalam.',
        tags: ['Log Analysis', 'PostgreSQL', 'DBeaver', 'IDX'],
        emoji: '📊',
        bg: 'linear-gradient(135deg, rgba(108,99,255,0.25), rgba(255,101,132,0.2))',
        timeline: '2023 – 2024',
    },
    {
        title: 'IMDS — IDX Market Data System',
        desc: 'Mendukung kegiatan Proof of Concept IMDS termasuk environment setup, konfigurasi Denodo Platform, update lisensi, dan troubleshooting selama fase pengujian hingga implementasi.',
        tags: ['Denodo Platform', 'POC', 'Data Virtualization', 'IDX'],
        emoji: '📈',
        bg: 'linear-gradient(135deg, rgba(67,233,123,0.2), rgba(56,249,215,0.2))',
        timeline: '2024',
    },
    {
        title: 'Mobile Banking — BPR Universal (BUN)',
        desc: 'Monitoring aplikasi mobile banking via Grafana, pengelolaan replikasi PostgreSQL (primary & standby), dan penanganan insiden user sesuai SLA dengan log analysis terstruktur.',
        tags: ['Grafana', 'PostgreSQL', 'HA Replication', 'Mobile Banking'],
        emoji: '📱',
        bg: 'linear-gradient(135deg, rgba(255,107,107,0.2), rgba(255,160,122,0.2))',
        timeline: '2023 – 2025',
    },
    {
        title: 'AI CCTV Attendance System',
        desc: 'Pengembangan dan maintenance sistem absensi berbasis AI dengan facial recognition menggunakan kamera CCTV real-time. Integrasi dengan database PostgreSQL & Redis Enterprise.',
        tags: ['AI / Facial Recognition', 'CCTV', 'PostgreSQL', 'Redis'],
        emoji: '🤖',
        bg: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(67,233,123,0.2))',
        timeline: '2025 – Sekarang',
    },
    {
        title: 'PostgreSQL HA Replication',
        desc: 'Implementasi High Availability PostgreSQL database replication untuk meningkatkan reliabilitas sistem dan meminimalkan downtime operasional di PT Mitra Inti Bersama.',
        tags: ['PostgreSQL', 'HA Replication', 'Linux', 'Infrastructure'],
        emoji: '🗄️',
        bg: 'linear-gradient(135deg, rgba(168,237,234,0.2), rgba(254,214,227,0.2))',
        timeline: '2025',
    },
];

const experienceData = [
    {
        date: 'Oktober 2025 – Sekarang',
        company: 'PT Transformasi Teknologi Canggih',
        location: 'Gandaria Office Suite 8, South Jakarta',
        role: 'System Engineer',
        status: 'Current',
        logoEmoji: '🖥️',
        logoBg: 'linear-gradient(135deg, #6C63FF, #8B5CF6)',
        desc: 'Mengelola infrastruktur server Linux, layanan Docker, monitoring sistem, dan mengembangkan solusi AI termasuk sistem absensi berbasis CCTV dengan facial recognition real-time.',
        achievements: [
            'Meningkatkan stabilitas infrastruktur melalui monitoring proaktif & preventive maintenance',
            'Berhasil implementasi AI-based CCTV Attendance System dengan facial recognition',
            'Mengoptimalkan deployment workflow menggunakan Docker containerization',
            'Meningkatkan keamanan operasional melalui access management & infrastructure hardening',
        ],
        tags: ['Linux', 'Docker', 'PostgreSQL', 'Redis Enterprise', 'Grafana', 'AI/CCTV', 'SSH', 'VPN'],
    },
    {
        date: 'Januari 2025 – September 2025',
        company: 'PT Mitra Inti Bersama',
        location: 'Kota Wisata, Bogor',
        role: 'Software & Infrastructure',
        status: '',
        logoEmoji: '⚙️',
        logoBg: 'linear-gradient(135deg, #43E97B, #38F9D7)',
        desc: 'Maintenance server perusahaan, infrastruktur jaringan, dan sistem internal. Troubleshooting hardware, software, dan network lintas departemen serta manajemen database PostgreSQL.',
        achievements: [
            'Meningkatkan reliabilitas infrastruktur dengan mengurangi insiden teknis berulang',
            'Implementasi PostgreSQL database replication untuk High Availability (HA)',
            'Mendukung migrasi sistem dengan downtime operasional minimal',
            'Optimasi performa query database untuk reporting yang lebih cepat',
        ],
        tags: ['PostgreSQL', 'Linux Server', 'Network', 'SSH', 'Infrastructure Docs', 'Hardware Support'],
    },
    {
        date: 'Juni 2024 – Desember 2024',
        company: 'PT Digital Transformasi Teknologi',
        location: 'Kuningan, South Jakarta',
        role: 'Leader IT – Helpdesk',
        status: '',
        logoEmoji: '👑',
        logoBg: 'linear-gradient(135deg, #FF6584, #FF9A9E)',
        desc: 'Memimpin tim IT Helpdesk, mengawasi operasional harian, SLA compliance, dan administrasi Google Workspace organisasi termasuk user provisioning, security policies, dan onboarding otomatis.',
        achievements: [
            'Menurunkan rata-rata waktu resolusi tiket sebesar 35% dalam 3 bulan pertama',
            'Mengurangi recurring incidents sebesar 50% melalui weekly review & eskalasi',
            'Meningkatkan skor kepuasan pengguna menjadi 4.8/5',
            'Mempersingkat waktu provisioning akun GWS sebesar 40% melalui otomasi lifecycle management',
        ],
        tags: ['Google Workspace', 'DBeaver', 'PostgreSQL', 'Grafana', 'Elasticsearch', 'Kibana', 'SLA Management'],
    },
    {
        date: 'Juni 2023 – Juni 2024',
        company: 'PT Digital Transformasi Teknologi',
        location: 'Kuningan, South Jakarta',
        role: 'IT Helpdesk',
        status: '',
        logoEmoji: '🎧',
        logoBg: 'linear-gradient(135deg, #A8EDEA, #8B5CF6)',
        desc: 'Memberikan dukungan teknis first-level untuk hardware, software, jaringan, dan aplikasi mobile banking. Melakukan query analysis via DBeaver dan monitoring real-time melalui Grafana.',
        achievements: [
            'Menyelesaikan 1.000+ tiket support dengan SLA adherence >95%',
            'Mengidentifikasi bug kritis pada aplikasi mobile banking, berkontribusi pada patch cepat',
            'Menurunkan rata-rata waktu resolusi sebesar 30% melalui internal troubleshooting docs',
            'Mempertahankan rating kepuasan pengguna di atas 4.7/5',
        ],
        tags: ['DBeaver', 'PostgreSQL', 'Grafana', 'Mobile Banking', 'E-Ticketing', 'SLA'],
    },
];

const certsData = [
    { name: 'Foundation of Cloud Analytics', date: 'Apr 2026', icon: '☁️', link: 'https://www.credly.com/badges/f2b46d8b-71a7-4210-b6a6-a59a5796adc9/linked_in?t=te8x8b' },
    { name: 'Jago AI Automation dengan N8N', date: 'Apr 2026', icon: '🤖', link: 'https://drive.google.com/file/d/1tItbR4n3xfyNJABL7zEHgwrCVYj_nHd5/view?usp=drive_link' },
    { name: 'Associate Redis Software Operator', date: 'Feb 2026', icon: '🔴', link: 'https://drive.google.com/file/d/1KCqNPRaaKqx-goAGqRLiOtoaGQ-ujmXf/view?usp=drive_link' },
    { name: 'Associate Google Workspace Administrator', date: 'Sep 2025', icon: '🏆', link: 'https://drive.google.com/file/d/1dbRPIQnlVi6HxRym-sXRJewsWSptsCqo/view' },
    { name: 'Cloud & AI for Digital Business — Komdigi', date: 'Des 2024', icon: '🇮🇩', link: 'https://drive.google.com/file/d/1gIPvWSlpLJC5jaSz7q_Nei95BsHy4T7b/view' },
    { name: 'Cloud & AI Applications — Digitalent', date: 'Des 2024', icon: '💡', link: 'https://drive.google.com/file/d/1Jxv2y4YegO2gDI4x-cSTeTVRMwbVTjhh/view' },
    { name: 'Partnering with NetApp — Business Value', date: 'Des 2024', icon: '🌐', link: 'https://drive.google.com/file/d/133DpsuxnfFCwrIZTgdw1FnootiJN7P0p/view?usp=drive_link' },
    { name: 'Alibaba Cloud Database Sales Fundamental', date: 'Nov 2024', icon: '🗄️', link: 'https://drive.google.com/file/d/16VmMiIeuKzyIP64w2UcZxXZGGmYnaY50/view' },
    { name: 'Industry-Based Competency Test – Database', date: 'Jul 2024', icon: '🧪', link: 'https://drive.google.com/file/d/146whHfPj8FqrPpakME6YcFaKDuyGq53b/view' },
    { name: 'DevOps Engineering — Naradacode', date: 'Mar 2024', icon: '⚙️', link: 'https://drive.google.com/file/d/1OahQubcXUFCkVRgWasWXOvbwN6vXChyL/view' },
    { name: 'Fundamental Database MySQL', date: 'Jan 2024', icon: '💾', link: 'https://drive.google.com/file/d/11nCuNDj-SsFmiP6yJp5JcQQwJGTLNz3-/view' },
];

// ===== LOADER =====
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 2000);
});

// ===== MOBILE MENU =====
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
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
document.addEventListener('mousedown', () => cursor.style.transform = 'translate(-50%, -50%) scale(0.7)');
document.addEventListener('mouseup', () => cursor.style.transform = 'translate(-50%, -50%) scale(1)');

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
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.35 + 0.08;
    }
    update() {
        this.x += this.vx; this.y += this.vy;
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

for (let i = 0; i < 90; i++) particles.push(new Particle());

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
            const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (dist < 110) {
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(108, 99, 255, ${0.1 * (1 - dist / 110)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        });
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== TYPING TEXT =====
const typedEl = document.getElementById('typedText');
const phrases = [
    'System Engineer',
    'AI Developer',
    'Infrastructure Specialist',
    'Google Workspace Admin',
    'Database Engineer',
    'IT Leader'
];
let phraseIdx = 0, charIdx = 0, deleting = false, typingDelay = 100;

function typeText() {
    const current = phrases[phraseIdx];
    if (!deleting) {
        typedEl.textContent = current.slice(0, ++charIdx);
        if (charIdx === current.length) { deleting = true; typingDelay = 2200; }
        else { typingDelay = 100; }
    } else {
        typedEl.textContent = current.slice(0, --charIdx);
        if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; typingDelay = 400; }
        else { typingDelay = 50; }
    }
    setTimeout(typeText, typingDelay);
}
setTimeout(typeText, 1200);

// ===== COUNT UP STATS =====
function countUp(id, target, suffix = '') {
    const el = document.getElementById(id);
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current) + suffix;
        if (current >= target) clearInterval(timer);
    }, 30);
}

const heroObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        countUp('stat1', 2, '+');
        countUp('stat2', 11, '+');
        countUp('stat3', 1000, '+');
        heroObserver.disconnect();
    }
}, { threshold: 0.5 });
if (document.getElementById('stat1')) heroObserver.observe(document.getElementById('stat1').closest('section'));

// ===== RENDER SKILLS =====
function renderSkills(category = 'all') {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = '';
    const filtered = category === 'all' ? skillsData : skillsData.filter(s => s.category === category);
    filtered.forEach((skill, i) => {
        const card = document.createElement('div');
        card.className = 'skill-card animate-on-scroll';
        card.style.transitionDelay = `${i * 0.04}s`;

        const logoHTML = skill.logoUrl
            ? `<img src="${skill.logoUrl}" alt="${skill.name}" loading="lazy"/>`
            : skill.logoSvg || '';

        card.innerHTML = `
            <div class="skill-card-logo">${logoHTML}</div>
            <div class="skill-card-name">${skill.name}</div>
            <div class="skill-bar-wrapper">
                <div class="skill-bar" data-width="${skill.percent}"></div>
            </div>
            <div class="skill-percent">${skill.percent}%</div>
        `;
        grid.appendChild(card);
    });

    setTimeout(() => {
        document.querySelectorAll('.skill-card').forEach(card => {
            card.classList.add('animated');
            const bar = card.querySelector('.skill-bar');
            if (bar) bar.style.width = bar.dataset.width + '%';
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
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    projectsData.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'project-card animate-on-scroll';
        card.style.transitionDelay = `${i * 0.1}s`;
        card.innerHTML = `
            <div class="project-thumbnail">
                <div class="project-thumb-bg" style="background:${p.bg}">
                    <span class="project-thumb-icon">${p.emoji}</span>
                </div>
                <div class="project-overlay">
                    <a href="#" class="overlay-btn" title="Detail"><i class="fas fa-eye"></i></a>
                    <a href="#" class="overlay-btn" title="GitHub"><i class="fab fa-github"></i></a>
                </div>
            </div>
            <div class="project-content">
                <div class="project-tags">
                    ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
                </div>
                <h3 class="project-title">${p.title}</h3>
                <p class="project-desc">${p.desc}</p>
                <div class="project-footer">
                    <div class="project-timeline-label">
                        <i class="fas fa-calendar-alt"></i> ${p.timeline}
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}
renderProjects();

// ===== RENDER EXPERIENCE TIMELINE =====
function renderExperience() {
    const timeline = document.getElementById('expTimeline');
    timeline.innerHTML = '';
    experienceData.forEach((exp, i) => {
        const item = document.createElement('div');
        item.className = 'exp-item';

        const cardClass = i % 2 === 0 ? 'slide-left' : 'slide-right';
        const badgeStatus = exp.status ? `<span class="exp-badge exp-badge-status"><i class="fas fa-circle" style="font-size:0.5rem"></i> ${exp.status}</span>` : '';

        const achievementsHTML = exp.achievements.map(a => `
            <div class="exp-achieve-item">${a}</div>
        `).join('');

        const tagsHTML = exp.tags.map(t => `<span class="exp-tag">${t}</span>`).join('');

        const cardHTML = `
            <div class="exp-card ${cardClass}" style="transition-delay:${i * 0.15}s">
                <div class="exp-company-header">
                    <div class="exp-company-logo" style="background:${exp.logoBg}">
                        <span style="font-size:1.6rem;filter:drop-shadow(0 2px 6px rgba(0,0,0,0.4))">${exp.logoEmoji}</span>
                    </div>
                    <div>
                        <div class="exp-role">${exp.role}</div>
                        <div class="exp-company-name">${exp.company}</div>
                    </div>
                </div>
                <div class="exp-meta">
                    <span class="exp-badge exp-badge-date"><i class="fas fa-calendar-alt"></i> ${exp.date}</span>
                    <span class="exp-badge exp-badge-location"><i class="fas fa-map-marker-alt"></i> ${exp.location}</span>
                    ${badgeStatus}
                </div>
                <p class="exp-desc">${exp.desc}</p>
                <div class="exp-achievements">
                    <div class="exp-achievements-title"><i class="fas fa-star"></i> Key Achievements</div>
                    ${achievementsHTML}
                </div>
                <div class="exp-tags">${tagsHTML}</div>
            </div>
        `;

        if (i % 2 === 0) {
            item.innerHTML = `
                ${cardHTML}
                <div class="exp-dot"></div>
                <div class="exp-empty"></div>
            `;
        } else {
            item.innerHTML = `
                <div class="exp-empty"></div>
                <div class="exp-dot"></div>
                ${cardHTML}
            `;
        }
        timeline.appendChild(item);
    });
}
renderExperience();

// ===== RENDER CERTIFICATES =====
function renderCerts() {
    const grid = document.getElementById('certsGrid');
    grid.innerHTML = '';
    certsData.forEach((cert, i) => {
        const card = document.createElement('a');
        card.className = 'cert-card animate-on-scroll';
        card.href = cert.link;
        card.target = '_blank';
        card.rel = 'noopener';
        card.style.transitionDelay = `${i * 0.07}s`;
        card.innerHTML = `
            <div class="cert-icon">${cert.icon}</div>
            <div class="cert-info">
                <div class="cert-name">${cert.name}</div>
                <div class="cert-date"><i class="fas fa-calendar-check"></i> ${cert.date}</div>
            </div>
            <i class="fas fa-external-link-alt cert-arrow"></i>
        `;
        grid.appendChild(card);
    });
}
renderCerts();

// ===== SCROLL ANIMATIONS =====
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            const bar = entry.target.querySelector('.skill-bar');
            if (bar) bar.style.width = bar.dataset.width + '%';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

function observeAll() {
    document.querySelectorAll('.animate-on-scroll, .slide-left, .slide-right').forEach(el => {
        scrollObserver.observe(el);
    });
}
observeAll();

const mutObs = new MutationObserver(() => observeAll());
mutObs.observe(document.body, { childList: true, subtree: true });

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
});

// ===== ACTIVE NAV =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) current = section.getAttribute('id');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + current ? 'var(--text)' : '';
    });
});
