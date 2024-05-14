const persona = {
    "nombre": "Juan",
    "apellido": "Pérez",
    "edad": 30,
    "ciudad": "Ciudad de México",
    "casado": false,
    "hobbies": ["leer", "correr", "cocinar"],
    "direccion": {
        "calle": "Calle Principal",
        "numero": 123,
        "codigoPostal": "12345"
    }
}

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.hobbies[0])
console.log(persona.direccion.calle)

console.log(JSON)

const jsonPersona = JSON.stringify(persona)
console.log(jsonPersona)
const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 }
]
const jsonArray = JSON.stringify(personas)
console.log(jsonArray)
console.log(JSON.stringify(null))
console.log(JSON.stringify(undefined))
console.log(JSON.stringify(true))
console.log(JSON.stringify(false))
const jsonString = '{"nombre":"Juan","apellido":"Pérez","edad":30,"ciudad":"Ciudad de México","casado":false,"hobbies":["leer","correr","cocinar"],"direccion":{"calle":"Calle Principal","numero":123,"codigoPostal":"12345"}}';
const parsedPersona = JSON.parse(jsonString)
console.log(parsedPersona)
console.log(parsedPersona.nombre)
console.log(parsedPersona.edad)
console.log(parsedPersona.hobbies[0])
console.log(parsedPersona.direccion.calle)
