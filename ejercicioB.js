
// Desafío de JavaScript:

// Crear un simulador de gestión de recursos para una colonia espacial. La colonia necesita administrar su suministro de energía, agua y alimentos para garantizar la supervivencia 
// de sus habitantes. Deberás diseñar un programa que cumpla con los siguientes requisitos:
                                            // Implementar una función autoejecutable que inicialice los recursos disponibles y establezca los parámetros iniciales del juego.
// Utilizar objetos para representar los recursos disponibles y sus propiedades (por ejemplo, cantidad actual, tasa de producción, tasa de consumo, etc.).
// Permitir al usuario realizar acciones como construir nuevas infraestructuras para aumentar la producción de recursos, asignar prioridades de distribución de recursos, y resolver emergencias.
// Utilizar funciones autoejecutables adicionales para simular el paso del tiempo dentro del juego, donde los recursos se consumen y producen de acuerdo con sus tasas respectivas.
// Implementar un sistema de alertas que notifique al jugador sobre eventos importantes, como escasez de recursos o emergencias.
// Utilizar técnicas de visualización para mostrar gráficamente la evolución de los recursos y la situación general de la colonia.
// // El desafío consiste en diseñar un simulador interactivo que permita al jugador tomar decisiones estratégicas para administrar eficientemente los recursos de la colonia espacial
// , utilizando funciones autoejecutables para controlar el flujo del juego y mantener una experiencia dinámica y desafiante.



(function (){
    let oro=0,casas=0,plantas=0,guerreros=0
    console.log(`oro:${oro},casas:${casas},plantas:${plantas},guerreros:${guerreros}`)
    let vueltas=0
    console.log(`numero de vueltas ejecutadas en el juego${vueltas}`)
})();


class Recurso
{
    constructor(cantidad,valor)
    {
        this.cantidad=cantidad
        this.valor=valor
    }

    get getCantidad(){return this.cantidad}
    set setCantidad(x){this.cantidad=x}
    get getValor(){return this.Valor}
    set setValor(x){this.Valor=x}
    
}

class Oro extends Recurso
{
    constructor(cantidad,valor)
    {
        super(cantidad)
        valor=1
    }
    get getCantidad(){return this.cantidad}
    set setCantidad(x){this.cantidad=x}
    get getValor(){return this.Valor}
    set setValor(x){this.Valor=x}
    

}
class Casas extends Recurso
{
    constructor(cantidad,valor)
    {
        super(cantidad)
        valor=5000
    }
    get getCantidad(){return this.cantidad}
    set setCantidad(x){this.cantidad=x}
    get getValor(){return this.Valor}
    set setValor(x){this.Valor=x}
    

}
class Plantas extends Recurso
{
    constructor(cantidad,valor)
    {
        super(cantidad)
        valor=50
    }
    get getCantidad(){return this.cantidad}
    set setCantidad(x){this.cantidad=x}
    get getValor(){return this.Valor}
    set setValor(x){this.Valor=x}
    

}
class Guerreros extends Recurso
{
    constructor(cantidad,valor)
    {
        super(cantidad)
        valor=500
    }
    get getCantidad(){return this.cantidad}
    set setCantidad(x){this.cantidad=x}
    get getValor(){return this.Valor}
    set setValor(x){this.Valor=x}
    

}
