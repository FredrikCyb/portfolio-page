document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = darkModeToggle.querySelector('i');
    const navbar = document.querySelector('.navbar');
    
    // Variables for scroll handling
    let lastScrollTop = 0;
    const scrollThreshold = 10;
    let isScrolling;

    // Set dark mode as default
    document.documentElement.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');

    // Check for saved theme preference (only if user has changed it before)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
    }

    // Handle scroll events for navbar
    window.addEventListener('scroll', () => {
        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(() => {
            if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
                // Scrolling down - hide navbar
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up - show navbar
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }, 66); // 66ms is roughly 15fps
    }, { passive: true });

    // Handle touch events for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        touchEndY = e.touches[0].clientY;
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (touchEndY < touchStartY && currentScroll > scrollThreshold) {
            // Scrolling down - hide navbar
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show navbar
            navbar.style.transform = 'translateY(0)';
        }
    }, { passive: true });

    darkModeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            icon.classList.replace('fa-sun', 'fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    });

    // EmailJS initialization
    emailjs.init("U5GYlxXh2NV9eUI2E"); // Replace with your EmailJS public key

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitButton = contactForm.querySelector('.submit-button');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            const response = await emailjs.sendForm(
                'service_wv5eark', // Replace with your EmailJS service ID
                'template_8lrqxan', // Replace with your EmailJS template ID
                contactForm
            );

            // Show success message
            formStatus.textContent = 'Message sent successfully!';
            formStatus.className = 'form-status success';
            contactForm.reset();
        } catch (error) {
            // Show error message
            formStatus.textContent = 'Failed to send message. Please try again.';
            formStatus.className = 'form-status error';
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    });
}); 