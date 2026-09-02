/* =========================================================
   AURA Studio — Dynamic Interactive Engine & Simulator
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Cinematic Intro Controller
  initCinematicIntro();

  // 2. Mobile Menu Navigation
  initMobileNav();

  // 3. Interactive Blueprint Simulator Engine
  initBlueprintSimulator();

  // 4. Interactive 1-on-1 Booking Calendar
  initBookingCalendar();

  // 5. Floating AURA AI Assistant
  initAuraAssistant();
});

/* ---------------------------------------------------------
   1. Cinematic Intro Controller
--------------------------------------------------------- */
function initCinematicIntro() {
  const intro = document.getElementById('cinematicIntro');
  const skipBtn = document.getElementById('skipIntro');

  if (!intro) return;

  function dismissIntro() {
    intro.classList.add('intro-hidden');
    document.body.classList.remove('intro-lock');
    setTimeout(() => {
      intro.style.display = 'none';
    }, 500);
  }

  const timer = setTimeout(dismissIntro, 2000);

  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      clearTimeout(timer);
      dismissIntro();
    });
  }
}

/* ---------------------------------------------------------
   2. Mobile Menu Navigation
--------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('navToggle');
  const drawer = document.getElementById('mobileDrawer');
  const links = document.querySelectorAll('.mobile-drawer .m-link');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

/* ---------------------------------------------------------
   3. Interactive Blueprint Simulator Engine
--------------------------------------------------------- */
const BLUEPRINTS = {
  ecommerce: {
    category: 'E-COMMERCE & RETAIL AUTOMATION',
    title: 'Autonomous Abandoned Cart & WhatsApp Revenue Engine',
    impact: '⚡ Projected Impact: 25+ Hours/Week Saved & +35% Recovered Revenue',
    nodes: [
      { num: '01', title: 'Cart Abandoned', desc: 'Customer drops off at checkout on mobile web app.' },
      { num: '02', title: 'Intent Scoring', desc: 'AURA AI calculates order urgency & dynamic incentive.' },
      { num: '03', title: 'WhatsApp Push', desc: 'Dispatches 1-tap checkout recovery via Meta API.' },
      { num: '04', title: 'Live Inventory', desc: 'Payment confirms; order logs to ERP & warehouse queue.' }
    ],
    summary: '<strong>Outcome:</strong> Converts abandoned shoppers in under 15 minutes completely hands-free on WhatsApp, recovering high-margin lost revenue.'
  },
  services: {
    category: 'PROFESSIONAL SERVICES & AGENCIES',
    title: '24/7 Client Consultation & Qualification Pipeline',
    impact: '⚡ Projected Impact: Zero Lead Dropoff & +50% Booked Meetings',
    nodes: [
      { num: '01', title: 'Inbound Inquiry', desc: 'Client submits project request after business hours.' },
      { num: '02', title: 'AI Qualification', desc: 'AI agent qualifies project scope, budget & timeline.' },
      { num: '03', title: 'Calendar Slot', desc: 'Presents verified availability and schedules call.' },
      { num: '04', title: 'CRM Live Alert', desc: 'Dispatches priority alert to Suhas M R with brief.' }
    ],
    summary: '<strong>Outcome:</strong> High-ticket clients are automatically qualified and scheduled while your team focuses on project execution.'
  },
  startups: {
    category: 'TECH STARTUPS & SAAS PLATFORMS',
    title: 'Rapid Production Launch & Autonomous Onboarding',
    impact: '⚡ Projected Impact: 70% Faster Time-To-Market',
    nodes: [
      { num: '01', title: 'User Signup', desc: 'Customer registers on sub-second web portal.' },
      { num: '02', title: 'DB Allocation', desc: 'Microservice provisions workspace & database schemas.' },
      { num: '03', title: 'Guided Tour', desc: 'Interactive AI walkthrough prompts user activation.' },
      { num: '04', title: 'Telemetry Sync', desc: 'Streams product analytics and detects user friction.' }
    ],
    summary: '<strong>Outcome:</strong> Deploys production-ready software in 1–2 weeks without hiring a bloated in-house dev team.'
  },
  healthcare: {
    category: 'CLINICS & HEALTHCARE PORTALS',
    title: 'Smart Patient Triage & Automated Appointment Desk',
    impact: '⚡ Projected Impact: 65% Phone Call Reduction & Zero No-Shows',
    nodes: [
      { num: '01', title: 'Patient Request', desc: 'Patient books consultation via mobile clinic portal.' },
      { num: '02', title: 'Clinical Match', desc: 'AI verifies doctor roster & appointment availability.' },
      { num: '03', title: 'Digital Token', desc: 'Issues verified QR pass & preparation guidelines.' },
      { num: '04', title: 'WhatsApp Ping', desc: 'Automated 2-hour reminder prevents appointment no-shows.' }
    ],
    summary: '<strong>Outcome:</strong> Eliminates front-desk phone congestion and keeps patient schedules organized on autopilot.'
  }
};

function initBlueprintSimulator() {
  const tabs = document.querySelectorAll('#sectorTabs .s-tab-btn');
  const catEl = document.getElementById('simCategory');
  const titleEl = document.getElementById('simTitle');
  const impactEl = document.getElementById('simImpact');
  const nodesRow = document.getElementById('simNodesRow');
  const summaryEl = document.getElementById('simSummary');

  if (!tabs.length || !nodesRow) return;

  function renderSector(key) {
    const data = BLUEPRINTS[key];
    if (!data) return;

    if (catEl) catEl.textContent = data.category;
    if (titleEl) titleEl.textContent = data.title;
    if (impactEl) impactEl.textContent = data.impact;
    if (summaryEl) summaryEl.innerHTML = data.summary;

    nodesRow.innerHTML = data.nodes.map(node => `
      <div class="sim-node">
        <span class="sim-node-idx">${node.num} &middot; PHASE</span>
        <h5>${node.title}</h5>
        <p>${node.desc}</p>
      </div>
    `).join('');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const sector = tab.getAttribute('data-sector');
      renderSector(sector);
    });
  });

  renderSector('ecommerce');
}

/* ---------------------------------------------------------
   4. Interactive 1-on-1 Booking Calendar
--------------------------------------------------------- */
let currentCalDate = '';
let currentCalSlot = '10:00 AM';

function initBookingCalendar() {
  const datesRow = document.getElementById('calDatesRow');
  const slotBtns = document.querySelectorAll('.cal-slots-grid .slot-btn');
  const bookingForm = document.getElementById('bookingForm');

  if (datesRow) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const now = new Date();

    datesRow.innerHTML = '';

    for (let i = 1; i <= 7; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + i);

      const day = days[d.getDay()];
      const dateNum = d.getDate();
      const month = months[d.getMonth()];
      const dateString = `${day}, ${month} ${dateNum}`;

      const pill = document.createElement('div');
      pill.className = `cal-date-pill ${i === 1 ? 'active' : ''}`;
      pill.setAttribute('data-date', dateString);
      pill.innerHTML = `
        <span class="p-day">${day}</span>
        <span class="p-num">${dateNum}</span>
      `;

      if (i === 1) currentCalDate = dateString;

      pill.addEventListener('click', () => {
        document.querySelectorAll('.cal-date-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCalDate = dateString;
      });

      datesRow.appendChild(pill);
    }
  }

  slotBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      slotBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCalSlot = btn.getAttribute('data-slot') || '10:00 AM';
    });
  });

  if (bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('calName').value.trim();
      const phone = document.getElementById('calPhone').value.trim();
      const email = document.getElementById('calEmail').value.trim();
      const notes = document.getElementById('calNotes').value.trim();
      const submitBtn = document.getElementById('calSubmitBtn');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Securing Calendar Slot...';
      }

      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            access_key: '64650570-e69a-4112-88f5-93cf47669d2f',
            name: name,
            phone: phone,
            email: email,
            notes: notes,
            booking_date: currentCalDate,
            booking_time: currentCalSlot,
            target_recipient: 'websitedesigns1408@gmail.com',
            subject: `[AURA Meeting Scheduled] ${name} booked for ${currentCalDate} at ${currentCalSlot}`
          })
        });
      } catch (err) {
        console.error('Booking notification routed to client:', err);
      }

      const step1 = document.getElementById('calStep1');
      const successPane = document.getElementById('calSuccess');
      const successText = document.getElementById('calSuccessText');

      if (step1 && successPane) {
        step1.style.display = 'none';
        successPane.style.display = 'block';
        if (successText) {
          successText.innerHTML = `Your consultation call with <strong>Suhas M R</strong> is confirmed for <strong>${currentCalDate} at ${currentCalSlot} IST</strong>. An appointment summary has been dispatched to <strong>${email}</strong>.`;
        }
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Confirm & Schedule Call';
      }
    });
  }
}

window.openCalendarModal = function(source = 'General') {
  const modal = document.getElementById('calendarModal');
  const step1 = document.getElementById('calStep1');
  const successPane = document.getElementById('calSuccess');
  const form = document.getElementById('bookingForm');

  if (modal) {
    if (step1) step1.style.display = 'block';
    if (successPane) successPane.style.display = 'none';
    if (form) form.reset();
    modal.classList.add('show');
  }
};

window.closeCalendarModal = function() {
  const modal = document.getElementById('calendarModal');
  if (modal) modal.classList.remove('show');
};

/* ---------------------------------------------------------
   5. Floating AURA AI Assistant
--------------------------------------------------------- */
function initAuraAssistant() {
  const toggleBtn = document.getElementById('botToggleBtn');
  const closeBtn = document.getElementById('botCloseBtn');
  const modal = document.getElementById('botModal');
  const form = document.getElementById('botInputForm');
  const input = document.getElementById('botInput');
  const chatLog = document.getElementById('botChatLog');
  const chips = document.querySelectorAll('#botChipsBar .b-chip');

  if (!toggleBtn || !modal || !chatLog) return;

  toggleBtn.addEventListener('click', () => {
    modal.classList.toggle('open');
    if (modal.classList.contains('open') && input) input.focus();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.getAttribute('data-query');
      if (query) handleBotQuery(query);
    });
  });

  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const txt = input.value.trim();
      if (txt) {
        handleBotQuery(txt);
        input.value = '';
      }
    });
  }

  function appendChat(role, content) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${role === 'user' ? 'user' : 'bot'}`;
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    bubble.innerHTML = `
      <div class="bubble-body">${content}</div>
      <span class="bubble-time">${timeStr}</span>
    `;
    chatLog.appendChild(bubble);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function handleBotQuery(text) {
    appendChat('user', text);
    setTimeout(() => {
      const reply = generateBotReply(text);
      appendChat('bot', reply);
    }, 450);
  }

  function generateBotReply(q) {
    const s = q.toLowerCase();

    // Pricing (20K / 80K)
    if (s.includes('price') || s.includes('cost') || s.includes('20k') || s.includes('80k') || s.includes('plan') || s.includes('rate')) {
      return `💰 <strong>AURA Pricing Matrix:</strong>
      <br>• <strong>Starter Tier:</strong> <strong>INR 20K</strong> (Custom web experience + up to 2 automations)
      <br>• <strong>Growth & Scale (Most Popular):</strong> <strong>INR 80K</strong> (Full-stack platform + 8 AI agents + 24/7 WhatsApp bot + real-time analytics)
      <br>• <strong>Enterprise Tier:</strong> <strong>Custom</strong> bespoke architecture
      <br><br>All plans come with <strong>100% full source code ownership</strong> and zero vendor lock-in!
      <br><br><a href="javascript:void(0)" onclick="openCalendarModal('Chatbot Pricing')">📅 Click here to Book a Consultation &rarr;</a>`;
    }

    // Capabilities / Services
    if (s.includes('capab') || s.includes('service') || s.includes('build') || s.includes('what') || s.includes('feature')) {
      return `🚀 <strong>What We Engineer at AURA:</strong>
      <br>• <strong>Sub-Second Web & Mobile Platforms</strong> (Next.js, Flutter, React Native)
      <br>• <strong>24/7 Smart WhatsApp Chatbots</strong> (Meta Cloud API for automated sales & bookings)
      <br>• <strong>Autonomous AI Workflows</strong> (CRM synchronization, lead triage & ERP pipelines)
      <br>• <strong>High-Converting Growth Portals</strong>
      <br><br><a href="https://wa.me/919591560577" target="_blank">Chat with Suhas on WhatsApp (+91 95915 60577) &rarr;</a>`;
    }

    // Timeline / Speed
    if (s.includes('fast') || s.includes('time') || s.includes('launch') || s.includes('week') || s.includes('duration')) {
      return `⚡ <strong>Velocity is our Core Advantage:</strong>
      <br>• <strong>AURA Launch Velocity:</strong> 1 to 2 weeks for complete production deployment.
      <br>• Traditional agencies: 3 to 6 months.
      <br><br>We ship <strong>70% faster</strong> with clean, tested architecture.`;
    }

    // Founder / Suhas M R
    if (s.includes('founder') || s.includes('suhas') || s.includes('who are you') || s.includes('architect')) {
      return `👤 <strong>Suhas M R</strong> is the Founder & Systems Architect of AURA.
      <br>• Based in Chitradurga, Karnataka, India.
      <br>• Specializes in Full-Stack Engineering, Meta WhatsApp Cloud APIs, and Autonomous AI Pipelines.
      <br>• GitHub: <a href="https://github.com/Suhas1249" target="_blank">github.com/Suhas1249</a>
      <br>• Direct WhatsApp: <a href="https://wa.me/919591560577" target="_blank">+91 95915 60577</a>`;
    }

    // Calendar / Book a Call
    if (s.includes('book') || s.includes('call') || s.includes('calendar') || s.includes('meet') || s.includes('schedule')) {
      setTimeout(() => { openCalendarModal('Chatbot Action'); }, 500);
      return `Opening the <strong>AURA Booking Calendar</strong> for you! Select your date and time slot to connect directly with Suhas M R.`;
    }

    // Contact details
    if (s.includes('contact') || s.includes('phone') || s.includes('email') || s.includes('whatsapp') || s.includes('number')) {
      return `📱 <strong>Direct Contact Channels:</strong>
      <br>• <strong>WhatsApp & Call:</strong> <a href="https://wa.me/919591560577" target="_blank">+91 95915 60577</a>
      <br>• <strong>Official Email:</strong> <a href="mailto:websitedesigns1408@gmail.com">websitedesigns1408@gmail.com</a>
      <br>• <strong>Location:</strong> Chitradurga, Karnataka, India`;
    }

    // Default Fallback
    return `Thank you for asking about <em>"${q}"</em>!
    <br><br>At AURA, we engineer bespoke digital platforms and autonomous AI systems starting from <strong>₹20K</strong> to <strong>₹80K</strong>.
    <br><br><a href="javascript:void(0)" onclick="openCalendarModal('Chatbot Fallback')">📅 Schedule a 1-on-1 Consultation Call &rarr;</a>
    <br>Or chat directly on <a href="https://wa.me/919591560577?text=Hello%20Suhas!%20I'm%20inquiring%20about%20${encodeURIComponent(q)}" target="_blank">WhatsApp (+91 95915 60577)</a>`;
  }
}
