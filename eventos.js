// eventos.js

// Función evento que se ejecuta al hacer clic en el botón
export function evento() {
    console.log("hola");
}

// Agregar el event listener para el botón una vez que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    button.addEventListener('click', evento);
});
