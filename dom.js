let texto = "este es un texto en un dato de tipo strAng"
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
hablar(texto)
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.doctype)
console.log(document.charset)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)
console.log(document.getElementsByTagName("img"))
console.log(document.getElementsByClassName("card"))
console.log(document.querySelector("A"pkipkcdbd))
console.log(document.querySelectorAll("A"))
document.querySelectorAll("A").forEach((el)=>console.log(el))
let str = "afssaf"

setTimeout(() => {
    console.log(document.getSelection.toString())
}, 3000);
document.body.innerHTML += '<h2>hola mundo desde el doc</h2>';
console.log(document.querySelectorAll("card"))
console.log(document.querySelector("card"))
console.log(document.querySelectorAll(".card"))
console.log(document.querySelector("#menu li"))

