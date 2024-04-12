                // 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) 
                //o no, pe. miFuncion(7) devolverá true.
                // 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.


// const primo = function(n)
// {
//     let flag=false
//     for (let x = n; x > 0; x--) 
//     {
//         if(n%x!=0)
//         {
//             flag=false
//         }
//         else{flag=true}
//     }
//     return flag
// }
// let text = window.prompt("Introduzca el numero:")
// console.log(primo(text));


// const parImpar=(n)=> (n%2==0)
// let text = window.prompt("Introduzca el numero:")
// console.log(parImpar(text));


const celsFar = function(n,tipo)
{
    switch (tipo) 
        {case "F":
         case "f":
            let b = (5/9) * (n - 32);
            return "Celsius:"+b.toFixed(2)
        case "C":
        case "c":
            let a=(((9/5)*n)+32)
            return "Farenheit:"+a.toFixed(2)
            
        default:
            return "Tipo de conversión inválida";
        }
}

let temp = parseFloat(window.prompt("Introduzca el número:"));
let tipo = window.prompt("Introduzca el tipo (C para Celsius, F para Fahrenheit):");
console.log(celsFar(temp, tipo));
