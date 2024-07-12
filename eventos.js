// // eventos.js

// // Función que se ejecuta al hacer clic en el botón
// export function evento() {
//     console.log("hola");
// }

// // Agregar el event listener para el botón una vez que el DOM esté cargado
// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.querySelector('button');
//     if (button) {
//         button.addEventListener('click', evento);
//     }

//     const eventoSemantico = document.getElementById("evento-semantico"),
//           eventoMultiple = document.getElementById("evento-multiple"),
//           eventoRemover = document.getElementById("evento-remover");

//     if (eventoSemantico) {
//         eventoSemantico.onclick = function(e) {
//             alert("Hola Mundo Manejador de Eventos Semántico");
//             console.log(e);
//             console.log(event);
//         };
//     }

//     if (eventoMultiple) {
//         eventoMultiple.addEventListener("click", (e) => {
//             alert("Hola Mundo Manejador de Eventos Múltiple");
//             console.log(e);
//             console.log(e.type);
//             console.log(e.target);
//             console.log(event);
//         });

//         eventoMultiple.addEventListener("click", () => {
//             saludar();
//             saludar("Jon");
//         });
//     }

//     if (eventoRemover) {
//         const removerDobleClick = (e) => {
//             alert(`Removiendo el evento de tipo ${e.type}`);
//             console.log(e);
//             eventoRemover.removeEventListener("dblclick", removerDobleClick); // Remover el event listener
//         };

//         eventoRemover.addEventListener("dblclick", removerDobleClick);
//     }
// });

// function holaMundo() {
//     alert("Hola Mundo");
//     console.log(event);
// }

// function saludar(nombre = "Desconocid@") {
//     alert(`Hola ${nombre}`);
// }
document.addEventListener("DOMContentLoaded", () => {
    const $divsEventos = document.querySelectorAll(".eventos-flujo div");

    function flujoEventos(e) {
        console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
        console.log(`Tipo de evento: ${e.type}`);
        console.log(`Fase del evento: ${e.eventPhase}`); // 1: Capturing, 2: At target, 3: Bubbling
    }

    console.log($divsEventos);

    $divsEventos.forEach((div) => {
        // Fase de burbuja (por defecto)
        div.addEventListener("click", flujoEventos, {
            capture: false, // Específicamente fase de burbuja
            once: true // El listener se ejecuta una vez y luego se elimina
        });
        // Fase de captura
        div.addEventListener("click", flujoEventos, {
            capture: true, // Específicamente fase de captura
            once: true // El listener se ejecuta una vez y luego se elimina
        });
    });

    // Ejemplo de stopPropagation
    document.querySelector("#div2").addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("Se ha detenido la propagación en #div2");
    }, { capture: false });

    // Ejemplo de preventDefault
    document.querySelector("a.link-dom").addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Se ha prevenido la acción predeterminada del enlace");
    });

    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', evento);
    }

    const eventoSemantico = document.getElementById("evento-semantico"),
          eventoMultiple = document.getElementById("evento-multiple"),
          eventoRemover = document.getElementById("evento-remover");

    if (eventoSemantico) {
        eventoSemantico.onclick = function(e) {
            alert("Hola Mundo Manejador de Eventos Semántico");
            console.log(e);
            console.log(event);
        };
    }

    if (eventoMultiple) {
        eventoMultiple.addEventListener("click", (e) => {
            alert("Hola Mundo Manejador de Eventos Múltiple");
            console.log(e);
            console.log(e.type);
            console.log(e.target);
            console.log(event);
        });

        eventoMultiple.addEventListener("click", () => {
            saludar();
            saludar("Jon");
        });
    }

    if (eventoRemover) {
        const removerDobleClick = (e) => {
            alert(`Removiendo el evento de tipo ${e.type}`);
            console.log(e);
            eventoRemover.removeEventListener("dblclick", removerDobleClick); // Remover el event listener
        };

        eventoRemover.addEventListener("dblclick", removerDobleClick);
    }
});

export function evento() {
    console.log("hola");
}

function holaMundo() {
    alert("Hola Mundo");
    console.log(event);
}

function saludar(nombre = "Desconocid@") {
    alert(`Hola ${nombre}`);
}
