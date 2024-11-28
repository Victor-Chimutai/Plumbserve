// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation for empty fields
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate successful form submission
    alert(`Thank you, ${name}. Your message has been sent!`);
});

// Optional: Scroll to Section Smoothly
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Get target section ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust offset for navbar height
                behavior: 'smooth' // Smooth scrolling effect
            });
        }
    });
});

// Optional: Navbar Shrink Effect on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-shrink');
    } else {
        navbar.classList.remove('navbar-shrink');
    }
});

// Optional: Add a pop-up message when hovering over WhatsApp Icon
const whatsappIcon = document.querySelector('footer i');
if (whatsappIcon) {
    whatsappIcon.addEventListener('mouseenter', function () {
        whatsappIcon.title = 'Chat with us on WhatsApp!';
    });
}
