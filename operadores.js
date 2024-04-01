// Operadores aritméticos
// -------------------------------------------
let a = 10;
let b = 5;

let suma = a + b;
console.log("Suma:", suma);

let resta = a - b;
console.log("Resta:", resta);

let multiplicacion = a * b;
console.log("Multiplicación:", multiplicacion);

let division = a / b;
console.log("División:", division);

let modulo = a % b;
console.log("Módulo:", modulo);
// Comparadores de Relación
// -------------------------------------------
let x = 10;
let y = 5;

let igualdad = x == y;
console.log("Igualdad:", igualdad);

let mayorQue = x > y;
console.log("Mayor que:", mayorQue);

let menorQue = x < y;
console.log("Menor que:", menorQue);

let mayorOIgualQue = x >= y;
console.log("Mayor o igual que:", mayorOIgualQue);

let menorOIgualQue = x <= y;
console.log("Menor o igual que:", menorOIgualQue);

// -------------------------------------------
// "=" significa asignacion, "==" significa igualdad de valores ,
//            "==="significa igualdad de tipo de variable y valor
let asignacion = 7
// -------------------------------------------
console.log(7==7)
console.log("7"==7)
console.log(7==7)
console.log(0==false)
// -------------------------------------------
console.log(7===7)
console.log("7"===7)
console.log(7===7)
console.log(0===false)



//INCREMENTOS Y DECREMENTOS
// -------------------------------------------
let i = 1
i+=1
console.log("Incremento(+=)",i);
i-=1
console.log("Decremento(-=)",i);
// -------------------------------------------
// OPERADOR UNARIO
let u = 2
console.log(++u)//en ocasiones este operador no llega a sumar antes de imprimir en la misma linea del console log
console.log(u++)
u++
console.log(u)
u--
console.log(u)
++u
console.log(u)
--u
console.log(u)


// -------------------------------------------
//OPERADORES LOGICOS
console.log("!true",!true)///!NOT se encarga de negar o regresarnos el valor contrario al que afecta
console.log("!false",!false)
console.log(" ´9´ ===9 || 9===9","9"===9 || 9===9)/// || OR se encarga de regresarnos el valor ya sea
                                                    ///de una o dos condicionales, con que uno sea verdadero
                                                    ///nos devolvera true
console.log(" ´9´ ===9 && 9===9","9"===9 && 9===9)/// && AND se encarga de regresarnos el valor ya sea
                                                    ///de una o dos condicionales, tienen que ser ambos true para que 
                                                    ///nos devuelva true