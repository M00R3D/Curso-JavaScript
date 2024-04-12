                        // 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// 10) Programa una función que reciba un número y evalúe si es capicúa o 
// no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// 11) Programa una función que calcule el factorial de un número (El factorial de un 
// entero positivo n, se define como el producto de todos los números enteros positivos 
// desde 1 hasta n), pe. miFuncion(5) devolverá 120.


// const randomN=()=> Math.round(500+Math.random()*100)
// console.log(randomN()); 

// const palindromo = function(n) {
//     let num = n.toString(); 
//     let newNum = '';
//     for (let i = num.length - 1; i >= 0; i--) { 
//         newNum += num.charAt(i);
//     }
//     return newNum === num;
// }

// let text = window.prompt("Introduzca el numero :");
// console.log(palindromo(text));

const fact = function(n)
{
    let a =n
    for (let x = n-1; x > 0; x--) 
    {
        a*=x
    }

    return a
}

let text = window.prompt("Introduzca el numero :");
console.log(fact(text));