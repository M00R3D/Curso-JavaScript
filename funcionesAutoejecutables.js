const ObjetoEjecutable = function() {
    // Constructor
    (function() {
        console.log("1ra funcion anonima autoejecutable")
        console.log(this) // En el contexto de un constructor, `this` hace referencia al objeto que se está creando.
    })();

    (function(d, w, c) {
        console.log("2da funcion anonima autoejecutable");
        console.log(d, w, c)
        c.log("log del parametro c")
    })(document, window, console)
}

export { ObjetoEjecutable }
