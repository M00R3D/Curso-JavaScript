console.log(this)
console.log(window)
console.log(this===window)

this.propiedad="valordepropiedaddelwindow"
console.log(propiedad)
console.log(this.propiedad)
function imprimir()
{
    console.log(this.nombre)
}
imprimir()

const obj={
    nombre:"contexto obj",
    imprimir:function(){
    console.log(this.nombre)
    }
}
const obj2={
    nombre:"contexto obj2",
    imprimir
}
obj2.imprimir()

const obj3={
    nombre:"contexto obj3",
    imprimir:()=>{
    console.log(this.nombre)
    }
}
obj3.imprimir()