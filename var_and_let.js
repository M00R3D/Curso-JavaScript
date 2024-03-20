var holaGlobal = "Esta es una variable global"
let holaBloque = "Esta es una variable de bloque"
    console.log(holaGlobal)
    console.log(holaBloque)
    // console.log(window)
    console.log(window.holaGlobal)
    console.log(window.holaBloque)


var color = "Rojo"
console.log("Valor del color antes del bloque",color)
{
    var color = "Azul"
    console.log("Valor del color adentro del bloque",color)
}
console.log("Valor del color despues del bloque",color)
    
        console.log(window.holaBloque)

let color2 = "Rojo"
console.log("Valor del color antes del bloque",color2)
{
    let color2 = "Azul"
    console.log("Valor del color adentro del bloque",color2)
}
console.log("Valor del color despues del bloque",color2)