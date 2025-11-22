//Email validation helper 
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

//Add some basic animation on scroll
const observerOptions = {
    threshold: 0.1
};  

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
//Observe sections for fade-in animation
document.querySelectorAll('.animate-on-scroll').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
});
