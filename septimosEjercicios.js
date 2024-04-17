                // 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5])
                //  devolverá [1, 16, 25].
                // 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60])
                //  devolverá [99, -60].
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los
//  números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

// const alCuadrado = function(arr)
// {
//     let reg=    /^[0-9]+$/
//     if(arr!=null && reg.test(arr)) 
//     {let arreglo =[]
//     for (let x = 0; x < arr.length; x++) {
//         arreglo.push(arr[x]*arr[x])
//     }
//     return arreglo}
//     else{return "solo debes introducir numeros"}
// }
// let text = window.prompt("introduzca el arreglo de numeros(no es necesario separar)")
// console.log(alCuadrado(text))

// const mayorMenor = function(arr)
// {
//     let reg=    /^[0-9]+$/
//     if(arr!=null && reg.test(arr)) 
//     {  let max = Math.max(...arr)
//         let min = Math.min(...arr)
//         return { max, min }
//     }else{return "solo debes introducir numeros"}
// }
// let text = window.prompt("introduzca el arreglo de numeros(no es necesario separar)")
//  console.log(mayorMenor(text))


const dosArreglos = function(arr)
{
    let reg=    /^[0-9]+$/
    let arrImpar=[]
    let arrPar=[]
    if(arr!=null && reg.test(arr)) 
    {
        for (const e of arr) {
            if(e%2 == 0){arrPar=arrPar.concat(e)}
            else if(e%2 != 0){arrImpar=arrImpar.concat(e)}
        }
        return {arrImpar,arrPar}
    }else{return "solo debes introducir numeros"}
}
let text = window.prompt("introduzca el arreglo de numeros(no es necesario separar)")
console.log(dosArreglos(text))
