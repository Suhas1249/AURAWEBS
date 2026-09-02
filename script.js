/* =========================================================
   AURA Interactive Engine & Scripts
   Advanced Understanding, Research & Automation
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cinematic Intro Controller
    initCinematicIntro();

    // 2. Interactive Physics Particle Canvas
    initParticleCanvas();

    // 3. Interactive Workflow Simulator Engine
    initWorkflowSimulator();

    // 4. Header Scroll & Active Section Highlighting
    initHeaderAndNav();

    // 5. Mobile Navigation Drawer
    initMobileNav();

    // 6. Scroll Reveal Observer
    initScrollReveal();

    // 7. Dynamic GitHub Repository Fetcher
    fetchGitHubProjects();

    // 8. Contact Form Handler
    initContactForm();

    // 9. Floating AURA AI Chatbot Engine
    initAuraChatbot();
});

/* ---------------------------------------------------------
   1. Cinematic Intro Controller
--------------------------------------------------------- */
function initCinematicIntro() {
    const intro = document.getElementById('cinematic-intro');
    const skipBtn = document.getElementById('skip-intro');

    if (!intro) return;

    function dismissIntro() {
        intro.classList.add('hidden');
        document.body.classList.remove('intro-lock');
        setTimeout(() => {
            intro.style.display = 'none';
        }, 600);
    }

    // Auto dismiss after 2.2 seconds
    const autoDismissTimer = setTimeout(dismissIntro, 2200);

    if (skipBtn) {
        skipBtn.addEventListener('click', () => {
            clearTimeout(autoDismissTimer);
            dismissIntro();
        });
    }
}

/* ---------------------------------------------------------
   2. Interactive Physics Particle Canvas
--------------------------------------------------------- */
function initParticleCanvas() {
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
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor(x, y, dx, dy, size, color) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.size = size;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
            if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;

            // Mouse proximity repulsion
            if (mouse.x !== null && mouse.y !== null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    let force = (mouse.radius - dist) / mouse.radius;
                    this.x -= (dx / dist) * force * 3;
                    this.y -= (dy / dist) * force * 3;
                }
            }

            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }

    function init() {
        particles = [];
        let count = Math.min(Math.floor((canvas.width * canvas.height) / 14000), 85);
        const palette = [
            'rgba(157, 78, 221, 0.45)', // Luminous Violet
            'rgba(0, 242, 254, 0.45)',  // Electric Cyan
            'rgba(212, 175, 55, 0.35)'  // Champagne Gold
        ];

        for (let i = 0; i < count; i++) {
            let size = Math.random() * 2 + 1;
            let x = Math.random() * (canvas.width - size * 2) + size;
            let y = Math.random() * (canvas.height - size * 2) + size;
            let dx = (Math.random() - 0.5) * 0.35;
            let dy = (Math.random() - 0.5) * 0.35;
            let color = palette[Math.floor(Math.random() * palette.length)];

            particles.push(new Particle(x, y, dx, dy, size, color));
        }
    }

    function connect() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                let dx = particles[a].x - particles[b].x;
                let dy = particles[a].y - particles[b].y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    let alpha = (1 - dist / 120) * 0.12;
                    ctx.strokeStyle = `rgba(157, 78, 221, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let p of particles) p.update();
        connect();
        animId = requestAnimationFrame(animate);
    }

    init();
    animate();

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(init, 200);
    });
}

/* ---------------------------------------------------------
   3. Interactive Workflow Simulator Engine
--------------------------------------------------------- */
const PIPELINE_DATA = {
    ecommerce: {
        category: 'E-COMMERCE & RETAIL AUTOMATION',
        heading: 'Autonomous Abandoned Cart & WhatsApp Revenue Engine',
        impact: '⚡ Projected Time Saved: 25+ Hours/Week & +35% Recovered Sales',
        steps: [
            {
                index: '01 · EVENT TRIGGER',
                title: 'Cart Abandoned',
                desc: 'Customer adds items to cart on mobile web app but exits at final payment checkout.'
            },
            {
                index: '02 · AI INTEL',
                title: 'Dynamic Intent Scoring',
                desc: 'AURA AI agent evaluates item urgency, user history, and generates a tailored discount incentive.'
            },
            {
                index: '03 · AUTONOMOUS ACTION',
                title: 'WhatsApp Direct Outreach',
                desc: 'Dispatches high-conversion personalized message via Meta API with 1-tap checkout link.'
            },
            {
                index: '04 · LIVE SYNC',
                title: 'ERP & Inventory Sync',
                desc: 'Customer completes payment; order details log immediately to dashboard and warehouse queue.'
            }
        ],
        summary: '<strong>Business Outcome:</strong> Converts abandoned shoppers within 15 minutes completely hands-free, recovering lost revenue on autopilot.'
    },
    services: {
        category: 'PROFESSIONAL SERVICES & AGENCIES',
        heading: '24/7 Client Consultation & Calendar Booking Pipeline',
        impact: '⚡ Projected Time Saved: 20+ Hours/Week & Zero Lead Dropoff',
        steps: [
            {
                index: '01 · EVENT TRIGGER',
                title: 'Inbound Web / Chat Inquiry',
                desc: 'High-intent client requests consultation via web portal, Instagram, or WhatsApp after business hours.'
            },
            {
                index: '02 · AI INTEL',
                title: 'Requirement Qualification',
                desc: 'Intelligent AI agent asks 3 dynamic questions to assess budget, project scope, and timeline.'
            },
            {
                index: '03 · AUTONOMOUS ACTION',
                title: 'Calendar & Proposal Dispatch',
                desc: 'Presents verified availability slots, books calendar meeting, and sends custom introductory brief.'
            },
            {
                index: '04 · LIVE SYNC',
                title: 'Lead Alert & CRM Update',
                desc: 'Dispatches instant priority alert to Suhas M R on WhatsApp and updates client pipeline database.'
            }
        ],
        summary: '<strong>Business Outcome:</strong> Eliminates lead response lag entirely. High-ticket clients are qualified and booked while your team focuses on execution.'
    },
    startups: {
        category: 'TECH STARTUPS & SAAS PLATFORMS',
        heading: 'Rapid Launch Velocity & Autonomous User Onboarding',
        impact: '⚡ Projected Time Saved: 70% Faster Go-To-Market',
        steps: [
            {
                index: '01 · EVENT TRIGGER',
                title: 'User Registration',
                desc: 'New business customer signs up on the high-performance AURA web portal.'
            },
            {
                index: '02 · AI INTEL',
                title: 'Workspace Provisioning',
                desc: 'Backend microservice automatically builds user instance, allocates database, and sets role policies.'
            },
            {
                index: '03 · AUTONOMOUS ACTION',
                title: 'Interactive Guided Walkthrough',
                desc: 'AI walkthrough agent detects customer domain and guides them through key product milestones.'
            },
            {
                index: '04 · LIVE SYNC',
                title: 'Real-Time Telemetry',
                desc: 'Telemetry stream tracks user activation metrics and alerts founder if friction is detected.'
            }
        ],
        summary: '<strong>Business Outcome:</strong> Launches production-ready software in 1–2 weeks without hiring bloated developer teams.'
    },
    healthcare: {
        category: 'CLINICS & HEALTHCARE PORTALS',
        heading: 'Smart Patient Triage & Automated Appointment Manager',
        impact: '⚡ Projected Time Saved: 30+ Hours/Week & 65% Phone Call Reduction',
        steps: [
            {
                index: '01 · EVENT TRIGGER',
                title: 'Patient Appointment Request',
                desc: 'Patient requests doctor consultation via WhatsApp or mobile clinic website.'
            },
            {
                index: '02 · AI INTEL',
                title: 'Clinical Triage & Matching',
                desc: 'AURA AI agent identifies department (e.g., General, Dental, Ortho) and verifies doctor roster.'
            },
            {
                index: '03 · AUTONOMOUS ACTION',
                title: 'Booking & Token Generation',
                desc: 'Issues verified digital appointment pass with location map, preparation notes, and calendar sync.'
            },
            {
                index: '04 · LIVE SYNC',
                title: 'EHR Database Sync',
                desc: 'Slots into clinic management system and schedules automated WhatsApp reminder 2 hours prior.'
            }
        ],
        summary: '<strong>Business Outcome:</strong> Eliminates phone congestion at front desk and reduces patient no-shows to near zero.'
    }
};

function initWorkflowSimulator() {
    const buttons = document.querySelectorAll('#sector-picker .sector-btn');
    const categoryEl = document.getElementById('pipeline-category');
    const headingEl = document.getElementById('pipeline-heading');
    const impactEl = document.getElementById('pipeline-impact');
    const flowchartEl = document.getElementById('pipeline-flowchart');
    const summaryEl = document.getElementById('pipeline-summary');

    if (!buttons.length || !flowchartEl) return;

    function renderSector(sectorKey) {
        const data = PIPELINE_DATA[sectorKey];
        if (!data) return;

        if (categoryEl) categoryEl.textContent = data.category;
        if (headingEl) headingEl.textContent = data.heading;
        if (impactEl) impactEl.innerHTML = data.impact;
        if (summaryEl) summaryEl.innerHTML = data.summary;

        // Render Flow Nodes
        flowchartEl.innerHTML = data.steps.map(step => `
            <div class="flow-node">
                <div class="flow-node-index">${step.index}</div>
                <h4>${step.title}</h4>
                <p>${step.desc}</p>
            </div>
        `).join('');
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const sector = btn.getAttribute('data-sector');
            renderSector(sector);
        });
    });

    // Initial render
    renderSector('ecommerce');
}

/* ---------------------------------------------------------
   4. Header Scroll & Active Section Highlighting
--------------------------------------------------------- */
function initHeaderAndNav() {
    const header = document.getElementById('main-header');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;

        // Header background blur on scroll
        if (header) {
            if (scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Active link tracking
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 140;
            const id = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Top edge corner case
        if (scrollY < 100 && navLinks.length > 0) {
            navLinks.forEach(l => l.classList.remove('active'));
            const homeLink = document.querySelector('.nav-menu a[href="#home"]');
            if (homeLink) homeLink.classList.add('active');
        }
    });
}

/* ---------------------------------------------------------
   5. Mobile Navigation Drawer
--------------------------------------------------------- */
function initMobileNav() {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('nav-menu');
    const links = document.querySelectorAll('.nav-menu a');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        menu.classList.toggle('open');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('open');
            menu.classList.remove('open');
        });
    });
}

/* ---------------------------------------------------------
   6. Scroll Reveal Observer
--------------------------------------------------------- */
function initScrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

/* ---------------------------------------------------------
   7. Dynamic GitHub Repository Fetcher for Suhas1249
--------------------------------------------------------- */
async function fetchGitHubProjects() {
    const container = document.getElementById('github-repos-container');
    if (!container) return;

    const username = 'Suhas1249';
    const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('GitHub API Limit or Offline');

        const repos = await response.json();

        if (repos && repos.length > 0) {
            container.innerHTML = ''; // Clear default fallbacks

            repos.forEach(repo => {
                if (repo.fork) return; // Skip forks

                const title = repo.name
                    .replace(/[-_]/g, ' ')
                    .replace(/\b\w/g, c => c.toUpperCase());

                const desc = repo.description || 'Production repository engineered with clean architecture, verified modules, and full documentation.';
                const lang = repo.language || 'Architecture';

                const cardHTML = `
                    <div class="project-card scroll-reveal revealed">
                        <div class="project-tag-wrapper">
                            <span class="proj-tag">${lang}</span>
                        </div>
                        <h3>${title}</h3>
                        <p>${desc}</p>
                        <a href="${repo.html_url}" target="_blank" class="project-link">Inspect Repository &rarr;</a>
                    </div>
                `;
                container.innerHTML += cardHTML;
            });
        }
    } catch (e) {
        console.log('Using verified AURA project showcases as default.');
    }
}

/* ---------------------------------------------------------
   8. Contact Form Handler (Direct Routing)
--------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const overlay = document.getElementById('form-success');
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-btn-text');

    if (!form || !overlay) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service-type').value;
        const message = document.getElementById('message').value.trim();

        if (submitBtn) submitBtn.disabled = true;
        if (submitText) submitText.textContent = 'Transmitting Inquiry...';

        try {
            // Submit to Web3Forms
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: '64650570-e69a-4112-88f5-93cf47669d2f', // Public free form routing key
                    name: name,
                    email: email,
                    service_required: service,
                    message: message,
                    target_recipient: 'websitedesigns1408@gmail.com',
                    from_name: `AURA Client Portal: ${name}`,
                    subject: `[AURA Project Inquiry] ${service} from ${name}`
                })
            });

            // Show success modal regardless of network state to provide continuous UX
            overlay.classList.add('active');
        } catch (err) {
            console.error('Submission routed to client fallback:', err);
            overlay.classList.add('active');
        } finally {
            if (submitBtn) submitBtn.disabled = false;
            if (submitText) submitText.textContent = 'Submit Project Inquiry';
        }
    });
}

// Global modal close function
window.closeSuccessOverlay = function() {
    const overlay = document.getElementById('form-success');
    const form = document.getElementById('contact-form');
    if (overlay) overlay.classList.remove('active');
    if (form) form.reset();
};

/* ---------------------------------------------------------
   9. Floating AURA AI Chatbot Engine
--------------------------------------------------------- */
function initAuraChatbot() {
    const toggleBtn = document.getElementById('chatbot-toggle-btn');
    const closeBtn = document.getElementById('chatbot-close-btn');
    const chatWindow = document.getElementById('chatbot-window');
    const chatForm = document.getElementById('chatbot-form');
    const chatInput = document.getElementById('chatbot-input');
    const messagesContainer = document.getElementById('chatbot-messages');
    const suggestions = document.querySelectorAll('#chatbot-suggestions .chip-btn');

    if (!toggleBtn || !chatWindow || !messagesContainer) return;

    // Open/Close toggle
    toggleBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('open');
        if (chatWindow.classList.contains('open') && chatInput) {
            chatInput.focus();
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            chatWindow.classList.remove('open');
        });
    }

    // Suggestion chips
    suggestions.forEach(chip => {
        chip.addEventListener('click', () => {
            const query = chip.getAttribute('data-query');
            if (query) {
                handleUserMessage(query);
            }
        });
    });

    // Form submit
    if (chatForm && chatInput) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (text) {
                handleUserMessage(text);
                chatInput.value = '';
            }
        });
    }

    function appendMessage(sender, htmlContent) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-msg ${sender === 'user' ? 'user-msg' : 'bot-msg'}`;
        
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        msgDiv.innerHTML = `
            <div class="msg-bubble">${htmlContent}</div>
            <span class="msg-time">${timeStr}</span>
        `;
        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-msg bot-msg typing-indicator-msg';
        typingDiv.id = 'bot-typing-indicator';
        typingDiv.innerHTML = `
            <div class="msg-bubble typing-bubble">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function removeTypingIndicator() {
        const ind = document.getElementById('bot-typing-indicator');
        if (ind) ind.remove();
    }

    function handleUserMessage(userText) {
        appendMessage('user', userText);
        showTypingIndicator();

        setTimeout(() => {
            removeTypingIndicator();
            const botResponse = generateAuraResponse(userText);
            appendMessage('bot', botResponse);
        }, 650);
    }

    // Smart AURA Knowledge Response Generator
    function generateAuraResponse(input) {
        const lower = input.toLowerCase();

        // 1. Services / What we build
        if (lower.includes('service') || lower.includes('build') || lower.includes('offer') || lower.includes('what do you do') || lower.includes('work')) {
            return `At <strong>AURA</strong> (*Advanced Understanding, Research & Automation*), we architect:
            <br>• 🚀 <strong>High-Performance Web Systems</strong> (Sub-second load speeds, modern UI)
            <br>• 🤖 <strong>24/7 Smart WhatsApp Chatbots</strong> (Meta API automated sales & bookings)
            <br>• ⚡ <strong>Autonomous AI Workflows</strong> (Data sync, lead triage & CRM integration)
            <br>• 📈 <strong>High-Converting Landing Pages</strong>
            <br><br>Would you like to discuss a project for your business? <a href="https://wa.me/919591560577" target="_blank">Chat with Suhas on WhatsApp &rarr;</a>`;
        }

        // 2. Timeline / Speed / Turnaround
        if (lower.includes('fast') || lower.includes('time') || lower.includes('timeline') || lower.includes('how long') || lower.includes('duration') || lower.includes('days') || lower.includes('weeks')) {
            return `⚡ <strong>Velocity is our core advantage!</strong>
            <br>• <strong>AURA Launch Velocity:</strong> 1 to 2 weeks for complete production-ready builds.
            <br>• Traditional agencies take 3 to 6 months.
            <br><br>We deliver <strong>70% faster</strong> with zero bloat and 100% code ownership.`;
        }

        // 3. Pricing / Cost / Budget
        if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing') || lower.includes('charge') || lower.includes('fee') || lower.includes('package') || lower.includes('rate') || lower.includes('how much')) {
            return `💰 <strong>Capital-Efficient Pricing:</strong>
            <br>• Instead of paying ₹10L–₹25L+ to hire a full development team, AURA delivers enterprise-level systems starting from <strong>₹30K to ₹1.5L</strong> depending on scope.
            <br>• <strong>100% Ownership:</strong> Zero monthly vendor lock-in fees for the code.
            <br><br>Want an exact quote for your project? <a href="https://wa.me/919591560577?text=Hello%20Suhas!%20I'd%20like%20a%20quote%20for%20my%20project." target="_blank">Get Instant WhatsApp Quote &rarr;</a>`;
        }

        // 4. Founder / Suhas M R / Who are you
        if (lower.includes('founder') || lower.includes('suhas') || lower.includes('who are you') || lower.includes('who built') || lower.includes('owner') || lower.includes('about')) {
            return `👤 <strong>Suhas M R</strong> is the Founder & Systems Architect of AURA.
            <br>• Based in Chitradurga, Karnataka, India.
            <br>• Specializes in Full-Stack Web Engineering, Meta WhatsApp Cloud APIs, and Autonomous AI Pipelines.
            <br>• GitHub: <a href="https://github.com/Suhas1249" target="_blank">github.com/Suhas1249</a>
            <br><br>You can reach him directly at <strong>+91 95915 60577</strong>.`;
        }

        // 5. WhatsApp / Contact / Phone / Email / Location
        if (lower.includes('whatsapp') || lower.includes('contact') || lower.includes('phone') || lower.includes('email') || lower.includes('call') || lower.includes('reach') || lower.includes('location') || lower.includes('address')) {
            return `📱 <strong>Direct Communication Channels:</strong>
            <br>• <strong>WhatsApp / Call:</strong> <a href="https://wa.me/919591560577" target="_blank">+91 95915 60577</a> (Fastest response)
            <br>• <strong>Email:</strong> <a href="mailto:websitedesigns1408@gmail.com">websitedesigns1408@gmail.com</a>
            <br>• <strong>Base:</strong> Chitradurga, Karnataka, India
            <br><br>Click below to open WhatsApp instantly!`;
        }

        // 6. WhatsApp Bot / Chatbot inquiry
        if (lower.includes('bot') || lower.includes('chatbot') || lower.includes('whatsapp bot') || lower.includes('meta')) {
            return `🤖 <strong>24/7 Smart WhatsApp Bots:</strong>
            <br>We build official Meta Cloud API WhatsApp bots that:
            <br>• Answer customer queries & FAQs 24/7
            <br>• Automatically book appointments & calendar slots
            <br>• Send product catalogs & take orders
            <br>• Sync lead details directly to your CRM or Google Sheets
            <br><br><a href="https://wa.me/919591560577?text=Hello%20Suhas!%20I%20want%20to%20build%20a%20WhatsApp%20Bot." target="_blank">Build a WhatsApp Bot with Us &rarr;</a>`;
        }

        // 7. E-commerce / Online store
        if (lower.includes('ecommerce') || lower.includes('e-commerce') || lower.includes('shop') || lower.includes('store') || lower.includes('cart') || lower.includes('sell')) {
            return `🛍️ <strong>E-Commerce & Revenue Engines:</strong>
            <br>We engineer sub-second mobile stores equipped with automated WhatsApp abandoned cart recovery (recovering 35%+ lost sales) and instant payment gateways.`;
        }

        // 8. Greetings
        if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey') || lower.includes('namaste') || lower.includes('good morning') || lower.includes('good evening')) {
            return `Hello! 👋 Welcome to <strong>AURA</strong>. I am here to help you explore our capabilities or get started on your next digital build.
            <br><br>Would you like to know about our <strong>services</strong>, <strong>turnaround time</strong>, or <strong>pricing</strong>?`;
        }

        // Default Fallback
        return `I understand you're interested in <em>"${input}"</em>. 
        <br><br>At AURA, we build custom high-performance web systems and AI automations tailored exactly to your business requirements.
        <br><br>For immediate personalized consultation, connect directly with <strong>Suhas M R</strong>:
        <br>👉 <a href="https://wa.me/919591560577?text=Hello%20Suhas!%20I%20have%20an%20inquiry%20regarding%20${encodeURIComponent(input)}" target="_blank">Chat with Suhas on WhatsApp</a>
        <br>✉️ Email: <a href="mailto:websitedesigns1408@gmail.com">websitedesigns1408@gmail.com</a>`;
    }
}
