function buyNow(plan) {
    alert(`You have selected the ${plan}.`);
}

// Add form submission handling if needed
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you soon.');
});
