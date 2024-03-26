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






// a.push(4); // Agrega el elemento 4 al final del arreglo 'a'
// a.unshift(0); // Agrega el elemento 0 al principio del arreglo 'a'
// a.pop(); // Elimina el último elemento del arreglo 'a'
// a.shift(); // Elimina el primer elemento del arreglo 'a'
// a.concat([5, 6]); // Retorna un nuevo arreglo concatenando 'a' con [5, 6]
// a.slice(1, 3); // Retorna un nuevo arreglo con elementos desde el índice 1 hasta el 2 de 'a'
// a.indexOf(3); // Retorna el índice del primer elemento igual a 3 en 'a', o -1 si no está presente
// a.includes(2); // Retorna true si 'a' contiene el elemento 2, de lo contrario false
// a.reverse(); // Invierte el orden de los elementos en 'a'
// a.sort(); // Ordena los elementos de 'a' alfabéticamente o numéricamente
// a.map(x => x * 2); // Retorna un nuevo arreglo con cada elemento de 'a' duplicado
// a.filter(x => x > 3); // Retorna un nuevo arreglo con elementos de 'a' mayores que 3
// a.every(x => x > 0); // Retorna true si todos los elementos de 'a' son mayores que 0, de lo contrario false
// a.some(x => x > 5); // Retorna true si al menos un elemento de 'a' es mayor que 5, de lo contrario false
// a.reduce((acc, curr) => acc + curr, 0); // Retorna la suma de todos los elementos de 'a'
// a.join(", "); // Retorna una cadena con todos los elementos de 'a' separados por coma y espacio
// a.find(x => x > 4); // Retorna el primer elemento de 'a' mayor que 4, o undefined si no hay ninguno
// a.findIndex(x => x === "hola"); // Retorna el índice del primer elemento "hola" en 'a', o -1 si no está presente
