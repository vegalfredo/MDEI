document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling para anclas (opcional, si añades un menú de navegación)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación de aparición de elementos al hacer scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Dejar de observar una vez que se activa
            }
        });
    }, {
        threshold: 0.1 // El elemento se activa cuando el 10% de él es visible
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});