// Crear elementos para la primera figura
const $figure1 = document.createElement("figure"),
      $img1 = document.createElement("img"),
      $figcaption1 = document.createElement("figcaption"),
      $figcaptionText1 = document.createTextNode("Animals"),
      $cards = document.querySelector(".cards"),
      $figure2 = document.createElement("figure");

// Configurar atributos de la imagen para la primera figura
$img1.setAttribute("src", "https://placeimg.com/200/200/animals");
$img1.setAttribute("alt", "Animals");

// Añadir clase a la primera figura
$figure1.classList.add("card");

// Construir la estructura de la primera figura
$figcaption1.appendChild($figcaptionText1);
$figure1.appendChild($img1);
$figure1.appendChild($figcaption1);

// Añadir la primera figura al contenedor de cards
$cards.appendChild($figure1);

// Añadir clase a la segunda figura y agregarla al contenedor de cards
$figure2.classList.add("card");
$cards.appendChild($figure2);

// Crear lista de estaciones del año
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
const $ulEstaciones = document.createElement("ul");

// Escribir el título para las estaciones del año
const $h3Estaciones = document.createElement("h3");
$h3Estaciones.textContent = "Estaciones del Año";
document.body.appendChild($h3Estaciones);

// Añadir elementos de lista a la ulEstaciones
estaciones.forEach(estacion => {
    const $li = document.createElement("li");
    $li.textContent = estacion;
    $ulEstaciones.appendChild($li);
});

// Añadir la ulEstaciones al cuerpo del documento
document.body.appendChild($ulEstaciones);

// Crear lista de continentes del mundo
const continentes = ["África", "América", "Asia", "Europa", "Oceanía"];
const $ulContinentes = document.createElement("ul");

// Escribir el título para los continentes del mundo
const $h3Continentes = document.createElement("h3");
$h3Continentes.textContent = "Continentes del Mundo";
document.body.appendChild($h3Continentes);

// Añadir elementos de lista a la ulContinentes utilizando innerHTML
continentes.forEach(continente => {
    $ulContinentes.innerHTML += `<li>${continente}</li>`;
});

// Añadir la ulContinentes al cuerpo del documento
document.body.appendChild($ulContinentes);

// Crear lista de meses del año utilizando un fragmento de documento
const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo",
    "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"
];
const $ulMeses = document.createElement("ul");
const $fragmentMeses = document.createDocumentFragment();

// Añadir elementos de lista a $fragmentMeses utilizando forEach y createElement
meses.forEach(mes => {
    const $li = document.createElement("li");
    $li.textContent = mes;
    $fragmentMeses.appendChild($li);
});

// Escribir el título para los meses del año utilizando document.write
document.write("<h3>Meses del Año</h3>");

// Añadir $fragmentMeses a $ulMeses
$ulMeses.appendChild($fragmentMeses);

// Añadir $ulMeses al cuerpo del documento
document.body.appendChild($ulMeses);
