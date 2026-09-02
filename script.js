/* =========================================================
   AURA Platform — Interactive Scripts & Engines
   Advanced Understanding, Research & Automation
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Cinematic Intro Controller
  initCinematicIntro();

  // 2. Mobile Menu Drawer
  initMobileNav();

  // 3. Interactive Booking Calendar Engine
  initBookingCalendar();

  // 4. Floating AURA AI Chatbot
  initAuraChatbot();
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
    }, 450);
  }

  // Auto-dismiss timer
  const timer = setTimeout(dismissIntro, 2000);

  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      clearTimeout(timer);
      dismissIntro();
    });
  }
}

/* ---------------------------------------------------------
   2. Mobile Menu Drawer
--------------------------------------------------------- */
function initMobileNav() {
  const hamburger = document.getElementById('navHamburger');
  const menu = document.getElementById('mobileMenu');
  const links = document.querySelectorAll('.mobile-link');

  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  links.forEach(l => {
    l.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  });
}

/* ---------------------------------------------------------
   3. Interactive Booking Calendar Engine
--------------------------------------------------------- */
let selectedDate = '';
let selectedSlot = '10:00 AM';

function initBookingCalendar() {
  const datesContainer = document.getElementById('calDatesRow');
  const slotsButtons = document.querySelectorAll('.slot-btn');
  const form = document.getElementById('bookingForm');

  // Dynamically generate next 7 available days
  if (datesContainer) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const today = new Date();
    datesContainer.innerHTML = '';

    for (let i = 1; i <= 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);

      const dayName = days[d.getDay()];
      const dateNum = d.getDate();
      const monthName = months[d.getMonth()];
      const fullDateStr = `${dayName}, ${monthName} ${dateNum}`;

      const pill = document.createElement('div');
      pill.className = `date-pill ${i === 1 ? 'active' : ''}`;
      pill.setAttribute('data-date', fullDateStr);
      pill.innerHTML = `
        <span class="dp-day">${dayName}</span>
        <span class="dp-date">${dateNum}</span>
      `;

      if (i === 1) selectedDate = fullDateStr;

      pill.addEventListener('click', () => {
        document.querySelectorAll('.date-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectedDate = fullDateStr;
      });

      datesContainer.appendChild(pill);
    }
  }

  // Time slot selection
  slotsButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      slotsButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSlot = btn.getAttribute('data-slot') || '10:00 AM';
    });
  });

  // Booking Form Submission
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('calName').value.trim();
      const phone = document.getElementById('calPhone').value.trim();
      const email = document.getElementById('calEmail').value.trim();
      const notes = document.getElementById('calNotes').value.trim();
      const submitBtn = document.getElementById('calSubmitBtn');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Securing Calendar Slot...';
      }

      const bookingDetails = {
        name: name,
        phone: phone,
        email: email,
        notes: notes,
        date: selectedDate,
        time_slot: selectedSlot,
        target_recipient: 'websitedesigns1408@gmail.com',
        subject: `[AURA Consultation Call] Booked by ${name} (${selectedDate} at ${selectedSlot})`
      };

      try {
        // Submit to Web3Forms for direct notification to websitedesigns1408@gmail.com
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: '64650570-e69a-4112-88f5-93cf47669d2f',
            ...bookingDetails
          })
        });
      } catch (err) {
        console.error('Calendar booking notification error:', err);
      }

      // Show success screen
      const step1 = document.getElementById('calStep1');
      const successBox = document.getElementById('calSuccess');
      const successText = document.getElementById('calSuccessText');

      if (step1 && successBox) {
        step1.style.display = 'none';
        successBox.style.display = 'block';
        if (successText) {
          successText.innerHTML = `Your consultation call with <strong>Suhas M R</strong> is confirmed for <strong>${selectedDate} at ${selectedSlot} IST</strong>. Details have been dispatched to <strong>${email}</strong>.`;
        }
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Confirm &amp; Schedule Call';
      }
    });
  }
}

// Global Calendar Modal Functions
window.openCalendarModal = function(source = 'General') {
  const modal = document.getElementById('calendarModal');
  const step1 = document.getElementById('calStep1');
  const successBox = document.getElementById('calSuccess');
  const form = document.getElementById('bookingForm');

  if (modal) {
    if (step1) step1.style.display = 'block';
    if (successBox) successBox.style.display = 'none';
    if (form) form.reset();
    modal.classList.add('show');
  }
};

window.closeCalendarModal = function() {
  const modal = document.getElementById('calendarModal');
  if (modal) modal.classList.remove('show');
};

window.openInteractiveSimulation = function() {
  const demoSection = document.getElementById('live-demo');
  if (demoSection) {
    demoSection.scrollIntoView({ behavior: 'smooth' });
  }
};

/* ---------------------------------------------------------
   4. Floating AURA AI Chatbot Engine
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

  suggestions.forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.getAttribute('data-query');
      if (query) handleUserMessage(query);
    });
  });

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

  function handleUserMessage(userText) {
    appendMessage('user', userText);

    setTimeout(() => {
      const botResponse = generateAuraResponse(userText);
      appendMessage('bot', botResponse);
    }, 450);
  }

  function generateAuraResponse(input) {
    const lower = input.toLowerCase();

    // Services / Platform
    if (lower.includes('service') || lower.includes('do') || lower.includes('build') || lower.includes('platform') || lower.includes('what')) {
      return `At <strong>AURA</strong> (*Advanced Understanding, Research & Automation*), we deliver:
      <br>• 🚀 <strong>High-Performance Web & Mobile Systems</strong> (Sub-second loading, React Native/Flutter)
      <br>• 🤖 <strong>24/7 Smart WhatsApp Chatbots</strong> (Meta Cloud API automated sales & bookings)
      <br>• ⚡ <strong>Autonomous AI Workflow Pipelines</strong> (Data sync, CRM routing & ERP telemetry)
      <br>• 🔒 <strong>Zero Lock-In Code Exportability</strong> (100% full source ownership)
      <br><br><a href="javascript:void(0)" onclick="openCalendarModal('Chatbot Inquiry')">📅 Click here to Schedule a Call &rarr;</a>`;
    }

    // Timeline / Speed
    if (lower.includes('fast') || lower.includes('time') || lower.includes('timeline') || lower.includes('how long') || lower.includes('weeks')) {
      return `⚡ <strong>Velocity Advantage:</strong>
      <br>• <strong>AURA Launch Velocity:</strong> 2 to 4 weeks for complete production-ready platforms.
      <br>• Traditional agency: 6 to 12 months.
      <br><br>We ship <strong>70% faster</strong> with zero vendor lock-in!`;
    }

    // Pricing / Cost
    if (lower.includes('price') || lower.includes('cost') || lower.includes('plan') || lower.includes('charge') || lower.includes('rate') || lower.includes('how much')) {
      return `💰 <strong>Simple Plans for Every Growth Stage:</strong>
      <br>• <strong>Starter:</strong> INR 49K/month (Up to 2 AI workflow automations)
      <br>• <strong>Growth:</strong> INR 120K/month (Up to 8 AI agents, real-time analytics)
      <br>• <strong>Enterprise:</strong> Custom annual plans
      <br><br><a href="javascript:void(0)" onclick="openCalendarModal('Chatbot Pricing')">📅 Book a call to get your customized quote &rarr;</a>`;
    }

    // Founder / Suhas M R
    if (lower.includes('founder') || lower.includes('suhas') || lower.includes('who are you') || lower.includes('who built')) {
      return `👤 <strong>Suhas M R</strong> is the Founder & Systems Architect of AURA.
      <br>• Based in Chitradurga, Karnataka, India.
      <br>• Specializes in Full-Stack Web Architecture, Meta WhatsApp Cloud APIs, and Autonomous AI Pipelines.
      <br>• GitHub: <a href="https://github.com/Suhas1249" target="_blank">github.com/Suhas1249</a>
      <br>• Direct WhatsApp: <a href="https://wa.me/919591560577" target="_blank">+91 95915 60577</a>`;
    }

    // Calendar / Book a Call
    if (lower.includes('book') || lower.includes('call') || lower.includes('calendar') || lower.includes('meet') || lower.includes('schedule') || lower.includes('talk')) {
      setTimeout(() => { openCalendarModal('Chatbot Trigger'); }, 600);
      return `Opening the <strong>AURA Booking Calendar</strong> for you right now! Pick your preferred date & time slot to speak directly with Suhas M R.`;
    }

    // Contact / WhatsApp / Phone / Email
    if (lower.includes('whatsapp') || lower.includes('contact') || lower.includes('phone') || lower.includes('email') || lower.includes('number')) {
      return `📱 <strong>Direct Lines of Communication:</strong>
      <br>• <strong>WhatsApp & Call:</strong> <a href="https://wa.me/919591560577" target="_blank">+91 95915 60577</a>
      <br>• <strong>Email:</strong> <a href="mailto:websitedesigns1408@gmail.com">websitedesigns1408@gmail.com</a>
      <br>• <strong>Location:</strong> Chitradurga, Karnataka, India`;
    }

    // Default Fallback
    return `Thank you for your inquiry about <em>"${input}"</em>. 
    <br><br>At AURA, we engineer custom intelligent workflows and enterprise web applications tailored exactly to your business model.
    <br><br><a href="javascript:void(0)" onclick="openCalendarModal('Chatbot Fallback')">📅 Schedule a 1-on-1 Consultation Call &rarr;</a>
    <br>Or chat on <a href="https://wa.me/919591560577?text=Hello%20Suhas!%20I'm%20inquiring%20about%20${encodeURIComponent(input)}" target="_blank">WhatsApp (+91 95915 60577)</a>`;
  }
}
