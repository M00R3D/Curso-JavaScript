let verdadero = true
let falso = false
let v = Boolean(true)
let f = Boolean(false)

console.log(verdadero,falso,v,f)
console.log(typeof(verdadero),typeof(falso),typeof(v),typeof(f))

console.log(Boolean(0))
console.log(Boolean(-616))
console.log(Boolean(""))
console.log(Boolean(" "))

// Falsy:(valores que dentro del Boolean nos regresarian false)
    // false
    // 0
    // -0
    // 0n (BigInt cero)
    // "" (cadena vacía)
    // null
    // undefined
    // NaN (Not a Number)

// Truthy:(valores que dentro del Boolean nos regresarian true)
    // Cualquier número que no sea cero (1, -1, 0.5, etc.)
    // Cualquier string que no sea una cadena vacía ("texto", " " , "false", etc.)
    // true
    // Objetos ({}, [], new Object(), etc.)
    // Funciones (definidas y no definidas)
    // Instancias de clases personalizadas
    // Cualquier otro valor que no esté en la lista de valores falsy