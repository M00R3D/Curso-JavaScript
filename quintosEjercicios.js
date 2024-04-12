// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
            // 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
            //pe. miFuncion(1000, 20) devolverá 800.
            // 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
            //pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// const binaria =function(n,tipo)
// {
//     if (tipo === "2") {
//         let bin = parseInt(n, 2);
//         return bin;
//     } else if (tipo === "10") {
//         let dec = Number(n);
//         return dec.toString(2);
//     } else {
//         return "Base no soportada (solo 2 y 10)";
//     }
// }

// let num = window.prompt("introduzca el numero")
// let tipo = window.prompt("introduzca el tipo")
// console.log(binaria(num,tipo))

// const descontar = (cantidad,descuento)=>((cantidad)-(cantidad*0.01*descuento))
// let cantidad = window.prompt("introduzca la cantidad")
// let descuento = window.prompt("introduzca el porcentaje de descuento")
// console.log(descontar(cantidad,descuento))


const aniosPasados = function(date)
{
    let d = new Date(date)
    let usable = new Date()
    if (d.getMonth()<usable.getUTCMonth())
    {
        return (usable.getUTCFullYear()-d.getFullYear())
    }else{return (usable.getUTCFullYear()-d.getFullYear())-1}
}

console.log(aniosPasados(new Date(2003,3,23)))