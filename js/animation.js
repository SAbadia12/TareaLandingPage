const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, {
    threshold: 0.5 // Se activa solo cuando el 50% de la sección está visible
});


const imgConocenos = document.querySelector('.img-conocenos');
if (imgConocenos) {
    imgConocenos.style.animationPlayState = 'paused';
    observer.observe(imgConocenos);
}


const tarjetasObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = (index * 0.15) + 's';
            entry.target.style.animationPlayState = 'running';
        }
    });
}, {
    threshold: 0.1
});

const tarjetas = document.querySelectorAll('.tarjeta');
if (tarjetas.length > 0) {
    const tarjetasArray = Array.from(tarjetas);
    tarjetasArray.forEach((tarjeta, index) => {
        tarjeta.style.animationPlayState = 'paused';
        tarjetasObserver.observe(tarjeta);
    });
}
