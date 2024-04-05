// Desafío del Juego de Rol:
                // Crea una función constructora llamada Personaje que acepte parámetros para el nombre, 
                // la clase y los atributos (por ejemplo, fuerza, agilidad, inteligencia) de un personaje
                //  de un juego de rol.
                // Utiliza la destructuración para manejar los atributos y un parámetro rest para manejar
                //  cualquier cantidad de atributos adicionales. 
                // Agrega un método presentar que imprima en la consola una presentación del personaje, 
                // incluyendo su nombre, clase y atributos.
                // Luego, crea al menos dos instancias de Personaje con diferentes atributos y clases, 
                // y llama al método presentar en ambas instancias para verificar que funcione correctamente.
                // ¡Este desafí o te permitirá crear tus propios personajes de juego de rol en JavaScript!

function Personaje(nombre,clase,fuerza,agilidad,resistencia,inteligencia,...e) 
    {
        this.nombre=nombre
        this.clase=clase
        this.fuerza=fuerza
        this.agilidad=agilidad
        this.resistencia=resistencia
        this.inteligencia=inteligencia
        this.presentar=()=>console.log(`Soy ${this.nombre}, un valiente ${this.clase} con 
                        ${this.fuerza}puntos de fuerza, ${this.inteligencia} puntos de inteligencia
                        ${this.agilidad}puntos de agilidad y ${this.resistencia} puntos de resistencia`);
    }

const guerrero= new Personaje("Jason","Guerrero",10,5,12,1)
const mago= new Personaje("Alex","Hechicero",3,10,4,20)
guerrero.presentar()
mago.presentar()