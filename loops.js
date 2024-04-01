let contador=0

while (contador<=10) {
    console.log("while",contador)
    contador++
}
contador-=10
do {
    console.log("do while",contador)
    contador++
} while (contador<=10)

for (let index = 0; index <= 10; index++) 
{
    console.log("for",index)   
}

let colores=["rojo","verde","azul","negro","blanco"]
for (let index = 0; index <= colores.length; index++) 
{
    console.log("for",colores[index])    
}


const espada=
{
    material:"hierro",
    costo:5000,
    permisos:"necesarios",
    tamanio:"mediano"
}



//el for in nos sirve para buscar keys en un object, y sus parametros son key(en este caso propiedad, variable que usaremos en el log)
//y el otro parametro es espada, es decir el objeto que ya hemos creado justo arriba
for (const propiedad in espada) 
{
    console.log(`Key:${propiedad}   Value:${espada[propiedad]}`);
}

///mientras que el for of nos sirve mas para realizar procesos similares usando arreglos y cadenas
for (const elemento of colores) {
    console.log("forof",elemento)
}

let cadena="Esta es una cadena de texto conformada por multiples caracteres"
for (const caracter of cadena) {
    console.log(caracter);
}