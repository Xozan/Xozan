// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Obtén todos los elementos con la clase "carousel"
    const ion_icons = document.getElementsByClassName("carousel");

    // Recorre la colección de elementos y agrega un evento de clic a cada uno
    for (let i = 0; i < ion_icons.length; i++) {
        ion_icons[i].addEventListener("click", () => {
            // Obtén el ID de la sección a la que quieres desplazarte desde el atributo 'data-target' del icono
            const targetId = ion_icons[i].getAttribute("data-target");
            if (targetId) {
                // Desplázate a la sección correspondiente
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
            // Opcional: Oculta el resto de las secciones
            const sections = document.querySelectorAll(".carousel"); // Ajusta el selector según tus necesidades
            sections.forEach(section => {
                if (section.id !== targetId) {
                    section.style.display = 'none';
                } else {
                    section.style.display = 'block';
                }
            });
        });
    }
});
