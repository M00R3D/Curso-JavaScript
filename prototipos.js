function Humano(nombre,edad)
{
    this.nombre=nombre
    this.edad=edad

    // this.saludar = function()
    // {
    //     console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    //     // console.log("Hola Mundo");
    // }//esto consumiria mucho espacio al crear cada funcion en cada objeto tipo humano
}
Humano.prototype.saludar = function()//asi declaramos la funcion de forma que no gaste tanta memoria
    {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
        // console.log("Hola Mundo");
    }

function Programador(nombre,edad,lenguaje)
{
    this.super=Humano//definir super como el prototipo padre
    this.super(nombre,edad)//heredar parametros con super
    this.lenguaje=lenguaje//parametros propios de este hijo
}

Programador.prototype=Humano//herencia
Programador.prototype.constructor=Programador//declarar constructor propio
Programador.prototype.mencionarLenguaje=function() {//crear funcion en hijo
    console.log(`mi lenguaje favorito para programar es: ${this.lenguaje}`)
}
Programador.prototype.saludar=Humano.prototype.saludar///pasar funciones de padre a hijo
const carlos=new Humano("Carlos",30),ivan=new Humano("Ivan",20)
console.log(carlos)
console.log(ivan)
carlos.saludar()
ivan.saludar()

const job = new Programador("Job",20,"Lua")
console.log(job)
job.saludar()
job.mencionarLenguaje()