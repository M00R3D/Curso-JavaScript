// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes
//, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.


const vocalesConsonantes=function(texto)
{
    let t= new String(texto)
    let caracter
    let vocales=0
    let consonantes=0
    for (let a = 0; a <= t.length; a++) {
        caracter=t.charAt(a)        
        switch (caracter) {
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":    
                    vocales++
                break;
        
            default:
                    if(caracter!=" "){consonantes++}
                break;
        }
    }
    return(`vocales=${vocales} consonantes=${consonantes}`)
}
let text = window.prompt("introduzca el texto")
console.log(vocalesConsonantes(text))



