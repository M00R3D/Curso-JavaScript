let numeros=[1,2,3,4,5,6,7,8,9,0]

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
    if(i===5){break;}//el break, deshace el bloque al que pertenece y se deja de ejectuar dicho bloque
}

//ahora falta encontrar la forma de diferenciar el continue de el flujo normal
let a=0
while (a<numeros.length) {
    console.log(numeros[a])
    a++
    if(a===5){continue;}
}