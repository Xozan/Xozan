// Obtener referencia al elemento con el id "cloud"
const cloud = document.getElementById("cloud");

// Obtener referencia al elemento con la clase "barra-lateral"
const barraLateral = document.querySelector(".barra-lateral");

// Obtener todas las etiquetas "span" dentro del documento
const spans = document.querySelectorAll("span");

// Obtener referencia al elemento con la clase "switch" (posible botón o palanca para cambiar el modo)
const palanca = document.querySelector(".switch");

// Obtener referencia al elemento con la clase "circulo" (posible indicador dentro del switch)
const circulo = document.querySelector(".circulo");

// Obtener referencia al elemento con la clase "menu" (posiblemente un icono de menú)
const menu = document.querySelector(".menu");

// Obtener referencia a la etiqueta "main" (contenido principal de la página)
const main = document.querySelector("main");

const ion_icons = document.getElementsByClassName("carousel");

// Evento al hacer clic en el icono de menú
menu.addEventListener("click", () => {
    // Alternar la clase "max-barra-lateral" en el elemento "barraLateral" (expandir o colapsar el menú lateral)
    barraLateral.classList.toggle("max-barra-lateral");

    // Si la clase "max-barra-lateral" está presente, cambiar la visualización de los iconos del menú
    if (barraLateral.classList.contains("max-barra-lateral")) {
        // Ocultar el primer hijo del menú (posiblemente el icono de "abrir")
        menu.children[0].style.display = "none";
        // Mostrar el segundo hijo del menú (posiblemente el icono de "cerrar")
        menu.children[1].style.display = "block";
    } else {
        // Mostrar el primer hijo del menú cuando no está expandido
        menu.children[0].style.display = "block";
        // Ocultar el segundo hijo del menú
        menu.children[1].style.display = "none";
    }

    // Verificar si el ancho de la ventana es menor o igual a 320px (pantallas pequeñas)
    if (window.innerWidth <= 320) {
        // Añadir la clase "mini-barra-lateral" (reducir el tamaño de la barra lateral)
        barraLateral.classList.add("mini-barra-lateral");

        // Añadir la clase "min-main" para reducir el tamaño del contenido principal
        main.classList.add("min-main");

        // Ocultar todos los elementos span (posiblemente texto o iconos) en la barra lateral
        spans.forEach((span) => {
            span.classList.add("oculto");
        });
    }
});

// Evento al hacer clic en la palanca para cambiar el modo (posiblemente "modo oscuro" o "modo claro")
palanca.addEventListener("click", () => {
    // Obtener el elemento <body> del documento
    let body = document.body;

    // Alternar la clase "dark-mode" en el cuerpo del documento (activar o desactivar el modo oscuro)
    body.classList.toggle("dark-mode");

    // Alternar la clase "prendido" en el círculo dentro del switch (posiblemente para indicar el estado activo)
    circulo.classList.toggle("prendido");
});

// Evento al hacer clic en el elemento "cloud" (posiblemente un icono de nube o botón para colapsar/expandir la barra lateral)
cloud.addEventListener("click", () => {
    // Alternar la clase "mini-barra-lateral" en la barra lateral (colapsar o expandir la barra lateral)
    barraLateral.classList.toggle("mini-barra-lateral");

    // Alternar la clase "min-main" en el contenido principal para ajustarlo a la barra lateral
    main.classList.toggle("min-main");

    // Alternar la visibilidad de los elementos span (texto o iconos) en la barra lateral
    spans.forEach((span) => {
        span.classList.toggle("oculto");
    });
});

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Obtener todos los elementos <a> dentro de la navegación
    const navLinks = document.querySelectorAll(".navegacion a");

    // Recorre la colección de elementos y agrega un evento de clic a cada uno
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Previene el comportamiento por defecto del enlace

            // Obtener el ID de la sección a la que quieres desplazarte desde el atributo 'data-target' del enlace
            const targetId = link.getAttribute("data-target");
            console.log(`Clicked on link with data-target: ${targetId}`); // Para depuración

            if (targetId) {
                // Desplázate a la sección correspondiente
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    console.log(`Scrolled to section with ID: ${targetId}`);
                } else {
                    console.log(`No section found with ID: ${targetId}`);
                }
            } else {
                console.log('No targetId found on this link');
            }

            // Opcional: Oculta el resto de las secciones
            const sections = document.querySelectorAll("div[id^='section']"); // Ajusta el selector según tus necesidades
            sections.forEach(section => {
                if (section.id !== targetId) {
                    section.style.display = 'none';
                } else {
                    section.style.display = 'block';
                }
            });
        });
    });
});
