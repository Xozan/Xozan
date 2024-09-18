document.addEventListener('DOMContentLoaded', function(){
    //El comentario: Paso 1: Obtener los elementos del DOM se refiere al proceso de acceder a los elementos HTML de la página web para poder manipularlos o interactuar con ellos mediante JavaScript.
    //¿Pero qué es el DOM?
    //DOM significa Document Object Model (Modelo de Objetos del Documento). Es una representación estructurada del documento HTML o XML como un árbol de nodos, donde cada elemento HTML es un nodo en ese árbol. El DOM permite a los lenguajes de programación como JavaScript acceder, modificar, o crear elementos y estructuras dentro de una página web.
    //Cuando el navegador carga una página web, convierte el HTML en una estructura que puede ser manipulada mediante el DOM. Por ejemplo, el navegador puede representar un párrafo (<p>) como un nodo, una imagen (<img>) como otro nodo, y así sucesivamente.
    // Obtener el botón "Siguiente" por su id 'next'
    let nextDom = document.getElementById('next');
    //Declara una variable llamada nextDom.
    //Busca en el HTML un elemento con id="next".
    //Guarda una referencia a ese elemento en nextDom, para que puedas manipularlo desde JavaScript.

    // Obtener el botón "Anterior" por su id 'prev'
    let prevDom = document.getElementById('prev');

    // Obtener el contenedor principal del carrusel con la clase 'carousel'
    let carouselDom = document.querySelector('.carousel');

    // Obtener la lista de elementos del carrusel dentro de 'carousel' y 'list'
    let SliderDom = carouselDom.querySelector('.list');

    // Obtener el contenedor de las miniaturas con la clase 'thumbnail'
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');

    // Obtener todos los elementos de miniatura con la clase 'item' dentro de 'thumbnail'
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

    // Obtener el elemento que muestra el tiempo de rotación del carrusel
    let timeDom = document.querySelector('.carousel .time');

    // Añadir la primera miniatura al final de su contenedor
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    // Definir el tiempo de espera para la animación del carrusel (3000 milisegundos = 3 segundos)
    let timeRunning = 3000;

    // Agregar un evento al botón "Siguiente" que al hacer clic muestre el siguiente slide
    nextDom.onclick = function() {
        showSlider('next');  // Llamar a la función showSlider con el parámetro 'next'
    }

    // Agregar un evento al botón "Anterior" que al hacer clic muestre el slide anterior
    prevDom.onclick = function() {
        showSlider('prev');  // Llamar a la función showSlider con el parámetro 'prev'
    }

    // Variable para almacenar el tiempo de espera antes de eliminar las clases de transición
    let runTimeOut;

    /**
     * Función que se encarga de mostrar el siguiente o el anterior slide en el carrusel
     * @param {string} type - Tipo de acción ('next' o 'prev')
     */
    function showSlider(type) {
        // Obtener todos los elementos del carrusel con la clase 'item' dentro de la lista principal
        let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');

        // Obtener todas las miniaturas de la sección de miniaturas
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
        
        if (type === 'next') {
            // Si el tipo es 'next', mover el primer slide al final de la lista
            SliderDom.appendChild(SliderItemsDom[0]);

            // Mover la primera miniatura al final de su contenedor
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

            // Añadir la clase 'next' al contenedor del carrusel para iniciar la animación
            carouselDom.classList.add('next');
        } else {
            // Si el tipo es 'prev', mover el último slide al inicio de la lista
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);

            // Mover la última miniatura al inicio de su contenedor
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);

            // Añadir la clase 'prev' al contenedor del carrusel para iniciar la animación
            carouselDom.classList.add('prev');
        }

        // Limpiar cualquier tiempo de espera pendiente para eliminar las clases 'next' o 'prev'
        clearTimeout(runTimeOut);

        // Establecer un nuevo tiempo de espera para eliminar las clases después de que pase el tiempo de animación
        runTimeOut = setTimeout(() => {
            // Remover las clases 'next' y 'prev' después de que la animación haya terminado
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);  // El tiempo de espera es igual al valor de 'timeRunning' (3 segundos)
    }
})