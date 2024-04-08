console.log(console)
console.error("Esto es un error creado por job")
console.warn("Esto es un warn creado por job")
console.info("Esto es un mensaje informativo creado por job")
console.log("Esto es un registro de operacion del programa creado por job")

console.log(window)//imprimir el objeto ventana
console.log(document)//imprimir el documento html
console.dir(document)//imprimir a modo de directorio

console.groupCollapsed("Colores")
console.log("Rojo")
console.log("Verde")
console.log("Azul")
console.groupEnd()

console.table(Object.entries(console))

const objeto=
{
    a:"a",
    b:"b",
    c:"c"
}
const arreglo=["a","b","c"]

console.table(objeto)
console.table(arreglo)

console.time("Cuanto tarda en ejecutarse:")
arregloGrande= Array(1000000)
for (let i = 0; i < arregloGrande.length; i++) 
{
    arregloGrande[i]=i
    console.count("cuantas veces se ejecuto el for:")
}
console.timeEnd("Cuanto tarda en ejecutarse:")
