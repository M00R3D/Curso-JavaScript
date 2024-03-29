const a = {}
console.log(a);

const humano=
{
    nombre:"nombre del ser humano",
    apellido:"apellido del ser humano",
    edad:20,
    pasatiempos:["leer","estudiar","ejercitarse","caminar"],
    soltero:false,
    vivo:true,
    contaco:{
        email:"email@hotmail.com",
        celular:6134872047
    },
    saludo:function() {
        console.log(`hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}

console.log(humano)
console.log(humano.apellido)
console.log(humano.edad)
console.log(humano.soltero)
console.log(humano.contaco.celular)
humano.saludo()
console.log(Object.keys(humano))//Metodo del prototipo object que nos regresa el nombre de cada propiedad
console.log(Object.values(humano))//Metodo del prototipo object que nos regresa cada uno de los valores internos
console.log(humano.hasOwnProperty("nombre"))//nos regresa si un objeto contiene dicha propiedad
