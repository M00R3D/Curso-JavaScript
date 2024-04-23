let mapa = new Map()
mapa.set("Nombre","Job")
mapa.set("Apellido","Moore")
mapa.set("Edad",20)
console.log(mapa)
console.log(mapa.size)
console.log(mapa.has("Profesion"))
console.log(mapa.has("Nombre"))
console.log(mapa.get("Nombre"))
mapa.delete("Apellido")

mapa.set(20,"veinte")
mapa.set(true,"nada")
mapa.set({},{})

for (const [key,value] of mapa) {
    console.log(`Llave: ${key} , Valor: ${value}`)
}

console.log(mapa)


let mapa2 = new Map([
    ["Nombre", "Job"],
    ["Apellido", "Moore"],
    ["Edad", 20]
]);

let keysObj = {};
let valuesObj = {};

for (const [key, value] of mapa2) {
    keysObj[key] = key;
    valuesObj[key] = value;
}

console.log("Objeto de Llaves:");
console.log(keysObj);
console.log("Objeto de Valores:");
console.log(valuesObj);
