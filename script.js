/* ==========================================
   JavaScript Functionality for Swebdesigns
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Particle Canvas Network Background
    initParticles();

    // 2. Header Scroll Effect
    initHeaderScroll();

    // 3. Mobile Navigation Drawer
    initMobileNav();

    // 4. Scroll Reveal Animations
    initScrollReveal();

    // 5. Contact Form Handler (Connected with Web3Forms API)
    initContactForm();

    // 6. Navigation Link Highlighting
    initActiveNavLinks();

    // 7. Dynamic GitHub Repository Fetcher
    fetchGitHubProjects();
});

/* -------------------------------------------
   1. Particle Canvas Network Background
------------------------------------------- */
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let animationFrameId;

    // Canvas size adjustment
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse positions
    const mouse = {
        x: null,
        y: null,
        radius: 120
    };

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Particle Object
    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        // Draw particle
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        // Check particle position, screen boundaries, move and draw
        update() {
            // Screen boundaries check
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }

            // Mouse interact check (gentle push away)
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                    this.x += 2;
                }
                if (mouse.x > this.x && this.x > this.size * 10) {
                    this.x -= 2;
                }
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                    this.y += 2;
                }
                if (mouse.y > this.y && this.y > this.size * 10) {
                    this.y -= 2;
                }
            }

            // Move particle
            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    // Initialize particles array
    function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.width * canvas.height) / 13000;
        if (numberOfParticles > 100) numberOfParticles = 100; // Cap particle counts for performance
        
        const colors = [
            'rgba(157, 78, 221, 0.45)', // Purple
            'rgba(0, 242, 254, 0.45)',  // Cyan
            'rgba(123, 44, 191, 0.25)'   // Dark violet
        ];

        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 2.5) + 1;
            let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 0.4) - 0.2;
            let directionY = (Math.random() * 0.4) - 0.2;
            let color = colors[Math.floor(Math.random() * colors.length)];

            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    // Connect particles with network lines
    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let dx = particlesArray[a].x - particlesArray[b].x;
                let dy = particlesArray[a].y - particlesArray[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 130) {
                    opacityValue = 1 - (distance / 130);
                    ctx.strokeStyle = `rgba(157, 78, 221, ${opacityValue * 0.12})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
        animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    // Re-initialize particles count on screen resizing
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            init();
        }, 150);
    });
}

/* -------------------------------------------
   2. Header Scroll Effect
------------------------------------------- */
function initHeaderScroll() {
    const header = document.querySelector('.main-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Check on initial load
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }
}

/* -------------------------------------------
   3. Mobile Navigation Drawer
------------------------------------------- */
function initMobileNav() {
    const toggle = document.querySelector('.mobile-toggle');
    const menu = document.querySelector('.nav-menu');
    const links = document.querySelectorAll('.nav-menu a');

    if (!toggle || !menu) return;

    function toggleMenu() {
        toggle.classList.toggle('open');
        menu.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    }

    toggle.addEventListener('click', toggleMenu);

    // Close menu when links are clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
}

/* -------------------------------------------
   4. Scroll Reveal Animations
------------------------------------------- */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (revealElements.length === 0) return;

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Unobserve once revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.10,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

/* -------------------------------------------
   5. Contact Form Handler (Connected with Web3Forms API)
------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const successOverlay = document.getElementById('form-success');
    const submitBtn = document.getElementById('submit-btn');
    const submitBtnText = document.getElementById('submit-btn-text');
    const successTitle = document.getElementById('success-title');
    const successText = document.getElementById('success-text');

    if (!form || !successOverlay) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Retrieve form fields
        const accessKey = document.getElementById('access-key').value.trim();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Update button state to loading
        if (submitBtn) submitBtn.disabled = true;
        if (submitBtnText) submitBtnText.textContent = 'Sending Message...';

        try {
            // Send request to Web3Forms API
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: name,
                    email: email,
                    message: message,
                    from_name: 'Swebdesigns Client Contact Portal',
                    subject: `New Lead Inquiry from ${name}`
                })
            });

            const result = await response.json();

            if (response.status === 200 && result.success) {
                // Success Modal content configuration
                if (successTitle) successTitle.textContent = 'Message Sent!';
                if (successText) successText.textContent = `Thank you, ${name}! Your email was successfully routed to Suhas Reddy. Check your Gmail inbox shortly for verification.`;
                
                // Show Success overlay
                successOverlay.classList.add('active');
                document.body.classList.add('no-scroll');
            } else {
                throw new Error(result.message || 'Submission failed. Check your Web3Forms Access Key.');
            }
        } catch (error) {
            console.error('Contact Form routing error:', error);
            
            // Set error warning inside success modal to inform client gracefully
            if (successTitle) successTitle.textContent = 'Submission Failed';
            if (successText) successText.innerHTML = `<strong>Error:</strong> ${error.message}<br><br>Please verify your Access Key. You can get a free key instantly from <a href="https://web3forms.com/" target="_blank" style="color:#00f2fe;text-decoration:underline;">web3forms.com</a>.`;
            
            successOverlay.classList.add('active');
            document.body.classList.add('no-scroll');
        } finally {
            // Restore button state
            if (submitBtn) submitBtn.disabled = false;
            if (submitBtnText) submitBtnText.textContent = 'Send Message';
        }
    });
}

// Global function to close overlay (called by inline onclick attribute in index.html)
window.closeSuccessOverlay = function() {
    const successOverlay = document.getElementById('form-success');
    const form = document.getElementById('contact-form');
    
    if (successOverlay) {
        successOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
    
    // Reset contact form if it succeeded, otherwise keep key and entries so user doesn't lose progress
    const successTitle = document.getElementById('success-title');
    if (form && successTitle && successTitle.textContent === 'Message Sent!') {
        form.reset();
    }
};

/* -------------------------------------------
   6. Navigation Link Highlighting on Scroll
------------------------------------------- */
function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Corner case: At the top of the page, highlight Home
        if (scrollY < 100) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            const homeLink = document.querySelector('.nav-menu a[href="#home"]');
            if (homeLink) homeLink.classList.add('active');
        }
    });
}

/* -------------------------------------------
   7. Dynamic GitHub Repository Fetcher
------------------------------------------- */
async function fetchGitHubProjects() {
    const container = document.getElementById('github-repos-container');
    if (!container) return;

    const username = 'Suhas1249';
    const apiURL = `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`;

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('Failed to retrieve repositories from GitHub API');
        }
        
        const repos = await response.json();
        
        // If the user has public repositories, clear the mock container list and fill it dynamically
        if (repos && repos.length > 0) {
            container.innerHTML = ''; // Clear default fallbacks
            
            repos.forEach(repo => {
                // Skip forks to showcase original projects
                if (repo.fork) return;

                // Format repository names nicely (replace dashes/underscores with spaces)
                const projectTitle = repo.name
                    .replace(/[-_]/g, ' ')
                    .replace(/\b\w/g, char => char.toUpperCase());

                const projectDescription = repo.description || 'No description provided yet. Visit the repository to inspect the source files and documentation.';
                const projectLanguage = repo.language || 'Software';

                const cardHTML = `
                    <div class="project-card scroll-reveal revealed">
                        <div class="project-tag-wrapper">
                            <span class="proj-tag">${projectLanguage}</span>
                        </div>
                        <h3>${projectTitle}</h3>
                        <p>${projectDescription}</p>
                        <a href="${repo.html_url}" target="_blank" class="project-link">View Source &rarr;</a>
                    </div>
                `;
                container.innerHTML += cardHTML;
            });
        }
    } catch (error) {
        // Log the error. The pre-filled HTML tags will continue to serve as active fallbacks
        console.warn('GitHub API Fetch failed or returned rate-limit limits. Displaying pre-filled Swebdesigns projects as default fallback.', error);
    }
}
