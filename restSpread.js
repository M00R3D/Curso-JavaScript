function sumar(a,b,...c) ///si ponemos ... significa que declaramos un parametro
{               ///un parametro del tipo rest
    let resultado=a+b
    c.forEach(function(n) {
        resultado+=c
    })

    return resultado
}