let a = 6
let b = new Number(5)//al crearlo con constructor pasa algo similar al string que nos puede decir mas propiedades en la consola
let c = 6.552
let d = "9.12419"

console.log(a,b);
console.log(c.toFixed(2));//el metodo to fixed nos dara el numero decimal con el numero de decimales que 
console.log(c.toFixed(6));//le pongamos en el parametro

console.log(parseInt(c))//parseint puede convertir decimales en enteros

console.log(typeof(c),typeof(d))//typeof nos regresa el tipo de valor de la variable ingresada

console.log(a+b)
console.log(c+d)//si intentamos sumar un numero y un string salen juntos
console.log(c+parseInt(d))//con parseInt podemos incluso convertir un string a number