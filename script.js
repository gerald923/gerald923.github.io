document.addEventListener("DOMContentLoaded", function () {
    // Manejador de envío de formulario
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Formulario enviado!");
    });

    // Función de redimensionamiento de imágenes
    function resizeImages() {
        const images = document.querySelectorAll('.responsive-img');
        images.forEach(image => {
            if (window.innerWidth < 768) {
                image.style.maxWidth = '90%';
            } else {
                image.style.maxWidth = '45%';
            }
        });
    }

    // Redimensionamiento inicial y agregar event listener para el redimensionamiento de la ventana
    resizeImages();
    window.addEventListener('resize', resizeImages);
});

