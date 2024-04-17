            // 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros
            //  ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8],
            //      desc: [8,7,7,6,5] }.
            // 25) Programa una función que dado un <arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10",
            //  10, true, true]) devolverá ["x", 10, 2, "10", true].
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

// const ascDesc = function(arr)
// {
//     let reg=    /^[0-9]+$/
//     let arrAsc=[]
//     let arrDesc=[]
//     if(arr!=null && reg.test(arr)) 
//     {
//         let numeros = arr.split('').map(Number)
//         arrAsc = [...numeros]
//         arrDesc = [...numeros]
//         arrAsc.sort()
//         arrDesc.sort((a, b) => b - a)
//         return { arrAsc, arrDesc }
//     }else{return "solo debes introducir numeros"}
// }
// let text = window.prompt("introduzca el arreglo de numeros(no es necesario separar)")
// console.log(ascDesc(text))



// const borrarDuplicados = function(arr)
// {
//     if(arr!=null) 
//     {
//         let elementosNuevos = []
//         let elementosExistentes = []
//         for (const x of arr) 
//         {
//             if (!elementosExistentes.includes(x)) 
//             {
//                 elementosNuevos.push(x)
//                 elementosExistentes.push(x)
//             }
//         }
//         return { elementosNuevos}
//     }else{return "solo debes introducir numeros"}
// }
// let text = ["x", 10, "x", 2, "10",10, true, true]
// console.log(borrarDuplicados(text))







const promedio = function(arr)
{
    let reg=    /^[0-9]+$/
    let suma = 0
    if(arr!=null && reg.test(arr)) 
    {
        let arreglo = arr.split('').map(Number)
        for (const a of arreglo) {
            suma+=a
        }
        return {suma}
    }else{return "solo debes introducir numeros"}
}
let text = window.prompt("introduzca el arreglo de numeros(no es necesario separar)")
console.log(promedio(text))