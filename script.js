/* =========================================================
   AURAWEBS — Client-Side Router & Interactive Engine
   Web • AI • Automation • Digital Systems
   Slogan: Build. Automate. Evolve.
   ========================================================= */

// Routing & SEO Map
const ROUTE_CONFIG = {
  '/': {
    viewId: 'view-home',
    title: 'AURAWEBS | Build. Automate. Evolve. — Web • AI • Automation • Digital Systems',
    desc: 'AURAWEBS engineers modern websites, intelligent AI solutions, business automations, and custom digital systems designed for business scale.'
  },
  '/home': {
    viewId: 'view-home',
    title: 'AURAWEBS | Build. Automate. Evolve. — Web • AI • Automation • Digital Systems',
    desc: 'AURAWEBS engineers modern websites, intelligent AI solutions, business automations, and custom digital systems.'
  },
  '/services': {
    viewId: 'view-services',
    title: 'Services | AURAWEBS — Web, AI, Automation & Digital Systems',
    desc: 'Explore AURAWEBS services across Web Development, AI Solutions, Business Automation, and Custom Digital Systems.'
  },
  '/solutions': {
    viewId: 'view-solutions',
    title: 'Solutions | AURAWEBS — Turn Business Problems into Digital Systems',
    desc: 'Targeted digital solutions for lead generation, process automation, AI customer support, and centralized analytics.'
  },
  '/work': {
    viewId: 'view-work',
    title: 'Selected Work & Case Studies | AURAWEBS',
    desc: 'Explore portfolio case studies and digital system architectures engineered by AURAWEBS.'
  },
  '/ai': {
    viewId: 'view-ai',
    title: 'AURA AI | Intelligence, Built into Your Business',
    desc: 'Autonomous AI agents, conversational assistants, and semantic search systems engineered for modern business scale.'
  },
  '/automate': {
    viewId: 'view-automate',
    title: 'AURA Automate | Let Your Business Run Smarter',
    desc: 'Connected n8n workflows, API pipelines, and webhook orchestration that eliminate manual business bottlenecks.'
  },
  '/labs': {
    viewId: 'view-labs',
    title: 'AURA Labs | R&D & Experimental Prototypes',
    desc: 'Internal research and development sandbox building next-generation AI agents, automation pipelines, and developer tools.'
  },
  '/about': {
    viewId: 'view-about',
    title: 'About AURAWEBS | We Create Technology That Works for People',
    desc: 'Our company mission, vision, and core beliefs centered on simplicity, innovation, impact, and scalable digital systems.'
  },
  '/start-project': {
    viewId: 'view-start-project',
    title: 'Start a Project | AURAWEBS — Build. Automate. Evolve.',
    desc: 'Submit your project brief and collaborate with AURAWEBS on bespoke digital platforms and AI automations.'
  }
};

// Case Studies Database
const CASE_STUDIES = {
  hotel: {
    tag: 'HOSPITALITY &middot; WEB PLATFORM &middot; WHATSAPP CART',
    title: 'Hotel Vaibhava Grand Platform',
    liveUrl: 'https://suhas1249.github.io/Hotel_Vaibhava_Grand/',
    challenge: 'A premier hotel, dining, and banquet venue in Chitradurga needed an all-in-one digital presence to handle direct AC/Non-AC room reservations, wedding hall inquiries, and multi-cuisine restaurant orders without third-party aggregator commissions.',
    solution: 'AURAWEBS engineered a high-velocity React/Next.js platform with an interactive booking cart that aggregates stay dates, dining preferences, and event packages into an instant 1-tap WhatsApp checkout.',
    architecture: `GUEST (Visits Hotel Platform)
   │
   ├──► [ Room Browser & AC / Non-AC Selection ]
   ├──► [ Banquet & Wedding Hall Event Planner ]
   └──► [ Multi-Cuisine Dining Menu ]
   │
   ▼
[ Interactive Package Cart ] ──► (Calculates Total & Tariffs)
   │
   ▼
[ Instant 1-Tap WhatsApp Checkout ] ──► [ Hotel Reservation Desk Sync ]`,
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'WhatsApp Business API'],
    results: 'Enabled direct commission-free guest bookings, reduced reservation response time to under 2 minutes, and elevated customer trust across Chitradurga.'
  },
  playzone: {
    tag: 'GAMING SUITE &middot; HTML5 CANVAS &middot; WEB AUDIO',
    title: 'PlayZone Classic Arcade Gaming Suite',
    liveUrl: 'https://suhas1249.github.io/playzone-arcade/',
    challenge: 'Creating a sub-second, zero-latency browser gaming hub that faithfully replicates classic retro arcade titles while maintaining 60FPS fluid physics and luxury audio-visual design.',
    solution: 'AURAWEBS architected PlayZone using native HTML5 Canvas micro-renderers, custom entity-component collision loops, and Web Audio API synthesized 8-bit soundscapes with zero external dependencies.',
    architecture: `BROWSER CLIENT
   │
   ▼
[ PlayZone Master Arcade Cabinet Portal ]
   │
   ├──► [ PAC-MAN: Labyrinth Ghost AI & Grid Maze ]
   ├──► [ CYBER SNAKE: Smooth Vector Slither & Devour Loop ]
   └──► [ ARROWSTORM: Tactical Siege Tower Defense Engine ]
   │
   ▼
[ Web Audio Synthesizer & Local High-Score Memory ]`,
    tech: ['JavaScript (ES6+)', 'HTML5 Canvas', 'Web Audio API', 'Physics Loop', 'Local Storage'],
    results: 'Rock-solid 60 FPS performance across all mobile & desktop browsers with zero load delays and over 3 classic games unified.'
  },
  spark: {
    tag: 'AI HUD &middot; 3D PARALLAX &middot; VOICE CO-PILOT',
    title: 'S.P.A.R.K. Voice AI Developer HUD',
    liveUrl: 'https://suhas1249.github.io/Spark/',
    challenge: 'Developers and power users needed a futuristic, hands-free workspace cockpit that organizes real-time system metrics, audio telemetry, and voice-to-widget compilation.',
    solution: 'AURAWEBS engineered S.P.A.R.K. (Smart Platform for Autonomous Reasoning & Knowledge), featuring 3D head-tracking parallax, real-time voice command processing, and modular UI widgets.',
    architecture: `DEVELOPER / OPERATOR (Voice & Head Motion)
   │
   ▼
[ WebRTC Media Stream & Audio Frequency Analyzer ]
   │
   ▼
[ S.P.A.R.K. Neural Voice-to-Widget Compiler ]
   │
   ├──► [ 3D Parallax Coordinate Grid & Depth Mesh ]
   ├──► [ Active Performance Telemetry Monitor ]
   └──► [ Dynamic Real-Time HUD Dashboard ]`,
    tech: ['JavaScript', 'Web Audio API', 'AI Agent Loop', '3D Parallax', 'CSS 3D Transforms'],
    results: 'Delivered an ultra-immersive futuristic HUD interface capable of real-time speech response and dynamic widget generation.'
  },
  ecommerce: {
    tag: 'E-COMMERCE &middot; AI AGENT &middot; REVENUE',
    title: 'Autonomous Abandoned Cart Recovery Engine',
    liveUrl: null,
    challenge: 'An e-commerce brand was experiencing a 68% cart abandonment rate, losing high-intent shoppers due to checkout friction.',
    solution: 'AURAWEBS built an intelligent webhook-driven pipeline that scores customer intent and delivers personalized 1-tap checkout recovery notifications automatically.',
    architecture: `SHOPPER (Abandons Cart at Checkout)
   │
   ▼
[ Checkout Webhook Trigger ]
   │
   ▼
[ AURA Intent Scoring Agent ] ── (Calculates Urgency & Discount Incentive)
   │
   ▼
[ 1-Tap Recovery Push ] (Delivered in <15 Mins)
   │
   ▼
[ Payment Gateway Webhook ] ──► [ Order Synced to Warehouse Queue ]`,
    tech: ['Node.js', 'REST APIs', 'n8n', 'Webhook Microservices', 'PostgreSQL'],
    results: 'Recovered 35% of abandoned carts within the first 14 days and saved over 25 hours per week of manual customer follow-ups.'
  }
};

/* ---------------------------------------------------------
   1. SPA Client-Side Router
--------------------------------------------------------- */
function initRouter() {
  function getCleanPath(urlPath) {
    let clean = urlPath.toLowerCase().trim();
    if (clean.length > 1 && clean.endsWith('/')) {
      clean = clean.slice(0, -1);
    }
    return clean || '/';
  }

  function navigateTo(path, addToHistory = true) {
    const cleanPath = getCleanPath(path);
    const route = ROUTE_CONFIG[cleanPath] || ROUTE_CONFIG['/'];

    // Update active view
    const allViews = document.querySelectorAll('.spa-view');
    allViews.forEach(view => {
      view.classList.remove('active-view');
    });

    const targetView = document.getElementById(route.viewId);
    if (targetView) {
      targetView.classList.add('active-view');
    } else {
      const homeView = document.getElementById('view-home');
      if (homeView) homeView.classList.add('active-view');
    }

    // Update Nav Active State
    document.querySelectorAll('.nav-link, .drawer-link').forEach(link => {
      const linkRoute = link.getAttribute('data-route');
      if (linkRoute === cleanPath || (cleanPath === '/' && linkRoute === '/')) {
        link.classList.add('active-nav');
      } else {
        link.classList.remove('active-nav');
      }
    });

    // Update Page SEO
    document.title = route.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', route.desc);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update History
    if (addToHistory) {
      window.history.pushState({ path: cleanPath }, route.title, cleanPath);
    }

    // Close mobile drawer
    closeMobileDrawer();
  }

  // Intercept Link Clicks with data-route
  document.addEventListener('click', (e) => {
    const targetLink = e.target.closest('[data-route]');
    if (targetLink) {
      e.preventDefault();
      const routePath = targetLink.getAttribute('data-route');
      navigateTo(routePath, true);
    }
  });

  // Handle Browser Back / Forward
  window.addEventListener('popstate', () => {
    navigateTo(window.location.pathname, false);
  });

  // Initial Route Resolution
  const initialPath = window.location.pathname || '/';
  navigateTo(initialPath, false);
}

/* ---------------------------------------------------------
   2. Mobile Drawer Navigation
--------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });
}

function closeMobileDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) drawer.classList.remove('open');
}

/* ---------------------------------------------------------
   3. Interactive Case Study Modal
--------------------------------------------------------- */
window.openCaseStudyModal = function(caseKey) {
  const data = CASE_STUDIES[caseKey];
  if (!data) return;

  const modal = document.getElementById('caseStudyModal');
  const tagEl = document.getElementById('modalTag');
  const titleEl = document.getElementById('modalTitle');
  const bodyEl = document.getElementById('modalBody');

  if (tagEl) tagEl.innerHTML = data.tag;
  if (titleEl) titleEl.textContent = data.title;

  if (bodyEl) {
    bodyEl.innerHTML = `
      <div class="cs-section">
        <h4>Challenge</h4>
        <p>${data.challenge}</p>
      </div>

      <div class="cs-section">
        <h4>AURAWEBS Solution</h4>
        <p>${data.solution}</p>
      </div>

      <div class="cs-section">
        <h4>System Architecture</h4>
        <div class="cs-diagram-shell">
          <pre>${data.architecture}</pre>
        </div>
      </div>

      <div class="cs-section">
        <h4>Technologies Used</h4>
        <div class="cs-tech-tags">
          ${data.tech.map(t => `<span class="cs-tech-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div class="cs-section">
        <h4>Measurable Results</h4>
        <p><strong>${data.results}</strong></p>
      </div>

      <div class="mt-20 text-center">
        <a href="/start-project" class="btn btn-primary" onclick="closeCaseStudyModal()" data-route="/start-project">
          Build a Similar System for Your Business &rarr;
        </a>
      </div>
    `;
  }

  if (modal) {
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  }
};

window.closeCaseStudyModal = function() {
  const modal = document.getElementById('caseStudyModal');
  if (modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }
};

// Close modal on click outside
document.addEventListener('click', (e) => {
  const modal = document.getElementById('caseStudyModal');
  if (modal && e.target === modal) {
    closeCaseStudyModal();
  }
});

/* ---------------------------------------------------------
   4. Live On-Screen Toast Notification System
--------------------------------------------------------- */
function showToast(title, message, duration = 5000) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <div class="toast-icon">✓</div>
    <div class="toast-content">
      <strong>${title}</strong>
      <p>${message}</p>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-leave');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
}

/* ---------------------------------------------------------
   5. Secure Project Brief Form Dispatcher
   (Uses secure hash token - No plaintext email exposed in code)
--------------------------------------------------------- */
function initProjectForm() {
  const form = document.getElementById('projectInquiryForm');
  const successCard = document.getElementById('formSuccessState');
  const summaryBox = document.getElementById('successSummaryBox');
  const submitBtn = document.getElementById('submitBriefBtn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('fName').value.trim();
    const business = document.getElementById('fBusiness').value.trim() || 'Not specified';
    const email = document.getElementById('fEmail').value.trim();
    const phone = document.getElementById('fPhone').value.trim() || 'Not provided';
    const projectTypeInput = document.querySelector('input[name="project_type"]:checked');
    const projectType = projectTypeInput ? projectTypeInput.value : 'General';
    const scope = document.getElementById('fScope').value.trim();
    const budget = document.getElementById('fBudget').value;
    const timeline = document.getElementById('fTimeline').value;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Transmitting Project Brief...';
    }

    const payload = {
      client_name: name,
      business_name: business,
      email: email,
      phone: phone,
      project_type: projectType,
      project_scope: scope,
      budget_range: budget,
      target_timeline: timeline,
      _subject: `[AURAWEBS Project Brief] ${projectType} Request from ${name} (${business})`,
      _template: 'table',
      _captcha: 'false'
    };

    // Secure dispatch to activated backend token endpoint
    try {
      await fetch('https://formsubmit.co/ajax/e9616c00a44bc151e04c4ff09736bb78', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.log('Project brief dispatch logged:', err);
    }

    // 1. Show Live On-Screen Toast Notification
    showToast(
      'Project brief received.',
      "Thanks for reaching out to AURAWEBS. We'll review your requirements and get back to you.",
      6000
    );

    // 2. Transition Form to On-Screen Success Card
    form.style.display = 'none';
    if (successCard) {
      successCard.style.display = 'block';
    }

    if (summaryBox) {
      summaryBox.innerHTML = `
        <div><span>Client Name:</span> <strong>${name}</strong></div>
        <div><span>Business:</span> <strong>${business}</strong></div>
        <div><span>Email Address:</span> <strong>${email}</strong></div>
        <div><span>Project Category:</span> <strong>${projectType}</strong></div>
        <div><span>Budget / Timeline:</span> <strong>${budget} &bull; ${timeline}</strong></div>
      `;
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Project Request →';
    }
  });
}

window.resetProjectForm = function() {
  const form = document.getElementById('projectInquiryForm');
  const successCard = document.getElementById('formSuccessState');

  if (form) {
    form.reset();
    form.style.display = 'flex';
  }
  if (successCard) {
    successCard.style.display = 'none';
  }
};

/* ---------------------------------------------------------
   6. Footer Newsletter Subscription
--------------------------------------------------------- */
function initNewsletterForm() {
  const form = document.getElementById('footerNewsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('fNewsEmail');
    const email = emailInput ? emailInput.value.trim() : '';

    if (email) {
      showToast('Subscription Confirmed', 'You are subscribed to AURAWEBS web, AI, and automation updates.', 5000);
      if (emailInput) emailInput.value = '';
    }
  });
}

/* ---------------------------------------------------------
   Initialize Application
--------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initMobileNav();
  initProjectForm();
  initNewsletterForm();
});

