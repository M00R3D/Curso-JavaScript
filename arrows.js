// const funcionSuma = function(a,b,c)
// {
//     console.log(a+b+c)
// }

// const flechaSuma = (a,b,c)=>console.log(a+b+c)//Este tipo de funciones nos ayuda a reducir el tamaño
//de la sintaxis de cada funcion que creamos

// funcionSuma(1,0,1)
// flechaSuma(1,2,3)



// const sumar = function(a,b)
// {
//     return a+b
// }

const sumar = (a,b) => a+b
console.log("arrow function de suma  sumar(1,2):",sumar(1,2))


const numeros = [1,2,3,4,5]

// numeros.forEach(function(elemento,posicion)
// {
//     console.log(`Elemento:${elemento}   Posicion:${posicion}`)
// }              )

numeros.forEach((elemento,posicion)=>
console.log(`Elemento:${elemento}   Posicion:${posicion}`))


const objetoA=
{
    nombre:"Objeto"
    ,
    funcionBloque:function()
        {
        console.log(this)
        }
    ,
    funcionFlecha : () =>console.log(this)
}
objetoA.funcionBloque()
objetoA.funcionFlecha()///al declarar una arrow function dentro de un objeto, esta se creara realmente
//dentro del objeto window, ya que al no tener llaves, no respeta la logica de bloques
//Similar a crear un var(Arrow) en lugar de un let(Funcion Clasica)