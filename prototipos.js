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
Humano.prototype.saludar = function()
    {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
        // console.log("Hola Mundo");
    }

const carlos=new Humano("Carlos",30),ivan=new Humano("Ivan",20)
console.log(carlos)
console.log(ivan)
carlos.saludar()
ivan.saludar()