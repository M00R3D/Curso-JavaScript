class Item
{
    constructor(precio,tamanio,peso,cantidad)
    {
        this.precio=precio
        this.tamanio=tamanio
        this.peso=peso
        this.cantidad=cantidad
    }

    caracteristicas()
    {
        console.log(`precio=${this.precio},tamanio=${this.tamanio},peso=${this.peso},cantidad=${this.cantidad}`)
    }

    sumarPrecio(suma)
    {
        this.precio+=suma
        console.log(`el precio ha subido, ahora es de $${this.precio}`);
    }
}

class Tecnologia extends Item
{
    constructor(precio,tamanio,peso,cantidad,tipo)
    {
        super(precio,tamanio,peso,cantidad)
        this.tipo=tipo
    }

    actualizar()
    {
        console.log("Este dispositivo se ha actualizado")
    }

}

const celular= new Item(5000,"grande",1.025,1)
celular.caracteristicas()
celular.sumarPrecio(2000)

const mouse = new Tecnologia(2000,"chico",1.203,2,"periferico")
mouse.actualizar()
mouse.caracteristicas()