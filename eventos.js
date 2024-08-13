export function evento() {
    console.log("hola");
}

document.addEventListener('DOMContentLoaded', () => {
    // Delegación de eventos para el contenedor principal
    document.body.addEventListener('click', (e) => {
        // Delegación para botón genérico
        if (e.target.tagName === 'BUTTON' && e.target.id === '') {
            evento();
        }

        // Delegación para evento semántico
        if (e.target.id === 'evento-semantico') {
            alert("Hola Mundo Manejador de Eventos Semántico");
            console.log(e);
            console.log(event);
        }

        // Delegación para evento múltiple
        if (e.target.id === 'evento-multiple') {
            alert("Hola Mundo Manejador de Eventos Múltiple");
            console.log(e);
            console.log(e.type);
            console.log(e.target);
            console.log(event);
            saludar();
            saludar("Jon");
        }

        // Delegación para evento remover
        if (e.target.id === 'evento-remover' && e.type === 'dblclick') {
            alert(`Removiendo el evento de tipo ${e.type}`);
            console.log(e);
            e.target.removeEventListener("dblclick", arguments.callee);
        }
    });

    // Delegación de eventos para los divs con clase "eventos-flujo"
    const $eventosFlujo = document.querySelector('.eventos-flujo');
    if ($eventosFlujo) {
        $eventosFlujo.addEventListener('click', (e) => {
            if (e.target.classList.contains('div1') || e.target.classList.contains('div2') || e.target.classList.contains('div3')) {
                flujoEventos.call(e.target, e);
            }
        }, true);

        // Ejemplo de stopPropagation
        document.querySelector("#div2").addEventListener("click", (e) => {
            e.stopPropagation();
            console.log("Se ha detenido la propagación en #div2");
        }, { capture: false });
    }

    // Delegación de eventos para enlace con clase "link-dom"
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('link-dom')) {
            e.preventDefault();
            console.log("Se ha prevenido la acción predeterminada del enlace");
        }
    });

    function flujoEventos(e) {
        console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
        console.log(`Tipo de evento: ${e.type}`);
        console.log(`Fase del evento: ${e.eventPhase}`); // 1: Capturing, 2: At target, 3: Bubbling
    }

    function saludar(nombre = "Desconocid@") {
        alert(`Hola ${nombre}`);
    }
});

window.addEventListener("resize",(e)=>{
        console.log("");console.log("");console.log("");
        console.log("innerHeight = "+window.innerHeight+" px")
        console.log("innerWidth = "+window.innerWidth+" px")
        console.log("outerHeight = "+window.outerHeight+" px")
        console.log("outerWidth = "+window.outerWidth+" px")
})

window.addEventListener("scroll",(e)=>{
    console.clear()
    console.log("scrollX = "+window.scrollX+" px")
    console.log("scrollY = "+window.scrollY+" px")
})

window.addEventListener("load",(e)=>{
    console.log("load")
    console.log("screenX = "+window.screenX+" px")
    console.log("screenY = "+window.screenY+" px")
})

window.addEventListener("DOMContentLoaded",(e)=>{
    console.log("DOMContentLoaded")
    console.log("screenX = "+window.screenX+" px")
    console.log("screenY = "+window.screenY+" px")
})  



const $btnAbrir=document.getElementById("abrir-ventana")
const $btnCerrar=document.getElementById("cerrar-ventana")
const $btnImprimir=document.getElementById("imprimir-ventana")
const url = new URL("https://www.youtube.com/watch?v=ISApT6Lersk&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=81");

let ventana
$btnAbrir.addEventListener("click",(e)=>{
    ventana= window.open(url)
})

$btnCerrar.addEventListener("click",(e)=>{
    ventana.close()
})

$btnImprimir.addEventListener("click",(e)=>{
    ventana= window.print()
})

console.log(url.searchParams.get("name")); // "ChatGPT"
console.log(url.searchParams.get("age")); // "4"

url.searchParams.set("age", "5");
console.log(url.toString()); 

url.pathname = "/nueva-ruta";
console.log(url.href);

document.getElementById("back-button").addEventListener("click", () => {
    history.back(); // Ir hacia atrás en el historial
});

document.getElementById("forward-button").addEventListener("click", () => {
    history.forward(); // Ir hacia adelante en el historial
});

document.getElementById("pushstate-button").addEventListener("click", () => {
    history.pushState({ page: 1 }, "title 1", "/nueva-pagina");
    console.log("Nueva página añadida al historial");
});


document.addEventListener("DOMContentLoaded", () => {
    console.log("Información del navegador:");
    console.log("User Agent: " + navigator.userAgent);
    console.log("Plataforma: " + navigator.platform);
    console.log("Idioma: " + navigator.language);
    console.log("Cookies habilitadas: " + navigator.cookieEnabled);
    console.log("En línea: " + navigator.onLine);
});
