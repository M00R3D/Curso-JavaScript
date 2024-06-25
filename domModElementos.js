// Seleccionamos el elemento con la clase "cards"
const $cards = document.querySelector(".cards");

// Creamos un nuevo elemento "figure"
const $newCard = document.createElement("figure");

// Contenido de la nueva tarjeta (imagen y figcaption)
let $contentCard = `
  <img src="https://imgs.search.brave.com/PxObdbL-tyI1HBXDZvrRXk3qmL-YafJ7JKK1suszQ5w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hhdC1pcy10aGUt/d2lsZGVzdC1ibGVh/Y2gtcGhvdG8teW91/LWhhdmUtdjAtYXNl/ZnZydnJ2MzljMS5q/cGVnP3dpZHRoPTEy/NDImZm9ybWF0PXBq/cGcmYXV0bz13ZWJw/JnM9NjIzYmMxNjU0/ODA5YTNhMjZjY2E1/NGFiZmM2NWI4NDRm/NTIzODllYg" alt="Any">
  <figcaption></figcaption>
`;

// Añadimos la clase "card" al nuevo elemento figure
$newCard.classList.add("card");

// Insertamos el contenido HTML dentro del nuevo elemento figure
$newCard.insertAdjacentHTML("beforeend", $contentCard);

// Añadimos el texto "Any" dentro del figcaption del nuevo elemento figure
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

// Insertamos la nueva tarjeta como primer hijo del elemento con la clase "cards"
$cards.insertAdjacentElement("afterbegin", $newCard);
