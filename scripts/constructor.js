// Datos del carrusel: cada objeto representa un elemento del carrusel con información relacionada
const carouselDatapollo = [
    {
        imgSrc: "C:/Users/livay/OneDrive/Escritorio/final_proyect/image/omelette.jpg",                  // URL de la imagen principal del carrusel
        author: "LUNDEV",                          // Autor del contenido del carrusel
        title: "DESIGN SLIDER",                    // Título del contenido del carrusel
        topic: "ANIMAL",                          // Tema del contenido del carrusel
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...", // Descripción detallada del contenido
        thumbnailTitle: "Name Slider",            // Título de la miniatura del contenido
        thumbnailDescription: "Description"       // Descripción de la miniatura del contenido
    },
    // Agrega más objetos para cada elemento del carrusel
    {
        imgSrc: "C:/Users/livay/OneDrive/Escritorio/final_proyect/image/churrasquito.jpg",                  // URL de la imagen principal del carrusel
        author: "LUNDEV",                          // Autor del contenido del carrusel
        title: "DESIGN SLIDER",                    // Título del contenido del carrusel
        topic: "ANIMAL",                          // Tema del contenido del carrusel
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...", // Descripción detallada del contenido
        thumbnailTitle: "Name Slider",            // Título de la miniatura del contenido
        thumbnailDescription: "Description"       // Descripción de la miniatura del contenido
    },
    // Añade más elementos según sea necesario
];

// Función para generar el carrusel principal
function generateCarousel(data) {
    // Obtiene el elemento del DOM donde se insertará el carrusel
    const carousel = document.getElementById('0');

    // Crear y configurar el contenedor de la lista principal del carrusel
    const list = document.createElement('div');
    list.className = 'list';

    // Iterar sobre los datos para crear los elementos del carrusel
    data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        // Configurar el contenido HTML para cada elemento del carrusel
        itemDiv.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.title}">      <!-- Imagen principal del carrusel -->
            <div class="content">                             <!-- Contenedor del contenido textual -->
                <div class="author">${item.author}</div>      <!-- Autor del contenido -->
                <div class="title">${item.title}</div>        <!-- Título del contenido -->
                <div class="topic">${item.topic}</div>        <!-- Tema del contenido -->
                <div class="des">${item.description}</div>    <!-- Descripción del contenido -->
                <div class="buttons">                         <!-- Botones de acción -->
                    <button>SEE MORE</button>                 <!-- Botón para ver más información -->
                    <button>SUBSCRIBE</button>                <!-- Botón para suscribirse -->
                </div>
            </div>
        `;
        list.appendChild(itemDiv);  // Agregar el elemento a la lista
    });

    // Crear y configurar el contenedor de miniaturas del carrusel
    const thumbnail = document.createElement('div');
    thumbnail.className = 'thumbnail';

    // Iterar sobre los datos para crear las miniaturas
    data.forEach(item => {
        const thumbItem = document.createElement('div');
        thumbItem.className = 'item';

        // Configurar el contenido HTML para cada miniatura
        thumbItem.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.thumbnailTitle}"> <!-- Imagen de la miniatura -->
            <div class="content">                              <!-- Contenedor del contenido textual de la miniatura -->
                <div class="title">${item.thumbnailTitle}</div> <!-- Título de la miniatura -->
                <div class="description">${item.thumbnailDescription}</div> <!-- Descripción de la miniatura -->
            </div>
        `;
        thumbnail.appendChild(thumbItem);  // Agregar la miniatura al contenedor
    });

    // Crear y configurar los botones de navegación del carrusel
    const arrows = document.createElement('div');
    arrows.className = 'arrows';
    arrows.innerHTML = `
        <button id="prev"><</button>  <!-- Botón para navegar a la imagen anterior -->
        <button id="next">></button>  <!-- Botón para navegar a la imagen siguiente -->
    `;

    // Crear y configurar el contenedor de tiempo del carrusel (puede usarse para mostrar el tiempo de transición o algún indicador similar)
    const time = document.createElement('div');
    time.className = 'time';

    // Agregar todos los elementos al contenedor del carrusel
    carousel.appendChild(list);       // Agregar el contenedor de la lista principal
    carousel.appendChild(thumbnail);  // Agregar el contenedor de miniaturas
    carousel.appendChild(arrows);     // Agregar el contenedor de flechas de navegación
    carousel.appendChild(time);       // Agregar el contenedor de tiempo
}

// Llamar a la función para generar el carrusel con los datos proporcionados
generateCarousel(carouselDatapollo);
