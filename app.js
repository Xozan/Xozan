// Step 1: Obtener elementos del DOM
let nextDom = document.getElementById('next'); // Botón de siguiente
let prevDom = document.getElementById('prev'); // Botón de anterior

let carouselDom = document.querySelector('.carousel'); // Contenedor principal del carrusel
let SliderDom = carouselDom.querySelector('.carousel .list'); // Lista de elementos del carrusel
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail'); // Contenedor de miniaturas
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item'); // Elementos de miniaturas
let timeDom = document.querySelector('.carousel .time'); // Elemento de tiempo (posiblemente un indicador visual)

// Mueve la primera miniatura al final del contenedor de miniaturas
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// Configuración de tiempos en milisegundos
let timeRunning = 3000; // Tiempo para ejecutar la animación
//let timeAutoNext = 7000; // Tiempo para avanzar automáticamente al siguiente elemento

// Asignar función para el botón de siguiente
nextDom.onclick = function(){
    showSlider('next');    
}

// Asignar función para el botón de anterior
prevDom.onclick = function(){
    showSlider('prev');    
}

let runTimeOut; // Almacena el temporizador para remover clases de animación
//let runNextAuto = setTimeout(() => {
//    nextDom.click(); // Avanza automáticamente al siguiente después del tiempo configurado
//}, timeAutoNext)


// Función para mostrar el siguiente o anterior elemento del carrusel
function showSlider(type){
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item'); // Elementos del carrusel
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item'); // Elementos de miniaturas

    if(type === 'next'){
        // Mueve el primer elemento al final para mostrar el siguiente
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        // Mueve el último elemento al inicio para mostrar el anterior
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    // Limpia y reinicia el temporizador para remover la clase de animación
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    // Limpia y reinicia el temporizador para avanzar automáticamente al siguiente
    //clearTimeout(runNextAuto);
    //runNextAuto = setTimeout(() => {
    //    nextDom.click();
    //}, timeAutoNext);
}
