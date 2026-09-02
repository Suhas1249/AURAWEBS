/* ==========================================================================
   AURA Client JavaScript Engine
   Advanced Understanding, Research & Automation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cinematic Opening Intro
    initCinematicIntro();

    // 2. Interactive Canvas Node Particles
    initParticles();

    // 3. Header Sticky & Scroll Dynamics
    initHeaderScroll();

    // 4. Mobile Navigation Drawer
    initMobileNav();

    // 5. Scroll Reveal Intersection Observer
    initScrollReveal();

    // 6. Navigation Link Highlighting on Scroll
    initActiveNavLinks();

    // 7. Interactive Automation Workflow Simulator
    initSimulator();

    // 8. Dynamic GitHub Repository Fetcher (Suhas1249)
    fetchGitHubProjects();

    // 9. Contact Form & Lead Capture Router
    initContactForm();
});

/* --------------------------------------------------------------------------
   1. Cinematic Opening Intro Controller
-------------------------------------------------------------------------- */
function initCinematicIntro() {
    const intro = document.getElementById('cinematicIntro');
    const skipBtn = document.getElementById('skipIntroBtn');

    if (!intro) return;

    function dismissIntro() {
        intro.classList.add('intro-dismissed');
        document.documentElement.classList.remove('intro-active');
        document.body.classList.remove('intro-locked');
    }

    if (skipBtn) {
        skipBtn.addEventListener('click', dismissIntro);
    }

    // Automatically transition into the main site after 1.8 seconds
    setTimeout(dismissIntro, 2000);
}

/* --------------------------------------------------------------------------
   2. Interactive Canvas Node Particle Background
-------------------------------------------------------------------------- */
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const mouse = { x: null, y: null, radius: 130 };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor(x, y, vx, vy, size, color) {
            this.x = x;
            this.y = y;
            this.vx = vx;
            this.vy = vy;
            this.size = size;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            if (this.x > canvas.width || this.x < 0) this.vx = -this.vx;
            if (this.y > canvas.height || this.y < 0) this.vy = -this.vy;

            // Mouse proximity repel
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    this.x -= (dx / dist) * force * 3;
                    this.y -= (dy / dist) * force * 3;
                }
            }

            this.x += this.vx;
            this.y += this.vy;
            this.draw();
        }
    }

    function createParticles() {
        particles = [];
        const count = Math.min((canvas.width * canvas.height) / 14000, 90);
        const palette = [
            'rgba(0, 242, 254, 0.45)',   // Electric Cyan
            'rgba(157, 78, 221, 0.45)',  // Neon Violet
            'rgba(212, 175, 55, 0.35)'   // Champagne Gold
        ];

        for (let i = 0; i < count; i++) {
            const size = Math.random() * 2 + 1;
            const x = Math.random() * (canvas.width - size * 2) + size;
            const y = Math.random() * (canvas.height - size * 2) + size;
            const vx = (Math.random() - 0.5) * 0.45;
            const vy = (Math.random() - 0.5) * 0.45;
            const color = palette[Math.floor(Math.random() * palette.length)];
            particles.push(new Particle(x, y, vx, vy, size, color));
        }
    }

    function connect() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 125) {
                    const alpha = (1 - dist / 125) * 0.14;
                    ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let p of particles) p.update();
        connect();
        animId = requestAnimationFrame(loop);
    }

    createParticles();
    loop();

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(createParticles, 180);
    });
}

/* --------------------------------------------------------------------------
   3. Header Sticky & Scroll Dynamics
-------------------------------------------------------------------------- */
function initHeaderScroll() {
    const header = document.getElementById('mainHeader');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* --------------------------------------------------------------------------
   4. Mobile Navigation Drawer
-------------------------------------------------------------------------- */
function initMobileNav() {
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('navMenu');
    const links = document.querySelectorAll('.nav-menu .nav-link');

    if (!toggle || !menu) return;

    function toggleNav() {
        toggle.classList.toggle('open');
        menu.classList.toggle('open');
        document.body.classList.toggle('intro-locked');
    }

    toggle.addEventListener('click', toggleNav);

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('open')) {
                toggleNav();
            }
        });
    });
}

/* --------------------------------------------------------------------------
   5. Scroll Reveal Intersection Observer
-------------------------------------------------------------------------- */
function initScrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   6. Navigation Link Highlighting on Scroll
-------------------------------------------------------------------------- */
function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 140;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });

        if (scrollY < 100 && navLinks[0]) {
            navLinks.forEach(l => l.classList.remove('active'));
            navLinks[0].classList.add('active');
        }
    });
}

/* --------------------------------------------------------------------------
   7. Interactive Automation Workflow Simulator (AURA Datasets)
-------------------------------------------------------------------------- */
const simulatorData = {
    ecommerce: {
        title: "E-Commerce Autonomous Order & WhatsApp Flow",
        badge: "AUTOMATED 24/7",
        outcome: "Recovers 35% of abandoned orders and automates 90% of customer sizing and catalog inquiries.",
        nodes: [
            { step: "01. INGEST", title: "Visitor Event", desc: "Customer drops off cart or clicks 'Direct WhatsApp Order' on product page." },
            { step: "02. PROCESS", title: "AURA AI Bot", desc: "AI agent delivers personalized discount voucher & confirms payment option on WhatsApp." },
            { step: "03. EXECUTE", title: "Payment Sync", desc: "Payment receipt verified, inventory deducted, and shipping tag auto-generated." },
            { step: "04. REPORT", title: "Owner Ledger", desc: "Sale logged to central dashboard with real-time revenue analytics." }
        ]
    },
    services: {
        title: "Local Business & Agency Client Pipeline",
        badge: "LEAD ACCELERATOR",
        outcome: "Converts website visitors into confirmed consultations within 60 seconds with zero manual phone tag.",
        nodes: [
            { step: "01. INGEST", title: "Lead Inbound", desc: "Prospective client fills high-speed consultation request or taps WhatsApp button." },
            { step: "02. PROCESS", title: "AI Qualification", desc: "AURA agent asks required budget, location, and project timeline questions automatically." },
            { step: "03. EXECUTE", title: "Direct Booking", desc: "Calendar invite locked into founder schedule & SMS/WhatsApp reminder dispatched." },
            { step: "04. REPORT", title: "CRM Sync", desc: "Verified contact & project brief routed straight to owner inbox & spreadsheet." }
        ]
    },
    startup: {
        title: "Tech Startup & SaaS Full-Stack MVP Engine",
        badge: "14-DAY VELOCITY",
        outcome: "Launches clean, Docker-ready Node/React/Python architectures 70% faster with zero vendor lock-in.",
        nodes: [
            { step: "01. INGEST", title: "Blueprint Lock", desc: "AURA architecture specifications, database schemas, and UX wireframes defined." },
            { step: "02. PROCESS", title: "Agile Build", desc: "Engineers code native responsive frontend, JWT authentication, and RESTful APIs." },
            { step: "03. EXECUTE", title: "Cloud Deploy", desc: "CI/CD automated deployment to AWS/Vercel with SSL, domain, and monitoring." },
            { step: "04. REPORT", title: "Code Handover", desc: "100% full source code ownership delivered to founder GitHub repository." }
        ]
    },
    healthcare: {
        title: "Clinic & Healthcare Patient Triage Portal",
        badge: "HIPAA COMPLIANT",
        outcome: "Saves reception staff 15+ hours weekly by automating patient appointment slots and doctor queues.",
        nodes: [
            { step: "01. INGEST", title: "Patient Booking", desc: "Patient selects doctor specialty, preferred time slot, and clinic branch online." },
            { step: "02. PROCESS", title: "Slot Verification", desc: "AURA bot validates doctor availability in real-time & confirms appointment via WhatsApp." },
            { step: "03. EXECUTE", title: "Token Generation", desc: "Digital token & directions dispatched to patient smartphone automatically." },
            { step: "04. REPORT", title: "Queue Dashboard", desc: "Live clinic monitor updates for reception desk with zero paperwork." }
        ]
    }
};

function initSimulator() {
    const tabs = document.querySelectorAll('.sim-tab');
    const titleEl = document.getElementById('simPipelineTitle');
    const badgeEl = document.getElementById('simPipelineBadge');
    const outcomeEl = document.getElementById('simOutcomeText');
    const gridEl = document.getElementById('simFlowchartGrid');

    if (!tabs.length || !gridEl) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const cat = tab.getAttribute('data-category');
            const data = simulatorData[cat];
            if (!data) return;

            // Update content with gentle animation
            if (titleEl) titleEl.textContent = data.title;
            if (badgeEl) badgeEl.textContent = data.badge;
            if (outcomeEl) outcomeEl.textContent = data.outcome;

            gridEl.innerHTML = '';
            data.nodes.forEach((node, i) => {
                const nodeCard = document.createElement('div');
                nodeCard.className = 'flow-node';
                nodeCard.style.animation = `rise 0.4s ease forwards ${i * 0.08}s`;
                nodeCard.innerHTML = `
                    <div class="node-step">${node.step}</div>
                    <h4 class="node-title">${node.title}</h4>
                    <p class="node-desc">${node.desc}</p>
                `;
                gridEl.appendChild(nodeCard);
            });
        });
    });
}

/* --------------------------------------------------------------------------
   8. Dynamic GitHub Repository Fetcher (Suhas1249)
-------------------------------------------------------------------------- */
async function fetchGitHubProjects() {
    const container = document.getElementById('github-repos-container');
    if (!container) return;

    const username = 'Suhas1249';
    const apiURL = `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`;

    try {
        const res = await fetch(apiURL);
        if (!res.ok) throw new Error('GitHub API rate limit or error');

        const repos = await res.json();

        if (Array.isArray(repos) && repos.length > 0) {
            container.innerHTML = '';

            repos.forEach(repo => {
                if (repo.fork) return;

                const title = repo.name
                    .replace(/[-_]/g, ' ')
                    .replace(/\b\w/g, c => c.toUpperCase());
                const desc = repo.description || 'Verified production source repository engineered by Suhas M R.';
                const lang = repo.language || 'Architecture';

                const card = document.createElement('div');
                card.className = 'project-card scroll-reveal revealed';
                card.innerHTML = `
                    <div class="project-meta">
                        <span class="code-badge">${lang}</span>
                        <span class="verified-badge">&#10003; Public Repo</span>
                    </div>
                    <h3>${title}</h3>
                    <p>${desc}</p>
                    <a href="${repo.html_url}" target="_blank" class="project-link">
                        <span>Inspect Repository</span> &rarr;
                    </a>
                `;
                container.appendChild(card);
            });
        }
    } catch (err) {
        console.warn('GitHub dynamic load fallback active:', err.message);
    }
}

/* --------------------------------------------------------------------------
   9. Contact Form & Lead Capture Router
-------------------------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const modal = document.getElementById('form-success');
    const submitBtn = document.getElementById('submit-btn');
    const submitBtnText = document.getElementById('submit-btn-text');
    const titleEl = document.getElementById('success-title');
    const textEl = document.getElementById('success-text');

    if (!form || !modal) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const service = document.getElementById('form-service').value;
        const message = document.getElementById('form-message').value.trim();
        const accessKey = document.getElementById('access-key') ? document.getElementById('access-key').value.trim() : '';

        if (submitBtn) submitBtn.disabled = true;
        if (submitBtnText) submitBtnText.textContent = 'Transmitting...';

        try {
            // If Web3Forms Access Key is provided, use Web3Forms API
            if (accessKey && accessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({
                        access_key: accessKey,
                        name: name,
                        email: email,
                        service: service,
                        message: message,
                        from_name: 'AURA Project Inbound Portal'
                    })
                });

                const result = await response.json();
                if (result.success) {
                    if (titleEl) titleEl.textContent = 'Transmission Received';
                    if (textEl) textEl.textContent = `Thank you, ${name}! Your project requirements have been transmitted directly to Suhas M R (websitedesigns1408@gmail.com).`;
                } else {
                    throw new Error(result.message || 'API transmission failed');
                }
            } else {
                // Direct fallback: simulate seamless client transmission and log
                console.log('AURA Client Transmission:', { name, email, service, message });
                if (titleEl) titleEl.textContent = 'Transmission Logged';
                if (textEl) textEl.innerHTML = `Thank you, <strong>${name}</strong>! Your inquiry for <em>${service}</em> has been recorded. For instant real-time response, you can also connect directly via <a href="https://wa.me/919591560577?text=Hello%20Suhas!%20I%20just%20submitted%20a%20project%20inquiry%20for%20${encodeURIComponent(service)}." target="_blank" style="color:#00F2FE;text-decoration:underline;">WhatsApp</a>.`;
            }

            modal.classList.add('active');
            document.body.classList.add('intro-locked');
        } catch (error) {
            console.error('Contact transmission error:', error);
            if (titleEl) titleEl.textContent = 'Notice';
            if (textEl) textEl.innerHTML = `Your message was prepared. You can send it directly to <strong>websitedesigns1408@gmail.com</strong> or chat with Suhas instantly on WhatsApp at <strong>+91 95915 60577</strong>.`;
            modal.classList.add('active');
            document.body.classList.add('intro-locked');
        } finally {
            if (submitBtn) submitBtn.disabled = false;
            if (submitBtnText) submitBtnText.textContent = 'Transmit Project Inquiry';
        }
    });
}

window.closeSuccessOverlay = function() {
    const modal = document.getElementById('form-success');
    const form = document.getElementById('contact-form');
    if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('intro-locked');
    }
    if (form) {
        form.reset();
    }
};
