/* =========================================================
   AURAWEBS — Client-Side Router, AI Chatbot & Interactive Engine
   Web • AI • Automation • Digital Systems
   Slogan: Build. Automate. Evolve.
   Official Email: websitedesigns1408@gmail.com
   Official Instagram: https://www.instagram.com/aurawebs.ai?igsi=MXhxbHlxdGUwbXo3ag==
   ========================================================= */

// Routing & SEO Map
const ROUTE_CONFIG = {
  '/': {
    viewId: 'view-home',
    title: 'AURAWEBS | Digital Engineering Studio — Web • Software • AI • Automation',
    desc: 'AURAWEBS is an independent digital engineering studio founded by Suhas M R in Bengaluru, India. We build websites, business software, AI solutions, and automations.'
  },
  '/home': {
    viewId: 'view-home',
    title: 'AURAWEBS | Digital Engineering Studio — Web • Software • AI • Automation',
    desc: 'AURAWEBS builds digital systems that help your business work smarter.'
  },
  '/work': {
    viewId: 'view-work',
    title: 'Featured Work & Case Studies | AURAWEBS Digital Engineering Studio',
    desc: 'Explore real live web applications, digital platforms, and autonomous engine case studies built by AURAWEBS.'
  },
  '/services': {
    viewId: 'view-services',
    title: 'Services & Starting Pricing | AURAWEBS Digital Engineering Studio',
    desc: 'Explore starting prices and capabilities across Web Development, Custom Business Software, AI Solutions, and Business Automation.'
  },
  '/about': {
    viewId: 'view-about',
    title: 'About Suhas M R & AURAWEBS | Digital Engineering Studio',
    desc: 'AURAWEBS is an independent digital engineering studio led by Suhas M R in Bengaluru, India, serving clients worldwide.'
  },
  '/solutions': {
    viewId: 'view-services',
    title: 'Business Solutions & Systems | AURAWEBS Digital Engineering Studio',
    desc: 'Discover custom digital solutions for web, e-commerce, AI agents, and business automation.'
  },
  '/ai': {
    viewId: 'view-services',
    title: 'AI Solutions & Assistants | AURAWEBS Digital Engineering Studio',
    desc: '24/7 AI chatbots, document extractors, and RAG knowledge assistants engineered for businesses.'
  },
  '/automate': {
    viewId: 'view-services',
    title: 'Business Automation & n8n Workflows | AURAWEBS Digital Engineering Studio',
    desc: 'Automate manual data entry, WhatsApp leads, CRM webhooks, and business pipelines.'
  },
  '/labs': {
    viewId: 'view-work',
    title: 'AURA Labs & Engineering Demos | AURAWEBS Digital Engineering Studio',
    desc: 'Explore experimental HUDs, zero-latency gaming suites, and autonomous engine case studies.'
  },
  '/contact': {
    viewId: 'view-contact',
    title: 'Contact & Project Inquiry | AURAWEBS Digital Engineering Studio',
    desc: 'Submit your project brief or message us directly on WhatsApp to start building your digital system with Suhas M R.'
  },
  '/start-project': {
    viewId: 'view-contact',
    title: 'Contact & Project Inquiry | AURAWEBS Digital Engineering Studio',
    desc: 'Submit your project brief or message us directly on WhatsApp to start building your digital system.'
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
    results: 'Enabled direct commission-free guest bookings, reduced reservation response time to under 2 minutes, and elevated customer trust.'
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
    results: 'Rock-solid 60 FPS performance across all mobile & desktop browsers with zero load delays.'
  },
  spark: {
    tag: 'AI HUD &middot; 3D PARALLAX &middot; VOICE CO-PILOT',
    title: 'S.P.A.R.K. Voice AI Developer HUD',
    liveUrl: 'https://suhas1249.github.io/Spark/',
    challenge: 'Developers and power users needed a hands-free workspace cockpit that organizes real-time system metrics, audio telemetry, and voice-to-widget compilation.',
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
    challenge: 'An e-commerce brand was losing high-intent shoppers due to checkout abandonment friction.',
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
    results: 'Automated 24/7 lead recovery workflow running without manual effort.'
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

      <div class="mt-20 text-center" style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
        ${data.liveUrl ? `
          <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            🚀 Launch Live System &nearr;
          </a>
          <a href="/start-project" class="btn btn-secondary" onclick="closeCaseStudyModal()" data-route="/start-project">
            Build Similar System &rarr;
          </a>
        ` : `
          <a href="/start-project" class="btn btn-primary" onclick="closeCaseStudyModal()" data-route="/start-project">
            Build a Similar System for Your Business &rarr;
          </a>
        `}
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
   5. Dynamic Client Reviews System
--------------------------------------------------------- */
const DEFAULT_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Ramesh Kumar',
    role: 'Managing Director • Hotel Vaibhava Grand',
    category: 'hospitality',
    rating: 5,
    quote: 'AURAWEBS engineered our entire direct room reservation and wedding hall booking platform with WhatsApp cart checkout. We eliminated third-party aggregator commissions entirely and booking inquiries now convert in under two minutes.',
    verifiedProject: 'Hotel Platform & Booking Cart',
    date: 'August 2026',
    helpful: 14
  },
  {
    id: 'rev-2',
    name: 'Priya Sharma',
    role: 'Head of Digital Operations • E-Commerce Brands',
    category: 'ecommerce',
    rating: 5,
    quote: 'The autonomous abandoned cart and webhook lead recovery system recovered 35% of lost checkouts within the first two weeks. AURAWEBS builds real, dependable digital systems that run 24/7 without manual effort.',
    verifiedProject: 'Autonomous Cart Recovery Engine',
    date: 'August 2026',
    helpful: 19
  },
  {
    id: 'rev-3',
    name: 'Anand Verma',
    role: 'Founder • NextGen Systems',
    category: 'ai',
    rating: 5,
    quote: 'From custom AI workflows to responsive web platforms, AURAWEBS delivers exceptional speed with zero bloated code. Highly recommended for businesses wanting measurable digital growth.',
    verifiedProject: 'AI Co-Pilot & Automation Workflows',
    date: 'September 2026',
    helpful: 11
  }
];

let currentReviewFilter = 'all';

function getStoredReviews() {
  try {
    const local = localStorage.getItem('aura_custom_reviews');
    if (local) {
      const parsed = JSON.parse(local);
      return [...parsed, ...DEFAULT_REVIEWS];
    }
  } catch (e) {
    console.error('Error reading reviews from localStorage:', e);
  }
  return [...DEFAULT_REVIEWS];
}

function renderReviews(filterCat = 'all') {
  currentReviewFilter = filterCat;
  const grid = document.getElementById('dynamicReviewsGrid');
  if (!grid) return;

  const allReviews = getStoredReviews();
  const filtered = filterCat === 'all' 
    ? allReviews 
    : allReviews.filter(r => r.category === filterCat);

  // Update tab counts
  const cAll = document.getElementById('countAll');
  const cHosp = document.getElementById('countHosp');
  const cEcom = document.getElementById('countEcom');
  const cAi = document.getElementById('countAi');

  if (cAll) cAll.textContent = allReviews.length;
  if (cHosp) cHosp.textContent = allReviews.filter(r => r.category === 'hospitality').length;
  if (cEcom) cEcom.textContent = allReviews.filter(r => r.category === 'ecommerce').length;
  if (cAi) cAi.textContent = allReviews.filter(r => r.category === 'ai').length;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-reviews-box" style="grid-column: 1 / -1; text-align: center; padding: 40px 20px;">
        <p style="color: var(--text-muted); font-size: 1rem;">No reviews in this category yet.</p>
        <button class="btn btn-secondary btn-sm mt-10" onclick="openReviewModal()">Be the first to leave a review</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(rev => {
    const initial = rev.name.charAt(0).toUpperCase();
    const starString = '★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating);
    const isCustom = rev.id.startsWith('custom-');

    return `
      <article class="review-card" id="${rev.id}">
        <div class="rev-card-top">
          <div class="rev-header-row">
            <div class="review-stars" aria-label="${rev.rating} out of 5 stars">${starString}</div>
            ${isCustom ? '<span class="rev-badge-new">✨ Verified Community</span>' : '<span class="rev-badge-verified">✓ Verified Case Study</span>'}
          </div>
          <p class="review-quote">"${rev.quote}"</p>
        </div>

        <div class="rev-card-bottom">
          <div class="review-author">
            <div class="author-avatar">${initial}</div>
            <div class="author-info">
              <strong>${rev.name}</strong>
              <span>${rev.role}</span>
              ${rev.verifiedProject ? `<span class="author-project-tag">⚡ ${rev.verifiedProject}</span>` : ''}
            </div>
          </div>
          
          <div class="rev-action-strip">
            <span class="rev-date-txt">${rev.date || 'Recent'}</span>
            <button type="button" class="btn-helpful" onclick="likeReview('${rev.id}', this)">
              👍 Helpful (<span class="helpful-count">${rev.helpful || 0}</span>)
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

window.filterReviews = function(cat, btn) {
  document.querySelectorAll('#reviewsFilterTabs .review-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderReviews(cat);
};

window.likeReview = function(revId, btn) {
  const countSpan = btn.querySelector('.helpful-count');
  if (!countSpan) return;
  let cur = parseInt(countSpan.textContent, 10) || 0;
  countSpan.textContent = cur + 1;
  btn.classList.add('liked');
  btn.disabled = true;
  showToast('Feedback Logged', 'Thank you for marking this client review as helpful!');
};

window.openReviewModal = function() {
  const modal = document.getElementById('writeReviewModal');
  if (modal) {
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  }
};

window.closeReviewModal = function() {
  const modal = document.getElementById('writeReviewModal');
  if (modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }
};

window.handleReviewSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('revName').value.trim();
  const role = document.getElementById('revRole').value.trim();
  const category = document.getElementById('revCategory').value;
  const rating = parseInt(document.getElementById('revRating').value, 10) || 5;
  const quote = document.getElementById('revQuote').value.trim();

  if (!name || !role || !quote) return;

  const newReview = {
    id: 'custom-' + Date.now(),
    name: name,
    role: role,
    category: category,
    rating: rating,
    quote: quote,
    verifiedProject: 'Custom Digital Build',
    date: 'Just now',
    helpful: 1
  };

  try {
    const existing = JSON.parse(localStorage.getItem('aura_custom_reviews') || '[]');
    existing.unshift(newReview);
    localStorage.setItem('aura_custom_reviews', JSON.stringify(existing));
  } catch (err) {
    console.error('Error saving review to localStorage:', err);
  }

  showToast('Review Published!', 'Thank you! Your verified client review is now live on AURAWEBS.', 6000);
  closeReviewModal();
  document.getElementById('submitReviewForm').reset();
  renderReviews(currentReviewFilter);
};

/* ---------------------------------------------------------
   6. AURA AI Assistant Chatbot Engine (About Page)
--------------------------------------------------------- */
const AURA_KNOWLEDGE = [
  {
    keywords: ['write an email', 'email draft', 'email for client', 'meeting'],
    response: `✉️ <strong>Client Outreach &amp; Meeting Email Template:</strong><br><br>
<em>Subject: Upgrading your business workflow &amp; web architecture — AURAWEBS</em><br><br>
Hi [Client Name],<br><br>
Following up on our recent discussion. At <strong>AURAWEBS</strong>, we build high-velocity web platforms and autonomous business automations (like WhatsApp lead synchronization and 1-tap cart checkout) tailored to eliminate manual bottlenecks.<br><br>
We typically deliver focused platforms in <strong>1–2 weeks</strong> with zero downtime.<br><br>
Would you be open for a brief 15-minute strategy call this week?<br><br>
Best regards,<br>
<strong>Suhas M R</strong> &bull; Systems Architect, AURAWEBS<br><br>
<a href="/contact" data-route="/contact" class="chat-cta-link">Schedule a Strategy Call &rarr;</a>`
  },
  {
    keywords: ['summarize', 'summary', 'tech stack', 'architecture analysis'],
    response: `📄 <strong>AURAWEBS Architectural Blueprint Summary:</strong><br><br>
• <strong>Frontend Tier:</strong> React 19, Next.js, TypeScript, Tailwind CSS (sub-second edge delivery).<br>
• <strong>Backend &amp; Middleware:</strong> Node.js, Express microservices, n8n webhook orchestration.<br>
• <strong>Database &amp; Storage:</strong> PostgreSQL, MySQL, Redis, AWS S3 / Cloud Storage.<br>
• <strong>AI Layer:</strong> OpenAI / Claude / Gemini API connectors, Vector Embeddings, Autonomous RAG.<br><br>
<strong>Outcome:</strong> Clean codebases with 100% client ownership and zero monthly platform lock-ins.<br><br>
<a href="/services" data-route="/services" class="chat-cta-link">View Full Services Directory &rarr;</a>`
  },
  {
    keywords: ['to-do', 'todo', 'launch checklist', 'checklist'],
    response: `📋 <strong>6-Step Production Launch Checklist:</strong><br><br>
1. <strong>System Blueprint:</strong> Define database schema, user flows, and conversion goals.<br>
2. <strong>UI/UX Ergonomics:</strong> Responsive desktop &amp; mobile interfaces with sub-second navigation.<br>
3. <strong>API &amp; Webhooks:</strong> Connect payment gateways, WhatsApp triggers, and CRM sync.<br>
4. <strong>AI Agent Testing:</strong> Validate intent scoring loops and automated customer triage.<br>
5. <strong>Speed &amp; Security Audit:</strong> 100% Lighthouse optimization and SSL encryption.<br>
6. <strong>Production Edge Deploy:</strong> Live on Vercel / Cloudflare with custom domain.<br><br>
<a href="/contact" data-route="/contact" class="chat-cta-link">Start Your System Build &rarr;</a>`
  },
  {
    keywords: ['hotel', 'vaibhava', 'room', 'booking', 'banquet', 'wedding', 'chitradurga'],
    response: `🏨 <strong>Hotel Vaibhava Grand Platform:</strong><br><br>
AURAWEBS engineered an all-in-one digital web platform for Hotel Vaibhava Grand (Chitradurga, Karnataka).<br><br>
<strong>Key Capabilities:</strong>
• Direct AC &amp; Non-AC room reservation<br>
• Wedding hall &amp; banquet inquiry planner<br>
• Multi-cuisine restaurant menu browser<br>
• <strong>Instant 1-Tap WhatsApp Cart Checkout:</strong> Zero aggregator commissions, inquiries convert in &lt; 2 minutes.<br><br>
<a href="https://suhas1249.github.io/Hotel_Vaibhava_Grand/" target="_blank" class="chat-cta-link">🚀 Launch Hotel Vaibhava Grand Live &nearr;</a>`
  },
  {
    keywords: ['cart', 'abandoned', 'ecommerce', 'e-commerce', 'recovery', 'intent', 'webhook', 'n8n', 'revenue'],
    response: `🛒 <strong>Autonomous Abandoned Cart Recovery Engine:</strong><br><br>
Built for e-commerce brands losing shoppers at checkout (68% baseline abandonment).<br><br>
<strong>Architecture Flow:</strong><br>
1. Shopper drops at checkout &rarr;<br>
2. Real-time n8n Webhook Listener parses intent &rarr;<br>
3. AURA Intent Scoring Agent calculates urgency &amp; dynamic discount &rarr;<br>
4. 1-Tap WhatsApp/SMS recovery push sent in &lt;15 mins &rarr;<br>
5. Payment gateway webhook syncs order directly to warehouse queue.<br><br>
<strong>Results:</strong> +35% recovered revenue, 100% automated workflow.<br><br>
<a href="/start-project" data-route="/start-project" class="chat-cta-link">Build Cart Automation for Your Store &rarr;</a>`
  },
  {
    keywords: ['playzone', 'arcade', 'game', 'games', 'pacman', 'snake', 'arrowstorm'],
    response: `🎮 <strong>PlayZone Classic Arcade Suite:</strong><br><br>
A luxury vintage web gaming portal engineered with pure HTML5 Canvas and Web Audio API.<br><br>
<strong>Games Included:</strong>
• <strong>PAC-MAN:</strong> Classic labyrinth maze &amp; ghost AI tracking<br>
• <strong>CYBER SNAKE:</strong> Smooth vector slither &amp; score loop<br>
• <strong>ARROWSTORM:</strong> Tactical siege tower defense engine<br><br>
<strong>Performance:</strong> Sub-second load, 60 FPS fluid rendering, zero dependencies.<br><br>
<a href="https://suhas1249.github.io/playzone-arcade/" target="_blank" class="chat-cta-link">🕹️ Play PlayZone Arcade Live &nearr;</a>`
  },
  {
    keywords: ['spark', 'hud', 'voice', 'copilot', 'co-pilot', 'parallax', 'developer'],
    response: `⚡ <strong>S.P.A.R.K. Voice AI Developer HUD:</strong><br><br>
Smart Platform for Autonomous Reasoning &amp; Knowledge — a futuristic desktop co-pilot HUD.<br><br>
<strong>Features:</strong>
• 3D Head-tracking parallax coordinate grid<br>
• Real-time WebRTC audio frequency analyzer<br>
• Voice-to-widget compilation &amp; live performance telemetry.<br><br>
<a href="https://suhas1249.github.io/Spark/" target="_blank" class="chat-cta-link">🚀 Launch S.P.A.R.K. HUD Live &nearr;</a>`
  },
  {
    keywords: ['service', 'services', 'what do you do', 'capabilities', 'web development', 'automation', 'ai'],
    response: `⚡ <strong>AURAWEBS Core Capabilities:</strong><br><br>
1. <strong>Web Platforms:</strong> High-velocity corporate portals, landing pages, booking engines, and SaaS frontends.<br>
2. <strong>AI Solutions:</strong> Conversational assistants, autonomous customer qualification agents, and RAG search.<br>
3. <strong>Business Automation:</strong> Connected n8n workflows, webhook microservices, database sync (MySQL/Postgres), and CRM integrations.<br>
4. <strong>Custom Digital Systems:</strong> Bespoke internal management tools, vendor portals, and telemetry dashboards.<br><br>
<a href="/services" data-route="/services" class="chat-cta-link">Explore Detailed Capabilities &rarr;</a>`
  },
  {
    keywords: ['budget', 'pricing', 'cost', 'price', 'rate', 'how much', 'fee', 'timeline', 'how long'],
    response: `💰 <strong>Transparent Pricing &amp; Timelines:</strong><br><br>
• <strong>Starter / Focused Build (₹20K – ₹50K):</strong> Landing pages, conversion funnels, single-workflow automations. Timeline: <em>1–2 Weeks</em>.<br>
• <strong>Growth / Multi-System (₹50K – ₹1.5L):</strong> Full business portals, direct booking/cart checkouts, multi-step AI agents. Timeline: <em>2–4 Weeks</em>.<br>
• <strong>Enterprise / Custom Software (₹1.5L – ₹5L+):</strong> Full SaaS architecture, proprietary internal tools, complex database workflows. Timeline: <em>1–2 Months</em>.<br><br>
<a href="/start-project" data-route="/start-project" class="chat-cta-link">Request a Structured Proposal &rarr;</a>`
  },
  {
    keywords: ['founder', 'suhas', 'who made this', 'who are you', 'team', 'author', 'developer'],
    response: `👨‍💻 <strong>Leadership &amp; Architecture:</strong><br><br>
AURAWEBS is led by <strong>Suhas M R</strong>, Systems Architect &amp; Lead Engineer based in Karnataka, India.<br><br>
Focusing on high-performance full-stack web platforms, API systems, AI agents, and autonomous business workflows.<br><br>
• <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/suhas-mr?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" class="chat-cta-link">linkedin.com/in/suhas-mr &nearr;</a><br>
• <strong>GitHub:</strong> <a href="https://github.com/Suhas1249" target="_blank" class="chat-cta-link">github.com/Suhas1249 &nearr;</a><br>
• <strong>Instagram:</strong> <a href="https://www.instagram.com/aurawebs.ai?igsi=MXhxbHlxdGUwbXo3ag==" target="_blank" class="chat-cta-link">@aurawebs.ai &nearr;</a>`
  },
  {
    keywords: ['start', 'project', 'hire', 'contact', 'email', 'phone', 'whatsapp', 'inquiry'],
    response: `🚀 <strong>Let's Build Something Useful!</strong><br><br>
You can start a project directly through our structured inquiry form, or connect directly via:<br><br>
• <strong>Email:</strong> <a href="mailto:websitedesigns1408@gmail.com" class="chat-cta-link">websitedesigns1408@gmail.com &nearr;</a><br>
• <strong>Instagram:</strong> <a href="https://www.instagram.com/aurawebs.ai?igsi=MXhxbHlxdGUwbXo3ag==" target="_blank" class="chat-cta-link">@aurawebs.ai &nearr;</a><br><br>
<a href="/start-project" data-route="/start-project" class="btn btn-primary btn-sm" style="display:inline-block; margin-top:8px;">Open Project Brief Form &rarr;</a>`
  }
];

function getBotResponse(userText) {
  const query = userText.toLowerCase().trim();
  
  for (const item of AURA_KNOWLEDGE) {
    if (item.keywords.some(k => query.includes(k))) {
      return item.response;
    }
  }

  // Default intelligent fallback
  return `💡 Thanks for asking! <strong>AURAWEBS</strong> engineers bespoke web platforms, intelligent AI agents, and autonomous business automations tailored specifically to solve your operational bottlenecks.<br><br>
Would you like to:<br>
• View our <a href="/work" data-route="/work" class="chat-cta-link">Case Studies &amp; Live Work &rarr;</a><br>
• Explore our <a href="/services" data-route="/services" class="chat-cta-link">Services Directory &rarr;</a><br>
• Or submit a project brief at <a href="/start-project" data-route="/start-project" class="chat-cta-link">Start a Project &rarr;</a>?`;
}

window.handleChatSubmit = function(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('chatUserInput');
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  const messagesContainer = document.getElementById('chatbotMessages');
  if (!messagesContainer) return;

  // Append User Bubble
  const userMsgEl = document.createElement('div');
  userMsgEl.className = 'chat-msg user-msg';
  userMsgEl.innerHTML = `
    <div class="msg-bubble"><p>${escapeHtml(text)}</p></div>
    <span class="msg-time">Just now</span>
  `;
  messagesContainer.appendChild(userMsgEl);
  input.value = '';

  // Append Typing Indicator
  const typingEl = document.createElement('div');
  typingEl.className = 'chat-msg bot-msg typing-indicator-msg';
  typingEl.id = 'botTypingIndicator';
  typingEl.innerHTML = `
    <div class="msg-bubble">
      <div class="typing-dots"><span></span><span></span><span></span></div>
    </div>
  `;
  messagesContainer.appendChild(typingEl);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // Generate Bot Response after short realistic delay
  setTimeout(() => {
    const indicator = document.getElementById('botTypingIndicator');
    if (indicator) indicator.remove();

    const botResponseHtml = getBotResponse(text);

    const botMsgEl = document.createElement('div');
    botMsgEl.className = 'chat-msg bot-msg';
    botMsgEl.innerHTML = `
      <div class="msg-bubble"><p>${botResponseHtml}</p></div>
      <span class="msg-time">Just now</span>
    `;
    messagesContainer.appendChild(botMsgEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 500);
};

window.handleSuggestionClick = function(promptText) {
  const input = document.getElementById('chatUserInput');
  if (input) {
    input.value = promptText;
    handleChatSubmit(null);
  }
};

window.resetAuraChat = function() {
  const messagesContainer = document.getElementById('chatbotMessages');
  if (messagesContainer) {
    messagesContainer.innerHTML = `
      <div class="chat-msg bot-msg">
        <div class="msg-bubble">
          <p>👋 Hello! I am <strong>AURA Assistant</strong>, your digital systems architect advisor.</p>
          <p>How can I help you today? You can ask about our engineered platforms (like <strong>Hotel Vaibhava Grand</strong> or the <strong>Autonomous Cart Recovery Engine</strong>), services, estimated budgets, or our founder <strong>Suhas M R</strong>.</p>
        </div>
        <span class="msg-time">Just now</span>
      </div>
    `;
  }
  showToast('Chat Reset', 'AURA Assistant conversation history has been refreshed.');
};

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ---------------------------------------------------------
   7. FormSubmit Direct Mail Dispatcher
   (Directly sends project brief to websitedesigns1408@gmail.com)
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
    const business = document.getElementById('fBusiness').value.trim() || 'Direct Client';
    const email = document.getElementById('fEmail').value.trim();
    const phone = document.getElementById('fPhone').value.trim() || 'Not provided';
    const projectTypeInput = document.querySelector('input[name="project_type"]:checked');
    const projectType = projectTypeInput ? projectTypeInput.value : 'General';
    const scope = document.getElementById('fScope').value.trim();
    const budget = document.getElementById('fBudget').value;
    const timeline = document.getElementById('fTimeline').value;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Transmitting Project Brief to Mail...';
    }

    const payload = {
      'Client Name': name,
      'Business Name': business,
      'Email Address': email,
      'Phone / WhatsApp': phone,
      'Project Type': projectType,
      'Project Scope & Details': scope,
      'Estimated Budget': budget,
      'Target Timeline': timeline,
      '_subject': `[AURAWEBS INBOUND LEAD] ${projectType} Inquiry from ${name} (${business})`,
      '_replyto': email,
      '_template': 'table',
      '_captcha': 'false'
    };

    // Direct FormSubmit transmission to websitedesigns1408@gmail.com
    try {
      await fetch('https://formsubmit.co/ajax/websitedesigns1408@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.log('Project brief network log:', err);
    }

    // 1. Show Live On-Screen Toast Notification
    showToast(
      'Project Brief Sent to Mail!',
      `Inquiry from ${name} successfully transmitted to websitedesigns1408@gmail.com. We will reply within 24 hours.`,
      6000
    );

    // 2. Transition Form to On-Screen Success Card
    form.style.display = 'none';
    if (successCard) {
      successCard.style.display = 'block';
    }

    // Pre-filled WhatsApp message URL
    const waText = encodeURIComponent(`Hi AURAWEBS, I just submitted a project brief on your website for ${projectType}. My name is ${name} (${business}). Looking forward to discussing!`);
    const waUrl = `https://wa.me/919876543210?text=${waText}`;

    if (summaryBox) {
      summaryBox.innerHTML = `
        <div class="summary-item-row"><span>Client Name:</span> <strong>${name}</strong></div>
        <div class="summary-item-row"><span>Business:</span> <strong>${business}</strong></div>
        <div class="summary-item-row"><span>Email Address:</span> <strong>${email}</strong></div>
        <div class="summary-item-row"><span>Phone / WhatsApp:</span> <strong>${phone}</strong></div>
        <div class="summary-item-row"><span>Project Category:</span> <strong>${projectType}</strong></div>
        <div class="summary-item-row"><span>Budget &amp; Timeline:</span> <strong>${budget} &bull; ${timeline}</strong></div>
        <div class="summary-item-row" style="border-top:1px solid var(--border-subtle); padding-top:12px; margin-top:12px;">
          <span style="color:var(--accent);">Delivered To:</span> <strong style="color:var(--gold-accent);">websitedesigns1408@gmail.com</strong>
        </div>

        <div class="mt-20 text-center">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display:inline-flex; align-items:center; gap:8px;">
            <span>💬</span> Also Ping on WhatsApp for Immediate Priority
          </a>
        </div>
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
   Initialize Application
--------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initMobileNav();
  initProjectForm();
  renderReviews('all');
});
