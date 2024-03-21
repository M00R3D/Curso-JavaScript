let nombre = "Jason"
let apellido ="AnDerSon"
let hola = new String("hola mundo")
console.log(hola," ",nombre,apellido);
let lorem = "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
let demostrarTrim = "                 Esta cadena sera impresa sin espacios alrededor gracias al metodo trim                        "

//al haber creado la variable hola, con un constructor oficial, en lugar de unicamente desginarle su tipo de valor 
//por lo debilmente tipado del lenguaje, esta se divide como una cadena de texto y en la consola puedo ver las posiciones de cada
//una de los caracteres que conforman el string
console.log
(
    nombre.length,
    apellido.length,//length nos regresara el numero de caracteres que tiene una cadena
    hola.length,
    nombre.toUpperCase(),//toUpperCase nos regresara una cadena en mayusuculas
    apellido.toLowerCase(),//toLowerCase nos regresara una cadena en minusuculas
    lorem.includes("dolor"),
    lorem.includes("jason"),//includes nos ayuda a saber si una cadena incluye otra especificada dentro del parametro
    demostrarTrim.trim(),//trim nos ayuda a quitar espacios afuera del texto si es que los tiene
    lorem.split(" "),
    lorem.split(",")//split nos ayuda a separar cadenas por el caracteer o la cadena que pongamos como parametro
)