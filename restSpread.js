function sumar(a,b,...c) ///si ponemos ... significa que declaramos un parametro
{               ///un parametro del tipo rest
    let resultado=(a+b)
    c.forEach(function(n) {
        resultado+=n
    })

    return resultado
}
console.log(sumar(1,2))
console.log(sumar(1,2,3))
console.log(sumar(1,2,3,4))
console.log(sumar(1,2,3,4,5))
console.log(sumar(1,2,3,4,5,6))
console.log(sumar(1,2,3,4,5,6,7))

arregloA=[1,2,3,4,5]
console.log("arregloA",arregloA)
arregloB=[6,7,8,9,0]
console.log("arregloB",arregloB)
arregloMalHecho=[arregloA,arregloB]
console.log("arregloMalHecho",arregloMalHecho)
arregloAb=[...arregloA,...arregloB]//como podemos 
//observar podemos usar la notacion rest para concatenar
//  por elementos y no por objeto o arreglo
console.log("arregloAb",arregloAb)
