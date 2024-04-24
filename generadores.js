function cuadrado(valor) 
{
    setTimeout(() => {
        return console.log({valor,resultado:valor*valor})
    }, Math.random()*1000);
}



function* generador()
{ 
    console.log("inicia el generador")
    yield cuadrado(0)
    yield cuadrado(1)
    yield cuadrado(3)
    yield cuadrado(4)
    yield cuadrado(5)
    yield cuadrado(7)
    console.log("termina el generador")
}
let gen = generador()
let next = gen.next()

for (const iterator of gen) {
    console.log(iterator)
}