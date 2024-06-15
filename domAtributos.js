// console.log(document.documentElement.lang)
// console.log(document.documentElement.getAttribute("lang"))
// console.log(document.querySelector(".link-dom").href)
// console.log(document.querySelector(".link-dom").getAttribute("href"))
// document.documentElement.lang="en"
// console.log(document.documentElement.lang)
// document.documentElement.setAttribute("lang","es-MX")
// console.log(document.documentElement.lang)

const $linkDOM = document.querySelector(".link-dom")

// $linkDOM.setAttribute("target","blank")
// $linkDOM.setAttribute("rel","noopener")
// console.log($linkDOM.hasAttribute("rel"))
// $linkDOM.setAttribute("href","https//www.google.com")
// $linkDOM.removeAttribute("rel")
// console.log($linkDOM.hasAttribute("rel"))

// //DATA ATRIBUTES
// console.log($linkDOM.getAttribute("data-description"))
// console.log($linkDOM.dataset)
// console.log($linkDOM.dataset.description)


console.log($linkDOM.style)
console.log($linkDOM.getAttribute("style"))
console.log($linkDOM.style.backgroundColor)                     //puedes imprimir propiedades de estilos CSS con cammel case
console.log(window.getComputedStyle($linkDOM))
console.log(window.getComputedStyle($linkDOM).getPropertyValue("background-color"))



$linkDOM.style.setProperty("text-decoration","none")
$linkDOM.style.setProperty("display","block")
$linkDOM.style.width="10%"
$linkDOM.style.marginLeft="auto"
$linkDOM.style.marginRight="auto"
$linkDOM.style.padding="1rem"
$linkDOM.style.borderRadius="1rem"




//Variables css
const $html = document.documentElement
const $body = document.body



let darkColor = getComputedStyle($html).getPropertyValue("--dark-color").trim()
let greenColor = getComputedStyle($html).getPropertyValue("--green-color").trim()

console.log(darkColor,greenColor)
$body.style.backgroundColor = darkColor;
$body.style.color = greenColor;


$html.style.setProperty("--dark-color","pink")

const $card = document.querySelector(".card")

console.log($card)
console.log($card.className)
console.log($card.classList)
console.log($card.classList.contains("rotate-45"))
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"))
console.log($card.className)
console.log($card.classList)
$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")
$card.classList.replace("rotate-45","rotate-145")

$card.classList.add("opacity-80","sepia")
$card.classList.remove("opacity-80","sepia")
$card.classList.toggle("opacity-80","sepia")
