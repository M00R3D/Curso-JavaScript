
let a
const PI =3.1416
// const CONSTANTE_VACIA ----no podemos declarar una constante sin darle ningun valor
console.log(PI)

a = "esta es una variable que se declaro anterior mente y ahora se le da valor"
console.log(a)

const objeto = 
{
    nombre:"Job",
    edad:20
}
//CABE ACLARAR QUE EN EL CASO DE LOS OBJETOS A PESAR DE SER CONST PODEMOS MODIFICAR SUS PROPIEDADES EN EL FLUJO DE NUESTRO CODIGO
const colores=["Amarillo","Azul","Blanco","Rojo"]

console.log(objeto)
console.log(colores)

objeto.genero="masculino"
colores.push("Purpura")

console.log(objeto)
console.log(colores)