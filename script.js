/**
 * Función para mostrar el menú de navegación en dispositivos móviles
 * Se utiliza cuando el usuario hace clic en el icono de hamburguesa.
 */

function hamburg(){
    const navbar = document.querySelector(".dropdown") // Selecciona el elemento del DOM con la clase "dropdown"
    navbar.style.transform = "translateY(0px)" // Cambia la posición del menú desplegable para que sea visible
}


/**
 * Función para ocultar el menú de navegación en dispositivos móviles
 * Se utiliza cuando el usuario hace clic en el icono de cancelación.
 */
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

/* Efecto de Máquina de Escribir */

/**
 * Array de textos que se mostrarán en el efecto de máquina de escribir.
 * Cada texto se mostrará uno tras otro.
 */
const texts = [
    "TRADICION", // Primer texto
    "CULTURA", // Segundo texto
    "PINOLEROS" // Tercer texto
]

let speed  =80; // Velocidad en milisegundos para escribir cada carácter
const textElements = document.querySelector(".typewriter-text"); // Selecciona el elemento del DOM donde se mostrará el texto

let textIndex = 0; // Índice del texto actual en el array `texts`
let charcterIndex = 0; // Índice del carácter actual dentro del texto que se está escribiendo

/**
 * Función que maneja el efecto de máquina de escribir.
 * Escribe cada carácter del texto actual de forma secuencial.
 */
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){ // Verifica si aún quedan caracteres por escribir en el texto actual
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);  // Añade el siguiente carácter al elemento HTML
        charcterIndex++; // Incrementa el índice del carácter
        setTimeout(typeWriter, speed); // Llama a la función nuevamente después de un retardo definido por `speed`
    }
    else{
        setTimeout(eraseText, 1000) // Espera 1 segundo y luego llama a la función para borrar el texto
    }
}

/**
 * Función que maneja el borrado del texto para el efecto de máquina de escribir.
 * Borra cada carácter del texto de forma secuencial.
 */
function eraseText(){
    if(textElements.innerHTML.length > 0){ // Verifica si aún hay caracteres en el texto actual
        textElements.innerHTML = textElements.innerHTML.slice(0,-1); // Elimina el último carácter del texto mostrado
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter
