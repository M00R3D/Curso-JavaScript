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
        this.paradigma=null
    }

    actualizar()
    {
        console.log("Este dispositivo se ha actualizado")
    }
    
    get getParadigma(){return this.paradigma}
    set setParadigma(x){this.paradigma=x}

    static metodoEstatico(){return "este metodo se puede usar sin crear un objeto"}
}

const celular= new Item(5000,"grande",1.025,1)
celular.caracteristicas()
celular.sumarPrecio(2000)

const mouse = new Tecnologia(2000,"chico",1.203,2,"periferico")
mouse.actualizar()
mouse.caracteristicas()
console.log(mouse.getParadigma)
mouse.setParadigma="Movimiento"
console.log(mouse.getParadigma)
console.log(Tecnologia.metodoEstatico())
console.log(mouse.metodoEstatico())
// Los metodos estaticos pueden ser utilizados unicamente sin crear el objeto 
// al que pertenecen, y los getters y setters funcionan bastante similar a otros
// lenguajes solo que en vez de administrarse como funciones son administrados como propiedades
