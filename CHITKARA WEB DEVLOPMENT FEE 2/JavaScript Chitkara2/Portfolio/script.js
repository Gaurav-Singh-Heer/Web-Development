document.addEventListener('DOMContentLoaded', () => {
    // Example: Add interactivity to the contact form
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });

    // Example: Add a simple image slider (optional)
    // Implement your slider logic here
});
