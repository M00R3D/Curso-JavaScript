////////////al programar de esta manera al superponer los console.log
////////////nos traera el problema de que se imprimira todo el contenido de la funcion
// function miPrimeraFuncion()
// {
//     console.log("a")
//     console.log("b")
//     console.log("c")
//     return "este es el valor que regresa la funcion"
// }
// miPrimeraFuncion()
// console.log(miPrimeraFuncion)
////OUTPUT:
////{
////console.log("a")
////console.log("b")
////console.log("c")
////return "este es el valor que regresa la funcion"
////}

function miPrimeraFuncion()
{
    console.log("a")
    return 1  ///cabe revisar que el return corta las lineas inferiores que haya y no se ejecutaran
    console.log("b")
    console.log("c")
    return "este es el valor que regresa la funcion"
}
// miPrimeraFuncion()
let variableQueContieneReturn=miPrimeraFuncion()
console.log(variableQueContieneReturn)


function saludo (nombre="SinNombre",edad)
{
    console.log(`hola mi nombre es ${nombre} y tengo ${edad} años`)
}

saludo()//si no le damos un valor a los parametros dentro de la declaracion de la funcion
        // entonces nos regresaran un valor null si tampoco les asignamos un valor al
        //llamarla
saludo("Job",20)

funcionDeclarada()
function funcionDeclarada()
{
    console.log("Esta funcion se puede invocar despues o incluso antes de declararse")    
}
funcionDeclarada()


//funcionExpresada() por lo cual no debemos invocar este tipo de funciones arriba de su declaracion
//se le conoce como funcion anonima cuando la declaramos asi
const funcionExpresada = function ()
{
    console.log("Esta funcion tira error al invocar antes de declararse")    
}
funcionExpresada()