// los symbol nos sirven para añadir propiedades privadas las cuales no seran vistas desde los metodos
// que muestran todas las propiedades de un objeto

let id = Symbol("id1")
let id2 = Symbol("id2")

console.log(typeof(id)===typeof(id2))
console.log(typeof(id),typeof(id2))

const NOMBRE = Symbol()
const SALUDAR = Symbol()

const humano ={
    [NOMBRE]:"job"
}
console.log(humano)
console.log(humano.NOMBRE)
console.log(humano[NOMBRE])

humano[SALUDAR]=function(){
    console.log("hola")
}
console.log(humano)
humano[SALUDAR]()