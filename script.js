document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = darkModeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

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