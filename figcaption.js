const $figure = document.createElement("figure"),
      $img = document.createElement("img"),
      $figcaption = document.createElement("figcaption"),
      $figcaptionText = document.createTextNode("Animals"),
      $cards = document.querySelector(".cards"),
      $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://imgs.search.brave.com/cscmcZR4UspehZ76sCpE9HGRr5DuFxetluxc5e77MCE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Z2l2ZS1tZS15b3Vy/LWJlc3QtYmxlYWNo/LXJlYWN0aW9uLXBp/Y3R1cmVzLXYwLTJv/OXo5enI5OW90YjEu/anBlZz93aWR0aD0x/MDEzJmZvcm1hdD1w/anBnJmF1dG89d2Vi/cCZzPTcwNzcxMmY4/OTVhMDhlNGYxNTRj/OGFiM2E3YmVlNTI3/OTYwZjI4ZmU");
$img.setAttribute("alt", "Animals");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);


$figure2.innerHTML=`
            <img src="https://imgs.search.brave.com/PxObdbL-tyI1HBXDZvrRXk3qmL-YafJ7JKK1suszQ5w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hhdC1pcy10aGUt/d2lsZGVzdC1ibGVh/Y2gtcGhvdG8teW91/LWhhdmUtdjAtYXNl/ZnZydnJ2MzljMS5q/cGVnP3dpZHRoPTEy/NDImZm9ybWF0PXBq/cGcmYXV0bz13ZWJw/JnM9NjIzYmMxNjU0/ODA5YTNhMjZjY2E1/NGFiZmM2NWI4NDRm/NTIzODllYg" alt="Imagen 1">
            <figcaption>Tech</figcaption>
            `
$figure2.classList.add("card")
$cards.appendChild($figure2)

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
      $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});


