                // La clase recibirá un objeto al momento de instanciarse con los siguentes datos
                // : id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
                //   - Todos los datos del objeto son obligatorios.
                s//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
                //      7 restantes números.
                //   - Valida que el título no rebase los 100 caracteres.
                //   - Valida que el director no rebase los 50 caracteres.
                //   - Valida que el año de estreno sea un número entero de 4 dígitos.
                //   - Valida que el país o paises sea introducidos en forma de arreglo.
                //   - Valida que los géneros sean introducidos en forma de arreglo.
                //   - Valida que los géneros introducidos esten dentro de los géneros 
                //      aceptados*.
                //   - Crea un método estático que devuelva los géneros aceptados*.
                //   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
                //     decimal de una posición.
                //   - Crea un método que devuelva toda la ficha técnica de la película.
                //   - Apartir de un arreglo con la información de 3 películas genera 3 
                //     instancias de la clase de forma automatizada e imprime la ficha técnica 
                //     de cada película.    


class Pelicula
{
    constructor(imdb, titulo, director, anio, pais, genero, clasificacion) {
        if (typeof imdb === "string" && /^([A-Za-z]{2})(\d{7})$/.test(imdb)) {this.imdb = imdb} 
        else {this.imdb = "indefinido"}

        if (typeof titulo === "string" && titulo.length > 0 && titulo.length <= 100) {this.titulo = titulo}
        else {this.titulo = "indefinido"}

        if (typeof director === "string" && director.length > 0 && director.length <= 50) {this.director = director}
        else {this.director = "indefinido"}

        if (Number.isInteger(anio) && anio.toString().length === 4){this.anio = anio}
        else {this.anio = undefined}

        if (Array.isArray(pais)) {this.pais = pais}
        else {this.pais = "indefinido"}

        const generosAceptados = ["acción", "aventura", "comedia", "drama", "terror", "ciencia ficción", "romance", "documental"]
        if (Array.isArray(genero) && genero.every(g => generosAceptados.includes(g))) {this.genero = genero} 
        else {this.genero = "indefinido"}

        if (typeof clasificacion === "number" && clasificacion >= 0 && clasificacion <= 10){this.clasificacion = parseFloat(clasificacion.toFixed(1))}
        else{this.clasificacion = "indefinido"}
    }
    static obtenerGenerosAceptados() {return ["acción", "aventura", "comedia", "drama", "terror", "ciencia ficción", "romance", "documental"]}
    ficha(){
    return `imdb:${this.imdb}, titulo:${this.titulo}, director:${this.director}, anio:${this.anio}, pais:${this.pais}, genero:${this.genero}, clasificacion:${this.clasificacion}`
    }
    static generarPeliculasDesdeArreglo= function(arrPeliculas) {
        const peliculas = [];
        for (const pelicula of arrPeliculas) {
            peliculas.push(new Pelicula(
                pelicula.imdb,pelicula.titulo,pelicula.director,pelicula.anio
                ,pelicula.pais,pelicula.genero,pelicula.clasificacion
            ));
        }
        return peliculas;
    }
}


const informacionPeliculas = [
    { 
        imdb: "tt0111161",
        titulo: "The Shawshank Redemption",
        director: "Frank Darabont",
        anio: 1994,
        pais: ["Estados Unidos"],
        genero: ["drama"],
        clasificacion: 9.3
    },
    { 
        imdb: "tt0068646",
        titulo: "The Godfather",
        director: "Francis Ford Coppola",
        anio: 1972,
        pais: ["Estados Unidos"],
        genero: ["crimen", "drama"],
        clasificacion: 9.2
    },
    { 
        imdb: "tt0071562",
        titulo: "The Godfather: Part II",
        director: "Francis Ford Coppola",
        anio: 1974,
        pais: ["Estados Unidos"],
        genero: ["crimen", "drama"],
        clasificacion: 9.0
    }
]


const peliculas = Pelicula.generarPeliculasDesdeArreglo(informacionPeliculas)

for (const a of peliculas) {
    console.log(a.ficha())
}
