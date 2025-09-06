// MAIN SCRIPT - Additional functionality and interactions

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation classes when sections come into view
    function addScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            observer.observe(section);
        });
    }
    
    // Initialize animations after a short delay to ensure sections are loaded
    setTimeout(addScrollAnimations, 500);
    
    // Mobile menu toggle (if needed for future mobile menu)
    function initMobileMenu() {
        const nav = document.querySelector('.nav-menu');
        const header = document.querySelector('header');
        
        // Add mobile menu button if screen is small
        if (window.innerWidth <= 768) {
            // Mobile menu functionality can be added here
        }
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        initMobileMenu();
    });
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Add loading animation to project images when they load
    function initProjectImageLoading() {
        const projectImages = document.querySelectorAll('.project-image img');
        
        projectImages.forEach(img => {
            if (img.complete) {
                img.parentElement.classList.add('loaded');
            } else {
                img.addEventListener('load', function() {
                    this.parentElement.classList.add('loaded');
                });
            }
        });
    }
    
    // Initialize project image loading after sections are loaded
    setTimeout(initProjectImageLoading, 1000);
    
    // Add hover effects to service items
    function initServiceHovers() {
        const serviceItems = document.querySelectorAll('.service-item');
        
        serviceItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // Initialize service hovers after sections are loaded
    setTimeout(initServiceHovers, 1000);
    
    // Parallax effect for home section background
    function initParallaxEffect() {
        const homeSection = document.querySelector('.home-section');
        
        if (homeSection) {
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                
                if (scrolled < homeSection.offsetHeight) {
                    homeSection.style.transform = `translateY(${parallax}px)`;
                }
            });
        }
    }
    
    // Initialize parallax effect after home section is loaded
    setTimeout(initParallaxEffect, 500);
    
    // Form validation enhancements
    function enhanceFormValidation() {
        const inputs = document.querySelectorAll('.appraisal-form input, .appraisal-form select');
        
        inputs.forEach(input => {
            // Add real-time validation feedback
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
    }
    
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Remove existing error styling
        field.classList.remove('error');
        const existingError = field.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Check if field is required and empty
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[+]?[\d\s\-\(\)]{8,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }
        
        // Number validation
        if (field.type === 'number' && value) {
            if (isNaN(value) || parseFloat(value) <= 0) {
                isValid = false;
                errorMessage = 'Please enter a valid positive number';
            }
        }
        
        // Show error if validation fails
        if (!isValid) {
            field.classList.add('error');
            const errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            errorElement.textContent = errorMessage;
            errorElement.style.color = '#e74c3c';
            errorElement.style.fontSize = '0.85rem';
            errorElement.style.marginTop = '0.25rem';
            field.parentElement.appendChild(errorElement);
        }
        
        return isValid;
    }
    
    // Initialize form validation after appraisal section is loaded
    setTimeout(enhanceFormValidation, 1500);
    
    // WhatsApp Floating Button
    function addWhatsAppButton() {
        const whatsappButton = `
            <a href="https://wa.me/+6596399087" 
               class="whatsapp-float" 
               target="_blank" 
               rel="noopener">
                <span class="whatsapp-emoji">💬</span>
                <span class="whatsapp-text">WhatsApp</span>
            </a>
        `;
        document.body.insertAdjacentHTML('beforeend', whatsappButton);
        
        // Add click tracking (optional)
        document.querySelector('.whatsapp-float').addEventListener('click', function() {
            console.log('WhatsApp button clicked');
            // You can add analytics tracking here if needed
        });
    }
    
    // Add WhatsApp button after a short delay
    setTimeout(addWhatsAppButton, 100);
});

// Add CSS for animations and WhatsApp button
const style = document.createElement('style');
style.textContent = `
    .section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .section.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .appraisal-form input.error,
    .appraisal-form select.error {
        border-color: #e74c3c;
        box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
    }
    
    .project-image {
        position: relative;
        overflow: hidden;
    }
    
    .project-image::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
                    linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
                    linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
                    linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
        background-size: 20px 20px;
        background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        opacity: 0.5;
        z-index: 1;
    }
    
    .project-image.loaded::before {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    /* WhatsApp Floating Button */
    .whatsapp-float {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #25d366;
        color: white;
        border-radius: 50px;
        text-align: center;
        font-size: 18px;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 15px 20px;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: pulse 2s infinite;
        font-weight: bold;
    }

    .whatsapp-float:hover {
        background: #128c7e;
        transform: scale(1.1);
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.4);
        color: white;
        text-decoration: none;
    }

    .whatsapp-float:active {
        transform: scale(0.95);
    }

    /* Simple WhatsApp emoji approach */
    .whatsapp-emoji {
        font-size: 24px;
    }

    /* Pulse animation */
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
        }
        70% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
        }
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .whatsapp-float {
            bottom: 20px;
            right: 20px;
            padding: 12px 16px;
            font-size: 16px;
        }
        
        .whatsapp-float .whatsapp-text {
            display: none; /* Hide text on mobile, show only emoji */
        }
    }
`;
document.head.appendChild(style);