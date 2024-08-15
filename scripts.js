// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    function fadeInSection() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (sectionTop < viewportHeight - 50) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
                section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            }
        });
    }

    window.addEventListener("scroll", fadeInSection);
    fadeInSection(); // Para que las animaciones se apliquen si ya están visibles al cargar la página
});
