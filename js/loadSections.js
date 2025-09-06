// LOAD SECTIONS DYNAMICALLY
document.addEventListener('DOMContentLoaded', function() {
    // Function to load HTML content into sections
    async function loadSection(sectionId, filename) {
        try {
            // Skip fetching and use default content directly
            document.getElementById(sectionId).innerHTML = getDefaultContent(sectionId);
        } catch (error) {
            console.error(`Error loading ${filename}:`, error);
            // Fallback content if there's an error
            document.getElementById(sectionId).innerHTML = getDefaultContent(sectionId);
        }
    }
    
    // Default content fallback - exact content from original
    function getDefaultContent(sectionId) {
        const defaults = {
//////////////////////////////////////////////HOME SECTION//////////////////////////////////////////////
            'home-section': `
                <section id="home" class="section home-section">
                    <div class="bubbles">
                        <div class="bubble small"></div>
                        <div class="bubble medium"></div>
                        <div class="bubble large"></div>
                        <div class="bubble small"></div>
                        <div class="bubble medium"></div>
                        <div class="bubble small"></div>
                        <div class="bubble large"></div>
                        <div class="bubble medium"></div>
                        <div class="bubble small"></div>
                        <div class="bubble medium"></div>
                    </div>
                    <div class="home-content">
                        <div class="home-image">
                            <img src="images/vogue.png" alt="Vogue Magazine Cover">
                        </div>
                        <div class="home-text">
                            <h2>ELEVATING YOUR GOALS</h2>
                            <p>Helping you buy, sell, and invest with confidence — through expert strategy, market insight, and personalized service</p>
                        </div>
                    </div>
                </section>               
            `,
//////////////////////////////////////////////ABOUT SECTION//////////////////////////////////////////////
            'about-section': `
                <section id="about" class="section">
                    <h2>About Me</h2>
                    <p>I'm Robin, a real estate professional based in Woodlands, serving clients across Singapore. I provide <strong>data-driven insights</strong>, <strong>strategic marketing</strong>, and a <strong>client-first approach</strong> to help you make confident property decisions.</p>
                    <h3>My Mission & Vision</h3>
                    <p2>My passion lies in helping families and investors make <strong>confident</strong> property decisions — whether it's finding their dream home, upgrading to a better space, or selling at the <strong>highest possible price.</strong></p2>
                    <h4>Unique Value</h4>
                    <p3>When thinking of selling your home the highest price effectively and efficiently in Singapore with 36,000 property agents for you to choose from, <strong>One question crosses your mind "Why should I Choose you to sell my flat?"</strong></p3>
                    <div class="about-content">
                        <div class="about-image">
                            <img src="images/ootd.png" alt="Robin Tsai Professional Photo">
                        </div>
                        <div class="about-quote">
                            <blockquote>"I don't just sell houses to the buyer, I sell their emotional needs" — Robin</blockquote>
                        </div>
                    </div>
                </section>
            `,
////////////////////////////////////////////////SERVICE SECTION//////////////////////////////////////////
'services-section': `
<section id="services" class="section services-section">

<h2>My Services</h2>

<div class="services-grid">
    <div class="service-card">
        <div class="service-icon">🏠</div>
        <h3>Selling, Buying, Renting</h3>
        <p>Full-service support for all your property transaction needs</p>
    </div>

    <div class="service-card">
        <div class="service-icon">📅</div>
        <h3>Timeline Planning</h3>
        <p>Allowing sufficient time to move to your new house and renovation. Avoid being homeless due to poor timeline planning</p>
    </div>

    <div class="service-card">
        <div class="service-icon">🧮</div>
        <h3>Detailed Financial Calculation</h3>
        <p>Understanding the total cash / CPF return after Sell / Buy. What is your budget to buy the next house?</p>
    </div>

    <div class="service-card">
        <div class="service-icon">📊</div>
        <h3>Customised Home Report</h3>
        <p>Personalized property analysis tailored to your specific needs and goals</p>
    </div>

    <div class="service-card">
        <div class="service-icon">📈</div>
        <h3>Marketing Strategies</h3>
        <p>Data-driven marketing approaches to maximize your property's visibility</p>
    </div>

    <div class="service-card">
        <div class="service-icon">🏢</div>
        <h3>New Launch Analysis</h3>
        <p>Expert evaluation of new developments and investment opportunities</p>
    </div>

    <div class="service-card">
        <div class="service-icon">⚖️</div>
        <h3>Asset Strategy</h3>
        <p>Upgrade and downgrade planning to optimize your property portfolio</p>
    </div>

    <div class="service-card">
        <div class="service-icon">🤝</div>
        <h3>Complicated Cases</h3>
        <p>Specialized handling of divorce and Death of kin property matters (Grant of Probate) (Letters of Administration)</p>
    </div>
</div>
</section>
`,

////////////////////////////////////////////////PROJECT SECTION//////////////////////////////////////////
          'projects-section': `
    <section id="projects" class="section projects-section">
        <h2>New Launch Project</h2>

        <h3>Upcoming New Launches 2025</h3>
        <img src="images/project2025.jpg" alt="New Launch Projects">
    </section>
            `,
////////////////////////////////////////////////APPRAISAL SECTION//////////////////////////////////////////
'appraisal-section': `
<section id="appraisal" class="section appraisal-section">

    <h2>Appraisal & Client Satisfaction</h2>
    <p class="permission-note">*Permission granted before uploading on platform</p>

    <div class="feedback-container">
        <!-- Left Column: Selfies -->
        <div class="selfies-column">
            <h3>Client Satisfaction</h3>
            <div class="selfies-row">
                <img src="images/selfie1.jpg" alt="Client Selfie 1">
                <img src="images/selfie2.jpg" alt="Client Selfie 2">
                <img src="images/selfie3.jpg" alt="Client Selfie 3">
            </div>
        </div>

        <!-- Right Column: WhatsApp Screenshots -->
        <div class="whatsapp-column">
            <h3>WhatsApp Feedback</h3>
            <div class="whatsapp-row">
                <img src="images/whatsapp1.jpg" alt="WhatsApp Feedback 1">
                <img src="images/whatsapp2.jpg" alt="WhatsApp Feedback 2">
                <img src="images/whatsapp3.jpg" alt="WhatsApp Feedback 3">
                <img src="images/whatsapp4.jpg" alt="WhatsApp Feedback 4">
            </div>
        </div>
    </div>

    <!-- Comments Section -->
    <div class="comments-section">
        <h3>Client Testimonials</h3>
        <div class="comments-container">
            <div class="comment-card">
                <p>We are second timer, and we tried to apply for 5-room BTO many times but were all unsuccessful. Met up with Robin and he gave us alternative advice and solution to our growing family needs. We managed to upgrade from a 4 room to 5 room smoothly and most importantly, it is within budget and the location that we wanted.
                <br><br>
                Both my husband and my work schedule are very packed, and Robin ensured that our time are not compromised</p>
            </div>
            <div class="comment-card">
                <p>Robin is very friendly and cheerful every time he met us... Ensuring our whole downsizing journey being very smooth without us worrying about what is going to happen next. Robin also listened to all our concerns and preferences for our new house and advice us accordingly. Extra plus points for Robin as he replied to our messages very quickly and efficiently throughout the whole process.</p>
            </div>
        </div>
    </div>
</section>
            `
        };
        return defaults[sectionId] || '<div>Content not available</div>';
    }
    
    // Load all sections
    loadSection('home-section', 'home.html');
    loadSection('about-section', 'about.html');
    loadSection('services-section', 'services.html');
    loadSection('projects-section', 'projects.html');
    loadSection('appraisal-section', 'appraisal.html');
    
    // Add WhatsApp floating button with CSS included
    setTimeout(function() {
        console.log('Adding WhatsApp button...');
        
        // Add CSS for WhatsApp button
        const style = document.createElement('style');
        style.textContent = `
            .whatsapp-float-circle {
                position: fixed !important;
                bottom: 25px !important;
                right: 25px !important;
                width: 50px !important;
                height: 50px !important;
                background: #25d366 !important;
                border-radius: 50% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3) !important;
                z-index: 9999 !important;
                cursor: pointer !important;
                transition: all 0.3s ease !important;
                text-decoration: none !important;
                animation: whatsapp-pulse 2s infinite !important;
            }

            .whatsapp-float-circle:hover {
                background: #128c7e !important;
                transform: scale(1.1) !important;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4) !important;
                text-decoration: none !important;
            }

            .whatsapp-float-circle:active {
                transform: scale(0.95) !important;
            }

            @keyframes whatsapp-pulse {
                0% {
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3), 0 0 0 0 rgba(37, 211, 102, 0.7);
                }
                70% {
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3), 0 0 0 8px rgba(37, 211, 102, 0);
                }
                100% {
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3), 0 0 0 0 rgba(37, 211, 102, 0);
                }
            }

            @media (max-width: 768px) {
                .whatsapp-float-circle {
                    bottom: 20px !important;
                    right: 20px !important;
                    width: 45px !important;
                    height: 45px !important;
                }
                
                .whatsapp-float-circle svg {
                    width: 18px !important;
                    height: 18px !important;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Add WhatsApp button HTML
        const whatsappButton = `
            <a href="https://wa.me/6596399087?text=Hi%20Robin,%20I'm%20interested%20in%20your%20real%20estate%20services!" 
               class="whatsapp-float-circle" 
               target="_blank" 
               rel="noopener"
               title="Chat with me on WhatsApp">
                <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690"/>
                </svg>
            </a>
        `;
        
        document.body.insertAdjacentHTML('beforeend', whatsappButton);
        console.log('WhatsApp button added successfully!');
        
    }, 1000);
});