             // 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
             // 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo
             //  adios mundo", "mundo") devolverá 2.
             // 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro),
             //  pe. mifuncion("Salas") devolverá true.
             // 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5",
             //  "xyz") devolverá  "1, 2, 3, 4 y 5.


// const invertir=function(texto)
// {
//     let t=new String(texto)
//     let textoNuevo=new String()
//     for (let i = t.length; i > 0 ; i--) 
//     {textoNuevo+=t.charAt(i-1)}
//     return textoNuevo
// }
// let text = window.prompt("Introduzca el texto a invertir:")
// console.log(invertir(text))

// const repeticiones=function(texto,palabra)
// {
//     let numero = [];
//     let palabras = texto.split(" ");
//     palabras.forEach(element => {
//         if (element === palabra)
//             numero.push(palabra)
//     });
//     return numero;
// }
// let text = window.prompt("Introduzca el texto :")
// let textNum = window.prompt("Introduzca el texto a encontrar:")
// console.log(repeticiones(text,textNum))

// const palindromo=function(texto)
// {
//     let t=new String(texto)
//     let textoNuevo=new String()
//     for (let i = t.length; i > 0 ; i--) 
//     {textoNuevo+=t.charAt(i-1)}
//     return textoNuevo.toLowerCase()===t.toLowerCase()
// }
// let text = window.prompt("Introduzca el texto :")
// console.log(palindromo(text))


const eliminarPatron=function(texto,borrar)
{
    let palabras = texto.split(" ");
    let arr=[]
    palabras.forEach(element => {
        if (element != borrar)
        {
            arr+=element
        }
    })
    let textoNuevo=new String(arr)
    return textoNuevo
}

let text = window.prompt("Introduzca el texto:")
let borrar = window.prompt("Introduzca el texto a borrar:")
console.log(eliminarPatron(text,borrar))