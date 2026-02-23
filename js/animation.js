// Observador para animar la imagen cuando llegue a la sección
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, {
    threshold: 0.5 // Activa cuando el 50% de la sección es visible
});

// Observa la imagen de la sección conocenos
const imgConocenos = document.querySelector('.img-conocenos');
if (imgConocenos) {
    imgConocenos.style.animationPlayState = 'paused';
    observer.observe(imgConocenos);
}

// Observador para animar las tarjetas cuando lleguen a la vista
const tarjetasObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Aplicar delay escalonado a cada tarjeta
            entry.target.style.animationDelay = (index * 0.15) + 's';
            entry.target.style.animationPlayState = 'running';
        }
    });
}, {
    threshold: 0.1
});

// Observa todas las tarjetas
const tarjetas = document.querySelectorAll('.tarjeta');
if (tarjetas.length > 0) {
    const tarjetasArray = Array.from(tarjetas);
    tarjetasArray.forEach((tarjeta, index) => {
        tarjeta.style.animationPlayState = 'paused';
        tarjetasObserver.observe(tarjeta);
    });
}
