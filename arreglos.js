const a = []
// const b = [1,true,"hola",["A","B","C",[1,2,3]]]

console.log(a)
// console.log(b)
// console.log(b.length)////longitud del arreglo
// console.log(b[2])
// console.log(b[0])
// console.log(b[3])
// console.log(b[3][2])////mostrar el tercer elemento del primer arreglo anidado
// console.log(b[3][3][0])

const c = Array.of("X","Y","Z",9,8,7)///Estafuncion nos sirve dentro de un parentesis
console.log(c)

const d = Array(100).fill(false)
console.log(d)

const e = new Array()
console.log(e)

const f = new Array(1,2,3,true,false)
console.log(f)

const colors=new Array("rojo","azul","rosa")
console.log(colors)
colors.push("Negro")
console.log(colors)
colors.pop()
console.log(colors)

colors.forEach(function (element,index) {
  console.log(`<li id=${index}>${element}</li>`);  
})